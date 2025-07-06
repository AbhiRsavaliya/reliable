import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, X as XIcon, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: '/img/land.jpg',
      alt: 'Beautiful landscape design with stone pathway',
      category: 'Landscape Design',
      size: 'large' // Large featured image
    },
    {
      id: 2,
      src: '/img/lownm.jpg',
      alt: 'Professional lawn care and maintenance',
      category: 'Lawn Care',
      size: 'medium'
    },
    {
      id: 3,
      src: '/img/gardenm.avif',
      alt: 'Garden maintenance and pruning',
      category: 'Garden Maintenance',
      size: 'small'
    },
    {
      id: 4,
      src: '/img/walkway.jpg',
      alt: 'Stone pathway and walkway installation',
      category: 'Pathways',
      size: 'small'
    },
    {
      id: 5,
      src: '/img/inter.jpeg',
      alt: 'Interlocking stone driveway',
      category: 'Interlocking',
      size: 'large'
    },
    {
      id: 6,
      src: '/img/Mulch.jpg',
      alt: 'Mulching and garden bed preparation',
      category: 'Mulching',
      size: 'medium'
    },
    {
      id: 7,
      src: '/img/Fencing.jpg',
      alt: 'Fence installation and repair',
      category: 'Fencing',
      size: 'small'
    },
    {
      id: 7.5,
      src: '/img/Mulch.jpg',
      alt: 'Mulching and soil improvement',
      category: 'Mulching',
      size: 'small'
    },
    {
      id: 8,
      src: '/img/driv.jpg',
      alt: 'Driveway cleaning and maintenance',
      category: 'Driveway Wash',
      size: 'medium'
    },
    {
      id: 9,
      src: '/img/Sodding.jpg',
      alt: 'Sodding and lawn installation',
      category: 'Sodding',
      size: 'large'
    },
    {
      id: 10,
      src: '/img/land.jpg',
      alt: 'Complete landscape transformation',
      category: 'Landscape Design',
      size: 'small'
    },
    {
      id: 10,
      src: '/img/lownm.jpg',
      alt: 'Complete landscape transformation',
      category: 'Lawn Care',
      size: 'small'
    },
    {
      id: 11,
      src: '/img/gardenm.avif',
      alt: 'Garden design and planting',
      category: 'Garden Maintenance',
      size: 'medium'
    },
    {
      id: 12,
      src: '/img/furti.jpg',
      alt: 'Lawn fertilization and care',
      category: 'Fertilization',
      size: 'small'
    },
    {
      id: 10,
      src: '/img/land.jpg',
      alt: 'Complete landscape transformation',
      category: 'Landscape Design',
      size: 'small'
    },
    {
      id: 13,
      src: '/img/land.jpg',
      alt: 'Modern landscape architecture',
      category: 'Landscape Design',
      size: 'large'
    },
    {
      id: 14,
      src: '/img/gardenm.avif',
      alt: 'Seasonal garden cleanup',
      category: 'Garden Maintenance',
      size: 'small'
    },
    {
      id: 10,
      src: '/img/land.jpg',
      alt: 'Complete landscape transformation',
      category: 'Landscape Design',
      size: 'small'
    },
    {
      id: 15,
      src: '/img/walkway.jpg',
      alt: 'Professional hedge trimming',
      category: 'Garden Maintenance',
      size: 'medium'
    }
  ];

  const categories = ['All', 'Landscape Design', 'Lawn Care', 'Garden Maintenance', 'Pathways', 'Interlocking', 'Mulching', 'Fencing', 'Driveway Wash', 'Sodding', 'Fertilization'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase());

  const getImageClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 h-96 md:h-full';
      case 'medium':
        return 'md:col-span-2 h-64';
      case 'small':
      default:
        return 'h-64';
    }
  };

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
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/gallaryhero.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discover the beauty and craftsmanship of our completed landscaping projects. Each transformation tells a story of dedication, expertise, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our collection of successful landscaping projects and see how we've transformed outdoor spaces across the region
            </p>
          </div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${getImageClasses(image.size)}`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-semibold mb-1">{image.category}</p>
                    <p className="text-sm opacity-90">{image.alt}</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {image.category}
                </div>

                {/* Size Indicator for Large Images */}
                {image.size === 'large' && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    FEATURED
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Happy customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Your Dream Landscape?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Let us transform your outdoor space into something beautiful and functional. Your dream landscape is just a consultation away.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;