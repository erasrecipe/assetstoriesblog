/**
 * Image fallback utilities for book covers
 * Provides fallback chain: OpenLibrary → Google Books → Placeholder
 */

/**
 * Generate Google Books API thumbnail URL from ISBN
 * Uses Google Books API which doesn't require authentication for cover images
 */
export function getGoogleBooksCoverUrl(isbn: string): string {
  // Clean ISBN (remove hyphens)
  const cleanIsbn = isbn.replace(/-/g, '');
  
  // Google Books API endpoint for book covers
  // Using direct thumbnail API endpoint (no API key needed for covers)
  return `https://books.google.com/books/content?id=_&printsec=frontcover&img=1&zoom=1&isbn=${cleanIsbn}`;
}

/**
 * Get fallback image URL
 * Returns a nice placeholder if all else fails
 */
export function getPlaceholderCoverUrl(title: string): string {
  // Create a clean, short version of the title (max 30 chars)
  const shortTitle = title.length > 30 ? title.substring(0, 27) + '...' : title;
  const encodedTitle = encodeURIComponent(shortTitle);
  
  // Using professional book cover style placeholder
  // Purple gradient background with white text
  return `https://via.placeholder.com/300x450/667eea/ffffff?text=${encodedTitle}`;
}

/**
 * Get complete fallback chain for a book cover
 */
export function getBookCoverWithFallback(primaryUrl: string | null, isbn: string, title: string): string {
  // If primary URL exists and is not a placeholder, use it
  if (primaryUrl && !primaryUrl.includes('placeholder')) {
    return primaryUrl;
  }
  
  // Fallback to Google Books
  if (isbn && isbn !== '000-0000000000') {
    return getGoogleBooksCoverUrl(isbn);
  }
  
  // Last resort: placeholder
  return getPlaceholderCoverUrl(title);
}

/**
 * Check if an image URL is likely to fail
 */
export function isPlaceholderUrl(url: string): boolean {
  return url.includes('placeholder') || url.includes('000-0000000000');
}
