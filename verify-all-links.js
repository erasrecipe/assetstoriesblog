const fs = require('fs');
const path = require('path');

const comparisonsDir = path.join(__dirname, 'data/comparisons');
const files = fs.readdirSync(comparisonsDir).filter(f => f.endsWith('.json'));

const affiliateId = 'assetweb-20';

let totalAmazonUrls = 0;
let urlsWithTag = 0;
let urlsWithoutTag = 0;
const filesWithIssues = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(comparisonsDir, file), 'utf8');
  
  // Find all Amazon product URLs
  const amazonUrlRegex = /https:\/\/www\.amazon\.com\/dp\/[A-Z0-9]+/gi;
  const matches = content.match(amazonUrlRegex) || [];
  
  if (matches.length > 0) {
    // Check if any are missing the tag
    const missingTag = matches.filter(url => !url.includes('tag='));
    
    if (missingTag.length > 0) {
      filesWithIssues.push({ file, missing: missingTag });
      urlsWithoutTag += missingTag.length;
    } else {
      urlsWithTag += matches.length;
    }
    totalAmazonUrls += matches.length;
  }
});

console.log('=== AFFILIATE LINK VERIFICATION ===');
console.log(`Total Amazon URLs found: ${totalAmazonUrls}`);
console.log(`URLs WITH affiliate tag: ${urlsWithTag}`);
console.log(`URLs WITHOUT affiliate tag: ${urlsWithoutTag}`);
console.log('');

if (filesWithIssues.length > 0) {
  console.log('FILES WITH ISSUES:');
  filesWithIssues.forEach(f => {
    console.log(`${f.file}: ${f.missing.join(', ')}`);
  });
} else {
  console.log('✅ ALL LINKS HAVE AFFILIATE TAG!');
}