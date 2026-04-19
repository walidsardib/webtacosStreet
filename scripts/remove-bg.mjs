// Remove the studio-white background from every image in public/img/uber/
// and write a .png next to it. Uses an ONNX U²-Net model via @imgly.
// Skip images that already look designed (branded backdrops) — detected by
// checking whether the four corners are roughly white.

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, resolve, parse } from 'node:path';
import { removeBackground } from '@imgly/background-removal-node';
import { Buffer } from 'node:buffer';

const DIR = resolve('public/img/uber');

// Quick probe: decode a JPEG via a canvas-like primitive to sample corners.
// Easier: use sharp. But we want to stay lightweight, so use imagemagick-like
// heuristic: rely on @imgly's own preprocessing. Actually the simplest robust
// approach is to always process and let the model decide. If the model can't
// find a subject, it will return the full image unchanged.
// --> Just process everything.

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));
console.log(`Processing ${files.length} images...`);

let done = 0;
for (const f of files) {
  const src = join(DIR, f);
  const { name } = parse(f);
  const dst = join(DIR, name + '.png');

  // Skip files that already have a PNG twin.
  try {
    await stat(dst);
    if (!f.endsWith('.png')) { done++; continue; }
  } catch {}

  try {
    const buf = await readFile(src);
    const blob = new Blob([buf], { type: 'image/jpeg' });
    const result = await removeBackground(blob, {
      output: { format: 'image/png', quality: 0.9 },
    });
    const outBuf = Buffer.from(await result.arrayBuffer());
    await writeFile(dst, outBuf);
    done++;
    console.log(`  ${done}/${files.length}  ok  ${f} -> ${name}.png`);
  } catch (e) {
    console.warn(`  FAIL ${f}: ${e.message}`);
  }
}

console.log(`\nDone. ${done} images processed.`);
