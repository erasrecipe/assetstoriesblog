import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - Asset Stories',
  description: 'Important disclaimer and terms of use for Asset Stories website.',
};

function cleanContent(content: string) {
  let cleaned = content;
  
  // Remove inline styles
  cleaned = cleaned.replace(/style="[^"]*"/g, '');
  cleaned = cleaned.replace(/\s*dir="ltr"/g, '');
  cleaned = cleaned.replace(/\s*aria-level="\d+"/g, '');
  
  // Add styling
  cleaned = cleaned.replace(/<p>/g, '<p class="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">');
  cleaned = cleaned.replace(/<h2>/g, '<h2 class="text-2xl font-bold text-primary-dark dark:text-gold mt-10 mb-4">');
  cleaned = cleaned.replace(/<h3>/g, '<h3 class="text-xl font-semibold text-primary-dark dark:text-gold mt-8 mb-3">');
  cleaned = cleaned.replace(/<ul>/g, '<ul class="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300 space-y-2">');
  cleaned = cleaned.replace(/<ol>/g, '<ol class="list-decimal list-inside mb-6 text-gray-700 dark:text-gray-300 space-y-2">');
  cleaned = cleaned.replace(/<li>/g, '<li class="mb-2 text-gray-700 dark:text-gray-300">');
  cleaned = cleaned.replace(/<a /g, '<a class="text-orange-600 dark:text-gold hover:underline" ');
  cleaned = cleaned.replace(/<b>/g, '<b class="font-bold">');
  cleaned = cleaned.replace(/<strong>/g, '<strong class="font-bold">');
  
  return cleaned;
}

const disclaimerContent = `<p></p>
<p><b>Effective Date:</b> February 19, 2026<br /><b>Last Updated:</b> February 19, 2026</p>
<p>Welcome to AssetStories.com. The information provided on this website is for general informational purposes only. Please read this disclaimer carefully before using our website.</p>
<h2>1. No Professional Advice</h2>
<h3>1.1 General Information Only</h3>
<p>The content on AssetStories.com is provided for informational and educational purposes only. It is not intended to be and should not be construed as:</p>
<ul>
<li>Professional financial advice</li>
<li>Investment advice</li>
<li>Legal advice</li>
<li>Tax advice</li>
<li>Medical advice</li>
<li>Technical advice</li>
<li>Any other form of professional advice</li>
</ul>
<h3>1.2 Consult Professionals</h3>
<p>Before making any decisions based on information found on our website, you should consult with qualified professionals in the relevant field. We strongly recommend seeking independent professional advice tailored to your specific circumstances.</p>
<h2>2. Accuracy of Information</h2>
<h3>2.1 Best Efforts</h3>
<p>While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about:</p>
<ul>
<li>The completeness, accuracy, reliability, or suitability of the information</li>
<li>The availability or functionality of the website</li>
<li>The timeliness or currency of the content</li>
</ul>
<h3>2.2 Errors and Omissions</h3>
<p>The information on AssetStories.com may contain:</p>
<ul>
<li>Typographical errors</li>
<li>Inaccuracies</li>
<li>Omissions</li>
<li>Out-of-date information</li>
</ul>
<p>We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</p>
<h2>3. No Guarantees</h2>
<h3>3.1 Results May Vary</h3>
<p>Any claims, statistics, or results mentioned on our website are not guaranteed. Your results may vary depending on numerous factors, including but not limited to:</p>
<ul>
<li>Your individual circumstances</li>
<li>Market conditions</li>
<li>Implementation of information</li>
<li>External factors beyond our control</li>
</ul>
<h3>3.2 No Warranties</h3>
<p>We do not warrant that:</p>
<ul>
<li>The website will meet your requirements</li>
<li>The website will be uninterrupted, timely, secure, or error-free</li>
<li>The results obtained from using the website will be accurate or reliable</li>
<li>Any errors in the website will be corrected</li>
</ul>
<h2>4. Third-Party Content</h2>
<h3>4.1 External Links</h3>
<p>Our website may contain links to third-party websites, products, or services. These links are provided for your convenience only. We:</p>
<ul>
<li>Do not endorse or recommend third-party websites</li>
<li>Have no control over third-party content</li>
<li>Are not responsible for the accuracy, legality, or content of external sites</li>
<li>Accept no liability for any loss or damage arising from your use of third-party websites</li>
</ul>
<h3>4.2 Advertisements</h3>
<p>We may display third-party advertisements on our website. We are not responsible for:</p>
<ul>
<li>The content of advertisements</li>
<li>The products or services advertised</li>
<li>Any transactions you make with advertisers</li>
</ul>
<h2>5. Limitation of Liability</h2>
<h3>5.1 Use at Your Own Risk</h3>
<p>Your use of AssetStories.com is entirely at your own risk. To the fullest extent permitted by law, we shall not be liable for any:</p>
<ul>
<li>Direct, indirect, incidental, special, consequential, or punitive damages</li>
<li>Loss of profits, revenue, data, or use</li>
<li>Business interruption</li>
<li>Personal injury or property damage</li>
<li>Damages resulting from reliance on information provided on our website</li>
</ul>
<p>This applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.</p>
<h3>5.2 Maximum Liability</h3>
<p>In no event shall our total aggregate liability to you for all damages, losses, and causes of action exceed the amount you paid to access our website (if anything).</p>
<h2>6. Financial Disclaimer</h2>
<h3>6.1 Not Financial Advice</h3>
<p>Any financial information, investment ideas, or asset-related content on AssetStories.com is:</p>
<ul>
<li>For educational and informational purposes only</li>
<li>Not a recommendation to buy, sell, or hold any financial instrument</li>
<li>Not a guarantee of financial performance</li>
</ul>
<h3>6.2 Investment Risks</h3>
<p>All investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. You should:</p>
<ul>
<li>Do your own research</li>
<li>Understand the risks involved</li>
<li>Consult with a qualified financial advisor</li>
<li>Only invest what you can afford to lose</li>
</ul>
<h3>6.3 No Endorsement</h3>
<p>Mention of any specific financial product, service, company, or investment strategy does not constitute an endorsement or recommendation.</p>
<h2>7. Affiliate Disclaimer</h2>
<h3>7.1 Affiliate Relationships</h3>
<p>AssetStories.com may contain affiliate links. This means we may earn a commission if you click on a link and make a purchase, at no additional cost to you.</p>
<h3>7.2 Honest Recommendations</h3>
<p>We only recommend products or services that we believe will add value to our readers. Our opinions remain our own, and affiliate relationships do not influence our editorial content.</p>
<h2>8. Testimonials Disclaimer</h2>
<h3>8.1 Individual Results</h3>
<p>Any testimonials, case studies, or success stories featured on our website represent individual experiences and are not guaranteed or typical results.</p>
<h3>8.2 No Guarantee</h3>
<p>Testimonials are not verified for accuracy and should not be considered as guarantees of future performance or results.</p>
<h2>9. Medical Disclaimer</h2>
<p>If we publish health or wellness-related content:</p>
<ul>
<li>It is for informational purposes only</li>
<li>It is not a substitute for professional medical advice, diagnosis, or treatment</li>
<li>Always seek the advice of your physician or qualified health provider</li>
<li>Never disregard professional medical advice based on information from our website</li>
</ul>
<h2>10. Copyright and Trademark</h2>
<h3>10.1 Intellectual Property</h3>
<p>All trademarks, service marks, trade names, logos, and copyrighted material mentioned on AssetStories.com are the property of their respective owners.</p>
<h3>10.2 Fair Use</h3>
<p>Any use of third-party intellectual property is done under fair use for commentary, criticism, news reporting, or educational purposes.</p>
<h2>11. Website Availability</h2>
<h3>11.1 No Guarantee of Uptime</h3>
<p>We do not guarantee that:</p>
<ul>
<li>The website will be available at all times</li>
<li>The website will be free from viruses or malicious code</li>
<li>The website will function on all devices or browsers</li>
</ul>
<h3>11.2 Maintenance and Updates</h3>
<p>We reserve the right to:</p>
<ul>
<li>Modify or discontinue the website at any time</li>
<li>Perform maintenance that may temporarily interrupt access</li>
<li>Update or change content without notice</li>
</ul>
<h2>12. User Responsibility</h2>
<h3>12.1 Your Responsibility</h3>
<p>You are responsible for:</p>
<ul>
<li>Verifying any information before relying on it</li>
<li>Your own decisions and actions based on website content</li>
<li>Complying with all applicable laws and regulations</li>
<li>Maintaining the security of your account and password</li>
</ul>
<h3>12.2 Due Diligence</h3>
<p>We encourage you to:</p>
<ul>
<li>Conduct your own research</li>
<li>Verify facts from multiple sources</li>
<li>Exercise your own judgment</li>
<li>Consult with professionals before making important decisions</li>
</ul>
<h2>13. Jurisdiction and Governing Law</h2>
<p>This disclaimer shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions. Any disputes arising from this disclaimer shall be subject to the exclusive jurisdiction of the courts.</p>
<h2>14. Changes to This Disclaimer</h2>
<p>We reserve the right to update or modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the updated disclaimer.</p>
<p><b>Last Updated:</b> February 19, 2026</p>
<h2>15. Contact Information</h2>
<p>If you have any questions about this disclaimer, please contact us:</p>
<p><b>Email:</b> themehrabmusa@gmail.com<br /><b>Website:</b> https://assetstories.com/contact</p>`;

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <article className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-primary-dark dark:text-gold mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: February 19, 2026
          </p>
        </header>
        
        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: cleanContent(disclaimerContent) }}
        />
      </article>
    </div>
  );
}