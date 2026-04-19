// Parse Uber Eats __REACT_QUERY_STATE__ into a product list.
// The script tag content is a JSON object whose string values are JS-style
// escaped (\", \<, \>, \uXXXX, \\). After one round of JS-string unescape
// the content IS valid JSON.

import { readFile, writeFile } from 'node:fs/promises';

const html = await readFile('scripts/debug-ubereats.html', 'utf8');
const m = html.match(
  /<script type="application\/json" id="__REACT_QUERY_STATE__">([\s\S]*?)<\/script>/,
);
if (!m) throw new Error('__REACT_QUERY_STATE__ not found');

// Wrap as a JS string and let JSON.parse handle every escape in one pass.
let payload = JSON.parse('"' + m[1].trim() + '"');

// Uber URL-encodes backslashes inside embedded JSON strings (queryHash,
// metaJson, etc), producing broken JSON like `"foo %5C"bar%5C""`. Fix by
// swapping %5C back to \.
payload = payload.replace(/%5C"/g, '\\"').replace(/%5C/g, '\\\\');

let state;
try {
  state = JSON.parse(payload);
} catch (e) {
  // Pinpoint failure
  const pos = parseInt((e.message.match(/position (\d+)/) || [])[1] || '0', 10);
  console.error('JSON.parse failed at position', pos);
  console.error('context:', JSON.stringify(payload.slice(Math.max(0, pos - 60), pos + 60)));
  throw e;
}

const seen = new Set();
const products = [];

// Walk the whole state; any object with title + imageUrl pointing at
// tb-static is a menu item. Use price (cents) or priceTag.
function walk(node) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (const v of node) walk(v);
    return;
  }
  const img = node.imageUrl;
  const title = node.title;
  if (
    typeof img === 'string' &&
    typeof title === 'string' &&
    img.includes('tb-static') &&
    !seen.has(img)
  ) {
    let price = '';
    if (typeof node.priceTag === 'string' && node.priceTag) price = node.priceTag;
    else if (typeof node.price === 'number') price = (node.price / 100).toFixed(2) + ' €';
    // Skip obvious non-products.
    if (!title.startsWith('Tacos Street')) {
      seen.add(img);
      products.push({
        name: title,
        description: node.itemDescription || node.description || '',
        price,
        imageUrl: img,
      });
    }
  }
  for (const v of Object.values(node)) walk(v);
}

walk(state);

// Dedupe by name, keep first.
const byName = new Map();
for (const p of products) if (!byName.has(p.name)) byName.set(p.name, p);
const deduped = [...byName.values()];

console.log(`Found ${deduped.length} unique products:`);
for (const p of deduped) console.log(`  - ${p.name} ${p.price ? '(' + p.price + ')' : ''}`);

await writeFile('scripts/uber-products.json', JSON.stringify(deduped, null, 2));
console.log(`\nWrote scripts/uber-products.json`);
