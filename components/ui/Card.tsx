// app/components/ui/Card.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  link?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  link,
  children,
  className = '',
}) => {
  const cardContent = (
    <>
      {imageSrc && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        {description && (
          <p className="text-gray-400 mb-4">{description}</p>
        )}
        
        {children}
      </div>
    </>
  );
  
  return link ? (
    <Link
      href={link}
      className={`block bg-gray-900 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {cardContent}
    </Link>
  ) : (
    <div className={`bg-gray-900 rounded-lg shadow-lg overflow-hidden ${className}`}>
      {cardContent}
    </div>
  );
};

export default Card;