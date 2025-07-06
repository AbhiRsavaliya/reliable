import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, ArrowRight, Leaf, Users, Award, Facebook, Instagram, X as XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactWidget from '../components/ContactWidget';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SERVICE_LOCATIONS = [
  'barrie',
  'barrie and surrounding areas!',
  'vaughan',
  'mississauga',
  'richmond hill',
  'caledon',
  'brampton',
  // add more as needed
];

const Home = () => {
  // Preloader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 3 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Location notification state
  const [locationMsg, setLocationMsg] = useState<string | null>(null);
  const [showLocationMsg, setShowLocationMsg] = useState(false);

  useEffect(() => {
    // Always prompt for location permission on refresh
    if (!('geolocation' in navigator)) return;

    // Force prompt by calling getCurrentPosition (browser will ask every refresh if not "Always Allow")
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const address = (
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.county ||
            ''
          ).toLowerCase();
          if (
            address.includes('barrie and surrounding areas!') ||
            address.includes('barrie')
          ) {
            setLocationMsg("Hello! Our services are available for this location. Thank you for your interest!");
          } else {
            setLocationMsg("We'll best try to contact you. Thank Enjoy Your Visit");
          }
          setShowLocationMsg(true);
        } catch {
          setLocationMsg("We'll best try to contact you. Thank Enjoy Your Visit");
          setShowLocationMsg(true);
        }
      },
      () => {
        setLocationMsg("We'll best try to contact you. Thank Enjoy Your Visit");
        setShowLocationMsg(true);
      }
    );
  }, []);

  useEffect(() => {
    if (showLocationMsg && locationMsg) {
      // Pause notification for 5 seconds, then hide
      const timeout = setTimeout(() => {
        setShowLocationMsg(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showLocationMsg, locationMsg]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <img
          src="/img/Rlogo.png"
          alt="Reliable Landscaping & Yard Care Logo"
          className="hidden sm:block w-48 h-48 sm:w-64 sm:h-64 animate-preloader-zoom"
          style={{ animation: 'preloader-zoom 2s ease-in-out infinite alternate' }}
        />
        <style>
          {`
            @keyframes preloader-zoom {
              0% { transform: scale(1);}
              100% { transform: scale(1.15);}
            }
            .animate-preloader-zoom {
              animation: preloader-zoom 2s ease-in-out infinite alternate;
            }
          `}
        </style>
      </div>
    );
  }

  const services = [
    {
      title: 'Landscape Design',
      description: 'Professional design services for both hardscaping and softscaping',
      icon: <Leaf className="h-8 w-8 text-green-600" />
    },
    {
      title: 'Lawn Care',
      description: 'Complete lawn maintenance including mowing, aeration, and fertilization',
      icon: <CheckCircle className="h-8 w-8 text-green-600" />
    },
    {
      title: 'Garden Maintenance',
      description: 'Expert care for your gardens, including mulching and seasonal cleanup',
      icon: <Star className="h-8 w-8 text-green-600" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Garden City, NY',
      rating: 5,
      text: 'Reliable Landscaping transformed our backyard into a beautiful oasis. Their attention to detail and professionalism exceeded our expectations.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Michael Chen',
      location: 'Westfield, NJ',
      rating: 5,
      text: 'The team did an amazing job with our driveway and pathway installation. High-quality work and excellent customer service.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Springfield, NJ',
      rating: 5,
      text: 'Professional, reliable, and affordable. They have been maintaining our lawn for two years and it has never looked better.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: '10+', label: 'Happy Customers' },
    { icon: <Award className="h-8 w-8" />, number: '1', label: 'Years Experience' },
    { icon: <CheckCircle className="h-8 w-8" />, number: '11+', label: 'Projects Completed' }
  ];

  return (
    <div className="min-h-screen">
      {/* Location Notification */}
      {locationMsg && showLocationMsg && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out w-[90vw] max-w-md sm:max-w-lg">
          <div className="flex items-center gap-4 px-6 py-2 rounded-lg shadow-lg text-white font-semibold transition-all bg-green-600 min-h-0 h-auto">
            <span className="flex-1">{locationMsg}</span>
            <button
              onClick={() => setShowLocationMsg(false)}
              className="ml-2 px-3 py-1 rounded bg-white/20 hover:bg-white/40 text-white font-bold transition"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
      {/* Social Media Widget */}
      <div className="fixed top-1/2 left-4 z-50 flex flex-col space-y-4 transform -translate-y-1/2">
        <a
          href="https://www.facebook.com/share/1VgqM8UTSA/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="h-7 w-7 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
        </a>
        <a
          href="https://www.instagram.com/reliablegreencare.service?igsh=N3h5dW8xMDBuejNk&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="h-7 w-7 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
        </a>
        <a
          href="https://x.com/_abhijeet_0018"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon className="h-7 w-7 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
        </a>
      </div>
      
      {/* Contact Widget */}
      <ContactWidget />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-aos="fade-up">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/main.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          {/* Logo instead of text */}
          <img
            src="/img/Rlogo.png"
            alt="Reliable Landscaping & Yard Care"
            className="mx-auto mb-8 w-40 md:w-56"
            style={{ maxHeight: '120px' }}
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block text-green-400">Outdoor Space</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Professional landscaping services that bring beauty, functionality, and value to your property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive landscaping solutions to enhance your property's beauty and value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from our valued clients who trusted us to transform their outdoor spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-green-100 hover:shadow-2xl transition-all duration-300"
                style={{ minHeight: 340 }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-green-500 shadow-lg"
                  />
                </div>
                <div className="mt-14 flex flex-col items-center">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-lg text-center mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-green-700">{testimonial.name}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="20" fill="#22c55e" fillOpacity="0.08"/>
                    <path d="M13 25c0-4 3-7 7-7s7 3 7 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Landscape?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your vision to life!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;