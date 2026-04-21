const fs = require('fs');
const path = require('path');

const comparisonsDir = path.join(__dirname, 'data/comparisons');
const files = fs.readdirSync(comparisonsDir).filter(f => f.endsWith('.json'));

const placeholders = new Set();

files.forEach(file => {
  const content = fs.readFileSync(path.join(comparisonsDir, file), 'utf8');
  const matches = content.match(/"amazonUrl":\s*"[^"]*"/g) || [];
  matches.forEach(m => {
    if (m.includes('PLACEHOLDER')) {
      placeholders.add(m);
    }
  });
});

console.log('Total placeholders found:', placeholders.size);
console.log('\nUnique patterns:');
placeholders.forEach(p => console.log(p));
