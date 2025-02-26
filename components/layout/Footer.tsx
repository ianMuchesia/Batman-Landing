// app/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import SocialLinks from '../shared/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <Link href="/">
              <h2 className="text-2xl font-bold mb-4 inline-block">
                <span className="text-red-600">BAT</span>MAN
              </h2>
            </Link>
            <p className="text-gray-400 mb-6">
              Gotham's Dark Knight. Protector of the innocent. Symbol of hope in darkness.
            </p>
            <SocialLinks />
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Contact</h3>
            <p className="text-gray-400 mb-2">Wayne Enterprises</p>
            <p className="text-gray-400 mb-2">Gotham City</p>
            <p className="text-gray-400 mb-4">
              <a href="mailto:contact@batman.com" className="hover:text-red-500 transition-colors">
                contact@batman.com
              </a>
            </p>
            <p className="text-gray-400">
              Signal the Bat-Signal for emergencies
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Batman. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed & Developed with ❤️ for Gotham
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;