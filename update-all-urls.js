const fs = require('fs');
const path = require('path');

const comparisonsDir = path.join(__dirname, 'data/comparisons');
const files = fs.readdirSync(comparisonsDir).filter(f => f.endsWith('.json'));

// Load the generated URLs
const bookUrls = JSON.parse(fs.readFileSync('./book_urls.json', 'utf8'));

// Create a lookup map by title
const urlMap = new Map();
bookUrls.forEach(book => {
  urlMap.set(book.title.toLowerCase(), book.url);
});

let updated = 0;
let skipped = 0;

files.forEach(file => {
  const filePath = path.join(comparisonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Clean BOM if present
  content = content.replace(/^\uFEFF/, '');
  
  const data = JSON.parse(content);
  
  [data.book1, data.book2].forEach(book => {
    if (book && book.amazonUrl && book.amazonUrl.includes('PLACEHOLDER')) {
      const titleKey = book.title.toLowerCase();
      const newUrl = urlMap.get(titleKey);
      
      if (newUrl) {
        book.amazonUrl = newUrl;
        modified = true;
      } else {
        // Try partial match
        for (const [key, url] of urlMap) {
          if (titleKey.includes(key) || key.includes(titleKey)) {
            book.amazonUrl = url;
            modified = true;
            break;
          }
        }
      }
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    // Add BOM back (required for some systems)
    fs.writeFileSync(filePath, '\ufeff' + JSON.stringify(data, null, 2));
    updated++;
  } else {
    skipped++;
  }
});

console.log(`Updated: ${updated} files`);
console.log(`Skipped (no changes): ${skipped} files`);
console.log('Done!');