import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50">
      {/* Top bar with search and actions */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-end">
          <div className="flex items-center space-x-6">
            <div className={`relative transition-all duration-300 ease-in-out ${isSearchFocused ? 'w-[300px]' : 'w-[200px]'}`}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Caută produse..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all duration-300 ease-in-out"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <button className="hover:text-gray-900 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="hover:text-gray-900 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-['Poppins'] text-2xl font-bold tracking-tight text-gray-900">
                SGR<span className="text-slate-600">Shop</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/telefoane" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200"
            >
              Telefoane
            </Link>
            <Link 
              to="/smartwatches" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200"
            >
              Smartwatches
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200"
            >
              Contactează-ne
            </Link>
            <button 
              className="ml-4 bg-gray-900 text-white px-6 py-2.5 rounded-xl text-[15px] font-semibold tracking-wide hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 hover:shadow-md"
            >
              <span>Vinde-ți telefonul</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
            >
              <span className="sr-only">Deschide meniul</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Search bar for mobile */}
          <div className="px-3 py-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Caută produse..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <Link
            to="/telefoane"
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-semibold"
          >
            Telefoane
          </Link>
          <Link
            to="/smartwatches"
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-semibold"
          >
            Smartwatches
          </Link>
          <Link
            to="/blog"
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-semibold"
          >
            Blog
          </Link>
          <Link
            to="/faq"
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-semibold"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-semibold"
          >
            Contactează-ne
          </Link>
          <div className="pt-4 pb-2">
            <button 
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl text-base font-semibold tracking-wide hover:bg-gray-800 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Vinde-ți telefonul</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;