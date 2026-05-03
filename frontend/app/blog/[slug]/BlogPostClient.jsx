"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';


import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export function BlogPostClient({ post }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);

  return (
    <div className="min-h-screen bg-[#020507]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "datePublished": post.dateISO,
            "publisher": {
              "@type": "Organization",
              "name": "Stratosport"
            }
          })
        }}
      />

      <Header />

      {/* Article Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#0D4669]/20 via-[#020507] to-[#033051]/20 relative overflow-hidden">


        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className="inline-flex items-center text-[#539AC1] hover:text-[#A5C7E0] text-sm mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="px-3 py-1 bg-[#0D4669]/40 text-[#539AC1] text-[10px] font-semibold uppercase tracking-widest rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-[#D9EAF6]/40 text-sm">
              <span className="flex items-center gap-2">
                <User size={14} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-[#0A0D10]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div
              className="blog-content space-y-6 text-[#D9EAF6]/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-[#0D4669]/30 text-[#539AC1] text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#0D4669]/20 to-[#033051]/10 border border-[#539AC1]/15 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Want to discuss this further?
            </h3>
            <p className="text-[#D9EAF6]/50 mb-6">
              We help enterprises turn these ideas into production reality.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white font-semibold rounded-lg transition-all duration-300">
                Start a Conversation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
