import React from 'react';

const SellSteps = () => {
  const steps = [
    {
      number: '01',
      title: 'Evaluare instant',
      description: 'Completează formularul cu detaliile telefonului tău și primești o evaluare pe loc.'
    },
    {
      number: '02',
      title: 'Verificare și expediere',
      description: 'Trimite telefonul gratuit prin curier. Îl vom verifica și îți vom face o ofertă finală.'
    },
    {
      number: '03',
      title: 'Primește banii',
      description: 'Acceptă oferta și primești banii instant în contul tău bancar.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            {/* Temporary gradient background - replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />
            {/* Uncomment and add your image path when ready */}
            {/* <img 
              src="/images/sell-phone.jpg" 
              alt="Vinde-ți telefonul" 
              className="w-full h-full object-cover"
            /> */}
          </div>

          {/* Right side - Steps */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pași pentru a-ți vinde telefonul
              </h2>
              <p className="text-gray-600 text-lg">
                Procesul este simplu și rapid. Urmează acești pași pentru a-ți vinde telefonul în siguranță.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex group">
                  <div className="mr-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-200">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center space-x-3 group">
              <span>Vinde-ți telefonul acum</span>
              <div className="relative w-5">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-5 w-5 absolute transition-transform duration-300 group-hover:translate-x-[200%]" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-5 w-5 absolute transition-transform duration-300 -translate-x-[200%] group-hover:translate-x-0" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellSteps;