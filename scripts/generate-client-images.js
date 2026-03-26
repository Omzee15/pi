const fs = require('fs');
const path = require('path');

const CLIENT_IMAGES_FOLDER = 'client images';
const PUBLIC_DIR = path.join(__dirname, '..', 'public', CLIENT_IMAGES_FOLDER);
const OUTPUT_FILE = path.join(__dirname, '..', 'lib', 'client-images.ts');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];

function generateClientImages() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`Directory not found: ${PUBLIC_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(PUBLIC_DIR);
  const images = files
    .filter(file => imageExtensions.some(ext => file.toLowerCase().endsWith(ext)))
    .map(file => `/${encodeURIComponent(CLIENT_IMAGES_FOLDER)}/${encodeURIComponent(file)}`);

  const content = `// Auto-generated file - do not edit manually
// Run \`pnpm generate-client-images\` to update this file

export const clientImages = [
${images.map(img => `  '${img}',`).join('\n')}
];
`;

  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`Generated ${OUTPUT_FILE} with ${images.length} images`);
}

generateClientImages();
