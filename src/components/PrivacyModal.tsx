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
              <p>
                Chez <strong>Qravyo</strong>, nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données personnelles.
                Cette politique de confidentialité vous explique comment nous collectons, utilisons, partageons et protégeons vos données personnelles lorsque vous utilisez notre site <strong>qravyo.com</strong> et nos services.
              </p>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Données collectées</h3>
                <p>Nous collectons plusieurs types de données personnelles lorsque vous interagissez avec notre site et nos services, telles que :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Informations personnelles</strong> : nom, prénom, adresse email, numéro de téléphone, adresse postale.</li>
                  <li><strong>Données de paiement</strong> : informations nécessaires pour traiter vos paiements (via le prestataire <strong>Stripe</strong>, conforme aux normes de sécurité PCI-DSS).</li>
                  <li><strong>Données de navigation</strong> : adresse IP, type de navigateur, pages visitées, heure et durée de la visite, informations sur votre appareil (cookies).</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Utilisation des données</h3>
                <p>Les données personnelles que nous collectons sont utilisées pour :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Fournir et améliorer nos services.</li>
                  <li>Gérer les abonnements et traiter les paiements.</li>
                  <li>Vous envoyer des informations relatives à votre compte, des confirmations de commande ou des mises à jour importantes.</li>
                  <li>Vous informer de nos offres, nouveautés ou promotions, si vous avez consenti à recevoir ces communications.</li>
                  <li>Analyser les performances du site et améliorer l'expérience utilisateur.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Partage des données</h3>
                <p><strong>Qravyo</strong> ne vend pas vos données personnelles à des tiers. Nous pouvons partager vos données dans les cas suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Prestataires de services tiers</strong> : avec nos partenaires de confiance (comme <strong>Stripe</strong> pour les paiements ou Vercel pour l'hébergement) afin d\'assurer la gestion des transactions et des services.</li>
                  <li><strong>Obligations légales</strong> : si la loi l'exige ou pour protéger nos droits et la sécurité de nos utilisateurs.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Protection des données</h3>
                <p>Nous mettons en place des mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles contre la perte, l'accès non autorisé, la modification ou la divulgation.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Vos droits</h3>
                <p>Conformément au Règlement Général sur la Protection des Données (<strong>RGPD</strong>) et à la loi "Informatique et Libertés" du 6 janvier 1978, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles.</li>
                  <li><strong>Droit de rectification</strong> : corriger vos données si elles sont inexactes.</li>
                  <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données dans certaines conditions.</li>
                  <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.</li>
                  <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données, notamment à des fins de prospection commerciale.</li>
                </ul>
                <p className="mt-2">Pour exercer vos droits, contactez-nous à l'adresse suivante :</p>
                <p><strong>Email</strong> : <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline">qravyo@gmail.com</a></p>
                <p><strong>Adresse postale</strong> : 1 Rue Albert Thomas, <strong>Fresnes, France</strong></p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Cookies</h3>
                <p>Le site utilise des cookies afin d'améliorer votre expérience, analyser le trafic et personnaliser le contenu.</p>
                <p>Un cookie est un petit fichier stocké sur votre appareil lors de votre visite. Vous pouvez gérer ou désactiver les cookies dans les paramètres de votre navigateur.</p>
                <p>Pour plus d'informations, consultez notre <strong>Politique de Cookies</strong>.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Modifications de la politique de confidentialité</h3>
                <p>Qravyo se réserve le droit de mettre à jour cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page et prendra effet immédiatement. Nous vous recommandons de consulter régulièrement cette politique afin de rester informé des éventuelles mises à jour.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Contact</h3>
                <p>Si vous avez des questions concernant cette politique de confidentialité ou si vous souhaitez exercer vos droits, vous pouvez nous contacter à :</p>
                <p><strong>Email</strong> : <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline">qravyo@gmail.com</a></p>
                <p><strong>Adresse postale</strong> : 1 Rue Albert Thomas, <strong>Fresnes, France</strong></p>
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
