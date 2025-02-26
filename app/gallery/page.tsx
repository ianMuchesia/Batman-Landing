/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Batman Gallery - The Dark Knight',
  description: 'Explore images of Batman, his vehicles, gadgets, and allies',
};

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageSrc: string;
}

export default function Gallery() {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "The Dark Knight",
      description: "Batman standing on a Gotham City rooftop, overlooking his domain.",
      category: "character",
      imageSrc: "/images/batman.jpeg"
    },
    {
      id: 2,
      title: "Batmobile",
      description: "The iconic Batmobile, Batman's primary mode of transportation.",
      category: "vehicle",
      imageSrc: "/images/batmobile.jpeg"
    },
    {
      id: 3,
      title: "Utility Belt",
      description: "Batman's legendary utility belt, containing all his essential gadgets.",
      category: "gadget",
      imageSrc: "/images/gadgets.jpeg"
    },
    {
      id: 4,
      title: "Rogues Gallery",
      description: "The collection of Batman's most notorious enemies.",
      category: "villain",
      imageSrc: "/images/villains.jpeg"
    },
    {
      id: 5,
      title: "Bat Signal",
      description: "Gotham City's call for help when danger strikes.",
      category: "gadget",
      imageSrc: "/images/bat-signal.jpeg"
    },
    {
      id: 6,
      title: "The Batcave",
      description: "Batman's secret headquarters located beneath Wayne Manor.",
      category: "location",
      imageSrc: "/images/batcave.jpeg"
    }
  ];

  // Unique categories for filtering
  const categories = Array.from(new Set(galleryItems.map(item => item.category)));

  return (
    <>
      {/* Gallery Hero */}
      <div className="relative h-80 w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
          <Image
            src="/images/batcave.jpeg"
            alt="Batman Gallery"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="z-0"
          />
        </div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GALLERY</h1>
          <p className="text-lg text-center max-w-2xl">
            Explore the visual world of Batman: his technology, allies, enemies, and more.
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {/* Filter Categories - Note: In a real implementation, this would be interactive with client-side JS */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button className="bg-red-600 text-white px-4 py-2 rounded-sm text-sm uppercase tracking-wider font-medium">
              All
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-sm text-sm uppercase tracking-wider font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
    
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative rounded-lg overflow-hidden bg-gray-900 transition-transform duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-red-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery CTA */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Want to see more of Batman's world?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore the comprehensive archives of Batman's history, equipment, and adventures.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm uppercase tracking-wider font-bold text-sm transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}