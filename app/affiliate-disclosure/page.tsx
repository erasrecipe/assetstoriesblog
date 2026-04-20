import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - FTC Compliance',
  description: 'Asset Stories affiliate disclosure and advertising compensation policy in compliance with FTC guidelines.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-50/40 dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300 border border-amber-100 dark:border-gray-700">
          <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-4">Affiliate Disclosure</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: January 29, 2026</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            
            {/* FTC Compliance Notice */}
            <section className="bg-gold/10 border-l-4 border-gold rounded-xl p-6">
              <h2 className="text-2xl font-bold text-primary-dark dark:text-gold mb-4">📢 FTC Disclosure Statement</h2>
              <p className="mb-3 font-semibold text-lg">
                This website contains affiliate links. We may earn a commission when you click these links and make purchases, at no additional cost to you.
              </p>
              <p className="text-sm">
                In accordance with the Federal Trade Commission's 16 CFR, Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising," we are required to disclose our affiliate relationships and potential compensation.
              </p>
            </section>

            {/* What Are Affiliate Links */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">What Are Affiliate Links?</h2>
              <p className="mb-3">
                Affiliate links are special tracking URLs that identify when a visitor comes to a retailer's website from our site. When you click an affiliate link on Asset Stories and make a purchase, we may receive a small commission from the retailer.
              </p>
              <p className="mb-3">
                <strong>Important:</strong> This commission comes from the retailer's advertising budget, not from you. You pay the exact same price whether you use our affiliate link or go directly to the retailer's website.
              </p>
              <p>
                These commissions help us maintain and improve Asset Stories, allowing us to continue providing free, comprehensive book comparisons.
              </p>
            </section>

            {/* Amazon Associates Program */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Amazon Associates Program</h2>
              <p className="mb-3">
                Asset Stories is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated international Amazon sites.
              </p>
              
              <div className="bg-white dark:bg-gray-600 rounded-lg p-4 mb-3">
                <p className="font-semibold mb-2">Official Amazon Disclosure:</p>
                <p className="text-sm italic">
                  "As an Amazon Associate, Asset Stories earns from qualifying purchases."
                </p>
              </div>
              
              <p className="mb-3">
                When you purchase books through our Amazon affiliate links, Amazon pays us a small percentage of the sale. This percentage varies by product category but typically ranges from 1-10% of the purchase price.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mt-4 mb-2">International Amazon Programs</h3>
              <p className="mb-2">We participate in Amazon Associates programs for multiple regions, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Amazon.com (United States)</li>
                <li>Amazon.co.uk (United Kingdom)</li>
                <li>Amazon.ca (Canada)</li>
                <li>Amazon.de (Germany)</li>
                <li>Amazon.fr (France)</li>
                <li>Amazon.co.jp (Japan)</li>
                <li>Amazon.in (India)</li>
                <li>And other Amazon international marketplaces</li>
              </ul>
            </section>

            {/* Our Commitment to Honesty */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Our Commitment to Honesty</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Editorial Independence</h3>
              <p className="mb-3">
                <strong>Our reviews and comparisons are NEVER influenced by affiliate commissions.</strong> We do not favor one book over another based on potential earnings. Our recommendations are based solely on:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Book quality and content</li>
                <li>Reader reviews and ratings</li>
                <li>Literary merit and impact</li>
                <li>Relevance to comparison criteria</li>
                <li>Honest analysis of pros and cons</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Unbiased Comparisons</h3>
              <p className="mb-3">
                We compare books based on objective criteria and genuine reader feedback. If a book is not the best choice for a particular reader, we'll say so—even if recommending an alternative means earning less commission or no commission at all.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Transparency First</h3>
              <p>
                We believe in complete transparency. That's why we prominently display this disclosure page and include disclosure notices throughout our site wherever affiliate links appear.
              </p>
            </section>

            {/* Where Affiliate Links Appear */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Where You'll Find Affiliate Links</h2>
              <p className="mb-3">Affiliate links on Asset Stories appear in the following locations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Book Comparison Pages:</strong> "Buy on Amazon" buttons on book cards</li>
                <li><strong>Comparison Tables:</strong> Purchase links in side-by-side comparisons</li>
                <li><strong>Book Recommendations:</strong> Links to recommended books</li>
                <li><strong>Product Links:</strong> Any link directing to book retailers</li>
              </ul>
              <p className="mt-3">
                All affiliate links are clearly marked with text like "Buy on Amazon →" and open in a new tab with appropriate <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">rel="nofollow noopener noreferrer"</code> attributes.
              </p>
            </section>

            {/* How Commissions Work */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">How Affiliate Commissions Work</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">No Extra Cost to You</h3>
              <p className="mb-3">
                When you purchase through our affiliate links, you pay the <strong>exact same price</strong> as if you went directly to Amazon. The commission comes from Amazon's advertising budget, not from your pocket.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Cookie Duration</h3>
              <p className="mb-3">
                Amazon affiliate cookies typically last for 24 hours. If you click our link and purchase within 24 hours, we may earn a commission. If you add items to your cart but purchase later, we may still earn a commission on those items.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Qualifying Purchases</h3>
              <p>
                We may earn commissions on any products you purchase during your Amazon session after clicking our link, not just the specific book we linked to. This is standard for Amazon Associates.
              </p>
            </section>

            {/* Your Choice */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Your Choice Matters</h2>
              <p className="mb-3">
                Using our affiliate links is completely optional. You are never required to purchase through our links. However, if you find our content valuable and want to support our work, using our affiliate links is a great way to do so at no extra cost to you.
              </p>
              <p className="mb-3">
                <strong>Ways to support us:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Click our affiliate links when making purchases you were already planning to make</li>
                <li>Share our comparisons with friends and family</li>
                <li>Follow us on social media</li>
                <li>Provide feedback to help us improve</li>
              </ul>
            </section>

            {/* Other Advertising */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Other Advertising & Sponsorships</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Current Status</h3>
              <p className="mb-3">
                As of the last update date above, Asset Stories primarily earns revenue through Amazon Associates affiliate links. We do not currently display banner ads or accept sponsored content.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Future Advertising</h3>
              <p>
                If we add other forms of advertising in the future (such as display ads or sponsored posts), we will:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Clearly mark all sponsored content as "Sponsored" or "Advertisement"</li>
                <li>Maintain editorial independence in all content</li>
                <li>Update this disclosure page accordingly</li>
                <li>Continue to prioritize your trust and our integrity</li>
              </ul>
            </section>

            {/* Questions & Updates */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Questions & Updates</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Have Questions?</h3>
              <p className="mb-3">
                If you have questions about our affiliate relationships or this disclosure, please contact us at{' '}
                <a href="mailto:themehrabmusa@gmail.com" className="text-primary-dark dark:text-gold hover:text-gold dark:hover:text-gold-light font-semibold">
                  themehrabmusa@gmail.com
                </a>
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Policy Updates</h3>
              <p>
                We may update this disclosure from time to time. The "Last updated" date at the top of this page indicates when changes were last made. Please review this page periodically to stay informed about our affiliate relationships.
              </p>
            </section>

            {/* Additional Resources */}
            <section className="bg-gradient-to-br from-primary-darker to-primary-dark dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-white">
              <h2 className="text-3xl font-bold text-gold dark:text-gold-light mb-4">Related Legal Information</h2>
              <p className="text-gray-100 dark:text-gray-200 mb-4">
                For more information about how we handle your data and our terms of service, please visit:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/privacy-policy" 
                  className="inline-block bg-white dark:bg-gray-800 text-primary-dark dark:text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-primary-dark transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms-of-service" 
                  className="inline-block bg-white dark:bg-gray-800 text-primary-dark dark:text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-primary-dark transition-colors"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/cookie-policy" 
                  className="inline-block bg-white dark:bg-gray-800 text-primary-dark dark:text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-primary-dark transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </section>

            {/* Thank You */}
            <section className="bg-gold/10 border border-gold rounded-xl p-6 text-center">
              <h2 className="text-2xl font-bold text-primary-dark dark:text-gold mb-3">Thank You for Your Trust</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We appreciate your support and trust in Asset Stories. Our goal is to help you find the perfect book, and your purchases through our affiliate links help us continue this mission. Happy reading! 📚
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
