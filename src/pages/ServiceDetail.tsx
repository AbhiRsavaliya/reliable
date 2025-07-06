import React from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { Leaf, Scissors, Wind, Droplets, Shovel, Fence, Pickaxe, TreePine, Hammer, Palette, Truck, Snowflake, Leaf as LeafIcon } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const location = useLocation();

  const serviceData: { [key: string]: any } = {
    'landscape-design': {
      icon: <Palette className="h-16 w-16 text-green-600" />,
      title: 'Landscape Design',
      shortDescription: 'Professional landscape design services including both hardscaping and softscaping solutions.',
      image: '/img/land.jpg',
      detailedDescription: 'Transform your outdoor space with our comprehensive landscape design services. We specialize in creating beautiful, functional landscapes that enhance your property value and provide year-round enjoyment. Our expert designers work closely with you to understand your vision and create a custom plan that reflects your style while considering your property\'s unique characteristics.',
      process: [
        'Initial consultation and site analysis',
        'Custom design development with 3D visualization',
        'Plant and material selection based on your climate',
        'Detailed project timeline and cost estimation',
        'Professional installation and project management'
      ],
      benefits: [
        'Increased property value',
        'Enhanced curb appeal',
        'Sustainable and eco-friendly solutions',
        'Low-maintenance design options',
        'Seasonal interest and color'
      ],
      pricing: 'Starting from $2,500 for design consultation and planning'
    },
    'lawn-mowing': {
      icon: <Scissors className="h-16 w-16 text-green-600" />,
      title: 'Lawn Mowing',
      shortDescription: 'Regular lawn maintenance services to keep your grass healthy and beautiful.',
      image: 'https://images.pexels.com/photos/589751/pexels-photo-589751.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Keep your lawn looking pristine with our professional mowing services. We use commercial-grade equipment and follow best practices to ensure your grass stays healthy and attractive throughout the growing season. Our experienced team understands different grass types and adjusts cutting heights accordingly.',
      process: [
        'Property assessment and mowing schedule setup',
        'Regular mowing at optimal height for grass type',
        'Precision edge trimming around walkways and beds',
        'Debris cleanup and grass collection',
        'Seasonal adjustments and winter preparation'
      ],
      benefits: [
        'Consistent, professional appearance',
        'Promotes healthy grass growth',
        'Saves you time and effort',
        'Prevents pest and weed issues',
        'Year-round lawn health maintenance'
      ],
      pricing: 'Starting from $45 per visit for average-sized lawns'
    },
    'aeration': {
      icon: <Wind className="h-16 w-16 text-green-600" />,
      title: 'Aeration',
      shortDescription: 'Lawn aeration services to improve soil health and promote better grass growth.',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Improve your lawn\'s health with professional aeration services. We remove soil plugs to allow air, water, and nutrients to penetrate deep into the root zone, resulting in a thicker, healthier lawn. This essential service helps combat soil compaction and promotes vigorous grass growth.',
      process: [
        'Soil compaction assessment',
        'Core aeration using professional equipment',
        'Overseeding with premium grass seed',
        'Fertilization and soil amendment application',
        'Post-aeration care instructions and follow-up'
      ],
      benefits: [
        'Reduces soil compaction',
        'Improves water and nutrient absorption',
        'Enhances root development',
        'Increases drought tolerance',
        'Promotes thicker, greener grass'
      ],
      pricing: 'Starting from $150 for standard residential lawns'
    },
    'sodding': {
      icon: <TreePine className="h-16 w-16 text-green-600" />,
      title: 'Sodding',
      shortDescription: 'Professional sod installation for instant lawn transformation.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Get an instant, beautiful lawn with our professional sod installation services. We use only premium, locally-sourced sod that\'s perfectly suited to your climate and soil conditions. Our expert installation ensures proper establishment and long-term success.',
      process: [
        'Site preparation and soil grading',
        'Soil amendment and fertilization',
        'Premium sod selection and delivery',
        'Professional installation with proper alignment',
        'Initial watering and establishment care'
      ],
      benefits: [
        'Instant lawn transformation',
        'Erosion control and soil stabilization',
        'Weed-free establishment',
        'Immediate usability',
        'Higher success rate than seeding'
      ],
      pricing: 'Starting from $0.85 per square foot including installation'
    },
    'mulching': {
      icon: <Leaf className="h-16 w-16 text-green-600" />,
      title: 'Mulching',
      shortDescription: 'Quality mulching services to protect plants and enhance garden aesthetics.',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Protect and beautify your garden beds with our professional mulching services. We use high-quality organic mulches that improve soil health while providing excellent weed control and moisture retention. Our team ensures proper application depth and coverage for optimal results.',
      process: [
        'Garden bed assessment and cleanup',
        'Mulch type selection based on plants and aesthetics',
        'Proper depth application (2-4 inches)',
        'Edge definition and finishing touches',
        'Seasonal mulch refresh and maintenance'
      ],
      benefits: [
        'Superior weed suppression',
        'Moisture conservation',
        'Soil temperature regulation',
        'Enhanced garden aesthetics',
        'Improved soil health over time'
      ],
      pricing: 'Starting from $85 per cubic yard including delivery and installation'
    },
    'garden-maintenance': {
      icon: <Shovel className="h-16 w-16 text-green-600" />,
      title: 'Garden Maintenance',
      shortDescription: 'Comprehensive garden care services to keep your plants thriving.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Keep your gardens looking their best year-round with our comprehensive maintenance services. Our experienced team provides expert care for all types of plants, ensuring optimal health and beauty through proper pruning, weeding, and seasonal care.',
      process: [
        'Garden assessment and plant identification',
        'Customized maintenance schedule development',
        'Regular pruning, deadheading, and trimming',
        'Weed control and pest management',
        'Seasonal cleanup and preparation'
      ],
      benefits: [
        'Healthier, more vibrant plants',
        'Extended blooming periods',
        'Disease and pest prevention',
        'Maintained garden structure',
        'Year-round garden beauty'
      ],
      pricing: 'Starting from $75 per hour for maintenance services'
    },
    'fertilization': {
      icon: <Droplets className="h-16 w-16 text-green-600" />,
      title: 'Fertilization',
      shortDescription: 'Professional fertilization programs to promote healthy plant growth.',
      image: 'https://images.pexels.com/photos/589751/pexels-photo-589751.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Maximize your landscape\'s potential with our professional fertilization programs. We create custom nutrition plans based on soil testing and plant requirements to ensure optimal growth and health. Our programs include both organic and synthetic options.',
      process: [
        'Comprehensive soil testing and analysis',
        'Custom fertilization program development',
        'Seasonal application scheduling',
        'Organic and synthetic fertilizer options',
        'Progress monitoring and program adjustments'
      ],
      benefits: [
        'Improved plant health and vigor',
        'Enhanced color and flowering',
        'Better disease resistance',
        'Increased drought tolerance',
        'Sustainable soil improvement'
      ],
      pricing: 'Starting from $125 per application for average-sized properties'
    },
    'driveway-wash': {
      icon: <Truck className="h-16 w-16 text-green-600" />,
      title: 'Driveway Wash',
      shortDescription: 'Professional pressure washing services for driveways and walkways.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Restore your driveway and walkways to like-new condition with our professional pressure washing services. We remove years of dirt, stains, and buildup while protecting your surfaces with eco-friendly cleaning solutions and optional protective sealing.',
      process: [
        'Surface assessment and preparation',
        'Pre-treatment of stains and problem areas',
        'High-pressure washing with appropriate PSI',
        'Eco-friendly cleaning solutions application',
        'Optional protective sealing for longevity'
      ],
      benefits: [
        'Dramatically improved curb appeal',
        'Removal of stubborn stains and buildup',
        'Prevention of surface deterioration',
        'Increased property value',
        'Environmentally safe cleaning methods'
      ],
      pricing: 'Starting from $0.25 per square foot for driveway cleaning'
    },
    'fencing': {
      icon: <Fence className="h-16 w-16 text-green-600" />,
      title: 'Fencing',
      shortDescription: 'Custom fencing solutions for privacy, security, and aesthetic appeal.',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Enhance your property\'s privacy, security, and beauty with our custom fencing solutions. We offer a wide range of materials and styles to match your specific needs and aesthetic preferences, from traditional wood to modern composite materials.',
      process: [
        'Property survey and design consultation',
        'Material selection and permit acquisition',
        'Precise measurement and marking',
        'Professional installation with quality hardware',
        'Final inspection and maintenance guidance'
      ],
      benefits: [
        'Enhanced privacy and security',
        'Increased property value',
        'Defined property boundaries',
        'Improved aesthetic appeal',
        'Long-lasting, durable construction'
      ],
      pricing: 'Starting from $25 per linear foot depending on material and height'
    },
    'interlocking': {
      icon: <Pickaxe className="h-16 w-16 text-green-600" />,
      title: 'Interlocking',
      shortDescription: 'Professional interlocking stone installation for patios and driveways.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Create stunning outdoor spaces with our professional interlocking stone installation. From patios to driveways, we deliver durable, beautiful surfaces that enhance your property\'s value and functionality. Our expert installation ensures long-lasting results.',
      process: [
        'Design consultation and pattern selection',
        'Excavation and proper base preparation',
        'Precision stone installation with tight joints',
        'Edge restraint installation for stability',
        'Sand filling, compaction, and sealing'
      ],
      benefits: [
        'Exceptional durability and longevity',
        'Low maintenance requirements',
        'Excellent drainage properties',
        'Versatile design options',
        'Increased property value'
      ],
      pricing: 'Starting from $12 per square foot including materials and installation'
    },
    'pathways': {
      icon: <Hammer className="h-16 w-16 text-green-600" />,
      title: 'Pathways & Walkways',
      shortDescription: 'Beautiful and functional pathways, walkways, and driveway installations.',
      image: 'https://images.pexels.com/photos/589751/pexels-photo-589751.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      detailedDescription: 'Connect your outdoor spaces with beautiful, functional pathways and walkways. We create custom designs using premium materials that complement your landscape and provide safe, attractive access throughout your property.',
      process: [
        'Site analysis and design development',
        'Material selection and sourcing',
        'Excavation and base preparation',
        'Professional installation with proper grading',
        'Finishing touches and landscape integration'
      ],
      benefits: [
        'Improved accessibility and safety',
        'Enhanced landscape connectivity',
        'Increased property value',
        'Reduced lawn wear and maintenance',
        'All-weather usability'
      ],
      pricing: 'Starting from $8 per square foot depending on material choice'
    },
    'hard-landscaping': {
      icon: <Hammer className="h-16 w-16 text-green-600" />,
      title: 'Hard Landscaping',
      shortDescription: 'Expert construction of patios, walkways, retaining walls, decks, and other non-living features.',
      image: '/img/land.jpg',
      detailedDescription: 'Our hard landscaping services provide the structure and function your outdoor space needs. We specialize in patios, walkways, retaining walls, decks, and more, using quality materials and expert craftsmanship to ensure durability and beauty.',
      process: [
        'Consultation and site assessment',
        'Custom design and material selection',
        'Excavation and base preparation',
        'Construction and installation',
        'Finishing and quality inspection'
      ],
      benefits: [
        'Durable, long-lasting outdoor features',
        'Enhanced property value and usability',
        'Custom designs to fit your style',
        'Professional installation',
        'Low maintenance solutions'
      ],
      pricing: 'Pricing varies by project. Contact us for a custom quote.'
    },
    'soft-landscaping': {
      icon: <Leaf className="h-16 w-16 text-green-600" />,
      title: 'Soft Landscaping',
      shortDescription: 'Planting, turfing, flower beds, shrubs, trees, and other living elements to beautify your garden.',
      image: '/img/land.jpg',
      detailedDescription: 'Our soft landscaping services focus on the living elements of your garden. We provide expert planting, turfing, flower beds, shrubs, and tree installation to create a lush, vibrant landscape tailored to your preferences.',
      process: [
        'Consultation and garden planning',
        'Soil preparation and amendment',
        'Plant and turf selection',
        'Professional planting and installation',
        'Ongoing care and maintenance advice'
      ],
      benefits: [
        'Beautiful, healthy gardens',
        'Improved air quality and biodiversity',
        'Seasonal color and interest',
        'Expert plant selection for your climate',
        'Personalized garden design'
      ],
      pricing: 'Pricing varies by project. Contact us for a custom quote.'
    },
    'snow-removal': {
      icon: <Snowflake className="h-16 w-16 text-green-600" />,
      title: 'Snow Removal',
      shortDescription: 'Efficient snow removal services to keep your property safe and accessible during winter.',
      image: '/img/snow.jpg',
      detailedDescription: 'Stay safe and worry-free during winter with our reliable snow removal services. We offer prompt and thorough clearing of driveways, walkways, and entrances, using professional equipment and eco-friendly de-icing solutions.',
      process: [
        '24/7 monitoring for snowfall events',
        'Prompt dispatch of snow removal team',
        'Driveway and walkway clearing',
        'Salting and de-icing for safety',
        'Optional seasonal contracts for peace of mind'
      ],
      benefits: [
        'Safe and accessible property',
        'Reduced risk of slips and falls',
        'Timely and reliable service',
        'Customizable plans for your needs',
        'Professional equipment and staff'
      ],
      pricing: 'Contact us for a custom quote or seasonal contract options.'
    },
    'leaf-removal': {
      icon: <LeafIcon className="h-16 w-16 text-green-600" />,
      title: 'Leaf Removal',
      shortDescription: 'Professional leaf removal to maintain a clean and healthy lawn in the fall.',
      image: '/img/leafremoval.jpg',
      detailedDescription: 'Keep your property looking its best in the fall with our comprehensive leaf removal services. We clear leaves from lawns, gardens, and hardscapes, ensuring healthy grass and a tidy appearance.',
      process: [
        'Assessment of property and leaf coverage',
        'Leaf blowing and raking',
        'Collection and eco-friendly disposal',
        'Final cleanup of all surfaces',
        'Optional recurring or one-time service'
      ],
      benefits: [
        'Prevents lawn suffocation and mold',
        'Improves curb appeal',
        'Saves you time and effort',
        'Eco-friendly disposal methods',
        'Flexible scheduling'
      ],
      pricing: 'Starting from $60 per visit. Contact us for a custom quote.'
    }
  };

  const service = serviceData[serviceId || ''];

  // Use image from navigation state if available, fallback to service image
  let heroImage = location.state?.image || service?.image;
  // If image path does not start with http, add leading slash for public assets
  if (heroImage && !heroImage.startsWith('http') && !heroImage.startsWith('/')) {
    heroImage = '/' + heroImage;
  }

  // Debug: log what image is being used
  // console.log('ServiceDetail heroImage:', heroImage);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Large Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={heroImage || ''}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>
        
        {/* Back Button */}
        <Link
          to="/services"
          className="absolute top-6 left-6 flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Services</span>
        </Link>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{service.detailedDescription}</p>
          </div>

          {/* Process and Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <ul className="space-y-4">
                {service.process.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-green-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing Information</h3>
            <p className="text-lg text-gray-700 mb-2">{service.pricing}</p>
            <p className="text-sm text-gray-600">*Prices may vary based on project size, complexity, and specific requirements. Contact us for a detailed, personalized quote.</p>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and receive a free, detailed quote for our {service.title.toLowerCase()} services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Request Quote</span>
              </Link>
              
              <a
                href="tel:+1 (365) 866-1119"
                className="inline-flex items-center justify-center space-x-2 border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;