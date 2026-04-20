import { Metadata } from 'next';
import TeamMemberCard from '@/components/TeamMemberCard';

export const metadata: Metadata = {
  title: 'About Us - Meet the Experts',
  description: 'Meet the passionate team behind Asset Stories! Discover our mission to help you make smarter financial decisions, find the best books, and understand artificial intelligence.',
  openGraph: {
    title: 'About Us - Meet the Experts | Asset Stories',
    description: 'Meet the passionate team behind Asset Stories! Expert content on finance, books, and AI.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 transition-colors duration-300">
          <h1 className="text-5xl font-bold text-primary-dark dark:text-gold mb-8 text-center">
            About Asset Stories
          </h1>
          
          <div className="prose prose-lg max-w-none">
            {/* Hero Quote */}
            <div className="bg-gradient-to-r from-primary-light/10 to-gold/10 dark:from-primary-dark/20 dark:to-gold/20 rounded-2xl p-8 mb-12 border-l-4 border-gold">
              <p className="text-2xl text-gray-800 dark:text-gray-200 leading-relaxed italic font-serif">
                "Financial literacy is the passport to freedom. Our mission? Helping you build wealth through knowledge—in finance, books, and technology."
              </p>
              <p className="text-right text-primary-dark dark:text-gold font-semibold mt-4">— The Asset Stories Team</p>
            </div>

            {/* Our Story */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Asset Stories started with a simple observation: the internet is full of financial advice, but most of it is either too complicated, too generic, or simply wrong. Whether it's about investing, budgeting, or understanding new technologies like AI, finding trustworthy guidance is surprisingly hard.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We've all been there—confused by conflicting advice, overwhelmed by complex financial jargon, or unsure which resources are worth our time. We wanted to create a place where people could find clear, honest, and practical insights on topics that matter for their financial future.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                That's what Asset Stories is. We're not here to sell you dreams or promise quick riches. We're here to help you understand your options, make informed decisions, and build lasting wealth—whether that's through smart investing, choosing the right books, or understanding how AI is reshaping our world.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Every article we publish represents hours of research, analysis, and real-world experience—because your financial future deserves better than hype and empty promises.
              </p>
            </section>

            {/* What We Cover */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-6">What We Cover</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <h3 className="text-xl font-semibold text-primary-dark dark:text-gold mb-2">Finance</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Personal finance, investing strategies, retirement planning, budgeting tips, and building long-term wealth.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="text-xl font-semibold text-primary-dark dark:text-gold mb-2">Books</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    In-depth book reviews, financial literature comparisons, and curated reading lists for personal growth.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🤖</div>
                  <h3 className="text-xl font-semibold text-primary-dark dark:text-gold mb-2">AI & Tech</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Understanding artificial intelligence, emerging tech trends, and how they impact your finances and life.
                  </p>
                </div>
              </div>
            </section>

            {/* What Makes Us Different */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-6">What Makes Us Different</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-primary-dark dark:text-gold mb-3">🎯 We Research Before We Write</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Every article is backed by research, data, and real-world experience. We don't just repeat what others say—we verify, analyze, and provide our own insights.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-primary-dark dark:text-gold mb-3">✋ We're Brutally Honest</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If a popular investment strategy is risky, we'll tell you. If a book isn't worth your time, we'll say it. We're not here to please anyone—we're here to help you make smart decisions.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-primary-dark dark:text-gold mb-3">📊 We Break It Down Simply</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Complex financial concepts shouldn't require a finance degree to understand. We explain everything in plain language, with practical examples you can apply immediately.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-dark dark:text-gold mb-3">💡 We Focus on What Actually Works</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We care less about trends and more about timeless principles. Our content is designed to help you build sustainable wealth, not chase quick wins.
                </p>
              </div>
            </section>

            {/* Our Values */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-6">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-gold pl-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">🎯 Readers First, Always</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Every decision we make starts with: "Will this help our readers make better decisions?" If the answer is no, we don't do it.
                  </p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">🔍 Transparency Over Everything</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    We disclose our methodologies, our biases, and our affiliate relationships. You deserve to know exactly how we operate.
                  </p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">⚡ Quality Over Quantity</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    We'd rather publish one great article per week than seven mediocre ones. Every piece meets our standards or it doesn't go live.
                  </p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">🌍 Diverse Perspectives Matter</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Our team brings different backgrounds and viewpoints. This diversity makes our content more balanced and useful for everyone.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-6">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Mehrab Musa - Full Width First */}
                <TeamMemberCard
                  name="Mehrab Musa"
                  initials="MM"
                  role="Developer & Owner"
                  description="Leads the technical vision and ensures the platform delivers the best user experience."
                  image="/team/mehrab-musa.jpg"
                  facebook="https://www.facebook.com/share/17fid12Sst/"
                  instagram="https://www.instagram.com/the_mehrab_musa"
                  twitter="https://x.com/the_mehrab_musa"
                  threads="https://www.threads.com/@the_mehrab_musa"
                  pinterest="https://www.pinterest.com/mmehrabmusa/"
                  goodreads="https://www.goodreads.com/user/show/154523680-md-mehrab-musa"
                  fullWidth
                />
                
                {/* Rest of team in 2x2 grid */}
                <TeamMemberCard
                  name="Rifatul Islam"
                  initials="RI"
                  role="Designer & Article Writer"
                  description="Crafts beautiful designs and writes engaging articles."
                  image="/team/rifatul-islam.jpg"
                  facebook="https://www.facebook.com/share/189zg1Beyf/"
                  instagram="https://www.instagram.com/rifat084"
                  twitter="https://x.com/Rifatulislam01"
                  linkedin="https://www.linkedin.com/in/rifatul-islam2255"
                />
                
                <TeamMemberCard
                  name="Safial Muntasir Sadi"
                  initials="SM"
                  role="Management & Article Writer"
                  description="Manages operations and contributes insightful articles."
                  image="/team/safial-muntasir.jpg"
                  facebook="https://www.facebook.com/sa.fial.96/"
                  instagram="https://www.instagram.com/safial_muntasir"
                  linkedin="https://www.linkedin.com/in/safial-muntasir-sadi"
                />
                
                <TeamMemberCard
                  name="Shoyaib Ahmed Dipto"
                  initials="SD"
                  role="Budgeting & Article Writer"
                  description="Handles financial planning and writes compelling content."
                  image="/team/shoyaib-dipto.jpg"
                  linkedin="https://www.linkedin.com/in/shoyaeab-ahmed-dipto-85a3b8349"
                />
                
                <TeamMemberCard
                  name="Abdullah Al Mamun"
                  initials="AM"
                  role="Planner & Article Writer"
                  description="Strategizes content direction and produces detailed articles."
                  image="/team/abdullah-al-mamun.jpg"
                  facebook="https://www.facebook.com/share/1CFtR6hdrP/"
                  instagram="https://www.instagram.com/abdullah__al_mamun99"
                  threads="https://www.threads.com/@abdullah__al_mamun99"
                  linkedin="https://www.linkedin.com/in/abdullah-al-mamun-8ba63b369"
                />
                
              </div>
            </section>

            {/* Why Trust Us */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-gold mb-6">Why Should You Trust Us?</h2>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Fair question. The internet is full of financial blogs, book reviews, and tech advice. Why listen to us?
              </p>

              <div className="bg-gradient-to-r from-gold/10 to-primary-light/10 dark:from-gold/20 dark:to-primary-dark/20 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Here's the honest answer:</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We're not financial advisors with PhDs. We're not professional book critics. We're not tech experts with insider knowledge.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We're <strong>learners</strong>—just like you. We invest our own money. We read the books we recommend. We try to understand AI and technology because it matters for our future. We've made mistakes and learned from them.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  That's exactly why our content works. We approach these topics the same way you do—as someone trying to make the most of limited time and resources. We ask the same questions you're asking.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📖</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">We Do Our Research</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      If we recommend it, we've researched it. We verify facts, check sources, and form genuine opinions based on real analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">💰</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">We Have Skin in the Game</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      If our recommendations suck, you'll leave and never come back. Our success depends on actually helping you make smarter decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">We're Transparent About Everything</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      We disclose affiliate relationships. We explain our methodology. We admit when we're wrong. No hidden agendas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">👥</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">We Welcome Disagreement</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Think we got it wrong? <a href="/contact" className="text-primary-dark dark:text-gold hover:underline font-semibold">Tell us</a>! We're not defensive about our opinions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Join Our Community */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-primary-dark to-primary-light dark:from-primary-light/20 dark:to-gold/20 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold text-white dark:text-gold mb-4">Join Our Community of Smart Learners</h2>
                <p className="text-white/90 dark:text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
                  Get notified when we publish new articles, receive exclusive insights, and join a community that actually knows what they're talking about.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/blog" 
                    className="inline-block bg-white dark:bg-gray-800 text-primary-dark dark:text-gold px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                  >
                    Read Our Articles
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-block bg-gold dark:bg-gold-light text-white dark:text-primary-darker px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </section>

            {/* Final Personal Touch */}
            <section className="text-center">
              <p className="text-gray-600 dark:text-gray-400 italic text-lg">
                Thanks for being here. We hope our content helps you make smarter financial decisions.
              </p>
              <p className="text-primary-dark dark:text-gold font-semibold mt-4 text-xl">
                Here's to your financial freedom! 💰
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                — The Asset Stories Team
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}