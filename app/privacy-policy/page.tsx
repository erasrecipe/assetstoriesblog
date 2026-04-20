import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Asset Stories privacy policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-50/40 dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300 border border-amber-100 dark:border-gray-700">
          <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: January 27, 2026</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Introduction</h2>
              <p className="mb-3">
                At Asset Stories (<strong>assetstories.com</strong>), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, share, and safeguard your information when you visit our website.
              </p>
              <p>
                By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our website.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Information We Collect</h2>
              <p className="mb-3">We may collect and process the following types of information:</p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mt-4 mb-2">Automatically Collected Information:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, referring/exit pages</li>
                <li><strong>Device Information:</strong> IP address, browser type and version, device type, operating system</li>
                <li><strong>Cookies and Tracking:</strong> See Cookies section below for details</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mt-4 mb-2">Information You Provide:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name and email address when you contact us or use our contact form</li>
                <li><strong>Correspondence:</strong> Any information you choose to provide in your messages to us</li>
                <li><strong>Feedback:</strong> Book comparison requests, suggestions, or other feedback you submit</li>
              </ul>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our book comparison content and services</li>
                <li><strong>User Experience:</strong> To personalize and enhance your browsing experience on our website</li>
                <li><strong>Communication:</strong> To respond to your inquiries, support requests, and feedback</li>
                <li><strong>Analytics:</strong> To analyze site traffic, usage patterns, and understand how visitors interact with our content</li>
                <li><strong>Content Improvement:</strong> To determine which comparisons are most popular and create relevant new content</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security breaches</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
              </ul>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mt-4 mb-2">What Are Cookies?</h3>
              <p className="mb-3">
                Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and understand how you use our site.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mt-4 mb-2">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly (e.g., remembering your dark mode preference)</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (e.g., Google Analytics, if implemented)</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mt-4 mb-2">Your Cookie Choices:</h3>
              <p>
                You can control cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. However, disabling cookies may affect your ability to use certain features of our website. Note that localStorage is used to save your dark mode preference.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Third-Party Services and Links</h2>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Affiliate Links</h3>
              <p className="mb-3">
                Our website contains affiliate links to third-party retailers (primarily Amazon). When you click these links and make a purchase, we may earn a commission at no additional cost to you. These links are clearly marked as external links.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Third-Party Websites</h3>
              <p className="mb-3">
                We are not responsible for the privacy practices, policies, or content of external websites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
              
              <h3 className="text-xl font-bold text-primary-dark dark:text-gold-light mb-2">Analytics Services</h3>
              <p>
                We may use third-party analytics services (such as Google Analytics) to analyze website traffic and usage. These services may use cookies and collect data about your use of our website. Please refer to their respective privacy policies for more information.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-4">Your Privacy Rights</h2>
              <p className="mb-3">Depending on your location and applicable laws (including GDPR, CCPA), you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Right to Object:</strong> Object to certain types of data processing</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at <a href="mailto:themehrabmusa@gmail.com" className="text-primary-dark dark:text-gold hover:text-gold dark:hover:text-gold-light font-semibold">themehrabmusa@gmail.com</a>. We will respond to your request within 30 days.
              </p>
            </section>

            <section className="bg-gradient-to-br from-primary-darker to-primary-dark dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-white">
              <h2 className="text-3xl font-bold text-gold dark:text-gold-light mb-4">Contact Us</h2>
              <p className="text-gray-100 dark:text-gray-200">
                If you have questions about this privacy policy, please contact us at{' '}
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
