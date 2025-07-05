import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const SocialMediaWidget = () => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </a>
        
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-br from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </a>
        
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-blue-400 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaWidget;