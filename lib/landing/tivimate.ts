import type { Lang } from "@/lib/i18n";
import type { LandingCopy } from "@/lib/landing/types";

/**
 * "TiviMate for iPhone". TiviMate only exists for Android TV, Fire TV and
 * Android; people who search for it on iPhone want their playlist on iOS.
 *
 * Facts about TiviMate as of October 2026: no iOS version from its developer,
 * recording and catch-up supported. Rows whose TiviMate side could not be
 * confirmed (offline downloads, which tier unlocks what) are left out. Several App Store apps use a
 * look-alike name, so the page tells readers to check the developer rather
 * than naming any of them. EDGE IPTV's missing features (recording, catch-up)
 * are stated plainly: the page must hold up for someone who knows TiviMate.
 */
export const TIVIMATE_COPY: Record<Lang, LandingCopy> = {
  en: {
    metaTitle: "TiviMate for iPhone? The iOS Alternative for Your Playlist",
    metaDescription:
      "TiviMate has no iPhone or iPad app. EDGE IPTV opens the same Xtream Codes or M3U playlist on iOS, with a TV guide grid, Chromecast and AirPlay.",
    eyebrow: "TiviMate alternative for iOS",
    title: "TiviMate for iPhone: keep your playlist, change the app",
    intro:
      "TiviMate is made for Android TV, Fire TV and Android only. On iPhone and iPad, EDGE IPTV opens the same playlist from your provider, with the same login, and gives you a TV guide grid, favourites and casting to your TV.",
    imageAlt: "EDGE IPTV TV guide grid on iPhone",
    needTitle: "What you need",
    need: [
      "An iPhone or iPad on iOS 17 or later",
      "The details you entered in TiviMate: an Xtream Codes login (server, username, password) or an M3U link",
    ],
    stepsTitle: "Move your TiviMate playlist to iPhone",
    steps: [
      {
        title: "Find your playlist details",
        description:
          "They are in the welcome email from your IPTV provider: either an Xtream Codes login or an M3U link. It is the same thing you typed into TiviMate.",
      },
      {
        title: 'Install EDGE IPTV and tap "Add a playlist"',
        description:
          'Choose "Xtream Codes" or "M3U playlist", depending on what you have, and enter the same details.',
      },
      {
        title: 'Tap "Add playlist"',
        description:
          "Your categories, the TV guide, and movies and series appear in a few seconds. Nothing needs to change on your provider's side.",
      },
    ],
    featuresTitle: "What you will recognise from TiviMate",
    features: [
      {
        title: "A TV guide in a grid",
        description:
          "Channels down the side, programmes along a timeline, loaded from your provider's guide.",
      },
      {
        title: "Several playlists in one app",
        description: "Add more than one provider and switch between them.",
      },
      {
        title: "Favourites and search",
        description: "Pin the channels you watch and find any channel, film or series in a second.",
      },
      {
        title: "Audio tracks and subtitles",
        description:
          "Pick the language and subtitles when the stream offers more than one.",
      },
      {
        title: "Chromecast, AirPlay and Picture in Picture",
        description:
          "Send a channel to the TV from your phone, or keep watching in a small window over other apps.",
      },
      {
        title: "Downloads for offline viewing",
        description:
          "Download films and series episodes and watch them without a connection, on a plane or the underground.",
      },
    ],
    comparison: {
      title: "TiviMate and EDGE IPTV side by side",
      headers: ["", "TiviMate", "EDGE IPTV"],
      rows: [
        ["Devices", "Android TV, Fire TV, Android", "iPhone, iPad"],
        ["On the App Store", "No", "Yes"],
        ["Xtream Codes and M3U playlists", "Yes", "Yes"],
        ["TV guide grid", "Yes", "Yes"],
        ["Recording and catch-up", "Yes", "No"],
      ],
      note:
        "TiviMate information as of October 2026. EDGE IPTV does not record or replay past programmes: if you rely on that, keep TiviMate on your Android TV box and use EDGE IPTV on your iPhone and iPad.",
    },
    explainTitle: "Is there an official TiviMate app for iPhone?",
    explain: [
      "No. TiviMate is built for Android TV boxes, Fire TV sticks and Android devices, and its developer has not released an iOS version. When you search \"TiviMate\" on the App Store you will still see apps with a similar name: they are other IPTV players, not TiviMate. Check the developer's name on the App Store page before installing one.",
      "What carries over is your playlist. TiviMate, like EDGE IPTV, is only a player: the channels come from your IPTV provider, through an Xtream Codes login or an M3U link. Enter the same details in EDGE IPTV and you get the same channels on your iPhone and iPad.",
    ],
    faq: [
      {
        q: "Can I install TiviMate on iPhone?",
        a: "No. TiviMate has no iOS version. To watch your IPTV playlist on iPhone or iPad, use an iOS player such as EDGE IPTV with the same login.",
      },
      {
        q: "Can I use the same playlist in TiviMate and EDGE IPTV?",
        a: "Yes, enter the same Xtream Codes login or M3U link. Check how many connections your provider allows: watching on two devices at the same time may need two.",
      },
      {
        q: "Does my TiviMate Premium work in EDGE IPTV?",
        a: "No. TiviMate Premium is a licence for the TiviMate app. EDGE IPTV is free to download with a 7-day free trial, then $3.99 a month or $19.99 a year, with no ads.",
      },
      {
        q: "Does EDGE IPTV record programmes like TiviMate?",
        a: "No, EDGE IPTV does not record and has no catch-up. It does let you download films and series episodes to watch offline.",
      },
      {
        q: "Can I watch on my TV?",
        a: "Yes. EDGE IPTV runs on iPhone and iPad, and sends the picture to your TV with AirPlay (Apple TV or AirPlay TVs) or Chromecast.",
      },
    ],
  },

  fr: {
    metaTitle: "TiviMate sur iPhone ? L'alternative iOS pour votre playlist",
    metaDescription:
      "TiviMate n'existe pas sur iPhone ni iPad. EDGE IPTV ouvre la même playlist Xtream Codes ou M3U sur iOS, avec guide TV en grille, Chromecast et AirPlay.",
    eyebrow: "Alternative à TiviMate sur iOS",
    title: "TiviMate sur iPhone : gardez votre playlist, changez d'app",
    intro:
      "TiviMate est conçu uniquement pour Android TV, Fire TV et Android. Sur iPhone et iPad, EDGE IPTV ouvre la même playlist de votre fournisseur, avec les mêmes identifiants, et vous donne un guide TV en grille, des favoris et la diffusion sur votre TV.",
    imageAlt: "Guide TV en grille d'EDGE IPTV sur iPhone",
    needTitle: "Ce qu'il vous faut",
    need: [
      "Un iPhone ou un iPad sous iOS 17 ou plus récent",
      "Les informations saisies dans TiviMate : identifiants Xtream Codes (serveur, nom d'utilisateur, mot de passe) ou lien M3U",
    ],
    stepsTitle: "Passer votre playlist TiviMate sur iPhone",
    steps: [
      {
        title: "Retrouvez les informations de votre playlist",
        description:
          "Elles figurent dans l'e-mail de bienvenue de votre fournisseur IPTV : des identifiants Xtream Codes ou un lien M3U. Ce sont celles que vous aviez saisies dans TiviMate.",
      },
      {
        title: "Installez EDGE IPTV et touchez « Ajouter une playlist »",
        description:
          "Choisissez « Xtream Codes » ou « Playlist M3U » selon ce que vous avez, et saisissez les mêmes informations.",
      },
      {
        title: "Touchez « Ajouter la playlist »",
        description:
          "Vos catégories, le guide TV, les films et les séries apparaissent en quelques secondes. Rien à changer côté fournisseur.",
      },
    ],
    featuresTitle: "Ce que vous retrouverez de TiviMate",
    features: [
      {
        title: "Un guide TV en grille",
        description:
          "Les chaînes à gauche, les programmes sur une frise horaire, chargés depuis le guide de votre fournisseur.",
      },
      {
        title: "Plusieurs playlists dans une seule app",
        description: "Ajoutez plusieurs fournisseurs et passez de l'un à l'autre.",
      },
      {
        title: "Favoris et recherche",
        description:
          "Épinglez les chaînes que vous regardez et retrouvez une chaîne, un film ou une série en une seconde.",
      },
      {
        title: "Pistes audio et sous-titres",
        description: "Choisissez la langue et les sous-titres quand le flux en propose plusieurs.",
      },
      {
        title: "Chromecast, AirPlay et Picture in Picture",
        description:
          "Envoyez une chaîne sur la TV depuis votre téléphone, ou continuez à regarder dans une petite fenêtre par-dessus vos apps.",
      },
      {
        title: "Téléchargements hors ligne",
        description:
          "Téléchargez films et épisodes de séries, et regardez-les sans connexion, dans le train ou en avion.",
      },
    ],
    comparison: {
      title: "TiviMate et EDGE IPTV côte à côte",
      headers: ["", "TiviMate", "EDGE IPTV"],
      rows: [
        ["Appareils", "Android TV, Fire TV, Android", "iPhone, iPad"],
        ["Sur l'App Store", "Non", "Oui"],
        ["Playlists Xtream Codes et M3U", "Oui", "Oui"],
        ["Guide TV en grille", "Oui", "Oui"],
        ["Enregistrement et replay", "Oui", "Non"],
      ],
      note:
        "Informations sur TiviMate à jour en octobre 2026. EDGE IPTV n'enregistre pas et ne propose pas de replay : si vous en dépendez, gardez TiviMate sur votre box Android TV et utilisez EDGE IPTV sur iPhone et iPad.",
    },
    explainTitle: "Existe-t-il une app TiviMate officielle pour iPhone ?",
    explain: [
      "Non. TiviMate est conçu pour les box Android TV, les clés Fire TV et les appareils Android, et son développeur n'a pas sorti de version iOS. En cherchant « TiviMate » sur l'App Store, vous verrez pourtant des apps au nom proche : ce sont d'autres lecteurs IPTV, pas TiviMate. Vérifiez le nom du développeur sur la fiche App Store avant d'en installer une.",
      "Ce qui vous suit, c'est votre playlist. TiviMate, comme EDGE IPTV, n'est qu'un lecteur : les chaînes viennent de votre fournisseur IPTV, via des identifiants Xtream Codes ou un lien M3U. Saisissez les mêmes informations dans EDGE IPTV et vous retrouvez les mêmes chaînes sur iPhone et iPad.",
    ],
    faq: [
      {
        q: "Peut-on installer TiviMate sur iPhone ?",
        a: "Non. TiviMate n'a pas de version iOS. Pour regarder votre playlist IPTV sur iPhone ou iPad, utilisez un lecteur iOS comme EDGE IPTV avec les mêmes identifiants.",
      },
      {
        q: "Puis-je utiliser la même playlist dans TiviMate et EDGE IPTV ?",
        a: "Oui, saisissez les mêmes identifiants Xtream Codes ou le même lien M3U. Vérifiez le nombre de connexions autorisées par votre fournisseur : regarder sur deux appareils en même temps peut en demander deux.",
      },
      {
        q: "Mon TiviMate Premium fonctionne-t-il dans EDGE IPTV ?",
        a: "Non. TiviMate Premium est une licence de l'app TiviMate. EDGE IPTV est gratuit au téléchargement avec 7 jours d'essai gratuit, puis 3,99 € par mois ou 19,99 € par an, sans publicité.",
      },
      {
        q: "EDGE IPTV enregistre-t-il les programmes comme TiviMate ?",
        a: "Non, EDGE IPTV n'enregistre pas et n'a pas de replay. Il permet en revanche de télécharger films et épisodes de séries pour les regarder hors ligne.",
      },
      {
        q: "Puis-je regarder sur ma TV ?",
        a: "Oui. EDGE IPTV fonctionne sur iPhone et iPad, et envoie l'image sur votre TV par AirPlay (Apple TV ou TV compatible AirPlay) ou par Chromecast.",
      },
    ],
  },

  es: {
    metaTitle: "¿TiviMate en iPhone? La alternativa iOS para tu lista",
    metaDescription:
      "TiviMate no tiene app para iPhone ni iPad. EDGE IPTV abre la misma lista Xtream Codes o M3U en iOS, con guía de TV en cuadrícula, Chromecast y AirPlay.",
    eyebrow: "Alternativa a TiviMate en iOS",
    title: "TiviMate en iPhone: conserva tu lista, cambia de app",
    intro:
      "TiviMate está hecho solo para Android TV, Fire TV y Android. En iPhone y iPad, EDGE IPTV abre la misma lista de tu proveedor, con los mismos datos de acceso, y te ofrece una guía de TV en cuadrícula, favoritos y envío a la tele.",
    imageAlt: "Guía de TV en cuadrícula de EDGE IPTV en iPhone",
    needTitle: "Lo que necesitas",
    need: [
      "Un iPhone o iPad con iOS 17 o posterior",
      "Los datos que pusiste en TiviMate: acceso Xtream Codes (servidor, usuario, contraseña) o enlace M3U",
    ],
    stepsTitle: "Pasa tu lista de TiviMate al iPhone",
    steps: [
      {
        title: "Busca los datos de tu lista",
        description:
          "Están en el correo de bienvenida de tu proveedor IPTV: un acceso Xtream Codes o un enlace M3U. Son los mismos que escribiste en TiviMate.",
      },
      {
        title: "Instala EDGE IPTV y toca «Añadir una playlist»",
        description:
          "Elige «Xtream Codes» o «Playlist M3U» según lo que tengas, e introduce los mismos datos.",
      },
      {
        title: "Toca «Añadir la playlist»",
        description:
          "Tus categorías, la guía de TV, las películas y las series aparecen en unos segundos. No hay que cambiar nada con tu proveedor.",
      },
    ],
    featuresTitle: "Lo que reconocerás de TiviMate",
    features: [
      {
        title: "Guía de TV en cuadrícula",
        description:
          "Los canales a un lado y los programas en una línea de tiempo, cargados desde la guía de tu proveedor.",
      },
      {
        title: "Varias listas en una sola app",
        description: "Añade más de un proveedor y cambia entre ellos.",
      },
      {
        title: "Favoritos y búsqueda",
        description:
          "Fija los canales que ves y encuentra cualquier canal, película o serie en un segundo.",
      },
      {
        title: "Pistas de audio y subtítulos",
        description: "Elige idioma y subtítulos cuando el stream ofrece varios.",
      },
      {
        title: "Chromecast, AirPlay e Imagen en Imagen",
        description:
          "Envía un canal a la tele desde el móvil, o sigue viendo en una ventana pequeña sobre otras apps.",
      },
      {
        title: "Descargas para ver sin conexión",
        description:
          "Descarga películas y episodios de series y míralos sin conexión, en el avión o en el metro.",
      },
    ],
    comparison: {
      title: "TiviMate y EDGE IPTV, frente a frente",
      headers: ["", "TiviMate", "EDGE IPTV"],
      rows: [
        ["Dispositivos", "Android TV, Fire TV, Android", "iPhone, iPad"],
        ["En la App Store", "No", "Sí"],
        ["Listas Xtream Codes y M3U", "Sí", "Sí"],
        ["Guía de TV en cuadrícula", "Sí", "Sí"],
        ["Grabación y catch-up", "Sí", "No"],
      ],
      note:
        "Información sobre TiviMate a octubre de 2026. EDGE IPTV no graba ni permite ver programas pasados: si lo necesitas, mantén TiviMate en tu box Android TV y usa EDGE IPTV en iPhone y iPad.",
    },
    explainTitle: "¿Hay una app oficial de TiviMate para iPhone?",
    explain: [
      "No. TiviMate está pensado para boxes Android TV, sticks Fire TV y dispositivos Android, y su desarrollador no ha lanzado versión para iOS. Aun así, si buscas «TiviMate» en la App Store verás apps con un nombre parecido: son otros reproductores IPTV, no TiviMate. Comprueba el nombre del desarrollador en la ficha de la App Store antes de instalar una.",
      "Lo que sí te llevas es tu lista. TiviMate, como EDGE IPTV, es solo un reproductor: los canales vienen de tu proveedor IPTV, mediante un acceso Xtream Codes o un enlace M3U. Introduce los mismos datos en EDGE IPTV y tendrás los mismos canales en iPhone y iPad.",
    ],
    faq: [
      {
        q: "¿Se puede instalar TiviMate en iPhone?",
        a: "No. TiviMate no tiene versión para iOS. Para ver tu lista IPTV en iPhone o iPad, usa un reproductor iOS como EDGE IPTV con los mismos datos de acceso.",
      },
      {
        q: "¿Puedo usar la misma lista en TiviMate y en EDGE IPTV?",
        a: "Sí, introduce el mismo acceso Xtream Codes o el mismo enlace M3U. Revisa cuántas conexiones permite tu proveedor: ver en dos dispositivos a la vez puede requerir dos.",
      },
      {
        q: "¿Mi TiviMate Premium sirve en EDGE IPTV?",
        a: "No. TiviMate Premium es una licencia de la app TiviMate. EDGE IPTV se descarga gratis con 7 días de prueba, y después cuesta 3,99 € al mes o 19,99 € al año, sin anuncios.",
      },
      {
        q: "¿EDGE IPTV graba programas como TiviMate?",
        a: "No, EDGE IPTV no graba ni tiene catch-up. Sí permite descargar películas y episodios de series para verlos sin conexión.",
      },
      {
        q: "¿Puedo verlo en la tele?",
        a: "Sí. EDGE IPTV funciona en iPhone y iPad y envía la imagen a la tele por AirPlay (Apple TV o teles compatibles) o por Chromecast.",
      },
    ],
  },

  pt: {
    metaTitle: "TiviMate no iPhone? A alternativa iOS para a sua lista",
    metaDescription:
      "O TiviMate não tem app para iPhone nem iPad. O EDGE IPTV abre a mesma lista Xtream Codes ou M3U no iOS, com guia de TV em grade, Chromecast e AirPlay.",
    eyebrow: "Alternativa ao TiviMate no iOS",
    title: "TiviMate no iPhone: mantenha a sua lista, troque de app",
    intro:
      "O TiviMate é feito apenas para Android TV, Fire TV e Android. No iPhone e iPad, o EDGE IPTV abre a mesma lista do seu provedor, com o mesmo login, e oferece um guia de TV em grade, favoritos e transmissão para a TV.",
    imageAlt: "Guia de TV em grade do EDGE IPTV no iPhone",
    needTitle: "O que você precisa",
    need: [
      "Um iPhone ou iPad com iOS 17 ou posterior",
      "Os dados que você colocou no TiviMate: login Xtream Codes (servidor, usuário, senha) ou link M3U",
    ],
    stepsTitle: "Leve a sua lista do TiviMate para o iPhone",
    steps: [
      {
        title: "Encontre os dados da sua lista",
        description:
          "Eles estão no e-mail de boas-vindas do seu provedor IPTV: um login Xtream Codes ou um link M3U. São os mesmos que você digitou no TiviMate.",
      },
      {
        title: "Instale o EDGE IPTV e toque em «Adicionar uma playlist»",
        description:
          "Escolha «Xtream Codes» ou «Playlist M3U» conforme o que você tem, e digite os mesmos dados.",
      },
      {
        title: "Toque em «Adicionar a playlist»",
        description:
          "Suas categorias, o guia de TV, os filmes e as séries aparecem em poucos segundos. Nada muda do lado do provedor.",
      },
    ],
    featuresTitle: "O que você vai reconhecer do TiviMate",
    features: [
      {
        title: "Guia de TV em grade",
        description:
          "Os canais de um lado e os programas numa linha do tempo, carregados do guia do seu provedor.",
      },
      {
        title: "Várias listas num só app",
        description: "Adicione mais de um provedor e alterne entre eles.",
      },
      {
        title: "Favoritos e busca",
        description:
          "Fixe os canais que você assiste e encontre qualquer canal, filme ou série num segundo.",
      },
      {
        title: "Faixas de áudio e legendas",
        description: "Escolha o idioma e as legendas quando o stream oferece mais de uma opção.",
      },
      {
        title: "Chromecast, AirPlay e Picture in Picture",
        description:
          "Envie um canal para a TV pelo celular, ou continue assistindo numa janela pequena sobre outros apps.",
      },
      {
        title: "Downloads para assistir offline",
        description:
          "Baixe filmes e episódios de séries e assista sem conexão, no avião ou no metrô.",
      },
    ],
    comparison: {
      title: "TiviMate e EDGE IPTV lado a lado",
      headers: ["", "TiviMate", "EDGE IPTV"],
      rows: [
        ["Aparelhos", "Android TV, Fire TV, Android", "iPhone, iPad"],
        ["Na App Store", "Não", "Sim"],
        ["Listas Xtream Codes e M3U", "Sim", "Sim"],
        ["Guia de TV em grade", "Sim", "Sim"],
        ["Gravação e catch-up", "Sim", "Não"],
      ],
      note:
        "Informações sobre o TiviMate em outubro de 2026. O EDGE IPTV não grava nem permite rever programas passados: se você depende disso, mantenha o TiviMate no seu box Android TV e use o EDGE IPTV no iPhone e iPad.",
    },
    explainTitle: "Existe um app oficial do TiviMate para iPhone?",
    explain: [
      "Não. O TiviMate é feito para boxes Android TV, sticks Fire TV e aparelhos Android, e o desenvolvedor não lançou versão para iOS. Mesmo assim, ao buscar «TiviMate» na App Store você verá apps com nome parecido: são outros players IPTV, não o TiviMate. Confira o nome do desenvolvedor na página da App Store antes de instalar.",
      "O que vai com você é a sua lista. O TiviMate, como o EDGE IPTV, é só um player: os canais vêm do seu provedor IPTV, por um login Xtream Codes ou um link M3U. Digite os mesmos dados no EDGE IPTV e você terá os mesmos canais no iPhone e no iPad.",
    ],
    faq: [
      {
        q: "Dá para instalar o TiviMate no iPhone?",
        a: "Não. O TiviMate não tem versão para iOS. Para assistir à sua lista IPTV no iPhone ou iPad, use um player iOS como o EDGE IPTV com o mesmo login.",
      },
      {
        q: "Posso usar a mesma lista no TiviMate e no EDGE IPTV?",
        a: "Sim, digite o mesmo login Xtream Codes ou o mesmo link M3U. Veja quantas conexões o seu provedor permite: assistir em dois aparelhos ao mesmo tempo pode exigir duas.",
      },
      {
        q: "Meu TiviMate Premium funciona no EDGE IPTV?",
        a: "Não. O TiviMate Premium é uma licença do app TiviMate. O EDGE IPTV é grátis para baixar com 7 dias de teste, depois custa US$ 3,99 por mês ou US$ 19,99 por ano, sem anúncios.",
      },
      {
        q: "O EDGE IPTV grava programas como o TiviMate?",
        a: "Não, o EDGE IPTV não grava e não tem catch-up. Mas permite baixar filmes e episódios de séries para assistir offline.",
      },
      {
        q: "Posso assistir na TV?",
        a: "Sim. O EDGE IPTV funciona no iPhone e no iPad e envia a imagem para a TV por AirPlay (Apple TV ou TVs compatíveis) ou por Chromecast.",
      },
    ],
  },

  de: {
    metaTitle: "TiviMate fürs iPhone? Die iOS-Alternative für deine Playlist",
    metaDescription:
      "TiviMate gibt es nicht für iPhone und iPad. EDGE IPTV öffnet dieselbe Xtream-Codes- oder M3U-Playlist unter iOS, mit EPG-Raster, Chromecast und AirPlay.",
    eyebrow: "TiviMate-Alternative für iOS",
    title: "TiviMate fürs iPhone: Playlist behalten, App wechseln",
    intro:
      "TiviMate gibt es nur für Android TV, Fire TV und Android. Auf iPhone und iPad öffnet EDGE IPTV dieselbe Playlist deines Anbieters mit denselben Zugangsdaten und bietet dir einen TV-Guide im Raster, Favoriten und Streaming auf den Fernseher.",
    imageAlt: "TV-Guide im Raster von EDGE IPTV auf dem iPhone",
    needTitle: "Was du brauchst",
    need: [
      "Ein iPhone oder iPad mit iOS 17 oder neuer",
      "Die Daten, die du in TiviMate eingegeben hast: Xtream-Codes-Zugang (Server, Benutzername, Passwort) oder M3U-Link",
    ],
    stepsTitle: "So kommt deine TiviMate-Playlist aufs iPhone",
    steps: [
      {
        title: "Playlist-Daten heraussuchen",
        description:
          "Sie stehen in der Willkommens-E-Mail deines IPTV-Anbieters: ein Xtream-Codes-Zugang oder ein M3U-Link. Es sind dieselben Daten, die du in TiviMate eingegeben hast.",
      },
      {
        title: "EDGE IPTV installieren und „Playlist hinzufügen“ tippen",
        description:
          "Wähle „Xtream Codes“ oder „M3U-Playlist“, je nachdem, was du hast, und gib dieselben Daten ein.",
      },
      {
        title: "„Playlist hinzufügen“ tippen",
        description:
          "Kategorien, TV-Guide, Filme und Serien erscheinen nach wenigen Sekunden. Beim Anbieter musst du nichts ändern.",
      },
    ],
    featuresTitle: "Was du von TiviMate wiedererkennst",
    features: [
      {
        title: "TV-Guide im Raster",
        description:
          "Sender an der Seite, Sendungen auf einer Zeitleiste, geladen aus dem EPG deines Anbieters.",
      },
      {
        title: "Mehrere Playlists in einer App",
        description: "Füge mehr als einen Anbieter hinzu und wechsle zwischen ihnen.",
      },
      {
        title: "Favoriten und Suche",
        description:
          "Pinne deine Sender an und finde jeden Sender, Film oder jede Serie in einer Sekunde.",
      },
      {
        title: "Tonspuren und Untertitel",
        description: "Wähle Sprache und Untertitel, wenn der Stream mehrere anbietet.",
      },
      {
        title: "Chromecast, AirPlay und Bild-in-Bild",
        description:
          "Schick einen Sender vom Handy auf den Fernseher, oder schau in einem kleinen Fenster über anderen Apps weiter.",
      },
      {
        title: "Downloads für unterwegs",
        description:
          "Lade Filme und Serienfolgen herunter und schau sie ohne Verbindung, im Zug oder im Flugzeug.",
      },
    ],
    comparison: {
      title: "TiviMate und EDGE IPTV im Vergleich",
      headers: ["", "TiviMate", "EDGE IPTV"],
      rows: [
        ["Geräte", "Android TV, Fire TV, Android", "iPhone, iPad"],
        ["Im App Store", "Nein", "Ja"],
        ["Xtream-Codes- und M3U-Playlists", "Ja", "Ja"],
        ["TV-Guide im Raster", "Ja", "Ja"],
        ["Aufnahme und Catch-up", "Ja", "Nein"],
      ],
      note:
        "Angaben zu TiviMate mit Stand Oktober 2026. EDGE IPTV nimmt nicht auf und bietet kein Catch-up: Wenn du darauf angewiesen bist, behalte TiviMate auf deiner Android-TV-Box und nutze EDGE IPTV auf iPhone und iPad.",
    },
    explainTitle: "Gibt es eine offizielle TiviMate-App fürs iPhone?",
    explain: [
      "Nein. TiviMate ist für Android-TV-Boxen, Fire-TV-Sticks und Android-Geräte gebaut, und der Entwickler hat keine iOS-Version veröffentlicht. Wenn du im App Store nach „TiviMate“ suchst, tauchen trotzdem Apps mit ähnlichem Namen auf: Das sind andere IPTV-Player, nicht TiviMate. Prüfe vor der Installation den Namen des Entwicklers auf der App-Store-Seite.",
      "Was du mitnimmst, ist deine Playlist. TiviMate ist wie EDGE IPTV nur ein Player: Die Sender kommen von deinem IPTV-Anbieter, über einen Xtream-Codes-Zugang oder einen M3U-Link. Gib dieselben Daten in EDGE IPTV ein, und du hast dieselben Sender auf iPhone und iPad.",
    ],
    faq: [
      {
        q: "Kann man TiviMate auf dem iPhone installieren?",
        a: "Nein. TiviMate hat keine iOS-Version. Um deine IPTV-Playlist auf iPhone oder iPad zu schauen, nutze einen iOS-Player wie EDGE IPTV mit denselben Zugangsdaten.",
      },
      {
        q: "Kann ich dieselbe Playlist in TiviMate und EDGE IPTV nutzen?",
        a: "Ja, gib denselben Xtream-Codes-Zugang oder denselben M3U-Link ein. Prüfe, wie viele Verbindungen dein Anbieter erlaubt: Auf zwei Geräten gleichzeitig zu schauen, kann zwei Verbindungen brauchen.",
      },
      {
        q: "Funktioniert mein TiviMate Premium in EDGE IPTV?",
        a: "Nein. TiviMate Premium ist eine Lizenz für die TiviMate-App. EDGE IPTV ist kostenlos herunterzuladen und 7 Tage gratis, danach kostet es 3,99 € im Monat oder 19,99 € im Jahr, ohne Werbung.",
      },
      {
        q: "Nimmt EDGE IPTV Sendungen auf wie TiviMate?",
        a: "Nein, EDGE IPTV nimmt nicht auf und hat kein Catch-up. Du kannst aber Filme und Serienfolgen herunterladen und offline schauen.",
      },
      {
        q: "Kann ich auf dem Fernseher schauen?",
        a: "Ja. EDGE IPTV läuft auf iPhone und iPad und schickt das Bild per AirPlay (Apple TV oder AirPlay-Fernseher) oder Chromecast auf den Fernseher.",
      },
    ],
  },

  ar: {
    metaTitle: "TiviMate على الآيفون؟ البديل على iOS لقائمتك",
    metaDescription:
      "لا يتوفر TiviMate على الآيفون أو الآيباد. يفتح EDGE IPTV قائمة Xtream Codes أو M3U نفسها على iOS، مع دليل برامج شبكي وChromecast وAirPlay.",
    eyebrow: "بديل TiviMate على iOS",
    title: "TiviMate على الآيفون: احتفظ بقائمتك وغيّر التطبيق",
    intro:
      "صُمّم TiviMate لأجهزة Android TV وFire TV وAndroid فقط. على الآيفون والآيباد، يفتح EDGE IPTV القائمة نفسها من مزوّدك ببيانات الدخول نفسها، ويمنحك دليل برامج شبكيًا ومفضلات وإمكانية البث إلى التلفاز.",
    imageAlt: "دليل البرامج الشبكي في EDGE IPTV على الآيفون",
    needTitle: "ما تحتاج إليه",
    need: [
      "آيفون أو آيباد بنظام iOS 17 أو أحدث",
      "البيانات التي أدخلتها في TiviMate: حساب Xtream Codes (الخادم واسم المستخدم وكلمة المرور) أو رابط M3U",
    ],
    stepsTitle: "انقل قائمة TiviMate إلى الآيفون",
    steps: [
      {
        title: "اعثر على بيانات قائمتك",
        description:
          "تجدها في رسالة الترحيب من مزوّد IPTV: حساب Xtream Codes أو رابط M3U. وهي البيانات نفسها التي أدخلتها في TiviMate.",
      },
      {
        title: "ثبّت EDGE IPTV واضغط «إضافة قائمة تشغيل»",
        description: "اختر «Xtream Codes» أو «قائمة M3U» حسب ما لديك، وأدخل البيانات نفسها.",
      },
      {
        title: "اضغط «إضافة قائمة التشغيل»",
        description:
          "تظهر الفئات ودليل البرامج والأفلام والمسلسلات خلال ثوانٍ. لا حاجة لتغيير أي شيء لدى المزوّد.",
      },
    ],
    featuresTitle: "ما ستجده مألوفًا من TiviMate",
    features: [
      {
        title: "دليل برامج شبكي",
        description: "القنوات على الجانب والبرامج على خط زمني، محمّلة من دليل مزوّدك.",
      },
      {
        title: "عدة قوائم في تطبيق واحد",
        description: "أضف أكثر من مزوّد وانتقل بينها.",
      },
      {
        title: "المفضلة والبحث",
        description: "ثبّت القنوات التي تشاهدها وابحث عن أي قناة أو فيلم أو مسلسل في ثانية.",
      },
      {
        title: "المسارات الصوتية والترجمة",
        description: "اختر اللغة والترجمة عندما يوفّر البث أكثر من خيار.",
      },
      {
        title: "Chromecast وAirPlay وصورة داخل صورة",
        description: "أرسل القناة إلى التلفاز من هاتفك، أو تابع المشاهدة في نافذة صغيرة فوق التطبيقات الأخرى.",
      },
      {
        title: "تنزيلات للمشاهدة دون اتصال",
        description: "نزّل الأفلام وحلقات المسلسلات وشاهدها دون إنترنت، في الطائرة أو المترو.",
      },
    ],
    comparison: {
      title: "TiviMate وEDGE IPTV جنبًا إلى جنب",
      headers: ["", "TiviMate", "EDGE IPTV"],
      rows: [
        ["الأجهزة", "Android TV وFire TV وAndroid", "الآيفون والآيباد"],
        ["على App Store", "لا", "نعم"],
        ["قوائم Xtream Codes وM3U", "نعم", "نعم"],
        ["دليل برامج شبكي", "نعم", "نعم"],
        ["التسجيل والمشاهدة اللاحقة", "نعم", "لا"],
      ],
      note:
        "معلومات TiviMate محدّثة في أكتوبر 2026. لا يسجّل EDGE IPTV البرامج ولا يتيح مشاهدتها لاحقًا: إن كنت تعتمد على ذلك، فاحتفظ بـ TiviMate على جهاز Android TV واستخدم EDGE IPTV على الآيفون والآيباد.",
    },
    explainTitle: "هل يوجد تطبيق TiviMate رسمي للآيفون؟",
    explain: [
      "لا. صُمّم TiviMate لأجهزة Android TV وعصي Fire TV وأجهزة Android، ولم يُصدر مطوّره نسخة لنظام iOS. ومع ذلك، عند البحث عن «TiviMate» في App Store ستظهر تطبيقات بأسماء مشابهة: إنها مشغّلات IPTV أخرى، وليست TiviMate. تحقّق من اسم المطوّر في صفحة التطبيق قبل التثبيت.",
      "ما ينتقل معك هو قائمتك. فـ TiviMate، مثل EDGE IPTV، مجرد مشغّل: القنوات تأتي من مزوّد IPTV عبر حساب Xtream Codes أو رابط M3U. أدخل البيانات نفسها في EDGE IPTV لتحصل على القنوات نفسها على الآيفون والآيباد.",
    ],
    faq: [
      {
        q: "هل يمكن تثبيت TiviMate على الآيفون؟",
        a: "لا. لا توجد نسخة iOS من TiviMate. لمشاهدة قائمة IPTV على الآيفون أو الآيباد، استخدم مشغّلًا لنظام iOS مثل EDGE IPTV ببيانات الدخول نفسها.",
      },
      {
        q: "هل يمكنني استخدام القائمة نفسها في TiviMate وEDGE IPTV؟",
        a: "نعم، أدخل حساب Xtream Codes نفسه أو رابط M3U نفسه. تحقّق من عدد الاتصالات التي يسمح بها مزوّدك: المشاهدة على جهازين في الوقت نفسه قد تتطلب اتصالين.",
      },
      {
        q: "هل يعمل اشتراك TiviMate Premium في EDGE IPTV؟",
        a: "لا. TiviMate Premium ترخيص خاص بتطبيق TiviMate. تنزيل EDGE IPTV مجاني مع تجربة 7 أيام، ثم 3.99 دولار شهريًا أو 19.99 دولار سنويًا، دون إعلانات.",
      },
      {
        q: "هل يسجّل EDGE IPTV البرامج مثل TiviMate؟",
        a: "لا، لا يسجّل EDGE IPTV البرامج ولا يوفّر المشاهدة اللاحقة. لكنه يتيح تنزيل الأفلام وحلقات المسلسلات لمشاهدتها دون اتصال.",
      },
      {
        q: "هل يمكنني المشاهدة على التلفاز؟",
        a: "نعم. يعمل EDGE IPTV على الآيفون والآيباد ويرسل الصورة إلى التلفاز عبر AirPlay (Apple TV أو أجهزة التلفاز المتوافقة) أو Chromecast.",
      },
    ],
  },

  it: {
    metaTitle: "TiviMate su iPhone? L'alternativa iOS per la tua playlist",
    metaDescription:
      "TiviMate non esiste per iPhone e iPad. EDGE IPTV apre la stessa playlist Xtream Codes o M3U su iOS, con guida TV a griglia, Chromecast e AirPlay.",
    eyebrow: "Alternativa a TiviMate su iOS",
    title: "TiviMate su iPhone: tieni la playlist, cambia app",
    intro:
      "TiviMate è fatto solo per Android TV, Fire TV e Android. Su iPhone e iPad, EDGE IPTV apre la stessa playlist del tuo provider, con gli stessi dati di accesso, e ti offre una guida TV a griglia, i preferiti e l'invio alla TV.",
    imageAlt: "Guida TV a griglia di EDGE IPTV su iPhone",
    needTitle: "Cosa ti serve",
    need: [
      "Un iPhone o iPad con iOS 17 o successivo",
      "I dati che hai inserito in TiviMate: accesso Xtream Codes (server, nome utente, password) o link M3U",
    ],
    stepsTitle: "Porta la tua playlist di TiviMate su iPhone",
    steps: [
      {
        title: "Ritrova i dati della playlist",
        description:
          "Sono nell'e-mail di benvenuto del tuo provider IPTV: un accesso Xtream Codes o un link M3U. Sono gli stessi che hai inserito in TiviMate.",
      },
      {
        title: "Installa EDGE IPTV e tocca «Aggiungi una playlist»",
        description:
          "Scegli «Xtream Codes» o «Playlist M3U» in base a ciò che hai, e inserisci gli stessi dati.",
      },
      {
        title: "Tocca «Aggiungi la playlist»",
        description:
          "Categorie, guida TV, film e serie compaiono in pochi secondi. Non devi cambiare nulla con il provider.",
      },
    ],
    featuresTitle: "Cosa ritroverai di TiviMate",
    features: [
      {
        title: "Guida TV a griglia",
        description:
          "I canali di lato e i programmi su una linea temporale, caricati dalla guida del tuo provider.",
      },
      {
        title: "Più playlist in un'unica app",
        description: "Aggiungi più di un provider e passa dall'uno all'altro.",
      },
      {
        title: "Preferiti e ricerca",
        description:
          "Fissa i canali che guardi e trova qualsiasi canale, film o serie in un secondo.",
      },
      {
        title: "Tracce audio e sottotitoli",
        description: "Scegli lingua e sottotitoli quando lo stream ne offre più di uno.",
      },
      {
        title: "Chromecast, AirPlay e Picture in Picture",
        description:
          "Invia un canale alla TV dal telefono, o continua a guardare in una piccola finestra sopra le altre app.",
      },
      {
        title: "Download per la visione offline",
        description:
          "Scarica film ed episodi delle serie e guardali senza connessione, in aereo o in metro.",
      },
    ],
    comparison: {
      title: "TiviMate ed EDGE IPTV a confronto",
      headers: ["", "TiviMate", "EDGE IPTV"],
      rows: [
        ["Dispositivi", "Android TV, Fire TV, Android", "iPhone, iPad"],
        ["Su App Store", "No", "Sì"],
        ["Playlist Xtream Codes e M3U", "Sì", "Sì"],
        ["Guida TV a griglia", "Sì", "Sì"],
        ["Registrazione e catch-up", "Sì", "No"],
      ],
      note:
        "Informazioni su TiviMate aggiornate a ottobre 2026. EDGE IPTV non registra e non permette di rivedere i programmi passati: se ti servono, tieni TiviMate sul box Android TV e usa EDGE IPTV su iPhone e iPad.",
    },
    explainTitle: "Esiste un'app ufficiale di TiviMate per iPhone?",
    explain: [
      "No. TiviMate è pensato per box Android TV, chiavette Fire TV e dispositivi Android, e il suo sviluppatore non ha pubblicato una versione iOS. Cercando «TiviMate» su App Store vedrai comunque app con un nome simile: sono altri lettori IPTV, non TiviMate. Controlla il nome dello sviluppatore nella pagina di App Store prima di installarne una.",
      "Quello che ti porti dietro è la playlist. TiviMate, come EDGE IPTV, è solo un lettore: i canali arrivano dal tuo provider IPTV, tramite un accesso Xtream Codes o un link M3U. Inserisci gli stessi dati in EDGE IPTV e avrai gli stessi canali su iPhone e iPad.",
    ],
    faq: [
      {
        q: "Si può installare TiviMate su iPhone?",
        a: "No. TiviMate non ha una versione iOS. Per guardare la tua playlist IPTV su iPhone o iPad, usa un lettore iOS come EDGE IPTV con gli stessi dati di accesso.",
      },
      {
        q: "Posso usare la stessa playlist in TiviMate ed EDGE IPTV?",
        a: "Sì, inserisci lo stesso accesso Xtream Codes o lo stesso link M3U. Verifica quante connessioni consente il tuo provider: guardare su due dispositivi contemporaneamente può richiederne due.",
      },
      {
        q: "Il mio TiviMate Premium funziona in EDGE IPTV?",
        a: "No. TiviMate Premium è una licenza dell'app TiviMate. EDGE IPTV si scarica gratis con 7 giorni di prova, poi costa 3,99 € al mese o 19,99 € all'anno, senza pubblicità.",
      },
      {
        q: "EDGE IPTV registra i programmi come TiviMate?",
        a: "No, EDGE IPTV non registra e non ha catch-up. Permette però di scaricare film ed episodi delle serie per guardarli offline.",
      },
      {
        q: "Posso guardare sulla TV?",
        a: "Sì. EDGE IPTV funziona su iPhone e iPad e invia l'immagine alla TV con AirPlay (Apple TV o TV compatibili) o Chromecast.",
      },
    ],
  },
};
