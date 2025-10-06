import React from 'react';
import { QrCode, Star, Gift } from 'lucide-react';

const steps = [
  {
    icon: QrCode,
    title: "Le client scanne",
    description: "Votre client scanne le QR code QRAVYO affiché dans votre commerce",
    color: "text-blue-500"
  },
  {
    icon: Star,
    title: "Il laisse un avis",
    description: "Il est dirigé vers Google pour laisser un avis authentique sur votre établissement",
    color: "text-yellow-500"
  },
  {
    icon: Gift,
    title: "Il gagne peut-être",
    description: "Il fait tourner la roue de la chance et peut remporter un petit cadeau",
    color: "text-green-500"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple en 3 étapes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto
                              group-hover:bg-gray-50 transition-colors duration-200">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r 
                              from-gray-200 to-transparent transform translate-x-8 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;