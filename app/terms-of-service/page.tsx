import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Asset Stories terms of service and usage policies.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-50/40 dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300 border border-amber-100 dark:border-gray-700">
          <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-4">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: January 27, 2026</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Acceptance of Terms</h2>
              <p className="mb-3">
                By accessing and using Asset Stories (<strong>assetstories.com</strong>), you accept and agree to be bound by these Terms of Service and our Privacy Policy. These terms constitute a legally binding agreement between you and Asset Stories.
              </p>
              <p>
                If you do not agree to these terms, please do not access or use our website. We reserve the right to update these terms at any time, and your continued use of the website constitutes acceptance of any changes.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Use of Service</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">What We Provide</h3>
              <p className="mb-3">Asset Stories provides comprehensive book comparison and review content to help readers make informed decisions. Our content includes book analyses, comparisons, ratings, and recommendations.</p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Acceptable Use</h3>
              <p className="mb-3">You agree to use our service only for lawful purposes and in accordance with these terms. You may access and view our content for personal, non-commercial use.</p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Prohibited Activities</h3>
              <p className="mb-2">You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service in any way that violates applicable laws or regulations</li>
                <li>Attempt to interfere with, disrupt, or harm the website or servers</li>
                <li>Reproduce, duplicate, copy, sell, or exploit our content for commercial purposes without permission</li>
                <li>Use automated systems (bots, scrapers) to access or extract content from the service</li>
                <li>Impersonate any person or entity, or falsely represent your affiliation</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
              </ul>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Our Content</h3>
              <p className="mb-3">
                All content on Asset Stories, including text, graphics, logos, images, comparisons, reviews, and software, is the property of Asset Stories or its content creators and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Limited License</h3>
              <p className="mb-3">
                We grant you a limited, non-exclusive, non-transferable license to access and use our content for personal, non-commercial purposes. You may not modify, distribute, reproduce, or create derivative works without our express written permission.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Third-Party Content</h3>
              <p>
                Book titles, author names, cover images, and certain other content belong to their respective copyright holders. We do not claim ownership of third-party intellectual property featured on our website.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Affiliate Disclosure and Links</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Affiliate Relationships</h3>
              <p className="mb-3">
                Asset Stories participates in affiliate marketing programs, primarily the Amazon Associates Program. This means we may earn a commission when you click our links and make purchases, at no additional cost to you.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">How It Works</h3>
              <p className="mb-3">
                When you purchase a book through our affiliate links, the retailer pays us a small commission. This helps support our website and allows us to continue providing free, high-quality book comparisons.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Our Commitment</h3>
              <p className="mb-3">
                Our editorial content and book comparisons are never influenced by affiliate relationships. We provide honest, unbiased reviews and comparisons based on merit, not commission rates.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">External Links</h3>
              <p>
                Our website contains links to third-party websites. We are not responsible for the content, privacy practices, or availability of external sites. Clicking external links is at your own risk.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Content Disclaimer</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Information Purposes Only</h3>
              <p className="mb-3">
                The content on Asset Stories is provided for informational and entertainment purposes only. It should not be considered professional advice (financial, legal, medical, etc.).
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Accuracy and Completeness</h3>
              <p className="mb-3">
                While we strive for accuracy, we make no representations or warranties about the completeness, accuracy, or reliability of our content. Prices, ratings, and availability may change without notice.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Subjective Opinions</h3>
              <p className="mb-3">
                Our book reviews and comparisons contain subjective opinions and personal interpretations. Your reading experience may differ from ours.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">No Guarantee</h3>
              <p>
                We do not guarantee that you will enjoy or benefit from any book we recommend. Reading preferences are highly personal.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Limitation of Liability</h2>
              
              <p className="mb-3">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
              </p>
              
              <p className="mb-3">
                Asset Stories and its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Your access to or use of (or inability to access or use) the website</li>
                <li>Any conduct or content of third parties on the website or linked websites</li>
                <li>Any content obtained from the website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              
              <p className="mb-3">
                This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
              </p>
              
              <p>
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages. In such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Changes to Terms</h2>
              
              <p className="mb-3">
                We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. Changes will be effective immediately upon posting to the website.
              </p>
              
              <p className="mb-3">
                Material changes will be indicated by updating the "Last updated" date at the top of this page. We may also notify you via email or a prominent notice on our website.
              </p>
              
              <p className="mb-3">
                Your continued use of the website after any changes constitutes your acceptance of the new terms. If you do not agree to the revised terms, you must stop using the website.
              </p>
              
              <p>
                We encourage you to review these terms periodically to stay informed of any updates.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Governing Law and Disputes</h2>
              
              <p className="mb-3">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Asset Stories operates, without regard to conflict of law principles.
              </p>
              
              <p className="mb-3">
                Any disputes arising from these terms or your use of the website shall be resolved through binding arbitration or in the courts of the applicable jurisdiction, as determined by the nature of the dispute.
              </p>
              
              <p>
                You agree to waive any right to a jury trial and to participate in class action lawsuits or class-wide arbitration.
              </p>
            </section>
            
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Severability and Waiver</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Severability</h3>
              <p className="mb-3">
                If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Waiver</h3>
              <p>
                Our failure to enforce any right or provision of these terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative.
              </p>
            </section>

            <section className="bg-gradient-to-br from-primary-darker to-primary-dark dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-white">
              <h2 className="text-3xl font-bold text-gold dark:text-gold-light mb-4">Contact Information</h2>
              <p className="text-gray-100 dark:text-gray-200">
                For questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:themehrabmusa@gmail.com" className="text-gold-light hover:text-gold font-semibold underline">
                  themehrabmusa@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
