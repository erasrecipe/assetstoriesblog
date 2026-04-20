import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Have questions or requests? Get in touch with the Asset Stories team! We love hearing from our readers and welcome your suggestions.',
  openGraph: {
    title: 'Contact Us | Asset Stories',
    description: 'Have questions or requests? Get in touch with the Asset Stories team!',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-50/40 dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300 border border-amber-100 dark:border-gray-700">
          <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg">
            Have a question, suggestion, or <a href="/comparisons" className="text-primary-dark dark:text-gold hover:underline font-semibold">book comparison</a> request? We&apos;d love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-primary-dark dark:text-gold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
            
          </div>
          
          <div className="space-y-8 mt-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary-dark dark:text-gold mb-4">Direct Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-gold dark:text-gold-light text-2xl mr-4">📧</span>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Email</p>
                    <a href="mailto:themehrabmusa@gmail.com" className="text-primary-dark dark:text-gold hover:text-gold dark:hover:text-gold-light transition-colors">
                      themehrabmusa@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary-dark dark:text-gold mb-4">Request a Comparison</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Have two books you&apos;d like us to compare? Let us know! We&apos;re always looking for new comparison ideas from our readers. Check out our existing <a href="/comparisons" className="text-primary-dark dark:text-gold hover:underline font-semibold">book comparisons</a> for inspiration.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Send your suggestions to <a href="mailto:themehrabmusa@gmail.com" className="text-primary-dark dark:text-gold hover:text-gold dark:hover:text-gold-light transition-colors font-semibold">themehrabmusa@gmail.com</a>
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary-dark dark:text-gold mb-4">Partnerships & Collaborations</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Interested in partnering with Asset Stories? We&apos;re open to collaborations with authors, publishers, and book-related businesses. Learn more <a href="/about" className="text-primary-dark dark:text-gold hover:underline font-semibold">about our team</a> and mission.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Reach out to <a href="mailto:themehrabmusa@gmail.com" className="text-primary-dark dark:text-gold hover:text-gold dark:hover:text-gold-light transition-colors font-semibold">themehrabmusa@gmail.com</a>
              </p>
            </div>

            <div className="text-center pt-8">
              <p className="text-gray-600 dark:text-gray-400 italic">
                We typically respond within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
