import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;