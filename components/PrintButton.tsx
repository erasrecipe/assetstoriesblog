'use client';

import { useState } from 'react';

export default function PrintButton() {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 600);
  };

  return (
    <div className="fixed top-20 right-4 sm:top-24 sm:right-6 z-50 no-print">
      <button
        onClick={handlePrint}
        disabled={isPrinting}
        className="group flex items-center gap-1.5 bg-gradient-to-r from-gold to-gold-light text-primary-dark px-3 py-1.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white hover:border-gold-light disabled:opacity-50 hover:from-gold-light hover:to-gold"
        title="Print this comparison"
      >
        <svg 
          className={`w-5 h-5 transition-all duration-500 ${
            isPrinting ? 'animate-bounce' : 'group-hover:animate-spin'
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        <span className={`hidden sm:inline ${isPrinting ? 'animate-pulse' : ''}`}>
          {isPrinting ? 'Printing...' : 'Print'}
        </span>
      </button>
    </div>
  );
}
