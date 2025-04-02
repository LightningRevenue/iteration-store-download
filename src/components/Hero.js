import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/slide1.jpg',
      title: 'iPhone 15 Pro Max',
      subtitle: 'Descoperă noul iPhone',
      description: 'Tehnologie de ultimă generație într-un design elegant'
    },
    {
      image: '/images/slide2.jpg',
      title: 'Samsung Galaxy S25',
      subtitle: 'Revoluția Android',
      description: 'Experiență fotografică la nivel profesional'
    },
    {
      image: '/images/slide3.jpg',
      title: 'Apple Watch Series 9',
      subtitle: 'Timpul tău, stilul tău',
      description: 'Monitor pentru sănătate și fitness'
    },
    {
      image: '/images/slide4.jpg',
      title: 'Accesorii Premium',
      subtitle: 'Completează-ți colecția',
      description: 'Huse, încărcătoare și multe altele'
    }
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[800px] w-full overflow-hidden rounded-bl-[80px] rounded-br-[80px]">
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 group"
      >
        <svg className="w-6 h-6 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={goToNextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 group"
      >
        <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <div className="relative h-full w-full">
            {/* Temporary colored div instead of image for testing */}
            <div 
              className={`absolute inset-0 bg-gradient-to-r ${
                index === 0 ? 'from-blue-500 to-purple-600' :
                index === 1 ? 'from-green-500 to-blue-600' :
                index === 2 ? 'from-purple-500 to-pink-600' :
                'from-yellow-500 to-red-600'
              }`}
            ></div>
            {/* Uncomment when you have images */}
            {/* <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            /> */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-sm uppercase tracking-wider mb-4">{slide.subtitle}</h2>
                <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.description}</p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Descoperă mai mult
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;