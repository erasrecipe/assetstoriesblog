import fs from 'fs';
import path from 'path';
import { ComparisonData, ComparisonMetadata } from '@/types/comparison';

const comparisonsDirectory = path.join(process.cwd(), 'data/comparisons');

/**
 * Get all comparison slugs for static generation
 */
export function getAllComparisonSlugs(): string[] {
  const fileNames = fs.readdirSync(comparisonsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.json'))
    .map(fileName => fileName.replace(/\.json$/, ''));
}

/**
 * Get comparison data by slug
 */
export function getComparisonBySlug(slug: string): ComparisonData {
  const fullPath = path.join(comparisonsDirectory, `${slug}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Remove BOM (Byte Order Mark) if present
  let cleanedContents = fileContents.replace(/^\uFEFF/, '');
  // Find the last closing brace to handle extra content after JSON
  const lastBrace = cleanedContents.lastIndexOf('}');
  if (lastBrace !== -1) {
    cleanedContents = cleanedContents.substring(0, lastBrace + 1);
  }
  return JSON.parse(cleanedContents) as ComparisonData;
}

/**
 * Get all comparisons metadata for listing pages
 */
export function getAllComparisonsMetadata(): ComparisonMetadata[] {
  const slugs = getAllComparisonSlugs();
  const comparisons = slugs.map(slug => {
    const data = getComparisonBySlug(slug);
    return {
      slug: data.slug,
      title: data.title,
      category: data.category,
      lastUpdated: data.lastUpdated,
      book1Title: data.book1.title,
      book2Title: data.book2.title,
    };
  });
  
  // Sort by lastUpdated date, newest first
  return comparisons.sort((a, b) => {
    return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
  });
}

/**
 * Get comparisons by category
 */
export function getComparisonsByCategory(category: string): ComparisonMetadata[] {
  const allComparisons = getAllComparisonsMetadata();
  return allComparisons.filter(comp => comp.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const allComparisons = getAllComparisonsMetadata();
  const categories = allComparisons.map(comp => comp.category);
  return Array.from(new Set(categories));
}

/**
 * Get related comparisons (same category, excluding current)
 */
export function getRelatedComparisons(currentSlug: string, limit: number = 3): ComparisonMetadata[] {
  const currentComparison = getComparisonBySlug(currentSlug);
  const allComparisons = getAllComparisonsMetadata();
  
  // Filter by same category and exclude current comparison
  const related = allComparisons.filter(
    comp => comp.category === currentComparison.category && comp.slug !== currentSlug
  );
  
  // Return limited number
  return related.slice(0, limit);
}
