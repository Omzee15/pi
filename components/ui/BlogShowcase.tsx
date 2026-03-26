'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from './BlogGrid';

interface BlogPost {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

interface BlogCardProps {
  blog: BlogPost;
  size: 'large' | 'medium' | 'small';
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, size, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    large: 'h-96 md:h-[520px]',
    medium: 'h-80 md:h-[360px]',
    small: 'h-40 md:h-48',
  };

  const textSizeClasses = {
    large: 'text-3xl',
    medium: 'text-lg',
    small: 'text-lg',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`relative ${sizeClasses[size]} rounded-xl overflow-hidden group cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        className={`w-full h-full object-cover transition-transform duration-500 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="absolute top-4 left-4 z-20"
      >
        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
          {blog.category}
        </span>
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 flex flex-col justify-end h-full">
        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          className="text-xs font-semibold opacity-70 mb-3 tracking-wide"
        >
          <span>{blog.author.toUpperCase()}</span>
          <span className="mx-2">•</span>
          <span>{blog.date}</span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
          className={`${textSizeClasses[size]} font-bold leading-tight tracking-tight`}
        >
          {blog.title}
        </motion.h3>

        {/* Excerpt - Only show for large cards */}
        {size === 'large' && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
            className="text-white/80 text-sm mt-3 line-clamp-2"
          >
            {blog.excerpt}
          </motion.p>
        )}

        {/* Read More Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
          className="mt-4 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm font-semibold">Read More</span>
          <span className="text-lg">→</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const BlogShowcase: React.FC = () => {
  return (
    <section className="py-3 md:py-5 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Section: Large + Small Cards */}
        <div className="md:col-span-3 flex flex-col gap-6">
          {/* Large Featured Blog */}
          <BlogCard blog={blogPosts[0]} size="large" index={0} />

          {/* Two Small Cards Side by Side */}
          <div className="grid grid-cols-2 gap-6">
            <BlogCard blog={blogPosts[1]} size="small" index={1} />
            <BlogCard blog={blogPosts[2]} size="small" index={2} />
          </div>
        </div>

        {/* Right Section: Two Medium Cards Stacked */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <BlogCard blog={blogPosts[3]} size="medium" index={3} />
          <BlogCard blog={blogPosts[4]} size="medium" index={4} />
        </div>
      </div>

      {/* Load More Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <Link 
          href="/blog"
          className="inline-block px-8 py-3 font-semibold rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#D8EAFF', color: '#0065F4' }}
        >
          View all
        </Link>
      </motion.div>
    </section>
  );
};
