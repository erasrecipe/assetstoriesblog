'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Thanks for subscribing! Check your inbox for confirmation.');
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
        
        // Reset error after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please check your connection and try again.');
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary-darker via-primary-dark to-primary-light rounded-2xl p-8 text-white shadow-2xl">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-4xl">📬</span>
          <h3 className="text-3xl font-bold text-gold">
            Get New Comparisons First
          </h3>
        </div>
        <p className="text-gray-200 mb-6 text-lg">
          Join our book-loving community! Get notified when we publish new comparisons and exclusive reading recommendations.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-gold/50 disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? '✓ Subscribed!' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <div className={`mt-4 p-3 rounded-lg ${
            status === 'success' 
              ? 'bg-green-500/20 text-green-100 border border-green-500/50' 
              : 'bg-red-500/20 text-red-100 border border-red-500/50'
          }`}>
            {message}
          </div>
        )}

        <p className="text-gray-300 text-sm mt-4">
          No spam, ever. Unsubscribe anytime. 📚
        </p>
      </div>
    </div>
  );
}
