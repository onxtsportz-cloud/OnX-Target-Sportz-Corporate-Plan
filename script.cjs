const fs = require('fs');
const base64Str = Buffer.from(fs.readFileSync('public/logo.png')).toString('base64');
fs.writeFileSync('src/logoBase64.ts', `export const logoBase64 = "${base64Str}";\n`);
console.log('Done!');
