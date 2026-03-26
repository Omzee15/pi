'use client';
import React from 'react';
import { BlogGrid } from '@/components/ui/BlogGrid';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Our Stories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, updates, and perspectives from the Pi Labs team on AI, robotics, and the future of intelligent technology
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <BlogGrid />

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-slate-200 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest insights on AI and robotics
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
