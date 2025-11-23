import React from 'react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Contactez-nous
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-2xl p-4 flex-shrink-0">
                <Mail className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:contact@rushup.fr"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                >
                  contact@rushup.fr
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-2xl p-4 flex-shrink-0">
                <Phone className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Téléphone</h3>
                <a
                  href="tel:0651981614"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                >
                  06.51.98.16.14
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-2xl p-4 flex-shrink-0">
                <MessageCircle className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-lg">Contact rapide</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-2xl p-4 flex-shrink-0">
                <MapPin className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Société</h3>
                <p className="text-gray-600 text-lg">RUSHUP SASU</p>
                <p className="text-gray-600">Hébergeur: LWS</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-lg">
              Notre équipe vous accompagne du lundi au vendredi de 9h à 18h.<br />
              Réponse garantie sous 24h !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
