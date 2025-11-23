import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-500 rounded-2xl p-4 flex-shrink-0">
              <Mail className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:Qravyo@gmail.com"
                className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
              >
                Qravyo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
