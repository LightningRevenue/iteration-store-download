import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
  const categories = [
    {
      title: 'Telefoane',
      description: 'Descoperă cele mai noi modele',
      image: '/images/phones.jpg',
      link: '/telefoane',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Smartwatches',
      description: 'Tehnologie la încheietura mâinii',
      image: '/images/smartwatches.jpg',
      link: '/smartwatches',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Accesorii',
      description: 'Completează experiența',
      image: '/images/accessories.jpg',
      link: '/accesorii',
      gradient: 'from-yellow-500 to-red-600'
    },
    {
      title: 'Service',
      description: 'Reparații de încredere',
      image: '/images/service.jpg',
      link: '/service',
      gradient: 'from-green-500 to-blue-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Categorii populare</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link 
            key={index}
            to={category.link}
            className="group relative h-[280px] rounded-3xl overflow-hidden"
          >
            {/* Temporary gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient}`} />
            {/* Uncomment when you have images */}
            {/* <img 
              src={category.image} 
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            /> */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-white/90">{category.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium">
                <span>Vezi mai mult</span>
                <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;