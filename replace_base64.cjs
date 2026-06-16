const fs = require('fs');

// Read the base64 string
const base64Str = Buffer.from(fs.readFileSync('public/logo.png')).toString('base64');
const dataUrl = `data:image/png;base64,${base64Str}`;

// Read App.tsx
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace the specific URLs with the data URL
content = content.replaceAll(
  'https://ais-pre-hfxbppiolkrsz2xj66iwwa-90496233201.asia-southeast1.run.app/logo.png',
  dataUrl
);

// Write back to App.tsx
fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx updated with inline base64 image!');
