import React from 'react';
import { X } from 'lucide-react';

interface ShippingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShippingModal: React.FC<ShippingModalProps> = ({ isOpen, onClose }) => {
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
              <h2 className="text-2xl font-bold text-gray-900">Politique d'expédition</h2>
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
                Chez <strong>Qravyo</strong>, nous nous engageons à assurer une livraison rapide et fiable pour toutes les commandes passées sur notre site. Cette politique d'expédition décrit les modalités de traitement, d'envoi et de réception de nos <strong>affiches QR code</strong>.
              </p>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Type de produit</h3>
                <p>
                  Les produits expédiés par Qravyo sont des <strong>affiches physiques</strong> contenant un QR code préimprimé.
                </p>
                <p>
                  Ces affiches ne sont <strong>pas personnalisables</strong> et sont prêtes à être utilisées dès leur réception.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Délai de traitement et d'expédition</h3>
                <p>
                  Chaque commande est préparée et expédiée dans un délai moyen de <strong>2 à 5 jours ouvrés</strong> après la confirmation du paiement.
                </p>
                <p>
                  Une fois la commande expédiée, le client reçoit un <strong>email de confirmation d'envoi</strong>, incluant les informations de suivi du colis si applicable.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Zones de livraison</h3>
                <p>Nous livrons actuellement en :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>France métropolitaine</li>
                  <li>Union européenne</li>
                </ul>
                <p className="mt-2">
                  Pour toute demande de livraison en dehors de ces zones, veuillez nous contacter avant de passer commande.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Délais de livraison</h3>
                <p>Les délais moyens de livraison sont les suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>France métropolitaine :</strong> 3 à 7 jours ouvrés</li>
                  <li><strong>Union européenne :</strong> 5 à 10 jours ouvrés</li>
                </ul>
                <p className="mt-2">
                  Ces délais peuvent varier selon le transporteur et les périodes de forte activité.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Problèmes de réception ou colis non reçu</h3>
                <p>Si vous ne recevez pas votre commande dans le délai prévu, nous vous invitons à :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Vérifier l'adresse de livraison renseignée lors de votre achat ;</li>
                  <li>Consulter le suivi de votre colis (si disponible) ;</li>
                  <li>Nous contacter à <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline"><strong>qravyo@gmail.com</strong></a> en précisant votre <strong>numéro de commande</strong> et le <strong>problème rencontré</strong>.</li>
                </ul>
                <p className="mt-2">
                  Notre équipe s'engage à trouver une solution rapide (renvoi ou remboursement selon le cas).
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Modification ou annulation de commande</h3>
                <p>
                  Une commande peut être modifiée ou annulée <strong>uniquement avant son expédition</strong>.
                </p>
                <p>
                  Toute demande doit être adressée à <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline"><strong>qravyo@gmail.com</strong></a> dans un délai maximum de <strong>24 heures après l'achat</strong>.
                </p>
                <p>
                  Une fois la commande expédiée, aucune annulation ni remboursement ne pourra être effectuée.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Modifications de la politique d'expédition</h3>
                <p>
                  Qravyo se réserve le droit de modifier cette politique à tout moment. Les changements entreront en vigueur dès leur publication sur cette page.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Contact</h3>
                <p><strong>Service Client Qravyo</strong></p>
                <p>📩 Email : <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline">qravyo@gmail.com</a></p>
                <p>📍 Adresse : 1 Rue Albert Thomas, Fresnes, France</p>
              </section>

              <p className="text-sm text-gray-500 mt-6">© 2025 Qravyo. Tous droits réservés.</p>
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

export default ShippingModal;
