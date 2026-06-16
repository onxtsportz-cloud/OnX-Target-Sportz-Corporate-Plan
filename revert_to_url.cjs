const fs = require('fs');

const url = 'https://ais-pre-hfxbppiolkrsz2xj66iwwa-90496233201.asia-southeast1.run.app/logo.png';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Remove the constant definition
content = content.replace(/const LOGO_BASE64 = ".*?";\n/s, '');

// Replace the source attributes
content = content.replaceAll('src={LOGO_BASE64}', `src="${url}"`);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx restored to rely on HTTPS url');
