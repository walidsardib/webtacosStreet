// Download each product image into public/img/uber/<slug>.jpg

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { join, resolve } from 'node:path';

const OUT_DIR = resolve('public/img/uber');
await mkdir(OUT_DIR, { recursive: true });

const products = JSON.parse(await readFile('scripts/uber-products.json', 'utf8'));

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

const mapping = [];
for (const p of products) {
  const ext = (p.imageUrl.match(/\.(jpe?g|png|webp)(?:\?|$)/i) || ['', 'jpg'])[1].toLowerCase();
  const filename = `${slug(p.name) || 'item'}.${ext}`;
  const dest = join(OUT_DIR, filename);
  try {
    const res = await fetch(p.imageUrl);
    if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
    await pipeline(res.body, createWriteStream(dest));
    mapping.push({ name: p.name, price: p.price, description: p.description, file: `/img/uber/${filename}` });
    console.log(`  ok  ${p.name}  ->  ${filename}`);
  } catch (e) {
    console.warn(`  FAIL ${p.name}: ${e.message}`);
  }
}

await writeFile('scripts/uber-manifest.json', JSON.stringify(mapping, null, 2));
console.log(`\nDownloaded ${mapping.length}/${products.length} images.`);
console.log(`Manifest: scripts/uber-manifest.json`);
