'use client';

import { useState, useEffect } from 'react';

export default function CookieSettings() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    setConsent(savedConsent);
  }, []);

  const handleChangePreference = () => {
    localStorage.removeItem('cookie-consent');
    window.location.reload();
  };

  if (consent === null) {
    return (
      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
        <p className="text-gray-600 dark:text-gray-400">Loading preferences...</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-8 border-2 border-gold/20">
      <h3 className="text-2xl font-bold text-primary-dark dark:text-gold mb-4">
        Your Cookie Preferences
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-600 rounded-lg">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100">Essential Cookies</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Required for the website to function</p>
          </div>
          <span className="text-green-600 dark:text-green-400 font-bold">Always Active</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-600 rounded-lg">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100">Analytics Cookies</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Help us understand how you use our site</p>
          </div>
          <span className={`font-bold ${consent === 'accepted' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {consent === 'accepted' ? 'Enabled' : 'Disabled'}
          </span>
        </div>

        <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Current preference: <strong className="text-gray-800 dark:text-gray-100">{consent === 'accepted' ? 'All cookies accepted' : 'Only essential cookies'}</strong>
          </p>
          <button
            onClick={handleChangePreference}
            className="bg-gradient-to-r from-gold to-gold-light text-primary-dark px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
          >
            Change Cookie Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
