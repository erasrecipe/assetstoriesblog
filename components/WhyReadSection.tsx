interface WhyReadSectionProps {
  book1Title: string;
  book2Title: string;
  book1Reasons: string[];
  book2Reasons: string[];
}

export default function WhyReadSection({
  book1Title,
  book2Title,
  book1Reasons,
  book2Reasons,
}: WhyReadSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Book 1 */}
      <div className="bg-amber-50/30 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-100/50 dark:border-gray-600">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark dark:text-gold mb-6">{book1Title}</h3>
        <ul className="space-y-4">
          {book1Reasons.map((reason, index) => (
            <li key={index} className="flex items-start group">
              <span className="text-gold dark:text-gold-light text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0 font-bold group-hover:scale-110 transition-transform">•</span>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed pt-0.5 text-base sm:text-lg">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Book 2 */}
      <div className="bg-amber-50/30 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-100/50 dark:border-gray-600">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark dark:text-gold mb-6">{book2Title}</h3>
        <ul className="space-y-4">
          {book2Reasons.map((reason, index) => (
            <li key={index} className="flex items-start group">
              <span className="text-gold dark:text-gold-light text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0 font-bold group-hover:scale-110 transition-transform">•</span>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed pt-0.5 text-base sm:text-lg">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
