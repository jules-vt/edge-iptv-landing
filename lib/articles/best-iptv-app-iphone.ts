import type { Lang } from "@/lib/i18n";

/**
 * Copy for "Best IPTV App for iPhone", in every language the site ships.
 *
 * This is the article aimed at the most commercial query the site ranks for,
 * so it is the one worth having everywhere. Text lives here and the layout in
 * components/articles/best-iptv-app-iphone.tsx: seven copies of a 700-line page
 * would drift apart the first time one of them is corrected.
 *
 * `**word**` renders as <strong>. Everything said about EDGE IPTV must match
 * the app: free to download, 7-day trial, then a subscription to watch.
 */

export interface StepCopy {
  title: string;
  description: string;
}

export interface CompetitorCopy {
  /** Key into COMPETITORS in the component. */
  id: "gse" | "flex" | "smarters" | "opus";
  name: string;
  meta: string;
  text: string;
  pros: string[];
  cons: string[];
}

export interface BestIphoneCopy {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  socialDescription: string;
  title: string;
  lead: string;
  readTime: string;
  author: string;
  keywords: string[];
  home: string;
  blog: string;
  breadcrumb: string;

  intro: string;
  quickLabel: string;
  quickAnswer: string;
  trialCta: string;
  trialCtaStore: string;

  criteriaTitle: string;
  criteriaIntro: string;
  criteria: [StepCopy, StepCopy, StepCopy, StepCopy];

  tableTitle: string;
  table: {
    app: string;
    rating: string;
    price: string;
    chromecast: string;
    offline: string;
    setup: string;
  };
  newLabel: string;
  topPick: string;
  prices: { edge: string; iap: string; free: string };

  edgeTitle: string;
  iconAlt: string;
  trialBadge: string;
  edgeSummary: string;
  edgeFeatures: string[];
  whyTitle: string;
  why: [string, string];

  othersTitle: string;
  others: [CompetitorCopy, CompetitorCopy, CompetitorCopy, CompetitorCopy];

  stepsTitle: string;
  stepsIntro: string;
  steps: [StepCopy, StepCopy, StepCopy, StepCopy];
  guideBefore: string;
  guideLabel: string;
  guideAfter: string;

  tipsTitle: string;
  tips: StepCopy[];

  relatedTitle: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
}

export const BEST_IPHONE_COPY: Record<Lang, BestIphoneCopy> = {
  en: {
    slug: "best-iptv-app-for-iphone",
    metaTitle: "Best IPTV App for iPhone 2026: Top 5 Free Apps Tested",
    metaDescription:
      "Looking for the best IPTV app for iPhone? We tested the top 5 apps in 2026 to see which is fastest to set up, supports Chromecast and works best on iOS.",
    socialDescription:
      "We tested the top 5 IPTV apps for iPhone in 2026: setup speed, Chromecast, offline viewing.",
    title: "Best IPTV App for iPhone 2026: Top 5 Free Apps Tested",
    lead: "We tested the 5 most popular IPTV apps on iPhone to find the fastest, most reliable and easiest to set up.",
    readTime: "7 min read",
    author: "EDGE IPTV Team",
    keywords: [
      "best iptv app for iphone",
      "iptv app iphone",
      "free iptv app iphone",
      "how to download iptv on iphone",
      "iptv player ios",
    ],
    home: "Home",
    blog: "Blog",
    breadcrumb: "Best IPTV App for iPhone 2026",

    intro:
      "Yes, you **can watch IPTV on your iPhone**, and you don't need a jailbreak or a sideloaded app. All five apps in this guide are on the App Store. We tested each one for setup speed, stream quality, Chromecast support and iOS integration to find the best IPTV app for iPhone in 2026.",
    quickLabel: "Quick answer",
    quickAnswer:
      "**EDGE IPTV** is the best IPTV app for iPhone in 2026. It's the only app in this test with Chromecast, offline downloads and a setup under 2 minutes. It's free to download, then $3.99 a month after a 7-day free trial.",
    trialCta: "Start your 7-day free trial",
    trialCtaStore: "Start your 7-day free trial on the App Store",

    criteriaTitle: "What Makes a Good IPTV App for iPhone?",
    criteriaIntro:
      "Not all IPTV players are built for iOS. Here's what separates a great iPhone IPTV app from the mediocre ones:",
    criteria: [
      {
        title: "Native iOS interface",
        description:
          "Feels at home on iPhone: smooth animations, proper tap targets, Dark Mode support.",
      },
      {
        title: "Fast, stable streaming",
        description:
          "Smart buffering that adapts to your connection without constant interruptions.",
      },
      {
        title: "Chromecast / AirPlay",
        description: "Cast to your TV without buying extra hardware. A feature many apps skip.",
      },
      {
        title: "Offline downloads",
        description: "Download movies and series to watch on the go, even with no internet.",
      },
    ],

    tableTitle: "Top 5 IPTV Apps for iPhone: Side-by-Side Comparison",
    table: {
      app: "App",
      rating: "Rating",
      price: "Price",
      chromecast: "Chromecast",
      offline: "Offline",
      setup: "Setup",
    },
    newLabel: "New",
    topPick: "#1 Pick",
    prices: { edge: "7-day trial, then $3.99/mo", iap: "Free (IAP)", free: "Free" },

    edgeTitle: "#1 Best IPTV App for iPhone: EDGE IPTV",
    iconAlt: "EDGE IPTV app icon, best IPTV app for iPhone",
    trialBadge: "7-day free trial",
    edgeSummary:
      "Built from the ground up for iPhone and iPad, EDGE IPTV is the only player in this test that combines Chromecast casting, offline downloads and a fully native iOS interface in one app.",
    edgeFeatures: [
      "Set up with Xtream Codes or M3U in under 2 minutes",
      "Chromecast and AirPlay to your TV",
      "Download movies & series for offline viewing",
      "Picture in Picture while you use other apps",
      "Live TV, movies and series with a TV guide",
      "iPhone and iPad on iOS 17 or later",
    ],
    whyTitle: "Why EDGE IPTV Stands Out on iPhone",
    why: [
      "Most IPTV players for iOS are ports from Android. They work, but they feel foreign on iPhone. EDGE IPTV was designed for iOS only, and it shows in every interaction: gestures feel natural, the keyboard appears where expected, and the app follows system conventions like Dynamic Type and Dark Mode.",
      "**Chromecast support** is what sets it apart here: none of the other four apps in this test can cast to a Chromecast or Google TV. Combined with **offline downloads**, it covers both the at-home and the on-the-go use cases iPhone owners care about most.",
    ],

    othersTitle: "Other IPTV Apps for iPhone Worth Knowing",
    others: [
      {
        id: "gse",
        name: "#2 — GSE Smart IPTV",
        meta: "Rating: ★ 4.1 · Free with in-app purchases",
        text: "GSE has been around for years and has a loyal user base. It supports M3U and Xtream codes and includes a built-in EPG. Advanced features like multi-screen are locked behind an in-app purchase, and there is no Chromecast support.",
        pros: ["M3U + Xtream support", "Built-in EPG"],
        cons: ["No Chromecast", "Key features paid"],
      },
      {
        id: "flex",
        name: "#3 — Flex IPTV",
        meta: "Rating: ★ 3.8 · Free with in-app purchases",
        text: "Flex IPTV has a clean interface and supports M3U playlists. The free tier is limited to 4 saved playlists, and the UI feels dated next to modern iOS design. AirPlay works, but Chromecast is not supported.",
        pros: ["Clean UI", "AirPlay support"],
        cons: ["Limited free playlists", "No Chromecast"],
      },
      {
        id: "smarters",
        name: "#4 — IPTV Smarters Pro",
        meta: "Rating: ★ 3.5 · Free with in-app purchases",
        text: "A well-known name in the IPTV world. The iOS version lags behind its Android counterpart: setup is clunkier and the interface doesn't feel native to iPhone. It supports Xtream codes but takes several steps to configure.",
        pros: ["Xtream codes support"],
        cons: ["Not optimised for iOS", "No Chromecast or offline"],
      },
      {
        id: "opus",
        name: "#5 — Opus IPTV Player",
        meta: "Rating: ★ 3.7 · Free",
        text: "Opus supports M3U playlists and has a reasonably modern look. It's free with no obvious paywall, but it lacks Chromecast and offline mode, and its Xtream codes support is less reliable than the competition.",
        pros: ["Fully free", "M3U support"],
        cons: ["No Chromecast or offline", "Unreliable Xtream codes"],
      },
    ],

    stepsTitle: "How to Download an IPTV App on iPhone (2-Minute Setup)",
    stepsIntro: "Here's how to go from nothing to streaming in under 2 minutes with EDGE IPTV:",
    steps: [
      {
        title: "Download EDGE IPTV from the App Store",
        description:
          'Tap the button below or search "EDGE IPTV" in the App Store. The download is free and includes a 7-day free trial.',
      },
      {
        title: 'Tap "Add a playlist"',
        description: "Choose Xtream Codes, or M3U playlist if your provider gave you a link.",
      },
      {
        title: "Enter your IPTV provider credentials",
        description:
          'Paste the server URL, username and password from your IPTV service, then tap "Add playlist".',
      },
      {
        title: "Start watching",
        description:
          "Your channels, movies and series load automatically. Tap anything to start playing.",
      },
    ],
    guideBefore: "Need a more detailed walkthrough? See our ",
    guideLabel: "complete guide to installing IPTV on iPhone and iPad",
    guideAfter: ".",

    tipsTitle: "Tips for the Best IPTV Experience on iPhone",
    tips: [
      {
        title: "Use Wi-Fi for HD streaming",
        description: "For 1080p or 4K streams, use Wi-Fi. A 5 GHz network is ideal to avoid buffering.",
      },
      {
        title: "Download before travelling",
        description:
          "Save movies and episodes over Wi-Fi before you leave, then watch without mobile data.",
      },
      {
        title: "Cast to your TV",
        description:
          "Tap the cast icon in the player to send the stream to a Chromecast, Google TV or Apple TV.",
      },
      {
        title: "Keep watching in Picture in Picture",
        description:
          "Swipe home during playback and the video keeps playing in a small window over your other apps.",
      },
      {
        title: "Turn on Background App Refresh",
        description:
          "Settings → EDGE IPTV → Background App Refresh lets your catalogue update between sessions, whenever iOS allows.",
      },
      {
        title: "Fix buffering with a VPN",
        description:
          "If your internet provider throttles streaming traffic, a VPN can bring the speed back.",
      },
    ],

    relatedTitle: "Related Guides",
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        q: "What is the best IPTV app for iPhone?",
        a: "EDGE IPTV sets up Xtream codes in under two minutes and supports Chromecast, offline downloads and a full EPG guide on both iPhone and iPad. It is free to download, with a 7-day free trial, then $3.99 per month or $19.99 per year.",
      },
      {
        q: "Can I watch IPTV on my iPhone?",
        a: "Yes, you can watch IPTV on your iPhone. You need an IPTV player app like EDGE IPTV and an IPTV subscription from a provider. Once you have your Xtream codes, setup takes less than 2 minutes.",
      },
      {
        q: "How do I download an IPTV app on my iPhone?",
        a: 'Open the App Store on your iPhone, search for "EDGE IPTV" and tap Get. Then open the app, tap "Add a playlist", enter your provider\'s Xtream codes (URL, username, password), and you\'re ready to stream.',
      },
      {
        q: "Is there a free IPTV app for iPhone?",
        a: "EDGE IPTV is free to download and comes with a 7-day free trial. After the trial, playback requires a subscription at $3.99 per month or $19.99 per year, with no ads at any point. You also need your own IPTV subscription from a content provider, which is separate from the app.",
      },
      {
        q: "Does IPTV work with any iPhone?",
        a: "EDGE IPTV requires iOS 17.0 or later, so it works on iPhone XS and newer, up to the latest models. On iPad it supports iPad Pro (2nd generation), iPad Air (3rd generation), iPad (6th generation) and iPad mini (5th generation) or newer.",
      },
    ],
  },

  fr: {
    slug: "meilleure-app-iptv-iphone",
    metaTitle: "Meilleure app IPTV pour iPhone 2026 : 5 apps testées",
    metaDescription:
      "Quelle est la meilleure app IPTV pour iPhone ? Nous avons testé les 5 plus populaires en 2026 : rapidité d'installation, Chromecast, hors ligne, confort sur iOS.",
    socialDescription:
      "5 apps IPTV pour iPhone testées en 2026 : installation, Chromecast, visionnage hors ligne.",
    title: "Meilleure app IPTV pour iPhone 2026 : 5 apps testées",
    lead: "Nous avons testé les 5 apps IPTV les plus populaires sur iPhone pour trouver la plus rapide, la plus fiable et la plus simple à configurer.",
    readTime: "7 min",
    author: "Équipe EDGE IPTV",
    keywords: [
      "meilleure app iptv iphone",
      "application iptv iphone",
      "app iptv gratuite iphone",
      "comment regarder iptv sur iphone",
      "lecteur iptv ios",
    ],
    home: "Accueil",
    blog: "Blog",
    breadcrumb: "Meilleure app IPTV pour iPhone 2026",

    intro:
      "Oui, vous **pouvez regarder l'IPTV sur votre iPhone**, sans jailbreak ni app installée en dehors de l'App Store. Les cinq apps de ce comparatif y sont toutes disponibles. Nous les avons testées sur la rapidité d'installation, la qualité de lecture, le Chromecast et l'intégration à iOS pour désigner la meilleure app IPTV pour iPhone en 2026.",
    quickLabel: "Réponse rapide",
    quickAnswer:
      "**EDGE IPTV** est la meilleure app IPTV pour iPhone en 2026. C'est la seule de ce test à réunir le Chromecast, les téléchargements hors ligne et une installation en moins de 2 minutes. Elle est gratuite au téléchargement, puis coûte 3,99 € par mois après 7 jours d'essai gratuit.",
    trialCta: "Démarrer l'essai gratuit de 7 jours",
    trialCtaStore: "Démarrer l'essai gratuit sur l'App Store",

    criteriaTitle: "Qu'est-ce qui fait une bonne app IPTV pour iPhone ?",
    criteriaIntro:
      "Tous les lecteurs IPTV ne sont pas pensés pour iOS. Voici ce qui distingue une excellente app IPTV pour iPhone des autres :",
    criteria: [
      {
        title: "Interface iOS native",
        description:
          "On s'y sent chez soi : animations fluides, zones tactiles bien dimensionnées, mode sombre.",
      },
      {
        title: "Lecture rapide et stable",
        description:
          "Une mise en mémoire tampon qui s'adapte à votre connexion, sans coupures à répétition.",
      },
      {
        title: "Chromecast / AirPlay",
        description:
          "Diffusez sur votre TV sans acheter de boîtier. Une fonction que beaucoup d'apps oublient.",
      },
      {
        title: "Téléchargements hors ligne",
        description:
          "Téléchargez films et séries pour les regarder partout, même sans connexion.",
      },
    ],

    tableTitle: "Les 5 meilleures apps IPTV pour iPhone : le comparatif",
    table: {
      app: "App",
      rating: "Note",
      price: "Prix",
      chromecast: "Chromecast",
      offline: "Hors ligne",
      setup: "Installation",
    },
    newLabel: "Nouveau",
    topPick: "N° 1",
    prices: {
      edge: "7 j d'essai, puis 3,99 €/mois",
      iap: "Gratuit (achats intégrés)",
      free: "Gratuit",
    },

    edgeTitle: "N° 1 des apps IPTV pour iPhone : EDGE IPTV",
    iconAlt: "Icône de l'app EDGE IPTV, meilleure app IPTV pour iPhone",
    trialBadge: "7 jours d'essai gratuit",
    edgeSummary:
      "Conçue de zéro pour l'iPhone et l'iPad, EDGE IPTV est le seul lecteur de ce test à réunir la diffusion Chromecast, les téléchargements hors ligne et une interface iOS entièrement native.",
    edgeFeatures: [
      "Configuration Xtream Codes ou M3U en moins de 2 minutes",
      "Chromecast et AirPlay vers votre TV",
      "Films et séries téléchargeables hors ligne",
      "Picture in Picture pendant que vous utilisez d'autres apps",
      "TV en direct, films et séries avec guide des programmes",
      "iPhone et iPad sous iOS 17 ou plus récent",
    ],
    whyTitle: "Pourquoi EDGE IPTV se démarque sur iPhone",
    why: [
      "La plupart des lecteurs IPTV pour iOS sont des portages d'apps Android. Ils fonctionnent, mais on sent qu'ils n'ont pas été pensés pour l'iPhone. EDGE IPTV a été conçue uniquement pour iOS, et cela se voit à chaque geste : les balayages sont naturels, le clavier apparaît là où on l'attend, et l'app respecte les conventions du système comme la taille de texte dynamique et le mode sombre.",
      "Le **Chromecast** fait la différence : aucune des quatre autres apps de ce test ne sait diffuser vers un Chromecast ou une Google TV. Avec les **téléchargements hors ligne**, EDGE IPTV couvre à la fois l'usage à la maison et en déplacement, les deux qui comptent le plus sur iPhone.",
    ],

    othersTitle: "Les autres apps IPTV pour iPhone à connaître",
    others: [
      {
        id: "gse",
        name: "N° 2 — GSE Smart IPTV",
        meta: "Note : ★ 4,1 · Gratuit avec achats intégrés",
        text: "GSE existe depuis des années et garde une base d'utilisateurs fidèle. Il gère M3U et Xtream et intègre un guide des programmes. Mais les fonctions avancées comme le multi-écran sont payantes, et il n'y a pas de Chromecast.",
        pros: ["M3U + Xtream", "Guide des programmes intégré"],
        cons: ["Pas de Chromecast", "Fonctions clés payantes"],
      },
      {
        id: "flex",
        name: "N° 3 — Flex IPTV",
        meta: "Note : ★ 3,8 · Gratuit avec achats intégrés",
        text: "Flex IPTV a une interface épurée et gère les playlists M3U. La version gratuite est limitée à 4 playlists, et le design paraît daté face aux standards actuels d'iOS. AirPlay fonctionne, pas le Chromecast.",
        pros: ["Interface épurée", "AirPlay"],
        cons: ["Playlists gratuites limitées", "Pas de Chromecast"],
      },
      {
        id: "smarters",
        name: "N° 4 — IPTV Smarters Pro",
        meta: "Note : ★ 3,5 · Gratuit avec achats intégrés",
        text: "Un nom connu dans le monde de l'IPTV. La version iOS reste en retrait par rapport à celle d'Android : l'installation est plus laborieuse et l'interface ne fait pas native sur iPhone. Xtream est pris en charge, mais demande plusieurs étapes.",
        pros: ["Codes Xtream pris en charge"],
        cons: ["Peu optimisé pour iOS", "Ni Chromecast ni hors ligne"],
      },
      {
        id: "opus",
        name: "N° 5 — Opus IPTV Player",
        meta: "Note : ★ 3,7 · Gratuit",
        text: "Opus gère les playlists M3U et a un look plutôt moderne. Il est gratuit sans paywall visible, mais il lui manque le Chromecast et le mode hors ligne, et sa prise en charge de Xtream est moins fiable que celle de la concurrence.",
        pros: ["Entièrement gratuit", "M3U"],
        cons: ["Ni Chromecast ni hors ligne", "Xtream peu fiable"],
      },
    ],

    stepsTitle: "Comment installer une app IPTV sur iPhone (en 2 minutes)",
    stepsIntro: "Voici comment passer de rien à la lecture en moins de 2 minutes avec EDGE IPTV :",
    steps: [
      {
        title: "Téléchargez EDGE IPTV sur l'App Store",
        description:
          "Touchez le bouton ci-dessous ou cherchez « EDGE IPTV » dans l'App Store. Le téléchargement est gratuit et inclut 7 jours d'essai.",
      },
      {
        title: "Touchez « Ajouter une playlist »",
        description:
          "Choisissez Xtream Codes, ou Playlist M3U si votre fournisseur vous a donné un lien.",
      },
      {
        title: "Saisissez les identifiants de votre fournisseur",
        description:
          "Collez l'URL du serveur, le nom d'utilisateur et le mot de passe de votre service IPTV, puis touchez « Ajouter la playlist ».",
      },
      {
        title: "Lancez la lecture",
        description:
          "Vos chaînes, films et séries se chargent automatiquement. Touchez un contenu pour le regarder.",
      },
    ],
    guideBefore: "Besoin d'un pas-à-pas plus détaillé ? Consultez notre ",
    guideLabel: "guide complet pour installer l'IPTV sur iPhone et iPad",
    guideAfter: ".",

    tipsTitle: "Astuces pour profiter au mieux de l'IPTV sur iPhone",
    tips: [
      {
        title: "Passez en Wi-Fi pour la HD",
        description:
          "Pour du 1080p ou de la 4K, utilisez le Wi-Fi. Un réseau 5 GHz limite au mieux le buffering.",
      },
      {
        title: "Téléchargez avant de partir",
        description:
          "Enregistrez films et épisodes en Wi-Fi avant le départ, puis regardez-les sans données mobiles.",
      },
      {
        title: "Diffusez sur la TV",
        description:
          "Touchez l'icône de diffusion dans le lecteur pour envoyer le flux vers un Chromecast, une Google TV ou une Apple TV.",
      },
      {
        title: "Continuez en Picture in Picture",
        description:
          "Revenez à l'écran d'accueil pendant la lecture : la vidéo continue dans une petite fenêtre par-dessus vos apps.",
      },
      {
        title: "Activez l'actualisation en arrière-plan",
        description:
          "Réglages → EDGE IPTV → Actualiser en arrière-plan : votre catalogue se met à jour entre deux sessions, quand iOS le permet.",
      },
      {
        title: "Un VPN contre le buffering",
        description:
          "Si votre fournisseur d'accès bride le streaming, un VPN peut vous rendre votre débit.",
      },
    ],

    relatedTitle: "Guides associés",
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Quelle est la meilleure app IPTV pour iPhone ?",
        a: "EDGE IPTV se configure avec des codes Xtream en moins de deux minutes et propose le Chromecast, les téléchargements hors ligne et un guide des programmes complet sur iPhone comme sur iPad. Elle est gratuite au téléchargement, avec 7 jours d'essai gratuit, puis 3,99 € par mois ou 19,99 € par an.",
      },
      {
        q: "Peut-on regarder l'IPTV sur iPhone ?",
        a: "Oui. Il vous faut une app de lecture IPTV comme EDGE IPTV et un abonnement IPTV auprès d'un fournisseur. Une fois vos codes Xtream en main, l'installation prend moins de 2 minutes.",
      },
      {
        q: "Comment installer une app IPTV sur iPhone ?",
        a: "Ouvrez l'App Store, cherchez « EDGE IPTV » et touchez Obtenir. Ouvrez ensuite l'app, touchez « Ajouter une playlist », saisissez les codes Xtream de votre fournisseur (URL, nom d'utilisateur, mot de passe) et c'est prêt.",
      },
      {
        q: "Existe-t-il une app IPTV gratuite pour iPhone ?",
        a: "EDGE IPTV est gratuite au téléchargement et inclut 7 jours d'essai gratuit. Ensuite, la lecture nécessite un abonnement à 3,99 € par mois ou 19,99 € par an, sans aucune publicité. Il vous faut aussi votre propre abonnement IPTV auprès d'un fournisseur de contenu, distinct de l'app.",
      },
      {
        q: "L'IPTV fonctionne-t-elle sur tous les iPhone ?",
        a: "EDGE IPTV demande iOS 17.0 ou plus récent : elle fonctionne donc sur l'iPhone XS et tous les modèles suivants, jusqu'aux plus récents. Sur iPad, elle prend en charge l'iPad Pro (2e génération), l'iPad Air (3e génération), l'iPad (6e génération) et l'iPad mini (5e génération) ou plus récents.",
      },
    ],
  },

  es: {
    slug: "mejor-app-iptv-iphone",
    metaTitle: "Mejor app IPTV para iPhone 2026: 5 apps probadas",
    metaDescription:
      "¿Cuál es la mejor app IPTV para iPhone? Probamos las 5 más populares en 2026: rapidez de configuración, Chromecast, descargas sin conexión y experiencia en iOS.",
    socialDescription:
      "5 apps IPTV para iPhone probadas en 2026: configuración, Chromecast y visualización sin conexión.",
    title: "Mejor app IPTV para iPhone 2026: 5 apps probadas",
    lead: "Probamos las 5 apps IPTV más populares en iPhone para encontrar la más rápida, la más fiable y la más fácil de configurar.",
    readTime: "7 min",
    author: "Equipo EDGE IPTV",
    keywords: [
      "mejor app iptv iphone",
      "aplicación iptv iphone",
      "app iptv gratis iphone",
      "cómo ver iptv en iphone",
      "reproductor iptv ios",
    ],
    home: "Inicio",
    blog: "Blog",
    breadcrumb: "Mejor app IPTV para iPhone 2026",

    intro:
      "Sí, **puedes ver IPTV en tu iPhone**, sin jailbreak y sin instalar apps fuera de la App Store. Las cinco apps de esta guía están disponibles allí. Probamos cada una en rapidez de configuración, calidad de reproducción, Chromecast e integración con iOS para elegir la mejor app IPTV para iPhone en 2026.",
    quickLabel: "Respuesta rápida",
    quickAnswer:
      "**EDGE IPTV** es la mejor app IPTV para iPhone en 2026. Es la única de esta prueba que reúne Chromecast, descargas sin conexión y una configuración en menos de 2 minutos. Se descarga gratis y cuesta 3,99 € al mes tras 7 días de prueba gratuita.",
    trialCta: "Empieza tu prueba gratuita de 7 días",
    trialCtaStore: "Empieza tu prueba gratuita en la App Store",

    criteriaTitle: "¿Qué hace buena a una app IPTV para iPhone?",
    criteriaIntro:
      "No todos los reproductores IPTV están pensados para iOS. Esto es lo que distingue a una gran app IPTV para iPhone del resto:",
    criteria: [
      {
        title: "Interfaz nativa de iOS",
        description:
          "Se siente como en casa en el iPhone: animaciones fluidas, botones bien dimensionados, modo oscuro.",
      },
      {
        title: "Reproducción rápida y estable",
        description: "Un búfer inteligente que se adapta a tu conexión sin cortes constantes.",
      },
      {
        title: "Chromecast / AirPlay",
        description:
          "Envía la imagen a tu TV sin comprar otro dispositivo. Muchas apps no lo ofrecen.",
      },
      {
        title: "Descargas sin conexión",
        description: "Descarga películas y series para verlas donde quieras, incluso sin internet.",
      },
    ],

    tableTitle: "Las 5 mejores apps IPTV para iPhone: comparativa",
    table: {
      app: "App",
      rating: "Nota",
      price: "Precio",
      chromecast: "Chromecast",
      offline: "Sin conexión",
      setup: "Configuración",
    },
    newLabel: "Nueva",
    topPick: "N.º 1",
    prices: {
      edge: "7 días de prueba, luego 3,99 €/mes",
      iap: "Gratis (compras en la app)",
      free: "Gratis",
    },

    edgeTitle: "N.º 1 en apps IPTV para iPhone: EDGE IPTV",
    iconAlt: "Icono de la app EDGE IPTV, la mejor app IPTV para iPhone",
    trialBadge: "7 días de prueba gratis",
    edgeSummary:
      "Creada desde cero para iPhone y iPad, EDGE IPTV es el único reproductor de esta prueba que reúne Chromecast, descargas sin conexión y una interfaz de iOS totalmente nativa.",
    edgeFeatures: [
      "Configuración Xtream Codes o M3U en menos de 2 minutos",
      "Chromecast y AirPlay a tu TV",
      "Películas y series descargables sin conexión",
      "Picture in Picture mientras usas otras apps",
      "TV en vivo, películas y series con guía de programación",
      "iPhone y iPad con iOS 17 o posterior",
    ],
    whyTitle: "Por qué EDGE IPTV destaca en iPhone",
    why: [
      "La mayoría de los reproductores IPTV para iOS son adaptaciones de apps de Android. Funcionan, pero se nota que no se pensaron para el iPhone. EDGE IPTV se diseñó solo para iOS, y se nota en cada gesto: los deslizamientos son naturales, el teclado aparece donde lo esperas y la app respeta las convenciones del sistema, como el texto dinámico y el modo oscuro.",
      "El **Chromecast** marca la diferencia: ninguna de las otras cuatro apps de esta prueba puede enviar la imagen a un Chromecast o una Google TV. Junto con las **descargas sin conexión**, EDGE IPTV cubre tanto el uso en casa como fuera de ella, los dos que más importan en un iPhone.",
    ],

    othersTitle: "Otras apps IPTV para iPhone que conviene conocer",
    others: [
      {
        id: "gse",
        name: "N.º 2 — GSE Smart IPTV",
        meta: "Nota: ★ 4,1 · Gratis con compras en la app",
        text: "GSE lleva años en el mercado y tiene usuarios fieles. Admite M3U y Xtream e incluye una guía de programación. Pero las funciones avanzadas, como la multipantalla, son de pago, y no tiene Chromecast.",
        pros: ["M3U + Xtream", "Guía de programación integrada"],
        cons: ["Sin Chromecast", "Funciones clave de pago"],
      },
      {
        id: "flex",
        name: "N.º 3 — Flex IPTV",
        meta: "Nota: ★ 3,8 · Gratis con compras en la app",
        text: "Flex IPTV tiene una interfaz limpia y admite listas M3U. La versión gratuita se limita a 4 listas y el diseño se ve anticuado frente a iOS actual. AirPlay funciona, Chromecast no.",
        pros: ["Interfaz limpia", "AirPlay"],
        cons: ["Listas gratuitas limitadas", "Sin Chromecast"],
      },
      {
        id: "smarters",
        name: "N.º 4 — IPTV Smarters Pro",
        meta: "Nota: ★ 3,5 · Gratis con compras en la app",
        text: "Un nombre conocido en el mundo IPTV. La versión de iOS va por detrás de la de Android: la configuración es más torpe y la interfaz no se siente nativa en el iPhone. Admite Xtream, pero requiere varios pasos.",
        pros: ["Admite códigos Xtream"],
        cons: ["Poco optimizada para iOS", "Sin Chromecast ni modo sin conexión"],
      },
      {
        id: "opus",
        name: "N.º 5 — Opus IPTV Player",
        meta: "Nota: ★ 3,7 · Gratis",
        text: "Opus admite listas M3U y tiene un aspecto bastante moderno. Es gratis y sin muros de pago visibles, pero le faltan Chromecast y modo sin conexión, y su soporte de Xtream es menos fiable que el de la competencia.",
        pros: ["Totalmente gratis", "M3U"],
        cons: ["Sin Chromecast ni modo sin conexión", "Xtream poco fiable"],
      },
    ],

    stepsTitle: "Cómo instalar una app IPTV en iPhone (en 2 minutos)",
    stepsIntro: "Así pasas de cero a ver contenido en menos de 2 minutos con EDGE IPTV:",
    steps: [
      {
        title: "Descarga EDGE IPTV de la App Store",
        description:
          "Toca el botón de abajo o busca «EDGE IPTV» en la App Store. La descarga es gratis e incluye 7 días de prueba.",
      },
      {
        title: "Toca «Añadir una playlist»",
        description: "Elige Xtream Codes, o Playlist M3U si tu proveedor te dio un enlace.",
      },
      {
        title: "Introduce los datos de tu proveedor",
        description:
          "Pega la URL del servidor, el usuario y la contraseña de tu servicio IPTV y toca «Añadir la playlist».",
      },
      {
        title: "Empieza a ver",
        description:
          "Tus canales, películas y series se cargan solos. Toca cualquier contenido para reproducirlo.",
      },
    ],
    guideBefore: "¿Necesitas un paso a paso más detallado? Consulta nuestra ",
    guideLabel: "guía completa para instalar IPTV en iPhone y iPad",
    guideAfter: ".",

    tipsTitle: "Consejos para disfrutar al máximo del IPTV en iPhone",
    tips: [
      {
        title: "Usa Wi-Fi para la HD",
        description:
          "Para 1080p o 4K, conéctate por Wi-Fi. Una red de 5 GHz es lo ideal para evitar cortes.",
      },
      {
        title: "Descarga antes de viajar",
        description:
          "Guarda películas y episodios por Wi-Fi antes de salir y míralos sin gastar datos móviles.",
      },
      {
        title: "Envía la imagen a la TV",
        description:
          "Toca el icono de transmisión en el reproductor para enviarla a un Chromecast, una Google TV o un Apple TV.",
      },
      {
        title: "Sigue viendo en Picture in Picture",
        description:
          "Vuelve a la pantalla de inicio durante la reproducción: el vídeo sigue en una ventana pequeña sobre tus apps.",
      },
      {
        title: "Activa la actualización en segundo plano",
        description:
          "Ajustes → EDGE IPTV → Actualización en segundo plano: tu catálogo se actualiza entre sesiones, cuando iOS lo permite.",
      },
      {
        title: "Una VPN contra los cortes",
        description:
          "Si tu operador limita el tráfico de streaming, una VPN puede devolverte la velocidad.",
      },
    ],

    relatedTitle: "Guías relacionadas",
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Cuál es la mejor app IPTV para iPhone?",
        a: "EDGE IPTV se configura con códigos Xtream en menos de dos minutos y ofrece Chromecast, descargas sin conexión y una guía de programación completa en iPhone y iPad. Se descarga gratis, con 7 días de prueba gratuita, y después cuesta 3,99 € al mes o 19,99 € al año.",
      },
      {
        q: "¿Se puede ver IPTV en el iPhone?",
        a: "Sí. Necesitas una app reproductora de IPTV como EDGE IPTV y una suscripción IPTV de un proveedor. Con tus códigos Xtream a mano, la configuración lleva menos de 2 minutos.",
      },
      {
        q: "¿Cómo instalo una app IPTV en el iPhone?",
        a: "Abre la App Store, busca «EDGE IPTV» y toca Obtener. Después abre la app, toca «Añadir una playlist», introduce los códigos Xtream de tu proveedor (URL, usuario, contraseña) y listo.",
      },
      {
        q: "¿Hay alguna app IPTV gratis para iPhone?",
        a: "EDGE IPTV se descarga gratis e incluye 7 días de prueba gratuita. Después, reproducir contenido requiere una suscripción de 3,99 € al mes o 19,99 € al año, sin anuncios en ningún momento. También necesitas tu propia suscripción IPTV con un proveedor de contenido, independiente de la app.",
      },
      {
        q: "¿El IPTV funciona en cualquier iPhone?",
        a: "EDGE IPTV requiere iOS 17.0 o posterior, así que funciona en el iPhone XS y todos los modelos siguientes, hasta los más recientes. En iPad es compatible con iPad Pro (2.ª generación), iPad Air (3.ª generación), iPad (6.ª generación) e iPad mini (5.ª generación) o posteriores.",
      },
    ],
  },

  pt: {
    slug: "melhor-app-iptv-iphone",
    metaTitle: "Melhor app IPTV para iPhone 2026: 5 apps testados",
    metaDescription:
      "Qual é o melhor app IPTV para iPhone? Testamos os 5 mais populares em 2026: rapidez de configuração, Chromecast, downloads offline e experiência no iOS.",
    socialDescription:
      "5 apps IPTV para iPhone testados em 2026: configuração, Chromecast e visualização offline.",
    title: "Melhor app IPTV para iPhone 2026: 5 apps testados",
    lead: "Testamos os 5 apps IPTV mais populares no iPhone para encontrar o mais rápido, o mais confiável e o mais fácil de configurar.",
    readTime: "7 min",
    author: "Equipe EDGE IPTV",
    keywords: [
      "melhor app iptv iphone",
      "aplicativo iptv iphone",
      "app iptv grátis iphone",
      "como assistir iptv no iphone",
      "player iptv ios",
    ],
    home: "Início",
    blog: "Blog",
    breadcrumb: "Melhor app IPTV para iPhone 2026",

    intro:
      "Sim, você **pode assistir IPTV no iPhone**, sem jailbreak e sem instalar apps fora da App Store. Os cinco apps deste guia estão todos lá. Testamos cada um em rapidez de configuração, qualidade de reprodução, Chromecast e integração com o iOS para escolher o melhor app IPTV para iPhone em 2026.",
    quickLabel: "Resposta rápida",
    quickAnswer:
      "O **EDGE IPTV** é o melhor app IPTV para iPhone em 2026. É o único deste teste que reúne Chromecast, downloads offline e configuração em menos de 2 minutos. O download é grátis, e depois custa US$ 3,99 por mês após 7 dias de teste grátis.",
    trialCta: "Comece seu teste grátis de 7 dias",
    trialCtaStore: "Comece seu teste grátis na App Store",

    criteriaTitle: "O que faz um bom app IPTV para iPhone?",
    criteriaIntro:
      "Nem todo player IPTV foi feito para o iOS. Veja o que separa um ótimo app IPTV para iPhone dos medianos:",
    criteria: [
      {
        title: "Interface nativa do iOS",
        description:
          "Parece feito para o iPhone: animações suaves, botões do tamanho certo, modo escuro.",
      },
      {
        title: "Reprodução rápida e estável",
        description: "Um buffer inteligente que se adapta à sua conexão, sem travamentos constantes.",
      },
      {
        title: "Chromecast / AirPlay",
        description:
          "Transmita para a TV sem comprar outro aparelho. Muitos apps deixam isso de fora.",
      },
      {
        title: "Downloads offline",
        description: "Baixe filmes e séries para assistir onde quiser, mesmo sem internet.",
      },
    ],

    tableTitle: "Os 5 melhores apps IPTV para iPhone: comparação",
    table: {
      app: "App",
      rating: "Nota",
      price: "Preço",
      chromecast: "Chromecast",
      offline: "Offline",
      setup: "Configuração",
    },
    newLabel: "Novo",
    topPick: "Nº 1",
    prices: {
      edge: "7 dias de teste, depois US$ 3,99/mês",
      iap: "Grátis (compras no app)",
      free: "Grátis",
    },

    edgeTitle: "Nº 1 entre os apps IPTV para iPhone: EDGE IPTV",
    iconAlt: "Ícone do app EDGE IPTV, o melhor app IPTV para iPhone",
    trialBadge: "7 dias de teste grátis",
    edgeSummary:
      "Criado do zero para iPhone e iPad, o EDGE IPTV é o único player deste teste que reúne Chromecast, downloads offline e uma interface iOS totalmente nativa.",
    edgeFeatures: [
      "Configuração Xtream Codes ou M3U em menos de 2 minutos",
      "Chromecast e AirPlay para a sua TV",
      "Filmes e séries para baixar e ver offline",
      "Picture in Picture enquanto você usa outros apps",
      "TV ao vivo, filmes e séries com guia de programação",
      "iPhone e iPad com iOS 17 ou posterior",
    ],
    whyTitle: "Por que o EDGE IPTV se destaca no iPhone",
    why: [
      "A maioria dos players IPTV para iOS são adaptações de apps Android. Funcionam, mas dá para sentir que não foram pensados para o iPhone. O EDGE IPTV foi feito só para iOS, e isso aparece em cada gesto: os deslizes são naturais, o teclado surge onde você espera e o app segue as convenções do sistema, como texto dinâmico e modo escuro.",
      "O **Chromecast** faz a diferença: nenhum dos outros quatro apps deste teste transmite para um Chromecast ou Google TV. Somado aos **downloads offline**, o EDGE IPTV cobre o uso em casa e fora dela, os dois que mais importam no iPhone.",
    ],

    othersTitle: "Outros apps IPTV para iPhone que vale conhecer",
    others: [
      {
        id: "gse",
        name: "Nº 2 — GSE Smart IPTV",
        meta: "Nota: ★ 4,1 · Grátis com compras no app",
        text: "O GSE existe há anos e tem usuários fiéis. Aceita M3U e Xtream e traz guia de programação. Mas recursos avançados, como multitela, são pagos, e não há suporte a Chromecast.",
        pros: ["M3U + Xtream", "Guia de programação integrado"],
        cons: ["Sem Chromecast", "Recursos-chave pagos"],
      },
      {
        id: "flex",
        name: "Nº 3 — Flex IPTV",
        meta: "Nota: ★ 3,8 · Grátis com compras no app",
        text: "O Flex IPTV tem interface limpa e aceita listas M3U. A versão grátis se limita a 4 listas, e o visual parece datado perto do iOS atual. AirPlay funciona, Chromecast não.",
        pros: ["Interface limpa", "AirPlay"],
        cons: ["Listas grátis limitadas", "Sem Chromecast"],
      },
      {
        id: "smarters",
        name: "Nº 4 — IPTV Smarters Pro",
        meta: "Nota: ★ 3,5 · Grátis com compras no app",
        text: "Um nome conhecido no mundo IPTV. A versão iOS fica atrás da de Android: a configuração é mais trabalhosa e a interface não parece nativa no iPhone. Aceita Xtream, mas exige várias etapas.",
        pros: ["Aceita códigos Xtream"],
        cons: ["Pouco otimizado para iOS", "Sem Chromecast nem offline"],
      },
      {
        id: "opus",
        name: "Nº 5 — Opus IPTV Player",
        meta: "Nota: ★ 3,7 · Grátis",
        text: "O Opus aceita listas M3U e tem visual razoavelmente moderno. É grátis e sem paywall aparente, mas não tem Chromecast nem modo offline, e o suporte a Xtream é menos confiável que o da concorrência.",
        pros: ["Totalmente grátis", "M3U"],
        cons: ["Sem Chromecast nem offline", "Xtream pouco confiável"],
      },
    ],

    stepsTitle: "Como instalar um app IPTV no iPhone (em 2 minutos)",
    stepsIntro: "Veja como sair do zero e começar a assistir em menos de 2 minutos com o EDGE IPTV:",
    steps: [
      {
        title: "Baixe o EDGE IPTV na App Store",
        description:
          "Toque no botão abaixo ou pesquise «EDGE IPTV» na App Store. O download é grátis e inclui 7 dias de teste.",
      },
      {
        title: "Toque em «Adicionar uma playlist»",
        description: "Escolha Xtream Codes, ou Playlist M3U se o seu provedor enviou um link.",
      },
      {
        title: "Informe os dados do seu provedor",
        description:
          "Cole a URL do servidor, o usuário e a senha do seu serviço IPTV e toque em «Adicionar a playlist».",
      },
      {
        title: "Comece a assistir",
        description:
          "Seus canais, filmes e séries carregam sozinhos. Toque em qualquer conteúdo para reproduzir.",
      },
    ],
    guideBefore: "Precisa de um passo a passo mais detalhado? Veja nosso ",
    guideLabel: "guia completo para instalar IPTV no iPhone e iPad",
    guideAfter: ".",

    tipsTitle: "Dicas para aproveitar ao máximo o IPTV no iPhone",
    tips: [
      {
        title: "Use Wi-Fi para HD",
        description:
          "Para 1080p ou 4K, conecte-se ao Wi-Fi. Uma rede de 5 GHz é o ideal para evitar travamentos.",
      },
      {
        title: "Baixe antes de viajar",
        description:
          "Salve filmes e episódios pelo Wi-Fi antes de sair e assista sem gastar dados móveis.",
      },
      {
        title: "Transmita para a TV",
        description:
          "Toque no ícone de transmissão no player para enviar a um Chromecast, Google TV ou Apple TV.",
      },
      {
        title: "Continue em Picture in Picture",
        description:
          "Volte à tela inicial durante a reprodução: o vídeo continua numa janela pequena sobre seus apps.",
      },
      {
        title: "Ative a atualização em segundo plano",
        description:
          "Ajustes → EDGE IPTV → Atualização em 2º Plano: seu catálogo se atualiza entre as sessões, quando o iOS permite.",
      },
      {
        title: "Uma VPN contra travamentos",
        description:
          "Se a sua operadora limita o tráfego de streaming, uma VPN pode devolver a velocidade.",
      },
    ],

    relatedTitle: "Guias relacionados",
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        q: "Qual é o melhor app IPTV para iPhone?",
        a: "O EDGE IPTV é configurado com códigos Xtream em menos de dois minutos e oferece Chromecast, downloads offline e guia de programação completo no iPhone e no iPad. O download é grátis, com 7 dias de teste grátis, e depois custa US$ 3,99 por mês ou US$ 19,99 por ano.",
      },
      {
        q: "Dá para assistir IPTV no iPhone?",
        a: "Sim. Você precisa de um app player de IPTV como o EDGE IPTV e de uma assinatura IPTV com um provedor. Com seus códigos Xtream em mãos, a configuração leva menos de 2 minutos.",
      },
      {
        q: "Como instalo um app IPTV no iPhone?",
        a: "Abra a App Store, pesquise «EDGE IPTV» e toque em Obter. Depois abra o app, toque em «Adicionar uma playlist», informe os códigos Xtream do seu provedor (URL, usuário, senha) e pronto.",
      },
      {
        q: "Existe app IPTV grátis para iPhone?",
        a: "O EDGE IPTV é grátis para baixar e inclui 7 dias de teste grátis. Depois disso, assistir exige uma assinatura de US$ 3,99 por mês ou US$ 19,99 por ano, sem anúncios em momento algum. Você também precisa da sua própria assinatura IPTV com um provedor de conteúdo, separada do app.",
      },
      {
        q: "O IPTV funciona em qualquer iPhone?",
        a: "O EDGE IPTV exige iOS 17.0 ou posterior, então funciona no iPhone XS e em todos os modelos seguintes, até os mais recentes. No iPad, é compatível com iPad Pro (2ª geração), iPad Air (3ª geração), iPad (6ª geração) e iPad mini (5ª geração) ou posteriores.",
      },
    ],
  },

  de: {
    slug: "beste-iptv-app-iphone",
    metaTitle: "Beste IPTV-App für iPhone 2026: 5 Apps im Test",
    metaDescription:
      "Welche ist die beste IPTV-App fürs iPhone? Wir haben die 5 beliebtesten 2026 getestet: Einrichtung, Chromecast, Offline-Downloads und Bedienung unter iOS.",
    socialDescription:
      "5 IPTV-Apps fürs iPhone im Test 2026: Einrichtung, Chromecast und Offline-Wiedergabe.",
    title: "Beste IPTV-App für iPhone 2026: 5 Apps im Test",
    lead: "Wir haben die 5 beliebtesten IPTV-Apps auf dem iPhone getestet, um die schnellste, zuverlässigste und am einfachsten einzurichtende zu finden.",
    readTime: "7 Min.",
    author: "EDGE IPTV Team",
    keywords: [
      "beste iptv app iphone",
      "iptv app iphone",
      "iptv app kostenlos iphone",
      "iptv auf dem iphone schauen",
      "iptv player ios",
    ],
    home: "Startseite",
    blog: "Blog",
    breadcrumb: "Beste IPTV-App für iPhone 2026",

    intro:
      "Ja, du **kannst IPTV auf dem iPhone schauen**, ganz ohne Jailbreak und ohne Apps außerhalb des App Store. Alle fünf Apps in diesem Test gibt es dort. Wir haben jede auf Einrichtungszeit, Wiedergabequalität, Chromecast und iOS-Integration geprüft, um die beste IPTV-App fürs iPhone 2026 zu finden.",
    quickLabel: "Kurz gesagt",
    quickAnswer:
      "**EDGE IPTV** ist 2026 die beste IPTV-App fürs iPhone. Als einzige App in diesem Test bietet sie Chromecast, Offline-Downloads und eine Einrichtung in unter 2 Minuten. Der Download ist kostenlos, danach kostet sie nach 7 Tagen Gratis-Test 3,99 € im Monat.",
    trialCta: "7 Tage kostenlos testen",
    trialCtaStore: "Im App Store 7 Tage kostenlos testen",

    criteriaTitle: "Was macht eine gute IPTV-App fürs iPhone aus?",
    criteriaIntro:
      "Nicht jeder IPTV-Player ist für iOS gemacht. Das unterscheidet eine sehr gute IPTV-App fürs iPhone vom Mittelmaß:",
    criteria: [
      {
        title: "Native iOS-Oberfläche",
        description:
          "Fühlt sich auf dem iPhone zu Hause an: flüssige Animationen, passende Tippflächen, Dunkelmodus.",
      },
      {
        title: "Schnelles, stabiles Streaming",
        description: "Intelligentes Puffern, das sich deiner Verbindung anpasst, ohne ständige Aussetzer.",
      },
      {
        title: "Chromecast / AirPlay",
        description:
          "Auf den Fernseher streamen, ohne extra Hardware zu kaufen. Viele Apps lassen das weg.",
      },
      {
        title: "Offline-Downloads",
        description: "Filme und Serien laden und unterwegs schauen, auch ganz ohne Internet.",
      },
    ],

    tableTitle: "Die 5 besten IPTV-Apps fürs iPhone im Vergleich",
    table: {
      app: "App",
      rating: "Bewertung",
      price: "Preis",
      chromecast: "Chromecast",
      offline: "Offline",
      setup: "Einrichtung",
    },
    newLabel: "Neu",
    topPick: "Platz 1",
    prices: {
      edge: "7 Tage gratis, dann 3,99 €/Monat",
      iap: "Gratis (In-App-Käufe)",
      free: "Gratis",
    },

    edgeTitle: "Platz 1 der IPTV-Apps fürs iPhone: EDGE IPTV",
    iconAlt: "App-Symbol von EDGE IPTV, der besten IPTV-App fürs iPhone",
    trialBadge: "7 Tage kostenlos",
    edgeSummary:
      "Von Grund auf für iPhone und iPad gebaut, ist EDGE IPTV der einzige Player in diesem Test, der Chromecast, Offline-Downloads und eine durchgehend native iOS-Oberfläche vereint.",
    edgeFeatures: [
      "Einrichtung per Xtream Codes oder M3U in unter 2 Minuten",
      "Chromecast und AirPlay auf den Fernseher",
      "Filme & Serien zum Offline-Schauen laden",
      "Bild-in-Bild, während du andere Apps nutzt",
      "Live-TV, Filme und Serien mit Programmführer",
      "iPhone und iPad ab iOS 17",
    ],
    whyTitle: "Warum EDGE IPTV auf dem iPhone heraussticht",
    why: [
      "Die meisten IPTV-Player für iOS sind Portierungen von Android-Apps. Sie funktionieren, wirken auf dem iPhone aber fremd. EDGE IPTV wurde ausschließlich für iOS entwickelt, und das merkt man bei jeder Geste: Wischen fühlt sich natürlich an, die Tastatur erscheint da, wo man sie erwartet, und die App folgt Systemkonventionen wie dynamischer Schriftgröße und Dunkelmodus.",
      "Den Unterschied macht **Chromecast**: Keine der vier anderen Apps in diesem Test kann auf einen Chromecast oder ein Google TV streamen. Zusammen mit den **Offline-Downloads** deckt EDGE IPTV beides ab, Zuhause und unterwegs, also genau das, worauf es iPhone-Nutzern ankommt.",
    ],

    othersTitle: "Weitere IPTV-Apps fürs iPhone, die man kennen sollte",
    others: [
      {
        id: "gse",
        name: "Platz 2 — GSE Smart IPTV",
        meta: "Bewertung: ★ 4,1 · Gratis mit In-App-Käufen",
        text: "GSE gibt es seit Jahren, und die App hat eine treue Nutzerschaft. Sie unterstützt M3U und Xtream und bringt einen Programmführer mit. Erweiterte Funktionen wie Multiscreen kosten aber extra, und Chromecast fehlt.",
        pros: ["M3U + Xtream", "Integrierter Programmführer"],
        cons: ["Kein Chromecast", "Wichtige Funktionen kostenpflichtig"],
      },
      {
        id: "flex",
        name: "Platz 3 — Flex IPTV",
        meta: "Bewertung: ★ 3,8 · Gratis mit In-App-Käufen",
        text: "Flex IPTV hat eine aufgeräumte Oberfläche und unterstützt M3U-Playlists. Die Gratisversion ist auf 4 Playlists begrenzt, und das Design wirkt neben modernem iOS veraltet. AirPlay geht, Chromecast nicht.",
        pros: ["Aufgeräumte Oberfläche", "AirPlay"],
        cons: ["Begrenzte Gratis-Playlists", "Kein Chromecast"],
      },
      {
        id: "smarters",
        name: "Platz 4 — IPTV Smarters Pro",
        meta: "Bewertung: ★ 3,5 · Gratis mit In-App-Käufen",
        text: "Ein bekannter Name in der IPTV-Welt. Die iOS-Version hinkt der Android-Version hinterher: Die Einrichtung ist umständlicher, und die Oberfläche wirkt auf dem iPhone nicht nativ. Xtream wird unterstützt, braucht aber mehrere Schritte.",
        pros: ["Unterstützt Xtream Codes"],
        cons: ["Kaum für iOS optimiert", "Weder Chromecast noch offline"],
      },
      {
        id: "opus",
        name: "Platz 5 — Opus IPTV Player",
        meta: "Bewertung: ★ 3,7 · Gratis",
        text: "Opus unterstützt M3U-Playlists und sieht recht modern aus. Die App ist gratis ohne erkennbare Bezahlschranke, aber Chromecast und Offline-Modus fehlen, und die Xtream-Unterstützung ist unzuverlässiger als bei der Konkurrenz.",
        pros: ["Komplett gratis", "M3U"],
        cons: ["Weder Chromecast noch offline", "Unzuverlässiges Xtream"],
      },
    ],

    stepsTitle: "IPTV-App auf dem iPhone einrichten (in 2 Minuten)",
    stepsIntro: "So kommst du mit EDGE IPTV in unter 2 Minuten vom Download zum ersten Sender:",
    steps: [
      {
        title: "EDGE IPTV aus dem App Store laden",
        description:
          "Tippe auf den Button unten oder suche im App Store nach „EDGE IPTV“. Der Download ist kostenlos, inklusive 7 Tage Gratis-Test.",
      },
      {
        title: "Auf „Playlist hinzufügen“ tippen",
        description:
          "Wähle Xtream Codes, oder M3U-Playlist, wenn dein Anbieter dir einen Link gegeben hat.",
      },
      {
        title: "Zugangsdaten deines Anbieters eingeben",
        description:
          "Füge Server-URL, Benutzername und Passwort deines IPTV-Dienstes ein und tippe auf „Playlist hinzufügen“.",
      },
      {
        title: "Losschauen",
        description:
          "Sender, Filme und Serien laden automatisch. Tippe auf einen Inhalt, um ihn abzuspielen.",
      },
    ],
    guideBefore: "",
    guideLabel: "",
    guideAfter: "",

    tipsTitle: "Tipps für das beste IPTV-Erlebnis auf dem iPhone",
    tips: [
      {
        title: "WLAN für HD nutzen",
        description:
          "Für 1080p oder 4K lieber ins WLAN. Ein 5-GHz-Netz ist ideal, um Puffern zu vermeiden.",
      },
      {
        title: "Vor der Reise laden",
        description:
          "Filme und Folgen vor dem Aufbruch im WLAN laden und dann ohne mobile Daten schauen.",
      },
      {
        title: "Auf den Fernseher streamen",
        description:
          "Tippe im Player auf das Cast-Symbol, um an Chromecast, Google TV oder Apple TV zu senden.",
      },
      {
        title: "Weiterschauen mit Bild-in-Bild",
        description:
          "Wische während der Wiedergabe zum Home-Bildschirm: Das Video läuft in einem kleinen Fenster über deinen Apps weiter.",
      },
      {
        title: "Hintergrundaktualisierung einschalten",
        description:
          "Einstellungen → EDGE IPTV → Hintergrundaktualisierung: Dein Katalog aktualisiert sich zwischen den Sitzungen, wann immer iOS es zulässt.",
      },
      {
        title: "VPN gegen Puffern",
        description:
          "Drosselt dein Internetanbieter Streaming, kann ein VPN die Geschwindigkeit zurückbringen.",
      },
    ],

    relatedTitle: "Weitere Guides",
    faqTitle: "Häufige Fragen",
    faq: [
      {
        q: "Welche ist die beste IPTV-App fürs iPhone?",
        a: "EDGE IPTV ist mit Xtream Codes in unter zwei Minuten eingerichtet und bietet Chromecast, Offline-Downloads und einen vollständigen Programmführer auf iPhone und iPad. Der Download ist kostenlos, mit 7 Tagen Gratis-Test, danach kostet die App 3,99 € im Monat oder 19,99 € im Jahr.",
      },
      {
        q: "Kann ich IPTV auf dem iPhone schauen?",
        a: "Ja. Du brauchst eine IPTV-Player-App wie EDGE IPTV und ein IPTV-Abo bei einem Anbieter. Sobald du deine Xtream Codes hast, dauert die Einrichtung keine 2 Minuten.",
      },
      {
        q: "Wie lade ich eine IPTV-App aufs iPhone?",
        a: "Öffne den App Store, suche nach „EDGE IPTV“ und tippe auf Laden. Öffne dann die App, tippe auf „Playlist hinzufügen“, gib die Xtream Codes deines Anbieters ein (URL, Benutzername, Passwort), und es kann losgehen.",
      },
      {
        q: "Gibt es eine kostenlose IPTV-App fürs iPhone?",
        a: "EDGE IPTV ist kostenlos zu laden und enthält 7 Tage Gratis-Test. Danach ist zum Abspielen ein Abo für 3,99 € im Monat oder 19,99 € im Jahr nötig, ganz ohne Werbung. Zusätzlich brauchst du ein eigenes IPTV-Abo bei einem Inhalte-Anbieter, das von der App getrennt ist.",
      },
      {
        q: "Funktioniert IPTV auf jedem iPhone?",
        a: "EDGE IPTV setzt iOS 17.0 oder neuer voraus und läuft damit auf dem iPhone XS und allen neueren Modellen. Auf dem iPad werden iPad Pro (2. Generation), iPad Air (3. Generation), iPad (6. Generation) und iPad mini (5. Generation) oder neuer unterstützt.",
      },
    ],
  },

  ar: {
    slug: "best-iptv-app-for-iphone",
    metaTitle: "أفضل تطبيق IPTV للآيفون 2026: اختبرنا 5 تطبيقات",
    metaDescription:
      "ما أفضل تطبيق IPTV للآيفون؟ اختبرنا أشهر 5 تطبيقات في 2026: سرعة الإعداد، ودعم Chromecast، والتحميل للمشاهدة دون اتصال، وسهولة الاستخدام على iOS.",
    socialDescription:
      "اختبرنا 5 تطبيقات IPTV للآيفون في 2026: الإعداد وChromecast والمشاهدة دون اتصال.",
    title: "أفضل تطبيق IPTV للآيفون 2026: اختبرنا 5 تطبيقات",
    lead: "اختبرنا أشهر 5 تطبيقات IPTV على الآيفون لنجد الأسرع والأكثر ثباتًا والأسهل في الإعداد.",
    readTime: "7 دقائق",
    author: "فريق EDGE IPTV",
    keywords: [
      "أفضل تطبيق iptv للايفون",
      "تطبيق iptv للايفون",
      "تطبيق iptv مجاني للايفون",
      "كيف اشغل iptv على الايفون",
      "مشغل iptv ios",
    ],
    home: "الرئيسية",
    blog: "المدونة",
    breadcrumb: "أفضل تطبيق IPTV للآيفون 2026",

    intro:
      "نعم، **يمكنك مشاهدة IPTV على الآيفون**، دون جيلبريك ودون تثبيت تطبيقات من خارج App Store. التطبيقات الخمسة في هذا الدليل متوفرة كلها هناك. اختبرنا كلًّا منها من حيث سرعة الإعداد وجودة التشغيل ودعم Chromecast والتكامل مع iOS لنختار أفضل تطبيق IPTV للآيفون في 2026.",
    quickLabel: "الإجابة باختصار",
    quickAnswer:
      "**EDGE IPTV** هو أفضل تطبيق IPTV للآيفون في 2026. إنه التطبيق الوحيد في هذا الاختبار الذي يجمع بين Chromecast والتحميل للمشاهدة دون اتصال وإعداد في أقل من دقيقتين. تحميله مجاني، وبعد تجربة مجانية لسبعة أيام يكلّف 3.99 دولار شهريًا.",
    trialCta: "ابدأ تجربتك المجانية لسبعة أيام",
    trialCtaStore: "ابدأ تجربتك المجانية من App Store",

    criteriaTitle: "ما الذي يجعل تطبيق IPTV جيدًا على الآيفون؟",
    criteriaIntro:
      "ليست كل مشغلات IPTV مصممة لنظام iOS. إليك ما يميّز تطبيق IPTV ممتازًا على الآيفون عن غيره:",
    criteria: [
      {
        title: "واجهة iOS أصلية",
        description: "تشعر بأنها جزء من الآيفون: حركات سلسة، وأزرار بحجم مناسب، ودعم الوضع الداكن.",
      },
      {
        title: "بث سريع وثابت",
        description: "تخزين مؤقت ذكي يتكيّف مع سرعة اتصالك دون انقطاع متكرر.",
      },
      {
        title: "Chromecast / AirPlay",
        description: "اعرض على التلفاز دون شراء جهاز إضافي. ميزة تغفلها تطبيقات كثيرة.",
      },
      {
        title: "التحميل للمشاهدة دون اتصال",
        description: "حمّل الأفلام والمسلسلات وشاهدها في أي مكان، حتى دون إنترنت.",
      },
    ],

    tableTitle: "أفضل 5 تطبيقات IPTV للآيفون: مقارنة جنبًا إلى جنب",
    table: {
      app: "التطبيق",
      rating: "التقييم",
      price: "السعر",
      chromecast: "Chromecast",
      offline: "دون اتصال",
      setup: "الإعداد",
    },
    newLabel: "جديد",
    topPick: "الخيار الأول",
    prices: {
      edge: "تجربة 7 أيام، ثم 3.99 دولار شهريًا",
      iap: "مجاني (مشتريات داخلية)",
      free: "مجاني",
    },

    edgeTitle: "أفضل تطبيق IPTV للآيفون: EDGE IPTV",
    iconAlt: "أيقونة تطبيق EDGE IPTV، أفضل تطبيق IPTV للآيفون",
    trialBadge: "تجربة مجانية لسبعة أيام",
    edgeSummary:
      "صُمّم EDGE IPTV من الصفر للآيفون والآيباد، وهو المشغل الوحيد في هذا الاختبار الذي يجمع بين البث إلى Chromecast والتحميل للمشاهدة دون اتصال وواجهة iOS أصلية بالكامل.",
    edgeFeatures: [
      "إعداد عبر Xtream Codes أو M3U في أقل من دقيقتين",
      "Chromecast وAirPlay إلى التلفاز",
      "تحميل الأفلام والمسلسلات للمشاهدة دون اتصال",
      "صورة داخل صورة أثناء استخدام تطبيقات أخرى",
      "بث مباشر وأفلام ومسلسلات مع دليل البرامج",
      "آيفون وآيباد بنظام iOS 17 أو أحدث",
    ],
    whyTitle: "لماذا يتميّز EDGE IPTV على الآيفون",
    why: [
      "معظم مشغلات IPTV على iOS منقولة عن تطبيقات أندرويد. تعمل، لكنها تبدو غريبة على الآيفون. أما EDGE IPTV فصُمّم لنظام iOS وحده، ويظهر ذلك في كل لمسة: السحب طبيعي، ولوحة المفاتيح تظهر حيث تتوقعها، والتطبيق يلتزم بأعراف النظام مثل حجم النص الديناميكي والوضع الداكن.",
      "**دعم Chromecast** هو ما يصنع الفرق: لا يستطيع أيٌّ من التطبيقات الأربعة الأخرى في هذا الاختبار البث إلى Chromecast أو Google TV. ومع **التحميل للمشاهدة دون اتصال**، يغطي EDGE IPTV الاستخدام في المنزل وخارجه، وهما أكثر ما يهمّ مستخدمي الآيفون.",
    ],

    othersTitle: "تطبيقات IPTV أخرى للآيفون تستحق المعرفة",
    others: [
      {
        id: "gse",
        name: "رقم 2 — GSE Smart IPTV",
        meta: "التقييم: ★ 4.1 · مجاني مع مشتريات داخلية",
        text: "يوجد GSE منذ سنوات ولديه قاعدة مستخدمين وفية. يدعم M3U وXtream ويتضمن دليل برامج. لكن الميزات المتقدمة مثل تعدد الشاشات مدفوعة، ولا يدعم Chromecast.",
        pros: ["دعم M3U وXtream", "دليل برامج مدمج"],
        cons: ["لا يدعم Chromecast", "ميزات أساسية مدفوعة"],
      },
      {
        id: "flex",
        name: "رقم 3 — Flex IPTV",
        meta: "التقييم: ★ 3.8 · مجاني مع مشتريات داخلية",
        text: "يتميّز Flex IPTV بواجهة مرتبة ويدعم قوائم M3U. النسخة المجانية محدودة بـ4 قوائم، وتصميمه يبدو قديمًا مقارنة بـiOS الحديث. يعمل AirPlay، أما Chromecast فلا.",
        pros: ["واجهة مرتبة", "دعم AirPlay"],
        cons: ["قوائم مجانية محدودة", "لا يدعم Chromecast"],
      },
      {
        id: "smarters",
        name: "رقم 4 — IPTV Smarters Pro",
        meta: "التقييم: ★ 3.5 · مجاني مع مشتريات داخلية",
        text: "اسم معروف في عالم IPTV. لكن نسخة iOS متأخرة عن نسخة أندرويد: الإعداد أكثر تعقيدًا والواجهة لا تبدو أصلية على الآيفون. يدعم Xtream لكنه يتطلب عدة خطوات.",
        pros: ["يدعم Xtream Codes"],
        cons: ["غير محسّن لنظام iOS", "لا Chromecast ولا مشاهدة دون اتصال"],
      },
      {
        id: "opus",
        name: "رقم 5 — Opus IPTV Player",
        meta: "التقييم: ★ 3.7 · مجاني",
        text: "يدعم Opus قوائم M3U ويبدو عصريًا إلى حد ما. إنه مجاني دون حواجز دفع واضحة، لكنه يفتقد Chromecast ووضع المشاهدة دون اتصال، ودعمه لـXtream أقل موثوقية من المنافسين.",
        pros: ["مجاني بالكامل", "دعم M3U"],
        cons: ["لا Chromecast ولا مشاهدة دون اتصال", "دعم Xtream غير موثوق"],
      },
    ],

    stepsTitle: "كيف تثبّت تطبيق IPTV على الآيفون (في دقيقتين)",
    stepsIntro: "إليك كيف تبدأ المشاهدة في أقل من دقيقتين مع EDGE IPTV:",
    steps: [
      {
        title: "حمّل EDGE IPTV من App Store",
        description:
          "اضغط الزر أدناه أو ابحث عن «EDGE IPTV» في App Store. التحميل مجاني ويتضمن تجربة لسبعة أيام.",
      },
      {
        title: "اضغط «إضافة قائمة تشغيل»",
        description: "اختر Xtream Codes، أو قائمة تشغيل M3U إذا أعطاك مزوّدك رابطًا.",
      },
      {
        title: "أدخل بيانات مزوّدك",
        description:
          "الصق رابط الخادم واسم المستخدم وكلمة المرور من خدمة IPTV الخاصة بك، ثم اضغط «إضافة قائمة التشغيل».",
      },
      {
        title: "ابدأ المشاهدة",
        description: "تُحمَّل القنوات والأفلام والمسلسلات تلقائيًا. اضغط على أي محتوى لتشغيله.",
      },
    ],
    guideBefore: "",
    guideLabel: "",
    guideAfter: "",

    tipsTitle: "نصائح لأفضل تجربة IPTV على الآيفون",
    tips: [
      {
        title: "استخدم Wi-Fi للجودة العالية",
        description: "لبث 1080p أو 4K اتصل بشبكة Wi-Fi. شبكة 5 GHz هي الأفضل لتجنّب التقطيع.",
      },
      {
        title: "حمّل قبل السفر",
        description: "احفظ الأفلام والحلقات عبر Wi-Fi قبل خروجك، ثم شاهدها دون بيانات الجوال.",
      },
      {
        title: "اعرض على التلفاز",
        description:
          "اضغط أيقونة البث في المشغل لإرسال الصورة إلى Chromecast أو Google TV أو Apple TV.",
      },
      {
        title: "تابع المشاهدة بصورة داخل صورة",
        description:
          "ارجع إلى الشاشة الرئيسية أثناء التشغيل: يستمر الفيديو في نافذة صغيرة فوق تطبيقاتك.",
      },
      {
        title: "فعّل التحديث في الخلفية",
        description:
          "الإعدادات ← EDGE IPTV ← تحديث التطبيق في الخلفية: يتحدّث كتالوجك بين الجلسات كلما سمح iOS بذلك.",
      },
      {
        title: "VPN ضد التقطيع",
        description: "إذا كان مزوّد الإنترنت يبطّئ البث، فقد تعيد إليك شبكة VPN السرعة.",
      },
    ],

    relatedTitle: "أدلة ذات صلة",
    faqTitle: "الأسئلة الشائعة",
    faq: [
      {
        q: "ما أفضل تطبيق IPTV للآيفون؟",
        a: "يُعَدّ EDGE IPTV عبر Xtream Codes في أقل من دقيقتين، ويدعم Chromecast والتحميل للمشاهدة دون اتصال ودليل برامج كامل على الآيفون والآيباد. تحميله مجاني مع تجربة مجانية لسبعة أيام، ثم 3.99 دولار شهريًا أو 19.99 دولار سنويًا.",
      },
      {
        q: "هل يمكنني مشاهدة IPTV على الآيفون؟",
        a: "نعم. تحتاج إلى تطبيق مشغّل IPTV مثل EDGE IPTV واشتراك IPTV لدى مزوّد. وبمجرد حصولك على بيانات Xtream، يستغرق الإعداد أقل من دقيقتين.",
      },
      {
        q: "كيف أحمّل تطبيق IPTV على الآيفون؟",
        a: "افتح App Store وابحث عن «EDGE IPTV» واضغط «تحميل». ثم افتح التطبيق واضغط «إضافة قائمة تشغيل» وأدخل بيانات Xtream من مزوّدك (الرابط، اسم المستخدم، كلمة المرور)، وستكون جاهزًا للمشاهدة.",
      },
      {
        q: "هل يوجد تطبيق IPTV مجاني للآيفون؟",
        a: "تحميل EDGE IPTV مجاني ويتضمن تجربة مجانية لسبعة أيام. بعدها يتطلب التشغيل اشتراكًا بـ3.99 دولار شهريًا أو 19.99 دولار سنويًا، دون أي إعلانات. وتحتاج كذلك إلى اشتراك IPTV خاص بك لدى مزوّد محتوى، منفصل عن التطبيق.",
      },
      {
        q: "هل يعمل IPTV على أي آيفون؟",
        a: "يتطلب EDGE IPTV نظام iOS 17.0 أو أحدث، لذا يعمل على iPhone XS وكل الطرازات الأحدث. وعلى الآيباد يدعم iPad Pro (الجيل الثاني) وiPad Air (الجيل الثالث) وiPad (الجيل السادس) وiPad mini (الجيل الخامس) أو أحدث.",
      },
    ],
  },

  it: {
    slug: "migliore-app-iptv-iphone",
    metaTitle: "Migliore app IPTV per iPhone 2026: 5 app provate",
    metaDescription:
      "Qual è la migliore app IPTV per iPhone? Abbiamo provato le 5 più popolari nel 2026: velocità di configurazione, Chromecast, download offline e uso su iOS.",
    socialDescription:
      "5 app IPTV per iPhone provate nel 2026: configurazione, Chromecast e visione offline.",
    title: "Migliore app IPTV per iPhone 2026: 5 app provate",
    lead: "Abbiamo provato le 5 app IPTV più popolari su iPhone per trovare la più veloce, la più affidabile e la più semplice da configurare.",
    readTime: "7 min",
    author: "Team EDGE IPTV",
    keywords: [
      "migliore app iptv iphone",
      "app iptv iphone",
      "app iptv gratis iphone",
      "come vedere iptv su iphone",
      "lettore iptv ios",
    ],
    home: "Home",
    blog: "Blog",
    breadcrumb: "Migliore app IPTV per iPhone 2026",

    intro:
      "Sì, **puoi guardare l'IPTV sul tuo iPhone**, senza jailbreak e senza installare app fuori dall'App Store. Le cinque app di questa guida sono tutte lì. Le abbiamo provate su velocità di configurazione, qualità di riproduzione, Chromecast e integrazione con iOS per scegliere la migliore app IPTV per iPhone nel 2026.",
    quickLabel: "In breve",
    quickAnswer:
      "**EDGE IPTV** è la migliore app IPTV per iPhone nel 2026. È l'unica di questo test a riunire Chromecast, download offline e una configurazione in meno di 2 minuti. Il download è gratuito, poi costa 3,99 € al mese dopo 7 giorni di prova gratuita.",
    trialCta: "Inizia la prova gratuita di 7 giorni",
    trialCtaStore: "Inizia la prova gratuita su App Store",

    criteriaTitle: "Cosa rende buona un'app IPTV per iPhone?",
    criteriaIntro:
      "Non tutti i lettori IPTV sono pensati per iOS. Ecco cosa distingue un'ottima app IPTV per iPhone dalle altre:",
    criteria: [
      {
        title: "Interfaccia iOS nativa",
        description:
          "Ti senti a casa sull'iPhone: animazioni fluide, pulsanti della giusta misura, modalità scura.",
      },
      {
        title: "Streaming veloce e stabile",
        description: "Un buffering intelligente che si adatta alla tua connessione, senza interruzioni continue.",
      },
      {
        title: "Chromecast / AirPlay",
        description:
          "Trasmetti alla TV senza comprare altri dispositivi. Molte app non lo offrono.",
      },
      {
        title: "Download offline",
        description: "Scarica film e serie per guardarli ovunque, anche senza internet.",
      },
    ],

    tableTitle: "Le 5 migliori app IPTV per iPhone a confronto",
    table: {
      app: "App",
      rating: "Voto",
      price: "Prezzo",
      chromecast: "Chromecast",
      offline: "Offline",
      setup: "Configurazione",
    },
    newLabel: "Nuova",
    topPick: "N. 1",
    prices: {
      edge: "7 giorni di prova, poi 3,99 €/mese",
      iap: "Gratis (acquisti in-app)",
      free: "Gratis",
    },

    edgeTitle: "N. 1 tra le app IPTV per iPhone: EDGE IPTV",
    iconAlt: "Icona dell'app EDGE IPTV, la migliore app IPTV per iPhone",
    trialBadge: "7 giorni di prova gratuita",
    edgeSummary:
      "Progettata da zero per iPhone e iPad, EDGE IPTV è l'unico lettore di questo test che riunisce Chromecast, download offline e un'interfaccia iOS completamente nativa.",
    edgeFeatures: [
      "Configurazione Xtream Codes o M3U in meno di 2 minuti",
      "Chromecast e AirPlay verso la TV",
      "Film e serie da scaricare e guardare offline",
      "Picture in Picture mentre usi altre app",
      "TV in diretta, film e serie con guida TV",
      "iPhone e iPad con iOS 17 o successivo",
    ],
    whyTitle: "Perché EDGE IPTV si distingue su iPhone",
    why: [
      "La maggior parte dei lettori IPTV per iOS sono adattamenti di app Android. Funzionano, ma si sente che non sono nati per l'iPhone. EDGE IPTV è stata progettata solo per iOS, e si vede in ogni gesto: gli scorrimenti sono naturali, la tastiera compare dove te l'aspetti e l'app rispetta le convenzioni del sistema come il testo dinamico e la modalità scura.",
      "La differenza la fa **Chromecast**: nessuna delle altre quattro app di questo test può trasmettere a un Chromecast o a una Google TV. Insieme ai **download offline**, EDGE IPTV copre sia l'uso a casa sia quello fuori casa, i due che contano di più su iPhone.",
    ],

    othersTitle: "Altre app IPTV per iPhone da conoscere",
    others: [
      {
        id: "gse",
        name: "N. 2 — GSE Smart IPTV",
        meta: "Voto: ★ 4,1 · Gratis con acquisti in-app",
        text: "GSE esiste da anni e ha una base di utenti fedele. Supporta M3U e Xtream e include una guida TV. Ma le funzioni avanzate come il multischermo sono a pagamento, e manca Chromecast.",
        pros: ["M3U + Xtream", "Guida TV integrata"],
        cons: ["Niente Chromecast", "Funzioni chiave a pagamento"],
      },
      {
        id: "flex",
        name: "N. 3 — Flex IPTV",
        meta: "Voto: ★ 3,8 · Gratis con acquisti in-app",
        text: "Flex IPTV ha un'interfaccia pulita e supporta le playlist M3U. La versione gratuita è limitata a 4 playlist e il design sembra datato rispetto a iOS moderno. AirPlay funziona, Chromecast no.",
        pros: ["Interfaccia pulita", "AirPlay"],
        cons: ["Playlist gratuite limitate", "Niente Chromecast"],
      },
      {
        id: "smarters",
        name: "N. 4 — IPTV Smarters Pro",
        meta: "Voto: ★ 3,5 · Gratis con acquisti in-app",
        text: "Un nome noto nel mondo IPTV. La versione iOS è indietro rispetto a quella Android: la configurazione è più macchinosa e l'interfaccia non sembra nativa su iPhone. Supporta Xtream, ma richiede diversi passaggi.",
        pros: ["Supporta i codici Xtream"],
        cons: ["Poco ottimizzata per iOS", "Né Chromecast né offline"],
      },
      {
        id: "opus",
        name: "N. 5 — Opus IPTV Player",
        meta: "Voto: ★ 3,7 · Gratis",
        text: "Opus supporta le playlist M3U e ha un aspetto abbastanza moderno. È gratis e senza paywall evidenti, ma mancano Chromecast e modalità offline, e il supporto Xtream è meno affidabile della concorrenza.",
        pros: ["Completamente gratis", "M3U"],
        cons: ["Né Chromecast né offline", "Xtream poco affidabile"],
      },
    ],

    stepsTitle: "Come installare un'app IPTV su iPhone (in 2 minuti)",
    stepsIntro: "Ecco come passare da zero alla visione in meno di 2 minuti con EDGE IPTV:",
    steps: [
      {
        title: "Scarica EDGE IPTV dall'App Store",
        description:
          "Tocca il pulsante qui sotto o cerca «EDGE IPTV» nell'App Store. Il download è gratuito e include 7 giorni di prova.",
      },
      {
        title: "Tocca «Aggiungi una playlist»",
        description: "Scegli Xtream Codes, oppure Playlist M3U se il tuo provider ti ha dato un link.",
      },
      {
        title: "Inserisci i dati del tuo provider",
        description:
          "Incolla URL del server, nome utente e password del tuo servizio IPTV, poi tocca «Aggiungi la playlist».",
      },
      {
        title: "Inizia a guardare",
        description:
          "Canali, film e serie si caricano da soli. Tocca un contenuto per avviarlo.",
      },
    ],
    guideBefore: "",
    guideLabel: "",
    guideAfter: "",

    tipsTitle: "Consigli per la migliore esperienza IPTV su iPhone",
    tips: [
      {
        title: "Usa il Wi-Fi per l'HD",
        description:
          "Per 1080p o 4K collegati al Wi-Fi. Una rete a 5 GHz è l'ideale per evitare il buffering.",
      },
      {
        title: "Scarica prima di partire",
        description:
          "Salva film ed episodi in Wi-Fi prima di uscire e guardali senza usare i dati mobili.",
      },
      {
        title: "Trasmetti alla TV",
        description:
          "Tocca l'icona di trasmissione nel lettore per inviare a un Chromecast, una Google TV o una Apple TV.",
      },
      {
        title: "Continua in Picture in Picture",
        description:
          "Torna alla schermata Home durante la riproduzione: il video continua in una piccola finestra sopra le tue app.",
      },
      {
        title: "Attiva l'aggiornamento in background",
        description:
          "Impostazioni → EDGE IPTV → Aggiorna app in background: il catalogo si aggiorna tra una sessione e l'altra, quando iOS lo consente.",
      },
      {
        title: "Una VPN contro il buffering",
        description:
          "Se il tuo operatore rallenta lo streaming, una VPN può restituirti la velocità.",
      },
    ],

    relatedTitle: "Guide correlate",
    faqTitle: "Domande frequenti",
    faq: [
      {
        q: "Qual è la migliore app IPTV per iPhone?",
        a: "EDGE IPTV si configura con i codici Xtream in meno di due minuti e offre Chromecast, download offline e una guida TV completa su iPhone e iPad. Il download è gratuito, con 7 giorni di prova gratuita, poi costa 3,99 € al mese o 19,99 € all'anno.",
      },
      {
        q: "Posso guardare l'IPTV sull'iPhone?",
        a: "Sì. Ti servono un'app lettore IPTV come EDGE IPTV e un abbonamento IPTV presso un provider. Con i tuoi codici Xtream a portata di mano, la configurazione richiede meno di 2 minuti.",
      },
      {
        q: "Come scarico un'app IPTV sull'iPhone?",
        a: "Apri l'App Store, cerca «EDGE IPTV» e tocca Ottieni. Poi apri l'app, tocca «Aggiungi una playlist», inserisci i codici Xtream del tuo provider (URL, nome utente, password) e sei pronto.",
      },
      {
        q: "Esiste un'app IPTV gratuita per iPhone?",
        a: "EDGE IPTV è gratuita da scaricare e include 7 giorni di prova gratuita. Dopo la prova, la riproduzione richiede un abbonamento da 3,99 € al mese o 19,99 € all'anno, senza pubblicità in nessun momento. Ti serve anche un tuo abbonamento IPTV presso un fornitore di contenuti, separato dall'app.",
      },
      {
        q: "L'IPTV funziona su qualsiasi iPhone?",
        a: "EDGE IPTV richiede iOS 17.0 o successivo, quindi funziona su iPhone XS e tutti i modelli successivi, fino ai più recenti. Su iPad supporta iPad Pro (2ª generazione), iPad Air (3ª generazione), iPad (6ª generazione) e iPad mini (5ª generazione) o successivi.",
      },
    ],
  },
};
