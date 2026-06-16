const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Find the data URL
const base64Str = Buffer.from(fs.readFileSync('public/logo.png')).toString('base64');
const dataUrl = `data:image/png;base64,${base64Str}`;

// Replace multiple instances back to a variable
content = content.replaceAll(`"${dataUrl}"`, 'LOGO_BASE64');

// Inject the constant at the top
const imports = `import { motion } from 'motion/react';
import { Target, Users, ShieldCheck, Crosshair, Award, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const LOGO_BASE64 = "${dataUrl}";
`;

content = content.replace(/import { motion }.*?\nimport {.*?lucide-react';\n/s, imports);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx cleaned up');
