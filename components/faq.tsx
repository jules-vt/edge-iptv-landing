import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

const faqsEN: FAQItem[] = [
  {
    question: "What is IPTV and how does it work on iPhone?",
    answer: "IPTV (Internet Protocol Television) streams TV content over the internet instead of traditional cable or satellite. EDGE IPTV is a player app that connects to your IPTV service provider using Xtream codes, allowing you to watch live TV, movies, and series on your iPhone or iPad."
  },
  {
    question: "Is EDGE IPTV free to download?",
    answer: "EDGE IPTV is free to download and comes with a 7-day free trial. After the trial, a subscription is required to keep using the app. Note that EDGE IPTV is a player only — you'll separately need an active IPTV service subscription (M3U or Xtream codes) from a provider to access content."
  },
  {
    question: "Do I need a subscription to use EDGE IPTV?",
    answer: "Yes, EDGE IPTV requires a subscription after the 7-day free trial to use the app. You'll also need an IPTV service subscription with M3U or Xtream codes from your preferred provider — once you have your credentials, you can configure them in the app in under 30 seconds."
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
    answer: "EDGE IPTV requires iOS 17.0 or later and is compatible with iPhone and iPad. It's optimized for the latest devices including iPhone 15 Pro and iPad Pro."
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
    answer: "EDGE IPTV est gratuit à télécharger et propose un essai gratuit de 7 jours. Passé cet essai, un abonnement est nécessaire pour continuer à utiliser l'application. Notez qu'EDGE IPTV est uniquement un lecteur : vous aurez séparément besoin d'un abonnement IPTV actif (M3U ou codes Xtream) auprès d'un fournisseur pour accéder au contenu."
  },
  {
    question: "Ai-je besoin d'un abonnement pour utiliser EDGE IPTV ?",
    answer: "Oui, un abonnement EDGE IPTV est nécessaire après l'essai gratuit de 7 jours pour utiliser l'application. Vous aurez aussi besoin d'un abonnement IPTV avec codes M3U ou Xtream de votre fournisseur préféré : une fois vos identifiants en main, vous pouvez les configurer facilement dans l'app en moins de 30 secondes."
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
    answer: "EDGE IPTV nécessite iOS 17.0 ou ultérieur et est compatible avec iPhone et iPad. Il est optimisé pour les derniers appareils incluant iPhone 15 Pro et iPad Pro."
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

const faqsES: FAQItem[] = [
  {
    question: "¿Qué es IPTV y cómo funciona en iPhone?",
    answer: "IPTV (Televisión por Protocolo de Internet) transmite contenido de TV a través de internet en lugar del cable o satélite tradicional. EDGE IPTV es una aplicación reproductora que se conecta a tu proveedor de servicio IPTV usando códigos Xtream, permitiéndote ver TV en vivo, películas y series en tu iPhone o iPad."
  },
  {
    question: "¿EDGE IPTV es gratis?",
    answer: "EDGE IPTV es gratis para descargar e incluye una prueba gratuita de 7 días. Después de la prueba, se requiere una suscripción para seguir usando la app. Ten en cuenta que EDGE IPTV es solo un reproductor: necesitarás por separado una suscripción IPTV activa (M3U o códigos Xtream) de un proveedor para acceder al contenido."
  },
  {
    question: "¿Necesito una suscripción para usar EDGE IPTV?",
    answer: "Sí, se requiere una suscripción a EDGE IPTV tras la prueba gratuita de 7 días para usar la app. También necesitarás una suscripción de servicio IPTV con códigos M3U o Xtream de tu proveedor preferido: una vez que tengas tus credenciales, puedes configurarlas fácilmente en la aplicación en menos de 30 segundos."
  },
  {
    question: "¿EDGE IPTV soporta Chromecast?",
    answer: "¡Sí! EDGE IPTV cuenta con integración completa de Chromecast. Puedes transmitir tus películas, series y canales de TV en vivo favoritos directamente a tu televisor de pantalla grande con un solo toque."
  },
  {
    question: "¿Puedo ver contenido sin conexión?",
    answer: "Absolutamente. EDGE IPTV te permite descargar películas y series en tu dispositivo para verlas sin conexión. Mira tu contenido en cualquier lugar, en cualquier momento, incluso sin conexión a internet."
  },
  {
    question: "¿Qué versión de iOS se requiere?",
    answer: "EDGE IPTV requiere iOS 17.0 o posterior y es compatible con iPhone y iPad. Está optimizado para los últimos dispositivos incluyendo iPhone 15 Pro y iPad Pro."
  },
  {
    question: "¿Están protegidos mis datos y privacidad?",
    answer: "Sí. Respetamos tu privacidad. Solo se recopilan análisis globales anónimos para mejorar la aplicación. Todo tu contenido y procesamiento ocurre localmente en tu dispositivo. Nunca accedemos a tus credenciales IPTV ni a tu historial de visualización."
  },
  {
    question: "¿Qué idiomas son compatibles?",
    answer: "EDGE IPTV cuenta con una interfaz completamente localizada disponible en inglés, francés, español y más idiomas. La interfaz se adapta automáticamente al idioma de tu dispositivo para una experiencia nativa."
  }
];

const faqsPT: FAQItem[] = [
  {
    question: "O que é IPTV e como funciona no iPhone?",
    answer: "IPTV (Televisão por Protocolo de Internet) transmite conteúdo de TV pela internet em vez do cabo ou satélite tradicional. EDGE IPTV é um aplicativo player que se conecta ao seu provedor de serviço IPTV usando códigos Xtream, permitindo que você assista TV ao vivo, filmes e séries no seu iPhone ou iPad."
  },
  {
    question: "EDGE IPTV é gratuito?",
    answer: "EDGE IPTV é gratuito para baixar e inclui um teste grátis de 7 dias. Após o teste, é necessária uma assinatura para continuar usando o aplicativo. Note que EDGE IPTV é apenas um player: você precisará separadamente de uma assinatura IPTV ativa (M3U ou códigos Xtream) de um provedor para acessar o conteúdo."
  },
  {
    question: "Preciso de uma assinatura para usar EDGE IPTV?",
    answer: "Sim, é necessária uma assinatura do EDGE IPTV após o teste grátis de 7 dias para usar o aplicativo. Você também precisará de uma assinatura de serviço IPTV com códigos M3U ou Xtream do seu provedor preferido: depois de ter suas credenciais, você pode configurá-las facilmente no aplicativo em menos de 30 segundos."
  },
  {
    question: "EDGE IPTV suporta Chromecast?",
    answer: "Sim! EDGE IPTV possui integração completa com Chromecast. Você pode transmitir seus filmes, séries e canais de TV ao vivo favoritos diretamente para sua TV de tela grande com apenas um toque."
  },
  {
    question: "Posso assistir conteúdo offline?",
    answer: "Absolutamente. EDGE IPTV permite que você baixe filmes e séries no seu dispositivo para visualização offline. Assista seu conteúdo em qualquer lugar, a qualquer hora, mesmo sem conexão com a internet."
  },
  {
    question: "Qual versão do iOS é necessária?",
    answer: "EDGE IPTV requer iOS 17.0 ou posterior e é compatível com iPhone e iPad. É otimizado para os dispositivos mais recentes incluindo iPhone 15 Pro e iPad Pro."
  },
  {
    question: "Meus dados e privacidade estão protegidos?",
    answer: "Sim. Respeitamos sua privacidade. Apenas análises globais anônimas são coletadas para melhorar o aplicativo. Todo o seu conteúdo e processamento acontecem localmente no seu dispositivo. Nunca acessamos suas credenciais IPTV nem seu histórico de visualização."
  },
  {
    question: "Quais idiomas são suportados?",
    answer: "EDGE IPTV possui uma interface totalmente localizada disponível em inglês, francês, espanhol e mais idiomas. A interface se adapta automaticamente ao idioma do seu dispositivo para uma experiência nativa."
  }
];

export function FAQ({ lang = 'en' }: FAQProps) {
  const faqs = lang === 'en' ? faqsEN : lang === 'fr' ? faqsFR : lang === 'es' ? faqsES : faqsPT;
  const title = lang === 'en' ? 'Frequently Asked Questions' : lang === 'fr' ? 'Questions Fréquentes' : lang === 'es' ? 'Preguntas Frecuentes' : 'Perguntas Frequentes';
  const subtitle = lang === 'en' 
    ? 'Everything you need to know about EDGE IPTV'
    : lang === 'fr'
      ? 'Tout ce que vous devez savoir sur EDGE IPTV'
      : lang === 'es'
        ? 'Todo lo que necesitas saber sobre EDGE IPTV'
        : 'Tudo o que você precisa saber sobre EDGE IPTV';

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
