import type { Lang } from "@/lib/i18n";
import type { LandingCopy } from "@/lib/landing/types";

/**
 * "IPTV player for iPad". Same facts as the home page's iPad section
 * (components/ipad-section.tsx), developed for the people who search for it.
 */
export const IPAD_COPY: Record<Lang, LandingCopy> = {
  en: {
    metaTitle: "IPTV Player for iPad: Live TV, Movies & TV Guide",
    metaDescription:
      "EDGE IPTV is an IPTV player designed for the iPad screen: a TV guide showing nine channels at once, Split View, Picture in Picture, Chromecast and AirPlay.",
    eyebrow: "iPad & iPadOS 17+",
    title: "An IPTV player designed for the iPad",
    intro:
      "Most IPTV apps on iPad are iPhone apps blown up to a bigger screen. EDGE IPTV changes its layout instead: a TV guide you can read at a glance, posters at nearly twice the size, and a series next to its episode list.",
    imageAlt: "The EDGE IPTV TV guide on iPad, nine channels and four hours of programmes at once",
    needTitle: "What you need",
    need: [
      "An iPad on iPadOS 17 or later: iPad Pro (2nd gen), iPad Air (3rd gen), iPad (6th gen), iPad mini (5th gen) or newer",
      "An M3U link or Xtream Codes login from your IPTV provider (EDGE IPTV is the player, it does not sell channels)",
    ],
    stepsTitle: "Set up IPTV on your iPad in under 2 minutes",
    steps: [
      {
        title: "Install EDGE IPTV",
        description:
          "Free on the App Store, with a 7-day free trial. One subscription covers your iPad and your iPhone.",
      },
      {
        title: 'Tap "Add a playlist"',
        description: "Choose Xtream Codes or M3U playlist and enter what your provider gave you.",
      },
      {
        title: "Start watching",
        description: "Channels, movies and series load on their own, with the TV guide.",
      },
    ],
    featuresTitle: "What the big screen changes",
    features: [
      {
        title: "A TV guide you can actually read",
        description:
          "Nine channels and four hours of programmes on screen at once, so you can scan the evening without scrolling channel by channel.",
      },
      {
        title: "Posters and episodes side by side",
        description:
          "Film posters are drawn at nearly twice the size, and a series sits next to its season and episode list instead of below it.",
      },
      {
        title: "Split View and Slide Over",
        description:
          "Run EDGE IPTV next to another app, in portrait or landscape, in any orientation.",
      },
      {
        title: "Picture in Picture",
        description: "Keep a match in a corner while you answer an email or look something up.",
      },
      {
        title: "Chromecast and AirPlay",
        description: "Send the stream to the TV when the iPad screen isn't enough.",
      },
      {
        title: "Downloads for the road",
        description: "Save films and episodes over Wi-Fi and watch them offline on a trip.",
      },
    ],
    explainTitle: "One app, one subscription, iPhone and iPad",
    explain: [
      "EDGE IPTV is a universal app. Buy the subscription once and it unlocks the app on every iPhone and iPad signed in with the same Apple Account.",
      "Your playlists, M3U or Xtream Codes, are set up on each device with the details from your provider. Nothing is stored on a server of ours: your credentials stay on the device.",
    ],
    faq: [
      {
        q: "What is the best IPTV app for iPad?",
        a: "Look for an app that uses the iPad screen rather than stretching an iPhone layout. EDGE IPTV shows a nine-channel TV guide, larger posters, Split View and Picture in Picture, and supports M3U and Xtream Codes.",
      },
      {
        q: "Which iPads are supported?",
        a: "Any iPad on iPadOS 17 or later: iPad Pro (2nd generation), iPad Air (3rd generation), iPad (6th generation) and iPad mini (5th generation) or newer.",
      },
      {
        q: "Do I need a second subscription for my iPad?",
        a: "No. The subscription is tied to your Apple Account and works on your iPhone and iPad.",
      },
      {
        q: "Can I watch IPTV on my iPad and cast it to the TV?",
        a: "Yes. EDGE IPTV casts to Chromecast and Google TV, and to Apple TV through AirPlay.",
      },
      {
        q: "Is EDGE IPTV free on iPad?",
        a: "The app is free to download with a 7-day free trial. Watching then requires a subscription at $3.99 a month or $19.99 a year, with no ads.",
      },
    ],
  },

  fr: {
    metaTitle: "Lecteur IPTV pour iPad : TV en direct, films et guide TV",
    metaDescription:
      "EDGE IPTV est un lecteur IPTV pensé pour l'écran de l'iPad : guide TV avec neuf chaînes à la fois, Split View, Picture in Picture, Chromecast et AirPlay.",
    eyebrow: "iPad et iPadOS 17+",
    title: "Un lecteur IPTV pensé pour l'iPad",
    intro:
      "La plupart des apps IPTV sur iPad sont des apps iPhone agrandies. EDGE IPTV change de mise en page à la place : un guide TV lisible d'un coup d'œil, des affiches presque deux fois plus grandes, et une série à côté de sa liste d'épisodes.",
    imageAlt: "Le guide TV d'EDGE IPTV sur iPad, neuf chaînes et quatre heures de programmes à la fois",
    needTitle: "Ce qu'il vous faut",
    need: [
      "Un iPad sous iPadOS 17 ou plus récent : iPad Pro (2e gén.), iPad Air (3e gén.), iPad (6e gén.), iPad mini (5e gén.) ou plus récents",
      "Un lien M3U ou des codes Xtream fournis par votre fournisseur IPTV (EDGE IPTV est le lecteur, il ne vend pas de chaînes)",
    ],
    stepsTitle: "Configurer l'IPTV sur iPad en moins de 2 minutes",
    steps: [
      {
        title: "Installez EDGE IPTV",
        description:
          "Gratuit sur l'App Store, avec 7 jours d'essai gratuit. Un seul abonnement couvre votre iPad et votre iPhone.",
      },
      {
        title: "Touchez « Ajouter une playlist »",
        description:
          "Choisissez Xtream Codes ou Playlist M3U et saisissez ce que votre fournisseur vous a donné.",
      },
      {
        title: "Lancez la lecture",
        description: "Chaînes, films et séries se chargent seuls, avec le guide TV.",
      },
    ],
    featuresTitle: "Ce que le grand écran change",
    features: [
      {
        title: "Un guide TV vraiment lisible",
        description:
          "Neuf chaînes et quatre heures de programmes à l'écran en même temps : vous parcourez la soirée sans dérouler chaîne par chaîne.",
      },
      {
        title: "Affiches et épisodes côte à côte",
        description:
          "Les affiches sont dessinées presque deux fois plus grandes, et une série s'affiche à côté de ses saisons et épisodes plutôt qu'en dessous.",
      },
      {
        title: "Split View et Slide Over",
        description:
          "Utilisez EDGE IPTV à côté d'une autre app, en portrait comme en paysage, dans toutes les orientations.",
      },
      {
        title: "Picture in Picture",
        description:
          "Gardez un match dans un coin pendant que vous répondez à un e-mail ou cherchez quelque chose.",
      },
      {
        title: "Chromecast et AirPlay",
        description: "Envoyez le flux sur la TV quand l'écran de l'iPad ne suffit plus.",
      },
      {
        title: "Téléchargements pour la route",
        description: "Enregistrez films et épisodes en Wi-Fi et regardez-les hors ligne en voyage.",
      },
    ],
    explainTitle: "Une app, un abonnement, iPhone et iPad",
    explain: [
      "EDGE IPTV est une app universelle. Souscrivez une fois, et l'abonnement débloque l'app sur tous les iPhone et iPad connectés au même compte Apple.",
      "Vos playlists, M3U ou Xtream Codes, se configurent sur chaque appareil avec les informations de votre fournisseur. Rien n'est stocké sur un serveur à nous : vos identifiants restent sur l'appareil.",
    ],
    faq: [
      {
        q: "Quelle est la meilleure app IPTV pour iPad ?",
        a: "Choisissez une app qui exploite l'écran de l'iPad au lieu d'étirer une mise en page iPhone. EDGE IPTV propose un guide TV à neuf chaînes, des affiches plus grandes, Split View et Picture in Picture, et prend en charge M3U et Xtream Codes.",
      },
      {
        q: "Quels iPad sont compatibles ?",
        a: "Tout iPad sous iPadOS 17 ou plus récent : iPad Pro (2e génération), iPad Air (3e génération), iPad (6e génération) et iPad mini (5e génération) ou plus récents.",
      },
      {
        q: "Faut-il un second abonnement pour l'iPad ?",
        a: "Non. L'abonnement est lié à votre compte Apple et fonctionne sur votre iPhone et votre iPad.",
      },
      {
        q: "Puis-je regarder l'IPTV sur iPad et l'envoyer sur la TV ?",
        a: "Oui. EDGE IPTV diffuse vers Chromecast et Google TV, et vers l'Apple TV via AirPlay.",
      },
      {
        q: "EDGE IPTV est-il gratuit sur iPad ?",
        a: "L'app est gratuite au téléchargement avec 7 jours d'essai gratuit. Regarder nécessite ensuite un abonnement à 3,99 € par mois ou 19,99 € par an, sans publicité.",
      },
    ],
  },

  es: {
    metaTitle: "Reproductor IPTV para iPad: TV en vivo, películas y guía",
    metaDescription:
      "EDGE IPTV es un reproductor IPTV pensado para la pantalla del iPad: guía de TV con nueve canales a la vez, Split View, Picture in Picture, Chromecast y AirPlay.",
    eyebrow: "iPad y iPadOS 17+",
    title: "Un reproductor IPTV pensado para el iPad",
    intro:
      "La mayoría de apps IPTV en iPad son apps de iPhone ampliadas. EDGE IPTV cambia su diseño: una guía de TV que se lee de un vistazo, carátulas casi al doble de tamaño y una serie junto a su lista de episodios.",
    imageAlt: "La guía de TV de EDGE IPTV en iPad, nueve canales y cuatro horas de programación a la vez",
    needTitle: "Qué necesitas",
    need: [
      "Un iPad con iPadOS 17 o posterior: iPad Pro (2.ª gen.), iPad Air (3.ª gen.), iPad (6.ª gen.), iPad mini (5.ª gen.) o más recientes",
      "Un enlace M3U o códigos Xtream de tu proveedor IPTV (EDGE IPTV es el reproductor, no vende canales)",
    ],
    stepsTitle: "Configura IPTV en tu iPad en menos de 2 minutos",
    steps: [
      {
        title: "Instala EDGE IPTV",
        description:
          "Gratis en la App Store, con 7 días de prueba gratuita. Una sola suscripción cubre tu iPad y tu iPhone.",
      },
      {
        title: "Toca «Añadir una playlist»",
        description: "Elige Xtream Codes o Playlist M3U e introduce lo que te dio tu proveedor.",
      },
      {
        title: "Empieza a ver",
        description: "Canales, películas y series se cargan solos, con la guía de TV.",
      },
    ],
    featuresTitle: "Lo que cambia la pantalla grande",
    features: [
      {
        title: "Una guía de TV que se lee de verdad",
        description:
          "Nueve canales y cuatro horas de programación en pantalla a la vez: repasas la noche sin desplazarte canal por canal.",
      },
      {
        title: "Carátulas y episodios lado a lado",
        description:
          "Las carátulas se dibujan casi al doble de tamaño y una serie aparece junto a sus temporadas y episodios en vez de debajo.",
      },
      {
        title: "Split View y Slide Over",
        description: "Usa EDGE IPTV junto a otra app, en vertical u horizontal, en cualquier orientación.",
      },
      {
        title: "Picture in Picture",
        description: "Deja un partido en una esquina mientras respondes un correo o buscas algo.",
      },
      {
        title: "Chromecast y AirPlay",
        description: "Envía el stream a la TV cuando la pantalla del iPad no basta.",
      },
      {
        title: "Descargas para el viaje",
        description: "Guarda películas y episodios por Wi-Fi y míralos sin conexión de viaje.",
      },
    ],
    explainTitle: "Una app, una suscripción, iPhone y iPad",
    explain: [
      "EDGE IPTV es una app universal. Suscríbete una vez y la suscripción desbloquea la app en todos los iPhone y iPad con la misma cuenta de Apple.",
      "Tus listas, M3U o Xtream Codes, se configuran en cada dispositivo con los datos de tu proveedor. Nada se guarda en un servidor nuestro: tus credenciales se quedan en el dispositivo.",
    ],
    faq: [
      {
        q: "¿Cuál es la mejor app IPTV para iPad?",
        a: "Busca una app que aproveche la pantalla del iPad en lugar de estirar un diseño de iPhone. EDGE IPTV ofrece una guía de TV de nueve canales, carátulas más grandes, Split View y Picture in Picture, y admite M3U y Xtream Codes.",
      },
      {
        q: "¿Qué iPad son compatibles?",
        a: "Cualquier iPad con iPadOS 17 o posterior: iPad Pro (2.ª generación), iPad Air (3.ª generación), iPad (6.ª generación) e iPad mini (5.ª generación) o más recientes.",
      },
      {
        q: "¿Necesito otra suscripción para el iPad?",
        a: "No. La suscripción está vinculada a tu cuenta de Apple y funciona en tu iPhone y tu iPad.",
      },
      {
        q: "¿Puedo ver IPTV en el iPad y enviarlo a la TV?",
        a: "Sí. EDGE IPTV envía a Chromecast y Google TV, y al Apple TV mediante AirPlay.",
      },
      {
        q: "¿EDGE IPTV es gratis en iPad?",
        a: "La app se descarga gratis con 7 días de prueba gratuita. Después, ver contenido requiere una suscripción de 3,99 € al mes o 19,99 € al año, sin anuncios.",
      },
    ],
  },

  pt: {
    metaTitle: "Player IPTV para iPad: TV ao vivo, filmes e guia de TV",
    metaDescription:
      "O EDGE IPTV é um player IPTV pensado para a tela do iPad: guia de TV com nove canais de uma vez, Split View, Picture in Picture, Chromecast e AirPlay.",
    eyebrow: "iPad e iPadOS 17+",
    title: "Um player IPTV pensado para o iPad",
    intro:
      "A maioria dos apps IPTV no iPad são apps de iPhone ampliados. O EDGE IPTV muda o layout: um guia de TV que se lê num relance, capas quase duas vezes maiores e uma série ao lado da lista de episódios.",
    imageAlt: "O guia de TV do EDGE IPTV no iPad, nove canais e quatro horas de programação ao mesmo tempo",
    needTitle: "O que você precisa",
    need: [
      "Um iPad com iPadOS 17 ou posterior: iPad Pro (2ª geração), iPad Air (3ª geração), iPad (6ª geração), iPad mini (5ª geração) ou mais recentes",
      "Um link M3U ou códigos Xtream do seu provedor IPTV (o EDGE IPTV é o player, não vende canais)",
    ],
    stepsTitle: "Configure IPTV no iPad em menos de 2 minutos",
    steps: [
      {
        title: "Instale o EDGE IPTV",
        description:
          "Grátis na App Store, com 7 dias de teste grátis. Uma só assinatura cobre seu iPad e seu iPhone.",
      },
      {
        title: "Toque em «Adicionar uma playlist»",
        description: "Escolha Xtream Codes ou Playlist M3U e informe o que o seu provedor enviou.",
      },
      {
        title: "Comece a assistir",
        description: "Canais, filmes e séries carregam sozinhos, com o guia de TV.",
      },
    ],
    featuresTitle: "O que a tela grande muda",
    features: [
      {
        title: "Um guia de TV que dá para ler",
        description:
          "Nove canais e quatro horas de programação na tela ao mesmo tempo: você vê a noite toda sem rolar canal por canal.",
      },
      {
        title: "Capas e episódios lado a lado",
        description:
          "As capas aparecem quase duas vezes maiores, e uma série fica ao lado das temporadas e episódios em vez de embaixo.",
      },
      {
        title: "Split View e Slide Over",
        description: "Use o EDGE IPTV ao lado de outro app, em retrato ou paisagem, em qualquer orientação.",
      },
      {
        title: "Picture in Picture",
        description: "Deixe um jogo num canto enquanto responde um e-mail ou pesquisa algo.",
      },
      {
        title: "Chromecast e AirPlay",
        description: "Mande o stream para a TV quando a tela do iPad não basta.",
      },
      {
        title: "Downloads para a viagem",
        description: "Salve filmes e episódios pelo Wi-Fi e assista offline na viagem.",
      },
    ],
    explainTitle: "Um app, uma assinatura, iPhone e iPad",
    explain: [
      "O EDGE IPTV é um app universal. Assine uma vez e a assinatura libera o app em todos os iPhone e iPad com a mesma conta Apple.",
      "Suas listas, M3U ou Xtream Codes, são configuradas em cada aparelho com os dados do seu provedor. Nada fica guardado num servidor nosso: suas credenciais ficam no aparelho.",
    ],
    faq: [
      {
        q: "Qual é o melhor app IPTV para iPad?",
        a: "Procure um app que aproveite a tela do iPad em vez de esticar um layout de iPhone. O EDGE IPTV oferece guia de TV com nove canais, capas maiores, Split View e Picture in Picture, e aceita M3U e Xtream Codes.",
      },
      {
        q: "Quais iPads são compatíveis?",
        a: "Qualquer iPad com iPadOS 17 ou posterior: iPad Pro (2ª geração), iPad Air (3ª geração), iPad (6ª geração) e iPad mini (5ª geração) ou mais recentes.",
      },
      {
        q: "Preciso de outra assinatura para o iPad?",
        a: "Não. A assinatura fica ligada à sua conta Apple e funciona no iPhone e no iPad.",
      },
      {
        q: "Posso assistir IPTV no iPad e mandar para a TV?",
        a: "Sim. O EDGE IPTV transmite para Chromecast e Google TV, e para a Apple TV via AirPlay.",
      },
      {
        q: "O EDGE IPTV é grátis no iPad?",
        a: "O app é grátis para baixar, com 7 dias de teste grátis. Depois, assistir exige uma assinatura de US$ 3,99 por mês ou US$ 19,99 por ano, sem anúncios.",
      },
    ],
  },

  de: {
    metaTitle: "IPTV-Player für iPad: Live-TV, Filme & Programmführer",
    metaDescription:
      "EDGE IPTV ist ein IPTV-Player für den iPad-Bildschirm: Programmführer mit neun Sendern auf einmal, Split View, Bild-in-Bild, Chromecast und AirPlay.",
    eyebrow: "iPad & iPadOS 17+",
    title: "Ein IPTV-Player, gemacht fürs iPad",
    intro:
      "Die meisten IPTV-Apps auf dem iPad sind aufgeblasene iPhone-Apps. EDGE IPTV ändert stattdessen sein Layout: ein Programmführer, den man auf einen Blick liest, Cover in fast doppelter Größe und eine Serie neben ihrer Folgenliste.",
    imageAlt: "Der Programmführer von EDGE IPTV auf dem iPad, neun Sender und vier Stunden Programm auf einmal",
    needTitle: "Was du brauchst",
    need: [
      "Ein iPad mit iPadOS 17 oder neuer: iPad Pro (2. Gen.), iPad Air (3. Gen.), iPad (6. Gen.), iPad mini (5. Gen.) oder neuer",
      "Einen M3U-Link oder Xtream Codes deines IPTV-Anbieters (EDGE IPTV ist der Player und verkauft keine Sender)",
    ],
    stepsTitle: "IPTV auf dem iPad in unter 2 Minuten einrichten",
    steps: [
      {
        title: "EDGE IPTV installieren",
        description:
          "Kostenlos im App Store, mit 7 Tagen Gratis-Test. Ein Abo gilt für iPad und iPhone.",
      },
      {
        title: "„Playlist hinzufügen“ tippen",
        description: "Wähle Xtream Codes oder M3U-Playlist und gib ein, was dir dein Anbieter geschickt hat.",
      },
      {
        title: "Losschauen",
        description: "Sender, Filme und Serien laden von selbst, mit Programmführer.",
      },
    ],
    featuresTitle: "Was der große Bildschirm ändert",
    features: [
      {
        title: "Ein Programmführer, den man wirklich lesen kann",
        description:
          "Neun Sender und vier Stunden Programm gleichzeitig auf dem Bildschirm: Du überblickst den Abend, ohne Sender für Sender zu scrollen.",
      },
      {
        title: "Cover und Folgen nebeneinander",
        description:
          "Filmcover erscheinen fast doppelt so groß, und eine Serie steht neben ihren Staffeln und Folgen statt darunter.",
      },
      {
        title: "Split View und Slide Over",
        description: "Nutze EDGE IPTV neben einer anderen App, hochkant oder quer, in jeder Ausrichtung.",
      },
      {
        title: "Bild-in-Bild",
        description: "Lass ein Spiel in der Ecke laufen, während du eine Mail beantwortest oder etwas nachschlägst.",
      },
      {
        title: "Chromecast und AirPlay",
        description: "Schick den Stream auf den Fernseher, wenn der iPad-Bildschirm nicht reicht.",
      },
      {
        title: "Downloads für unterwegs",
        description: "Speichere Filme und Folgen im WLAN und schau sie offline auf Reisen.",
      },
    ],
    explainTitle: "Eine App, ein Abo, iPhone und iPad",
    explain: [
      "EDGE IPTV ist eine universelle App. Einmal abonniert, schaltet das Abo die App auf allen iPhones und iPads mit demselben Apple Account frei.",
      "Deine Playlists, M3U oder Xtream Codes, richtest du auf jedem Gerät mit den Daten deines Anbieters ein. Nichts wird auf einem Server von uns gespeichert: Deine Zugangsdaten bleiben auf dem Gerät.",
    ],
    faq: [
      {
        q: "Welche ist die beste IPTV-App fürs iPad?",
        a: "Achte auf eine App, die den iPad-Bildschirm nutzt, statt ein iPhone-Layout zu strecken. EDGE IPTV bietet einen Programmführer mit neun Sendern, größere Cover, Split View und Bild-in-Bild und unterstützt M3U und Xtream Codes.",
      },
      {
        q: "Welche iPads werden unterstützt?",
        a: "Jedes iPad mit iPadOS 17 oder neuer: iPad Pro (2. Generation), iPad Air (3. Generation), iPad (6. Generation) und iPad mini (5. Generation) oder neuer.",
      },
      {
        q: "Brauche ich ein zweites Abo fürs iPad?",
        a: "Nein. Das Abo hängt an deinem Apple Account und funktioniert auf iPhone und iPad.",
      },
      {
        q: "Kann ich IPTV auf dem iPad schauen und auf den Fernseher schicken?",
        a: "Ja. EDGE IPTV streamt auf Chromecast und Google TV sowie per AirPlay auf Apple TV.",
      },
      {
        q: "Ist EDGE IPTV auf dem iPad kostenlos?",
        a: "Der Download ist kostenlos, mit 7 Tagen Gratis-Test. Danach ist zum Schauen ein Abo für 3,99 € im Monat oder 19,99 € im Jahr nötig, ohne Werbung.",
      },
    ],
  },

  ar: {
    metaTitle: "مشغل IPTV للآيباد: بث مباشر وأفلام ودليل برامج",
    metaDescription:
      "EDGE IPTV مشغّل IPTV مصمّم لشاشة الآيباد: دليل برامج يعرض تسع قنوات معًا، وSplit View، وصورة داخل صورة، وChromecast وAirPlay.",
    eyebrow: "آيباد وiPadOS 17 أو أحدث",
    title: "مشغّل IPTV مصمّم للآيباد",
    intro:
      "معظم تطبيقات IPTV على الآيباد تطبيقات آيفون مكبّرة. أما EDGE IPTV فيغيّر تصميمه: دليل برامج يُقرأ بنظرة، وملصقات بحجم يقارب الضعف، ومسلسل بجانب قائمة حلقاته.",
    imageAlt: "دليل البرامج في EDGE IPTV على الآيباد، تسع قنوات وأربع ساعات من البرامج معًا",
    needTitle: "ما تحتاج إليه",
    need: [
      "آيباد بنظام iPadOS 17 أو أحدث: iPad Pro (الجيل الثاني) أو iPad Air (الجيل الثالث) أو iPad (الجيل السادس) أو iPad mini (الجيل الخامس) أو أحدث",
      "رابط M3U أو بيانات Xtream من مزوّد IPTV (EDGE IPTV مشغّل فقط ولا يبيع قنوات)",
    ],
    stepsTitle: "اضبط IPTV على الآيباد في أقل من دقيقتين",
    steps: [
      {
        title: "ثبّت EDGE IPTV",
        description: "مجاني على App Store مع تجربة مجانية لسبعة أيام. اشتراك واحد يشمل الآيباد والآيفون.",
      },
      {
        title: "اضغط «إضافة قائمة تشغيل»",
        description: "اختر Xtream Codes أو قائمة تشغيل M3U وأدخل ما أعطاك إياه مزوّدك.",
      },
      {
        title: "ابدأ المشاهدة",
        description: "تُحمَّل القنوات والأفلام والمسلسلات تلقائيًا مع دليل البرامج.",
      },
    ],
    featuresTitle: "ما تغيّره الشاشة الكبيرة",
    features: [
      {
        title: "دليل برامج يُقرأ فعلًا",
        description: "تسع قنوات وأربع ساعات من البرامج على الشاشة معًا: تتصفّح السهرة دون التمرير قناةً قناة.",
      },
      {
        title: "الملصقات والحلقات جنبًا إلى جنب",
        description: "تُعرض ملصقات الأفلام بحجم يقارب الضعف، ويظهر المسلسل بجانب مواسمه وحلقاته بدل أسفلها.",
      },
      {
        title: "Split View وSlide Over",
        description: "استخدم EDGE IPTV بجانب تطبيق آخر، عموديًا أو أفقيًا، في أي اتجاه.",
      },
      {
        title: "صورة داخل صورة",
        description: "اترك مباراة في زاوية الشاشة بينما ترد على رسالة أو تبحث عن شيء.",
      },
      {
        title: "Chromecast وAirPlay",
        description: "أرسل البث إلى التلفاز عندما لا تكفي شاشة الآيباد.",
      },
      {
        title: "تحميل للسفر",
        description: "احفظ الأفلام والحلقات عبر Wi-Fi وشاهدها دون اتصال في السفر.",
      },
    ],
    explainTitle: "تطبيق واحد واشتراك واحد للآيفون والآيباد",
    explain: [
      "EDGE IPTV تطبيق عام. اشترك مرة واحدة ويفتح الاشتراك التطبيق على كل آيفون وآيباد مسجّل بحساب Apple نفسه.",
      "تُضبط قوائمك، M3U أو Xtream Codes، على كل جهاز ببيانات مزوّدك. لا شيء يُخزَّن على خادم لدينا: تبقى بيانات دخولك على الجهاز.",
    ],
    faq: [
      {
        q: "ما أفضل تطبيق IPTV للآيباد؟",
        a: "اختر تطبيقًا يستفيد من شاشة الآيباد بدل تمديد تصميم الآيفون. يقدّم EDGE IPTV دليل برامج بتسع قنوات، وملصقات أكبر، وSplit View، وصورة داخل صورة، ويدعم M3U وXtream Codes.",
      },
      {
        q: "ما أجهزة الآيباد المدعومة؟",
        a: "أي آيباد بنظام iPadOS 17 أو أحدث: iPad Pro (الجيل الثاني) وiPad Air (الجيل الثالث) وiPad (الجيل السادس) وiPad mini (الجيل الخامس) أو أحدث.",
      },
      {
        q: "هل أحتاج إلى اشتراك ثانٍ للآيباد؟",
        a: "لا. الاشتراك مرتبط بحساب Apple الخاص بك ويعمل على الآيفون والآيباد.",
      },
      {
        q: "هل يمكنني مشاهدة IPTV على الآيباد وإرساله إلى التلفاز؟",
        a: "نعم. يبث EDGE IPTV إلى Chromecast وGoogle TV، وإلى Apple TV عبر AirPlay.",
      },
      {
        q: "هل EDGE IPTV مجاني على الآيباد؟",
        a: "تحميل التطبيق مجاني مع تجربة مجانية لسبعة أيام. بعدها تتطلب المشاهدة اشتراكًا بـ3.99 دولار شهريًا أو 19.99 دولار سنويًا، دون إعلانات.",
      },
    ],
  },

  it: {
    metaTitle: "Lettore IPTV per iPad: TV in diretta, film e guida TV",
    metaDescription:
      "EDGE IPTV è un lettore IPTV pensato per lo schermo dell'iPad: guida TV con nove canali insieme, Split View, Picture in Picture, Chromecast e AirPlay.",
    eyebrow: "iPad e iPadOS 17+",
    title: "Un lettore IPTV pensato per l'iPad",
    intro:
      "La maggior parte delle app IPTV su iPad sono app per iPhone ingrandite. EDGE IPTV cambia invece layout: una guida TV che si legge a colpo d'occhio, locandine grandi quasi il doppio e una serie accanto all'elenco degli episodi.",
    imageAlt: "La guida TV di EDGE IPTV su iPad, nove canali e quattro ore di programmi insieme",
    needTitle: "Cosa ti serve",
    need: [
      "Un iPad con iPadOS 17 o successivo: iPad Pro (2ª gen.), iPad Air (3ª gen.), iPad (6ª gen.), iPad mini (5ª gen.) o successivi",
      "Un link M3U o i codici Xtream del tuo provider IPTV (EDGE IPTV è il lettore, non vende canali)",
    ],
    stepsTitle: "Configura l'IPTV su iPad in meno di 2 minuti",
    steps: [
      {
        title: "Installa EDGE IPTV",
        description:
          "Gratis su App Store, con 7 giorni di prova gratuita. Un solo abbonamento copre iPad e iPhone.",
      },
      {
        title: "Tocca «Aggiungi una playlist»",
        description: "Scegli Xtream Codes o Playlist M3U e inserisci i dati del tuo provider.",
      },
      {
        title: "Inizia a guardare",
        description: "Canali, film e serie si caricano da soli, con la guida TV.",
      },
    ],
    featuresTitle: "Cosa cambia lo schermo grande",
    features: [
      {
        title: "Una guida TV che si legge davvero",
        description:
          "Nove canali e quattro ore di programmi sullo schermo insieme: scorri la serata senza passare canale per canale.",
      },
      {
        title: "Locandine ed episodi affiancati",
        description:
          "Le locandine sono grandi quasi il doppio e una serie compare accanto a stagioni ed episodi invece che sotto.",
      },
      {
        title: "Split View e Slide Over",
        description: "Usa EDGE IPTV accanto a un'altra app, in verticale o in orizzontale, in ogni orientamento.",
      },
      {
        title: "Picture in Picture",
        description: "Tieni una partita in un angolo mentre rispondi a un'e-mail o cerchi qualcosa.",
      },
      {
        title: "Chromecast e AirPlay",
        description: "Manda lo stream alla TV quando lo schermo dell'iPad non basta.",
      },
      {
        title: "Download per il viaggio",
        description: "Salva film ed episodi in Wi-Fi e guardali offline in viaggio.",
      },
    ],
    explainTitle: "Un'app, un abbonamento, iPhone e iPad",
    explain: [
      "EDGE IPTV è un'app universale. Abbonati una volta e l'abbonamento sblocca l'app su tutti gli iPhone e iPad collegati allo stesso Account Apple.",
      "Le tue playlist, M3U o Xtream Codes, si configurano su ogni dispositivo con i dati del provider. Nulla viene salvato su un nostro server: le credenziali restano sul dispositivo.",
    ],
    faq: [
      {
        q: "Qual è la migliore app IPTV per iPad?",
        a: "Cerca un'app che sfrutti lo schermo dell'iPad invece di allargare un layout per iPhone. EDGE IPTV offre una guida TV a nove canali, locandine più grandi, Split View e Picture in Picture, e supporta M3U e Xtream Codes.",
      },
      {
        q: "Quali iPad sono compatibili?",
        a: "Qualsiasi iPad con iPadOS 17 o successivo: iPad Pro (2ª generazione), iPad Air (3ª generazione), iPad (6ª generazione) e iPad mini (5ª generazione) o successivi.",
      },
      {
        q: "Serve un secondo abbonamento per l'iPad?",
        a: "No. L'abbonamento è legato al tuo Account Apple e funziona su iPhone e iPad.",
      },
      {
        q: "Posso guardare l'IPTV su iPad e mandarla alla TV?",
        a: "Sì. EDGE IPTV trasmette su Chromecast e Google TV, e su Apple TV tramite AirPlay.",
      },
      {
        q: "EDGE IPTV è gratuito su iPad?",
        a: "Il download è gratuito, con 7 giorni di prova gratuita. Poi guardare richiede un abbonamento da 3,99 € al mese o 19,99 € all'anno, senza pubblicità.",
      },
    ],
  },
};
