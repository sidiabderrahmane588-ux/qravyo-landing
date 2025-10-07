import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
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
              <h2 className="text-2xl font-bold text-gray-900">Mentions légales</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="prose max-w-none text-gray-700 space-y-6 max-h-[70vh] overflow-y-auto">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Informations légales</h3>
                <p>Le site <strong>qravyo.com</strong> est édité par :</p>
                <p><strong>QRAVYO</strong></p>
                <p>Statut : Auto-entreprise</p>
                <p>Email : <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline">qravyo@gmail.com</a></p>
                <p className="mt-2">
                  QRAVYO commercialise un système innovant de <strong>roue de la chance connectée</strong> : les commerçants abonnés reçoivent un QR code physique que leurs clients peuvent scanner pour laisser un avis Google et tenter de gagner un cadeau.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Directeur de la publication</h3>
                <p>Le directeur de la publication est :</p>
                <p><strong>M. Sidi Abderrahmane</strong></p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Hébergement</h3>
                <p>Le site est hébergé par :</p>
                <p><strong>Vercel Inc.</strong></p>
                <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://vercel.com</a></p>
                <p>Services : hébergement web, déploiement d'applications, cloud computing.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Propriété intellectuelle</h3>
                <p>
                  Tous les éléments du site <strong>QRAVYO</strong>, y compris mais sans s'y limiter : textes, images, graphismes, logos, icônes, sons, logiciels et vidéos, sont la propriété exclusive de <strong>QRAVYO</strong>, sauf mention contraire.
                </p>
                <p>
                  Toute reproduction, distribution, modification ou exploitation, totale ou partielle, de ces éléments sans autorisation écrite préalable est strictement interdite.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Protection des données personnelles</h3>
                <p>
                  QRAVYO s'engage à respecter la confidentialité des données personnelles collectées dans le cadre de ses activités.
                </p>
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données.
                </p>
                <p>
                  Pour exercer ce droit, contactez-nous à <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline">qravyo@gmail.com</a>.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Cookies</h3>
                <p>
                  Le site <strong>qravyo.com</strong> utilise des cookies pour améliorer l'expérience utilisateur. Ces fichiers sont stockés sur votre terminal et permettent notamment de faciliter la navigation.
                </p>
                <p>
                  Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
                </p>
                <p>
                  Pour plus d'informations, veuillez consulter notre <strong>Politique de confidentialité</strong>.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Responsabilité</h3>
                <p>
                  QRAVYO s'efforce d'assurer la fiabilité et la mise à jour des informations présentes sur le site.
                </p>
                <p>
                  Cependant, aucune garantie n'est apportée quant à l'exactitude ou l'exhaustivité de ces informations.
                </p>
                <p>
                  QRAVYO ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Liens externes</h3>
                <p>
                  Le site peut contenir des liens vers d'autres sites internet. QRAVYO décline toute responsabilité quant au contenu ou aux pratiques de ces sites tiers.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Modification des mentions légales</h3>
                <p>
                  QRAVYO se réserve le droit de modifier les présentes mentions légales à tout moment.
                </p>
                <p>
                  Les utilisateurs sont invités à les consulter régulièrement afin de rester informés des éventuelles mises à jour.
                </p>
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

export default LegalModal;
