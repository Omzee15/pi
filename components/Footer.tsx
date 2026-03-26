'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';

const products = [
  { name: 'Pi-Vox', href: '/pi-vox' },
  { name: 'Pi-Scout', href: '/pi-scout' },
  { name: 'Pi-Sense', href: '/pi-sense' },
  { name: 'Pi-Authentify', href: '/pi-authentify' },
  { name: 'Pi-Securechain', href: '/pi-securechain' },
  { name: 'Pi-Phonix', href: '/pi-phonix' },
];

const siteLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/#products' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Company', href: '/company' },
  { name: 'Contact', href: '/contact' },
];

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/pilabs',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/pilabs',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/pilabs',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/pilabs',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="px-8 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - All Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="w-[80%]">
                  <Link href="/" className="inline-block mb-6">
                    <Image
                      src="/pi-labslogo_black.svg"
                      alt="Pi Labs Logo"
                      width={120}
                      height={40}
                      className="h-8 w-auto brightness-0 invert"
                    />
                  </Link>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    AI-driven cybersecurity and digital forensics solutions. Empowering organizations to detect threats, secure evidence, and accelerate investigations.
                  </p>
                  {/* Socials */}
                  <div className="flex items-center gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sitemap */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                  Sitemap
                </h3>
                <ul className="space-y-3">
                  {siteLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                  Our Products
                </h3>
                <ul className="space-y-3">
                  {products.map((product) => (
                    <li key={product.name}>
                      <Link
                        href={product.href}
                        className="text-slate-400 hover:text-white transition-colors text-sm"
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get in Touch */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                  Get in Touch
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0065F4] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <a href="mailto:hello@pi-labs.ai" className="text-white hover:text-[#0065F4] transition-colors text-sm">
                        hello@pi-labs.ai
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0065F4] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white text-sm">
                        pi-labs, 9th Floor(B), Westend Centre One, Aundh, Pune, MH — 411007
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Logo Image */}
          <div className="lg:w-80 xl:w-96 flex items-center justify-center">
            <div className="relative group cursor-pointer">
              <Image
                src="/logo 3d.png"
                alt="Pi Labs 3D Logo"
                width={400}
                height={400}
                className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} pi-labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
