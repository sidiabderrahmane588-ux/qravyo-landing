import React from 'react';
import { Check, Zap } from 'lucide-react';

const features = [
  "Accès à la roue de la chance",
  "Disponible 24h/24 7/7 à qravyo@gmail.com",
  "Configuration rapide",
  "Mise à jour gratuite"
];

const Pricing = () => {
  const handleSubscribe = () => {
    window.open('https://buy.stripe.com/test_your_checkout_link', '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Tarifs simples et transparents
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un seul plan, tout inclus, sans engagement
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
            
            {/* Monthly Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 
                          hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Mensuel</h3>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-4xl font-bold text-gray-900">49,99€</span>
                    <span className="text-gray-600">/mois</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={handleSubscribe}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-full 
                           transition-all duration-200 transform hover:scale-105 active:scale-95
                           shadow-lg hover:shadow-xl"
                >
                  Je m'abonne
                </button>
              </div>
            </div>

            {/* Lifetime Plan */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 shadow-xl 
                          transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              
              {/* Launch Offer Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full
                              flex items-center space-x-1 animate-pulse">
                  <Zap size={12} />
                  <span>-15% OFFRE DE LANCEMENT</span>
                </div>
              </div>

              <div className="text-center space-y-6 text-white">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Annuel</h3>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-semibold line-through text-green-200 opacity-75">349,99€</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-4xl font-bold">297,49€</span>
                      <span className="text-green-100">/an</span>
                    </div>
                  </div>
                  <p className="text-green-100 text-sm font-semibold">Économisez 302€/an · Offre limitée !</p>
                </div>

                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={handleSubscribe}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-full 
                           transition-all duration-200 transform hover:scale-105 active:scale-95
                           shadow-lg hover:shadow-xl"
                >
                  Je m'abonne
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;