const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replaceAll('src=LOGO_BASE64', 'src={LOGO_BASE64}');
fs.writeFileSync('src/App.tsx', content);
console.log('Fixed src');
