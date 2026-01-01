import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - EDGE IPTV',
  description: 'Politique de confidentialité pour l\'application EDGE IPTV. Découvrez comment nous traitons vos données et protégeons votre vie privée.',
  alternates: {
    canonical: 'https://edge-iptv.app/fr/privacy-policy',
    languages: {
      'en': 'https://edge-iptv.app/privacy-policy',
      'fr': 'https://edge-iptv.app/fr/privacy-policy',
    },
  },
};

export default function PrivacyPolicyFR() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/fr" className="flex items-center gap-3">
            <Image src="/images/icon.png" alt="Logo EDGE IPTV" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              EN
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <Link href="/fr" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors mb-6">
                <ArrowLeft size={16} />
                Retour à l'accueil
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Politique de Confidentialité</h1>
              <p className="text-gray-500">Dernière mise à jour : 14 mai 2025</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Cette Politique de Confidentialité décrit nos politiques et procédures concernant la collecte, l'utilisation et la divulgation de vos informations lorsque vous utilisez l'application Edge IPTV.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Collecte et Utilisation des Données</h2>
              <p className="text-gray-600 mb-4">
                Edge IPTV est conçu pour respecter votre vie privée. Nous ne collectons pas d'informations personnellement identifiables vous concernant, sauf si vous nous les fournissez volontairement.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Informations que Nous Collectons</h3>
              <p className="text-gray-600 mb-3">Lors de l'utilisation de notre application, nous pouvons collecter les informations suivantes :</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Informations d'usage anonymes pour améliorer l'application</li>
                <li>Journaux d'erreurs en cas de plantage de l'application</li>
                <li>Préférences de configuration que vous définissez dans l'application</li>
                <li>URLs IPTV que vous ajoutez à l'application (stockées uniquement localement sur votre appareil)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Stockage des Données</h3>
              <p className="text-gray-600 mb-6">
                Toutes les listes IPTV, URLs et identifiants que vous saisissez dans l'application sont stockés uniquement sur votre appareil. Nous ne transmettons pas ces informations à nos serveurs ou à des tiers.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Données d'Analyse</h3>
              <p className="text-gray-600 mb-6">
                Nous collectons des données d'usage anonymes pour améliorer continuellement notre application. Ces données nous aident à comprendre comment les utilisateurs interagissent avec l'application et à identifier les améliorations possibles. Toutes les données collectées sont agrégées et ne contiennent aucune information personnellement identifiable.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Sécurité</h3>
              <p className="text-gray-600 mb-6">
                La sécurité de vos données est importante pour nous, mais rappelez-vous qu'aucune méthode de transmission sur Internet, ou méthode de stockage électronique n'est sûre à 100%. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos informations personnelles, nous ne pouvons garantir leur sécurité absolue.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Modifications de cette Politique de Confidentialité</h3>
              <p className="text-gray-600 mb-4">
                Nous pouvons mettre à jour notre Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de Confidentialité sur cette page.
              </p>
              <p className="text-gray-600 mb-6">
                Il vous est conseillé de consulter cette Politique de Confidentialité périodiquement pour tout changement. Les modifications de cette Politique de Confidentialité sont effectives lorsqu'elles sont publiées sur cette page.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Nous Contacter</h3>
              <p className="text-gray-600 mb-2">Si vous avez des questions concernant cette Politique de Confidentialité, vous pouvez nous contacter :</p>
              <p className="text-gray-600">
                Par email : <a href="mailto:contact@edge-iptv.app" className="text-blue-600 hover:underline">contact@edge-iptv.app</a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <Link 
                href="/fr" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image src="/images/icon.png" alt="Logo EDGE IPTV" width={40} height={40} className="rounded-lg opacity-80" />
              <span className="text-xl font-bold text-white">EDGE IPTV</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/fr/privacy-policy" className="text-white font-medium">Politique de Confidentialité</Link>
              <Link href="/fr/terms-of-use" className="hover:text-white transition-colors">Conditions d'Utilisation</Link>
              <Link href="/fr/comment-installer-iptv-iphone-ipad" className="hover:text-white transition-colors">Comment Installer</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} EDGE IPTV. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
