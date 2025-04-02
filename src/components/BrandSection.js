import React from 'react';
import { Link } from 'react-router-dom';

const BrandSection = () => {
  const brands = [
    {
      name: 'Apple',
      logo: '/images/brands/apple.svg',
      description: 'iPhone & iOS devices',
      gradient: 'from-gray-900 to-gray-800',
      link: '/brand/apple'
    },
    {
      name: 'Samsung',
      logo: '/images/brands/samsung.svg',
      description: 'Galaxy smartphones',
      gradient: 'from-blue-600 to-blue-500',
      link: '/brand/samsung'
    },
    {
      name: 'Huawei',
      logo: '/images/brands/huawei.svg',
      description: 'Innovative technology',
      gradient: 'from-red-600 to-red-500',
      link: '/brand/huawei'
    },
    {
      name: 'OnePlus',
      logo: '/images/brands/oneplus.svg',
      description: 'Never Settle',
      gradient: 'from-gray-800 to-gray-700',
      link: '/brand/oneplus'
    },
    {
      name: 'Xiaomi',
      logo: '/images/brands/xiaomi.svg',
      description: 'Smart living',
      gradient: 'from-orange-600 to-orange-500',
      link: '/brand/xiaomi'
    },
    {
      name: 'Google',
      logo: '/images/brands/google.svg',
      description: 'Pixel perfection',
      gradient: 'from-blue-500 to-green-500',
      link: '/brand/google'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Branduri Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă cele mai populare branduri de telefoane mobile, cu tehnologie de ultimă generație și design inovator.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <Link
              key={index}
              to={brand.link}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl bg-gradient-to-br ${brand.gradient} transition-opacity duration-300`} />
              
              {/* Placeholder for brand logo - replace with actual images */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-gray-400">{brand.name[0]}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{brand.name}</h3>
              <p className="text-sm text-gray-500 text-center mb-6">{brand.description}</p>
              
              <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-sm font-medium text-primary flex items-center">
                  Vezi produse
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;