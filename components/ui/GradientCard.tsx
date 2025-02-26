// app/components/ui/GradientCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GradientCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
  gradientColors?: string;
}

const GradientCard: React.FC<GradientCardProps> = ({
  title,
  description,
  imageSrc,
  link = "#",
  gradientColors = "from-black via-gray-900 to-red-900"
}) => {
  const cardContent = (
    <>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="z-0"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${gradientColors} opacity-90 z-10`} />
      
      {/* Content */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/80">{description}</p>
        
        <div className="mt-4 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 transform translate-y-4 transition-all duration-300">
          <span className="text-sm font-medium text-red-500 flex items-center">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
  
  return link.startsWith('#') ? (
    <div className="relative overflow-hidden rounded-lg h-96 group transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
      {cardContent}
    </div>
  ) : (
    <Link 
      href={link} 
      className="relative overflow-hidden rounded-lg h-96 group block transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
    >
      {cardContent}
    </Link>
  );
};

export default GradientCard;