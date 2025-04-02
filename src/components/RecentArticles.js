import React from 'react';
import { Link } from 'react-router-dom';

const RecentArticles = () => {
  const articles = [
    {
      id: 1,
      title: 'Cum să-ți protejezi telefonul de căldură în sezonul cald',
      excerpt: 'Sfaturi practice pentru a preveni supraîncălzirea și deteriorarea telefonului în zilele toride.',
      image: '/images/blog/summer-phone.jpg',
      category: 'Sfaturi & Trucuri',
      readTime: '5 min',
      date: '1 aprilie 2025'
    },
    {
      id: 2,
      title: 'Top 5 telefoane cu cea mai bună autonomie în 2025',
      excerpt: 'Analiză comparativă a celor mai rezistente baterii din telefoanele actuale.',
      image: '/images/blog/battery-life.jpg',
      category: 'Comparații',
      readTime: '8 min',
      date: '30 martie 2025'
    },
    {
      id: 3,
      title: 'Ghid complet: Cum să alegi telefonul perfect pentru tine',
      excerpt: 'Tot ce trebuie să știi înainte de a cumpăra un telefon nou.',
      image: '/images/blog/phone-guide.jpg',
      category: 'Ghiduri',
      readTime: '12 min',
      date: '28 martie 2025'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Articole Recente
            </h2>
            <p className="text-xl text-gray-600">
              Află ultimele noutăți și sfaturi din lumea tehnologiei
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center text-primary hover:text-primary/80 font-semibold"
          >
            Vezi toate articolele
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/blog/${article.id}`} className="block">
                <div className="relative h-64 bg-gray-100">
                  {/* Temporary gradient background - replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                  {/* Uncomment when you have images */}
                  {/* <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  /> */}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/5 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <span className="text-primary font-medium inline-flex items-center">
                      Citește mai mult
                      <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
          >
            Vezi toate articolele
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;