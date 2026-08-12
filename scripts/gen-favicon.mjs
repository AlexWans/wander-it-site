import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

// Favicon SVG — read from favicon.svg (edited manually, do not overwrite)
const faviconSvg = readFileSync('./favicon.svg', 'utf8');

// 96 = multiple de 48, la taille recommandée par Google pour le favicon des SERP
await sharp(Buffer.from(faviconSvg)).resize(96, 96).png().toFile('./favicon.png');
await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile('./apple-touch-icon.png');

// favicon.ico multi-tailles — emplacement de repli que Google (et les vieux
// navigateurs) vont chercher quand ils n'exploitent pas les <link rel="icon">.
const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(
  icoSizes.map(async size => ({
    size,
    data: await sharp(Buffer.from(faviconSvg)).resize(size, size).png().toBuffer(),
  }))
);

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);                 // réservé
header.writeUInt16LE(1, 2);                 // type 1 = icône
header.writeUInt16LE(icoImages.length, 4);  // nombre d'images

const entries = Buffer.alloc(16 * icoImages.length);
let offset = header.length + entries.length;
icoImages.forEach(({ size, data }, i) => {
  const e = 16 * i;
  entries.writeUInt8(size, e);              // largeur
  entries.writeUInt8(size, e + 1);          // hauteur
  entries.writeUInt8(0, e + 2);             // couleurs de palette (0 = truecolor)
  entries.writeUInt8(0, e + 3);             // réservé
  entries.writeUInt16LE(1, e + 4);          // plans
  entries.writeUInt16LE(32, e + 6);         // bits par pixel
  entries.writeUInt32LE(data.length, e + 8);
  entries.writeUInt32LE(offset, e + 12);
  offset += data.length;
});

writeFileSync('./favicon.ico', Buffer.concat([header, entries, ...icoImages.map(i => i.data)]));

// Google Business logo — full logo all brown on blue
const fullLogoSvg = readFileSync('./assets/logo/WANDERIT_2couleurs.svg', 'utf8')
  .replace(/fill="white"/g, `fill="#743720"`)
  .replace(/style="fill-rule:evenodd;clip-rule:evenodd;/, `style="background:#B1DCED;fill-rule:evenodd;clip-rule:evenodd;`);

await sharp(Buffer.from(fullLogoSvg)).resize(1200, 630, { fit: 'contain', background: { r: 177, g: 220, b: 237, alpha: 1 } }).png().toFile('./assets/logo/logo-google-business.png');

console.log('✓ favicon.ico (16/32/48), favicon.png (96), apple-touch-icon.png (180), logo-google-business.png générés');
