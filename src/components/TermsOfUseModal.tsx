import React from 'react';
import { X } from 'lucide-react';

interface TermsOfUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfUseModal: React.FC<TermsOfUseModalProps> = ({ isOpen, onClose }) => {
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
              <h2 className="text-2xl font-bold text-gray-900">Conditions d'utilisation</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="prose max-w-none text-gray-700 space-y-6 max-h-[70vh] overflow-y-auto">
              <p className="text-sm text-gray-500 mb-4">Dernière mise à jour : 8 octobre 2025</p>

              <p>
                Les présentes <strong>Conditions d'utilisation</strong> régissent l'accès et l'usage du site <strong>qravyo.com</strong>, exploité par <strong>Qravyo</strong>.
              </p>
              <p>
                En accédant à ce site, vous acceptez sans réserve les conditions ci-dessous.
                Si vous n'êtes pas d'accord avec ces conditions, veuillez ne pas utiliser le site.
              </p>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Accès au site</h3>
                <p>
                  Le site <strong>qravyo.com</strong> est accessible gratuitement à toute personne disposant d'un accès à Internet.
                </p>
                <p>
                  Qravyo s'efforce d'assurer la disponibilité du site, mais ne saurait être tenue responsable en cas d'interruptions liées à :
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>des opérations de maintenance,</li>
                  <li>des pannes techniques,</li>
                  <li>ou des événements indépendants de sa volonté.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Utilisation du site</h3>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">2.1 Responsabilité de l'utilisateur</h4>
                <p>
                  L'utilisateur s'engage à utiliser le site de manière conforme à la loi et aux présentes Conditions d'utilisation.
                </p>
                <p>Il est notamment interdit de :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>introduire des virus, programmes malveillants ou tout autre code nuisible ;</li>
                  <li>perturber le bon fonctionnement du site ;</li>
                  <li>utiliser le site pour diffuser du spam ou du contenu illicite ;</li>
                  <li>porter atteinte à l'image, à la réputation ou aux intérêts de <strong>Qravyo</strong>.</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">2.2 Contenu du site</h4>
                <p>
                  Tous les éléments du site (textes, images, logos, graphismes, QR codes, visuels promotionnels, etc.) sont protégés par le <strong>droit d'auteur</strong> et la <strong>propriété intellectuelle</strong>.
                </p>
                <p>
                  Toute reproduction, modification ou diffusion non autorisée est strictement interdite.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Produits proposés</h3>
                <p>
                  Le site <strong>qravyo.com</strong> permet d'acheter des <strong>affiches physiques contenant un QR code</strong> prêtes à l'emploi.
                </p>
                <p>
                  Ces produits sont soumis aux Conditions Générales de Vente (CGV), que l'utilisateur accepte lors de tout achat.
                </p>
                <p>
                  Qravyo se réserve le droit de modifier, suspendre ou supprimer un produit à tout moment sans préavis.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Propriété intellectuelle</h3>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">4.1 Droits d'auteur</h4>
                <p>
                  Le site, sa structure et l'ensemble de son contenu sont la propriété exclusive de <strong>Qravyo</strong>.
                </p>
                <p>
                  Toute reproduction, représentation, diffusion ou exploitation, totale ou partielle, sans autorisation écrite est interdite.
                </p>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">4.2 Marques et logos</h4>
                <p>
                  Le nom <strong>Qravyo</strong>, son logo et tous les éléments distinctifs associés sont des marques appartenant à Qravyo.
                </p>
                <p>
                  Aucune utilisation de ces marques ne peut être faite sans accord préalable écrit.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Responsabilité</h3>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">5.1 Responsabilité de Qravyo</h4>
                <p>
                  Qravyo s'efforce d'assurer le bon fonctionnement et la sécurité du site.
                </p>
                <p>
                  Cependant, elle ne garantit pas l'absence d'erreurs, de bugs ou d'interruptions et ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site.
                </p>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">5.2 Responsabilité de l'utilisateur</h4>
                <p>
                  L'utilisateur est seul responsable de l'usage qu'il fait du site et des informations qu'il y saisit.
                </p>
                <p>
                  Il doit s'assurer que ses données sont exactes et ne contreviennent pas à la loi.
                </p>
                <p>
                  Qravyo ne pourra être tenue responsable de tout dommage résultant d'une utilisation non conforme du site.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Liens externes</h3>
                <p>
                  Le site peut contenir des liens vers d'autres sites Internet.
                </p>
                <p>
                  Qravyo n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.
                </p>
                <p>
                  L'accès à ces sites se fait sous la seule responsabilité de l'utilisateur.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Modification des Conditions d'utilisation</h3>
                <p>
                  Qravyo se réserve le droit de modifier à tout moment les présentes Conditions d'utilisation.
                </p>
                <p>
                  Les modifications entreront en vigueur dès leur publication sur cette page.
                </p>
                <p>
                  Il appartient à l'utilisateur de consulter régulièrement cette page pour se tenir informé des éventuelles mises à jour.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Loi applicable et juridiction</h3>
                <p>
                  Les présentes Conditions d'utilisation sont régies par le <strong>droit français</strong>.
                </p>
                <p>
                  En cas de litige, les tribunaux compétents dépendront du ressort du siège de <strong>Qravyo</strong>.
                </p>
              </section>

              <p className="text-sm text-gray-500 mt-6">© 2025 Qravyo – Tous droits réservés.</p>
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

export default TermsOfUseModal;
