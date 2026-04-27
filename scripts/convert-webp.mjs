// Converts all JPEG/PNG images in assets/images/ to WebP
// Run once: node convert-webp.mjs

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const ROOT = './assets/images';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

const all = await walk(ROOT);
const targets = all.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

for (const src of targets) {
  const dest = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const ext = extname(src).toLowerCase();
  const quality = (ext === '.png') ? 85 : 82;
  try {
    await sharp(src).webp({ quality }).toFile(dest);
    const before = (await stat(src)).size;
    const after = (await stat(dest)).size;
    const pct = Math.round((1 - after / before) * 100);
    console.log(`✓ ${basename(src)} → ${basename(dest)}  (${Math.round(before/1024)}K → ${Math.round(after/1024)}K, -${pct}%)`);
  } catch (e) {
    console.error(`✗ ${src}: ${e.message}`);
  }
}
console.log('\nDone.');
