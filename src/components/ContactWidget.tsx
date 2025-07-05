import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+1 (365) 866-1119';
  const whatsappNumber = '13658661119'; // WhatsApp format without spaces and special characters

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your landscaping services.`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 min-w-[200px] animate-fadeInUp">
          <div className="space-y-3">
            <button
              onClick={handleCall}
              className="w-full flex items-center space-x-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group"
            >
              <div className="bg-green-600 text-white p-2 rounded-full group-hover:scale-110 transition-transform">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Direct Call</p>
                <p className="text-sm text-gray-600">{phoneNumber}</p>
              </div>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center space-x-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group"
            >
              <div className="bg-green-500 text-white p-2 rounded-full group-hover:scale-110 transition-transform">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">WhatsApp Chat</p>
                <p className="text-sm text-gray-600">Quick message</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Main Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen ? 'rotate-45' : 'animate-pulse-scale'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Phone className="h-6 w-6" />
        )}
        
        {/* Ripple Effect */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 bg-green-600 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 bg-green-600 rounded-full animate-pulse opacity-30"></div>
          </>
        )}
      </button>
    </div>
  );
};

export default ContactWidget;