import type { Lang } from "@/lib/i18n";

/**
 * Every string on the home page, in one place.
 *
 * The four homepages used to be separate 400-to-530-line files that had
 * already drifted: the English one tracked download clicks through
 * DownloadButton while the other three used a plain link, so their conversions
 * were invisible in analytics. One component reading this dictionary makes
 * that class of drift impossible, and adding a language is a matter of filling
 * one more entry — TypeScript reports it until you do.
 *
 * Claims here are deliberately checkable. Earlier copy called the app "the
 * leading IPTV streaming application in 2026" and said it had been "rated #1
 * in multiple independent comparisons"; neither was true, and both are the
 * kind of unverifiable superlative that makes the rest of the page read as
 * marketing noise.
 */
export interface HomeCopy {
  nav: { blog: string; download: string };
  hero: {
    titleTop: string;
    titleAccent: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: [string, string, string];
    screenshotAlt: string;
  };
  features: {
    title: string;
    intro: string;
    linkText: string;
    introAfter: string;
    items: { title: string; body: string }[];
  };
  screenshots: {
    badge: string;
    title: string;
    intro: string;
    cards: [string, string, string];
  };
  about: { title: string; paragraphs: string[] };
  cta: {
    title: string;
    body: string;
    linkText: string;
    bodyAfter: string;
    button: string;
    fineprint: string;
  };
  footer: {
    product: string;
    resources: string;
    legal: string;
    install: string;
    blog: string;
    privacy: string;
    terms: string;
    rights: string;
    tagline: string;
  };
}

export const HOME_COPY: Record<Lang, HomeCopy> = {
  en: {
    nav: { blog: "Blog", download: "Download" },
    hero: {
      titleTop: "The IPTV Player",
      titleAccent: "for M3U & Xtream",
      body: "EDGE IPTV turns your iPhone and iPad into a streaming hub for live TV, movies and series. A live TV guide, Picture in Picture, offline downloads, and one-tap Chromecast and AirPlay casting.",
      ctaPrimary: "Download on App Store",
      ctaSecondary: "Learn More",
      badges: ["No ads", "7-day free trial", "iPhone & iPad"],
      screenshotAlt:
        "EDGE IPTV home screen on iPhone, showing the live TV, movies and series catalogue",
    },
    features: {
      title: "Why choose EDGE IPTV?",
      intro: "Built for performance and for the way iOS works. ",
      linkText: "See how it compares",
      introAfter: " to the other IPTV players on iPhone and iPad.",
      items: [
        {
          title: "M3U & Xtream ready",
          body: "Paste an M3U link or your Xtream credentials and the catalogue loads. No manual channel setup.",
        },
        {
          title: "Live TV guide",
          body: "An EPG grid shows what is on now and what follows, so you can plan the evening at a glance.",
        },
        {
          title: "Chromecast & AirPlay",
          body: "Send a channel, a film or an episode to the television in one tap, without leaving the app.",
        },
        {
          title: "Picture in Picture",
          body: "Keep watching in a floating window while you browse the catalogue or use another app.",
        },
        {
          title: "Offline downloads",
          body: "Save films and episodes to the device and watch them with no connection at all.",
        },
        {
          title: "Seven languages",
          body: "The whole interface is translated, so the app reads as if it were written for you.",
        },
      ],
    },
    screenshots: {
      badge: "Interface",
      title: "Designed for simplicity",
      intro: "An interface that puts your content first and stays out of the way.",
      cards: ["Organised content", "Live TV guide", "Offline downloads"],
    },
    about: {
      title: "What is EDGE IPTV?",
      paragraphs: [
        "EDGE IPTV is an IPTV player built for iPhone and iPad. It does not sell or host any content: you bring your own subscription from an IPTV provider, as an M3U playlist or Xtream credentials, and the app turns it into a catalogue you can actually browse.",
        "Setup is the part most players get wrong. Here it is one screen: paste your link or your credentials, and channels, films and series appear sorted into categories, with artwork and a programme guide where your provider supplies one.",
        "Playback runs on a hybrid engine that falls back to VLC for formats Apple's own player refuses, which is what lets awkward streams play at all. Chromecast, AirPlay, Picture in Picture and offline downloads are included rather than sold separately.",
        "The app is free to download and comes with a 7-day free trial. After that, watching requires a subscription at $3.99 a month or $19.99 a year. There are no adverts at any point.",
      ],
    },
    cta: {
      title: "Ready to start streaming?",
      body: "Set up your playlist in about two minutes. ",
      linkText: "Follow the step-by-step guide",
      bodyAfter: " if you would rather read it first.",
      button: "Start your 7-day free trial",
      fineprint:
        "Free to download. Requires iOS 17.0 or later, on iPhone and iPad.",
    },
    footer: {
      product: "Product",
      resources: "Resources",
      legal: "Legal",
      install: "Installation guide",
      blog: "Blog",
      privacy: "Privacy policy",
      terms: "Terms of use",
      rights: "All rights reserved.",
      tagline: "The IPTV player for iPhone and iPad.",
    },
  },

  fr: {
    nav: { blog: "Blog", download: "Télécharger" },
    hero: {
      titleTop: "Le lecteur IPTV",
      titleAccent: "pour M3U & Xtream",
      body: "EDGE IPTV transforme votre iPhone et votre iPad en centre de streaming pour la TV en direct, les films et les séries. Guide TV, Picture in Picture, téléchargement hors ligne et diffusion Chromecast ou AirPlay en un geste.",
      ctaPrimary: "Télécharger sur l'App Store",
      ctaSecondary: "En savoir plus",
      badges: ["Sans publicité", "7 jours d'essai gratuit", "iPhone & iPad"],
      screenshotAlt:
        "Écran d'accueil d'EDGE IPTV sur iPhone, avec le catalogue de chaînes, films et séries",
    },
    features: {
      title: "Pourquoi choisir EDGE IPTV ?",
      intro: "Conçu pour la performance et pour la façon dont iOS fonctionne. ",
      linkText: "Voyez la comparaison",
      introAfter: " avec les autres lecteurs IPTV sur iPhone et iPad.",
      items: [
        {
          title: "M3U et Xtream d'emblée",
          body: "Collez un lien M3U ou vos identifiants Xtream et le catalogue se charge. Aucune chaîne à saisir à la main.",
        },
        {
          title: "Guide TV en direct",
          body: "La grille EPG montre ce qui passe maintenant et ce qui suit : vous organisez votre soirée d'un coup d'œil.",
        },
        {
          title: "Chromecast et AirPlay",
          body: "Envoyez une chaîne, un film ou un épisode sur la télévision en un geste, sans quitter l'app.",
        },
        {
          title: "Picture in Picture",
          body: "Continuez de regarder dans une fenêtre flottante pendant que vous parcourez le catalogue ou une autre app.",
        },
        {
          title: "Téléchargements hors ligne",
          body: "Enregistrez films et épisodes sur l'appareil et regardez-les sans aucune connexion.",
        },
        {
          title: "Sept langues",
          body: "Toute l'interface est traduite : l'app se lit comme si elle avait été écrite pour vous.",
        },
      ],
    },
    screenshots: {
      badge: "Interface",
      title: "Pensée pour la simplicité",
      intro: "Une interface qui met votre contenu au premier plan et se fait oublier.",
      cards: ["Contenu organisé", "Guide TV en direct", "Téléchargements hors ligne"],
    },
    about: {
      title: "Qu'est-ce qu'EDGE IPTV ?",
      paragraphs: [
        "EDGE IPTV est un lecteur IPTV conçu pour iPhone et iPad. Il ne vend ni n'héberge aucun contenu : vous apportez votre propre abonnement chez un fournisseur IPTV, sous forme de playlist M3U ou d'identifiants Xtream, et l'app en fait un catalogue réellement navigable.",
        "La configuration est ce que la plupart des lecteurs ratent. Ici, elle tient en un écran : collez votre lien ou vos identifiants, et chaînes, films et séries apparaissent classés par catégories, avec les affiches et un guide des programmes quand votre fournisseur en propose un.",
        "La lecture repose sur un moteur hybride qui bascule sur VLC pour les formats que le lecteur d'Apple refuse, ce qui permet de lire des flux capricieux. Chromecast, AirPlay, Picture in Picture et téléchargements hors ligne sont inclus, pas vendus à part.",
        "L'app est gratuite au téléchargement et comprend 7 jours d'essai gratuit. Ensuite, regarder nécessite un abonnement à 3,99 € par mois ou 19,99 € par an. Aucune publicité, à aucun moment.",
      ],
    },
    cta: {
      title: "Prêt à commencer ?",
      body: "Configurez votre playlist en deux minutes environ. ",
      linkText: "Suivez le guide pas à pas",
      bodyAfter: " si vous préférez lire d'abord.",
      button: "Démarrer l'essai gratuit de 7 jours",
      fineprint:
        "Téléchargement gratuit. Nécessite iOS 17.0 ou version ultérieure, sur iPhone et iPad.",
    },
    footer: {
      product: "Produit",
      resources: "Ressources",
      legal: "Légal",
      install: "Guide d'installation",
      blog: "Blog",
      privacy: "Confidentialité",
      terms: "Conditions d'utilisation",
      rights: "Tous droits réservés.",
      tagline: "Le lecteur IPTV pour iPhone et iPad.",
    },
  },

  es: {
    nav: { blog: "Blog", download: "Descargar" },
    hero: {
      titleTop: "El reproductor IPTV",
      titleAccent: "para M3U y Xtream",
      body: "EDGE IPTV convierte tu iPhone y tu iPad en un centro de streaming para TV en vivo, películas y series. Guía de TV, Picture in Picture, descargas sin conexión y transmisión a Chromecast o AirPlay con un toque.",
      ctaPrimary: "Descargar en la App Store",
      ctaSecondary: "Saber más",
      badges: ["Sin anuncios", "7 días de prueba gratis", "iPhone y iPad"],
      screenshotAlt:
        "Pantalla de inicio de EDGE IPTV en iPhone, con el catálogo de canales, películas y series",
    },
    features: {
      title: "¿Por qué elegir EDGE IPTV?",
      intro: "Pensado para el rendimiento y para cómo funciona iOS. ",
      linkText: "Mira la comparativa",
      introAfter: " con los demás reproductores IPTV en iPhone y iPad.",
      items: [
        {
          title: "Listo para M3U y Xtream",
          body: "Pega un enlace M3U o tus credenciales Xtream y el catálogo se carga. Sin configurar canales a mano.",
        },
        {
          title: "Guía de TV en vivo",
          body: "La parrilla EPG muestra qué hay ahora y qué sigue, así organizas la noche de un vistazo.",
        },
        {
          title: "Chromecast y AirPlay",
          body: "Envía un canal, una película o un episodio al televisor con un toque, sin salir de la app.",
        },
        {
          title: "Picture in Picture",
          body: "Sigue viendo en una ventana flotante mientras exploras el catálogo o usas otra app.",
        },
        {
          title: "Descargas sin conexión",
          body: "Guarda películas y episodios en el dispositivo y míralos sin ninguna conexión.",
        },
        {
          title: "Siete idiomas",
          body: "Toda la interfaz está traducida: la app se lee como si estuviera hecha para ti.",
        },
      ],
    },
    screenshots: {
      badge: "Interfaz",
      title: "Diseñada para la simplicidad",
      intro: "Una interfaz que pone tu contenido por delante y no estorba.",
      cards: ["Contenido organizado", "Guía de TV en vivo", "Descargas sin conexión"],
    },
    about: {
      title: "¿Qué es EDGE IPTV?",
      paragraphs: [
        "EDGE IPTV es un reproductor IPTV hecho para iPhone y iPad. No vende ni aloja contenido: tú traes tu propia suscripción de un proveedor IPTV, como lista M3U o credenciales Xtream, y la app la convierte en un catálogo que de verdad se puede explorar.",
        "La configuración es lo que la mayoría de reproductores hace mal. Aquí cabe en una pantalla: pega tu enlace o tus credenciales y aparecen canales, películas y series ordenados por categorías, con carátulas y guía de programación cuando tu proveedor la ofrece.",
        "La reproducción usa un motor híbrido que recurre a VLC para los formatos que el reproductor de Apple rechaza, lo que permite ver emisiones difíciles. Chromecast, AirPlay, Picture in Picture y descargas están incluidos, no se venden aparte.",
        "La app es gratis de descargar e incluye 7 días de prueba gratuita. Después, ver contenido requiere una suscripción de 3,99 € al mes o 19,99 € al año. Sin anuncios en ningún momento.",
      ],
    },
    cta: {
      title: "¿Listo para empezar?",
      body: "Configura tu lista en unos dos minutos. ",
      linkText: "Sigue la guía paso a paso",
      bodyAfter: " si prefieres leerla antes.",
      button: "Empezar la prueba gratis de 7 días",
      fineprint:
        "Descarga gratuita. Requiere iOS 17.0 o posterior, en iPhone y iPad.",
    },
    footer: {
      product: "Producto",
      resources: "Recursos",
      legal: "Legal",
      install: "Guía de instalación",
      blog: "Blog",
      privacy: "Privacidad",
      terms: "Términos de uso",
      rights: "Todos los derechos reservados.",
      tagline: "El reproductor IPTV para iPhone y iPad.",
    },
  },

  pt: {
    nav: { blog: "Blog", download: "Baixar" },
    hero: {
      titleTop: "O reprodutor IPTV",
      titleAccent: "para M3U e Xtream",
      body: "O EDGE IPTV transforma seu iPhone e seu iPad num centro de streaming para TV ao vivo, filmes e séries. Guia de TV, Picture in Picture, downloads offline e transmissão para Chromecast ou AirPlay com um toque.",
      ctaPrimary: "Baixar na App Store",
      ctaSecondary: "Saiba mais",
      badges: ["Sem anúncios", "7 dias de teste grátis", "iPhone e iPad"],
      screenshotAlt:
        "Tela inicial do EDGE IPTV no iPhone, com o catálogo de canais, filmes e séries",
    },
    features: {
      title: "Por que escolher o EDGE IPTV?",
      intro: "Feito para desempenho e para o jeito como o iOS funciona. ",
      linkText: "Veja a comparação",
      introAfter: " com os outros reprodutores IPTV no iPhone e iPad.",
      items: [
        {
          title: "Pronto para M3U e Xtream",
          body: "Cole um link M3U ou suas credenciais Xtream e o catálogo carrega. Sem cadastrar canais à mão.",
        },
        {
          title: "Guia de TV ao vivo",
          body: "A grade do EPG mostra o que está passando e o que vem depois, para planejar a noite num olhar.",
        },
        {
          title: "Chromecast e AirPlay",
          body: "Mande um canal, um filme ou um episódio para a TV com um toque, sem sair do app.",
        },
        {
          title: "Picture in Picture",
          body: "Continue assistindo numa janela flutuante enquanto navega no catálogo ou usa outro app.",
        },
        {
          title: "Downloads offline",
          body: "Salve filmes e episódios no aparelho e assista sem conexão nenhuma.",
        },
        {
          title: "Sete idiomas",
          body: "Toda a interface é traduzida: o app se lê como se tivesse sido escrito para você.",
        },
      ],
    },
    screenshots: {
      badge: "Interface",
      title: "Pensada para a simplicidade",
      intro: "Uma interface que coloca seu conteúdo na frente e sai do caminho.",
      cards: ["Conteúdo organizado", "Guia de TV ao vivo", "Downloads offline"],
    },
    about: {
      title: "O que é o EDGE IPTV?",
      paragraphs: [
        "O EDGE IPTV é um reprodutor IPTV feito para iPhone e iPad. Ele não vende nem hospeda conteúdo: você traz sua própria assinatura de um provedor IPTV, como playlist M3U ou credenciais Xtream, e o app a transforma num catálogo que dá para navegar de verdade.",
        "A configuração é onde a maioria dos reprodutores tropeça. Aqui ela cabe numa tela: cole seu link ou suas credenciais e canais, filmes e séries aparecem organizados em categorias, com capas e guia de programação quando o provedor oferece.",
        "A reprodução usa um motor híbrido que recorre ao VLC nos formatos que o reprodutor da Apple recusa, o que permite assistir transmissões problemáticas. Chromecast, AirPlay, Picture in Picture e downloads estão inclusos, não vendidos à parte.",
        "O app é gratuito para baixar e inclui 7 dias de teste grátis. Depois disso, assistir exige uma assinatura de US$ 3,99 por mês ou US$ 19,99 por ano. Sem anúncios em momento algum.",
      ],
    },
    cta: {
      title: "Pronto para começar?",
      body: "Configure sua playlist em cerca de dois minutos. ",
      linkText: "Siga o guia passo a passo",
      bodyAfter: " se preferir ler antes.",
      button: "Começar o teste grátis de 7 dias",
      fineprint:
        "Download gratuito. Requer iOS 17.0 ou posterior, no iPhone e no iPad.",
    },
    footer: {
      product: "Produto",
      resources: "Recursos",
      legal: "Jurídico",
      install: "Guia de instalação",
      blog: "Blog",
      privacy: "Privacidade",
      terms: "Termos de uso",
      rights: "Todos os direitos reservados.",
      tagline: "O reprodutor IPTV para iPhone e iPad.",
    },
  },

  de: {
    nav: { blog: "Blog", download: "Laden" },
    hero: {
      titleTop: "Der IPTV-Player",
      titleAccent: "für M3U & Xtream",
      body: "EDGE IPTV macht iPhone und iPad zur Streaming-Zentrale für Live-TV, Filme und Serien. Programmübersicht, Bild im Bild, Offline-Downloads und Streamen an Chromecast oder AirPlay mit einem Tipp.",
      ctaPrimary: "Im App Store laden",
      ctaSecondary: "Mehr erfahren",
      badges: ["Keine Werbung", "7 Tage kostenlos testen", "iPhone & iPad"],
      screenshotAlt:
        "Startbildschirm von EDGE IPTV auf dem iPhone mit dem Katalog aus Sendern, Filmen und Serien",
    },
    features: {
      title: "Warum EDGE IPTV?",
      intro: "Gebaut für Tempo und für die Art, wie iOS arbeitet. ",
      linkText: "Sieh dir den Vergleich an",
      introAfter: " mit den anderen IPTV-Playern auf iPhone und iPad.",
      items: [
        {
          title: "Bereit für M3U und Xtream",
          body: "M3U-Link oder Xtream-Zugangsdaten einfügen, und der Katalog lädt. Kein Sender muss von Hand angelegt werden.",
        },
        {
          title: "Live-Programmübersicht",
          body: "Die EPG-Tabelle zeigt, was gerade läuft und was folgt, sodass du den Abend auf einen Blick planst.",
        },
        {
          title: "Chromecast und AirPlay",
          body: "Schick einen Sender, einen Film oder eine Folge mit einem Tipp auf den Fernseher, ohne die App zu verlassen.",
        },
        {
          title: "Bild im Bild",
          body: "Schau in einem schwebenden Fenster weiter, während du den Katalog durchsuchst oder eine andere App nutzt.",
        },
        {
          title: "Offline-Downloads",
          body: "Sichere Filme und Folgen auf dem Gerät und sieh sie ganz ohne Verbindung.",
        },
        {
          title: "Sieben Sprachen",
          body: "Die gesamte Oberfläche ist übersetzt, die App liest sich, als wäre sie für dich geschrieben.",
        },
      ],
    },
    screenshots: {
      badge: "Oberfläche",
      title: "Auf Einfachheit ausgelegt",
      intro: "Eine Oberfläche, die deine Inhalte nach vorn stellt und sich selbst zurücknimmt.",
      cards: ["Geordnete Inhalte", "Live-Programmübersicht", "Offline-Downloads"],
    },
    about: {
      title: "Was ist EDGE IPTV?",
      paragraphs: [
        "EDGE IPTV ist ein IPTV-Player für iPhone und iPad. Er verkauft und hostet keine Inhalte: du bringst dein eigenes Abo bei einem IPTV-Anbieter mit, als M3U-Playlist oder Xtream-Zugangsdaten, und die App macht daraus einen Katalog, den man wirklich durchstöbern kann.",
        "An der Einrichtung scheitern die meisten Player. Hier passt sie auf einen Bildschirm: Link oder Zugangsdaten einfügen, und Sender, Filme und Serien erscheinen nach Kategorien sortiert, mit Covern und Programmübersicht, wo der Anbieter eine liefert.",
        "Die Wiedergabe läuft über eine hybride Engine, die für Formate auf VLC zurückgreift, die Apples eigener Player ablehnt: genau das macht sperrige Streams überhaupt abspielbar. Chromecast, AirPlay, Bild im Bild und Offline-Downloads sind enthalten statt separat verkauft.",
        "Die App ist kostenlos zu laden und enthält 7 Tage kostenlose Testphase. Danach ist zum Schauen ein Abo nötig, für 3,99 € im Monat oder 19,99 € im Jahr. Zu keinem Zeitpunkt Werbung.",
      ],
    },
    cta: {
      title: "Bereit loszulegen?",
      body: "Richte deine Playlist in rund zwei Minuten ein. ",
      linkText: "Folge der Schritt-für-Schritt-Anleitung",
      bodyAfter: ", wenn du lieber vorher liest.",
      button: "7 Tage kostenlos testen",
      fineprint:
        "Kostenlos laden. Erfordert iOS 17.0 oder neuer, auf iPhone und iPad.",
    },
    footer: {
      product: "Produkt",
      resources: "Ressourcen",
      legal: "Rechtliches",
      install: "Installationsanleitung",
      blog: "Blog",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      rights: "Alle Rechte vorbehalten.",
      tagline: "Der IPTV-Player für iPhone und iPad.",
    },
  },

  ar: {
    nav: { blog: "المدونة", download: "تحميل" },
    hero: {
      titleTop: "مشغّل IPTV",
      titleAccent: "لـ M3U و Xtream",
      body: "يحوّل EDGE IPTV آيفونك وآيبادك إلى مركز بث للقنوات المباشرة والأفلام والمسلسلات. دليل برامج، وصورة داخل صورة، وتنزيل للمشاهدة دون إنترنت، وإرسال إلى Chromecast أو AirPlay بلمسة واحدة.",
      ctaPrimary: "التحميل من App Store",
      ctaSecondary: "اعرف المزيد",
      badges: ["بدون إعلانات", "تجربة مجانية 7 أيام", "آيفون وآيباد"],
      screenshotAlt:
        "الشاشة الرئيسية لتطبيق EDGE IPTV على الآيفون، وتظهر فيها القنوات والأفلام والمسلسلات",
    },
    features: {
      title: "لماذا EDGE IPTV؟",
      intro: "مبني للسرعة ولطريقة عمل نظام iOS. ",
      linkText: "اطّلع على المقارنة",
      introAfter: " مع بقية مشغّلات IPTV على الآيفون والآيباد.",
      items: [
        {
          title: "جاهز لـ M3U و Xtream",
          body: "الصق رابط M3U أو بيانات Xtream وسيُحمَّل الكتالوج. لا حاجة لإضافة القنوات يدويًا.",
        },
        {
          title: "دليل البرامج المباشر",
          body: "تعرض شبكة الدليل ما يُعرض الآن وما يليه، فتخطط سهرتك بنظرة واحدة.",
        },
        {
          title: "Chromecast و AirPlay",
          body: "أرسل قناة أو فيلمًا أو حلقة إلى التلفزيون بلمسة، دون مغادرة التطبيق.",
        },
        {
          title: "صورة داخل صورة",
          body: "واصل المشاهدة في نافذة صغيرة بينما تتصفح الكتالوج أو تستخدم تطبيقًا آخر.",
        },
        {
          title: "تنزيل للمشاهدة دون إنترنت",
          body: "احفظ الأفلام والحلقات على جهازك وشاهدها بلا أي اتصال.",
        },
        {
          title: "سبع لغات",
          body: "الواجهة مترجمة بالكامل، فيبدو التطبيق وكأنه كُتب من أجلك.",
        },
      ],
    },
    screenshots: {
      badge: "الواجهة",
      title: "مصمّمة للبساطة",
      intro: "واجهة تضع المحتوى في المقدمة وتبتعد عن الطريق.",
      cards: ["محتوى منظّم", "دليل البرامج المباشر", "التنزيلات"],
    },
    about: {
      title: "ما هو EDGE IPTV؟",
      paragraphs: [
        "‏EDGE IPTV مشغّل IPTV مصمّم للآيفون والآيباد. لا يبيع أي محتوى ولا يستضيفه: أنت تأتي باشتراكك الخاص من مزوّد IPTV، على شكل قائمة M3U أو بيانات Xtream، ويحوّله التطبيق إلى كتالوج يمكن تصفّحه فعلًا.",
        "الإعداد هو ما تخفق فيه معظم المشغّلات. هنا يتم في شاشة واحدة: الصق الرابط أو بيانات الدخول، فتظهر القنوات والأفلام والمسلسلات مرتّبة في فئات، مع الملصقات ودليل البرامج حين يوفّره مزوّدك.",
        "يعتمد التشغيل على محرّك هجين يلجأ إلى VLC في الصيغ التي يرفضها مشغّل آبل، وهذا ما يجعل البثوث الصعبة قابلة للتشغيل أصلًا. وChromecast وAirPlay وصورة داخل صورة والتنزيلات كلها مشمولة، لا تُباع على حدة.",
        "التطبيق مجاني التحميل ويتضمن تجربة مجانية لسبعة أيام. بعدها تتطلب المشاهدة اشتراكًا بـ3.99 دولار شهريًا أو 19.99 دولار سنويًا. ولا إعلانات في أي مرحلة.",
      ],
    },
    cta: {
      title: "جاهز للبدء؟",
      body: "اضبط قائمتك في دقيقتين تقريبًا. ",
      linkText: "اتبع الدليل خطوة بخطوة",
      bodyAfter: " إن كنت تفضّل القراءة أولًا.",
      button: "ابدأ التجربة المجانية 7 أيام",
      fineprint: "التحميل مجاني. يتطلب iOS 17.0 أو أحدث، على الآيفون والآيباد.",
    },
    footer: {
      product: "المنتج",
      resources: "مصادر",
      legal: "قانوني",
      install: "دليل التثبيت",
      blog: "المدونة",
      privacy: "الخصوصية",
      terms: "شروط الاستخدام",
      rights: "جميع الحقوق محفوظة.",
      tagline: "مشغّل IPTV للآيفون والآيباد.",
    },
  },

  it: {
    nav: { blog: "Blog", download: "Scarica" },
    hero: {
      titleTop: "Il lettore IPTV",
      titleAccent: "per M3U e Xtream",
      body: "EDGE IPTV trasforma iPhone e iPad in un centro di streaming per TV in diretta, film e serie. Guida TV, Picture in Picture, download offline e trasmissione a Chromecast o AirPlay con un tocco.",
      ctaPrimary: "Scarica su App Store",
      ctaSecondary: "Scopri di più",
      badges: ["Senza pubblicità", "7 giorni di prova gratuita", "iPhone e iPad"],
      screenshotAlt:
        "Schermata iniziale di EDGE IPTV su iPhone, con il catalogo di canali, film e serie",
    },
    features: {
      title: "Perché scegliere EDGE IPTV?",
      intro: "Costruito per le prestazioni e per il modo in cui funziona iOS. ",
      linkText: "Guarda il confronto",
      introAfter: " con gli altri lettori IPTV su iPhone e iPad.",
      items: [
        {
          title: "Pronto per M3U e Xtream",
          body: "Incolla un link M3U o le credenziali Xtream e il catalogo si carica. Nessun canale da inserire a mano.",
        },
        {
          title: "Guida TV in diretta",
          body: "La griglia EPG mostra cosa c'è ora e cosa segue, così organizzi la serata con un colpo d'occhio.",
        },
        {
          title: "Chromecast e AirPlay",
          body: "Manda un canale, un film o un episodio al televisore con un tocco, senza uscire dall'app.",
        },
        {
          title: "Picture in Picture",
          body: "Continua a guardare in una finestra flottante mentre sfogli il catalogo o usi un'altra app.",
        },
        {
          title: "Download offline",
          body: "Salva film ed episodi sul dispositivo e guardali senza alcuna connessione.",
        },
        {
          title: "Sette lingue",
          body: "L'intera interfaccia è tradotta: l'app si legge come se fosse stata scritta per te.",
        },
      ],
    },
    screenshots: {
      badge: "Interfaccia",
      title: "Progettata per la semplicità",
      intro: "Un'interfaccia che mette davanti i tuoi contenuti e si toglie di mezzo.",
      cards: ["Contenuti organizzati", "Guida TV in diretta", "Download offline"],
    },
    about: {
      title: "Cos'è EDGE IPTV?",
      paragraphs: [
        "EDGE IPTV è un lettore IPTV pensato per iPhone e iPad. Non vende né ospita contenuti: porti il tuo abbonamento da un provider IPTV, come playlist M3U o credenziali Xtream, e l'app lo trasforma in un catalogo davvero navigabile.",
        "La configurazione è il punto in cui la maggior parte dei lettori sbaglia. Qui sta in una schermata: incolli il link o le credenziali e canali, film e serie compaiono ordinati per categoria, con le locandine e la guida ai programmi quando il provider la fornisce.",
        "La riproduzione si appoggia a un motore ibrido che passa a VLC per i formati che il lettore di Apple rifiuta, ed è ciò che rende riproducibili i flussi più ostici. Chromecast, AirPlay, Picture in Picture e download offline sono inclusi, non venduti a parte.",
        "L'app è gratuita da scaricare e include 7 giorni di prova gratuita. Dopodiché guardare richiede un abbonamento da 3,99 € al mese o 19,99 € all'anno. Nessuna pubblicità, in nessun momento.",
      ],
    },
    cta: {
      title: "Pronto per iniziare?",
      body: "Configura la tua playlist in circa due minuti. ",
      linkText: "Segui la guida passo passo",
      bodyAfter: " se preferisci leggerla prima.",
      button: "Inizia la prova gratuita di 7 giorni",
      fineprint:
        "Download gratuito. Richiede iOS 17.0 o successivo, su iPhone e iPad.",
    },
    footer: {
      product: "Prodotto",
      resources: "Risorse",
      legal: "Legale",
      install: "Guida all'installazione",
      blog: "Blog",
      privacy: "Privacy",
      terms: "Termini di utilizzo",
      rights: "Tutti i diritti riservati.",
      tagline: "Il lettore IPTV per iPhone e iPad.",
    },
  },
};
