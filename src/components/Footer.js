import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
  };

  const footerSections = [
    {
      title: 'Produse',
      links: [
        { name: 'iPhone', href: '/brand/apple' },
        { name: 'Samsung', href: '/brand/samsung' },
        { name: 'Smartwatches', href: '/smartwatches' },
        { name: 'Accesorii', href: '/accesorii' },
        { name: 'Toate produsele', href: '/products' }
      ]
    },
    {
      title: 'Servicii',
      links: [
        { name: 'Vinde-ți telefonul', href: '/vinde-telefon' },
        { name: 'Service GSM', href: '/service' },
        { name: 'Asigurări', href: '/asigurari' },
        { name: 'Buy-Back', href: '/buy-back' }
      ]
    },
    {
      title: 'Suport',
      links: [
        { name: 'Cum cumpăr', href: '/cum-cumpar' },
        { name: 'Livrare', href: '/livrare' },
        { name: 'Garanție', href: '/garantie' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  const paymentMethods = [
    { name: 'Visa', image: '/images/payments/visa.svg' },
    { name: 'Mastercard', image: '/images/payments/mastercard.svg' },
    { name: 'Apple Pay', image: '/images/payments/apple-pay.svg' },
    { name: 'Google Pay', image: '/images/payments/google-pay.svg' },
    { name: 'PayPal', image: '/images/payments/paypal.svg' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Section with gradient background */}
      <div className="relative py-20 bg-gray-900">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-transparent opacity-40"></div>
          <div className="absolute right-0 -top-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute left-0 -bottom-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Abonează-te pentru{' '}
              <span className="text-primary">oferte exclusive</span>
            </h2>
            <p className="text-lg text-gray-300">
              Primești <span className="font-semibold text-white">50 RON reducere</span> la prima comandă 
              și vei fi primul care află despre promoții și produse noi.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                className="flex-1 px-6 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 whitespace-nowrap shadow-lg shadow-primary/25"
              >
                Mă abonez
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-4 text-sm text-primary/90 text-center">
                ✨ Mulțumim pentru abonare! Verifică email-ul pentru confirmare.
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Datele tale sunt în siguranță conform{' '}
                <a href="/privacy" className="text-primary hover:text-primary/80 underline underline-offset-2">
                  Politicii de Confidențialitate
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Top section with logo and social */}
          <div className="px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <Link to="/" className="inline-block">
                  <span className="font-['Poppins'] text-3xl font-bold tracking-tight text-white">
                    SGR<span className="text-primary">Shop</span>
                  </span>
                </Link>
                <p className="mt-4 text-gray-400 max-w-md">
                  Echipamente premium recondiţionate, 
                  testate şi verificate de specialiști.
                  Garanție inclusă.
                </p>
              </div>
              <div className="flex items-center gap-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle section with links and ANPC */}
          <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 border-b border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* Navigation Links */}
              {footerSections.map((section) => (
                <div key={section.title} className="col-span-1">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact Info */}
              <div className="col-span-2 md:col-span-1 lg:col-span-2">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Str. Exemplu nr. 123,<br />București, Sector 1</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@sgrshop.ro" className="hover:text-white">contact@sgrshop.ro</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:0123456789" className="hover:text-white">012 345 6789</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section with payment methods and ANPC logos */}
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Payment Methods */}
              <div className="flex flex-col items-center lg:items-start gap-4">
                <p className="text-sm text-gray-400">Metode de plată acceptate</p>
                <div className="flex items-center gap-4">
                  {paymentMethods.map((method) => (
                    <div key={method.name} className="h-8 w-12 bg-white/5 rounded-md p-1">
                      {/* Payment logos would go here */}
                      <span className="sr-only">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ANPC Logos */}
              <div className="flex flex-col items-center lg:items-end gap-4">
                <div className="flex items-center gap-4">
                  <a
                    href="https://anpc.ro/ce-este-sal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors duration-200"
                  >
                    <img
                      src="/images/anpc-sal.png"
                      alt="ANPC SAL"
                      className="h-10 w-auto"
                    />
                  </a>
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors duration-200"
                  >
                    <img
                      src="/images/anpc-sol.png"
                      alt="ANPC SOL"
                      className="h-10 w-auto"
                    />
                  </a>
                </div>
                <p className="text-sm text-gray-400 text-center lg:text-right">
                  ANPC - <a href="http://www.anpc.gov.ro" target="_blank" rel="noopener noreferrer" className="hover:text-white">www.anpc.gov.ro</a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© {currentYear} SGRShop. Toate drepturile rezervate.</p>
              <div className="flex items-center space-x-6">
                <Link to="/termeni" className="hover:text-white transition-colors duration-200">
                  Termeni și condiții
                </Link>
                <Link to="/confidentialitate" className="hover:text-white transition-colors duration-200">
                  Politica de confidențialitate
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors duration-200">
                  Politica de cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;