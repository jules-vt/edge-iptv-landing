import type { Lang } from "@/lib/i18n";

/**
 * Copy for the free M3U checker. `{n}`, `{server}` and `{user}` are replaced
 * at render time.
 */
export interface CheckerUi {
  tabPaste: string;
  tabFile: string;
  tabUrl: string;
  pastePlaceholder: string;
  fileLabel: string;
  fileHint: string;
  urlPlaceholder: string;
  urlNote: string;
  analyze: string;
  loading: string;
  privacy: string;
  errorEmpty: string;
  errorFetch: string;
  errorNotM3U: string;
  summaryTitle: string;
  entries: string;
  live: string;
  movies: string;
  episodes: string;
  groups: string;
  checksTitle: string;
  ok: string;
  headerOk: string;
  headerMissing: string;
  guideFound: string;
  guideMissing: string;
  orphan: string;
  duplicates: string;
  missingTvgId: string;
  missingLogo: string;
  missingGroup: string;
  insecure: string;
  invalid: string;
  xtreamTitle: string;
  xtreamBody: string;
  groupsTitle: string;
  entriesTitle: string;
  search: string;
  showing: string;
  colName: string;
  colGroup: string;
  colType: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}

export interface CheckerCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  ui: CheckerUi;
  howTitle: string;
  how: string[];
  checksTitle: string;
  checks: { title: string; description: string }[];
  faq: { q: string; a: string }[];
}

export const CHECKER_COPY: Record<Lang, CheckerCopy> = {
  en: {
    metaTitle: "M3U Checker: Test & Analyze an IPTV Playlist Online",
    metaDescription:
      "Free M3U and M3U8 playlist checker. Count channels, movies and series, find the TV guide, duplicates and broken entries. Runs in your browser, nothing uploaded.",
    eyebrow: "Free tool · no sign-up",
    title: "M3U playlist checker",
    intro:
      "Paste an M3U or M3U8 playlist, or open the file, and see what is inside: channels, movies and series, categories, the TV guide, and the entries that will cause trouble.",
    ui: {
      tabPaste: "Paste",
      tabFile: "File",
      tabUrl: "URL",
      pastePlaceholder: "#EXTM3U\n#EXTINF:-1 tvg-id=\"...\" group-title=\"...\",Channel name\nhttp://...",
      fileLabel: "Choose a .m3u or .m3u8 file",
      fileHint: "or drop it here",
      urlPlaceholder: "http://provider.example/get.php?username=…&password=…&type=m3u_plus",
      urlNote:
        "Your browser fetches the link directly from your provider; it never goes through our server. Many providers block this kind of request. If that happens, open the link in a new tab to download the file, then use the File tab.",
      analyze: "Check playlist",
      loading: "Reading the playlist…",
      privacy: "Everything happens in your browser. The playlist and the credentials it contains never leave your device.",
      errorEmpty: "Paste a playlist, choose a file or enter a link first.",
      errorFetch:
        "The provider did not let the browser read this link (blocked request or plain http). Open it in a new tab to download the file, then use the File tab.",
      errorNotM3U: "No playlist entries found. An M3U starts with #EXTM3U and lists #EXTINF lines followed by stream addresses.",
      summaryTitle: "Summary",
      entries: "Entries",
      live: "Live channels",
      movies: "Movies",
      episodes: "Series episodes",
      groups: "Categories",
      checksTitle: "Checks",
      ok: "OK",
      headerOk: "Starts with #EXTM3U",
      headerMissing: "No #EXTM3U header: some players will refuse the file",
      guideFound: "TV guide declared: {n}",
      guideMissing: "No TV guide (url-tvg / x-tvg-url) declared in the header",
      orphan: "#EXTINF lines without a stream address: {n}",
      duplicates: "Duplicate stream addresses: {n}",
      missingTvgId: "Live channels without tvg-id (the guide will be matched by name): {n}",
      missingLogo: "Entries without a logo: {n}",
      missingGroup: "Entries without a category: {n}",
      insecure: "Streams over plain http: {n}",
      invalid: "Addresses that are not http(s), rtmp, rtsp or udp: {n}",
      xtreamTitle: "This link is an Xtream Codes login",
      xtreamBody:
        "Server {server}, username {user}. Entering them as Xtream Codes rather than M3U gives you real categories, a per-channel TV guide and film details. EDGE IPTV does that switch on its own.",
      groupsTitle: "Categories",
      entriesTitle: "Entries",
      search: "Search a name or category",
      showing: "Showing {n}",
      colName: "Name",
      colGroup: "Category",
      colType: "Type",
      ctaTitle: "Watch this playlist on iPhone and iPad",
      ctaBody:
        "EDGE IPTV opens M3U and Xtream playlists, sorts live TV, movies and series the same way, and adds the TV guide, Chromecast and AirPlay.",
      ctaButton: "Start your 7-day free trial",
    },
    howTitle: "How to check an M3U playlist",
    how: [
      "Paste the content of the playlist, choose the .m3u or .m3u8 file, or enter the link your provider gave you.",
      "Click Check playlist. The file is read in your browser, even large playlists with tens of thousands of entries.",
      "Read the summary and the checks, then search the entries to find a channel or a category.",
    ],
    checksTitle: "What the checker looks at",
    checks: [
      {
        title: "Live, movies and series",
        description:
          "Each entry is classified from its stream path (/live/, /movie/, /series/), an episode number such as S01E02, and the file extension.",
      },
      {
        title: "TV guide",
        description: "Whether the header declares an XMLTV guide (url-tvg or x-tvg-url), and which live channels have a tvg-id to match it.",
      },
      {
        title: "Broken and duplicate entries",
        description: "#EXTINF lines with no address after them, the same stream listed twice, and addresses with an unknown scheme.",
      },
      {
        title: "Hidden Xtream logins",
        description: "A get.php?username=…&password=… link is an Xtream Codes account. The checker shows the server and username (never the password).",
      },
    ],
    faq: [
      {
        q: "Is my playlist uploaded anywhere?",
        a: "No. The checker runs in your browser. With the URL option, your browser contacts your provider directly; our server never sees the link or the playlist.",
      },
      {
        q: "Why can't the checker open my playlist link?",
        a: "Many IPTV providers don't allow web pages to read their links, and browsers block plain http requests from a secure page. Open the link in a new tab to download the file and use the File tab instead.",
      },
      {
        q: "Does the checker test if the streams play?",
        a: "No. It analyses the playlist itself. Whether a stream plays depends on your provider and your subscription, which is best tested in a player.",
      },
      {
        q: "What is the difference between M3U and M3U8?",
        a: "Same format; M3U8 is encoded in UTF-8, which keeps accents and non-Latin channel names intact. The checker reads both.",
      },
    ],
  },

  fr: {
    metaTitle: "Vérificateur M3U : tester et analyser une playlist IPTV",
    metaDescription:
      "Vérificateur gratuit de playlists M3U et M3U8 : chaînes, films, séries, guide TV, doublons et entrées cassées. Tout reste dans le navigateur, rien n'est envoyé.",
    eyebrow: "Outil gratuit · sans inscription",
    title: "Vérificateur de playlist M3U",
    intro:
      "Collez une playlist M3U ou M3U8, ou ouvrez le fichier, et voyez ce qu'elle contient : chaînes, films et séries, catégories, guide TV, et les entrées qui poseront problème.",
    ui: {
      tabPaste: "Coller",
      tabFile: "Fichier",
      tabUrl: "Lien",
      pastePlaceholder: "#EXTM3U\n#EXTINF:-1 tvg-id=\"...\" group-title=\"...\",Nom de la chaîne\nhttp://...",
      fileLabel: "Choisir un fichier .m3u ou .m3u8",
      fileHint: "ou le déposer ici",
      urlPlaceholder: "http://fournisseur.example/get.php?username=…&password=…&type=m3u_plus",
      urlNote:
        "Votre navigateur récupère le lien directement chez votre fournisseur, sans passer par notre serveur. Beaucoup de fournisseurs bloquent ce type de requête : dans ce cas, ouvrez le lien dans un nouvel onglet pour télécharger le fichier, puis utilisez l'onglet Fichier.",
      analyze: "Vérifier la playlist",
      loading: "Lecture de la playlist…",
      privacy: "Tout se passe dans votre navigateur. La playlist et les identifiants qu'elle contient ne quittent jamais votre appareil.",
      errorEmpty: "Collez une playlist, choisissez un fichier ou saisissez un lien d'abord.",
      errorFetch:
        "Le fournisseur n'a pas laissé le navigateur lire ce lien (requête bloquée ou http simple). Ouvrez-le dans un nouvel onglet pour télécharger le fichier, puis utilisez l'onglet Fichier.",
      errorNotM3U: "Aucune entrée trouvée. Un M3U commence par #EXTM3U et liste des lignes #EXTINF suivies d'adresses de flux.",
      summaryTitle: "Résumé",
      entries: "Entrées",
      live: "Chaînes en direct",
      movies: "Films",
      episodes: "Épisodes de séries",
      groups: "Catégories",
      checksTitle: "Vérifications",
      ok: "OK",
      headerOk: "Commence par #EXTM3U",
      headerMissing: "Pas d'en-tête #EXTM3U : certains lecteurs refuseront le fichier",
      guideFound: "Guide TV déclaré : {n}",
      guideMissing: "Aucun guide TV (url-tvg / x-tvg-url) déclaré dans l'en-tête",
      orphan: "Lignes #EXTINF sans adresse de flux : {n}",
      duplicates: "Adresses de flux en double : {n}",
      missingTvgId: "Chaînes en direct sans tvg-id (le guide sera associé par le nom) : {n}",
      missingLogo: "Entrées sans logo : {n}",
      missingGroup: "Entrées sans catégorie : {n}",
      insecure: "Flux en http simple : {n}",
      invalid: "Adresses qui ne sont ni http(s), ni rtmp, rtsp ou udp : {n}",
      xtreamTitle: "Ce lien est un accès Xtream Codes",
      xtreamBody:
        "Serveur {server}, utilisateur {user}. Saisis en Xtream Codes plutôt qu'en M3U, ils donnent de vraies catégories, un guide TV par chaîne et des fiches films. EDGE IPTV fait ce passage tout seul.",
      groupsTitle: "Catégories",
      entriesTitle: "Entrées",
      search: "Chercher un nom ou une catégorie",
      showing: "{n} affichées",
      colName: "Nom",
      colGroup: "Catégorie",
      colType: "Type",
      ctaTitle: "Regardez cette playlist sur iPhone et iPad",
      ctaBody:
        "EDGE IPTV ouvre les playlists M3U et Xtream, trie TV, films et séries de la même façon, et ajoute le guide TV, Chromecast et AirPlay.",
      ctaButton: "Démarrer l'essai gratuit de 7 jours",
    },
    howTitle: "Comment vérifier une playlist M3U",
    how: [
      "Collez le contenu de la playlist, choisissez le fichier .m3u ou .m3u8, ou saisissez le lien donné par votre fournisseur.",
      "Cliquez sur Vérifier la playlist. Le fichier est lu dans votre navigateur, même les grosses playlists de dizaines de milliers d'entrées.",
      "Lisez le résumé et les vérifications, puis cherchez dans les entrées pour retrouver une chaîne ou une catégorie.",
    ],
    checksTitle: "Ce que vérifie l'outil",
    checks: [
      {
        title: "TV, films et séries",
        description:
          "Chaque entrée est classée d'après le chemin du flux (/live/, /movie/, /series/), un numéro d'épisode comme S01E02 et l'extension du fichier.",
      },
      {
        title: "Guide TV",
        description: "Si l'en-tête déclare un guide XMLTV (url-tvg ou x-tvg-url), et quelles chaînes ont un tvg-id pour s'y rattacher.",
      },
      {
        title: "Entrées cassées et doublons",
        description: "Lignes #EXTINF sans adresse derrière, même flux listé deux fois, et adresses au protocole inconnu.",
      },
      {
        title: "Accès Xtream cachés",
        description: "Un lien get.php?username=…&password=… est un compte Xtream Codes. L'outil affiche le serveur et l'utilisateur (jamais le mot de passe).",
      },
    ],
    faq: [
      {
        q: "Ma playlist est-elle envoyée quelque part ?",
        a: "Non. L'outil fonctionne dans votre navigateur. Avec l'option Lien, c'est votre navigateur qui contacte votre fournisseur ; notre serveur ne voit jamais ni le lien ni la playlist.",
      },
      {
        q: "Pourquoi l'outil n'arrive-t-il pas à ouvrir mon lien ?",
        a: "Beaucoup de fournisseurs IPTV interdisent aux pages web de lire leurs liens, et les navigateurs bloquent les requêtes http simples depuis une page sécurisée. Ouvrez le lien dans un nouvel onglet pour télécharger le fichier, puis utilisez l'onglet Fichier.",
      },
      {
        q: "L'outil teste-t-il si les flux fonctionnent ?",
        a: "Non. Il analyse la playlist elle-même. La lecture d'un flux dépend de votre fournisseur et de votre abonnement, ce qui se teste mieux dans un lecteur.",
      },
      {
        q: "Quelle différence entre M3U et M3U8 ?",
        a: "C'est le même format ; le M3U8 est encodé en UTF-8, ce qui préserve les accents et les noms de chaînes non latins. L'outil lit les deux.",
      },
    ],
  },

  es: {
    metaTitle: "Comprobador M3U: prueba y analiza una lista IPTV online",
    metaDescription:
      "Comprobador gratis de listas M3U y M3U8: canales, películas, series, guía de TV, duplicados y entradas rotas. Funciona en tu navegador, no se sube nada.",
    eyebrow: "Herramienta gratis · sin registro",
    title: "Comprobador de listas M3U",
    intro:
      "Pega una lista M3U o M3U8, o abre el archivo, y mira lo que contiene: canales, películas y series, categorías, la guía de TV y las entradas que darán problemas.",
    ui: {
      tabPaste: "Pegar",
      tabFile: "Archivo",
      tabUrl: "Enlace",
      pastePlaceholder: "#EXTM3U\n#EXTINF:-1 tvg-id=\"...\" group-title=\"...\",Nombre del canal\nhttp://...",
      fileLabel: "Elegir un archivo .m3u o .m3u8",
      fileHint: "o soltarlo aquí",
      urlPlaceholder: "http://proveedor.example/get.php?username=…&password=…&type=m3u_plus",
      urlNote:
        "Tu navegador obtiene el enlace directamente de tu proveedor, sin pasar por nuestro servidor. Muchos proveedores bloquean este tipo de petición: si pasa, abre el enlace en una pestaña nueva para descargar el archivo y usa la pestaña Archivo.",
      analyze: "Comprobar la lista",
      loading: "Leyendo la lista…",
      privacy: "Todo ocurre en tu navegador. La lista y las credenciales que contiene nunca salen de tu dispositivo.",
      errorEmpty: "Primero pega una lista, elige un archivo o introduce un enlace.",
      errorFetch:
        "El proveedor no dejó que el navegador leyera este enlace (petición bloqueada o http simple). Ábrelo en una pestaña nueva para descargar el archivo y usa la pestaña Archivo.",
      errorNotM3U: "No se encontraron entradas. Un M3U empieza con #EXTM3U y contiene líneas #EXTINF seguidas de direcciones de streams.",
      summaryTitle: "Resumen",
      entries: "Entradas",
      live: "Canales en vivo",
      movies: "Películas",
      episodes: "Episodios de series",
      groups: "Categorías",
      checksTitle: "Comprobaciones",
      ok: "OK",
      headerOk: "Empieza con #EXTM3U",
      headerMissing: "Sin cabecera #EXTM3U: algunos reproductores rechazarán el archivo",
      guideFound: "Guía de TV declarada: {n}",
      guideMissing: "No hay guía de TV (url-tvg / x-tvg-url) declarada en la cabecera",
      orphan: "Líneas #EXTINF sin dirección de stream: {n}",
      duplicates: "Direcciones de stream duplicadas: {n}",
      missingTvgId: "Canales en vivo sin tvg-id (la guía se asociará por nombre): {n}",
      missingLogo: "Entradas sin logo: {n}",
      missingGroup: "Entradas sin categoría: {n}",
      insecure: "Streams por http simple: {n}",
      invalid: "Direcciones que no son http(s), rtmp, rtsp ni udp: {n}",
      xtreamTitle: "Este enlace es un acceso Xtream Codes",
      xtreamBody:
        "Servidor {server}, usuario {user}. Introducidos como Xtream Codes en vez de M3U, dan categorías reales, guía de TV por canal y fichas de películas. EDGE IPTV hace ese cambio solo.",
      groupsTitle: "Categorías",
      entriesTitle: "Entradas",
      search: "Buscar un nombre o categoría",
      showing: "Mostrando {n}",
      colName: "Nombre",
      colGroup: "Categoría",
      colType: "Tipo",
      ctaTitle: "Mira esta lista en iPhone y iPad",
      ctaBody:
        "EDGE IPTV abre listas M3U y Xtream, ordena TV, películas y series de la misma forma y añade la guía de TV, Chromecast y AirPlay.",
      ctaButton: "Empieza tu prueba gratuita de 7 días",
    },
    howTitle: "Cómo comprobar una lista M3U",
    how: [
      "Pega el contenido de la lista, elige el archivo .m3u o .m3u8, o introduce el enlace que te dio tu proveedor.",
      "Haz clic en Comprobar la lista. El archivo se lee en tu navegador, incluso listas grandes con decenas de miles de entradas.",
      "Lee el resumen y las comprobaciones, y busca en las entradas para encontrar un canal o una categoría.",
    ],
    checksTitle: "Qué revisa la herramienta",
    checks: [
      {
        title: "TV, películas y series",
        description:
          "Cada entrada se clasifica por la ruta del stream (/live/, /movie/, /series/), un número de episodio como S01E02 y la extensión del archivo.",
      },
      {
        title: "Guía de TV",
        description: "Si la cabecera declara una guía XMLTV (url-tvg o x-tvg-url) y qué canales tienen un tvg-id para asociarla.",
      },
      {
        title: "Entradas rotas y duplicados",
        description: "Líneas #EXTINF sin dirección, el mismo stream dos veces y direcciones con un protocolo desconocido.",
      },
      {
        title: "Accesos Xtream ocultos",
        description: "Un enlace get.php?username=…&password=… es una cuenta Xtream Codes. La herramienta muestra el servidor y el usuario (nunca la contraseña).",
      },
    ],
    faq: [
      {
        q: "¿Se sube mi lista a algún sitio?",
        a: "No. La herramienta funciona en tu navegador. Con la opción Enlace, es tu navegador el que contacta a tu proveedor; nuestro servidor nunca ve el enlace ni la lista.",
      },
      {
        q: "¿Por qué la herramienta no puede abrir mi enlace?",
        a: "Muchos proveedores IPTV no permiten que las páginas web lean sus enlaces, y los navegadores bloquean peticiones http simples desde una página segura. Abre el enlace en una pestaña nueva para descargar el archivo y usa la pestaña Archivo.",
      },
      {
        q: "¿La herramienta comprueba si los streams funcionan?",
        a: "No. Analiza la lista en sí. Que un stream se reproduzca depende de tu proveedor y tu suscripción, y eso se prueba mejor en un reproductor.",
      },
      {
        q: "¿Qué diferencia hay entre M3U y M3U8?",
        a: "Es el mismo formato; M3U8 está codificado en UTF-8, lo que conserva acentos y nombres de canales no latinos. La herramienta lee ambos.",
      },
    ],
  },

  pt: {
    metaTitle: "Verificador M3U: teste e analise uma lista IPTV online",
    metaDescription:
      "Verificador grátis de listas M3U e M3U8: canais, filmes, séries, guia de TV, duplicados e entradas quebradas. Roda no navegador, nada é enviado.",
    eyebrow: "Ferramenta grátis · sem cadastro",
    title: "Verificador de listas M3U",
    intro:
      "Cole uma lista M3U ou M3U8, ou abra o arquivo, e veja o que há nela: canais, filmes e séries, categorias, guia de TV e as entradas que vão dar problema.",
    ui: {
      tabPaste: "Colar",
      tabFile: "Arquivo",
      tabUrl: "Link",
      pastePlaceholder: "#EXTM3U\n#EXTINF:-1 tvg-id=\"...\" group-title=\"...\",Nome do canal\nhttp://...",
      fileLabel: "Escolher um arquivo .m3u ou .m3u8",
      fileHint: "ou soltar aqui",
      urlPlaceholder: "http://provedor.example/get.php?username=…&password=…&type=m3u_plus",
      urlNote:
        "Seu navegador busca o link direto no seu provedor, sem passar pelo nosso servidor. Muitos provedores bloqueiam esse tipo de pedido: se acontecer, abra o link numa nova aba para baixar o arquivo e use a aba Arquivo.",
      analyze: "Verificar a lista",
      loading: "Lendo a lista…",
      privacy: "Tudo acontece no seu navegador. A lista e as credenciais dentro dela nunca saem do seu aparelho.",
      errorEmpty: "Primeiro cole uma lista, escolha um arquivo ou informe um link.",
      errorFetch:
        "O provedor não deixou o navegador ler este link (pedido bloqueado ou http simples). Abra numa nova aba para baixar o arquivo e use a aba Arquivo.",
      errorNotM3U: "Nenhuma entrada encontrada. Um M3U começa com #EXTM3U e lista linhas #EXTINF seguidas de endereços de stream.",
      summaryTitle: "Resumo",
      entries: "Entradas",
      live: "Canais ao vivo",
      movies: "Filmes",
      episodes: "Episódios de séries",
      groups: "Categorias",
      checksTitle: "Verificações",
      ok: "OK",
      headerOk: "Começa com #EXTM3U",
      headerMissing: "Sem cabeçalho #EXTM3U: alguns players vão recusar o arquivo",
      guideFound: "Guia de TV declarado: {n}",
      guideMissing: "Nenhum guia de TV (url-tvg / x-tvg-url) declarado no cabeçalho",
      orphan: "Linhas #EXTINF sem endereço de stream: {n}",
      duplicates: "Endereços de stream duplicados: {n}",
      missingTvgId: "Canais ao vivo sem tvg-id (o guia será ligado pelo nome): {n}",
      missingLogo: "Entradas sem logo: {n}",
      missingGroup: "Entradas sem categoria: {n}",
      insecure: "Streams em http simples: {n}",
      invalid: "Endereços que não são http(s), rtmp, rtsp nem udp: {n}",
      xtreamTitle: "Este link é um acesso Xtream Codes",
      xtreamBody:
        "Servidor {server}, usuário {user}. Informados como Xtream Codes em vez de M3U, eles trazem categorias reais, guia de TV por canal e fichas de filmes. O EDGE IPTV faz essa troca sozinho.",
      groupsTitle: "Categorias",
      entriesTitle: "Entradas",
      search: "Buscar um nome ou categoria",
      showing: "Mostrando {n}",
      colName: "Nome",
      colGroup: "Categoria",
      colType: "Tipo",
      ctaTitle: "Assista esta lista no iPhone e iPad",
      ctaBody:
        "O EDGE IPTV abre listas M3U e Xtream, organiza TV, filmes e séries do mesmo jeito e adiciona guia de TV, Chromecast e AirPlay.",
      ctaButton: "Comece seu teste grátis de 7 dias",
    },
    howTitle: "Como verificar uma lista M3U",
    how: [
      "Cole o conteúdo da lista, escolha o arquivo .m3u ou .m3u8, ou informe o link que o seu provedor enviou.",
      "Clique em Verificar a lista. O arquivo é lido no seu navegador, mesmo listas grandes com dezenas de milhares de entradas.",
      "Leia o resumo e as verificações e busque nas entradas para achar um canal ou uma categoria.",
    ],
    checksTitle: "O que a ferramenta verifica",
    checks: [
      {
        title: "TV, filmes e séries",
        description:
          "Cada entrada é classificada pelo caminho do stream (/live/, /movie/, /series/), um número de episódio como S01E02 e a extensão do arquivo.",
      },
      {
        title: "Guia de TV",
        description: "Se o cabeçalho declara um guia XMLTV (url-tvg ou x-tvg-url) e quais canais têm tvg-id para ligá-lo.",
      },
      {
        title: "Entradas quebradas e duplicadas",
        description: "Linhas #EXTINF sem endereço, o mesmo stream duas vezes e endereços com protocolo desconhecido.",
      },
      {
        title: "Acessos Xtream escondidos",
        description: "Um link get.php?username=…&password=… é uma conta Xtream Codes. A ferramenta mostra o servidor e o usuário (nunca a senha).",
      },
    ],
    faq: [
      {
        q: "Minha lista é enviada para algum lugar?",
        a: "Não. A ferramenta roda no seu navegador. Com a opção Link, é o seu navegador que fala com o provedor; nosso servidor nunca vê o link nem a lista.",
      },
      {
        q: "Por que a ferramenta não consegue abrir meu link?",
        a: "Muitos provedores IPTV não deixam páginas web lerem seus links, e os navegadores bloqueiam pedidos http simples vindos de uma página segura. Abra o link numa nova aba para baixar o arquivo e use a aba Arquivo.",
      },
      {
        q: "A ferramenta testa se os streams funcionam?",
        a: "Não. Ela analisa a lista em si. Se um stream reproduz depende do provedor e da assinatura, e isso se testa melhor num player.",
      },
      {
        q: "Qual a diferença entre M3U e M3U8?",
        a: "É o mesmo formato; o M3U8 é codificado em UTF-8, o que preserva acentos e nomes de canais não latinos. A ferramenta lê os dois.",
      },
    ],
  },

  de: {
    metaTitle: "M3U-Checker: IPTV-Playlist online testen & analysieren",
    metaDescription:
      "Kostenloser Checker für M3U- und M3U8-Playlists: Sender, Filme, Serien, TV-Guide, Duplikate und defekte Einträge. Läuft im Browser, nichts wird hochgeladen.",
    eyebrow: "Kostenloses Tool · ohne Anmeldung",
    title: "M3U-Playlist-Checker",
    intro:
      "Füge eine M3U- oder M3U8-Playlist ein oder öffne die Datei und sieh, was drinsteckt: Sender, Filme und Serien, Kategorien, der Programmführer und die Einträge, die Ärger machen werden.",
    ui: {
      tabPaste: "Einfügen",
      tabFile: "Datei",
      tabUrl: "Link",
      pastePlaceholder: "#EXTM3U\n#EXTINF:-1 tvg-id=\"...\" group-title=\"...\",Sendername\nhttp://...",
      fileLabel: ".m3u- oder .m3u8-Datei wählen",
      fileHint: "oder hier ablegen",
      urlPlaceholder: "http://anbieter.example/get.php?username=…&password=…&type=m3u_plus",
      urlNote:
        "Dein Browser holt den Link direkt bei deinem Anbieter, nicht über unseren Server. Viele Anbieter blockieren solche Anfragen: Öffne den Link dann in einem neuen Tab, lade die Datei herunter und nutze den Tab Datei.",
      analyze: "Playlist prüfen",
      loading: "Playlist wird gelesen…",
      privacy: "Alles passiert in deinem Browser. Die Playlist und die enthaltenen Zugangsdaten verlassen nie dein Gerät.",
      errorEmpty: "Füge zuerst eine Playlist ein, wähle eine Datei oder gib einen Link ein.",
      errorFetch:
        "Der Anbieter hat dem Browser das Lesen dieses Links verweigert (blockierte Anfrage oder einfaches http). Öffne ihn in einem neuen Tab, lade die Datei herunter und nutze den Tab Datei.",
      errorNotM3U: "Keine Einträge gefunden. Eine M3U beginnt mit #EXTM3U und enthält #EXTINF-Zeilen, gefolgt von Stream-Adressen.",
      summaryTitle: "Übersicht",
      entries: "Einträge",
      live: "Live-Sender",
      movies: "Filme",
      episodes: "Serienfolgen",
      groups: "Kategorien",
      checksTitle: "Prüfungen",
      ok: "OK",
      headerOk: "Beginnt mit #EXTM3U",
      headerMissing: "Kein #EXTM3U-Kopf: Manche Player lehnen die Datei ab",
      guideFound: "Programmführer angegeben: {n}",
      guideMissing: "Kein Programmführer (url-tvg / x-tvg-url) im Kopf angegeben",
      orphan: "#EXTINF-Zeilen ohne Stream-Adresse: {n}",
      duplicates: "Doppelte Stream-Adressen: {n}",
      missingTvgId: "Live-Sender ohne tvg-id (der Guide wird über den Namen zugeordnet): {n}",
      missingLogo: "Einträge ohne Logo: {n}",
      missingGroup: "Einträge ohne Kategorie: {n}",
      insecure: "Streams über einfaches http: {n}",
      invalid: "Adressen, die weder http(s), rtmp, rtsp noch udp sind: {n}",
      xtreamTitle: "Dieser Link ist ein Xtream-Codes-Zugang",
      xtreamBody:
        "Server {server}, Benutzer {user}. Als Xtream Codes statt als M3U eingegeben, gibt es echte Kategorien, einen Programmführer pro Sender und Filmdetails. EDGE IPTV wechselt von selbst.",
      groupsTitle: "Kategorien",
      entriesTitle: "Einträge",
      search: "Namen oder Kategorie suchen",
      showing: "{n} angezeigt",
      colName: "Name",
      colGroup: "Kategorie",
      colType: "Typ",
      ctaTitle: "Diese Playlist auf iPhone und iPad schauen",
      ctaBody:
        "EDGE IPTV öffnet M3U- und Xtream-Playlists, sortiert Live-TV, Filme und Serien genauso und bringt Programmführer, Chromecast und AirPlay mit.",
      ctaButton: "7 Tage kostenlos testen",
    },
    howTitle: "So prüfst du eine M3U-Playlist",
    how: [
      "Füge den Inhalt der Playlist ein, wähle die .m3u- oder .m3u8-Datei oder gib den Link deines Anbieters ein.",
      "Klicke auf Playlist prüfen. Die Datei wird in deinem Browser gelesen, auch große Playlists mit Zehntausenden Einträgen.",
      "Lies Übersicht und Prüfungen und durchsuche die Einträge nach einem Sender oder einer Kategorie.",
    ],
    checksTitle: "Was der Checker prüft",
    checks: [
      {
        title: "Live-TV, Filme und Serien",
        description:
          "Jeder Eintrag wird nach dem Stream-Pfad (/live/, /movie/, /series/), einer Folgennummer wie S01E02 und der Dateiendung eingeordnet.",
      },
      {
        title: "Programmführer",
        description: "Ob der Kopf einen XMLTV-Guide angibt (url-tvg oder x-tvg-url) und welche Sender eine tvg-id zur Zuordnung haben.",
      },
      {
        title: "Defekte und doppelte Einträge",
        description: "#EXTINF-Zeilen ohne Adresse, derselbe Stream zweimal und Adressen mit unbekanntem Protokoll.",
      },
      {
        title: "Versteckte Xtream-Zugänge",
        description: "Ein Link get.php?username=…&password=… ist ein Xtream-Codes-Konto. Der Checker zeigt Server und Benutzer (nie das Passwort).",
      },
    ],
    faq: [
      {
        q: "Wird meine Playlist irgendwo hochgeladen?",
        a: "Nein. Der Checker läuft in deinem Browser. Bei der Link-Option kontaktiert dein Browser direkt deinen Anbieter; unser Server sieht weder den Link noch die Playlist.",
      },
      {
        q: "Warum kann der Checker meinen Link nicht öffnen?",
        a: "Viele IPTV-Anbieter erlauben Webseiten nicht, ihre Links zu lesen, und Browser blockieren einfache http-Anfragen von einer sicheren Seite. Öffne den Link in einem neuen Tab, lade die Datei herunter und nutze den Tab Datei.",
      },
      {
        q: "Testet der Checker, ob die Streams laufen?",
        a: "Nein. Er analysiert die Playlist selbst. Ob ein Stream läuft, hängt von Anbieter und Abo ab und lässt sich am besten in einem Player testen.",
      },
      {
        q: "Was ist der Unterschied zwischen M3U und M3U8?",
        a: "Dasselbe Format; M3U8 ist in UTF-8 kodiert und erhält Umlaute und nicht-lateinische Sendernamen. Der Checker liest beide.",
      },
    ],
  },

  ar: {
    metaTitle: "فاحص M3U: اختبر وحلّل قائمة IPTV عبر الإنترنت",
    metaDescription:
      "فاحص مجاني لقوائم M3U وM3U8: القنوات والأفلام والمسلسلات ودليل البرامج والتكرارات والعناصر المعطوبة. يعمل في متصفحك ولا يُرفع أي شيء.",
    eyebrow: "أداة مجانية · دون تسجيل",
    title: "فاحص قوائم M3U",
    intro:
      "الصق قائمة M3U أو M3U8، أو افتح الملف، واعرف ما بداخلها: القنوات والأفلام والمسلسلات، والفئات، ودليل البرامج، والعناصر التي ستسبب مشاكل.",
    ui: {
      tabPaste: "لصق",
      tabFile: "ملف",
      tabUrl: "رابط",
      pastePlaceholder: "#EXTM3U\n#EXTINF:-1 tvg-id=\"...\" group-title=\"...\",اسم القناة\nhttp://...",
      fileLabel: "اختر ملف ‎.m3u أو ‎.m3u8",
      fileHint: "أو أفلته هنا",
      urlPlaceholder: "http://provider.example/get.php?username=…&password=…&type=m3u_plus",
      urlNote:
        "يجلب متصفحك الرابط مباشرة من مزوّدك دون المرور بخادمنا. كثير من المزوّدين يحظرون هذا النوع من الطلبات: عندها افتح الرابط في علامة تبويب جديدة لتنزيل الملف، ثم استخدم تبويب «ملف».",
      analyze: "افحص القائمة",
      loading: "جارٍ قراءة القائمة…",
      privacy: "كل شيء يحدث في متصفحك. لا تغادر القائمة ولا بيانات الدخول التي فيها جهازك أبدًا.",
      errorEmpty: "الصق قائمة أو اختر ملفًا أو أدخل رابطًا أولًا.",
      errorFetch:
        "لم يسمح المزوّد للمتصفح بقراءة هذا الرابط (طلب محظور أو http عادي). افتحه في علامة تبويب جديدة لتنزيل الملف، ثم استخدم تبويب «ملف».",
      errorNotM3U: "لم يُعثر على أي عنصر. تبدأ قائمة M3U بـ#EXTM3U وتتضمن أسطر #EXTINF يليها عنوان البث.",
      summaryTitle: "الملخص",
      entries: "العناصر",
      live: "قنوات مباشرة",
      movies: "أفلام",
      episodes: "حلقات مسلسلات",
      groups: "الفئات",
      checksTitle: "الفحوصات",
      ok: "سليم",
      headerOk: "تبدأ بـ#EXTM3U",
      headerMissing: "لا يوجد رأس #EXTM3U: بعض المشغّلات سترفض الملف",
      guideFound: "دليل البرامج المعلن: {n}",
      guideMissing: "لا يوجد دليل برامج (url-tvg / x-tvg-url) معلن في الرأس",
      orphan: "أسطر #EXTINF دون عنوان بث: {n}",
      duplicates: "عناوين بث مكررة: {n}",
      missingTvgId: "قنوات مباشرة دون tvg-id (سيُربط الدليل بالاسم): {n}",
      missingLogo: "عناصر دون شعار: {n}",
      missingGroup: "عناصر دون فئة: {n}",
      insecure: "بث عبر http عادي: {n}",
      invalid: "عناوين ليست http(s) أو rtmp أو rtsp أو udp: {n}",
      xtreamTitle: "هذا الرابط حساب Xtream Codes",
      xtreamBody:
        "الخادم {server}، المستخدم {user}. إدخالها كـXtream Codes بدل M3U يعطيك فئات حقيقية ودليل برامج لكل قناة وتفاصيل الأفلام. يقوم EDGE IPTV بهذا التحويل تلقائيًا.",
      groupsTitle: "الفئات",
      entriesTitle: "العناصر",
      search: "ابحث عن اسم أو فئة",
      showing: "معروض: {n}",
      colName: "الاسم",
      colGroup: "الفئة",
      colType: "النوع",
      ctaTitle: "شاهد هذه القائمة على الآيفون والآيباد",
      ctaBody:
        "يفتح EDGE IPTV قوائم M3U وXtream، ويرتّب البث المباشر والأفلام والمسلسلات بالطريقة نفسها، ويضيف دليل البرامج وChromecast وAirPlay.",
      ctaButton: "ابدأ تجربتك المجانية لسبعة أيام",
    },
    howTitle: "كيف تفحص قائمة M3U",
    how: [
      "الصق محتوى القائمة، أو اختر ملف ‎.m3u أو ‎.m3u8، أو أدخل الرابط الذي أعطاك إياه مزوّدك.",
      "اضغط «افحص القائمة». يُقرأ الملف في متصفحك، حتى القوائم الكبيرة ذات عشرات آلاف العناصر.",
      "اقرأ الملخص والفحوصات، ثم ابحث في العناصر عن قناة أو فئة.",
    ],
    checksTitle: "ما الذي تفحصه الأداة",
    checks: [
      {
        title: "بث مباشر وأفلام ومسلسلات",
        description:
          "يُصنَّف كل عنصر حسب مسار البث (/live/ و/movie/ و/series/) ورقم الحلقة مثل S01E02 وامتداد الملف.",
      },
      {
        title: "دليل البرامج",
        description: "هل يعلن الرأس عن دليل XMLTV (url-tvg أو x-tvg-url)، وأي القنوات تملك tvg-id لربطه.",
      },
      {
        title: "عناصر معطوبة ومكررة",
        description: "أسطر #EXTINF دون عنوان بعدها، والبث نفسه مدرج مرتين، وعناوين ببروتوكول غير معروف.",
      },
      {
        title: "حسابات Xtream مخفية",
        description: "الرابط get.php?username=…&password=… حساب Xtream Codes. تعرض الأداة الخادم واسم المستخدم (ولا تعرض كلمة المرور أبدًا).",
      },
    ],
    faq: [
      {
        q: "هل تُرفع قائمتي إلى أي مكان؟",
        a: "لا. تعمل الأداة في متصفحك. ومع خيار الرابط، يتصل متصفحك بمزوّدك مباشرة؛ ولا يرى خادمنا الرابط ولا القائمة أبدًا.",
      },
      {
        q: "لماذا لا تستطيع الأداة فتح رابطي؟",
        a: "كثير من مزوّدي IPTV لا يسمحون لصفحات الويب بقراءة روابطهم، والمتصفحات تحظر طلبات http العادية من صفحة آمنة. افتح الرابط في علامة تبويب جديدة لتنزيل الملف واستخدم تبويب «ملف».",
      },
      {
        q: "هل تختبر الأداة إن كان البث يعمل؟",
        a: "لا. إنها تحلّل القائمة نفسها. أما تشغيل البث فيعتمد على مزوّدك واشتراكك، والأفضل اختباره في مشغّل.",
      },
      {
        q: "ما الفرق بين M3U وM3U8؟",
        a: "الصيغة نفسها؛ M3U8 مرمّزة بـUTF-8، ما يحفظ أسماء القنوات العربية وغير اللاتينية سليمة. تقرأ الأداة الصيغتين.",
      },
    ],
  },

  it: {
    metaTitle: "Verifica M3U: testa e analizza una playlist IPTV online",
    metaDescription:
      "Verifica gratuita di playlist M3U e M3U8: canali, film, serie, guida TV, duplicati e voci rotte. Funziona nel browser, non viene caricato nulla.",
    eyebrow: "Strumento gratuito · senza registrazione",
    title: "Verifica playlist M3U",
    intro:
      "Incolla una playlist M3U o M3U8, o apri il file, e scopri cosa contiene: canali, film e serie, categorie, la guida TV e le voci che daranno problemi.",
    ui: {
      tabPaste: "Incolla",
      tabFile: "File",
      tabUrl: "Link",
      pastePlaceholder: "#EXTM3U\n#EXTINF:-1 tvg-id=\"...\" group-title=\"...\",Nome del canale\nhttp://...",
      fileLabel: "Scegli un file .m3u o .m3u8",
      fileHint: "o trascinalo qui",
      urlPlaceholder: "http://provider.example/get.php?username=…&password=…&type=m3u_plus",
      urlNote:
        "Il tuo browser recupera il link direttamente dal provider, senza passare dal nostro server. Molti provider bloccano questo tipo di richiesta: in quel caso apri il link in una nuova scheda per scaricare il file e usa la scheda File.",
      analyze: "Verifica la playlist",
      loading: "Lettura della playlist…",
      privacy: "Tutto avviene nel tuo browser. La playlist e le credenziali che contiene non lasciano mai il tuo dispositivo.",
      errorEmpty: "Prima incolla una playlist, scegli un file o inserisci un link.",
      errorFetch:
        "Il provider non ha permesso al browser di leggere questo link (richiesta bloccata o http semplice). Aprilo in una nuova scheda per scaricare il file e usa la scheda File.",
      errorNotM3U: "Nessuna voce trovata. Un M3U inizia con #EXTM3U ed elenca righe #EXTINF seguite da indirizzi di stream.",
      summaryTitle: "Riepilogo",
      entries: "Voci",
      live: "Canali in diretta",
      movies: "Film",
      episodes: "Episodi di serie",
      groups: "Categorie",
      checksTitle: "Controlli",
      ok: "OK",
      headerOk: "Inizia con #EXTM3U",
      headerMissing: "Nessuna intestazione #EXTM3U: alcuni lettori rifiuteranno il file",
      guideFound: "Guida TV dichiarata: {n}",
      guideMissing: "Nessuna guida TV (url-tvg / x-tvg-url) dichiarata nell'intestazione",
      orphan: "Righe #EXTINF senza indirizzo di stream: {n}",
      duplicates: "Indirizzi di stream duplicati: {n}",
      missingTvgId: "Canali in diretta senza tvg-id (la guida sarà associata per nome): {n}",
      missingLogo: "Voci senza logo: {n}",
      missingGroup: "Voci senza categoria: {n}",
      insecure: "Stream su http semplice: {n}",
      invalid: "Indirizzi che non sono http(s), rtmp, rtsp o udp: {n}",
      xtreamTitle: "Questo link è un accesso Xtream Codes",
      xtreamBody:
        "Server {server}, utente {user}. Inseriti come Xtream Codes invece che M3U, danno categorie vere, una guida TV per canale e schede dei film. EDGE IPTV fa questo passaggio da solo.",
      groupsTitle: "Categorie",
      entriesTitle: "Voci",
      search: "Cerca un nome o una categoria",
      showing: "{n} mostrate",
      colName: "Nome",
      colGroup: "Categoria",
      colType: "Tipo",
      ctaTitle: "Guarda questa playlist su iPhone e iPad",
      ctaBody:
        "EDGE IPTV apre playlist M3U e Xtream, ordina TV, film e serie allo stesso modo e aggiunge guida TV, Chromecast e AirPlay.",
      ctaButton: "Inizia la prova gratuita di 7 giorni",
    },
    howTitle: "Come verificare una playlist M3U",
    how: [
      "Incolla il contenuto della playlist, scegli il file .m3u o .m3u8, o inserisci il link del tuo provider.",
      "Clicca su Verifica la playlist. Il file viene letto nel tuo browser, anche le playlist grandi con decine di migliaia di voci.",
      "Leggi riepilogo e controlli, poi cerca tra le voci un canale o una categoria.",
    ],
    checksTitle: "Cosa controlla lo strumento",
    checks: [
      {
        title: "TV, film e serie",
        description:
          "Ogni voce è classificata dal percorso dello stream (/live/, /movie/, /series/), da un numero di episodio come S01E02 e dall'estensione del file.",
      },
      {
        title: "Guida TV",
        description: "Se l'intestazione dichiara una guida XMLTV (url-tvg o x-tvg-url) e quali canali hanno un tvg-id per associarla.",
      },
      {
        title: "Voci rotte e duplicate",
        description: "Righe #EXTINF senza indirizzo, lo stesso stream due volte e indirizzi con protocollo sconosciuto.",
      },
      {
        title: "Accessi Xtream nascosti",
        description: "Un link get.php?username=…&password=… è un account Xtream Codes. Lo strumento mostra server e utente (mai la password).",
      },
    ],
    faq: [
      {
        q: "La mia playlist viene caricata da qualche parte?",
        a: "No. Lo strumento funziona nel tuo browser. Con l'opzione Link è il tuo browser a contattare il provider; il nostro server non vede mai né il link né la playlist.",
      },
      {
        q: "Perché lo strumento non riesce ad aprire il mio link?",
        a: "Molti provider IPTV non permettono alle pagine web di leggere i loro link, e i browser bloccano le richieste http semplici da una pagina sicura. Apri il link in una nuova scheda per scaricare il file e usa la scheda File.",
      },
      {
        q: "Lo strumento verifica se gli stream funzionano?",
        a: "No. Analizza la playlist in sé. Se uno stream si riproduce dipende dal provider e dall'abbonamento, e si verifica meglio in un lettore.",
      },
      {
        q: "Che differenza c'è tra M3U e M3U8?",
        a: "Stesso formato; M3U8 è codificato in UTF-8, che conserva accenti e nomi di canali non latini. Lo strumento legge entrambi.",
      },
    ],
  },
};
