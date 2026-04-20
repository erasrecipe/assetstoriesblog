import { Metadata } from 'next';
import { faqData } from '@/lib/faqData';

export const metadata: Metadata = {
  title: 'Finance FAQ - Frequently Asked Questions',
  description: 'Clear, honest answers to common questions about finance, investing, and money.',
};

export default function FinanceFAQPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-gold mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 text-center">
            Clear, honest answers to common questions about finance, investing, and money management.
          </p>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors list-none">
                    <span className="text-lg font-semibold text-primary-dark dark:text-gold pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 ml-2">
                      <svg 
                        className="w-5 h-5 text-gray-500 dark:text-gray-400 transform group-open:rotate-180 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-4 md:p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}