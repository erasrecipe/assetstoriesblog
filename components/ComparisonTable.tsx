import { ComparisonTableRow } from '@/types/comparison';

interface ComparisonTableProps {
  data: ComparisonTableRow[];
  book1Title?: string;
  book2Title?: string;
}

export default function ComparisonTable({ data, book1Title, book2Title }: ComparisonTableProps) {
  return (
    <div className="rounded-xl shadow-lg bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border-2 border-gold/20">
      {/* Mobile: Card layout with fixed headers */}
      <div className="md:hidden overflow-x-auto">
        <table className="w-full min-w-full border-collapse">
          <thead className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-800 sticky top-0">
            <tr>
              <th className="py-3 px-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100 border-r border-gray-300/50 dark:border-gray-600/50 w-1/3">
                Feature
              </th>
              <th className="py-3 px-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100 border-r border-gray-300/50 dark:border-gray-600/50 w-1/3">
                {book1Title || 'Book 1'}
              </th>
              <th className="py-3 px-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100 w-1/3">
                {book2Title || 'Book 2'}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr 
                key={index}
                className="border-b border-gray-200/50 dark:border-gray-700/50"
              >
                <td className="py-3 px-3 font-semibold text-primary-dark dark:text-gold-light text-sm border-r border-gray-200/50 dark:border-gray-700/50 align-top">
                  {row.feature}
                </td>
                <td className="py-3 px-3 text-gray-800 dark:text-gray-300 text-sm leading-relaxed border-r border-gray-200/50 dark:border-gray-700/50 align-top">
                  {row.book1}
                </td>
                <td className="py-3 px-3 text-gray-800 dark:text-gray-300 text-sm leading-relaxed align-top">
                  {row.book2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Desktop: Table layout */}
      <table className="hidden md:table w-full border-collapse">
        <thead className="border-b-2 border-gold/30 dark:border-gold-light/30">
          <tr>
            <th className="py-4 px-4 sm:px-6 text-left text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">Feature</th>
            <th className="py-4 px-4 sm:px-6 text-left text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">{book1Title || 'Book 1'}</th>
            <th className="py-4 px-4 sm:px-6 text-left text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">{book2Title || 'Book 2'}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr 
              key={index}
              className="border-b border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <td className="py-4 px-4 sm:px-6 font-semibold text-primary-dark dark:text-gold-light text-base sm:text-lg border-r border-gray-200/50 dark:border-gray-700/50">
                {row.feature}
              </td>
              <td className="py-4 px-4 sm:px-6 text-gray-800 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                {row.book1}
              </td>
              <td className="py-4 px-4 sm:px-6 text-gray-800 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                {row.book2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
