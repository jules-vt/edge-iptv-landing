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
 *
 * Competitor facts come only from their US App Store listings, read on
 * 2026-10-26: GSE SMART IPTV PRO (id6443923265, $2.99 paid, iOS 9+, last
 * update 2022-11-14; description lists Chromecast, AirPlay, recording),
 * Flex IPTV (id1182930255, free, "Pro Version" for iOS and for tvOS $5.99
 * each, iOS 17.4+; description lists XMLTV EPG and recording), Smarters Pro
 * (id6450746159, free, Premium $4.99, iOS 15.6+, Apple TV, "Data Used to
 * Track You: Usage Data"), IPTV Player - Opus (id1592313576, free, in-app
 * purchases $4.99 to $79.99 incl. $29.99/year, iOS 15.1+, Apple TV app per
 * its description, "Data Used to Track You: Usage Data"). A feature their
 * listing does not mention is shown as unknown, never as missing.
 */

export interface StepCopy {
  title: string;
  description: string;
}

export type AppId = "edge" | "gse" | "flex" | "smarters" | "opus";

export interface CompetitorCopy {
  id: Exclude<AppId, "edge">;
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
    price: string;
    chromecast: string;
    offline: string;
    appleTv: string;
  };
  /** Dated source of the competitor facts, and what a dash means. */
  tableNote: string;
  topPick: string;
  prices: Record<AppId, string>;

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
    metaTitle: "Best IPTV App for iPhone 2026: 5 Apps Compared",
    metaDescription: "Which IPTV app for iPhone in 2026? 5 App Store apps compared on price, Chromecast, offline downloads and Apple TV, from their own listings.",
    socialDescription: "5 IPTV apps for iPhone compared: price, Chromecast, offline downloads and Apple TV.",
    title: "Best IPTV App for iPhone 2026: 5 Apps Compared",
    lead: "We compared 5 IPTV apps from the App Store using what each listing actually says: price, Chromecast, offline downloads and Apple TV.",
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

    intro: "Yes, you **can watch IPTV on your iPhone**, and you don't need a jailbreak or a sideloaded app. All five apps in this guide are on the App Store. We compared them on price, Chromecast, offline downloads and Apple TV, taking each competitor's features from its own App Store page.",
    quickLabel: "Quick answer",
    quickAnswer: "**EDGE IPTV** is our pick for iPhone. We make it, so the table below sticks to facts you can check. Built for iOS only, it combines Chromecast and AirPlay, offline downloads and no ads. It's free to download with a 7-day free trial, then $3.99 a month or $19.99 a year.",
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

    tableTitle: "5 IPTV Apps for iPhone: Side-by-Side Comparison",
    table: {
      app: "App",
      price: "Price",
      chromecast: "Chromecast",
      offline: "Offline downloads",
      appleTv: "Apple TV app",
    },
    tableNote: "Competitor details from their US App Store pages on 26 October 2026. ✓ means the app's own page lists the feature; – means its page doesn't mention it (it may still exist).",
    topPick: "Our pick",
    prices: {
      edge: "7-day trial, then $3.99/mo",
      gse: "$2.99 (paid app)",
      flex: "Free, Pro $5.99",
      smarters: "Free, Premium $4.99",
      opus: "Free, paid plans from $4.99",
    },
    edgeTitle: "Our Pick for iPhone: EDGE IPTV",
    iconAlt: "EDGE IPTV app icon, best IPTV app for iPhone",
    trialBadge: "7-day free trial",
    edgeSummary: "Built from the ground up for iPhone and iPad, EDGE IPTV puts Chromecast and AirPlay, offline downloads and a fully native iOS interface in one app, with no ads.",
    edgeFeatures: [
      "Set up with Xtream Codes or M3U in under 2 minutes",
      "Chromecast and AirPlay to your TV",
      "Download movies & series for offline viewing",
      "Picture in Picture while you use other apps",
      "Live TV, movies and series with a TV guide",
      "iPhone and iPad on iOS 17 or later",
    ],
    whyTitle: "Why EDGE IPTV Stands Out on iPhone",
    why: ["Most IPTV players for iOS are ports from Android. They work, but they feel foreign on iPhone. EDGE IPTV was designed for iOS only, and it shows in every interaction: gestures feel natural, the keyboard appears where expected, and the app follows system conventions like Dynamic Type and Dark Mode.", "**Chromecast and offline downloads** cover the two ways people watch on an iPhone: on the TV at home, and on the train with no signal. What it doesn't do: EDGE IPTV does not record live TV and has no Apple TV app (you send the picture with AirPlay instead). If you need those, look at the apps below."],
    othersTitle: "Other IPTV Apps for iPhone Worth Knowing",
    others: [
      {
        id: "gse",
        name: "GSE SMART IPTV PRO",
        meta: "GSE Technology Ltd · $2.99 · iOS 9 or later",
        text: "One of the oldest IPTV players on iOS. Its App Store page lists M3U and Xtream Codes playlists, an EPG timeline, Chromecast, AirPlay, live TV recording and parental control. It is a paid app, and its listing shows no update since November 2022.",
        pros: ["Chromecast and AirPlay", "Records live TV"],
        cons: ["Paid upfront", "Last updated November 2022"],
      },
      {
        id: "flex",
        name: "Flex IPTV",
        meta: "Free · Pro version $5.99 · iOS 17.4 or later",
        text: "Flex IPTV is free, with a one-time Pro version sold separately for iPhone/iPad and for Apple TV ($5.99 each). Its listing mentions XMLTV EPG support, favourite channels and recording live streams.",
        pros: ["One-time Pro purchase", "Records live streams"],
        cons: ["Pro bought again for Apple TV"],
      },
      {
        id: "smarters",
        name: "Smarters Pro",
        meta: "Tech Smarters Private Limited · Free · Premium $4.99 · iOS 15.6 or later",
        text: "The best-known name among IPTV players, also available on Apple TV. Premium costs $4.99. Its App Store privacy label lists usage data that may be used to track you across other companies' apps and websites.",
        pros: ["Low price", "Apple TV app", "Runs on iOS 15.6"],
        cons: ["Data used to track you (App Store label)"],
      },
      {
        id: "opus",
        name: "IPTV Player - Opus",
        meta: "BIEL LLC · Free · paid plans from $4.99 · iOS 15.1 or later",
        text: "Opus handles M3U and Xtream Codes and a custom XMLTV EPG, and syncs playlists and watch progress through an Opus account. Its Apple TV app picks up your playlists from a QR code. The paid options on its listing range from $4.99 to a $29.99 yearly plan or $79.99 for life.",
        pros: ["Apple TV app", "Sync between devices"],
        cons: ["Paid plans up to $79.99", "Data used to track you (App Store label)"],
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
    metaTitle: "Meilleure app IPTV pour iPhone 2026 : 5 apps comparées",
    metaDescription: "Quelle app IPTV choisir sur iPhone en 2026 ? 5 apps de l'App Store comparées : prix, Chromecast, hors ligne et Apple TV, d'après leurs fiches.",
    socialDescription: "5 apps IPTV pour iPhone comparées : prix, Chromecast, téléchargements hors ligne et Apple TV.",
    title: "Meilleure app IPTV pour iPhone 2026 : 5 apps comparées",
    lead: "Nous avons comparé 5 apps IPTV de l'App Store à partir de ce que dit vraiment leur fiche : prix, Chromecast, téléchargements hors ligne et Apple TV.",
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

    intro: "Oui, vous **pouvez regarder l'IPTV sur votre iPhone**, sans jailbreak ni app installée en dehors de l'App Store. Les cinq apps de ce comparatif y sont toutes disponibles. Nous les avons comparées sur le prix, le Chromecast, les téléchargements hors ligne et l'Apple TV, en reprenant pour chaque concurrent ce qu'indique sa propre fiche App Store.",
    quickLabel: "Réponse rapide",
    quickAnswer: "**EDGE IPTV** est notre choix sur iPhone. C'est notre app : le tableau ci-dessous s'en tient donc à des faits vérifiables. Conçue uniquement pour iOS, elle réunit Chromecast et AirPlay, téléchargements hors ligne et zéro publicité. Elle est gratuite au téléchargement avec 7 jours d'essai, puis coûte 3,99 € par mois ou 19,99 € par an.",
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

    tableTitle: "5 apps IPTV pour iPhone : le comparatif",
    table: {
      app: "App",
      price: "Prix",
      chromecast: "Chromecast",
      offline: "Hors ligne",
      appleTv: "App Apple TV",
    },
    tableNote: "Informations sur les concurrents relevées sur leurs fiches de l'App Store américain le 26 octobre 2026 (prix en dollars). ✓ : la fiche de l'app mentionne la fonction ; – : sa fiche n'en parle pas (elle peut exister quand même).",
    topPick: "Notre choix",
    prices: {
      edge: "7 jours d'essai, puis 3,99 €/mois",
      gse: "2,99 $ (app payante)",
      flex: "Gratuit, Pro 5,99 $",
      smarters: "Gratuit, Premium 4,99 $",
      opus: "Gratuit, offres dès 4,99 $",
    },
    edgeTitle: "Notre choix pour iPhone : EDGE IPTV",
    iconAlt: "Icône de l'app EDGE IPTV, meilleure app IPTV pour iPhone",
    trialBadge: "7 jours d'essai gratuit",
    edgeSummary: "Conçue de zéro pour l'iPhone et l'iPad, EDGE IPTV réunit Chromecast et AirPlay, téléchargements hors ligne et une interface iOS entièrement native, sans publicité.",
    edgeFeatures: [
      "Configuration Xtream Codes ou M3U en moins de 2 minutes",
      "Chromecast et AirPlay vers votre TV",
      "Films et séries téléchargeables hors ligne",
      "Picture in Picture pendant que vous utilisez d'autres apps",
      "TV en direct, films et séries avec guide des programmes",
      "iPhone et iPad sous iOS 17 ou plus récent",
    ],
    whyTitle: "Pourquoi EDGE IPTV se démarque sur iPhone",
    why: ["La plupart des lecteurs IPTV pour iOS sont des portages d'apps Android. Ils fonctionnent, mais on sent qu'ils n'ont pas été pensés pour l'iPhone. EDGE IPTV a été conçue uniquement pour iOS, et cela se voit à chaque geste : les balayages sont naturels, le clavier apparaît là où on l'attend, et l'app respecte les conventions du système comme la taille de texte dynamique et le mode sombre.", "Le **Chromecast et les téléchargements hors ligne** couvrent les deux usages de l'iPhone : sur la TV à la maison, et dans le train sans réseau. Ce qu'elle ne fait pas : EDGE IPTV n'enregistre pas la TV en direct et n'a pas d'app Apple TV (l'image passe par AirPlay). Si vous en avez besoin, regardez les apps ci-dessous."],
    othersTitle: "Les autres apps IPTV pour iPhone à connaître",
    others: [
      {
        id: "gse",
        name: "GSE SMART IPTV PRO",
        meta: "GSE Technology Ltd · 2,99 $ · iOS 9 ou plus récent",
        text: "L'un des plus anciens lecteurs IPTV sur iOS. Sa fiche App Store mentionne les playlists M3U et Xtream Codes, un guide des programmes, le Chromecast, AirPlay, l'enregistrement de la TV en direct et le contrôle parental. C'est une app payante, sans mise à jour depuis novembre 2022 d'après sa fiche.",
        pros: ["Chromecast et AirPlay", "Enregistre la TV en direct"],
        cons: ["Payante dès le téléchargement", "Dernière mise à jour en novembre 2022"],
      },
      {
        id: "flex",
        name: "Flex IPTV",
        meta: "Gratuit · version Pro 5,99 $ · iOS 17.4 ou plus récent",
        text: "Flex IPTV est gratuit, avec une version Pro en achat unique vendue séparément pour l'iPhone/iPad et pour l'Apple TV (5,99 $ chacune). Sa fiche mentionne le guide XMLTV, les chaînes favorites et l'enregistrement des flux en direct.",
        pros: ["Pro en achat unique", "Enregistre les flux en direct"],
        cons: ["Pro à racheter pour l'Apple TV"],
      },
      {
        id: "smarters",
        name: "Smarters Pro",
        meta: "Tech Smarters Private Limited · Gratuit · Premium 4,99 $ · iOS 15.6 ou plus récent",
        text: "Le nom le plus connu des lecteurs IPTV, aussi disponible sur Apple TV. La version Premium coûte 4,99 $. Son étiquette de confidentialité sur l'App Store indique des données d'utilisation susceptibles de servir à vous suivre sur les apps et sites d'autres sociétés.",
        pros: ["Petit prix", "App Apple TV", "Fonctionne dès iOS 15.6"],
        cons: ["Données utilisées pour vous suivre (étiquette App Store)"],
      },
      {
        id: "opus",
        name: "IPTV Player - Opus",
        meta: "BIEL LLC · Gratuit · offres payantes dès 4,99 $ · iOS 15.1 ou plus récent",
        text: "Opus gère M3U et Xtream Codes et un guide XMLTV personnalisé, et synchronise playlists et reprise de lecture via un compte Opus. Son app Apple TV récupère vos playlists par QR code. Les offres payantes de sa fiche vont de 4,99 $ à un abonnement annuel à 29,99 $ ou un achat à vie à 79,99 $.",
        pros: ["App Apple TV", "Synchronisation entre appareils"],
        cons: ["Offres jusqu'à 79,99 $", "Données utilisées pour vous suivre (étiquette App Store)"],
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
    metaTitle: "Mejor app IPTV para iPhone 2026: 5 apps comparadas",
    metaDescription: "¿Qué app IPTV elegir en iPhone en 2026? 5 apps de la App Store comparadas: precio, Chromecast, descargas sin conexión y Apple TV, según sus fichas.",
    socialDescription: "5 apps IPTV para iPhone comparadas: precio, Chromecast, descargas sin conexión y Apple TV.",
    title: "Mejor app IPTV para iPhone 2026: 5 apps comparadas",
    lead: "Comparamos 5 apps IPTV de la App Store a partir de lo que dice realmente su ficha: precio, Chromecast, descargas sin conexión y Apple TV.",
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

    intro: "Sí, **puedes ver IPTV en tu iPhone**, sin jailbreak y sin instalar apps fuera de la App Store. Las cinco apps de esta guía están disponibles allí. Las comparamos en precio, Chromecast, descargas sin conexión y Apple TV, tomando de cada competidor lo que indica su propia ficha de la App Store.",
    quickLabel: "Respuesta rápida",
    quickAnswer: "**EDGE IPTV** es nuestra elección para iPhone. Es nuestra app, así que la tabla de abajo se limita a datos que puedes comprobar. Creada solo para iOS, reúne Chromecast y AirPlay, descargas sin conexión y cero anuncios. Se descarga gratis con 7 días de prueba y después cuesta 3,99 € al mes o 19,99 € al año.",
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

    tableTitle: "5 apps IPTV para iPhone: comparativa",
    table: {
      app: "App",
      price: "Precio",
      chromecast: "Chromecast",
      offline: "Sin conexión",
      appleTv: "App Apple TV",
    },
    tableNote: "Datos de los competidores tomados de sus fichas de la App Store de EE. UU. el 26 de octubre de 2026 (precios en dólares). ✓: la ficha de la app menciona la función; –: su ficha no la menciona (puede existir igualmente).",
    topPick: "Nuestra elección",
    prices: {
      edge: "7 días de prueba, luego 3,99 €/mes",
      gse: "2,99 $ (app de pago)",
      flex: "Gratis, Pro 5,99 $",
      smarters: "Gratis, Premium 4,99 $",
      opus: "Gratis, planes desde 4,99 $",
    },
    edgeTitle: "Nuestra elección para iPhone: EDGE IPTV",
    iconAlt: "Icono de la app EDGE IPTV, la mejor app IPTV para iPhone",
    trialBadge: "7 días de prueba gratis",
    edgeSummary: "Creada desde cero para iPhone y iPad, EDGE IPTV reúne Chromecast y AirPlay, descargas sin conexión y una interfaz de iOS totalmente nativa, sin anuncios.",
    edgeFeatures: [
      "Configuración Xtream Codes o M3U en menos de 2 minutos",
      "Chromecast y AirPlay a tu TV",
      "Películas y series descargables sin conexión",
      "Picture in Picture mientras usas otras apps",
      "TV en vivo, películas y series con guía de programación",
      "iPhone y iPad con iOS 17 o posterior",
    ],
    whyTitle: "Por qué EDGE IPTV destaca en iPhone",
    why: ["La mayoría de los reproductores IPTV para iOS son adaptaciones de apps de Android. Funcionan, pero se nota que no se pensaron para el iPhone. EDGE IPTV se diseñó solo para iOS, y se nota en cada gesto: los deslizamientos son naturales, el teclado aparece donde lo esperas y la app respeta las convenciones del sistema, como el texto dinámico y el modo oscuro.", "**Chromecast y las descargas sin conexión** cubren las dos formas de ver en un iPhone: en la tele de casa y en el tren sin cobertura. Lo que no hace: EDGE IPTV no graba la TV en directo y no tiene app para Apple TV (la imagen se envía por AirPlay). Si lo necesitas, mira las apps de abajo."],
    othersTitle: "Otras apps IPTV para iPhone que conviene conocer",
    others: [
      {
        id: "gse",
        name: "GSE SMART IPTV PRO",
        meta: "GSE Technology Ltd · 2,99 $ · iOS 9 o posterior",
        text: "Uno de los reproductores IPTV más antiguos de iOS. Su ficha de la App Store menciona listas M3U y Xtream Codes, guía de programación, Chromecast, AirPlay, grabación de TV en directo y control parental. Es una app de pago y, según su ficha, no se actualiza desde noviembre de 2022.",
        pros: ["Chromecast y AirPlay", "Graba la TV en directo"],
        cons: ["De pago desde la descarga", "Última actualización: noviembre de 2022"],
      },
      {
        id: "flex",
        name: "Flex IPTV",
        meta: "Gratis · versión Pro 5,99 $ · iOS 17.4 o posterior",
        text: "Flex IPTV es gratis, con una versión Pro de pago único que se vende por separado para iPhone/iPad y para Apple TV (5,99 $ cada una). Su ficha menciona guía XMLTV, canales favoritos y grabación de emisiones en directo.",
        pros: ["Pro de pago único", "Graba emisiones en directo"],
        cons: ["Pro aparte para Apple TV"],
      },
      {
        id: "smarters",
        name: "Smarters Pro",
        meta: "Tech Smarters Private Limited · Gratis · Premium 4,99 $ · iOS 15.6 o posterior",
        text: "El nombre más conocido entre los reproductores IPTV, también disponible en Apple TV. La versión Premium cuesta 4,99 $. Su etiqueta de privacidad en la App Store indica datos de uso que pueden servir para rastrearte en apps y webs de otras empresas.",
        pros: ["Precio bajo", "App para Apple TV", "Funciona desde iOS 15.6"],
        cons: ["Datos usados para rastrearte (etiqueta App Store)"],
      },
      {
        id: "opus",
        name: "IPTV Player - Opus",
        meta: "BIEL LLC · Gratis · planes de pago desde 4,99 $ · iOS 15.1 o posterior",
        text: "Opus admite M3U y Xtream Codes y una guía XMLTV personalizada, y sincroniza listas y progreso con una cuenta Opus. Su app para Apple TV recupera tus listas con un código QR. Los planes de pago de su ficha van de 4,99 $ a una suscripción anual de 29,99 $ o un pago de por vida de 79,99 $.",
        pros: ["App para Apple TV", "Sincronización entre dispositivos"],
        cons: ["Planes de hasta 79,99 $", "Datos usados para rastrearte (etiqueta App Store)"],
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
    metaTitle: "Melhor app IPTV para iPhone 2026: 5 apps comparados",
    metaDescription: "Qual app IPTV escolher no iPhone em 2026? 5 apps da App Store comparados: preço, Chromecast, downloads offline e Apple TV, segundo as suas páginas.",
    socialDescription: "5 apps IPTV para iPhone comparados: preço, Chromecast, downloads offline e Apple TV.",
    title: "Melhor app IPTV para iPhone 2026: 5 apps comparados",
    lead: "Comparamos 5 apps IPTV da App Store a partir do que a página de cada um realmente diz: preço, Chromecast, downloads offline e Apple TV.",
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

    intro: "Sim, você **pode assistir IPTV no iPhone**, sem jailbreak e sem instalar apps fora da App Store. Os cinco apps deste guia estão todos lá. Comparamos preço, Chromecast, downloads offline e Apple TV, usando para cada concorrente o que diz a sua própria página na App Store.",
    quickLabel: "Resposta rápida",
    quickAnswer: "O **EDGE IPTV** é a nossa escolha para iPhone. O app é nosso, então a tabela abaixo fica só em fatos que você pode conferir. Feito só para iOS, ele reúne Chromecast e AirPlay, downloads offline e nenhum anúncio. O download é grátis com 7 dias de teste, depois custa US$ 3,99 por mês ou US$ 19,99 por ano.",
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

    tableTitle: "5 apps IPTV para iPhone: comparação",
    table: {
      app: "App",
      price: "Preço",
      chromecast: "Chromecast",
      offline: "Offline",
      appleTv: "App Apple TV",
    },
    tableNote: "Dados dos concorrentes tirados das páginas da App Store dos EUA em 26 de outubro de 2026. ✓: a página do app cita o recurso; –: a página não fala dele (ele pode existir mesmo assim).",
    topPick: "Nossa escolha",
    prices: {
      edge: "7 dias de teste, depois US$ 3,99/mês",
      gse: "US$ 2,99 (app pago)",
      flex: "Grátis, Pro US$ 5,99",
      smarters: "Grátis, Premium US$ 4,99",
      opus: "Grátis, planos a partir de US$ 4,99",
    },
    edgeTitle: "Nossa escolha para iPhone: EDGE IPTV",
    iconAlt: "Ícone do app EDGE IPTV, o melhor app IPTV para iPhone",
    trialBadge: "7 dias de teste grátis",
    edgeSummary: "Criado do zero para iPhone e iPad, o EDGE IPTV reúne Chromecast e AirPlay, downloads offline e uma interface iOS totalmente nativa, sem anúncios.",
    edgeFeatures: [
      "Configuração Xtream Codes ou M3U em menos de 2 minutos",
      "Chromecast e AirPlay para a sua TV",
      "Filmes e séries para baixar e ver offline",
      "Picture in Picture enquanto você usa outros apps",
      "TV ao vivo, filmes e séries com guia de programação",
      "iPhone e iPad com iOS 17 ou posterior",
    ],
    whyTitle: "Por que o EDGE IPTV se destaca no iPhone",
    why: ["A maioria dos players IPTV para iOS são adaptações de apps Android. Funcionam, mas dá para sentir que não foram pensados para o iPhone. O EDGE IPTV foi feito só para iOS, e isso aparece em cada gesto: os deslizes são naturais, o teclado surge onde você espera e o app segue as convenções do sistema, como texto dinâmico e modo escuro.", "O **Chromecast e os downloads offline** cobrem os dois jeitos de assistir no iPhone: na TV de casa e no ônibus sem sinal. O que ele não faz: o EDGE IPTV não grava a TV ao vivo e não tem app para Apple TV (a imagem vai por AirPlay). Se você precisa disso, veja os apps abaixo."],
    othersTitle: "Outros apps IPTV para iPhone que vale conhecer",
    others: [
      {
        id: "gse",
        name: "GSE SMART IPTV PRO",
        meta: "GSE Technology Ltd · US$ 2,99 · iOS 9 ou posterior",
        text: "Um dos players IPTV mais antigos do iOS. A sua página na App Store cita listas M3U e Xtream Codes, guia de programação, Chromecast, AirPlay, gravação da TV ao vivo e controle parental. É um app pago e, segundo a página, não é atualizado desde novembro de 2022.",
        pros: ["Chromecast e AirPlay", "Grava a TV ao vivo"],
        cons: ["Pago já no download", "Última atualização em novembro de 2022"],
      },
      {
        id: "flex",
        name: "Flex IPTV",
        meta: "Grátis · versão Pro US$ 5,99 · iOS 17.4 ou posterior",
        text: "O Flex IPTV é grátis, com uma versão Pro de compra única vendida separadamente para iPhone/iPad e para Apple TV (US$ 5,99 cada). A página cita guia XMLTV, canais favoritos e gravação de transmissões ao vivo.",
        pros: ["Pro com compra única", "Grava transmissões ao vivo"],
        cons: ["Pro comprado de novo para Apple TV"],
      },
      {
        id: "smarters",
        name: "Smarters Pro",
        meta: "Tech Smarters Private Limited · Grátis · Premium US$ 4,99 · iOS 15.6 ou posterior",
        text: "O nome mais conhecido entre os players IPTV, também disponível na Apple TV. O Premium custa US$ 4,99. O seu rótulo de privacidade na App Store indica dados de uso que podem ser usados para rastrear você em apps e sites de outras empresas.",
        pros: ["Preço baixo", "App para Apple TV", "Funciona a partir do iOS 15.6"],
        cons: ["Dados usados para rastrear você (rótulo da App Store)"],
      },
      {
        id: "opus",
        name: "IPTV Player - Opus",
        meta: "BIEL LLC · Grátis · planos pagos a partir de US$ 4,99 · iOS 15.1 ou posterior",
        text: "O Opus aceita M3U e Xtream Codes e guia XMLTV personalizado, e sincroniza listas e progresso com uma conta Opus. O app para Apple TV puxa as suas listas por QR code. As opções pagas da página vão de US$ 4,99 a um plano anual de US$ 29,99 ou US$ 79,99 vitalício.",
        pros: ["App para Apple TV", "Sincronização entre aparelhos"],
        cons: ["Planos de até US$ 79,99", "Dados usados para rastrear você (rótulo da App Store)"],
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
    metaTitle: "Beste IPTV-App für iPhone 2026: 5 Apps im Vergleich",
    metaDescription: "Welche IPTV-App fürs iPhone 2026? 5 Apps aus dem App Store im Vergleich: Preis, Chromecast, Offline-Downloads und Apple TV, laut ihren Store-Seiten.",
    socialDescription: "5 IPTV-Apps fürs iPhone im Vergleich: Preis, Chromecast, Offline-Downloads und Apple TV.",
    title: "Beste IPTV-App für iPhone 2026: 5 Apps im Vergleich",
    lead: "Wir haben 5 IPTV-Apps aus dem App Store verglichen, und zwar nach dem, was ihre Store-Seiten tatsächlich angeben: Preis, Chromecast, Offline-Downloads und Apple TV.",
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

    intro: "Ja, du **kannst IPTV auf dem iPhone schauen**, ganz ohne Jailbreak und ohne Apps außerhalb des App Store. Alle fünf Apps in diesem Vergleich gibt es dort. Wir haben Preis, Chromecast, Offline-Downloads und Apple TV verglichen und für jede Konkurrenz-App nur übernommen, was auf ihrer eigenen App-Store-Seite steht.",
    quickLabel: "Kurz gesagt",
    quickAnswer: "**EDGE IPTV** ist unsere Empfehlung fürs iPhone. Die App ist von uns, deshalb hält sich die Tabelle unten an nachprüfbare Fakten. Nur für iOS gebaut, vereint sie Chromecast und AirPlay, Offline-Downloads und keine Werbung. Der Download ist kostenlos mit 7 Tagen Gratis-Test, danach kostet sie 3,99 € im Monat oder 19,99 € im Jahr.",
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

    tableTitle: "5 IPTV-Apps fürs iPhone im Vergleich",
    table: {
      app: "App",
      price: "Preis",
      chromecast: "Chromecast",
      offline: "Offline",
      appleTv: "Apple-TV-App",
    },
    tableNote: "Angaben zu den anderen Apps von ihren Seiten im US-App-Store, Stand 26. Oktober 2026 (Preise in Dollar). ✓: Die Seite der App nennt die Funktion; –: Ihre Seite erwähnt sie nicht (sie kann trotzdem vorhanden sein).",
    topPick: "Unsere Wahl",
    prices: {
      edge: "7 Tage Test, dann 3,99 €/Monat",
      gse: "2,99 $ (Kauf-App)",
      flex: "Gratis, Pro 5,99 $",
      smarters: "Gratis, Premium 4,99 $",
      opus: "Gratis, Tarife ab 4,99 $",
    },
    edgeTitle: "Unsere Wahl fürs iPhone: EDGE IPTV",
    iconAlt: "App-Symbol von EDGE IPTV, der besten IPTV-App fürs iPhone",
    trialBadge: "7 Tage kostenlos",
    edgeSummary: "Von Grund auf für iPhone und iPad gebaut, vereint EDGE IPTV Chromecast und AirPlay, Offline-Downloads und eine durchgehend native iOS-Oberfläche, ohne Werbung.",
    edgeFeatures: [
      "Einrichtung per Xtream Codes oder M3U in unter 2 Minuten",
      "Chromecast und AirPlay auf den Fernseher",
      "Filme & Serien zum Offline-Schauen laden",
      "Bild-in-Bild, während du andere Apps nutzt",
      "Live-TV, Filme und Serien mit Programmführer",
      "iPhone und iPad ab iOS 17",
    ],
    whyTitle: "Warum EDGE IPTV auf dem iPhone heraussticht",
    why: ["Die meisten IPTV-Player für iOS sind Portierungen von Android-Apps. Sie funktionieren, wirken auf dem iPhone aber fremd. EDGE IPTV wurde ausschließlich für iOS entwickelt, und das merkt man bei jeder Geste: Wischen fühlt sich natürlich an, die Tastatur erscheint da, wo man sie erwartet, und die App folgt Systemkonventionen wie dynamischer Schriftgröße und Dunkelmodus.", "**Chromecast und Offline-Downloads** decken die zwei Arten ab, wie man auf dem iPhone schaut: auf dem Fernseher zu Hause und im Zug ohne Netz. Was die App nicht kann: EDGE IPTV nimmt kein Live-TV auf und hat keine Apple-TV-App (das Bild kommt per AirPlay auf den Fernseher). Wenn du das brauchst, sieh dir die Apps unten an."],
    othersTitle: "Weitere IPTV-Apps fürs iPhone, die man kennen sollte",
    others: [
      {
        id: "gse",
        name: "GSE SMART IPTV PRO",
        meta: "GSE Technology Ltd · 2,99 $ · ab iOS 9",
        text: "Einer der ältesten IPTV-Player unter iOS. Seine App-Store-Seite nennt M3U- und Xtream-Codes-Playlists, eine EPG-Zeitleiste, Chromecast, AirPlay, Aufnahme von Live-TV und Kindersicherung. Die App kostet beim Download, und laut ihrer Seite gab es seit November 2022 kein Update.",
        pros: ["Chromecast und AirPlay", "Nimmt Live-TV auf"],
        cons: ["Kostet schon beim Download", "Letztes Update: November 2022"],
      },
      {
        id: "flex",
        name: "Flex IPTV",
        meta: "Gratis · Pro-Version 5,99 $ · ab iOS 17.4",
        text: "Flex IPTV ist gratis, mit einer Pro-Version als Einmalkauf, getrennt für iPhone/iPad und für Apple TV (je 5,99 $). Die Seite nennt XMLTV-EPG, Lieblingssender und die Aufnahme von Live-Streams.",
        pros: ["Pro als Einmalkauf", "Nimmt Live-Streams auf"],
        cons: ["Pro für Apple TV extra"],
      },
      {
        id: "smarters",
        name: "Smarters Pro",
        meta: "Tech Smarters Private Limited · Gratis · Premium 4,99 $ · ab iOS 15.6",
        text: "Der bekannteste Name unter den IPTV-Playern, auch auf Apple TV. Premium kostet 4,99 $. Das Datenschutz-Etikett im App Store nennt Nutzungsdaten, die verwendet werden können, um dich über Apps und Websites anderer Unternehmen hinweg zu tracken.",
        pros: ["Günstig", "Apple-TV-App", "Läuft ab iOS 15.6"],
        cons: ["Daten zum Tracking (App-Store-Etikett)"],
      },
      {
        id: "opus",
        name: "IPTV Player - Opus",
        meta: "BIEL LLC · Gratis · Bezahl-Tarife ab 4,99 $ · ab iOS 15.1",
        text: "Opus kann M3U und Xtream Codes und eine eigene XMLTV-EPG, und synchronisiert Playlists und Wiedergabestand über ein Opus-Konto. Die Apple-TV-App übernimmt deine Playlists per QR-Code. Die Bezahl-Optionen auf der Seite reichen von 4,99 $ bis zu einem Jahresabo für 29,99 $ oder 79,99 $ auf Lebenszeit.",
        pros: ["Apple-TV-App", "Sync zwischen Geräten"],
        cons: ["Tarife bis 79,99 $", "Daten zum Tracking (App-Store-Etikett)"],
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
    metaTitle: "أفضل تطبيق IPTV للآيفون 2026: مقارنة 5 تطبيقات",
    metaDescription: "أي تطبيق IPTV تختار للآيفون في 2026؟ قارنّا 5 تطبيقات من App Store في السعر وChromecast والتحميل دون اتصال وApple TV، وفق صفحاتها الرسمية.",
    socialDescription: "مقارنة 5 تطبيقات IPTV للآيفون: السعر وChromecast والتحميل دون اتصال وApple TV.",
    title: "أفضل تطبيق IPTV للآيفون 2026: مقارنة 5 تطبيقات",
    lead: "قارنّا 5 تطبيقات IPTV من App Store بناءً على ما تذكره صفحة كل تطبيق فعلًا: السعر وChromecast والتحميل دون اتصال وApple TV.",
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

    intro: "نعم، **يمكنك مشاهدة IPTV على الآيفون**، دون جيلبريك ودون تثبيت تطبيقات من خارج App Store. التطبيقات الخمسة في هذا الدليل متوفرة كلها هناك. قارنّاها في السعر وChromecast والتحميل دون اتصال وApple TV، واعتمدنا لكل تطبيق منافس على ما تذكره صفحته في App Store.",
    quickLabel: "الإجابة باختصار",
    quickAnswer: "**EDGE IPTV** هو اختيارنا للآيفون. التطبيق من صنعنا، لذلك يكتفي الجدول أدناه بحقائق يمكنك التحقق منها. صُمّم لنظام iOS وحده، ويجمع Chromecast وAirPlay والتحميل للمشاهدة دون اتصال، بلا إعلانات. تنزيله مجاني مع تجربة لمدة 7 أيام، ثم 3.99 دولار شهريًا أو 19.99 دولار سنويًا.",
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

    tableTitle: "5 تطبيقات IPTV للآيفون: مقارنة جنبًا إلى جنب",
    table: {
      app: "التطبيق",
      price: "السعر",
      chromecast: "Chromecast",
      offline: "دون اتصال",
      appleTv: "تطبيق Apple TV",
    },
    tableNote: "معلومات التطبيقات المنافسة مأخوذة من صفحاتها في App Store الأمريكي بتاريخ 26 أكتوبر 2026. ✓: صفحة التطبيق تذكر الميزة؛ –: صفحته لا تذكرها (وقد تكون موجودة رغم ذلك).",
    topPick: "اختيارنا",
    prices: {
      edge: "تجربة 7 أيام، ثم 3.99 $ شهريًا",
      gse: "2.99 $ (تطبيق مدفوع)",
      flex: "مجاني، Pro بسعر 5.99 $",
      smarters: "مجاني، Premium بسعر 4.99 $",
      opus: "مجاني، خطط مدفوعة من 4.99 $",
    },
    edgeTitle: "اختيارنا للآيفون: EDGE IPTV",
    iconAlt: "أيقونة تطبيق EDGE IPTV، أفضل تطبيق IPTV للآيفون",
    trialBadge: "تجربة مجانية لسبعة أيام",
    edgeSummary: "صُمّم EDGE IPTV من الصفر للآيفون والآيباد، ويجمع Chromecast وAirPlay والتحميل للمشاهدة دون اتصال وواجهة iOS أصلية بالكامل، بلا إعلانات.",
    edgeFeatures: [
      "إعداد عبر Xtream Codes أو M3U في أقل من دقيقتين",
      "Chromecast وAirPlay إلى التلفاز",
      "تحميل الأفلام والمسلسلات للمشاهدة دون اتصال",
      "صورة داخل صورة أثناء استخدام تطبيقات أخرى",
      "بث مباشر وأفلام ومسلسلات مع دليل البرامج",
      "آيفون وآيباد بنظام iOS 17 أو أحدث",
    ],
    whyTitle: "لماذا يتميّز EDGE IPTV على الآيفون",
    why: ["معظم مشغلات IPTV على iOS منقولة عن تطبيقات أندرويد. تعمل، لكنها تبدو غريبة على الآيفون. أما EDGE IPTV فصُمّم لنظام iOS وحده، ويظهر ذلك في كل لمسة: السحب طبيعي، ولوحة المفاتيح تظهر حيث تتوقعها، والتطبيق يلتزم بأعراف النظام مثل حجم النص الديناميكي والوضع الداكن.", "يغطي **Chromecast والتحميل دون اتصال** طريقتي المشاهدة على الآيفون: على التلفاز في البيت، وفي القطار بلا شبكة. ما لا يفعله: لا يسجّل EDGE IPTV البث المباشر وليس له تطبيق على Apple TV (تُرسَل الصورة عبر AirPlay). إن كنت تحتاج ذلك، فاطّلع على التطبيقات أدناه."],
    othersTitle: "تطبيقات IPTV أخرى للآيفون تستحق المعرفة",
    others: [
      {
        id: "gse",
        name: "GSE SMART IPTV PRO",
        meta: "GSE Technology Ltd · 2.99 $ · iOS 9 أو أحدث",
        text: "من أقدم مشغلات IPTV على iOS. تذكر صفحته في App Store قوائم M3U وXtream Codes ودليل برامج زمنيًا وChromecast وAirPlay وتسجيل البث المباشر والرقابة الأبوية. التطبيق مدفوع، ولم يُحدَّث منذ نوفمبر 2022 بحسب صفحته.",
        pros: ["Chromecast وAirPlay", "يسجّل البث المباشر"],
        cons: ["مدفوع منذ التنزيل", "آخر تحديث في نوفمبر 2022"],
      },
      {
        id: "flex",
        name: "Flex IPTV",
        meta: "مجاني · نسخة Pro بسعر 5.99 $ · iOS 17.4 أو أحدث",
        text: "Flex IPTV مجاني، مع نسخة Pro بشراء لمرة واحدة تُباع بشكل منفصل للآيفون/الآيباد ولـ Apple TV (‏5.99 $ لكل منهما). تذكر صفحته دليل XMLTV والقنوات المفضلة وتسجيل البث المباشر.",
        pros: ["Pro بشراء لمرة واحدة", "يسجّل البث المباشر"],
        cons: ["Pro يُشترى مجددًا لـ Apple TV"],
      },
      {
        id: "smarters",
        name: "Smarters Pro",
        meta: "Tech Smarters Private Limited · مجاني · Premium بسعر 4.99 $ · iOS 15.6 أو أحدث",
        text: "أشهر اسم بين مشغلات IPTV، ومتوفر أيضًا على Apple TV. نسخة Premium بسعر 4.99 $. يذكر ملصق الخصوصية في App Store بيانات استخدام قد تُستعمل لتتبّعك عبر تطبيقات ومواقع شركات أخرى.",
        pros: ["سعر منخفض", "تطبيق Apple TV", "يعمل من iOS 15.6"],
        cons: ["بيانات تُستخدم لتتبّعك (ملصق App Store)"],
      },
      {
        id: "opus",
        name: "IPTV Player - Opus",
        meta: "BIEL LLC · مجاني · خطط مدفوعة من 4.99 $ · iOS 15.1 أو أحدث",
        text: "يدعم Opus قوائم M3U وXtream Codes ودليل XMLTV مخصصًا، ويزامن القوائم وموضع المشاهدة عبر حساب Opus. يستلم تطبيقه على Apple TV قوائمك عبر رمز QR. تتراوح الخيارات المدفوعة في صفحته بين 4.99 $ واشتراك سنوي بـ 29.99 $ أو 79.99 $ مدى الحياة.",
        pros: ["تطبيق Apple TV", "مزامنة بين الأجهزة"],
        cons: ["خطط تصل إلى 79.99 $", "بيانات تُستخدم لتتبّعك (ملصق App Store)"],
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
    metaTitle: "Migliore app IPTV per iPhone 2026: 5 app a confronto",
    metaDescription: "Quale app IPTV scegliere su iPhone nel 2026? 5 app dell'App Store a confronto: prezzo, Chromecast, download offline e Apple TV, dalle loro schede.",
    socialDescription: "5 app IPTV per iPhone a confronto: prezzo, Chromecast, download offline e Apple TV.",
    title: "Migliore app IPTV per iPhone 2026: 5 app a confronto",
    lead: "Abbiamo confrontato 5 app IPTV dell'App Store in base a ciò che dice davvero la loro scheda: prezzo, Chromecast, download offline e Apple TV.",
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

    intro: "Sì, **puoi guardare l'IPTV sul tuo iPhone**, senza jailbreak e senza installare app fuori dall'App Store. Le cinque app di questa guida sono tutte lì. Le abbiamo confrontate su prezzo, Chromecast, download offline e Apple TV, prendendo per ogni concorrente solo ciò che indica la sua scheda sull'App Store.",
    quickLabel: "In breve",
    quickAnswer: "**EDGE IPTV** è la nostra scelta per iPhone. L'app è nostra, quindi la tabella qui sotto si limita a fatti verificabili. Pensata solo per iOS, riunisce Chromecast e AirPlay, download offline e zero pubblicità. Il download è gratuito con 7 giorni di prova, poi costa 3,99 € al mese o 19,99 € all'anno.",
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

    tableTitle: "5 app IPTV per iPhone a confronto",
    table: {
      app: "App",
      price: "Prezzo",
      chromecast: "Chromecast",
      offline: "Offline",
      appleTv: "App Apple TV",
    },
    tableNote: "Dati sui concorrenti presi dalle loro schede sull'App Store statunitense il 26 ottobre 2026 (prezzi in dollari). ✓: la scheda dell'app cita la funzione; –: la scheda non ne parla (può esistere comunque).",
    topPick: "La nostra scelta",
    prices: {
      edge: "7 giorni di prova, poi 3,99 €/mese",
      gse: "2,99 $ (app a pagamento)",
      flex: "Gratis, Pro 5,99 $",
      smarters: "Gratis, Premium 4,99 $",
      opus: "Gratis, piani da 4,99 $",
    },
    edgeTitle: "La nostra scelta per iPhone: EDGE IPTV",
    iconAlt: "Icona dell'app EDGE IPTV, la migliore app IPTV per iPhone",
    trialBadge: "7 giorni di prova gratuita",
    edgeSummary: "Progettata da zero per iPhone e iPad, EDGE IPTV riunisce Chromecast e AirPlay, download offline e un'interfaccia iOS completamente nativa, senza pubblicità.",
    edgeFeatures: [
      "Configurazione Xtream Codes o M3U in meno di 2 minuti",
      "Chromecast e AirPlay verso la TV",
      "Film e serie da scaricare e guardare offline",
      "Picture in Picture mentre usi altre app",
      "TV in diretta, film e serie con guida TV",
      "iPhone e iPad con iOS 17 o successivo",
    ],
    whyTitle: "Perché EDGE IPTV si distingue su iPhone",
    why: ["La maggior parte dei lettori IPTV per iOS sono adattamenti di app Android. Funzionano, ma si sente che non sono nati per l'iPhone. EDGE IPTV è stata progettata solo per iOS, e si vede in ogni gesto: gli scorrimenti sono naturali, la tastiera compare dove te l'aspetti e l'app rispetta le convenzioni del sistema come il testo dinamico e la modalità scura.", "**Chromecast e download offline** coprono i due modi di guardare su iPhone: sulla TV di casa e in treno senza rete. Cosa non fa: EDGE IPTV non registra la TV in diretta e non ha un'app per Apple TV (l'immagine passa con AirPlay). Se ti servono, guarda le app qui sotto."],
    othersTitle: "Altre app IPTV per iPhone da conoscere",
    others: [
      {
        id: "gse",
        name: "GSE SMART IPTV PRO",
        meta: "GSE Technology Ltd · 2,99 $ · iOS 9 o successivo",
        text: "Uno dei lettori IPTV più vecchi su iOS. La sua scheda sull'App Store cita playlist M3U e Xtream Codes, guida TV a timeline, Chromecast, AirPlay, registrazione della TV in diretta e controllo parentale. È un'app a pagamento e, secondo la scheda, non viene aggiornata da novembre 2022.",
        pros: ["Chromecast e AirPlay", "Registra la TV in diretta"],
        cons: ["A pagamento già al download", "Ultimo aggiornamento a novembre 2022"],
      },
      {
        id: "flex",
        name: "Flex IPTV",
        meta: "Gratis · versione Pro 5,99 $ · iOS 17.4 o successivo",
        text: "Flex IPTV è gratis, con una versione Pro ad acquisto unico venduta a parte per iPhone/iPad e per Apple TV (5,99 $ ciascuna). La scheda cita guida XMLTV, canali preferiti e registrazione delle dirette.",
        pros: ["Pro ad acquisto unico", "Registra le dirette"],
        cons: ["Pro da ricomprare per Apple TV"],
      },
      {
        id: "smarters",
        name: "Smarters Pro",
        meta: "Tech Smarters Private Limited · Gratis · Premium 4,99 $ · iOS 15.6 o successivo",
        text: "Il nome più noto tra i lettori IPTV, disponibile anche su Apple TV. Premium costa 4,99 $. La sua etichetta privacy sull'App Store indica dati di utilizzo che possono servire a tracciarti su app e siti di altre aziende.",
        pros: ["Prezzo basso", "App per Apple TV", "Funziona da iOS 15.6"],
        cons: ["Dati usati per tracciarti (etichetta App Store)"],
      },
      {
        id: "opus",
        name: "IPTV Player - Opus",
        meta: "BIEL LLC · Gratis · piani a pagamento da 4,99 $ · iOS 15.1 o successivo",
        text: "Opus gestisce M3U e Xtream Codes e una guida XMLTV personalizzata, e sincronizza playlist e avanzamento con un account Opus. La sua app per Apple TV recupera le tue playlist con un codice QR. Le opzioni a pagamento della scheda vanno da 4,99 $ a un piano annuale da 29,99 $ o 79,99 $ a vita.",
        pros: ["App per Apple TV", "Sincronizzazione tra dispositivi"],
        cons: ["Piani fino a 79,99 $", "Dati usati per tracciarti (etichetta App Store)"],
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
  nl: {
    slug: "beste-iptv-app-iphone",
    metaTitle: "Beste IPTV-app voor iPhone 2026: 5 apps vergeleken",
    metaDescription: "Welke IPTV-app kies je in 2026 voor je iPhone? 5 apps uit de App Store vergeleken op prijs, Chromecast, offline kijken en Apple TV, volgens hun pagina.",
    socialDescription: "5 IPTV-apps voor iPhone vergeleken: prijs, Chromecast, offline downloads en Apple TV.",
    title: "Beste IPTV-app voor iPhone 2026: 5 apps vergeleken",
    lead: "We vergeleken 5 IPTV-apps uit de App Store op wat hun pagina echt zegt: prijs, Chromecast, offline downloads en Apple TV.",
    readTime: "7 min lezen",
    author: "Team EDGE IPTV",
    keywords: [
      "beste iptv app iphone",
      "iptv app iphone",
      "iptv speler iphone",
      "iptv op iphone",
      "iptv speler ios",
    ],
    home: "Home",
    blog: "Blog",
    breadcrumb: "Beste IPTV-app voor iPhone 2026",

    intro: "Ja, je **kunt IPTV kijken op je iPhone**, en je hebt geen jailbreak of buiten de App Store geïnstalleerde app nodig. Alle vijf de apps in deze gids staan in de App Store. We vergeleken ze op prijs, Chromecast, offline downloads en Apple TV, en namen voor elke concurrent alleen over wat op zijn eigen App Store-pagina staat.",
    quickLabel: "Kort antwoord",
    quickAnswer: "**EDGE IPTV** is onze keuze voor iPhone. De app is van ons, dus de tabel hieronder houdt het bij feiten die je kunt nagaan. Alleen voor iOS gebouwd, met Chromecast en AirPlay, offline downloads en geen advertenties. Gratis te downloaden met 7 dagen gratis proberen, daarna € 3,99 per maand of € 19,99 per jaar.",
    trialCta: "Probeer 7 dagen gratis",
    trialCtaStore: "Probeer 7 dagen gratis in de App Store",

    criteriaTitle: "Wat maakt een goede IPTV-app voor iPhone?",
    criteriaIntro:
      "Niet elke IPTV-speler is gemaakt voor iOS. Dit onderscheidt een goede IPTV-app voor iPhone van een middelmatige:",
    criteria: [
      {
        title: "Native iOS-interface",
        description:
          "Voelt thuis op iPhone: vloeiende animaties, goed tikbare knoppen, ondersteuning voor de donkere modus.",
      },
      {
        title: "Snel en stabiel streamen",
        description: "Slimme buffering die zich aanpast aan je verbinding, zonder steeds te haperen.",
      },
      {
        title: "Chromecast / AirPlay",
        description: "Cast naar je tv zonder extra hardware te kopen. Een functie die veel apps overslaan.",
      },
      {
        title: "Offline downloads",
        description: "Download films en series om onderweg te kijken, ook zonder internet.",
      },
    ],

    tableTitle: "5 IPTV-apps voor iPhone: vergelijking",
    table: {
      app: "App",
      price: "Prijs",
      chromecast: "Chromecast",
      offline: "Offline",
      appleTv: "Apple TV-app",
    },
    tableNote: "Gegevens over de andere apps van hun pagina's in de Amerikaanse App Store, op 26 oktober 2026 (prijzen in dollars). ✓: de pagina van de app noemt de functie; –: de pagina noemt haar niet (ze kan wel bestaan).",
    topPick: "Onze keuze",
    prices: {
      edge: "7 dagen gratis, daarna € 3,99/mnd",
      gse: "$ 2,99 (betaalde app)",
      flex: "Gratis, Pro $ 5,99",
      smarters: "Gratis, Premium $ 4,99",
      opus: "Gratis, abonnementen vanaf $ 4,99",
    },
    edgeTitle: "Onze keuze voor iPhone: EDGE IPTV",
    iconAlt: "App-icoon van EDGE IPTV, de beste IPTV-app voor iPhone",
    trialBadge: "7 dagen gratis",
    edgeSummary: "EDGE IPTV is vanaf de basis gebouwd voor iPhone en iPad, en combineert Chromecast en AirPlay, offline downloads en een volledig native iOS-interface in één app, zonder advertenties.",
    edgeFeatures: [
      "Instellen met Xtream Codes of M3U in minder dan 2 minuten",
      "Chromecast en AirPlay naar je tv",
      "Films en series downloaden om offline te kijken",
      "Beeld-in-beeld terwijl je andere apps gebruikt",
      "Live-tv, films en series met een tv-gids",
      "iPhone en iPad met iOS 17 of nieuwer",
    ],
    whyTitle: "Waarom EDGE IPTV opvalt op iPhone",
    why: ["De meeste IPTV-spelers voor iOS zijn overgezet van Android. Ze werken, maar voelen vreemd aan op iPhone. EDGE IPTV is alleen voor iOS ontworpen, en dat merk je bij elke handeling: gebaren voelen natuurlijk, het toetsenbord verschijnt waar je het verwacht en de app volgt systeemconventies zoals Dynamic Type en de donkere modus.", "**Chromecast en offline downloads** dekken de twee manieren waarop je op een iPhone kijkt: op de tv thuis en in de trein zonder bereik. Wat de app niet doet: EDGE IPTV neemt geen live tv op en heeft geen Apple TV-app (het beeld gaat via AirPlay). Heb je dat nodig, kijk dan naar de apps hieronder."],
    othersTitle: "Andere IPTV-apps voor iPhone om te kennen",
    others: [
      {
        id: "gse",
        name: "GSE SMART IPTV PRO",
        meta: "GSE Technology Ltd · $ 2,99 · iOS 9 of nieuwer",
        text: "Een van de oudste IPTV-spelers op iOS. Zijn App Store-pagina noemt M3U- en Xtream Codes-playlists, een EPG-tijdlijn, Chromecast, AirPlay, live tv opnemen en ouderlijk toezicht. Het is een betaalde app, en volgens de pagina is hij sinds november 2022 niet bijgewerkt.",
        pros: ["Chromecast en AirPlay", "Neemt live tv op"],
        cons: ["Betalen bij het downloaden", "Laatste update: november 2022"],
      },
      {
        id: "flex",
        name: "Flex IPTV",
        meta: "Gratis · Pro-versie $ 5,99 · iOS 17.4 of nieuwer",
        text: "Flex IPTV is gratis, met een Pro-versie als eenmalige aankoop, apart te koop voor iPhone/iPad en voor Apple TV ($ 5,99 per stuk). De pagina noemt XMLTV-EPG, favoriete zenders en live streams opnemen.",
        pros: ["Pro als eenmalige aankoop", "Neemt live streams op"],
        cons: ["Pro opnieuw kopen voor Apple TV"],
      },
      {
        id: "smarters",
        name: "Smarters Pro",
        meta: "Tech Smarters Private Limited · Gratis · Premium $ 4,99 · iOS 15.6 of nieuwer",
        text: "De bekendste naam onder de IPTV-spelers, ook op Apple TV. Premium kost $ 4,99. Het privacylabel in de App Store noemt gebruiksgegevens die gebruikt kunnen worden om je te volgen via apps en websites van andere bedrijven.",
        pros: ["Lage prijs", "Apple TV-app", "Werkt vanaf iOS 15.6"],
        cons: ["Gegevens om je te volgen (App Store-label)"],
      },
      {
        id: "opus",
        name: "IPTV Player - Opus",
        meta: "BIEL LLC · Gratis · abonnementen vanaf $ 4,99 · iOS 15.1 of nieuwer",
        text: "Opus ondersteunt M3U en Xtream Codes en een eigen XMLTV-EPG, en synchroniseert playlists en kijkvoortgang via een Opus-account. De Apple TV-app haalt je playlists op met een QR-code. De betaalde opties op de pagina lopen van $ 4,99 tot een jaarabonnement van $ 29,99 of $ 79,99 voor altijd.",
        pros: ["Apple TV-app", "Synchronisatie tussen apparaten"],
        cons: ["Abonnementen tot $ 79,99", "Gegevens om je te volgen (App Store-label)"],
      },
    ],
    stepsTitle: "Zo download je een IPTV-app op iPhone (in 2 minuten ingesteld)",
    stepsIntro: "Zo ga je met EDGE IPTV in minder dan 2 minuten van niets naar kijken:",
    steps: [
      {
        title: "Download EDGE IPTV in de App Store",
        description:
          "Tik op de knop hieronder of zoek ‘EDGE IPTV’ in de App Store. De download is gratis, met 7 dagen gratis proberen.",
      },
      {
        title: "Tik op ‘Playlist toevoegen’",
        description: "Kies Xtream Codes, of M3U-playlist als je aanbieder je een link gaf.",
      },
      {
        title: "Vul de gegevens van je IPTV-aanbieder in",
        description:
          "Plak de server-URL, gebruikersnaam en wachtwoord van je IPTV-dienst en tik op ‘Playlist toevoegen’.",
      },
      {
        title: "Begin met kijken",
        description: "Je zenders, films en series laden automatisch. Tik op iets om af te spelen.",
      },
    ],
    guideBefore: "Liever een uitgebreidere uitleg? Lees onze ",
    guideLabel: "complete handleiding voor IPTV op iPhone en iPad",
    guideAfter: ".",

    tipsTitle: "Tips voor de beste IPTV-ervaring op iPhone",
    tips: [
      {
        title: "Gebruik wifi voor HD",
        description: "Kijk 1080p- of 4K-streams via wifi. Een 5 GHz-netwerk is ideaal tegen buffering.",
      },
      {
        title: "Download voor je op reis gaat",
        description:
          "Sla films en afleveringen via wifi op voor vertrek en kijk ze zonder mobiele data.",
      },
      {
        title: "Cast naar je tv",
        description:
          "Tik op het cast-icoon in de speler om de stream naar een Chromecast, Google TV of Apple TV te sturen.",
      },
      {
        title: "Kijk verder in beeld-in-beeld",
        description:
          "Veeg naar het beginscherm tijdens het afspelen en de video speelt door in een klein venster boven je andere apps.",
      },
      {
        title: "Zet ‘Ververs op achtergrond’ aan",
        description:
          "Instellingen → EDGE IPTV → Ververs op achtergrond laat je catalogus tussen sessies bijwerken, wanneer iOS dat toestaat.",
      },
      {
        title: "Los buffering op met een VPN",
        description:
          "Als je internetprovider streamingverkeer afknijpt, kan een VPN de snelheid terugbrengen.",
      },
    ],

    relatedTitle: "Gerelateerde handleidingen",
    faqTitle: "Veelgestelde vragen",
    faq: [
      {
        q: "Wat is de beste IPTV-app voor iPhone?",
        a: "EDGE IPTV stelt Xtream Codes in minder dan twee minuten in en ondersteunt Chromecast, offline downloads en een volledige EPG-gids op iPhone en iPad. Gratis te downloaden, met 7 dagen gratis proberen, daarna € 3,99 per maand of € 19,99 per jaar.",
      },
      {
        q: "Kan ik IPTV kijken op mijn iPhone?",
        a: "Ja. Je hebt een IPTV-speler-app zoals EDGE IPTV nodig en een IPTV-abonnement bij een aanbieder. Met je Xtream Codes bij de hand duurt het instellen minder dan 2 minuten.",
      },
      {
        q: "Hoe download ik een IPTV-app op mijn iPhone?",
        a: "Open de App Store op je iPhone, zoek ‘EDGE IPTV’ en tik op de downloadknop. Open daarna de app, tik op ‘Playlist toevoegen’, vul de Xtream Codes van je aanbieder in (URL, gebruikersnaam, wachtwoord) en je kunt kijken.",
      },
      {
        q: "Is er een gratis IPTV-app voor iPhone?",
        a: "EDGE IPTV is gratis te downloaden, met 7 dagen gratis proberen. Daarna is voor afspelen een abonnement nodig van € 3,99 per maand of € 19,99 per jaar, zonder advertenties. Je hebt daarnaast een eigen IPTV-abonnement bij een aanbieder nodig, los van de app.",
      },
      {
        q: "Werkt IPTV op elke iPhone?",
        a: "EDGE IPTV vereist iOS 17.0 of nieuwer en werkt dus op iPhone XS en nieuwer. Op iPad ondersteunt de app iPad Pro (2e generatie), iPad Air (3e generatie), iPad (6e generatie) en iPad mini (5e generatie) of nieuwer.",
      },
    ],
  },
};
