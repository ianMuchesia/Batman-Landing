// app/about/page.tsx
import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'About Batman - The Dark Knight',
  description: 'Learn about the legend of Batman, the protector of Gotham City',
};

export default function About() {
  return (
    <>
      {/* About Hero */}
      <div className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
          <Image
            src="/images/batman.jpeg"
            alt="Batman"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="z-0"
          />
        </div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">THE LEGEND</h1>
          <p className="text-lg text-center max-w-2xl">
            For more than 80 years, Batman has stood as a symbol of justice and vengeance in Gotham City.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">The Man Behind the Mask</h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                Bruce Wayne witnessed the murder of his parents as a young boy, an event that would forever alter the course of his life. Swearing vengeance against the criminal element that took his parents' lives, Bruce dedicated himself to becoming the ultimate weapon against crime.
              </p>
              
              <p>
                After years of training in various martial arts, detective skills, and countless scientific disciplines, Bruce returned to Gotham City. Seeking a symbol that would strike fear into the hearts of criminals, he took inspiration from his childhood fear of bats and became Batman.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Gotham's Protector</h3>
              
              <p>
                As Batman, Bruce fights crime using his intellect, physical prowess, and an arsenal of advanced technology developed by Wayne Enterprises. Unlike many superheroes, Batman has no supernatural powers, relying instead on his own abilities and resources.
              </p>
              
              <p>
                Operating from the hidden Batcave beneath Wayne Manor, Batman patrols the streets of Gotham by night, bringing justice to a city plagued by corruption and violence. His one rule remains constant: he will not take a life, no matter how evil the criminal.
              </p>
              
              <div className="my-8 relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/batcave.jpeg"
                  alt="The Batcave"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
                // Continuing from where the code left off in app/about/page.tsx
              </div>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Allies and Enemies</h3>
              
              <p>
                Throughout his crusade, Batman has formed alliances with like-minded individuals, including Commissioner James Gordon of the Gotham City Police Department and his butler and confidant, Alfred Pennyworth. He has also mentored others who share his mission, including Robin, Nightwing, and Batgirl.
              </p>
              
              <p>
                Batman's rogues gallery is among the most infamous in comic book history. From the maniacal Joker to the cunning Riddler, the seductive Catwoman to the monstrous Killer Croc, Batman has faced countless adversaries who test his resolve and push him to his limits.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Legacy</h3>
              
              <p>
                More than just a vigilante, Batman has become a symbol of hope in a city that often seems beyond saving. He represents the idea that one person, through determination and sacrifice, can make a difference against seemingly insurmountable odds.
              </p>
              
              <p>
                The legend of the Dark Knight continues to evolve, but his core remains unchanged: a man who turned personal tragedy into a force for good, standing as a guardian to those who cannot protect themselves.
              </p>
            </div>
            
            {/* Quote */}
            <div className="my-12 border-l-4 border-red-600 pl-6 py-2">
              <p className="text-xl italic text-gray-300">
                "I am vengeance. I am the night. I am Batman."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            The <span className="text-red-600">Batman</span> Timeline
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-red-600 transform md:translate-x-[-50%]"></div>
            
            {/* Timeline events */}
            {[
              {
                year: 'Year One',
                title: 'The Beginning',
                description: 'Bruce Wayne returns to Gotham after years of training abroad and begins his war on crime as Batman.'
              },
              {
                year: 'Year Two',
                title: 'The Dark Knight Rises',
                description: 'Batman establishes himself as Gotham\'s protector and faces his first major supervillain challenges.'
              },
              {
                year: 'Year Five',
                title: 'The Bat Family Forms',
                description: 'Batman begins training his first Robin, expanding his mission to include mentorship.'
              },
              {
                year: 'Present Day',
                title: 'Gotham\'s Guardian',
                description: 'Batman continues his never-ending battle against crime, now a legendary figure in Gotham and beyond.'
              }
            ].map((event, index) => (
              <div 
                key={index} 
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'
                } pl-12 md:pl-0`}
              >
                {/* Circle marker */}
                <div className="absolute left-0 md:left-auto md:right-auto md:translate-x-[-50%] top-0 w-6 h-6 rounded-full bg-red-600 shadow-lg shadow-red-600/50 z-10"></div>
                
                {/* Content */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <span className="inline-block bg-red-600 text-white text-sm font-bold px-3 py-1 rounded mb-3">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}