import React from 'react';
import { TrendingUp, Heart, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Plus d'avis Google",
    description: "Augmentez significativement le nombre d'avis vérifiés sur votre établissement",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Heart,
    title: "Fidélisation client",
    description: "Créez un lien unique avec vos clients grâce à l'expérience ludique",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "Image moderne",
    description: "Montrez que votre commerce est innovant et à la pointe de la technologie",
    gradient: "from-purple-500 to-indigo-500"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Pourquoi choisir QRAVYO ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des avantages concrets pour votre business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl 
                            transition-all duration-300 transform hover:-translate-y-2
                            border border-gray-100 hover:border-gray-200">
                
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} 
                                 flex items-center justify-center mx-auto shadow-lg
                                 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-500 
                               transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;