// app/page.tsx
import GradientCard from '@/components/ui/GradientCard';
import HeroSection from '@/components/ui/HeroSection';
import React from 'react';


export default function Home() {
  const featuredCards = [
    {
      title: "The Dark Knight",
      description: "Discover the legend behind Gotham's vigilante hero and his mission to fight crime.",
      imageSrc: "/images/batman.jpeg",
      link: "/about",
      gradientColors: "from-black via-gray-900 to-red-900"
    },
    {
      title: "Batmobile",
      description: "Explore Batman's arsenal of vehicles, including the iconic Batmobile, Batwing, and more.",
      imageSrc: "/images/batmobile.jpeg",
      link: "/gallery",
      gradientColors: "from-black via-gray-800 to-red-800"
    },
    {
      title: "Gadgets & Technology",
      description: "The cutting-edge tech that gives Batman the advantage in his war against crime.",
      imageSrc: "/images/gadgets.jpeg",
      link: "/gallery",
      gradientColors: "from-black via-gray-900 to-red-900"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title="THE DARK KNIGHT RISES"
        subtitle="Vengeance. Justice. Batman."
        ctaText="Explore Gotham"
        ctaLink="#featured"
      />
      
      {/* Featured Section */}
      <section id="featured" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            <span className="text-red-600">BAT</span>MAN'S WORLD
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCards.map((card, index) => (
              <GradientCard 
                key={index}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                link={card.link}
                gradientColors={card.gradientColors}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-white italic mb-6 leading-relaxed">
              "It's not who I am underneath, but what I do that defines me."
            </p>
            <footer className="text-lg text-red-600 font-medium">
              — Batman
            </footer>
          </blockquote>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Fight for Gotham
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Explore the complete story of the Caped Crusader and discover how you can be part of Batman's legacy.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm uppercase tracking-wider font-bold text-sm transition-all duration-300 transform hover:scale-105"
            >
              Contact the Bat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}