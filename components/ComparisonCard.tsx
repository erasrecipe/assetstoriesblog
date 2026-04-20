import Link from 'next/link';
import { ComparisonMetadata } from '@/types/comparison';

interface ComparisonCardProps {
  comparison: ComparisonMetadata;
}

export default function ComparisonCard({ comparison }: ComparisonCardProps) {
  return (
    <Link 
      href={`/compare/${comparison.slug}`}
      className="group block bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gold/30 hover:border-gold dark:border-gold/40 dark:hover:border-gold-light shadow-md"
    >
      <div className="flex flex-col items-center justify-center mb-3 space-y-2">
        <div className="text-center w-full">
          <p className="font-bold text-lg tracking-wide text-primary-dark dark:text-white group-hover:scale-110 transition-all duration-300 leading-snug font-serif">
            {comparison.book1Title}
          </p>
        </div>
        
        <div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary-dark font-bold text-sm shadow-md group-hover:rotate-180 transition-transform duration-500">
            VS
          </div>
        </div>
        
        <div className="text-center w-full">
          <p className="font-bold text-lg tracking-wide text-primary-dark dark:text-white group-hover:scale-110 transition-all duration-300 leading-snug font-serif">
            {comparison.book2Title}
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-300 dark:border-gray-500 pt-2 mt-2">
        <div className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-400">
          <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full font-semibold text-xs">
            {comparison.category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}
