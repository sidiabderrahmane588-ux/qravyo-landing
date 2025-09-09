import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marie Dubois",
    business: "Boulangerie Le Petit Pain",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Depuis QRAVYO, j'ai 3x plus d'avis Google ! Mes clients adorent la roue de la chance. Génial !"
  },
  {
    name: "Thomas Martin",
    business: "Garage Auto Prestige",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Interface super simple, résultats impressionnants. Mes clients reviennent plus souvent maintenant."
  },
  {
    name: "Sophie Leclerc",
    business: "Salon de Coiffure Élégance",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Excellent investissement ! L'effet gamification plaît énormément à ma clientèle jeune."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez l'expérience de nos commerçants partenaires
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl 
                            transition-all duration-300 transform hover:-translate-y-2
                            border border-gray-200 hover:border-gray-300">
                
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-600 text-center leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200
                             group-hover:ring-blue-500 transition-all duration-200"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;