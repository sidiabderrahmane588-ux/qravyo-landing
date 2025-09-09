import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = () => {
    window.open('https://buy.stripe.com/test_your_checkout_link', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              QRAVYO
            </h1>
          </div>
          
          <button
            onClick={handleSubscribe}
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white
                     transition-all duration-200 transform hover:scale-105 active:scale-95
                     shadow-lg hover:shadow-xl"
            title="Paramètres"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;