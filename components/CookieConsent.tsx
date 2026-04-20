'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Trigger event for Google Analytics to load
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'accepted' }));
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
    // Trigger event to ensure GA doesn't load
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'rejected' }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 animate-slide-up">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary-dark to-primary-darker dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-2xl border border-gold/30">
        <div className="p-4 sm:p-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Icon and Text */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🍪</span>
                <h3 className="text-base sm:text-lg font-bold text-gold">Cookie Consent</h3>
              </div>
              <p className="text-gray-200 dark:text-gray-300 text-xs sm:text-sm leading-snug">
                We use cookies to analyze traffic.{' '}
                <Link href="/privacy-policy" className="text-gold hover:text-gold-light underline">
                  Privacy
                </Link>
                {' • '}
                <Link href="/cookie-policy" className="text-gold hover:text-gold-light underline">
                  Cookies
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-2 w-full lg:w-auto">
              <button
                onClick={handleAccept}
                className="bg-gradient-to-r from-gold to-gold-light text-primary-dark px-5 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all whitespace-nowrap"
              >
                Accept
              </button>
              <button
                onClick={handleReject}
                className="bg-gray-700 dark:bg-gray-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-gray-600 dark:hover:bg-gray-500 transition-all whitespace-nowrap"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
