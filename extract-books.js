const fs = require('fs');
const path = require('path');

const comparisonsDir = path.join(__dirname, 'data/comparisons');
const files = fs.readdirSync(comparisonsDir).filter(f => f.endsWith('.json'));

const books = new Map(); // title -> { author, isbn, placeholder }

files.forEach(file => {
  const content = fs.readFileSync(path.join(comparisonsDir, file), 'utf8');
  const data = JSON.parse(content.replace(/^\uFEFF/, ''));
  
  [data.book1, data.book2].forEach(book => {
    if (book && book.amazonUrl && book.amazonUrl.includes('PLACEHOLDER')) {
      const key = book.title.toLowerCase();
      if (!books.has(key)) {
        books.set(key, {
          title: book.title,
          author: book.author,
          isbn: book.isbn,
          placeholder: book.amazonUrl
        });
      }
    }
  });
});

console.log('Total unique books with placeholders:', books.size);
console.log('\n=== SAMPLE BOOKS ===\n');

let count = 0;
books.forEach((book, key) => {
  if (count < 30) {
    console.log(`"${book.title}"`);
    console.log(`  Author: ${book.author}`);
    console.log(`  ISBN: ${book.isbn}`);
    console.log(`  Placeholder: ${book.placeholder}`);
    console.log();
    count++;
  }
});

// Output all as JSON for processing
const bookArray = Array.from(books.values());
fs.writeFileSync('./unique_books.json', JSON.stringify(bookArray, null, 2));
console.log('\nSaved all books to unique_books.json');
