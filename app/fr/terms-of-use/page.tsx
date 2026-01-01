import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation - EDGE IPTV',
  description: 'Conditions d\'utilisation pour l\'application EDGE IPTV. Veuillez lire attentivement ces conditions avant d\'utiliser notre application.',
  alternates: {
    canonical: 'https://edge-iptv.app/fr/terms-of-use',
    languages: {
      'en': 'https://edge-iptv.app/terms-of-use',
      'fr': 'https://edge-iptv.app/fr/terms-of-use',
    },
  },
};

export default function TermsOfUseFR() {
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
            <Link href="/terms-of-use" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Conditions d'Utilisation</h1>
              <p className="text-gray-500">Dernière mise à jour : 14 mai 2025</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Veuillez lire attentivement ces conditions d'utilisation avant d'utiliser l'application Edge IPTV.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Acceptation des Conditions</h2>
              <p className="text-gray-600 mb-4">
                En téléchargeant, installant ou utilisant l'application Edge IPTV, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser l'application.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Utilisation de l'Application</h2>
              <p className="text-gray-600 mb-4">
                Edge IPTV est un lecteur de flux IPTV qui vous permet de visualiser du contenu multimédia disponible via des URLs IPTV. Notre application est conçue comme un simple lecteur et ne fournit aucun contenu par elle-même.
              </p>
              <p className="text-gray-600 mb-4">
                Vous êtes seul responsable de l'obtention des droits légaux pour accéder à tout contenu que vous visualisez via notre application. Edge IPTV n'encourage ni n'endosse la violation du droit d'auteur ou d'autres violations de propriété intellectuelle.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Droits de Propriété Intellectuelle</h2>
              <p className="text-gray-600 mb-4">
                L'application Edge IPTV et son contenu original, ses fonctionnalités et ses fonctions sont et resteront la propriété exclusive d'Edge IPTV et de ses concédants de licence. L'application est protégée par le droit d'auteur, les marques de commerce et d'autres lois sur la propriété intellectuelle.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Restrictions</h2>
              <p className="text-gray-600 mb-3">Vous acceptez de ne pas :</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Utiliser l'application à des fins illégales ou non autorisées</li>
                <li>Tenter de décompiler, désassembler ou rétro-concevoir l'application</li>
                <li>Supprimer, contourner ou désactiver toute fonctionnalité de sécurité de l'application</li>
                <li>Redistribuer, vendre, louer ou sous-licencier l'application</li>
                <li>Utiliser l'application d'une manière qui pourrait endommager, désactiver, surcharger ou altérer les serveurs ou réseaux</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Limitation de Responsabilité</h2>
              <p className="text-gray-600 mb-4">
                En aucun cas Edge IPTV ou ses fournisseurs ne sauraient être tenus responsables de tout dommage spécial, accessoire, indirect ou consécutif (y compris, sans limitation, les dommages pour perte de profits, interruption d'activité, perte d'informations commerciales ou toute autre perte pécuniaire) découlant de l'utilisation ou de l'incapacité d'utiliser l'application.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contenu de Tiers</h2>
              <p className="text-gray-600 mb-4">
                Notre application vous permet d'accéder à du contenu fourni par des tiers. Ce contenu relève de la seule responsabilité de l'entité qui le met à disposition. Nous ne pouvons garantir son exactitude, sa pertinence ou sa qualité et ne sommes pas responsables de tout contenu de tiers auquel vous accédez via l'application.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Modifications des Conditions</h2>
              <p className="text-gray-600 mb-4">
                Nous nous réservons le droit de modifier ou remplacer ces conditions à tout moment à notre seule discrétion. Si une révision est substantielle, nous essaierons de fournir un préavis d'au moins 30 jours avant que de nouvelles conditions n'entrent en vigueur.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Résiliation</h2>
              <p className="text-gray-600 mb-4">
                Nous pouvons résilier ou suspendre votre accès immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si vous violez les Conditions d'Utilisation.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Droit Applicable</h2>
              <p className="text-gray-600 mb-4">
                Ces Conditions d'Utilisation sont régies et interprétées conformément aux lois de la France, sans égard à ses principes de conflit de lois.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Nous Contacter</h2>
              <p className="text-gray-600 mb-2">Si vous avez des questions concernant ces Conditions d'Utilisation, veuillez nous contacter :</p>
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
              <Link href="/fr/privacy-policy" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
              <Link href="/fr/terms-of-use" className="text-white font-medium">Conditions d'Utilisation</Link>
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
