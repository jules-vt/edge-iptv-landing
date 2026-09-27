import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Download } from 'lucide-react';
import { ArticleLayout } from '@/components/article-layout';
import { buildBlogAlternates, getBlogSlugs, getPostBySlug } from '@/lib/blog-posts';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getBlogSlugs('fr');
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'fr');
  
  if (!post) {
    return {
      title: 'Article introuvable',
    };
  }

  return {
    title: `${post.title} - Blog EDGE IPTV`,
    description: post.description,
    alternates: buildBlogAlternates(post.slug, 'fr'),
    openGraph: {
      type: 'article',
      url: `https://edge-iptv.app/fr/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      images: [`https://edge-iptv.app${post.image}`],
      publishedTime: post.date,
      locale: 'fr_FR',
    },
  };
}

export default async function BlogPostPageFR({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'fr');

  if (!post) {
    notFound();
  }

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `https://edge-iptv.app${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "inLanguage": "fr-FR",
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://edge-iptv.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://edge-iptv.app/images/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://edge-iptv.app/fr/blog/${post.slug}`
    }
  };

  // Render content based on slug
  const renderContent = () => {
    switch (slug) {
      case 'comment-installer-iptv-iphone-ipad':
        return <CommentInstallerContent />;
      default:
        return (
          <div className="max-w-none">
            <p>Contenu de l'article à venir...</p>
          </div>
        );
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleLayout
        title={post.title}
        description={post.description}
        date={post.date}
        readTime={post.readTime}
        lang="fr"
        breadcrumbItems={[
          { label: 'Accueil', href: '/fr' },
          { label: 'Blog', href: '/fr/blog' }
        ]}
      >
        {renderContent()}
      </ArticleLayout>
    </>
  );
}

// Content component for the French How-to article
function CommentInstallerContent() {
  // Schema.org HowTo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment installer IPTV sur iPhone & iPad",
    "description": "Guide étape par étape pour installer et configurer EDGE IPTV sur iPhone et iPad avec les codes Xtream",
    "image": "https://edge-iptv.app/images/iphone-series-3d.png",
    "inLanguage": "fr-FR",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "tool": [{
      "@type": "HowToTool",
      "name": "iPhone ou iPad avec iOS 17.0+"
    }],
    "supply": [{
      "@type": "HowToSupply",
      "name": "Abonnement IPTV avec codes Xtream"
    }],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Télécharger EDGE IPTV",
        "text": "Téléchargez le meilleur lecteur IPTV depuis l'App Store. EDGE IPTV est spécialement conçu pour iPhone et iPad avec support Chromecast et visionnage hors ligne.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Lancer et sélectionner la langue",
        "text": "Ouvrez EDGE IPTV et sélectionnez votre langue préférée dans l'interface multilingue.",
        "image": "https://edge-iptv.app/images/language-selection.jpeg"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Configurer les codes Xtream",
        "text": "Appuyez sur Ajouter une playlist, sélectionnez Codes Xtream, et entrez l'URL du serveur, le nom d'utilisateur et le mot de passe fournis par votre fournisseur IPTV. Puis appuyez sur Connexion.",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Commencer le streaming",
        "text": "Parcourez les chaînes, films et séries. Commencez à streamer immédiatement avec l'interface intuitive d'EDGE IPTV.",
        "image": "https://edge-iptv.app/images/series-view.png"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
        <h4 className="text-blue-800 font-bold mb-4 text-lg">Ce dont vous aurez besoin :</h4>
        <ul className="space-y-2 mb-0">
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-green-600 font-bold">✓</span> iPhone ou iPad avec iOS 17.0 ou version ultérieure
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

      {/* Étape 1 */}
      <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative mb-10">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Télécharger le meilleur lecteur IPTV pour iOS</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          La première étape consiste à télécharger un lecteur IPTV fiable. Nous recommandons vivement <strong>EDGE IPTV</strong> car il est spécialement conçu pour iPhone et iPad, offrant l'expérience de streaming la plus fluide avec des fonctionnalités avancées.
        </p>
        
        <div className="mb-6">
          <strong className="block mb-2 text-gray-800">Pourquoi choisir EDGE IPTV ?</strong>
          <ul className="space-y-2 text-gray-600 mb-0">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Configuration Xtream rapide en quelques secondes</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Support Chromecast pour regarder sur grand écran</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Téléchargement hors ligne pour regarder sans internet</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Interface multilingue (Français, Anglais, Espagnol, Portugais, Turc)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Note de 5/5 étoiles avec 1 000+ téléchargements</li>
          </ul>
        </div>
        
        <Link 
          href="https://j-analytics.cloud/q/Z0m1Qmdtf" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all no-underline"
        >
          <Download size={20} />
          Télécharger EDGE IPTV depuis l'App Store
        </Link>
      </div>

      {/* Étape 2 */}
      <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative mb-10">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Lancer l'application et sélectionner la langue</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Une fois installé, ouvrez EDGE IPTV. Vous serez accueilli par une belle interface où vous pourrez sélectionner votre langue préférée. L'application prend en charge plusieurs langues pour vous sentir comme chez vous.
        </p>
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <Image 
            src="/images/language-selection.jpeg" 
            alt="Écran de sélection de langue EDGE IPTV" 
            width={600} 
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Étape 3 */}
      <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative mb-10">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Configurer les codes Xtream</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          EDGE IPTV rend incroyablement facile la connexion avec les codes Xtream. Vous n'avez pas besoin de gérer des playlists M3U complexes.
        </p>
        <ol className="space-y-3 text-gray-600 mb-6 ml-2">
          <li><strong>1.</strong> Appuyez sur le bouton <strong>"Ajouter une playlist"</strong> ou <strong>"+"</strong>.</li>
          <li><strong>2.</strong> Sélectionnez l'option <strong>"Codes Xtream"</strong>.</li>
          <li><strong>3.</strong> Entrez les détails fournis par votre fournisseur IPTV :
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-500">
              <li><strong>URL du serveur :</strong> (ex: http://line.iptvdomain.com)</li>
              <li><strong>Nom d'utilisateur :</strong> Votre nom d'utilisateur</li>
              <li><strong>Mot de passe :</strong> Votre mot de passe</li>
            </ul>
          </li>
          <li><strong>4.</strong> Appuyez sur <strong>"Connexion"</strong> ou <strong>"Se connecter"</strong>.</li>
        </ol>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          <strong>Note :</strong> Assurez-vous d'entrer les détails exactement comme fournis, en faisant attention aux majuscules et minuscules.
        </div>
      </div>

      {/* Étape 4 */}
      <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative mb-10">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">4</div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Profitez de votre contenu !</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          C'est tout ! EDGE IPTV chargera vos chaînes, films et séries. Vous pouvez maintenant parcourir les catégories, rechercher votre contenu préféré et commencer à streamer immédiatement.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image 
              src="/images/series-view.png" 
              alt="Interface de vue des séries EDGE IPTV" 
              width={400} 
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image 
              src="/images/movie-details.png" 
              alt="Page de détails de film EDGE IPTV" 
              width={400} 
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h3 className="text-green-800 font-bold mb-3 text-xl">🎉 Félicitations !</h3>
        <p className="text-gray-700 mb-0">
          Vous avez configuré avec succès IPTV sur votre iPhone ou iPad. Maintenant vous pouvez profiter de milliers de chaînes, films et séries avec la meilleure qualité de streaming. N'oubliez pas d'explorer les fonctionnalités comme la diffusion Chromecast et les téléchargements hors ligne !
        </p>
      </div>
    </>
  );
}
