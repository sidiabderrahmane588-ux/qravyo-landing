import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qu'est-ce que Qravyo ?",
    answer: "Qravyo est un outil marketing simple et ludique qui aide les commerces à obtenir plus d'avis clients grâce à une roue de la fortune virtuelle."
  },
  {
    question: "Comment ça fonctionne ?",
    answer: "C'est très simple :\n- Vous recevez une affiche\n- Vous la placez sur le comptoir\n- Le client scanne le QR code\n- Il laisse son avis\n- Il tourne la roue"
  },
  {
    question: "Qui offre les cadeaux ?",
    answer: "C'est Qravyo qui s'occupe d'offrir les cadeaux aux clients gagnants. Vous n'avez rien à fournir : tout est pris en charge par notre équipe. Votre seul rôle est de permettre à vos clients de participer en scannant le QR code."
  },
  {
    question: "Quels sont les avantages de Qravyo ?",
    answer: "Avec Qravyo, vos clients satisfaits deviennent vos meilleurs ambassadeurs !\n- Plus d'avis clients\n- Plus grande visibilité et meilleure réputation en ligne\n- Augmentation du chiffre d'affaires grâce à la fidélisation et à l'attraction de nouveaux clients sans effort"
  },
  {
    question: "Combien ça coûte ?",
    answer: "Qravyo fonctionne sur un abonnement mensuel simple et sans engagement."
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer: "Oui, vous pouvez arrêter quand vous voulez depuis votre espace personnel. Aucun engagement, aucune complication."
  },
  {
    question: "Comment démarrer ?",
    answer: "Cliquez sur \"Acheter\", créez votre compte, et recevez votre affiche prête à poser dans votre commerce."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Qravyo
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-blue-600">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="mailto:qravyo@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
