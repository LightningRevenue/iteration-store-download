import React from 'react';
import { Link } from 'react-router-dom';

const SellPhoneCTA = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Preț corect',
      description: 'Evaluare instant și preț competitiv pentru telefonul tău'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Rapid și sigur',
      description: 'Procesare rapidă și plată în maxim 24 de ore'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Garantat',
      description: 'Transport asigurat și verificare transparentă'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Service Autorizat',
      description: 'Evaluare profesională în centre autorizate'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Vinde-ți telefonul astăzi!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Primești o evaluare instant și banii în cont în mai puțin de 24 de ore. 
            Proces simplu, transparent și 100% sigur.
          </p>
          
          <Link
            to="/vinde-telefon"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 mb-12"
          >
            Evaluează-ți telefonul acum
            <svg 
              className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center">
            <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Peste 10,000 de clienți mulțumiți</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Rating 4.9/5 pe baza a 2,500+ review-uri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellPhoneCTA;