const fs = require('fs');
const path = require('path');

const comparisonsDir = path.join(__dirname, 'data/comparisons');
const files = fs.readdirSync(comparisonsDir).filter(f => f.endsWith('.json'));

let placeholders = 0;
let books = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(comparisonsDir, file), 'utf8');
  const matches = content.match(/"amazonUrl":\s*"[^"]*PLACEHOLDER[^"]*"/g) || [];
  if (matches.length > 0) {
    placeholders += matches.length;
    books++;
  }
});

console.log(`Files with placeholders: ${books}`);
console.log(`Remaining placeholders: ${placeholders}`);