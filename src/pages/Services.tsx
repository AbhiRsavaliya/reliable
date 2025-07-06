import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Scissors, Wind, Droplets, Shovel, Fence, Pickaxe, TreePine, Hammer, Palette, Truck, ArrowRight, Facebook, Instagram, X as XIcon, Snowflake, Leaf as LeafIcon } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [showLandscapeModal, setShowLandscapeModal] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      id: 'landscape-design',
      icon: <Palette className="h-12 w-12 text-green-600" />,
      title: 'Landscape Design',
      shortDescription: 'Professional landscape design services including both hardscaping and softscaping solutions.',
      features: ['Design consultation', '3D landscape planning', 'Plant selection', 'Hardscape integration'],
      image: '/img/landnew.jpg'
    },
    {
      id: 'lawn-mowing',
      icon: <Scissors className="h-12 w-12 text-green-600" />,
      title: 'Lawn Mowing',
      shortDescription: 'Regular lawn maintenance services to keep your grass healthy and beautiful.',
      features: ['Weekly/bi-weekly mowing', 'Edge trimming', 'Grass collection', 'Seasonal scheduling'],
      image: '/img/lownm.jpg'
    },
    {
      id: 'aeration',
      icon: <Wind className="h-12 w-12 text-green-600" />,
      title: 'Aeration',
      shortDescription: 'Lawn aeration services to improve soil health and promote better grass growth.',
      features: ['Core aeration', 'Overseeding', 'Soil testing', 'Seasonal timing'],
      image: '/img/ar.jpg'
    },
    {
      id: 'sodding',
      icon: <TreePine className="h-12 w-12 text-green-600" />,
      title: 'Sodding',
      shortDescription: 'Professional sod installation for instant lawn transformation.',
      features: ['Soil preparation', 'Premium sod selection', 'Professional installation', 'Watering guidelines'],
      image: '/img/Sodding.jpg'
    },
    {
      id: 'mulching',
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: 'Mulching',
      shortDescription: 'Quality mulching services to protect plants and enhance garden aesthetics.',
      features: ['Organic mulch selection', 'Proper application', 'Weed suppression', 'Moisture retention'],
      image: '/img/Mulchnew.jpg'
    },
    {
      id: 'garden-maintenance',
      icon: <Shovel className="h-12 w-12 text-green-600" />,
      title: 'Garden Maintenance',
      shortDescription: 'Comprehensive garden care services to keep your plants thriving.',
      features: ['Pruning and trimming', 'Weeding', 'Plant health monitoring', 'Seasonal cleanup'],
      image: '/img/gardenm.avif'
    },
    {
      id: 'fertilization',
      icon: <Droplets className="h-12 w-12 text-green-600" />,
      title: 'Fertilization',
      shortDescription: 'Professional fertilization programs to promote healthy plant growth.',
      features: ['Soil analysis', 'Custom fertilizer programs', 'Seasonal applications', 'Organic options'],
      image: '/img/furti.jpg'
    },
    {
      id: 'driveway-wash',
      icon: <Truck className="h-12 w-12 text-green-600" />,
      title: 'Driveway Wash',
      shortDescription: 'Professional pressure washing services for driveways and walkways.',
      features: ['High-pressure cleaning', 'Stain removal', 'Eco-friendly detergents', 'Protective sealing'],
      image: '/img/driv.jpg'
    },
    {
      id: 'fencing',
      icon: <Fence className="h-12 w-12 text-green-600" />,
      title: 'Fencing',
      shortDescription: 'Custom fencing solutions for privacy, security, and aesthetic appeal.',
      features: ['Various fence materials', 'Custom design', 'Professional installation', 'Maintenance services'],
      image: '/img/fencingnew.jpg'
    },
    {
      id: 'interlocking',
      icon: <Pickaxe className="h-12 w-12 text-green-600" />,
      title: 'Interlocking',
      shortDescription: 'Professional interlocking stone installation for patios and driveways.',
      features: ['Design consultation', 'Base preparation', 'Precision installation', 'Sealing and finishing'],
      image: '/img/inter.jpeg'
    },
    {
      id: 'pathways',
      icon: <Hammer className="h-12 w-12 text-green-600" />,
      title: 'Pathways & Walkways',
      shortDescription: 'Beautiful and functional pathways, walkways, and driveway installations.',
      features: ['Custom design', 'Material selection', 'Proper drainage', 'Long-lasting construction'],
      image: '/img/walkway.jpg'
    },
    {
      id: 'snow-removal',
      icon: <Snowflake className="h-12 w-12 text-green-600" />,
      title: 'Snow Removal',
      shortDescription: 'Efficient snow removal services to keep your property safe and accessible during winter.',
      features: ['Driveway and walkway clearing', 'Salting and de-icing', 'Prompt response', 'Seasonal contracts'],
      image: '/img/snow.jpg'
    },
    {
      id: 'leaf-removal',
      icon: <LeafIcon className="h-12 w-12 text-green-600" />,
      title: 'Leaf Removal',
      shortDescription: 'Professional leaf removal to maintain a clean and healthy lawn in the fall.',
      features: ['Lawn and garden cleanup', 'Leaf blowing and collection', 'Eco-friendly disposal', 'One-time or recurring'],
      image: '/img/leaf.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Social Media Widget (left side, same as Home page) */}
      <div className="fixed top-1/2 left-4 z-50 flex flex-col space-y-4 transform -translate-y-1/2">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="h-7 w-7 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
        </a>
        <a
          href="https://www.instagram.com/abhijeet_savaliya/"
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
      {/* Hero Section with Background Image */}
      <section className="relative h-96 overflow-hidden" data-aos="fade-up">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Landscaping Services</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Transform your outdoor space with our comprehensive landscaping solutions. From design to maintenance, we bring expertise and passion to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Complete Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to maintenance, we offer complete landscaping services to enhance your property's beauty and value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.shortDescription}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.id === 'landscape-design' ? (
                    <button
                      className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors group"
                      onClick={() => setShowLandscapeModal(true)}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <Link
                      to={`/services/${service.id}`}
                      state={{ image: service.image }}
                      className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Design Modal */}
      {showLandscapeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowLandscapeModal(false)}
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Landscape Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="flex flex-col items-center text-center cursor-pointer hover:bg-green-50 rounded-lg p-2 transition"
                onClick={() => {
                  setShowLandscapeModal(false);
                  setTimeout(() => navigate('/services/soft-landscaping', { state: { image: '/img/land.jpg' } }), 200);
                }}
              >
                <img
                  src="/img/land.jpg"
                  alt="Soft Landscaping"
                  className="rounded-lg mb-3 w-full h-32 object-cover"
                />
                <h3 className="text-lg font-semibold text-green-600 mb-1">Soft Landscaping</h3>
                <p className="text-gray-600 text-sm">
                  Planting, turfing, flower beds, shrubs, trees, and other living elements to beautify your garden.
                </p>
              </div>
              <div
                className="flex flex-col items-center text-center cursor-pointer hover:bg-green-50 rounded-lg p-2 transition"
                onClick={() => {
                  setShowLandscapeModal(false);
                  setTimeout(() => navigate('/services/hard-landscaping', { state: { image: '/img/land.jpg' } }), 200);
                }}
              >
                <img
                  src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                  alt="Hard Landscaping"
                  className="rounded-lg mb-3 w-full h-32 object-cover"
                />
                <h3 className="text-lg font-semibold text-green-600 mb-1">Hard Landscaping</h3>
                <p className="text-gray-600 text-sm">
                  Construction of patios, walkways, retaining walls, decks, and other non-living features for structure and function.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and personalized quote for your landscaping needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Request Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;