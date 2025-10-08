import React from 'react';
import { X } from 'lucide-react';

interface TermsOfSaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfSaleModal: React.FC<TermsOfSaleModalProps> = ({ isOpen, onClose }) => {
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
              <h2 className="text-2xl font-bold text-gray-900">Conditions Générales de Vente (CGV)</h2>
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
                Les présentes <strong>Conditions Générales de Vente</strong> régissent l'ensemble des ventes effectuées sur le site <strong>qravyo.com</strong>.
                Toute commande passée sur le site implique l'acceptation pleine et entière des présentes conditions par le client.
              </p>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Identification de l'éditeur du site</h3>
                <p>Le site <strong>qravyo.com</strong> est édité par :</p>
                <p><strong>Nom commercial :</strong> Qravyo</p>
                <p><strong>Statut juridique :</strong> Auto-entreprise</p>
                <p><strong>Adresse :</strong> 1 Rue Albert Thomas, Fresnes, France</p>
                <p><strong>Email :</strong> <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline">qravyo@gmail.com</a></p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Produits proposés</h3>
                <p>
                  Qravyo commercialise des <strong>affiches physiques contenant un QR code</strong>.
                </p>
                <p>
                  Ces affiches ne sont <strong>pas personnalisables</strong> et sont prêtes à être utilisées dès réception.
                </p>
                <p>
                  Les produits sont décrits et présentés avec la plus grande exactitude possible. Cependant, si des erreurs ou omissions s'y glissent, la responsabilité de Qravyo ne saurait être engagée.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Commandes</h3>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">3.1 Processus de commande</h4>
                <p>Pour passer une commande sur notre site, le client doit :</p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Sélectionner le produit souhaité.</li>
                  <li>L'ajouter au panier.</li>
                  <li>Vérifier les informations de commande et procéder au paiement sécurisé.</li>
                  <li>Recevoir un e-mail de confirmation de commande.</li>
                </ol>
                <p className="mt-2">Une commande validée est considérée comme <strong>ferme et définitive</strong>.</p>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">3.2 Modification ou annulation</h4>
                <p>
                  Une commande peut être modifiée ou annulée <strong>uniquement avant son expédition</strong>.
                </p>
                <p>
                  Toute demande doit être envoyée à <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline"><strong>qravyo@gmail.com</strong></a> dans un délai maximum de <strong>24 heures après l'achat</strong>.
                </p>
                <p>
                  Une fois le produit expédié, aucune modification ni annulation ne sera possible.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Prix et paiement</h3>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">4.1 Prix</h4>
                <p>
                  Les prix affichés sur le site <strong>sont indiqués en euros, toutes taxes comprises (TTC)</strong>.
                </p>
                <p>
                  Qravyo se réserve le droit de modifier ses tarifs à tout moment, mais le prix applicable restera celui affiché au moment de la commande.
                </p>

                <h4 className="font-semibold text-gray-900 mt-3 mb-2">4.2 Modes de paiement</h4>
                <p>Le paiement peut être effectué via :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Carte bancaire</strong></li>
                  <li><strong>PayPal</strong></li>
                </ul>
                <p className="mt-2">
                  Les transactions sont sécurisées via nos prestataires de paiement partenaires. La commande est traitée uniquement après confirmation du paiement.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Livraison</h3>
                <p>
                  Les affiches QR code sont expédiées dans un délai moyen de <strong>2 à 5 jours ouvrés</strong> après validation du paiement.
                </p>
                <p>
                  Les livraisons sont effectuées en <strong>France métropolitaine</strong> et dans l'<strong>Union européenne</strong>.
                </p>
                <p>
                  Les délais de livraison varient selon la destination, généralement entre <strong>3 et 10 jours ouvrés</strong>.
                </p>
                <p>
                  Un e-mail de confirmation d'expédition est envoyé au client dès le départ du colis.
                </p>
                <p>
                  Pour plus de détails, consultez notre Politique d'expédition.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Droit de rétractation et remboursement</h3>
                <p>
                  Les affiches étant des produits physiques expédiés rapidement après commande, le droit de rétractation peut être exercé <strong>tant que la commande n'a pas été expédiée</strong>.
                </p>
                <p>
                  Après expédition, aucun remboursement ne sera possible sauf en cas de défaut du produit ou d'erreur de livraison.
                </p>
                <p>
                  En cas de problème, le client doit contacter <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline"><strong>qravyo@gmail.com</strong></a> afin qu'une solution amiable soit trouvée (renvoi ou remboursement).
                </p>
                <p>
                  Pour plus d'informations, consultez notre Politique de remboursement.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Garanties</h3>
                <p>
                  Les produits vendus bénéficient de la <strong>garantie légale de conformité</strong> et de la <strong>garantie contre les vices cachés</strong>, conformément aux articles L.217-4 et suivants du Code de la consommation.
                </p>
                <p>
                  En cas de produit défectueux, le client peut demander un remplacement ou un remboursement.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Responsabilité</h3>
                <p>
                  Qravyo ne pourra être tenue responsable des retards ou de la non-exécution du contrat en cas de <strong>force majeure</strong> (grève, incident logistique, catastrophe naturelle, etc.).
                </p>
                <p>
                  Qravyo ne saurait également être responsable des dommages indirects liés à l'utilisation ou à la livraison du produit.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Protection des données personnelles</h3>
                <p>
                  Les données collectées lors de la commande sont nécessaires à son traitement.
                </p>
                <p>
                  Qravyo s'engage à respecter la <strong>confidentialité</strong> des informations communiquées et à ne pas les transmettre à des tiers sans consentement.
                </p>
                <p>
                  Conformément au RGPD, chaque client dispose d'un <strong>droit d'accès, de rectification et de suppression</strong> de ses données personnelles.
                </p>
                <p>
                  Pour exercer ces droits, contactez : <a href="mailto:qravyo@gmail.com" className="text-blue-600 hover:underline"><strong>qravyo@gmail.com</strong></a>.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">10. Propriété intellectuelle</h3>
                <p>
                  Tous les éléments présents sur le site <strong>qravyo.com</strong> (textes, visuels, logos, nom commercial, contenu graphique) sont la propriété exclusive de Qravyo.
                </p>
                <p>
                  Toute reproduction ou utilisation sans autorisation écrite préalable est strictement interdite.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">11. Modification des conditions</h3>
                <p>
                  Qravyo se réserve le droit de modifier à tout moment les présentes Conditions Générales de Vente.
                </p>
                <p>
                  Les nouvelles dispositions prendront effet dès leur publication sur le site.
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

export default TermsOfSaleModal;
