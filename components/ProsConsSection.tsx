interface ProsConsSectionProps {
  book1Title: string;
  book2Title: string;
  book1Strengths: string[];
  book1Weaknesses: string[];
  book2Strengths: string[];
  book2Weaknesses: string[];
}

export default function ProsConsSection({
  book1Title,
  book2Title,
  book1Strengths,
  book1Weaknesses,
  book2Strengths,
  book2Weaknesses,
}: ProsConsSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Book 1 */}
      <div className="bg-amber-50/30 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-100/50 dark:border-gray-600">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark dark:text-gold mb-6">{book1Title}</h3>
        
        {/* Strengths */}
        <div className="mb-6">
          <h4 className="text-lg sm:text-xl font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center">
            <span className="text-2xl mr-2">✓</span> Strengths
          </h4>
          <ul className="space-y-3">
            {book1Strengths.map((strength, index) => (
              <li key={index} className="flex items-start group">
                <span className="text-green-500 dark:text-green-400 text-xl mr-3 mt-1 group-hover:scale-125 transition-transform">✓</span>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Weaknesses */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center">
            <span className="text-2xl mr-2">✗</span> Weaknesses
          </h4>
          <ul className="space-y-3">
            {book1Weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start group">
                <span className="text-red-500 dark:text-red-400 text-xl mr-3 mt-1 group-hover:scale-125 transition-transform">✗</span>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Book 2 */}
      <div className="bg-amber-50/30 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-100/50 dark:border-gray-600">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark dark:text-gold mb-6">{book2Title}</h3>
        
        {/* Strengths */}
        <div className="mb-6">
          <h4 className="text-lg sm:text-xl font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center">
            <span className="text-2xl mr-2">✓</span> Strengths
          </h4>
          <ul className="space-y-3">
            {book2Strengths.map((strength, index) => (
              <li key={index} className="flex items-start group">
                <span className="text-green-500 dark:text-green-400 text-xl mr-3 mt-1 group-hover:scale-125 transition-transform">✓</span>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Weaknesses */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center">
            <span className="text-2xl mr-2">✗</span> Weaknesses
          </h4>
          <ul className="space-y-3">
            {book2Weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start group">
                <span className="text-red-500 dark:text-red-400 text-xl mr-3 mt-1 group-hover:scale-125 transition-transform">✗</span>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
