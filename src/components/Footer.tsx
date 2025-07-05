import React from 'react';
import { TreePine, Phone, Mail, MapPin, Clock, Facebook, Instagram, X as XIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} Reliable Landscaping & Yard Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;