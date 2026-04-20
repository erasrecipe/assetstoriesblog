'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CopyButton from './CopyButton';

interface ShortPrompt {
  id: string;
  prompt: string;
  description?: string;
}

interface LongPrompt {
  id: string;
  title: string;
  prompt: string;
  useCase: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface PromptArticleProps {
  article: {
    slug: string;
    title: string;
    keyword: string;
    description: string;
    date: string;
    category: string;
    image?: string;
    content?: string;
    shortPrompts: ShortPrompt[];
    longPrompts: LongPrompt[];
    faqs: FAQ[];
    platformTips?: string[];
  };
}

export default function PromptArticle({ article }: PromptArticleProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'short' | 'long'>('all');

  const filteredShortPrompts = activeTab === 'long' ? [] : article.shortPrompts;
  const filteredLongPrompts = activeTab === 'short' ? [] : article.longPrompts;

  if (!article) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold text-primary-dark dark:text-gold mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The article you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/prompts"
            className="inline-block bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
          >
            Back to Prompts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-slate-500 hover:text-gold dark:text-slate-400 dark:hover:text-gold transition-colors">
            Home
          </Link>
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/prompts" className="text-slate-500 hover:text-gold dark:text-slate-400 dark:hover:text-gold transition-colors">
            Prompts
          </Link>
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-slate-700 dark:text-slate-200 font-medium truncate">{article.title}</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-800 dark:text-amber-200 rounded-full border border-amber-200 dark:border-amber-700/50">
              {article.category}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <time dateTime={article.date} className="text-sm text-slate-500 dark:text-slate-400">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-5 leading-tight tracking-tight">
            {article.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {article.description}
          </p>

          {/* Keyword Badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Keyword:</span>
            <span className="text-sm font-semibold text-gold">{article.keyword}</span>
          </div>
        </header>

        {/* Introduction */}
        {article.content && (
          <div className="mb-10 p-6 md:p-8 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50">
            <div 
              className="prose prose-base max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/<p>/g, '<p class="mb-5 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">')
                  .replace(/<h2>/g, '<h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-5">')
                  .replace(/<h3>/g, '<h3 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">')
                  .replace(/<ul>/g, '<ul class="list-disc list-inside mb-5 text-slate-600 dark:text-slate-300 space-y-2">')
                  .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-5 text-slate-600 dark:text-slate-300 space-y-2">')
                  .replace(/<li>/g, '<li class="mb-2 text-slate-600 dark:text-slate-300">')
                  .replace(/<strong>/g, '<strong class="font-bold text-slate-800 dark:text-slate-200">')
                  .replace(/<a /g, '<a class="text-gold hover:underline" ')
              }}
            />
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap gap-1 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl md:rounded-2xl">
          {[
            { key: 'all', label: 'All Prompts', count: article.shortPrompts.length + article.longPrompts.length },
            { key: 'short', label: 'Quick Copy', count: article.shortPrompts.length },
            { key: 'long', label: 'Advanced', count: article.longPrompts.length },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex-1 min-w-fit px-4 md:px-6 py-3 text-sm md:text-base font-semibold rounded-lg md:rounded-xl transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm md:shadow-md'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                activeTab === tab.key
                  ? 'bg-gold/20 text-gold dark:bg-gold/30'
                  : 'bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-300'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Short Prompts Section */}
        {(activeTab === 'all' || activeTab === 'short') && filteredShortPrompts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/25">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Quick Copy Prompts</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Copy and paste directly into Midjourney</p>
              </div>
            </div>

            <div className="grid gap-4">
              {filteredShortPrompts.map((item, index) => (
                <div
                  key={item.id || index}
                  className="group relative bg-white dark:bg-slate-800/80 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700/50 hover:border-gold/50 dark:hover:border-gold/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-300">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      {item.description && (
                        <p className="text-base font-bold text-gold dark:text-amber-300 mb-2">
                          {item.description}
                        </p>
                      )}
                      <div className="relative bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 font-mono text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
                        <code className="break-all">{item.prompt}</code>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <CopyButton text={item.prompt} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Long/Advanced Prompts Section */}
        {(activeTab === 'all' || activeTab === 'long') && filteredLongPrompts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/25">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Advanced Prompts</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Detailed prompts for professional results</p>
              </div>
            </div>

            <div className="grid gap-6">
              {filteredLongPrompts.map((item, index) => (
                <div
                  key={item.id || index}
                  className="group relative bg-white dark:bg-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50 hover:border-purple-500/50 dark:hover:border-purple-500/50 overflow-hidden"
                >
                  {/* Decorative gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 text-purple-600 dark:text-purple-300 font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full">
                          {item.useCase}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gold dark:text-amber-300 mb-3">
                        {item.title}
                      </h3>
                      <div className="relative bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 font-mono text-sm text-slate-800 dark:text-slate-200 overflow-x-auto max-h-[300px] overflow-y-auto">
                        <code className="whitespace-pre-wrap">{item.prompt}</code>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <CopyButton text={item.prompt} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Platform-Specific Tips */}
        {article.platformTips && article.platformTips.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/25">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Pro Tips</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Expert tips for better results</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800/50">
              <ul className="grid gap-4">
                {article.platformTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">FAQ</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Common questions answered</p>
              </div>
            </div>

            <div className="space-y-3">
              {article.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800/80 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 transition-all hover:border-blue-500/30 dark:hover:border-blue-500/30"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180 text-blue-500' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/50">
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-700/50">
          <Link
            href="/prompts"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-gold dark:hover:text-gold font-semibold transition-colors group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Prompts
          </Link>
        </div>
      </div>
    </div>
  );
}
