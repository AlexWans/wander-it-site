import sharp from 'sharp';
import { readFileSync } from 'fs';

// Favicon SVG — read from favicon.svg (edited manually, do not overwrite)
const faviconSvg = readFileSync('./favicon.svg', 'utf8');

await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile('./favicon.png');
await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile('./apple-touch-icon.png');

// Google Business logo — full logo all brown on blue
const fullLogoSvg = readFileSync('./assets/logo/WANDERIT_2couleurs.svg', 'utf8')
  .replace(/fill="white"/g, `fill="#743720"`)
  .replace(/style="fill-rule:evenodd;clip-rule:evenodd;/, `style="background:#B1DCED;fill-rule:evenodd;clip-rule:evenodd;`);

await sharp(Buffer.from(fullLogoSvg)).resize(1200, 630, { fit: 'contain', background: { r: 177, g: 220, b: 237, alpha: 1 } }).png().toFile('./assets/logo/logo-google-business.png');

console.log('✓ favicon.svg, favicon.png, apple-touch-icon.png, logo-google-business.png générés');
