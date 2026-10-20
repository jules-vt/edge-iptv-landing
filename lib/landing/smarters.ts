import type { Lang } from "@/lib/i18n";
import type { LandingCopy } from "@/lib/landing/types";

/**
 * "IPTV Smarters alternative". Unlike TiviMate, Smarters is on the App Store,
 * so the page has to say honestly why someone would switch, and that EDGE IPTV
 * costs more.
 *
 * Every Smarters fact comes from the two US App Store listings, read on
 * 2026-10-20:
 * - Smarters Player Lite (WHMCS SMARTERS, id1628995509): free, "Contains
 *   Advertising", Premium in-app purchase $1.99, iOS 15.6+, Apple TV app.
 * - Smarters Pro (Tech Smarters Private Limited, id6450746159): free, Premium
 *   in-app purchase $4.99, iOS 15.6+, Apple TV app.
 * - Both privacy labels list "Data Used to Track You: Usage Data".
 * EDGE IPTV's own label (same day) has no "Data Used to Track You" section.
 * Features absent from the Smarters descriptions are not claimed either way.
 */
export const SMARTERS_COPY: Record<Lang, LandingCopy> = {
  en: {
    metaTitle: "IPTV Smarters Alternative for iPhone & iPad, No Ads",
    metaDescription:
      "Looking for an IPTV Smarters alternative on iPhone? EDGE IPTV opens the same playlist with no ads and no ad tracking, plus a TV guide grid and Chromecast.",
    eyebrow: "IPTV Smarters alternative",
    title: "An IPTV Smarters alternative built for iPhone and iPad",
    intro:
      "Keep the playlist you use in Smarters and watch it in an app with no ads and no advertising tracking. EDGE IPTV costs more than Smarters, and this page says plainly what you get for it.",
    imageAlt: "EDGE IPTV home screen on iPhone, with no ads",
    needTitle: "What you need",
    need: [
      "An iPhone or iPad on iOS 17 or later",
      "The details you entered in Smarters: an Xtream Codes login (server, username, password) or an M3U link",
    ],
    stepsTitle: "Move from Smarters to EDGE IPTV",
    steps: [
      {
        title: "Find your playlist details",
        description:
          "They are in the welcome email from your IPTV provider: an Xtream Codes login or an M3U link. It is what you typed into Smarters.",
      },
      {
        title: 'Install EDGE IPTV and tap "Add a playlist"',
        description: 'Choose "Xtream Codes" or "M3U playlist" and enter the same details.',
      },
      {
        title: 'Tap "Add playlist"',
        description:
          "Your channels, the TV guide, and movies and series load in a few seconds. You can keep Smarters installed while you try it.",
      },
    ],
    featuresTitle: "What EDGE IPTV gives you",
    features: [
      {
        title: "No ads, no ad tracking",
        description:
          "No banners or videos between channels. On the App Store, EDGE IPTV declares no data used to track you.",
      },
      {
        title: "Made for iPhone and iPad",
        description:
          "Native iOS controls, and layouts that adapt to the iPad's larger screen instead of a stretched phone app.",
      },
      {
        title: "A TV guide in a grid",
        description:
          "Channels down the side, programmes along a timeline, from your provider's guide.",
      },
      {
        title: "Chromecast, AirPlay and Picture in Picture",
        description:
          "Send a channel to the TV, or keep watching in a small window over other apps.",
      },
      {
        title: "Downloads for offline viewing",
        description: "Download films and series episodes and watch them without a connection.",
      },
      {
        title: "Several playlists, search and favourites",
        description:
          "Add more than one provider, pin your channels and find any film or series in a second.",
      },
    ],
    comparison: {
      title: "IPTV Smarters and EDGE IPTV side by side",
      headers: ["", "IPTV Smarters (Player Lite / Pro)", "EDGE IPTV"],
      rows: [
        ["Price", "Free, Premium $1.99 (Lite) or $4.99 (Pro)", "7-day free trial, then $3.99/month or $19.99/year"],
        ["Advertising", "Yes, in Smarters Player Lite", "No"],
        ["Data used to track you (App Store label)", "Yes, usage data", "None"],
        ["Apple TV app", "Yes", "No (AirPlay from iPhone or iPad)"],
        ["Minimum system", "iOS 15.6", "iOS 17"],
      ],
      note:
        "Taken from the US App Store listings on 20 October 2026. Smarters is cheaper and runs on Apple TV and older iPhones; if those matter most to you, it is the better fit.",
    },
    explainTitle: "Which IPTV Smarters is which?",
    explain: [
      "Several App Store apps carry the Smarters name, from different developers: Smarters Player Lite is published by WHMCS SMARTERS, Smarters Pro by Tech Smarters Private Limited, and other apps use the name too. Check the developer on the App Store page to know which one you have.",
      "Whichever it is, it is a player, like EDGE IPTV: your channels come from your IPTV provider, through an Xtream Codes login or an M3U link. That is why switching takes two minutes. The same details work in any player.",
    ],
    faq: [
      {
        q: "Is IPTV Smarters free on iPhone?",
        a: "Smarters Player Lite is free with ads, with a Premium version at $1.99. Smarters Pro is free with a Premium version at $4.99. Prices from the US App Store in October 2026.",
      },
      {
        q: "Is EDGE IPTV cheaper than Smarters?",
        a: "No. EDGE IPTV is free to download with a 7-day free trial, then $3.99 a month or $19.99 a year. In exchange there are no ads and no data used to track you.",
      },
      {
        q: "Can I use my Smarters login in EDGE IPTV?",
        a: "Yes. Enter the same Xtream Codes login or M3U link. If you watch in both apps at the same time, check how many connections your provider allows.",
      },
      {
        q: "Does EDGE IPTV work on Apple TV?",
        a: "There is no Apple TV app. You can send the picture from your iPhone or iPad to an Apple TV with AirPlay, or to a Chromecast.",
      },
      {
        q: "Does EDGE IPTV provide channels?",
        a: "No. Like Smarters, EDGE IPTV is a player: you bring the playlist from your own IPTV provider.",
      },
    ],
  },

  fr: {
    metaTitle: "Alternative à IPTV Smarters sur iPhone et iPad, sans pub",
    metaDescription:
      "Une alternative à IPTV Smarters sur iPhone ? EDGE IPTV ouvre la même playlist sans publicité ni pistage publicitaire, avec guide TV en grille et Chromecast.",
    eyebrow: "Alternative à IPTV Smarters",
    title: "Une alternative à IPTV Smarters conçue pour iPhone et iPad",
    intro:
      "Gardez la playlist que vous utilisez dans Smarters et regardez-la dans une app sans publicité ni pistage publicitaire. EDGE IPTV coûte plus cher que Smarters, et cette page dit clairement ce que vous obtenez en échange.",
    imageAlt: "Écran d'accueil d'EDGE IPTV sur iPhone, sans publicité",
    needTitle: "Ce qu'il vous faut",
    need: [
      "Un iPhone ou un iPad sous iOS 17 ou plus récent",
      "Les informations saisies dans Smarters : identifiants Xtream Codes (serveur, nom d'utilisateur, mot de passe) ou lien M3U",
    ],
    stepsTitle: "Passer de Smarters à EDGE IPTV",
    steps: [
      {
        title: "Retrouvez les informations de votre playlist",
        description:
          "Elles figurent dans l'e-mail de bienvenue de votre fournisseur IPTV : des identifiants Xtream Codes ou un lien M3U. Ce sont celles que vous aviez saisies dans Smarters.",
      },
      {
        title: "Installez EDGE IPTV et touchez « Ajouter une playlist »",
        description: "Choisissez « Xtream Codes » ou « Playlist M3U » et saisissez les mêmes informations.",
      },
      {
        title: "Touchez « Ajouter la playlist »",
        description:
          "Vos chaînes, le guide TV, les films et les séries se chargent en quelques secondes. Vous pouvez garder Smarters installé le temps d'essayer.",
      },
    ],
    featuresTitle: "Ce qu'EDGE IPTV vous apporte",
    features: [
      {
        title: "Sans publicité ni pistage publicitaire",
        description:
          "Aucune bannière ni vidéo entre deux chaînes. Sur l'App Store, EDGE IPTV ne déclare aucune donnée utilisée pour vous suivre.",
      },
      {
        title: "Conçu pour iPhone et iPad",
        description:
          "Les contrôles natifs d'iOS, et une mise en page qui s'adapte au grand écran de l'iPad au lieu d'une app de téléphone étirée.",
      },
      {
        title: "Un guide TV en grille",
        description:
          "Les chaînes à gauche, les programmes sur une frise horaire, depuis le guide de votre fournisseur.",
      },
      {
        title: "Chromecast, AirPlay et Picture in Picture",
        description:
          "Envoyez une chaîne sur la TV, ou continuez à regarder dans une petite fenêtre par-dessus vos apps.",
      },
      {
        title: "Téléchargements hors ligne",
        description: "Téléchargez films et épisodes de séries, et regardez-les sans connexion.",
      },
      {
        title: "Plusieurs playlists, recherche et favoris",
        description:
          "Ajoutez plusieurs fournisseurs, épinglez vos chaînes et retrouvez un film ou une série en une seconde.",
      },
    ],
    comparison: {
      title: "IPTV Smarters et EDGE IPTV côte à côte",
      headers: ["", "IPTV Smarters (Player Lite / Pro)", "EDGE IPTV"],
      rows: [
        ["Prix", "Gratuit, Premium 1,99 $ (Lite) ou 4,99 $ (Pro)", "7 jours d'essai gratuit, puis 3,99 €/mois ou 19,99 €/an"],
        ["Publicité", "Oui, dans Smarters Player Lite", "Non"],
        ["Données utilisées pour vous suivre (étiquette App Store)", "Oui, données d'utilisation", "Aucune"],
        ["App Apple TV", "Oui", "Non (AirPlay depuis l'iPhone ou l'iPad)"],
        ["Système minimum", "iOS 15.6", "iOS 17"],
      ],
      note:
        "Relevé sur les fiches de l'App Store américain le 20 octobre 2026 (prix de Smarters en dollars). Smarters est moins cher et fonctionne sur Apple TV et sur des iPhone plus anciens : si c'est ce qui compte le plus pour vous, c'est le meilleur choix.",
    },
    explainTitle: "Quel IPTV Smarters est lequel ?",
    explain: [
      "Plusieurs apps de l'App Store portent le nom Smarters, publiées par des développeurs différents : Smarters Player Lite par WHMCS SMARTERS, Smarters Pro par Tech Smarters Private Limited, et d'autres apps reprennent aussi le nom. Vérifiez le développeur sur la fiche App Store pour savoir laquelle vous avez.",
      "Quelle qu'elle soit, c'est un lecteur, comme EDGE IPTV : vos chaînes viennent de votre fournisseur IPTV, via des identifiants Xtream Codes ou un lien M3U. C'est pour ça que le changement prend deux minutes : les mêmes informations fonctionnent dans n'importe quel lecteur.",
    ],
    faq: [
      {
        q: "IPTV Smarters est-il gratuit sur iPhone ?",
        a: "Smarters Player Lite est gratuit avec publicité, avec une version Premium à 1,99 $. Smarters Pro est gratuit avec une version Premium à 4,99 $. Prix de l'App Store américain en octobre 2026.",
      },
      {
        q: "EDGE IPTV est-il moins cher que Smarters ?",
        a: "Non. EDGE IPTV est gratuit au téléchargement avec 7 jours d'essai gratuit, puis 3,99 € par mois ou 19,99 € par an. En échange : aucune publicité et aucune donnée utilisée pour vous suivre.",
      },
      {
        q: "Puis-je utiliser mes identifiants Smarters dans EDGE IPTV ?",
        a: "Oui. Saisissez les mêmes identifiants Xtream Codes ou le même lien M3U. Si vous regardez dans les deux apps en même temps, vérifiez le nombre de connexions autorisées par votre fournisseur.",
      },
      {
        q: "EDGE IPTV fonctionne-t-il sur Apple TV ?",
        a: "Il n'y a pas d'app Apple TV. Vous pouvez envoyer l'image de votre iPhone ou iPad vers une Apple TV par AirPlay, ou vers un Chromecast.",
      },
      {
        q: "EDGE IPTV fournit-il des chaînes ?",
        a: "Non. Comme Smarters, EDGE IPTV est un lecteur : vous apportez la playlist de votre propre fournisseur IPTV.",
      },
    ],
  },

  es: {
    metaTitle: "Alternativa a IPTV Smarters para iPhone y iPad, sin anuncios",
    metaDescription:
      "¿Buscas una alternativa a IPTV Smarters en iPhone? EDGE IPTV abre la misma lista sin anuncios ni rastreo publicitario, con guía de TV y Chromecast.",
    eyebrow: "Alternativa a IPTV Smarters",
    title: "Una alternativa a IPTV Smarters hecha para iPhone y iPad",
    intro:
      "Conserva la lista que usas en Smarters y mírala en una app sin anuncios ni rastreo publicitario. EDGE IPTV cuesta más que Smarters, y esta página explica claramente qué obtienes a cambio.",
    imageAlt: "Pantalla de inicio de EDGE IPTV en iPhone, sin anuncios",
    needTitle: "Lo que necesitas",
    need: [
      "Un iPhone o iPad con iOS 17 o posterior",
      "Los datos que pusiste en Smarters: acceso Xtream Codes (servidor, usuario, contraseña) o enlace M3U",
    ],
    stepsTitle: "Pasa de Smarters a EDGE IPTV",
    steps: [
      {
        title: "Busca los datos de tu lista",
        description:
          "Están en el correo de bienvenida de tu proveedor IPTV: un acceso Xtream Codes o un enlace M3U. Son los que escribiste en Smarters.",
      },
      {
        title: "Instala EDGE IPTV y toca «Añadir una playlist»",
        description: "Elige «Xtream Codes» o «Playlist M3U» e introduce los mismos datos.",
      },
      {
        title: "Toca «Añadir la playlist»",
        description:
          "Tus canales, la guía de TV, las películas y las series se cargan en unos segundos. Puedes conservar Smarters mientras lo pruebas.",
      },
    ],
    featuresTitle: "Lo que te ofrece EDGE IPTV",
    features: [
      {
        title: "Sin anuncios ni rastreo publicitario",
        description:
          "Ni banners ni vídeos entre canales. En la App Store, EDGE IPTV no declara ningún dato usado para rastrearte.",
      },
      {
        title: "Hecho para iPhone y iPad",
        description:
          "Controles nativos de iOS y un diseño que se adapta a la pantalla grande del iPad, en lugar de una app de móvil estirada.",
      },
      {
        title: "Guía de TV en cuadrícula",
        description:
          "Los canales a un lado y los programas en una línea de tiempo, desde la guía de tu proveedor.",
      },
      {
        title: "Chromecast, AirPlay e Imagen en Imagen",
        description:
          "Envía un canal a la tele, o sigue viendo en una ventana pequeña sobre otras apps.",
      },
      {
        title: "Descargas para ver sin conexión",
        description: "Descarga películas y episodios de series y míralos sin conexión.",
      },
      {
        title: "Varias listas, búsqueda y favoritos",
        description:
          "Añade más de un proveedor, fija tus canales y encuentra cualquier película o serie en un segundo.",
      },
    ],
    comparison: {
      title: "IPTV Smarters y EDGE IPTV, frente a frente",
      headers: ["", "IPTV Smarters (Player Lite / Pro)", "EDGE IPTV"],
      rows: [
        ["Precio", "Gratis, Premium 1,99 $ (Lite) o 4,99 $ (Pro)", "7 días de prueba gratis, luego 3,99 €/mes o 19,99 €/año"],
        ["Publicidad", "Sí, en Smarters Player Lite", "No"],
        ["Datos usados para rastrearte (etiqueta App Store)", "Sí, datos de uso", "Ninguno"],
        ["App para Apple TV", "Sí", "No (AirPlay desde iPhone o iPad)"],
        ["Sistema mínimo", "iOS 15.6", "iOS 17"],
      ],
      note:
        "Datos de las fichas de la App Store de EE. UU. del 20 de octubre de 2026 (precios de Smarters en dólares). Smarters es más barato y funciona en Apple TV y en iPhone más antiguos: si eso es lo que más te importa, es la mejor opción.",
    },
    explainTitle: "¿Qué IPTV Smarters es cuál?",
    explain: [
      "Varias apps de la App Store llevan el nombre Smarters, de desarrolladores distintos: Smarters Player Lite la publica WHMCS SMARTERS, Smarters Pro la publica Tech Smarters Private Limited, y otras apps también usan el nombre. Comprueba el desarrollador en la ficha de la App Store para saber cuál tienes.",
      "Sea cual sea, es un reproductor, como EDGE IPTV: tus canales vienen de tu proveedor IPTV, mediante un acceso Xtream Codes o un enlace M3U. Por eso cambiar lleva dos minutos: los mismos datos funcionan en cualquier reproductor.",
    ],
    faq: [
      {
        q: "¿IPTV Smarters es gratis en iPhone?",
        a: "Smarters Player Lite es gratis con anuncios, con una versión Premium de 1,99 $. Smarters Pro es gratis con una versión Premium de 4,99 $. Precios de la App Store de EE. UU. en octubre de 2026.",
      },
      {
        q: "¿EDGE IPTV es más barato que Smarters?",
        a: "No. EDGE IPTV se descarga gratis con 7 días de prueba, y después cuesta 3,99 € al mes o 19,99 € al año. A cambio: sin anuncios y sin datos usados para rastrearte.",
      },
      {
        q: "¿Puedo usar mis datos de Smarters en EDGE IPTV?",
        a: "Sí. Introduce el mismo acceso Xtream Codes o el mismo enlace M3U. Si ves en las dos apps a la vez, revisa cuántas conexiones permite tu proveedor.",
      },
      {
        q: "¿EDGE IPTV funciona en Apple TV?",
        a: "No hay app para Apple TV. Puedes enviar la imagen desde el iPhone o iPad a un Apple TV con AirPlay, o a un Chromecast.",
      },
      {
        q: "¿EDGE IPTV ofrece canales?",
        a: "No. Como Smarters, EDGE IPTV es un reproductor: tú aportas la lista de tu propio proveedor IPTV.",
      },
    ],
  },

  pt: {
    metaTitle: "Alternativa ao IPTV Smarters no iPhone e iPad, sem anúncios",
    metaDescription:
      "Procura uma alternativa ao IPTV Smarters no iPhone? O EDGE IPTV abre a mesma lista sem anúncios nem rastreamento publicitário, com guia de TV em grade.",
    eyebrow: "Alternativa ao IPTV Smarters",
    title: "Uma alternativa ao IPTV Smarters feita para iPhone e iPad",
    intro:
      "Mantenha a lista que você usa no Smarters e assista num app sem anúncios nem rastreamento publicitário. O EDGE IPTV custa mais que o Smarters, e esta página diz claramente o que você recebe em troca.",
    imageAlt: "Tela inicial do EDGE IPTV no iPhone, sem anúncios",
    needTitle: "O que você precisa",
    need: [
      "Um iPhone ou iPad com iOS 17 ou posterior",
      "Os dados que você colocou no Smarters: login Xtream Codes (servidor, usuário, senha) ou link M3U",
    ],
    stepsTitle: "Passe do Smarters para o EDGE IPTV",
    steps: [
      {
        title: "Encontre os dados da sua lista",
        description:
          "Eles estão no e-mail de boas-vindas do seu provedor IPTV: um login Xtream Codes ou um link M3U. São os que você digitou no Smarters.",
      },
      {
        title: "Instale o EDGE IPTV e toque em «Adicionar uma playlist»",
        description: "Escolha «Xtream Codes» ou «Playlist M3U» e digite os mesmos dados.",
      },
      {
        title: "Toque em «Adicionar a playlist»",
        description:
          "Seus canais, o guia de TV, os filmes e as séries carregam em poucos segundos. Você pode manter o Smarters instalado enquanto testa.",
      },
    ],
    featuresTitle: "O que o EDGE IPTV oferece",
    features: [
      {
        title: "Sem anúncios nem rastreamento publicitário",
        description:
          "Nada de banners ou vídeos entre canais. Na App Store, o EDGE IPTV não declara nenhum dado usado para rastrear você.",
      },
      {
        title: "Feito para iPhone e iPad",
        description:
          "Controles nativos do iOS e um layout que se adapta à tela grande do iPad, em vez de um app de celular esticado.",
      },
      {
        title: "Guia de TV em grade",
        description:
          "Os canais de um lado e os programas numa linha do tempo, a partir do guia do seu provedor.",
      },
      {
        title: "Chromecast, AirPlay e Picture in Picture",
        description:
          "Envie um canal para a TV, ou continue assistindo numa janela pequena sobre outros apps.",
      },
      {
        title: "Downloads para assistir offline",
        description: "Baixe filmes e episódios de séries e assista sem conexão.",
      },
      {
        title: "Várias listas, busca e favoritos",
        description:
          "Adicione mais de um provedor, fixe seus canais e encontre qualquer filme ou série num segundo.",
      },
    ],
    comparison: {
      title: "IPTV Smarters e EDGE IPTV lado a lado",
      headers: ["", "IPTV Smarters (Player Lite / Pro)", "EDGE IPTV"],
      rows: [
        ["Preço", "Grátis, Premium US$ 1,99 (Lite) ou US$ 4,99 (Pro)", "7 dias de teste grátis, depois US$ 3,99/mês ou US$ 19,99/ano"],
        ["Anúncios", "Sim, no Smarters Player Lite", "Não"],
        ["Dados usados para rastrear você (rótulo da App Store)", "Sim, dados de uso", "Nenhum"],
        ["App para Apple TV", "Sim", "Não (AirPlay a partir do iPhone ou iPad)"],
        ["Sistema mínimo", "iOS 15.6", "iOS 17"],
      ],
      note:
        "Dados das páginas da App Store dos EUA em 20 de outubro de 2026. O Smarters é mais barato e funciona na Apple TV e em iPhones mais antigos: se isso é o que mais importa para você, ele é a melhor escolha.",
    },
    explainTitle: "Qual IPTV Smarters é qual?",
    explain: [
      "Vários apps da App Store usam o nome Smarters, de desenvolvedores diferentes: o Smarters Player Lite é publicado pela WHMCS SMARTERS, o Smarters Pro pela Tech Smarters Private Limited, e outros apps também usam o nome. Confira o desenvolvedor na página da App Store para saber qual você tem.",
      "Seja qual for, é um player, como o EDGE IPTV: seus canais vêm do seu provedor IPTV, por um login Xtream Codes ou um link M3U. Por isso a troca leva dois minutos: os mesmos dados funcionam em qualquer player.",
    ],
    faq: [
      {
        q: "O IPTV Smarters é grátis no iPhone?",
        a: "O Smarters Player Lite é grátis com anúncios, com uma versão Premium de US$ 1,99. O Smarters Pro é grátis com uma versão Premium de US$ 4,99. Preços da App Store dos EUA em outubro de 2026.",
      },
      {
        q: "O EDGE IPTV é mais barato que o Smarters?",
        a: "Não. O EDGE IPTV é grátis para baixar com 7 dias de teste, depois custa US$ 3,99 por mês ou US$ 19,99 por ano. Em troca: sem anúncios e sem dados usados para rastrear você.",
      },
      {
        q: "Posso usar meu login do Smarters no EDGE IPTV?",
        a: "Sim. Digite o mesmo login Xtream Codes ou o mesmo link M3U. Se assistir nos dois apps ao mesmo tempo, veja quantas conexões o seu provedor permite.",
      },
      {
        q: "O EDGE IPTV funciona na Apple TV?",
        a: "Não há app para Apple TV. Você pode enviar a imagem do iPhone ou iPad para uma Apple TV por AirPlay, ou para um Chromecast.",
      },
      {
        q: "O EDGE IPTV fornece canais?",
        a: "Não. Como o Smarters, o EDGE IPTV é um player: você traz a lista do seu próprio provedor IPTV.",
      },
    ],
  },

  de: {
    metaTitle: "IPTV-Smarters-Alternative für iPhone & iPad, ohne Werbung",
    metaDescription:
      "Eine Alternative zu IPTV Smarters fürs iPhone? EDGE IPTV öffnet dieselbe Playlist ohne Werbung und ohne Werbe-Tracking, mit EPG-Raster und Chromecast.",
    eyebrow: "Alternative zu IPTV Smarters",
    title: "Eine Alternative zu IPTV Smarters, gebaut für iPhone und iPad",
    intro:
      "Behalte die Playlist, die du in Smarters nutzt, und schau sie in einer App ohne Werbung und ohne Werbe-Tracking. EDGE IPTV kostet mehr als Smarters, und diese Seite sagt klar, was du dafür bekommst.",
    imageAlt: "Startbildschirm von EDGE IPTV auf dem iPhone, ohne Werbung",
    needTitle: "Was du brauchst",
    need: [
      "Ein iPhone oder iPad mit iOS 17 oder neuer",
      "Die Daten, die du in Smarters eingegeben hast: Xtream-Codes-Zugang (Server, Benutzername, Passwort) oder M3U-Link",
    ],
    stepsTitle: "Von Smarters zu EDGE IPTV wechseln",
    steps: [
      {
        title: "Playlist-Daten heraussuchen",
        description:
          "Sie stehen in der Willkommens-E-Mail deines IPTV-Anbieters: ein Xtream-Codes-Zugang oder ein M3U-Link. Es sind dieselben, die du in Smarters eingegeben hast.",
      },
      {
        title: "EDGE IPTV installieren und „Playlist hinzufügen“ tippen",
        description: "Wähle „Xtream Codes“ oder „M3U-Playlist“ und gib dieselben Daten ein.",
      },
      {
        title: "„Playlist hinzufügen“ tippen",
        description:
          "Sender, TV-Guide, Filme und Serien laden in wenigen Sekunden. Smarters kannst du zum Ausprobieren installiert lassen.",
      },
    ],
    featuresTitle: "Was EDGE IPTV dir bietet",
    features: [
      {
        title: "Keine Werbung, kein Werbe-Tracking",
        description:
          "Keine Banner oder Videos zwischen den Sendern. Im App Store gibt EDGE IPTV keine Daten an, die zum Tracking verwendet werden.",
      },
      {
        title: "Gebaut für iPhone und iPad",
        description:
          "Native iOS-Bedienelemente und ein Layout, das sich an den großen iPad-Bildschirm anpasst, statt einer aufgeblasenen Handy-App.",
      },
      {
        title: "TV-Guide im Raster",
        description:
          "Sender an der Seite, Sendungen auf einer Zeitleiste, aus dem EPG deines Anbieters.",
      },
      {
        title: "Chromecast, AirPlay und Bild-in-Bild",
        description:
          "Schick einen Sender auf den Fernseher, oder schau in einem kleinen Fenster über anderen Apps weiter.",
      },
      {
        title: "Downloads für unterwegs",
        description: "Lade Filme und Serienfolgen herunter und schau sie ohne Verbindung.",
      },
      {
        title: "Mehrere Playlists, Suche und Favoriten",
        description:
          "Füge mehrere Anbieter hinzu, pinne deine Sender an und finde jeden Film und jede Serie in einer Sekunde.",
      },
    ],
    comparison: {
      title: "IPTV Smarters und EDGE IPTV im Vergleich",
      headers: ["", "IPTV Smarters (Player Lite / Pro)", "EDGE IPTV"],
      rows: [
        ["Preis", "Kostenlos, Premium 1,99 $ (Lite) oder 4,99 $ (Pro)", "7 Tage gratis, danach 3,99 €/Monat oder 19,99 €/Jahr"],
        ["Werbung", "Ja, in Smarters Player Lite", "Nein"],
        ["Daten, die zum Tracking verwendet werden (App-Store-Angabe)", "Ja, Nutzungsdaten", "Keine"],
        ["Apple-TV-App", "Ja", "Nein (AirPlay vom iPhone oder iPad)"],
        ["Mindestsystem", "iOS 15.6", "iOS 17"],
      ],
      note:
        "Stand der US-App-Store-Seiten vom 20. Oktober 2026 (Smarters-Preise in Dollar). Smarters ist günstiger und läuft auf Apple TV und älteren iPhones: Wenn dir das am wichtigsten ist, passt es besser.",
    },
    explainTitle: "Welches IPTV Smarters ist welches?",
    explain: [
      "Mehrere Apps im App Store tragen den Namen Smarters, von verschiedenen Entwicklern: Smarters Player Lite kommt von WHMCS SMARTERS, Smarters Pro von Tech Smarters Private Limited, und weitere Apps nutzen den Namen ebenfalls. Prüfe auf der App-Store-Seite den Entwickler, um zu wissen, welche du hast.",
      "Egal welche: Es ist ein Player, wie EDGE IPTV. Deine Sender kommen von deinem IPTV-Anbieter, über einen Xtream-Codes-Zugang oder einen M3U-Link. Deshalb dauert der Wechsel zwei Minuten: Dieselben Daten funktionieren in jedem Player.",
    ],
    faq: [
      {
        q: "Ist IPTV Smarters auf dem iPhone kostenlos?",
        a: "Smarters Player Lite ist kostenlos mit Werbung, mit einer Premium-Version für 1,99 $. Smarters Pro ist kostenlos mit einer Premium-Version für 4,99 $. Preise aus dem US-App-Store im Oktober 2026.",
      },
      {
        q: "Ist EDGE IPTV günstiger als Smarters?",
        a: "Nein. EDGE IPTV ist kostenlos herunterzuladen und 7 Tage gratis, danach kostet es 3,99 € im Monat oder 19,99 € im Jahr. Dafür gibt es keine Werbung und keine Daten, die zum Tracking verwendet werden.",
      },
      {
        q: "Kann ich meinen Smarters-Zugang in EDGE IPTV nutzen?",
        a: "Ja. Gib denselben Xtream-Codes-Zugang oder denselben M3U-Link ein. Wenn du in beiden Apps gleichzeitig schaust, prüfe, wie viele Verbindungen dein Anbieter erlaubt.",
      },
      {
        q: "Läuft EDGE IPTV auf Apple TV?",
        a: "Es gibt keine Apple-TV-App. Du kannst das Bild vom iPhone oder iPad per AirPlay auf ein Apple TV schicken, oder auf einen Chromecast.",
      },
      {
        q: "Liefert EDGE IPTV Sender?",
        a: "Nein. Wie Smarters ist EDGE IPTV ein Player: Die Playlist bringst du von deinem eigenen IPTV-Anbieter mit.",
      },
    ],
  },

  ar: {
    metaTitle: "بديل IPTV Smarters للآيفون والآيباد دون إعلانات",
    metaDescription:
      "تبحث عن بديل لـ IPTV Smarters على الآيفون؟ يفتح EDGE IPTV القائمة نفسها دون إعلانات ودون تتبّع إعلاني، مع دليل برامج شبكي وChromecast.",
    eyebrow: "بديل IPTV Smarters",
    title: "بديل لـ IPTV Smarters مصمّم للآيفون والآيباد",
    intro:
      "احتفظ بالقائمة التي تستخدمها في Smarters وشاهدها في تطبيق دون إعلانات ودون تتبّع إعلاني. سعر EDGE IPTV أعلى من Smarters، وهذه الصفحة توضّح بصراحة ما تحصل عليه مقابل ذلك.",
    imageAlt: "الشاشة الرئيسية لـ EDGE IPTV على الآيفون دون إعلانات",
    needTitle: "ما تحتاج إليه",
    need: [
      "آيفون أو آيباد بنظام iOS 17 أو أحدث",
      "البيانات التي أدخلتها في Smarters: حساب Xtream Codes (الخادم واسم المستخدم وكلمة المرور) أو رابط M3U",
    ],
    stepsTitle: "الانتقال من Smarters إلى EDGE IPTV",
    steps: [
      {
        title: "اعثر على بيانات قائمتك",
        description:
          "تجدها في رسالة الترحيب من مزوّد IPTV: حساب Xtream Codes أو رابط M3U. وهي البيانات نفسها التي أدخلتها في Smarters.",
      },
      {
        title: "ثبّت EDGE IPTV واضغط «إضافة قائمة تشغيل»",
        description: "اختر «Xtream Codes» أو «قائمة M3U» وأدخل البيانات نفسها.",
      },
      {
        title: "اضغط «إضافة قائمة التشغيل»",
        description:
          "تُحمَّل قنواتك ودليل البرامج والأفلام والمسلسلات خلال ثوانٍ. يمكنك إبقاء Smarters مثبّتًا أثناء التجربة.",
      },
    ],
    featuresTitle: "ما يقدّمه لك EDGE IPTV",
    features: [
      {
        title: "دون إعلانات ودون تتبّع إعلاني",
        description:
          "لا لافتات ولا فيديوهات بين القنوات. على App Store، لا يصرّح EDGE IPTV بأي بيانات تُستخدم لتتبّعك.",
      },
      {
        title: "مصمّم للآيفون والآيباد",
        description:
          "عناصر تحكّم أصلية من iOS، وتصميم يتكيّف مع شاشة الآيباد الكبيرة بدل تطبيق هاتف مُكبَّر.",
      },
      {
        title: "دليل برامج شبكي",
        description: "القنوات على الجانب والبرامج على خط زمني، من دليل مزوّدك.",
      },
      {
        title: "Chromecast وAirPlay وصورة داخل صورة",
        description: "أرسل القناة إلى التلفاز، أو تابع المشاهدة في نافذة صغيرة فوق التطبيقات الأخرى.",
      },
      {
        title: "تنزيلات للمشاهدة دون اتصال",
        description: "نزّل الأفلام وحلقات المسلسلات وشاهدها دون إنترنت.",
      },
      {
        title: "عدة قوائم وبحث ومفضلة",
        description: "أضف أكثر من مزوّد، وثبّت قنواتك، وابحث عن أي فيلم أو مسلسل في ثانية.",
      },
    ],
    comparison: {
      title: "IPTV Smarters وEDGE IPTV جنبًا إلى جنب",
      headers: ["", "IPTV Smarters (Player Lite / Pro)", "EDGE IPTV"],
      rows: [
        ["السعر", "مجاني، Premium بـ 1.99 دولار (Lite) أو 4.99 دولار (Pro)", "تجربة مجانية 7 أيام، ثم 3.99 دولار شهريًا أو 19.99 دولار سنويًا"],
        ["الإعلانات", "نعم، في Smarters Player Lite", "لا"],
        ["بيانات تُستخدم لتتبّعك (ملصق App Store)", "نعم، بيانات الاستخدام", "لا شيء"],
        ["تطبيق Apple TV", "نعم", "لا (AirPlay من الآيفون أو الآيباد)"],
        ["الحد الأدنى للنظام", "iOS 15.6", "iOS 17"],
      ],
      note:
        "مأخوذ من صفحات App Store الأمريكي بتاريخ 20 أكتوبر 2026. Smarters أرخص ويعمل على Apple TV وعلى أجهزة آيفون أقدم: إن كان هذا هو الأهم لك، فهو الخيار الأنسب.",
    },
    explainTitle: "أيّ IPTV Smarters هو أيّ؟",
    explain: [
      "تحمل عدة تطبيقات في App Store اسم Smarters، من مطوّرين مختلفين: Smarters Player Lite من WHMCS SMARTERS، وSmarters Pro من Tech Smarters Private Limited، وتطبيقات أخرى تستخدم الاسم أيضًا. تحقّق من اسم المطوّر في صفحة App Store لتعرف أيّها لديك.",
      "أيًّا كان، فهو مشغّل مثل EDGE IPTV: قنواتك تأتي من مزوّد IPTV عبر حساب Xtream Codes أو رابط M3U. لهذا يستغرق الانتقال دقيقتين: البيانات نفسها تعمل في أي مشغّل.",
    ],
    faq: [
      {
        q: "هل IPTV Smarters مجاني على الآيفون؟",
        a: "Smarters Player Lite مجاني مع إعلانات، ونسخته Premium بـ 1.99 دولار. وSmarters Pro مجاني ونسخته Premium بـ 4.99 دولار. الأسعار من App Store الأمريكي في أكتوبر 2026.",
      },
      {
        q: "هل EDGE IPTV أرخص من Smarters؟",
        a: "لا. تنزيل EDGE IPTV مجاني مع تجربة 7 أيام، ثم 3.99 دولار شهريًا أو 19.99 دولار سنويًا. في المقابل: لا إعلانات ولا بيانات تُستخدم لتتبّعك.",
      },
      {
        q: "هل يمكنني استخدام بيانات Smarters في EDGE IPTV؟",
        a: "نعم. أدخل حساب Xtream Codes نفسه أو رابط M3U نفسه. إن شاهدت في التطبيقين في الوقت نفسه، فتحقّق من عدد الاتصالات التي يسمح بها مزوّدك.",
      },
      {
        q: "هل يعمل EDGE IPTV على Apple TV؟",
        a: "لا يوجد تطبيق لـ Apple TV. يمكنك إرسال الصورة من الآيفون أو الآيباد إلى Apple TV عبر AirPlay، أو إلى Chromecast.",
      },
      {
        q: "هل يوفّر EDGE IPTV قنوات؟",
        a: "لا. مثل Smarters، EDGE IPTV مشغّل: أنت تُحضر القائمة من مزوّد IPTV الخاص بك.",
      },
    ],
  },

  it: {
    metaTitle: "Alternativa a IPTV Smarters su iPhone e iPad, senza annunci",
    metaDescription:
      "Cerchi un'alternativa a IPTV Smarters su iPhone? EDGE IPTV apre la stessa playlist senza pubblicità né tracciamento pubblicitario, con guida TV a griglia.",
    eyebrow: "Alternativa a IPTV Smarters",
    title: "Un'alternativa a IPTV Smarters pensata per iPhone e iPad",
    intro:
      "Tieni la playlist che usi in Smarters e guardala in un'app senza pubblicità né tracciamento pubblicitario. EDGE IPTV costa più di Smarters, e questa pagina dice chiaramente cosa ottieni in cambio.",
    imageAlt: "Schermata iniziale di EDGE IPTV su iPhone, senza pubblicità",
    needTitle: "Cosa ti serve",
    need: [
      "Un iPhone o iPad con iOS 17 o successivo",
      "I dati che hai inserito in Smarters: accesso Xtream Codes (server, nome utente, password) o link M3U",
    ],
    stepsTitle: "Passa da Smarters a EDGE IPTV",
    steps: [
      {
        title: "Ritrova i dati della playlist",
        description:
          "Sono nell'e-mail di benvenuto del tuo provider IPTV: un accesso Xtream Codes o un link M3U. Sono quelli che hai inserito in Smarters.",
      },
      {
        title: "Installa EDGE IPTV e tocca «Aggiungi una playlist»",
        description: "Scegli «Xtream Codes» o «Playlist M3U» e inserisci gli stessi dati.",
      },
      {
        title: "Tocca «Aggiungi la playlist»",
        description:
          "Canali, guida TV, film e serie si caricano in pochi secondi. Puoi tenere Smarters installato mentre provi.",
      },
    ],
    featuresTitle: "Cosa ti offre EDGE IPTV",
    features: [
      {
        title: "Niente pubblicità né tracciamento pubblicitario",
        description:
          "Nessun banner o video tra un canale e l'altro. Su App Store, EDGE IPTV non dichiara dati usati per tracciarti.",
      },
      {
        title: "Pensato per iPhone e iPad",
        description:
          "Controlli nativi di iOS e un layout che si adatta al grande schermo dell'iPad, invece di un'app per telefono ingrandita.",
      },
      {
        title: "Guida TV a griglia",
        description:
          "I canali di lato e i programmi su una linea temporale, dalla guida del tuo provider.",
      },
      {
        title: "Chromecast, AirPlay e Picture in Picture",
        description:
          "Invia un canale alla TV, o continua a guardare in una piccola finestra sopra le altre app.",
      },
      {
        title: "Download per la visione offline",
        description: "Scarica film ed episodi delle serie e guardali senza connessione.",
      },
      {
        title: "Più playlist, ricerca e preferiti",
        description:
          "Aggiungi più provider, fissa i tuoi canali e trova qualsiasi film o serie in un secondo.",
      },
    ],
    comparison: {
      title: "IPTV Smarters ed EDGE IPTV a confronto",
      headers: ["", "IPTV Smarters (Player Lite / Pro)", "EDGE IPTV"],
      rows: [
        ["Prezzo", "Gratis, Premium 1,99 $ (Lite) o 4,99 $ (Pro)", "7 giorni di prova gratuita, poi 3,99 €/mese o 19,99 €/anno"],
        ["Pubblicità", "Sì, in Smarters Player Lite", "No"],
        ["Dati usati per tracciarti (etichetta App Store)", "Sì, dati di utilizzo", "Nessuno"],
        ["App per Apple TV", "Sì", "No (AirPlay da iPhone o iPad)"],
        ["Sistema minimo", "iOS 15.6", "iOS 17"],
      ],
      note:
        "Dati dalle pagine dell'App Store statunitense del 20 ottobre 2026 (prezzi di Smarters in dollari). Smarters costa meno e funziona su Apple TV e su iPhone più vecchi: se per te conta soprattutto questo, è la scelta migliore.",
    },
    explainTitle: "Quale IPTV Smarters è quale?",
    explain: [
      "Diverse app su App Store portano il nome Smarters, di sviluppatori diversi: Smarters Player Lite è pubblicata da WHMCS SMARTERS, Smarters Pro da Tech Smarters Private Limited, e anche altre app usano il nome. Controlla lo sviluppatore nella pagina di App Store per sapere quale hai.",
      "Qualunque sia, è un lettore, come EDGE IPTV: i tuoi canali arrivano dal provider IPTV, tramite un accesso Xtream Codes o un link M3U. Per questo il passaggio richiede due minuti: gli stessi dati funzionano in qualsiasi lettore.",
    ],
    faq: [
      {
        q: "IPTV Smarters è gratis su iPhone?",
        a: "Smarters Player Lite è gratuita con pubblicità, con una versione Premium da 1,99 $. Smarters Pro è gratuita con una versione Premium da 4,99 $. Prezzi dell'App Store statunitense a ottobre 2026.",
      },
      {
        q: "EDGE IPTV costa meno di Smarters?",
        a: "No. EDGE IPTV si scarica gratis con 7 giorni di prova, poi costa 3,99 € al mese o 19,99 € all'anno. In cambio: niente pubblicità e nessun dato usato per tracciarti.",
      },
      {
        q: "Posso usare i miei dati di Smarters in EDGE IPTV?",
        a: "Sì. Inserisci lo stesso accesso Xtream Codes o lo stesso link M3U. Se guardi in entrambe le app contemporaneamente, verifica quante connessioni consente il tuo provider.",
      },
      {
        q: "EDGE IPTV funziona su Apple TV?",
        a: "Non c'è un'app per Apple TV. Puoi inviare l'immagine da iPhone o iPad a una Apple TV con AirPlay, o a un Chromecast.",
      },
      {
        q: "EDGE IPTV fornisce canali?",
        a: "No. Come Smarters, EDGE IPTV è un lettore: porti tu la playlist del tuo provider IPTV.",
      },
    ],
  },
};
