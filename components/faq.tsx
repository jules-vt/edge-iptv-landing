import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  lang?: 'en' | 'fr';
}

const faqsEN: FAQItem[] = [
  {
    question: "What is IPTV and how does it work on iPhone?",
    answer: "IPTV (Internet Protocol Television) streams TV content over the internet instead of traditional cable or satellite. EDGE IPTV is a player app that connects to your IPTV service provider using Xtream codes, allowing you to watch live TV, movies, and series on your iPhone or iPad."
  },
  {
    question: "Is EDGE IPTV free to download?",
    answer: "Yes, EDGE IPTV is completely free to download and use. However, you'll need an active IPTV subscription from a service provider to access content. The app itself doesn't provide any content."
  },
  {
    question: "Do I need a subscription to use EDGE IPTV?",
    answer: "EDGE IPTV is a player app. You'll need an IPTV service subscription with Xtream codes from your preferred provider. Once you have your credentials, you can easily configure them in the app in under 30 seconds."
  },
  {
    question: "Does EDGE IPTV support Chromecast?",
    answer: "Yes! EDGE IPTV features full Chromecast integration. You can cast your favorite movies, series, and live TV channels directly to your big screen TV with a single tap."
  },
  {
    question: "Can I watch content offline?",
    answer: "Absolutely. EDGE IPTV allows you to download movies and series to your device for offline viewing. Watch your content anywhere, anytime, even without an internet connection."
  },
  {
    question: "What iOS version is required?",
    answer: "EDGE IPTV requires iOS 12.0 or later and is compatible with iPhone and iPad. It's optimized for the latest devices including iPhone 15 Pro and iPad Pro."
  },
  {
    question: "Is my data and privacy protected?",
    answer: "Yes. We respect your privacy. Only anonymous global analytics are collected to improve the app. All your content and processing happen locally on your device. We never access your IPTV credentials or viewing history."
  },
  {
    question: "What languages are supported?",
    answer: "EDGE IPTV features a fully localized interface available in English, French, Spanish, and more languages. The interface automatically adapts to your device language for a native experience."
  }
];

const faqsFR: FAQItem[] = [
  {
    question: "Qu'est-ce que l'IPTV et comment ça fonctionne sur iPhone ?",
    answer: "L'IPTV (Internet Protocol Television) diffuse du contenu télévisé via Internet au lieu du câble ou satellite traditionnel. EDGE IPTV est une application lecteur qui se connecte à votre fournisseur IPTV via les codes Xtream, vous permettant de regarder la TV en direct, films et séries sur votre iPhone ou iPad."
  },
  {
    question: "EDGE IPTV est-il gratuit ?",
    answer: "Oui, EDGE IPTV est entièrement gratuit à télécharger et utiliser. Cependant, vous aurez besoin d'un abonnement IPTV actif auprès d'un fournisseur de services pour accéder au contenu. L'application elle-même ne fournit aucun contenu."
  },
  {
    question: "Ai-je besoin d'un abonnement pour utiliser EDGE IPTV ?",
    answer: "EDGE IPTV est une application lecteur. Vous aurez besoin d'un abonnement IPTV avec codes Xtream de votre fournisseur préféré. Une fois vos identifiants en main, vous pouvez les configurer facilement dans l'app en moins de 30 secondes."
  },
  {
    question: "EDGE IPTV supporte-t-il Chromecast ?",
    answer: "Oui ! EDGE IPTV dispose d'une intégration complète Chromecast. Vous pouvez diffuser vos films, séries et chaînes TV préférés directement sur votre grand écran TV d'une simple pression."
  },
  {
    question: "Puis-je regarder du contenu hors ligne ?",
    answer: "Absolument. EDGE IPTV vous permet de télécharger des films et séries sur votre appareil pour un visionnage hors ligne. Regardez votre contenu n'importe où, n'importe quand, même sans connexion Internet."
  },
  {
    question: "Quelle version iOS est requise ?",
    answer: "EDGE IPTV nécessite iOS 12.0 ou ultérieur et est compatible avec iPhone et iPad. Il est optimisé pour les derniers appareils incluant iPhone 15 Pro et iPad Pro."
  },
  {
    question: "Mes données et ma vie privée sont-elles protégées ?",
    answer: "Oui. Nous respectons votre vie privée. Seules des analyses globales anonymes sont collectées pour améliorer l'application. Tout votre contenu et traitement se font localement sur votre appareil. Nous n'accédons jamais à vos identifiants IPTV ni à votre historique de visionnage."
  },
  {
    question: "Quelles langues sont supportées ?",
    answer: "EDGE IPTV dispose d'une interface entièrement localisée disponible en anglais, français, espagnol et d'autres langues. L'interface s'adapte automatiquement à la langue de votre appareil pour une expérience native."
  }
];

export function FAQ({ lang = 'en' }: FAQProps) {
  const faqs = lang === 'en' ? faqsEN : faqsFR;
  const title = lang === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquentes';
  const subtitle = lang === 'en' 
    ? 'Everything you need to know about EDGE IPTV'
    : 'Tout ce que vous devez savoir sur EDGE IPTV';

  // Schema.org FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg select-none">
                <span className="pr-4">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
