// app/components/layout/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="relative h-10 w-10 cursor-pointer">
              <Image 
                src="/images/logo.jpeg" 
                alt="Batman Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;