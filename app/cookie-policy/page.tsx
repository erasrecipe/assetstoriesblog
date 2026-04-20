import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy - How We Use Cookies',
  description: 'Learn about how Asset Stories uses cookies and similar tracking technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-50/40 dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300 border border-amber-100 dark:border-gray-700">
          <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-4">Cookie Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: January 29, 2026</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            
            {/* Introduction */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">What Are Cookies?</h2>
              <p className="mb-3">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="mb-3">
                Cookies help us remember your preferences, understand how you use our site, and improve your overall experience on Asset Stories.
              </p>
              <p>
                This Cookie Policy explains what cookies are, how we use them, and how you can control them.
              </p>
            </section>

            {/* Why We Use Cookies */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Why We Use Cookies</h2>
              <p className="mb-3">We use cookies for several important reasons:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Remember Your Preferences:</strong> Such as your dark mode setting</li>
                <li><strong>Understand Site Usage:</strong> To see which pages and features are most popular</li>
                <li><strong>Improve Performance:</strong> To make our site faster and more reliable</li>
                <li><strong>Enhance Security:</strong> To protect against malicious activity</li>
                <li><strong>Analyze Traffic:</strong> To understand how visitors find and use our site</li>
                <li><strong>Support Affiliate Links:</strong> To track clicks and earn commissions (see our <Link href="/affiliate-disclosure" className="text-primary-dark dark:text-gold hover:underline font-semibold">Affiliate Disclosure</Link>)</li>
              </ul>
            </section>

            {/* Types of Cookies We Use */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-amber-50/50 dark:bg-gray-600 rounded-lg p-4 border border-amber-200 dark:border-gray-500">
                  <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2 flex items-center">
                    <span className="text-2xl mr-2">🔒</span>
                    Essential Cookies (Required)
                  </h3>
                  <p className="mb-2">
                    These cookies are necessary for the website to function properly. Without these cookies, certain features would not work.
                  </p>
                  <p className="text-sm mb-2"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>localStorage - Dark Mode:</strong> Remembers your dark/light mode preference</li>
                    <li><strong>Session Cookies:</strong> Maintain your browsing session</li>
                    <li><strong>Security Cookies:</strong> Protect against fraudulent activity</li>
                  </ul>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Can you disable these?</strong> No - these are required for the site to work.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-amber-50/50 dark:bg-gray-600 rounded-lg p-4 border border-amber-200 dark:border-gray-500">
                  <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2 flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    Analytics Cookies (Optional)
                  </h3>
                  <p className="mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <p className="text-sm mb-2"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Google Analytics:</strong> Tracks page views, bounce rate, time on site</li>
                    <li><strong>_ga, _gid:</strong> Used to distinguish unique users</li>
                    <li><strong>_gat:</strong> Used to throttle request rate</li>
                  </ul>
                  <p className="text-sm mt-2 mb-2"><strong>What we learn:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Which book comparisons are most popular</li>
                    <li>How long visitors spend reading our content</li>
                    <li>Which pages have the highest bounce rate</li>
                    <li>Where our traffic comes from (search, social media, etc.)</li>
                  </ul>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Can you disable these?</strong> Yes - see "Managing Cookies" below.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="bg-amber-50/50 dark:bg-gray-600 rounded-lg p-4 border border-amber-200 dark:border-gray-500">
                  <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2 flex items-center">
                    <span className="text-2xl mr-2">⚙️</span>
                    Functional Cookies (Optional)
                  </h3>
                  <p className="mb-2">
                    These cookies enable enhanced functionality and personalization, such as remembering your choices and preferences.
                  </p>
                  <p className="text-sm mb-2"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Theme Preference:</strong> Light/dark mode selection</li>
                    <li><strong>Language Preference:</strong> Your preferred language (if multi-language support added)</li>
                    <li><strong>Layout Preferences:</strong> Any customization options</li>
                  </ul>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Can you disable these?</strong> Yes, but you'll need to reset preferences each visit.
                  </p>
                </div>

                {/* Affiliate/Marketing Cookies */}
                <div className="bg-amber-50/50 dark:bg-gray-600 rounded-lg p-4 border border-amber-200 dark:border-gray-500">
                  <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2 flex items-center">
                    <span className="text-2xl mr-2">🔗</span>
                    Affiliate Cookies (Optional)
                  </h3>
                  <p className="mb-2">
                    These cookies are used to track affiliate link clicks and purchases so we can earn commissions that support the site.
                  </p>
                  <p className="text-sm mb-2"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Amazon Associates Cookies:</strong> Track clicks on Amazon affiliate links (24-hour duration)</li>
                    <li><strong>Affiliate Tracking IDs:</strong> Help attribute purchases to our referrals</li>
                  </ul>
                  <p className="text-sm mt-2 mb-2">
                    <strong>Important:</strong> These cookies don't increase your price or collect personal information. They only tell Amazon you came from our site. Learn more in our{' '}
                    <Link href="/affiliate-disclosure" className="text-primary-dark dark:text-gold hover:underline font-semibold">Affiliate Disclosure</Link>.
                  </p>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Can you disable these?</strong> Yes - see below.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Third-Party Cookies</h2>
              <p className="mb-3">
                Some cookies on our site are set by third-party services that we use:
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mt-4 mb-2">Google Analytics</h3>
              <p className="mb-2">
                We use Google Analytics to understand how visitors use our site. Google Analytics sets cookies to track anonymized user data.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
                <li>Privacy Policy: <a href="https://policies.google.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-dark dark:text-gold hover:underline">Google Privacy Policy</a></li>
                <li>Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-dark dark:text-gold hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mt-4 mb-2">Amazon Associates</h3>
              <p className="mb-2">
                When you click our Amazon affiliate links, Amazon sets cookies to track the referral. These cookies typically expire after 24 hours.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Privacy Policy: <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer" className="text-primary-dark dark:text-gold hover:underline">Amazon Privacy Notice</a></li>
              </ul>
            </section>

            {/* Cookie Duration */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">How Long Do Cookies Last?</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-primary-dark dark:text-gold-light mb-1">Session Cookies</h3>
                  <p className="text-sm">
                    <strong>Duration:</strong> Deleted when you close your browser<br/>
                    <strong>Purpose:</strong> Maintain your current browsing session
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary-dark dark:text-gold-light mb-1">Persistent Cookies</h3>
                  <p className="text-sm">
                    <strong>Duration:</strong> Vary from 24 hours to 2 years<br/>
                    <strong>Purpose:</strong> Remember your preferences between visits
                  </p>
                </div>
                
                <div className="bg-amber-50/50 dark:bg-gray-600 rounded-lg p-3 border border-amber-200 dark:border-gray-500 mt-3">
                  <p className="text-sm font-semibold mb-2">Specific Cookie Durations:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Dark Mode Preference (localStorage):</strong> Permanent (until cleared)</li>
                    <li><strong>Google Analytics (_ga):</strong> 2 years</li>
                    <li><strong>Google Analytics (_gid):</strong> 24 hours</li>
                    <li><strong>Amazon Affiliate:</strong> 24 hours</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="bg-gold/10 border-l-4 border-gold rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">How to Manage Cookies</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Browser Settings</h3>
              <p className="mb-3">
                You can control and/or delete cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>View what cookies are stored</li>
                <li>Delete cookies individually or all at once</li>
                <li>Block cookies from specific sites</li>
                <li>Block all third-party cookies</li>
                <li>Clear all cookies when you close the browser</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Browser-Specific Instructions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-amber-50/50 dark:bg-gray-700 rounded-lg p-3 border border-amber-200 dark:border-gray-600">
                  <p className="font-semibold mb-1">Google Chrome</p>
                  <p className="text-sm">Settings → Privacy and security → Cookies and other site data</p>
                </div>
                <div className="bg-amber-50/50 dark:bg-gray-700 rounded-lg p-3 border border-amber-200 dark:border-gray-600">
                  <p className="font-semibold mb-1">Firefox</p>
                  <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-amber-50/50 dark:bg-gray-700 rounded-lg p-3 border border-amber-200 dark:border-gray-600">
                  <p className="font-semibold mb-1">Safari</p>
                  <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-amber-50/50 dark:bg-gray-700 rounded-lg p-3 border border-amber-200 dark:border-gray-600">
                  <p className="font-semibold mb-1">Edge</p>
                  <p className="text-sm">Settings → Privacy, search, and services → Cookies</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mt-4 mb-2">What Happens If You Block Cookies?</h3>
              <p className="mb-2">
                If you block or delete cookies, some features of Asset Stories may not work properly:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Your dark mode preference won't be saved</li>
                <li>We won't be able to remember your preferences</li>
                <li>Some functionality may be limited</li>
                <li>Analytics data won't be collected (which is fine if that's your preference!)</li>
              </ul>
            </section>

            {/* Do Not Track */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Do Not Track Signals</h2>
              <p className="mb-3">
                Some browsers have a "Do Not Track" (DNT) feature that signals to websites that you don't want to have your online activity tracked.
              </p>
              <p className="mb-3">
                Currently, there is no universally accepted standard for how to respond to DNT signals. We respect your privacy choices, but our site does not specifically respond to DNT signals at this time.
              </p>
              <p>
                You can still control cookies through your browser settings as described above.
              </p>
            </section>

            {/* Your Rights */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Your Privacy Rights</h2>
              <p className="mb-3">
                Depending on your location, you may have specific rights regarding cookies and tracking under privacy laws such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>GDPR (EU):</strong> Right to consent before non-essential cookies are set</li>
                <li><strong>CCPA (California):</strong> Right to opt-out of the sale of personal information</li>
                <li><strong>ePrivacy Directive (EU):</strong> Strict consent requirements for cookies</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information. For more details on your privacy rights, see our{' '}
                <Link href="/privacy-policy" className="text-primary-dark dark:text-gold hover:underline font-semibold">Privacy Policy</Link>.
              </p>
            </section>

            {/* Changes to Cookie Policy */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Changes to This Cookie Policy</h2>
              <p className="mb-3">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons.
              </p>
              <p>
                When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </section>

            {/* Contact & Questions */}
            <section className="bg-gradient-to-br from-primary-darker to-primary-dark dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-white">
              <h2 className="text-3xl font-bold text-gold dark:text-gold-light mb-4">Questions About Cookies?</h2>
              <p className="text-gray-100 dark:text-gray-200 mb-4">
                If you have questions about how we use cookies or this Cookie Policy, please contact us at{' '}
                <a href="mailto:themehrabmusa@gmail.com" className="text-gold-light hover:text-gold font-semibold underline">
                  themehrabmusa@gmail.com
                </a>
              </p>
              
              <div className="border-t border-gray-600 pt-4 mt-4">
                <p className="text-gray-200 mb-3">Related Legal Information:</p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/privacy-policy" 
                    className="inline-block bg-amber-50 dark:bg-gray-800 text-primary-dark dark:text-gold px-$1 py-$2 rounded-lg border border-amber-200 dark:border-gray-700 text-sm font-semibold hover:bg-gold hover:text-primary-dark transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/terms-of-service" 
                    className="inline-block bg-amber-50 dark:bg-gray-800 text-primary-dark dark:text-gold px-$1 py-$2 rounded-lg border border-amber-200 dark:border-gray-700 text-sm font-semibold hover:bg-gold hover:text-primary-dark transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    href="/affiliate-disclosure" 
                    className="inline-block bg-amber-50 dark:bg-gray-800 text-primary-dark dark:text-gold px-$1 py-$2 rounded-lg border border-amber-200 dark:border-gray-700 text-sm font-semibold hover:bg-gold hover:text-primary-dark transition-colors"
                  >
                    Affiliate Disclosure
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}



