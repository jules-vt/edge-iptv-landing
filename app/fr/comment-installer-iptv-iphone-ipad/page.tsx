import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comment Installer IPTV sur iPhone et iPad - Guide Complet 2025',
  description: 'Guide complet étape par étape pour installer et configurer IPTV sur iPhone et iPad. Apprenez à configurer les codes Xtream, les playlists et profiter du streaming sur iOS.',
  keywords: 'IPTV iPhone, IPTV iPad, installer IPTV iOS, codes Xtream iPhone, guide installation IPTV, streaming iPhone, lecteur IPTV iPad',
  alternates: {
    canonical: 'https://edge-iptv.app/fr/comment-installer-iptv-iphone-ipad',
    languages: {
      'en': 'https://edge-iptv.app/how-to-install-iptv-iphone-ipad',
      'fr': 'https://edge-iptv.app/fr/comment-installer-iptv-iphone-ipad',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://edge-iptv.app/fr/comment-installer-iptv-iphone-ipad',
    title: 'Comment Installer IPTV sur iPhone et iPad - Guide Complet 2025',
    description: 'Guide complet étape par étape pour installer et configurer IPTV sur iPhone et iPad. Apprenez à configurer les codes Xtream et profiter du streaming.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'fr_FR',
  },
};

export default function HowToInstallFR() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/fr" className="flex items-center gap-3">
            <Image src="/images/icon.png" alt="Logo EDGE IPTV" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/how-to-install-iptv-iphone-ipad" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              EN
            </Link>
            <Link 
              href="https://apps.apple.com/ca/app/edge-iptv/id6745966143" 
              className="hidden sm:inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all"
            >
              <Download size={16} />
              Télécharger
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8 text-sm text-gray-500">
            <Link href="/fr" className="text-blue-600 hover:underline">Accueil</Link> / Comment Installer IPTV sur iPhone et iPad
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Comment Installer IPTV sur iPhone et iPad : Guide Complet 2025
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Apprenez à configurer le streaming IPTV sur vos appareils iOS en quelques minutes seulement. Ce guide complet vous accompagnera dans tout le processus en utilisant le meilleur lecteur IPTV disponible.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <h4 className="text-blue-800 font-bold mb-4 text-lg">Ce dont vous aurez besoin :</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> iPhone ou iPad avec iOS 12.0 ou plus récent
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> Abonnement IPTV avec codes Xtream
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> Connexion internet stable
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> Application EDGE IPTV (recommandée pour la meilleure expérience)
              </li>
            </ul>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Téléchargez le Meilleur Lecteur IPTV pour iOS</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La première étape consiste à télécharger un lecteur IPTV fiable. Nous recommandons vivement <strong>EDGE IPTV</strong> car il est spécialement conçu pour iPhone et iPad, offrant l'expérience de streaming la plus fluide avec des fonctionnalités avancées.
              </p>
              
              <div className="mb-6">
                <strong className="block mb-2 text-gray-800">Pourquoi choisir EDGE IPTV ?</strong>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Configuration Xtream rapide en quelques secondes</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Support Chromecast pour visionner sur grand écran</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Téléchargement hors ligne pour regarder sans internet</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Interface multilingue (Anglais, Français, Espagnol, Portugais, Turc)</li>
                </ul>
              </div>
              
              <Link 
                href="https://apps.apple.com/ca/app/edge-iptv/id6745966143" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <Download size={20} />
                Télécharger EDGE IPTV sur l'App Store
              </Link>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lancez l'Application et Sélectionnez la Langue</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Une fois installée, ouvrez EDGE IPTV. Vous serez accueilli par une interface magnifique où vous pourrez sélectionner votre langue préférée. L'application prend en charge plusieurs langues pour que vous vous sentiez chez vous.
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image 
                  src="/images/language-selection.jpeg" 
                  alt="Sélection de la langue EDGE IPTV" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Configurez les Codes Xtream</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                EDGE IPTV rend la connexion via codes Xtream incroyablement facile. Vous n'avez pas besoin de gérer des playlists M3U complexes.
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6 ml-2">
                <li>Appuyez sur le bouton <strong>"Ajouter une Playlist"</strong> ou <strong>"+"</strong>.</li>
                <li>Sélectionnez l'option <strong>"Xtream Codes"</strong>.</li>
                <li>Entrez les détails fournis par votre fournisseur IPTV :
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-500">
                    <li><strong>URL du Serveur :</strong> (ex: http://line.iptvdomain.com)</li>
                    <li><strong>Nom d'utilisateur :</strong> Votre nom d'utilisateur</li>
                    <li><strong>Mot de passe :</strong> Votre mot de passe</li>
                  </ul>
                </li>
                <li>Appuyez sur <strong>"Se connecter"</strong> ou <strong>"Login"</strong>.</li>
              </ol>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                <strong>Note :</strong> Assurez-vous d'entrer les détails exactement comme fournis, en faisant attention aux majuscules et minuscules.
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">4</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Profitez de Votre Contenu !</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                C'est tout ! EDGE IPTV chargera vos chaînes, films et séries. Vous pouvez maintenant naviguer dans les catégories, rechercher votre contenu préféré et commencer le streaming immédiatement.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image 
                    src="/images/series-view.png" 
                    alt="Vue des séries" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image 
                    src="/images/movie-details.png" 
                    alt="Détails du film" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <Link 
              href="/fr" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>
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
              <Link href="/fr/terms-of-use" className="hover:text-white transition-colors">Conditions d'Utilisation</Link>
              <Link href="/fr/comment-installer-iptv-iphone-ipad" className="text-white font-medium">Comment Installer</Link>
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
