import React from 'react';
import { FileText } from 'lucide-react';

const Footer = () => {
  const handleSubscribe = () => {
    window.open('https://buy.stripe.com/test_your_checkout_link', '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">QRAVYO</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              La solution moderne pour booster vos avis Google et fidéliser vos clients 
              grâce à la gamification.
            </p>
            
            {/* CTA Button */}
            <button 
              onClick={handleSubscribe}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full 
                       transition-all duration-200 transform hover:scale-105 active:scale-95
                       shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>Commencer maintenant</span>
            </button>
          </div>

          {/* Informations */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="text-lg font-semibold">Informations</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white
                                   transition-colors duration-200">
                <FileText size={18} />
                <span>Mentions légales</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white
                                   transition-colors duration-200">
                <FileText size={18} />
                <span>Politique de confidentialité</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white
                                   transition-colors duration-200">
                <FileText size={18} />
                <span>Politique de remboursement</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white
                                   transition-colors duration-200">
                <FileText size={18} />
                <span>Politique d'expédition</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white
                                   transition-colors duration-200">
                <FileText size={18} />
                <span>Conditions de vente</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white
                                   transition-colors duration-200">
                <FileText size={18} />
                <span>Conditions d'utilisation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} QRAVYO. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Paiements sécurisés par</span>
              <div className="bg-white rounded px-2 py-1">
                <span className="text-purple-600 font-bold">stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;