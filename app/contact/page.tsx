/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Contact Hero */}
      <div className="relative h-80 w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
          <Image
            src="/images/gotham.jpeg"
            alt="Contact Batman"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="z-0"
          />
        </div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CONTACT</h1>
          <p className="text-lg text-center max-w-2xl">
            Reach out to the Dark Knight's team. (Not for emergencies - use the Bat-Signal instead)
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  Have questions about Batman? Want to learn more about Gotham's vigilante? 
                  Fill out the form and a member of Wayne Enterprises will get back to you.
                </p>
                
                <p>
                  For press inquiries, please specify in your message and include your publication details.
                </p>
              </div>
              
              <div className="mt-12 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-600 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Address</h3>
                    <p className="mt-1 text-gray-400">
                      Wayne Tower<br />
                      1007 Mountain Drive<br />
                      Gotham City
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-600 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="mt-1 text-gray-400">
                      <a href="mailto:contact@batman.com" className="hover:text-red-500 transition-colors">
                        contact@batman.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-600 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Emergency</h3>
                    <p className="mt-1 text-gray-400">
                      Light the Bat-Signal or contact GCPD directly at 555-BAT-HELP
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-900/30 border border-green-500 text-green-400 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Your message has been sent successfully! We'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-sm px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-sm px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-sm px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="press">Press & Media</option>
                      <option value="partnerships">Partnerships</option>
                      <option value="sightings">Batman Sightings</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-sm px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-sm uppercase tracking-wider font-bold text-sm transition-all duration-300 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (Placeholder) */}
      <section className="bg-black">
        <div className="h-96 w-full bg-gray-800 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Map of Gotham City</h3>
              <p className="text-gray-400">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}