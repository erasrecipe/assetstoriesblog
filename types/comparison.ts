export interface Book {
  title: string;
  subtitle: string;
  author: string;
  isbn: string;
  publishedYear: number;
  pages: number;
  rating: number;
  ratingCount: number;
  price: number;
  amazonUrl: string;
  coverImage: string;
  description: string;
}

export interface ComparisonTableRow {
  feature: string;
  book1: string;
  book2: string;
}

export interface Comparison {
  table: ComparisonTableRow[];
  book1Strengths: string[];
  book1Weaknesses: string[];
  book2Strengths: string[];
  book2Weaknesses: string[];
}

export interface Quotes {
  book1: string[];
  book2: string[];
}

export interface WhyRead {
  book1: string[];
  book2: string[];
}

export interface Verdict {
  winner: string;
  summary: string;
  recommendation: string;
}

export interface ComparisonData {
  slug: string;
  title: string;
  metaDescription: string;
  lastUpdated: string;
  category: string;
  book1: Book;
  book2: Book;
  comparison: Comparison;
  quotes: Quotes;
  whyRead: WhyRead;
  verdict: Verdict;
}

export interface ComparisonMetadata {
  slug: string;
  title: string;
  category: string;
  lastUpdated: string;
  book1Title: string;
  book2Title: string;
}
