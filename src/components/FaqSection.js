import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Cum pot să-mi vând telefonul pe platforma voastră?',
      answer: 'Procesul este foarte simplu: completează formularul de evaluare cu detaliile telefonului tău, primești o ofertă instant, trimiți telefonul gratuit prin curier, iar după verificare primești banii în cont în maxim 24 de ore.'
    },
    {
      question: 'Ce garanție oferită pentru telefoanele recondiționate?',
      answer: 'Toate telefoanele recondiționate vin cu o garanție de 24 de luni și drept de retur în 30 de zile. Fiecare telefon trece printr-un proces riguros de verificare în 30 de puncte.'
    },
    {
      question: 'Care sunt metodele de plată acceptate?',
      answer: 'Acceptăm plăți prin card bancar (credit/debit), transfer bancar, PayPal și plata în rate prin partenerii noștri financiari. Pentru plățile cu cardul, tranzacțiile sunt 100% sigure și criptate.'
    },
    {
      question: 'Cât durează livrarea?',
      answer: 'Livrarea standard durează 1-2 zile lucrătoare. Pentru comenzile plasate până în ora 15:00, livrarea se poate face în următoarea zi lucrătoare în majoritatea orașelor.'
    },
    {
      question: 'Ce se întâmplă dacă produsul prezintă defecte?',
      answer: 'În cazul unor defecte, poți returna produsul în primele 30 de zile pentru înlocuire sau rambursare completă. După această perioadă, produsul este acoperit de garanția standard de 24 de luni.'
    },
    {
      question: 'Cum verificați calitatea telefoanelor recondiționate?',
      answer: 'Fiecare telefon trece printr-un proces riguros de verificare în 30 de puncte, incluzând teste de performanță, baterie, cameră și multe altele. Doar telefoanele care trec toate testele ajung să fie puse în vânzare.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Întrebări Frecvente
          </h2>
          <p className="text-xl text-gray-600">
            Află răspunsurile la cele mai comune întrebări despre serviciile noastre
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out overflow-hidden ${
                  openIndex === index ? 'py-5 border-t border-gray-100' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Nu ai găsit răspunsul căutat?</p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors duration-200">
            Contactează-ne
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;