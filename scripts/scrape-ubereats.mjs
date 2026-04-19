// Scrape product images + names from an Uber Eats store page.
// Usage:  node scripts/scrape-ubereats.mjs <url>
// Output: public/img/uber/*.jpg  +  scripts/uber-manifest.json

import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { join, resolve } from 'node:path';

const URL = process.argv[2] || 'https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg';
const OUT_DIR = resolve('public/img/uber');
const MANIFEST = resolve('scripts/uber-manifest.json');

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  await pipeline(res.body, createWriteStream(dest));
}

(async () => {
  await mkdir(OUT_DIR, { recursive: true });

  const HEADLESS = process.env.HEADLESS === '1';
  const browser = await chromium.launch({
    headless: HEADLESS,
    args: ['--disable-blink-features=AutomationControlled'],
  });
  const ctx = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    locale: 'es-ES',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });
  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
  });
  const page = await ctx.newPage();

  console.log(`Loading ${URL}`);
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Uber Eats fires a reCAPTCHA for headless-looking traffic. We wait up to
  // 5 minutes for the real store page to appear — time for the human to solve
  // the captcha in the visible browser window. Detection: the store content
  // contains many tb-static images and the URL still points to /store/.
  console.log('\n>>> If a captcha appears in the browser, solve it now.');
  console.log('>>> Waiting up to 5 minutes for the menu to load...\n');

  const start = Date.now();
  const DEADLINE = 5 * 60 * 1000;
  while (Date.now() - start < DEADLINE) {
    const count = await page.evaluate(
      () => document.querySelectorAll('img[src*="tb-static"]').length,
    );
    if (count >= 5) {
      console.log(`Menu loaded (${count} tb-static images detected).`);
      break;
    }
    await page.waitForTimeout(2000);
  }

  // Dismiss cookies / age gates / location prompts if present.
  for (const sel of [
    'button:has-text("Aceptar")',
    'button:has-text("Accept")',
    'button:has-text("Acepto")',
    'button[aria-label*="ccept"]',
  ]) {
    const b = await page.$(sel);
    if (b) { try { await b.click({ timeout: 1500 }); } catch {} }
  }

  // Force-load all lazy images by scrolling.
  await page.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const step = () => {
        window.scrollBy(0, 800);
        y += 800;
        if (y < document.body.scrollHeight + 2000) setTimeout(step, 120);
        else r();
      };
      step();
    });
  });
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  // Debug: snapshot the rendered DOM + a screenshot to inspect what we got.
  await page.screenshot({ path: 'scripts/debug-ubereats.png', fullPage: true });
  const html = await page.content();
  await writeFile('scripts/debug-ubereats.html', html);
  console.log('Saved debug-ubereats.png and debug-ubereats.html for inspection.');

  // Extract (name, imageUrl) pairs. Uber Eats uses generic grids, so we
  // walk every <img> and pick the closest text heading in its ancestor chain.
  const items = await page.evaluate(() => {
    const out = [];
    const seen = new Set();
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img) => {
      const src = img.currentSrc || img.src;
      if (!src || !src.includes('tb-static') || seen.has(src)) return;
      // Skip icons / logos / tiny.
      const w = img.naturalWidth || img.width || 0;
      if (w && w < 120) return;
      // Walk up to find a heading/title node.
      let name = '';
      let n = img.parentElement;
      for (let i = 0; i < 8 && n; i++, n = n.parentElement) {
        const h = n.querySelector('h3, h4, [data-testid*="store-item-name"], span[data-testid*="name"]');
        if (h && h.textContent && h.textContent.trim().length > 1) {
          name = h.textContent.trim();
          break;
        }
      }
      if (!name) {
        name = (img.alt || '').trim();
      }
      if (!name) return;
      seen.add(src);
      out.push({ name, src });
    });
    return out;
  });

  console.log(`Found ${items.length} candidate images.`);
  await browser.close();

  const manifest = [];
  for (const it of items) {
    const base = slug(it.name) || 'item';
    const ext = (it.src.match(/\.(jpe?g|png|webp)(?:\?|$)/i) || ['', 'jpg'])[1].toLowerCase();
    let filename = `${base}.${ext}`;
    let n = 1;
    while (manifest.find((m) => m.file === filename)) {
      filename = `${base}-${++n}.${ext}`;
    }
    const dest = join(OUT_DIR, filename);
    try {
      await download(it.src, dest);
      manifest.push({ name: it.name, file: filename, src: it.src });
      console.log(`  ok  ${it.name}  ->  ${filename}`);
    } catch (e) {
      console.warn(`  FAIL ${it.name}: ${e.message}`);
    }
  }

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2));
  console.log(`\nSaved ${manifest.length} images to ${OUT_DIR}`);
  console.log(`Manifest: ${MANIFEST}`);
})();
