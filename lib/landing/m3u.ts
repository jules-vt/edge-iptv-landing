import type { Lang } from "@/lib/i18n";
import type { LandingCopy } from "@/lib/landing/types";

/**
 * "M3U player for iPhone". Everything below describes what the app's M3U code
 * actually does (EdgeNetworking/M3U in the app repo): live/movie/episode
 * detection, the XMLTV guide from the playlist header, and the switch to the
 * Xtream API when the M3U link is a get.php panel URL.
 */
export const M3U_COPY: Record<Lang, LandingCopy> = {
  en: {
    metaTitle: "M3U Player for iPhone & iPad: Open M3U & M3U8 Playlists",
    metaDescription:
      "Play any M3U or M3U8 IPTV playlist on iPhone and iPad. EDGE IPTV sorts live TV, movies and series, loads the TV guide and casts to Chromecast and AirPlay.",
    navLabel: "M3U player for iPhone",
    eyebrow: "M3U & M3U8 playlists",
    title: "The M3U player for iPhone and iPad",
    intro:
      "Paste the M3U link your IPTV provider gave you and EDGE IPTV turns a raw list of streams into a real TV app: channels sorted by category, movies and series apart, a TV guide, and playback that just works.",
    imageAlt: "EDGE IPTV TV guide on iPhone, loaded from an M3U playlist",
    needTitle: "What you need",
    need: [
      "An iPhone or iPad on iOS 17 or later",
      "The M3U or M3U8 link from your IPTV provider (EDGE IPTV is the player, it does not sell channels)",
    ],
    stepsTitle: "Open an M3U playlist in under 2 minutes",
    steps: [
      {
        title: "Install EDGE IPTV",
        description: "Free on the App Store, with a 7-day free trial.",
      },
      {
        title: 'Tap "Add a playlist", then "M3U playlist"',
        description: "Paste the playlist URL (.m3u or .m3u8) and give it a name.",
      },
      {
        title: 'Tap "Add playlist"',
        description:
          "The app downloads the list, sorts it and loads the TV guide. Your channels appear right away.",
      },
    ],
    featuresTitle: "What EDGE IPTV does with your M3U",
    features: [
      {
        title: "Live, movies and series sorted for you",
        description:
          "An M3U doesn't say what each line is. The app works it out from the stream path, the episode number (S01E02) and the file type, so films and series don't end up mixed with live channels.",
      },
      {
        title: "TV guide from the playlist header",
        description:
          "If your M3U announces an XMLTV guide (url-tvg or x-tvg-url), it is loaded automatically and matched to each channel by tvg-id, or by name.",
      },
      {
        title: "Categories and logos kept",
        description: "group-title becomes your categories and tvg-logo your channel logos.",
      },
      {
        title: "Xtream detected behind the M3U",
        description:
          "Many M3U links are really an Xtream panel (get.php?username=…). The app spots it and switches to the full Xtream API: better categories, guide and film details.",
      },
      {
        title: "Chromecast, AirPlay and Picture in Picture",
        description: "Send any channel to the TV, or keep watching in a small window over other apps.",
      },
      {
        title: "Search, favourites and resume",
        description:
          "Find a channel in a second, pin the ones you watch and pick a film up where you left it.",
      },
    ],
    explainTitle: "M3U, M3U8: what is in the file?",
    explain: [
      "An M3U playlist is a text file. Each entry is a #EXTINF line (name, logo, group, guide ID) followed by the address of the stream. M3U8 is the same format encoded in UTF-8, which keeps accents and non-Latin channel names intact. EDGE IPTV reads both.",
      "Most IPTV providers give you the playlist as a link rather than a file, often ending in get.php with your username and password inside. That link is all EDGE IPTV needs: it fetches the list again every day, so new channels show up without you doing anything.",
    ],
    faq: [
      {
        q: "How do I open an M3U file on iPhone?",
        a: "Install an IPTV player such as EDGE IPTV, tap \"Add a playlist\", choose \"M3U playlist\" and paste the link from your provider. The channels load in a few seconds.",
      },
      {
        q: "Does EDGE IPTV support M3U8?",
        a: "Yes. M3U and M3U8 playlists are both supported, as are .m3u8 HLS streams inside them.",
      },
      {
        q: "Will I get a TV guide with an M3U playlist?",
        a: "Yes, if your playlist declares an XMLTV guide in its first line (url-tvg or x-tvg-url). EDGE IPTV loads it and matches it to your channels automatically.",
      },
      {
        q: "Does EDGE IPTV provide channels?",
        a: "No. EDGE IPTV is a player: you bring the playlist from your own IPTV provider.",
      },
      {
        q: "Is the M3U player free?",
        a: "The app is free to download with a 7-day free trial. Watching then requires a subscription at $3.99 a month or $19.99 a year, with no ads.",
      },
    ],
  },

  fr: {
    metaTitle: "Lecteur M3U pour iPhone et iPad : ouvrir une playlist M3U",
    metaDescription:
      "Lisez toute playlist IPTV M3U ou M3U8 sur iPhone et iPad. EDGE IPTV trie TV, films et séries, charge le guide TV et diffuse sur Chromecast et AirPlay.",
    navLabel: "Lecteur M3U pour iPhone",
    eyebrow: "Playlists M3U et M3U8",
    title: "Le lecteur M3U pour iPhone et iPad",
    intro:
      "Collez le lien M3U fourni par votre fournisseur IPTV, et EDGE IPTV transforme une simple liste de flux en vraie app de TV : chaînes rangées par catégorie, films et séries à part, guide TV, et une lecture qui fonctionne.",
    imageAlt: "Guide TV d'EDGE IPTV sur iPhone, chargé depuis une playlist M3U",
    needTitle: "Ce qu'il vous faut",
    need: [
      "Un iPhone ou un iPad sous iOS 17 ou plus récent",
      "Le lien M3U ou M3U8 de votre fournisseur IPTV (EDGE IPTV est le lecteur, il ne vend pas de chaînes)",
    ],
    stepsTitle: "Ouvrir une playlist M3U en moins de 2 minutes",
    steps: [
      {
        title: "Installez EDGE IPTV",
        description: "Gratuit sur l'App Store, avec 7 jours d'essai gratuit.",
      },
      {
        title: "Touchez « Ajouter une playlist », puis « Playlist M3U »",
        description: "Collez l'URL de la playlist (.m3u ou .m3u8) et donnez-lui un nom.",
      },
      {
        title: "Touchez « Ajouter la playlist »",
        description:
          "L'app télécharge la liste, la trie et charge le guide TV. Vos chaînes apparaissent aussitôt.",
      },
    ],
    featuresTitle: "Ce qu'EDGE IPTV fait de votre M3U",
    features: [
      {
        title: "TV, films et séries triés pour vous",
        description:
          "Un M3U ne dit pas ce qu'est chaque ligne. L'app le déduit du chemin du flux, du numéro d'épisode (S01E02) et du type de fichier : films et séries ne se mélangent pas aux chaînes en direct.",
      },
      {
        title: "Guide TV tiré de l'en-tête",
        description:
          "Si votre M3U annonce un guide XMLTV (url-tvg ou x-tvg-url), il est chargé automatiquement et associé à chaque chaîne par son tvg-id, ou à défaut par son nom.",
      },
      {
        title: "Catégories et logos conservés",
        description: "group-title devient vos catégories et tvg-logo les logos de vos chaînes.",
      },
      {
        title: "Xtream détecté derrière le M3U",
        description:
          "Beaucoup de liens M3U sont en réalité un panel Xtream (get.php?username=…). L'app le repère et passe sur l'API Xtream complète : meilleures catégories, guide et fiches films.",
      },
      {
        title: "Chromecast, AirPlay et Picture in Picture",
        description:
          "Envoyez une chaîne sur la TV, ou continuez à regarder dans une petite fenêtre par-dessus vos apps.",
      },
      {
        title: "Recherche, favoris et reprise",
        description:
          "Retrouvez une chaîne en une seconde, épinglez celles que vous regardez et reprenez un film là où vous l'aviez laissé.",
      },
    ],
    explainTitle: "M3U, M3U8 : que contient le fichier ?",
    explain: [
      "Une playlist M3U est un fichier texte. Chaque entrée est une ligne #EXTINF (nom, logo, groupe, identifiant de guide) suivie de l'adresse du flux. Le M3U8 est le même format encodé en UTF-8, ce qui préserve les accents et les noms de chaînes non latins. EDGE IPTV lit les deux.",
      "La plupart des fournisseurs donnent la playlist sous forme de lien plutôt que de fichier, souvent terminé par get.php avec vos identifiants dedans. Ce lien suffit à EDGE IPTV : la liste est retéléchargée chaque jour, donc les nouvelles chaînes apparaissent sans rien faire.",
    ],
    faq: [
      {
        q: "Comment ouvrir un fichier M3U sur iPhone ?",
        a: "Installez un lecteur IPTV comme EDGE IPTV, touchez « Ajouter une playlist », choisissez « Playlist M3U » et collez le lien de votre fournisseur. Les chaînes se chargent en quelques secondes.",
      },
      {
        q: "EDGE IPTV lit-il le M3U8 ?",
        a: "Oui. Les playlists M3U et M3U8 sont prises en charge, ainsi que les flux HLS .m3u8 qu'elles contiennent.",
      },
      {
        q: "Aurai-je un guide TV avec une playlist M3U ?",
        a: "Oui, si votre playlist déclare un guide XMLTV sur sa première ligne (url-tvg ou x-tvg-url). EDGE IPTV le charge et l'associe à vos chaînes automatiquement.",
      },
      {
        q: "EDGE IPTV fournit-il des chaînes ?",
        a: "Non. EDGE IPTV est un lecteur : vous apportez la playlist de votre propre fournisseur IPTV.",
      },
      {
        q: "Le lecteur M3U est-il gratuit ?",
        a: "L'app est gratuite au téléchargement avec 7 jours d'essai gratuit. Regarder nécessite ensuite un abonnement à 3,99 € par mois ou 19,99 € par an, sans publicité.",
      },
    ],
  },

  es: {
    metaTitle: "Reproductor M3U para iPhone y iPad: abre listas M3U",
    metaDescription:
      "Reproduce cualquier lista IPTV M3U o M3U8 en iPhone y iPad. EDGE IPTV ordena TV, películas y series, carga la guía de TV y envía a Chromecast y AirPlay.",
    navLabel: "Reproductor M3U para iPhone",
    eyebrow: "Listas M3U y M3U8",
    title: "El reproductor M3U para iPhone y iPad",
    intro:
      "Pega el enlace M3U que te dio tu proveedor IPTV y EDGE IPTV convierte una simple lista de streams en una auténtica app de TV: canales por categoría, películas y series aparte, guía de TV y una reproducción que funciona.",
    imageAlt: "Guía de TV de EDGE IPTV en iPhone, cargada desde una lista M3U",
    needTitle: "Qué necesitas",
    need: [
      "Un iPhone o iPad con iOS 17 o posterior",
      "El enlace M3U o M3U8 de tu proveedor IPTV (EDGE IPTV es el reproductor, no vende canales)",
    ],
    stepsTitle: "Abre una lista M3U en menos de 2 minutos",
    steps: [
      {
        title: "Instala EDGE IPTV",
        description: "Gratis en la App Store, con 7 días de prueba gratuita.",
      },
      {
        title: "Toca «Añadir una playlist» y luego «Playlist M3U»",
        description: "Pega la URL de la lista (.m3u o .m3u8) y ponle un nombre.",
      },
      {
        title: "Toca «Añadir la playlist»",
        description:
          "La app descarga la lista, la ordena y carga la guía de TV. Tus canales aparecen al momento.",
      },
    ],
    featuresTitle: "Lo que EDGE IPTV hace con tu M3U",
    features: [
      {
        title: "TV, películas y series ordenadas",
        description:
          "Un M3U no dice qué es cada línea. La app lo deduce de la ruta del stream, el número de episodio (S01E02) y el tipo de archivo, así películas y series no se mezclan con los canales en vivo.",
      },
      {
        title: "Guía de TV desde la cabecera",
        description:
          "Si tu M3U anuncia una guía XMLTV (url-tvg o x-tvg-url), se carga sola y se asocia a cada canal por su tvg-id o, si no, por su nombre.",
      },
      {
        title: "Categorías y logos conservados",
        description: "group-title se convierte en tus categorías y tvg-logo en los logos de los canales.",
      },
      {
        title: "Xtream detectado tras el M3U",
        description:
          "Muchos enlaces M3U son en realidad un panel Xtream (get.php?username=…). La app lo detecta y pasa a la API Xtream completa: mejores categorías, guía y fichas de películas.",
      },
      {
        title: "Chromecast, AirPlay y Picture in Picture",
        description:
          "Envía un canal a la TV o sigue viendo en una ventana pequeña sobre otras apps.",
      },
      {
        title: "Búsqueda, favoritos y reanudación",
        description:
          "Encuentra un canal al instante, fija los que ves y retoma una película donde la dejaste.",
      },
    ],
    explainTitle: "M3U, M3U8: ¿qué contiene el archivo?",
    explain: [
      "Una lista M3U es un archivo de texto. Cada entrada es una línea #EXTINF (nombre, logo, grupo, ID de guía) seguida de la dirección del stream. M3U8 es el mismo formato codificado en UTF-8, que conserva acentos y nombres de canales no latinos. EDGE IPTV lee ambos.",
      "La mayoría de proveedores dan la lista como un enlace y no como archivo, a menudo acabado en get.php con tu usuario y contraseña dentro. Ese enlace es todo lo que EDGE IPTV necesita: vuelve a descargar la lista cada día, así que los canales nuevos aparecen sin hacer nada.",
    ],
    faq: [
      {
        q: "¿Cómo abro un archivo M3U en el iPhone?",
        a: "Instala un reproductor IPTV como EDGE IPTV, toca «Añadir una playlist», elige «Playlist M3U» y pega el enlace de tu proveedor. Los canales se cargan en segundos.",
      },
      {
        q: "¿EDGE IPTV admite M3U8?",
        a: "Sí. Admite listas M3U y M3U8, y también los streams HLS .m3u8 que contienen.",
      },
      {
        q: "¿Tendré guía de TV con una lista M3U?",
        a: "Sí, si tu lista declara una guía XMLTV en su primera línea (url-tvg o x-tvg-url). EDGE IPTV la carga y la asocia a tus canales automáticamente.",
      },
      {
        q: "¿EDGE IPTV ofrece canales?",
        a: "No. EDGE IPTV es un reproductor: tú aportas la lista de tu propio proveedor IPTV.",
      },
      {
        q: "¿El reproductor M3U es gratis?",
        a: "La app se descarga gratis con 7 días de prueba gratuita. Después, ver contenido requiere una suscripción de 3,99 € al mes o 19,99 € al año, sin anuncios.",
      },
    ],
  },

  pt: {
    metaTitle: "Player M3U para iPhone e iPad: abra listas M3U e M3U8",
    metaDescription:
      "Reproduza qualquer lista IPTV M3U ou M3U8 no iPhone e iPad. O EDGE IPTV organiza TV, filmes e séries, carrega o guia de TV e transmite ao Chromecast e AirPlay.",
    navLabel: "Player M3U para iPhone",
    eyebrow: "Listas M3U e M3U8",
    title: "O player M3U para iPhone e iPad",
    intro:
      "Cole o link M3U que o seu provedor IPTV enviou e o EDGE IPTV transforma uma simples lista de streams num app de TV de verdade: canais por categoria, filmes e séries à parte, guia de TV e uma reprodução que funciona.",
    imageAlt: "Guia de TV do EDGE IPTV no iPhone, carregado de uma lista M3U",
    needTitle: "O que você precisa",
    need: [
      "Um iPhone ou iPad com iOS 17 ou posterior",
      "O link M3U ou M3U8 do seu provedor IPTV (o EDGE IPTV é o player, não vende canais)",
    ],
    stepsTitle: "Abra uma lista M3U em menos de 2 minutos",
    steps: [
      {
        title: "Instale o EDGE IPTV",
        description: "Grátis na App Store, com 7 dias de teste grátis.",
      },
      {
        title: "Toque em «Adicionar uma playlist» e depois «Playlist M3U»",
        description: "Cole a URL da lista (.m3u ou .m3u8) e dê um nome a ela.",
      },
      {
        title: "Toque em «Adicionar a playlist»",
        description:
          "O app baixa a lista, organiza e carrega o guia de TV. Seus canais aparecem na hora.",
      },
    ],
    featuresTitle: "O que o EDGE IPTV faz com o seu M3U",
    features: [
      {
        title: "TV, filmes e séries organizados",
        description:
          "Um M3U não diz o que é cada linha. O app deduz pelo caminho do stream, pelo número do episódio (S01E02) e pelo tipo de arquivo, para que filmes e séries não se misturem com os canais ao vivo.",
      },
      {
        title: "Guia de TV do cabeçalho",
        description:
          "Se o seu M3U anuncia um guia XMLTV (url-tvg ou x-tvg-url), ele é carregado sozinho e ligado a cada canal pelo tvg-id ou, na falta dele, pelo nome.",
      },
      {
        title: "Categorias e logos mantidos",
        description: "group-title vira suas categorias e tvg-logo os logos dos canais.",
      },
      {
        title: "Xtream detectado por trás do M3U",
        description:
          "Muitos links M3U são na verdade um painel Xtream (get.php?username=…). O app percebe e passa para a API Xtream completa: categorias, guia e fichas de filmes melhores.",
      },
      {
        title: "Chromecast, AirPlay e Picture in Picture",
        description:
          "Envie um canal para a TV ou continue assistindo numa janela pequena sobre outros apps.",
      },
      {
        title: "Busca, favoritos e retomada",
        description:
          "Encontre um canal num instante, fixe os que você assiste e retome um filme de onde parou.",
      },
    ],
    explainTitle: "M3U, M3U8: o que há no arquivo?",
    explain: [
      "Uma lista M3U é um arquivo de texto. Cada entrada é uma linha #EXTINF (nome, logo, grupo, ID do guia) seguida do endereço do stream. M3U8 é o mesmo formato codificado em UTF-8, que preserva acentos e nomes de canais não latinos. O EDGE IPTV lê os dois.",
      "A maioria dos provedores envia a lista como link, não como arquivo, muitas vezes terminando em get.php com seu usuário e senha. Esse link é tudo de que o EDGE IPTV precisa: a lista é baixada de novo todo dia, então canais novos aparecem sem você fazer nada.",
    ],
    faq: [
      {
        q: "Como abrir um arquivo M3U no iPhone?",
        a: "Instale um player IPTV como o EDGE IPTV, toque em «Adicionar uma playlist», escolha «Playlist M3U» e cole o link do seu provedor. Os canais carregam em segundos.",
      },
      {
        q: "O EDGE IPTV aceita M3U8?",
        a: "Sim. Listas M3U e M3U8 são aceitas, assim como os streams HLS .m3u8 dentro delas.",
      },
      {
        q: "Terei guia de TV com uma lista M3U?",
        a: "Sim, se a sua lista declara um guia XMLTV na primeira linha (url-tvg ou x-tvg-url). O EDGE IPTV carrega e liga aos seus canais automaticamente.",
      },
      {
        q: "O EDGE IPTV fornece canais?",
        a: "Não. O EDGE IPTV é um player: você traz a lista do seu próprio provedor IPTV.",
      },
      {
        q: "O player M3U é grátis?",
        a: "O app é grátis para baixar, com 7 dias de teste grátis. Depois, assistir exige uma assinatura de US$ 3,99 por mês ou US$ 19,99 por ano, sem anúncios.",
      },
    ],
  },

  de: {
    metaTitle: "M3U-Player für iPhone & iPad: M3U-Playlists öffnen",
    metaDescription:
      "Spiele jede M3U- oder M3U8-IPTV-Playlist auf iPhone und iPad ab. EDGE IPTV sortiert Live-TV, Filme und Serien, lädt den Programmführer, streamt per Chromecast.",
    navLabel: "M3U-Player fürs iPhone",
    eyebrow: "M3U- & M3U8-Playlists",
    title: "Der M3U-Player für iPhone und iPad",
    intro:
      "Füge den M3U-Link deines IPTV-Anbieters ein, und EDGE IPTV macht aus einer rohen Stream-Liste eine echte TV-App: Sender nach Kategorien, Filme und Serien getrennt, Programmführer und eine Wiedergabe, die einfach funktioniert.",
    imageAlt: "Programmführer von EDGE IPTV auf dem iPhone, geladen aus einer M3U-Playlist",
    needTitle: "Was du brauchst",
    need: [
      "Ein iPhone oder iPad mit iOS 17 oder neuer",
      "Den M3U- oder M3U8-Link deines IPTV-Anbieters (EDGE IPTV ist der Player und verkauft keine Sender)",
    ],
    stepsTitle: "M3U-Playlist in unter 2 Minuten öffnen",
    steps: [
      {
        title: "EDGE IPTV installieren",
        description: "Kostenlos im App Store, mit 7 Tagen Gratis-Test.",
      },
      {
        title: "„Playlist hinzufügen“ und dann „M3U-Playlist“ tippen",
        description: "Füge die Playlist-URL (.m3u oder .m3u8) ein und gib ihr einen Namen.",
      },
      {
        title: "„Playlist hinzufügen“ tippen",
        description:
          "Die App lädt die Liste, sortiert sie und lädt den Programmführer. Deine Sender erscheinen sofort.",
      },
    ],
    featuresTitle: "Was EDGE IPTV aus deiner M3U macht",
    features: [
      {
        title: "Live-TV, Filme und Serien sortiert",
        description:
          "Eine M3U sagt nicht, was jede Zeile ist. Die App erkennt es am Stream-Pfad, an der Folgennummer (S01E02) und am Dateityp, damit sich Filme und Serien nicht unter die Live-Sender mischen.",
      },
      {
        title: "Programmführer aus dem Playlist-Kopf",
        description:
          "Kündigt deine M3U einen XMLTV-Guide an (url-tvg oder x-tvg-url), wird er automatisch geladen und jedem Sender per tvg-id oder Name zugeordnet.",
      },
      {
        title: "Kategorien und Logos bleiben",
        description: "group-title wird zu deinen Kategorien, tvg-logo zu den Senderlogos.",
      },
      {
        title: "Xtream hinter der M3U erkannt",
        description:
          "Viele M3U-Links sind eigentlich ein Xtream-Panel (get.php?username=…). Die App erkennt das und wechselt zur vollen Xtream-API: bessere Kategorien, Programmführer und Filmdetails.",
      },
      {
        title: "Chromecast, AirPlay und Bild-in-Bild",
        description:
          "Schick einen Sender auf den Fernseher oder schau in einem kleinen Fenster über anderen Apps weiter.",
      },
      {
        title: "Suche, Favoriten und Fortsetzen",
        description:
          "Finde einen Sender in einer Sekunde, pinne deine Lieblingssender und setze einen Film dort fort, wo du aufgehört hast.",
      },
    ],
    explainTitle: "M3U, M3U8: Was steht in der Datei?",
    explain: [
      "Eine M3U-Playlist ist eine Textdatei. Jeder Eintrag ist eine #EXTINF-Zeile (Name, Logo, Gruppe, Guide-ID), gefolgt von der Adresse des Streams. M3U8 ist dasselbe Format in UTF-8, das Umlaute und nicht-lateinische Sendernamen erhält. EDGE IPTV liest beide.",
      "Die meisten Anbieter geben die Playlist als Link statt als Datei heraus, oft mit get.php und deinen Zugangsdaten darin. Dieser Link reicht EDGE IPTV: Die Liste wird täglich neu geladen, neue Sender tauchen also ohne dein Zutun auf.",
    ],
    faq: [
      {
        q: "Wie öffne ich eine M3U-Datei auf dem iPhone?",
        a: "Installiere einen IPTV-Player wie EDGE IPTV, tippe auf „Playlist hinzufügen“, wähle „M3U-Playlist“ und füge den Link deines Anbieters ein. Die Sender laden in wenigen Sekunden.",
      },
      {
        q: "Unterstützt EDGE IPTV M3U8?",
        a: "Ja. M3U- und M3U8-Playlists werden unterstützt, ebenso die enthaltenen HLS-Streams im .m3u8-Format.",
      },
      {
        q: "Bekomme ich mit einer M3U-Playlist einen Programmführer?",
        a: "Ja, wenn deine Playlist in der ersten Zeile einen XMLTV-Guide angibt (url-tvg oder x-tvg-url). EDGE IPTV lädt ihn und ordnet ihn deinen Sendern automatisch zu.",
      },
      {
        q: "Liefert EDGE IPTV Sender?",
        a: "Nein. EDGE IPTV ist ein Player: Die Playlist bringst du von deinem eigenen IPTV-Anbieter mit.",
      },
      {
        q: "Ist der M3U-Player kostenlos?",
        a: "Der Download ist kostenlos, mit 7 Tagen Gratis-Test. Danach ist zum Schauen ein Abo für 3,99 € im Monat oder 19,99 € im Jahr nötig, ohne Werbung.",
      },
    ],
  },

  ar: {
    metaTitle: "مشغل M3U للآيفون والآيباد: افتح قوائم M3U وM3U8",
    metaDescription:
      "شغّل أي قائمة IPTV بصيغة M3U أو M3U8 على الآيفون والآيباد. يرتّب EDGE IPTV البث المباشر والأفلام والمسلسلات ويحمّل دليل البرامج ويبث إلى Chromecast وAirPlay.",
    navLabel: "مشغل M3U للآيفون",
    eyebrow: "قوائم M3U وM3U8",
    title: "مشغل M3U للآيفون والآيباد",
    intro:
      "الصق رابط M3U الذي أعطاك إياه مزوّد IPTV، وسيحوّل EDGE IPTV قائمة البث الخام إلى تطبيق تلفاز حقيقي: قنوات مرتّبة حسب الفئة، وأفلام ومسلسلات منفصلة، ودليل برامج، وتشغيل يعمل ببساطة.",
    imageAlt: "دليل البرامج في EDGE IPTV على الآيفون، محمّل من قائمة M3U",
    needTitle: "ما تحتاج إليه",
    need: [
      "آيفون أو آيباد بنظام iOS 17 أو أحدث",
      "رابط M3U أو M3U8 من مزوّد IPTV الخاص بك (EDGE IPTV مشغّل فقط ولا يبيع قنوات)",
    ],
    stepsTitle: "افتح قائمة M3U في أقل من دقيقتين",
    steps: [
      {
        title: "ثبّت EDGE IPTV",
        description: "مجاني على App Store مع تجربة مجانية لسبعة أيام.",
      },
      {
        title: "اضغط «إضافة قائمة تشغيل» ثم «قائمة تشغيل M3U»",
        description: "الصق رابط القائمة (.m3u أو .m3u8) واختر لها اسمًا.",
      },
      {
        title: "اضغط «إضافة قائمة التشغيل»",
        description: "يحمّل التطبيق القائمة ويرتّبها ويحمّل دليل البرامج. تظهر قنواتك فورًا.",
      },
    ],
    featuresTitle: "ما يفعله EDGE IPTV بقائمة M3U",
    features: [
      {
        title: "بث مباشر وأفلام ومسلسلات مرتّبة",
        description:
          "لا تذكر قائمة M3U نوع كل سطر. يستنتجه التطبيق من مسار البث ورقم الحلقة (S01E02) ونوع الملف، فلا تختلط الأفلام والمسلسلات بالقنوات المباشرة.",
      },
      {
        title: "دليل البرامج من رأس القائمة",
        description:
          "إذا أعلنت قائمتك عن دليل XMLTV (url-tvg أو x-tvg-url)، يُحمَّل تلقائيًا ويُربط بكل قناة عبر tvg-id أو عبر الاسم.",
      },
      {
        title: "الفئات والشعارات محفوظة",
        description: "تتحوّل group-title إلى فئاتك وtvg-logo إلى شعارات القنوات.",
      },
      {
        title: "اكتشاف Xtream خلف M3U",
        description:
          "كثير من روابط M3U هي في الحقيقة لوحة Xtream (get.php?username=…). يكتشف التطبيق ذلك وينتقل إلى واجهة Xtream الكاملة: فئات ودليل برامج وتفاصيل أفلام أفضل.",
      },
      {
        title: "Chromecast وAirPlay وصورة داخل صورة",
        description: "أرسل أي قناة إلى التلفاز، أو تابع المشاهدة في نافذة صغيرة فوق تطبيقاتك.",
      },
      {
        title: "بحث ومفضلة واستئناف",
        description: "اعثر على قناة في ثانية، وثبّت ما تشاهده، واستأنف الفيلم من حيث توقفت.",
      },
    ],
    explainTitle: "M3U وM3U8: ماذا يحتوي الملف؟",
    explain: [
      "قائمة M3U ملف نصي. كل عنصر فيها سطر #EXTINF (الاسم والشعار والمجموعة ومعرّف الدليل) يليه عنوان البث. وM3U8 هو الصيغة نفسها بترميز UTF-8، ما يحفظ أسماء القنوات العربية وغير اللاتينية سليمة. يقرأ EDGE IPTV الصيغتين.",
      "يعطي معظم المزوّدين القائمة كرابط لا كملف، وغالبًا ينتهي بـget.php مع اسم المستخدم وكلمة المرور. هذا الرابط هو كل ما يحتاجه EDGE IPTV: تُحمَّل القائمة من جديد كل يوم، فتظهر القنوات الجديدة دون أن تفعل شيئًا.",
    ],
    faq: [
      {
        q: "كيف أفتح ملف M3U على الآيفون؟",
        a: "ثبّت مشغّل IPTV مثل EDGE IPTV، واضغط «إضافة قائمة تشغيل»، واختر «قائمة تشغيل M3U»، والصق رابط مزوّدك. تُحمَّل القنوات في ثوانٍ.",
      },
      {
        q: "هل يدعم EDGE IPTV صيغة M3U8؟",
        a: "نعم. يدعم قوائم M3U وM3U8، وكذلك بث HLS بصيغة .m3u8 داخلها.",
      },
      {
        q: "هل سأحصل على دليل برامج مع قائمة M3U؟",
        a: "نعم، إذا كانت قائمتك تعلن عن دليل XMLTV في سطرها الأول (url-tvg أو x-tvg-url). يحمّله EDGE IPTV ويربطه بقنواتك تلقائيًا.",
      },
      {
        q: "هل يوفّر EDGE IPTV قنوات؟",
        a: "لا. EDGE IPTV مشغّل فقط: أنت تجلب القائمة من مزوّد IPTV الخاص بك.",
      },
      {
        q: "هل مشغل M3U مجاني؟",
        a: "تحميل التطبيق مجاني مع تجربة مجانية لسبعة أيام. بعدها تتطلب المشاهدة اشتراكًا بـ3.99 دولار شهريًا أو 19.99 دولار سنويًا، دون إعلانات.",
      },
    ],
  },

  it: {
    metaTitle: "Lettore M3U per iPhone e iPad: apri playlist M3U e M3U8",
    metaDescription:
      "Riproduci qualsiasi playlist IPTV M3U o M3U8 su iPhone e iPad. EDGE IPTV ordina TV, film e serie, carica la guida TV e trasmette su Chromecast e AirPlay.",
    navLabel: "Lettore M3U per iPhone",
    eyebrow: "Playlist M3U e M3U8",
    title: "Il lettore M3U per iPhone e iPad",
    intro:
      "Incolla il link M3U del tuo provider IPTV ed EDGE IPTV trasforma una semplice lista di stream in una vera app TV: canali per categoria, film e serie a parte, guida TV e una riproduzione che funziona.",
    imageAlt: "Guida TV di EDGE IPTV su iPhone, caricata da una playlist M3U",
    needTitle: "Cosa ti serve",
    need: [
      "Un iPhone o iPad con iOS 17 o successivo",
      "Il link M3U o M3U8 del tuo provider IPTV (EDGE IPTV è il lettore, non vende canali)",
    ],
    stepsTitle: "Apri una playlist M3U in meno di 2 minuti",
    steps: [
      {
        title: "Installa EDGE IPTV",
        description: "Gratis su App Store, con 7 giorni di prova gratuita.",
      },
      {
        title: "Tocca «Aggiungi una playlist», poi «Playlist M3U»",
        description: "Incolla l'URL della playlist (.m3u o .m3u8) e dalle un nome.",
      },
      {
        title: "Tocca «Aggiungi la playlist»",
        description:
          "L'app scarica la lista, la ordina e carica la guida TV. I tuoi canali compaiono subito.",
      },
    ],
    featuresTitle: "Cosa fa EDGE IPTV con il tuo M3U",
    features: [
      {
        title: "TV, film e serie in ordine",
        description:
          "Un M3U non dice cosa sia ogni riga. L'app lo capisce dal percorso dello stream, dal numero di episodio (S01E02) e dal tipo di file, così film e serie non si mescolano ai canali in diretta.",
      },
      {
        title: "Guida TV dall'intestazione",
        description:
          "Se il tuo M3U indica una guida XMLTV (url-tvg o x-tvg-url), viene caricata da sola e associata a ogni canale tramite tvg-id o, in mancanza, il nome.",
      },
      {
        title: "Categorie e loghi mantenuti",
        description: "group-title diventa le tue categorie e tvg-logo i loghi dei canali.",
      },
      {
        title: "Xtream riconosciuto dietro l'M3U",
        description:
          "Molti link M3U sono in realtà un pannello Xtream (get.php?username=…). L'app lo riconosce e passa all'API Xtream completa: categorie, guida e schede film migliori.",
      },
      {
        title: "Chromecast, AirPlay e Picture in Picture",
        description:
          "Manda un canale alla TV o continua a guardare in una piccola finestra sopra le altre app.",
      },
      {
        title: "Ricerca, preferiti e ripresa",
        description:
          "Trova un canale in un attimo, fissa quelli che guardi e riprendi un film da dove l'avevi lasciato.",
      },
    ],
    explainTitle: "M3U, M3U8: cosa c'è nel file?",
    explain: [
      "Una playlist M3U è un file di testo. Ogni voce è una riga #EXTINF (nome, logo, gruppo, ID della guida) seguita dall'indirizzo dello stream. M3U8 è lo stesso formato codificato in UTF-8, che conserva accenti e nomi di canali non latini. EDGE IPTV legge entrambi.",
      "La maggior parte dei provider fornisce la playlist come link e non come file, spesso con get.php e le tue credenziali dentro. Quel link basta a EDGE IPTV: la lista viene riscaricata ogni giorno, quindi i nuovi canali compaiono senza che tu faccia nulla.",
    ],
    faq: [
      {
        q: "Come apro un file M3U su iPhone?",
        a: "Installa un lettore IPTV come EDGE IPTV, tocca «Aggiungi una playlist», scegli «Playlist M3U» e incolla il link del tuo provider. I canali si caricano in pochi secondi.",
      },
      {
        q: "EDGE IPTV supporta M3U8?",
        a: "Sì. Supporta playlist M3U e M3U8, e anche gli stream HLS .m3u8 al loro interno.",
      },
      {
        q: "Avrò una guida TV con una playlist M3U?",
        a: "Sì, se la tua playlist indica una guida XMLTV nella prima riga (url-tvg o x-tvg-url). EDGE IPTV la carica e la associa ai tuoi canali automaticamente.",
      },
      {
        q: "EDGE IPTV fornisce canali?",
        a: "No. EDGE IPTV è un lettore: la playlist la porti tu dal tuo provider IPTV.",
      },
      {
        q: "Il lettore M3U è gratuito?",
        a: "Il download è gratuito, con 7 giorni di prova gratuita. Poi guardare richiede un abbonamento da 3,99 € al mese o 19,99 € all'anno, senza pubblicità.",
      },
    ],
  },
};
