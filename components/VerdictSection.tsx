'use client';

import { Verdict } from '@/types/comparison';
import { useState } from 'react';

interface VerdictSectionProps {
  verdict: Verdict;
}

export default function VerdictSection({ verdict }: VerdictSectionProps) {
  const [isCelebrating, setIsCelebrating] = useState(false);

  return (
    <section className="bg-gradient-to-br from-amber-50/40 via-orange-50/30 to-amber-50/40 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-6 sm:p-10 shadow-2xl border-2 border-gold/30 dark:border-gold/20">
      <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gold text-center">
        🏆 The Verdict
      </h3>
      
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
        <p className="text-base sm:text-xl leading-relaxed sm:leading-loose text-gray-800 dark:text-gray-400 text-left">
          {verdict.summary}
        </p>
        
        <p className="text-base sm:text-xl leading-relaxed sm:leading-loose text-gray-800 dark:text-gray-400 text-left">
          {verdict.recommendation}
        </p>
      </div>
      
      <div className="mt-6 sm:mt-8 flex justify-center">
        <div 
          className="inline-block relative"
          onMouseEnter={() => setIsCelebrating(true)}
          onMouseLeave={() => setIsCelebrating(false)}
        >
        {/* Confetti Effects */}
        {isCelebrating && (
          <>
            <span className="absolute -top-4 -left-4 text-3xl animate-bounce">🎉</span>
            <span className="absolute -top-4 -right-4 text-3xl animate-bounce" style={{ animationDelay: '0.1s' }}>🎊</span>
            <span className="absolute -bottom-4 -left-4 text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="absolute -bottom-4 -right-4 text-3xl animate-bounce" style={{ animationDelay: '0.3s' }}>🎈</span>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-2xl animate-ping">⭐</span>
            <span className="absolute top-1/2 -left-8 -translate-y-1/2 text-2xl animate-spin">🌟</span>
            <span className="absolute top-1/2 -right-8 -translate-y-1/2 text-2xl animate-spin" style={{ animationDelay: '0.2s' }}>🌟</span>
          </>
        )}
        
          <div className={`bg-gradient-to-r from-gold to-gold-light text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl shadow-xl transition-all duration-300 cursor-pointer ${
            isCelebrating ? 'scale-110 shadow-2xl animate-pulse' : 'hover:scale-105'
          }`}>
            Winner: {verdict.winner} ⭐
          </div>
        </div>
      </div>
    </section>
  );
}
