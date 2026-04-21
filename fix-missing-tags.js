const fs = require('fs');
const path = require('path');

const comparisonsDir = path.join(__dirname, 'data/comparisons');
const files = fs.readdirSync(comparisonsDir).filter(f => f.endsWith('.json'));

const affiliateId = 'assetweb-20';
let fixed = 0;

files.forEach(file => {
  const filePath = path.join(comparisonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace Amazon URLs without the tag
  const amazonUrlRegex = /https:\/\/www\.amazon\.com\/dp\/[A-Z0-9]+(?!.*tag=)/gi;
  const matches = content.match(amazonUrlRegex);
  
  if (matches) {
    // Replace all URLs without tag
    content = content.replace(amazonUrlRegex, (url) => `${url}?tag=${affiliateId}`);
    fs.writeFileSync(filePath, content);
    fixed++;
  }
});

console.log(`Fixed ${fixed} files`);