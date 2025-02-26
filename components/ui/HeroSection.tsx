// app/components/ui/HeroSection.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  ctaText = "Explore",
  ctaLink = "#featured"
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (title) {
      title.classList.add('animate-fadeIn');
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        <Image
          src="/images/batman-hero.jpeg"
          alt="Batman Hero Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={90}
          priority
          className="z-0"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 opacity-0"
          style={{ 
            textShadow: '0 0 10px rgba(255,0,0,0.5), 0 0 20px rgba(255,0,0,0.3)',
            fontFamily: 'var(--font-gothic)',
            letterSpacing: '2px',
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease-out forwards 0.5s'
          }}
        >
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        {ctaText && (
          <a 
            href={ctaLink}
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm uppercase tracking-wider font-bold text-sm transition-all duration-300 transform hover:scale-105"
          >
            {ctaText}
          </a>
        )}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white opacity-80" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;