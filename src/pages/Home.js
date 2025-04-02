import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import SellSteps from '../components/SellSteps';
import ProductRecommendations from '../components/ProductRecommendations';
import SellPhoneCTA from '../components/SellPhoneCTA';
import BrandSection from '../components/BrandSection';
import RecentArticles from '../components/RecentArticles';
import FaqSection from '../components/FaqSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedSection />
      <SellSteps />
      <ProductRecommendations />
      <SellPhoneCTA />
      <BrandSection />
      <RecentArticles />
      <FaqSection />
    </div>
  );
};

export default Home;