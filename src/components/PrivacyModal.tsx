import React from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:h-screen sm:align-middle">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Politique de confidentialité</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="prose max-w-none text-gray-700 space-y-6 max-h-[70vh] overflow-y-auto">
              <p className="text-sm text-gray-500 mb-4">Dernière mise à jour : 10 octobre 2025</p>

              <p>
                Chez <strong>QRAVYO</strong>, nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données personnelles.
                Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos données personnelles lorsque vous utilisez notre site <strong>qravyo.com</strong> et nos services.
              </p>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Données collectées</h3>
                <p>Nous pouvons collecter plusieurs types de données personnelles lorsque vous interagissez avec notre site et nos services, notamment :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Informations personnelles</strong> : nom, prénom, adresse email, numéro de téléphone, adresse postale.</li>
                  <li><strong>Données de paiement</strong> : informations nécessaires pour traiter vos paiements (via un prestataire de paiement sécurisé).</li>
                  <li><strong>Données de navigation</strong> : adresse IP, type de navigateur, pages visitées, durée de la visite, informations sur votre appareil (cookies).</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Utilisation des données</h3>
                <p>Les données collectées sont utilisées pour :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Fournir et améliorer nos services.</li>
                  <li>Traiter vos commandes et paiements.</li>
                  <li>Vous envoyer des informations relatives à votre compte, vos abonnements ou des mises à jour importantes.</li>
                  <li>Vous informer de nos promotions, offres spéciales ou nouveautés (si vous avez donné votre consentement).</li>
                  <li>Analyser les performances du site et améliorer votre expérience utilisateur.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Partage des données</h3>
                <p><strong>QRAVYO</strong> ne vend pas vos données personnelles.</p>
                <p>Elles peuvent être partagées uniquement dans les cas suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Prestataires de services tiers</strong> : par exemple, prestataires de paiement ou partenaires techniques pour la gestion de l'hébergement ou des transactions.</li>
                  <li><strong>Obligations légales</strong> : si la loi nous y oblige ou pour protéger nos droits et notre sécurité.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Protection des données</h3>
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre la perte, l'accès non autorisé, l'altération ou la divulgation.
                </p>
                <p>
                  L'accès à vos données est strictement limité aux personnes autorisées.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Vos droits</h3>
                <p>Conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong>, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Droit d'accès</strong> : obtenir une copie des données personnelles que nous détenons sur vous.</li>
                  <li><strong>Droit de rectification</strong> : corriger des informations inexactes ou incomplètes.</li>
                  <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données, sous certaines conditions.</li>
                  <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et lisible par machine.</li>
                  <li><strong>Droit d'opposition</strong> : refuser le traitement de vos données à des fins spécifiques (notamment marketing).</li>
                </ul>
                <p className="mt-2">Pour exercer vos droits, contactez-nous à : <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline"><strong>qravyo@gmail.com</strong></a></p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Cookies</h3>
                <p>
                  Le site <strong>qravyo.com</strong> utilise des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.
                </p>
                <p>
                  Les cookies sont de petits fichiers stockés sur votre appareil.
                </p>
                <p>
                  Vous pouvez refuser ou gérer l'utilisation des cookies via les paramètres de votre navigateur.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Modifications de la politique de confidentialité</h3>
                <p>
                  QRAVYO se réserve le droit de modifier cette politique à tout moment.
                </p>
                <p>
                  Toute mise à jour sera publiée sur cette page et prendra effet immédiatement.
                </p>
                <p>
                  Nous vous invitons à la consulter régulièrement pour rester informé de la manière dont vos données sont protégées.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Contact</h3>
                <p>Pour toute question concernant cette politique ou l'exercice de vos droits :</p>
                <p><strong>Email</strong> : <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline">qravyo@gmail.com</a></p>
                <p><strong>Adresse</strong> : 1 rue Albert Thomas, France</p>
              </section>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
