import React from 'react';
import { Link } from 'react-router-dom';

const ProductRecommendations = () => {
  const recommendedProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: '5999.99',
      originalPrice: '6499.99',
      image: '/images/iphone15.jpg',
      category: 'Telefoane',
      condition: 'Nou',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Samsung Galaxy S25 Ultra',
      price: '4999.99',
      originalPrice: '5499.99',
      image: '/images/samsung-s25.jpg',
      category: 'Telefoane',
      condition: 'Nou',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Apple Watch Series 9',
      price: '2199.99',
      originalPrice: '2499.99',
      image: '/images/apple-watch.jpg',
      category: 'Smartwatches',
      condition: 'Nou',
      rating: 4.7
    },
    {
      id: 4,
      name: 'AirPods Pro 2',
      price: '999.99',
      originalPrice: '1299.99',
      image: '/images/airpods.jpg',
      category: 'Accesorii',
      condition: 'Nou',
      rating: 4.9
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recomandările noastre pentru tine
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Produse atent selectate care ar putea să-ți placă, bazate pe preferințele tale și tendințele actuale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Link to={`/produs/${product.id}`} className="block">
                <div className="relative h-64 bg-gray-100">
                  {/* Temporary gradient background - replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                  {/* Uncomment when you have images */}
                  {/* <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  /> */}
                  
                  {/* Discount badge */}
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-medium px-2 py-1 rounded-full">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">{product.category}</span>
                    <span className="text-sm font-medium text-gray-500">{product.condition}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    {renderStars(product.rating)}
                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{product.price} Lei</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          {product.originalPrice} Lei
                        </span>
                      )}
                    </div>
                    <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/produse"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
          >
            Vezi toate produsele
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;