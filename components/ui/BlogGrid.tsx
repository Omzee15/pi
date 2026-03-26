'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

// Sample blog data - can be shared or fetched from API
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    image: '/blogs/rethingking .png',
    title: 'Rethinking ROI in the age of AI',
    excerpt: 'As AI drives a growing share of economic expansion, investors are questioning whether massive capital investments will deliver sustainable returns. Drawing lessons from the dot-com era, this article examines AI\'s impact on GDP growth, valuation risks, and why the technological capabilities of artificial intelligence may still make it an ROI-positive force.',
    author: 'Pi Labs Team',
    date: 'March 20, 2026',
    category: 'AI & Business',
    slug: 'rethinking-roi-age-of-ai',
  },
  {
    id: '2',
    image: '/blogs/Tracing pixel defects to identify.png',
    title: 'Tracing pixel defects to identify Deepfakes',
    excerpt: 'As AI-generated images grow increasingly realistic, the next frontier of defense lies in detecting the invisible fingerprints left behind in every pixel. From GAN frequency inconsistencies to heatmap-based anomaly detection, deepfake forensics is shifting from human perception to measurable, machine-level analysis.',
    author: 'Pi Labs Team',
    date: 'March 15, 2026',
    category: 'Deepfake Detection',
    slug: 'tracing-pixel-defects-deepfakes',
  },
  {
    id: '3',
    image: '/blogs/Extracting relevant information from chaotic audio.png',
    title: 'Extracting relevant information from chaotic audio',
    excerpt: 'In a world where chaotic audio from crime scenes, crowded streets, and surveillance devices often hides crucial details, AI is transforming how we extract clarity from noise. From MP3\'s psychoacoustic origins to today\'s neural noise-reduction engines, advanced audio processing now enables law enforcement to uncover truth buried in sound.',
    author: 'Pi Labs Team',
    date: 'March 10, 2026',
    category: 'Audio AI',
    slug: 'extracting-information-chaotic-audio',
  },
  {
    id: '4',
    image: '/blogs/food delivery.png',
    title: 'Why food-delivery apps need deepfake detection AI?',
    excerpt: 'As AI-generated images grow increasingly realistic, the next frontier of defense lies in detecting the invisible fingerprints left behind in every pixel. From GAN frequency inconsistencies to heatmap-based anomaly detection, deepfake forensics is shifting from human perception to measurable, machine-level analysis.',
    author: 'Pi Labs Team',
    date: 'March 5, 2026',
    category: 'Trust & Safety',
    slug: 'food-delivery-deepfake-detection',
  },
  {
    id: '5',
    image: '/blogs/make it india.png',
    title: 'Make it in India – Building the nation\'s cybersecurity and trust infrastructure',
    excerpt: 'As cyber aggression accelerates across the globe, India faces a uniquely dangerous threat environment—one shaped by hostile neighbours, rising AI-driven attacks, and overwhelming dependence on foreign cybersecurity tools. India can no longer rely on imported digital shields.',
    author: 'Pi Labs Team',
    date: 'February 28, 2026',
    category: 'Cybersecurity',
    slug: 'make-it-india-cybersecurity',
  },
  {
    id: '6',
    image: '/blogs/why india should build.png',
    title: 'Why India should build, not borrow softwares?',
    excerpt: 'As geopolitical tensions rise and global tech giants dominate India\'s digital backbone, the nation faces a strategic vulnerability: dependence on foreign software for everything from email to defence systems. India\'s future security and economic resilience hinge on building—not borrowing—its technology.',
    author: 'Pi Labs Team',
    date: 'February 20, 2026',
    category: 'Tech Policy',
    slug: 'india-build-not-borrow-software',
  },
  {
    id: '7',
    image: '/blogs/ai tools aiding crime.png',
    title: 'AI tools aiding crime probes with speed and efficiency',
    excerpt: 'Artificial Intelligence is transforming crime investigations by helping police predict, prevent, and solve cases faster. From analyzing crime scenes and tracking suspects to identifying patterns through biometric data and surveillance footage, AI tools are making policing smarter and more efficient across India.',
    author: 'Pi Labs Team',
    date: 'February 15, 2026',
    category: 'Law Enforcement',
    slug: 'ai-tools-crime-investigation',
  },
];

interface BlogGridCardProps {
  blog: BlogPost;
  index: number;
}

// Featured card for the first blog - spans full width
const FeaturedBlogCard: React.FC<{ blog: BlogPost }> = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/blog/${blog.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-50px' }}
        className="group cursor-pointer col-span-1 md:col-span-2 lg:col-span-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Horizontal Layout Container */}
        <div className="relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/30">
              {blog.category}
            </span>
          </div>

          {/* Content - Left aligned */}
          <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-10 text-white max-w-2xl">
            {/* Meta Info */}
            <div className="text-sm font-medium opacity-80 mb-3 tracking-wide">
              <span>{blog.author}</span>
              <span className="mx-2">•</span>
              <span>{blog.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              {blog.title}
            </h3>

            {/* Excerpt */}
            <p className="text-white/80 text-base md:text-lg line-clamp-2 mb-4">
              {blog.excerpt}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
              <span>Read Article</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

const BlogGridCard: React.FC<BlogGridCardProps> = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/blog/${blog.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true, margin: '-50px' }}
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative h-56 md:h-64 rounded-xl overflow-hidden mb-4">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Meta Info */}
          <div className="text-xs text-muted-foreground font-medium tracking-wide">
            <span>{blog.author}</span>
            <span className="mx-2">•</span>
            <span>{blog.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-[#0065F4] transition-colors">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {blog.excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center gap-2 text-sm font-semibold text-[#0065F4] opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read More</span>
            <span>→</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export const BlogGrid: React.FC = () => {
  const [featuredBlog, ...restBlogs] = blogPosts;
  
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Featured Blog - Full Width */}
      <div className="mb-8">
        <FeaturedBlogCard blog={featuredBlog} />
      </div>
      
      {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col laptop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restBlogs.map((blog, index) => (
          <BlogGridCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </section>
  );
};
