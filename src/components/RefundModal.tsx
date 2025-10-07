import React from 'react';
import { X } from 'lucide-react';

interface RefundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RefundModal: React.FC<RefundModalProps> = ({ isOpen, onClose }) => {
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
              <h2 className="text-2xl font-bold text-gray-900">Politique de remboursement</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="prose max-w-none text-gray-700 space-y-6 max-h-[70vh] overflow-y-auto">
              <p>
                Chez Qravyo, nous mettons tout en œuvre pour fournir des services de qualité afin d'aider nos clients à collecter des avis et fidéliser leur clientèle via notre solution. Cependant, conformément à la législation française et à la nature spécifique de nos services numériques, voici les conditions de remboursement applicables.
              </p>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Produits numériques (abonnements, accès à la plateforme, etc.)</h3>
                <p>
                  Nos services étant des prestations numériques fournies de manière progressive ou instantanée, une commande est considérée comme consommée dès que la livraison ou l'accès au service a commencé.
                </p>
                <p>
                  👉 Par conséquent, une fois la commande livrée (partiellement ou totalement), aucun remboursement ne pourra être effectué.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Services non fournis ou erreurs</h3>
                <p>
                  En cas de problème technique ou si un service n'a pas été livré conformément à la description sur notre site, vous pouvez demander un remboursement ou un avoir. Dans ce cas, veuillez nous contacter immédiatement après constatation du problème afin que nous puissions trouver une solution.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Annulation de commande</h3>
                <p>
                  Il est possible d'annuler une commande uniquement si le traitement n'a pas encore débuté. Pour cela, vous devez nous contacter dans un délai maximum de 24 heures après votre achat. Passé ce délai ou si la livraison a déjà commencé, l'annulation et le remboursement ne seront plus possibles.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Procédure de remboursement</h3>
                <p>Pour toute demande, merci de nous contacter à :</p>
                <p>📩 Email : <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline">qravyo@gmail.com</a></p>
                <p>Objet : [Remboursement – Numéro de commande]</p>
                <p className="mt-2">Veuillez préciser les informations suivantes :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Votre numéro de commande</li>
                  <li>Les détails de l'achat concerné</li>
                  <li>La raison de la demande de remboursement</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Délais de remboursement</h3>
                <p>
                  En cas d'acceptation, le remboursement sera effectué sur le moyen de paiement utilisé lors de la commande, dans un délai de 7 à 14 jours ouvrés.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Exceptions</h3>
                <p>Aucun remboursement ne sera accordé dans les cas suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>La commande a déjà été livrée, partiellement ou totalement.</li>
                  <li>La demande est faite en dehors des délais indiqués ci-dessus.</li>
                  <li>La commande a été effectuée avec des informations frauduleuses ou erronées.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modifications de la politique</h3>
                <p>
                  Qravyo se réserve le droit de modifier la présente politique à tout moment. Toute mise à jour sera publiée sur cette page et prendra effet immédiatement.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                <p><strong>Qravyo – Service Client</strong></p>
                <p>📩 Email : <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline">qravyo@gmail.com</a></p>
                <p>📍 Adresse : 1 Rue Albert Thomas, Fresnes, France</p>
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

export default RefundModal;
