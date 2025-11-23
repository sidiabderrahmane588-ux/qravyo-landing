import React, { useState } from 'react';
import { FileText, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import LegalModal from './LegalModal';
import PrivacyModal from './PrivacyModal';
import RefundModal from './RefundModal';
import ShippingModal from './ShippingModal';
import TermsOfSaleModal from './TermsOfSaleModal';
import TermsOfUseModal from './TermsOfUseModal';

const Footer = () => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
  const [isTermsOfSaleModalOpen, setIsTermsOfSaleModalOpen] = useState(false);
  const [isTermsOfUseModalOpen, setIsTermsOfUseModalOpen] = useState(false);

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
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <a
              href="mailto:qravyo@gmail.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-white
                        transition-colors duration-200">
              <Mail size={18} />
              <span>qravyo@gmail.com</span>
            </a>
          </div>

          {/* Informations */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Informations</h4>
            <div className="space-y-3">
              <button
                onClick={() => setIsLegalModalOpen(true)}
                className="flex items-center space-x-2 text-gray-400 hover:text-white
                          transition-colors duration-200">
                <FileText size={18} />
                <span>Mentions légales</span>
              </button>
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="flex items-center space-x-2 text-gray-400 hover:text-white
                          transition-colors duration-200">
                <FileText size={18} />
                <span>Politique de confidentialité</span>
              </button>
              <button
                onClick={() => setIsRefundModalOpen(true)}
                className="flex items-center space-x-2 text-gray-400 hover:text-white
                          transition-colors duration-200">
                <FileText size={18} />
                <span>Politique de remboursement</span>
              </button>
              <button
                onClick={() => setIsShippingModalOpen(true)}
                className="flex items-center space-x-2 text-gray-400 hover:text-white
                          transition-colors duration-200">
                <FileText size={18} />
                <span>Politique d'expédition</span>
              </button>
              <button
                onClick={() => setIsTermsOfSaleModalOpen(true)}
                className="flex items-center space-x-2 text-gray-400 hover:text-white
                          transition-colors duration-200">
                <FileText size={18} />
                <span>Conditions de vente</span>
              </button>
              <button
                onClick={() => setIsTermsOfUseModalOpen(true)}
                className="flex items-center space-x-2 text-gray-400 hover:text-white
                          transition-colors duration-200">
                <FileText size={18} />
                <span>Conditions d'utilisation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="flex justify-center items-center space-x-6">
            <a
              href="https://instagram.com/qravyo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://facebook.com/qravyo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://twitter.com/qravyo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
            <a
              href="https://tiktok.com/@qravyo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
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

      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <RefundModal isOpen={isRefundModalOpen} onClose={() => setIsRefundModalOpen(false)} />
      <ShippingModal isOpen={isShippingModalOpen} onClose={() => setIsShippingModalOpen(false)} />
      <TermsOfSaleModal isOpen={isTermsOfSaleModalOpen} onClose={() => setIsTermsOfSaleModalOpen(false)} />
      <TermsOfUseModal isOpen={isTermsOfUseModalOpen} onClose={() => setIsTermsOfUseModalOpen(false)} />
    </footer>
  );
};

export default Footer;