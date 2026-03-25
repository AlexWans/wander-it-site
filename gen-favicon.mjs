import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#B1DCED"/>
  <text x="16" y="24" font-family="Georgia, serif" font-size="23" font-weight="700" fill="#743720" text-anchor="middle">W</text>
</svg>`;

await sharp(Buffer.from(svg)).resize(32, 32).png().toFile('./favicon.png');
await sharp(Buffer.from(svg)).resize(180, 180).png().toFile('./apple-touch-icon.png');
console.log('✓ favicon.png (32×32) et apple-touch-icon.png (180×180) générés');
