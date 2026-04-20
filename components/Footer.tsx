'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white mt-20 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/comparisons" className="text-gray-400 hover:text-gold transition-colors">
                  All Comparisons
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-gold transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-gray-400 hover:text-gold transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-gold transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-gold transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    localStorage.removeItem('cookie-consent');
                    window.location.reload();
                  }}
                  className="text-gray-400 hover:text-gold transition-colors text-left"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:themehrabmusa@gmail.com" className="text-gray-400 hover:text-gold transition-colors">
                  themehrabmusa@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Astra', serif" }}>
              <span className="text-white">Asset</span>
              <span className="text-gold"> Stories</span>
            </h3>
            <p className="text-gray-300 mb-3 italic text-sm">
              "We Talk About Finance, Books & AI"
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4">Our Team</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
            <div>
              <p className="text-gold font-semibold">Mehrab Musa</p>
              <p className="text-gray-400">Developer & Owner</p>
            </div>
            <div>
              <p className="text-gold font-semibold">Rufatul Islam</p>
              <p className="text-gray-400">Designer & Writer</p>
            </div>
            <div>
              <p className="text-gold font-semibold">Safial Muntasir</p>
              <p className="text-gray-400">Management & Writer</p>
            </div>
            <div>
              <p className="text-gold font-semibold">Shoyaib Dipto</p>
              <p className="text-gray-400">Budgeting & Writer</p>
            </div>
            <div>
              <p className="text-gold font-semibold">Abdullah Al Mamun</p>
              <p className="text-gray-400">Planner & Writer</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Asset Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
