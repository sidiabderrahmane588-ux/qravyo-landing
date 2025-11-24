import React from 'react';
import { Smartphone, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleTryNow = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                🚀 Plus d'avis, plus de visibilité, plus de clients
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                QRAVYO, la solution moderne pour booster votre réputation en ligne.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleTryNow}
                className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full
                         transition-all duration-200 transform hover:scale-105 active:scale-95
                         shadow-lg hover:shadow-xl text-lg"
              >
                Essayez maintenant
              </button>
            </div>
          </div>

          {/* Right Column - iPhone with QR Code */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-[2rem] overflow-hidden w-64 h-[32rem] relative">
                  
                  {/* Screen Content */}
                  <div className="p-8 h-full flex flex-col items-center justify-center space-y-6">
                    
                    {/* QR Code with Scan Effect */}
                    <div className="relative">
                      <div className="w-40 h-40 bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* QR Code Pattern */}
                        <div className="w-32 h-32 bg-gray-900 rounded-lg relative">
                          <div className="absolute inset-2 bg-white"></div>
                          <div className="absolute top-2 left-2 w-6 h-6 bg-gray-900 rounded"></div>
                          <div className="absolute top-2 right-2 w-6 h-6 bg-gray-900 rounded"></div>
                          <div className="absolute bottom-2 left-2 w-6 h-6 bg-gray-900 rounded"></div>
                          {/* QR dots pattern */}
                          <div className="absolute inset-4 grid grid-cols-6 gap-0.5">
                            {Array.from({ length: 24 }).map((_, i) => (
                              <div key={i} className={`w-1 h-1 ${Math.random() > 0.6 ? 'bg-gray-900' : 'bg-white'} rounded-sm`}></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Scanning Effect */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                          <div className="absolute -top-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent 
                                        animate-pulse opacity-80 scan-line"></div>
                        </div>
                      </div>
                      
                      {/* Scan Icons */}
                      <div className="absolute -top-3 -right-3 text-blue-500 animate-bounce">
                        <Sparkles size={20} />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="font-semibold text-gray-900">Scannez pour jouer</h3>
                      <p className="text-sm text-gray-500">Laissez un avis et tentez votre chance</p>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 text-yellow-400 animate-pulse">
                <Sparkles size={24} />
              </div>
              <div className="absolute -bottom-4 -right-4 text-green-400 animate-pulse delay-1000">
                <Sparkles size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for scan effect */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(calc(160px + 100%)); }
        }
        .scan-line {
          animation: scan 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;