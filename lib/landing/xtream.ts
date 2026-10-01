import type { Lang } from "@/lib/i18n";
import type { LandingCopy } from "@/lib/landing/types";

/**
 * "Xtream Codes player for iPhone". Field names and error messages are the
 * app's own (Localizable.xcstrings): "Server URL (http://host:port)",
 * "Username", "Password", "Incorrect username or password".
 */
export const XTREAM_COPY: Record<Lang, LandingCopy> = {
  en: {
    metaTitle: "Xtream Codes Player for iPhone & iPad | EDGE IPTV",
    metaDescription:
      "Log in with your Xtream Codes (server, username, password) and watch live TV, movies and series on iPhone and iPad, with TV guide, Chromecast and AirPlay.",
    navLabel: "Xtream Codes player for iPhone",
    eyebrow: "Xtream Codes API",
    title: "The Xtream Codes player for iPhone and iPad",
    intro:
      "Your IPTV provider sent you a server address, a username and a password? That's an Xtream Codes login. Enter it in EDGE IPTV and you get live TV, movies and series with posters, a full TV guide and casting to your TV.",
    imageAlt: "Movie details in EDGE IPTV on iPhone, loaded through Xtream Codes",
    needTitle: "What you need",
    need: [
      "An iPhone or iPad on iOS 17 or later",
      "Your Xtream Codes login from your IPTV provider: server URL, username and password (EDGE IPTV is the player, it does not sell channels)",
    ],
    stepsTitle: "Set up Xtream Codes in under 2 minutes",
    steps: [
      {
        title: "Install EDGE IPTV",
        description: "Free on the App Store, with a 7-day free trial.",
      },
      {
        title: 'Tap "Add a playlist", then "Xtream Codes"',
        description:
          "Enter the server URL in the form http://host:port, then your username and password.",
      },
      {
        title: 'Tap "Add playlist"',
        description:
          "Live channels, movies and series load with their real categories. Tap anything to watch.",
      },
    ],
    featuresTitle: "Why Xtream Codes works best in EDGE IPTV",
    features: [
      {
        title: "The provider's real categories",
        description:
          "Xtream exposes live TV, movies and series separately, each with its own categories. EDGE IPTV keeps that structure instead of flattening everything into one list.",
      },
      {
        title: "TV guide for every channel",
        description: "What's on now and what's next, fetched channel by channel from your server.",
      },
      {
        title: "Movie and series details",
        description:
          "Posters, seasons and episodes, plus resume where you stopped and a one-tap next episode.",
      },
      {
        title: "Several providers in one app",
        description:
          "Add as many Xtream or M3U playlists as you like and switch between them from the Playlist Hub.",
      },
      {
        title: "Chromecast, AirPlay and Picture in Picture",
        description:
          "Send a match or a film to the TV, or keep it playing in a small window over other apps.",
      },
      {
        title: "Downloads for offline viewing",
        description: "Save films and episodes over Wi-Fi and watch them on the plane or the train.",
      },
    ],
    explainTitle: "Xtream Codes or M3U: which should you use?",
    explain: [
      "Most providers give you both. The M3U link is a flat list of streams; the Xtream Codes login talks to the provider's server directly, which is why it brings proper categories, a per-channel TV guide and film and series details. If you have the choice, use Xtream Codes.",
      "Only have an M3U link ending in get.php?username=…&password=…? It is an Xtream login in disguise. Paste it as an M3U playlist and EDGE IPTV extracts the server and credentials and switches to Xtream on its own.",
    ],
    faq: [
      {
        q: "What are Xtream Codes?",
        a: "Xtream Codes is the login format most IPTV providers use: a server URL, a username and a password. A player app like EDGE IPTV uses them to fetch your channels, movies and series.",
      },
      {
        q: "Where do I find my Xtream Codes?",
        a: "In the email or message your IPTV provider sent when you subscribed. Look for a server or portal URL with a port number, a username and a password.",
      },
      {
        q: 'Why does the app say "Incorrect username or password"?',
        a: "The server rejected the login. Check for a space copied at the end of a field, the exact case of the username, and that your subscription is still active with your provider.",
      },
      {
        q: "Can I use my Xtream login on several devices?",
        a: "That depends on your provider: many plans allow only one connection at a time, so a second device or an AirPlay stream may be refused while another one is playing.",
      },
      {
        q: "Is EDGE IPTV free?",
        a: "The app is free to download with a 7-day free trial. Watching then requires a subscription at $3.99 a month or $19.99 a year, with no ads.",
      },
    ],
  },

  fr: {
    metaTitle: "Lecteur Xtream Codes pour iPhone et iPad | EDGE IPTV",
    metaDescription:
      "Connectez vos codes Xtream (serveur, identifiant, mot de passe) et regardez TV, films et séries sur iPhone et iPad, avec guide TV, Chromecast et AirPlay.",
    navLabel: "Lecteur Xtream Codes pour iPhone",
    eyebrow: "API Xtream Codes",
    title: "Le lecteur Xtream Codes pour iPhone et iPad",
    intro:
      "Votre fournisseur IPTV vous a envoyé une adresse de serveur, un nom d'utilisateur et un mot de passe ? Ce sont des codes Xtream. Saisissez-les dans EDGE IPTV et vous obtenez TV en direct, films et séries avec leurs affiches, un guide TV complet et la diffusion sur votre téléviseur.",
    imageAlt: "Fiche d'un film dans EDGE IPTV sur iPhone, chargée via Xtream Codes",
    needTitle: "Ce qu'il vous faut",
    need: [
      "Un iPhone ou un iPad sous iOS 17 ou plus récent",
      "Vos codes Xtream fournis par votre fournisseur IPTV : URL du serveur, nom d'utilisateur et mot de passe (EDGE IPTV est le lecteur, il ne vend pas de chaînes)",
    ],
    stepsTitle: "Configurer Xtream Codes en moins de 2 minutes",
    steps: [
      {
        title: "Installez EDGE IPTV",
        description: "Gratuit sur l'App Store, avec 7 jours d'essai gratuit.",
      },
      {
        title: "Touchez « Ajouter une playlist », puis « Xtream Codes »",
        description:
          "Saisissez l'URL du serveur sous la forme http://hôte:port, puis votre nom d'utilisateur et votre mot de passe.",
      },
      {
        title: "Touchez « Ajouter la playlist »",
        description:
          "Chaînes, films et séries se chargent avec leurs vraies catégories. Touchez un contenu pour le regarder.",
      },
    ],
    featuresTitle: "Pourquoi Xtream Codes fonctionne mieux dans EDGE IPTV",
    features: [
      {
        title: "Les vraies catégories du fournisseur",
        description:
          "Xtream sépare TV en direct, films et séries, chacun avec ses catégories. EDGE IPTV garde cette structure au lieu de tout aplatir dans une seule liste.",
      },
      {
        title: "Guide TV pour chaque chaîne",
        description: "Ce qui passe maintenant et ensuite, récupéré chaîne par chaîne sur votre serveur.",
      },
      {
        title: "Fiches films et séries",
        description:
          "Affiches, saisons et épisodes, avec reprise là où vous vous êtes arrêté et épisode suivant en un geste.",
      },
      {
        title: "Plusieurs fournisseurs dans une app",
        description:
          "Ajoutez autant de playlists Xtream ou M3U que vous voulez et passez de l'une à l'autre depuis le Playlist Hub.",
      },
      {
        title: "Chromecast, AirPlay et Picture in Picture",
        description:
          "Envoyez un match ou un film sur la TV, ou laissez-le tourner dans une petite fenêtre par-dessus vos apps.",
      },
      {
        title: "Téléchargements hors ligne",
        description: "Enregistrez films et épisodes en Wi-Fi et regardez-les dans l'avion ou le train.",
      },
    ],
    explainTitle: "Xtream Codes ou M3U : lequel utiliser ?",
    explain: [
      "La plupart des fournisseurs donnent les deux. Le lien M3U est une liste brute de flux ; les codes Xtream dialoguent directement avec le serveur du fournisseur, d'où de vraies catégories, un guide TV par chaîne et des fiches films et séries. Si vous avez le choix, prenez Xtream Codes.",
      "Vous n'avez qu'un lien M3U qui se termine par get.php?username=…&password=… ? Ce sont des codes Xtream déguisés. Collez-le comme playlist M3U : EDGE IPTV en extrait le serveur et les identifiants et passe en Xtream tout seul.",
    ],
    faq: [
      {
        q: "Que sont les codes Xtream ?",
        a: "Xtream Codes est le format de connexion utilisé par la plupart des fournisseurs IPTV : une URL de serveur, un nom d'utilisateur et un mot de passe. Un lecteur comme EDGE IPTV s'en sert pour récupérer vos chaînes, films et séries.",
      },
      {
        q: "Où trouver mes codes Xtream ?",
        a: "Dans l'e-mail ou le message envoyé par votre fournisseur IPTV lors de l'abonnement. Cherchez une URL de serveur ou de portail avec un numéro de port, un nom d'utilisateur et un mot de passe.",
      },
      {
        q: "Pourquoi l'app indique « Nom d'utilisateur ou mot de passe incorrect » ?",
        a: "Le serveur a refusé la connexion. Vérifiez qu'aucun espace n'a été copié en fin de champ, respectez les majuscules du nom d'utilisateur et assurez-vous que votre abonnement est toujours actif chez votre fournisseur.",
      },
      {
        q: "Puis-je utiliser mes codes Xtream sur plusieurs appareils ?",
        a: "Cela dépend de votre fournisseur : beaucoup d'offres n'autorisent qu'une connexion à la fois, donc un second appareil ou un flux AirPlay peut être refusé pendant qu'un autre lit.",
      },
      {
        q: "EDGE IPTV est-il gratuit ?",
        a: "L'app est gratuite au téléchargement avec 7 jours d'essai gratuit. Regarder nécessite ensuite un abonnement à 3,99 € par mois ou 19,99 € par an, sans publicité.",
      },
    ],
  },

  es: {
    metaTitle: "Reproductor Xtream Codes para iPhone y iPad | EDGE IPTV",
    metaDescription:
      "Conecta tus códigos Xtream (servidor, usuario, contraseña) y mira TV, películas y series en iPhone y iPad, con guía de TV, Chromecast y AirPlay.",
    navLabel: "Reproductor Xtream Codes para iPhone",
    eyebrow: "API Xtream Codes",
    title: "El reproductor Xtream Codes para iPhone y iPad",
    intro:
      "¿Tu proveedor IPTV te envió una dirección de servidor, un usuario y una contraseña? Son códigos Xtream. Introdúcelos en EDGE IPTV y tendrás TV en vivo, películas y series con carátulas, una guía de TV completa y envío a tu televisor.",
    imageAlt: "Ficha de una película en EDGE IPTV en iPhone, cargada mediante Xtream Codes",
    needTitle: "Qué necesitas",
    need: [
      "Un iPhone o iPad con iOS 17 o posterior",
      "Tus códigos Xtream de tu proveedor IPTV: URL del servidor, usuario y contraseña (EDGE IPTV es el reproductor, no vende canales)",
    ],
    stepsTitle: "Configura Xtream Codes en menos de 2 minutos",
    steps: [
      {
        title: "Instala EDGE IPTV",
        description: "Gratis en la App Store, con 7 días de prueba gratuita.",
      },
      {
        title: "Toca «Añadir una playlist» y luego «Xtream Codes»",
        description:
          "Introduce la URL del servidor con la forma http://host:puerto, y después tu usuario y contraseña.",
      },
      {
        title: "Toca «Añadir la playlist»",
        description:
          "Canales, películas y series se cargan con sus categorías reales. Toca cualquier contenido para verlo.",
      },
    ],
    featuresTitle: "Por qué Xtream Codes funciona mejor en EDGE IPTV",
    features: [
      {
        title: "Las categorías reales del proveedor",
        description:
          "Xtream separa TV en vivo, películas y series, cada una con sus categorías. EDGE IPTV mantiene esa estructura en lugar de aplanarlo todo en una lista.",
      },
      {
        title: "Guía de TV para cada canal",
        description: "Lo que se emite ahora y después, obtenido canal por canal de tu servidor.",
      },
      {
        title: "Fichas de películas y series",
        description:
          "Carátulas, temporadas y episodios, con reanudación donde lo dejaste y siguiente episodio con un toque.",
      },
      {
        title: "Varios proveedores en una app",
        description:
          "Añade tantas listas Xtream o M3U como quieras y cambia entre ellas desde el Playlist Hub.",
      },
      {
        title: "Chromecast, AirPlay y Picture in Picture",
        description:
          "Envía un partido o una película a la TV, o déjalo en una ventana pequeña sobre otras apps.",
      },
      {
        title: "Descargas sin conexión",
        description: "Guarda películas y episodios por Wi-Fi y míralos en el avión o el tren.",
      },
    ],
    explainTitle: "Xtream Codes o M3U: ¿cuál usar?",
    explain: [
      "La mayoría de proveedores dan los dos. El enlace M3U es una lista plana de streams; los códigos Xtream hablan directamente con el servidor del proveedor, por eso traen categorías reales, guía de TV por canal y fichas de películas y series. Si puedes elegir, usa Xtream Codes.",
      "¿Solo tienes un enlace M3U que termina en get.php?username=…&password=…? Son códigos Xtream disfrazados. Pégalo como lista M3U y EDGE IPTV extrae el servidor y las credenciales y pasa a Xtream solo.",
    ],
    faq: [
      {
        q: "¿Qué son los códigos Xtream?",
        a: "Xtream Codes es el formato de acceso que usan la mayoría de proveedores IPTV: una URL de servidor, un usuario y una contraseña. Un reproductor como EDGE IPTV los usa para obtener tus canales, películas y series.",
      },
      {
        q: "¿Dónde encuentro mis códigos Xtream?",
        a: "En el correo o mensaje que te envió tu proveedor IPTV al suscribirte. Busca una URL de servidor o portal con número de puerto, un usuario y una contraseña.",
      },
      {
        q: "¿Por qué la app dice que el usuario o la contraseña son incorrectos?",
        a: "El servidor rechazó el acceso. Comprueba que no se copió un espacio al final de un campo, respeta las mayúsculas del usuario y confirma que tu suscripción sigue activa con tu proveedor.",
      },
      {
        q: "¿Puedo usar mis códigos Xtream en varios dispositivos?",
        a: "Depende de tu proveedor: muchos planes solo permiten una conexión a la vez, así que un segundo dispositivo o un stream por AirPlay puede ser rechazado mientras otro reproduce.",
      },
      {
        q: "¿EDGE IPTV es gratis?",
        a: "La app se descarga gratis con 7 días de prueba gratuita. Después, ver contenido requiere una suscripción de 3,99 € al mes o 19,99 € al año, sin anuncios.",
      },
    ],
  },

  pt: {
    metaTitle: "Player Xtream Codes para iPhone e iPad | EDGE IPTV",
    metaDescription:
      "Conecte seus códigos Xtream (servidor, usuário, senha) e assista TV, filmes e séries no iPhone e iPad, com guia de TV, Chromecast e AirPlay.",
    navLabel: "Player Xtream Codes para iPhone",
    eyebrow: "API Xtream Codes",
    title: "O player Xtream Codes para iPhone e iPad",
    intro:
      "Seu provedor IPTV enviou um endereço de servidor, um usuário e uma senha? São códigos Xtream. Informe-os no EDGE IPTV e você terá TV ao vivo, filmes e séries com capas, guia de TV completo e transmissão para a sua TV.",
    imageAlt: "Ficha de um filme no EDGE IPTV no iPhone, carregada via Xtream Codes",
    needTitle: "O que você precisa",
    need: [
      "Um iPhone ou iPad com iOS 17 ou posterior",
      "Seus códigos Xtream do provedor IPTV: URL do servidor, usuário e senha (o EDGE IPTV é o player, não vende canais)",
    ],
    stepsTitle: "Configure o Xtream Codes em menos de 2 minutos",
    steps: [
      {
        title: "Instale o EDGE IPTV",
        description: "Grátis na App Store, com 7 dias de teste grátis.",
      },
      {
        title: "Toque em «Adicionar uma playlist» e depois «Xtream Codes»",
        description:
          "Informe a URL do servidor no formato http://host:porta, depois seu usuário e senha.",
      },
      {
        title: "Toque em «Adicionar a playlist»",
        description:
          "Canais, filmes e séries carregam com as categorias reais. Toque em qualquer conteúdo para assistir.",
      },
    ],
    featuresTitle: "Por que o Xtream Codes funciona melhor no EDGE IPTV",
    features: [
      {
        title: "As categorias reais do provedor",
        description:
          "O Xtream separa TV ao vivo, filmes e séries, cada um com suas categorias. O EDGE IPTV mantém essa estrutura em vez de achatar tudo numa lista só.",
      },
      {
        title: "Guia de TV para cada canal",
        description: "O que passa agora e a seguir, buscado canal por canal no seu servidor.",
      },
      {
        title: "Fichas de filmes e séries",
        description:
          "Capas, temporadas e episódios, com retomada de onde você parou e próximo episódio com um toque.",
      },
      {
        title: "Vários provedores num app",
        description:
          "Adicione quantas listas Xtream ou M3U quiser e alterne entre elas pelo Playlist Hub.",
      },
      {
        title: "Chromecast, AirPlay e Picture in Picture",
        description:
          "Mande um jogo ou um filme para a TV, ou deixe numa janela pequena sobre outros apps.",
      },
      {
        title: "Downloads offline",
        description: "Salve filmes e episódios pelo Wi-Fi e assista no avião ou no ônibus.",
      },
    ],
    explainTitle: "Xtream Codes ou M3U: qual usar?",
    explain: [
      "A maioria dos provedores envia os dois. O link M3U é uma lista simples de streams; os códigos Xtream falam direto com o servidor do provedor, por isso trazem categorias reais, guia de TV por canal e fichas de filmes e séries. Se puder escolher, use Xtream Codes.",
      "Só tem um link M3U que termina em get.php?username=…&password=…? São códigos Xtream disfarçados. Cole como lista M3U e o EDGE IPTV extrai o servidor e as credenciais e passa para Xtream sozinho.",
    ],
    faq: [
      {
        q: "O que são códigos Xtream?",
        a: "Xtream Codes é o formato de acesso usado pela maioria dos provedores IPTV: uma URL de servidor, um usuário e uma senha. Um player como o EDGE IPTV usa esses dados para buscar seus canais, filmes e séries.",
      },
      {
        q: "Onde encontro meus códigos Xtream?",
        a: "No e-mail ou mensagem que o provedor IPTV enviou quando você assinou. Procure uma URL de servidor ou portal com número de porta, um usuário e uma senha.",
      },
      {
        q: "Por que o app diz que o usuário ou a senha estão incorretos?",
        a: "O servidor recusou o acesso. Verifique se não foi copiado um espaço no fim de um campo, respeite as maiúsculas do usuário e confirme que sua assinatura continua ativa no provedor.",
      },
      {
        q: "Posso usar meus códigos Xtream em vários aparelhos?",
        a: "Depende do provedor: muitos planos permitem só uma conexão por vez, então um segundo aparelho ou um stream por AirPlay pode ser recusado enquanto outro reproduz.",
      },
      {
        q: "O EDGE IPTV é grátis?",
        a: "O app é grátis para baixar, com 7 dias de teste grátis. Depois, assistir exige uma assinatura de US$ 3,99 por mês ou US$ 19,99 por ano, sem anúncios.",
      },
    ],
  },

  de: {
    metaTitle: "Xtream-Codes-Player für iPhone & iPad | EDGE IPTV",
    metaDescription:
      "Melde dich mit deinen Xtream Codes (Server, Benutzername, Passwort) an und schau Live-TV, Filme und Serien auf iPhone und iPad, mit TV-Guide und Chromecast.",
    navLabel: "Xtream-Codes-Player fürs iPhone",
    eyebrow: "Xtream-Codes-API",
    title: "Der Xtream-Codes-Player für iPhone und iPad",
    intro:
      "Dein IPTV-Anbieter hat dir eine Serveradresse, einen Benutzernamen und ein Passwort geschickt? Das sind Xtream Codes. Gib sie in EDGE IPTV ein und du bekommst Live-TV, Filme und Serien mit Covern, einen vollständigen Programmführer und Streaming auf den Fernseher.",
    imageAlt: "Filmdetails in EDGE IPTV auf dem iPhone, geladen über Xtream Codes",
    needTitle: "Was du brauchst",
    need: [
      "Ein iPhone oder iPad mit iOS 17 oder neuer",
      "Deine Xtream Codes vom IPTV-Anbieter: Server-URL, Benutzername und Passwort (EDGE IPTV ist der Player und verkauft keine Sender)",
    ],
    stepsTitle: "Xtream Codes in unter 2 Minuten einrichten",
    steps: [
      {
        title: "EDGE IPTV installieren",
        description: "Kostenlos im App Store, mit 7 Tagen Gratis-Test.",
      },
      {
        title: "„Playlist hinzufügen“ und dann „Xtream Codes“ tippen",
        description:
          "Gib die Server-URL im Format http://host:port ein, dann Benutzername und Passwort.",
      },
      {
        title: "„Playlist hinzufügen“ tippen",
        description:
          "Sender, Filme und Serien laden mit ihren echten Kategorien. Tippe auf einen Inhalt, um ihn zu schauen.",
      },
    ],
    featuresTitle: "Warum Xtream Codes in EDGE IPTV am besten funktioniert",
    features: [
      {
        title: "Die echten Kategorien des Anbieters",
        description:
          "Xtream trennt Live-TV, Filme und Serien, jeweils mit eigenen Kategorien. EDGE IPTV behält diese Struktur, statt alles in eine Liste zu kippen.",
      },
      {
        title: "Programmführer für jeden Sender",
        description: "Was jetzt und danach läuft, Sender für Sender von deinem Server abgerufen.",
      },
      {
        title: "Film- und Serien-Details",
        description:
          "Cover, Staffeln und Folgen, dazu Fortsetzen an der letzten Stelle und die nächste Folge mit einem Tipp.",
      },
      {
        title: "Mehrere Anbieter in einer App",
        description:
          "Füge beliebig viele Xtream- oder M3U-Playlists hinzu und wechsle über den Playlist Hub zwischen ihnen.",
      },
      {
        title: "Chromecast, AirPlay und Bild-in-Bild",
        description:
          "Schick ein Spiel oder einen Film auf den Fernseher oder lass ihn in einem kleinen Fenster über anderen Apps laufen.",
      },
      {
        title: "Downloads für offline",
        description: "Speichere Filme und Folgen im WLAN und schau sie im Flugzeug oder im Zug.",
      },
    ],
    explainTitle: "Xtream Codes oder M3U: was solltest du nutzen?",
    explain: [
      "Die meisten Anbieter geben dir beides. Der M3U-Link ist eine flache Liste von Streams; die Xtream Codes sprechen direkt mit dem Server des Anbieters, deshalb gibt es echte Kategorien, einen Programmführer pro Sender und Film- und Seriendetails. Wenn du die Wahl hast, nimm Xtream Codes.",
      "Du hast nur einen M3U-Link, der auf get.php?username=…&password=… endet? Das sind verkleidete Xtream Codes. Füge ihn als M3U-Playlist ein, und EDGE IPTV liest Server und Zugangsdaten heraus und wechselt von selbst zu Xtream.",
    ],
    faq: [
      {
        q: "Was sind Xtream Codes?",
        a: "Xtream Codes ist das Login-Format der meisten IPTV-Anbieter: eine Server-URL, ein Benutzername und ein Passwort. Ein Player wie EDGE IPTV holt damit deine Sender, Filme und Serien.",
      },
      {
        q: "Wo finde ich meine Xtream Codes?",
        a: "In der E-Mail oder Nachricht, die dir dein IPTV-Anbieter beim Abschluss geschickt hat. Achte auf eine Server- oder Portal-URL mit Portnummer, einen Benutzernamen und ein Passwort.",
      },
      {
        q: "Warum meldet die App einen falschen Benutzernamen oder ein falsches Passwort?",
        a: "Der Server hat die Anmeldung abgelehnt. Prüfe, ob am Ende eines Feldes ein Leerzeichen mitkopiert wurde, achte auf Groß- und Kleinschreibung und ob dein Abo beim Anbieter noch aktiv ist.",
      },
      {
        q: "Kann ich meine Xtream Codes auf mehreren Geräten nutzen?",
        a: "Das hängt vom Anbieter ab: Viele Tarife erlauben nur eine Verbindung gleichzeitig, ein zweites Gerät oder ein AirPlay-Stream kann also abgelehnt werden, solange ein anderes abspielt.",
      },
      {
        q: "Ist EDGE IPTV kostenlos?",
        a: "Der Download ist kostenlos, mit 7 Tagen Gratis-Test. Danach ist zum Schauen ein Abo für 3,99 € im Monat oder 19,99 € im Jahr nötig, ohne Werbung.",
      },
    ],
  },

  ar: {
    metaTitle: "مشغل Xtream Codes للآيفون والآيباد | EDGE IPTV",
    metaDescription:
      "سجّل الدخول ببيانات Xtream (الخادم واسم المستخدم وكلمة المرور) وشاهد البث المباشر والأفلام والمسلسلات على الآيفون والآيباد مع دليل البرامج وChromecast وAirPlay.",
    navLabel: "مشغل Xtream Codes للآيفون",
    eyebrow: "واجهة Xtream Codes",
    title: "مشغل Xtream Codes للآيفون والآيباد",
    intro:
      "أرسل لك مزوّد IPTV عنوان خادم واسم مستخدم وكلمة مرور؟ هذه بيانات Xtream. أدخلها في EDGE IPTV لتحصل على البث المباشر والأفلام والمسلسلات مع ملصقاتها، ودليل برامج كامل، والبث إلى تلفازك.",
    imageAlt: "تفاصيل فيلم في EDGE IPTV على الآيفون، محمّلة عبر Xtream Codes",
    needTitle: "ما تحتاج إليه",
    need: [
      "آيفون أو آيباد بنظام iOS 17 أو أحدث",
      "بيانات Xtream من مزوّد IPTV: رابط الخادم واسم المستخدم وكلمة المرور (EDGE IPTV مشغّل فقط ولا يبيع قنوات)",
    ],
    stepsTitle: "اضبط Xtream Codes في أقل من دقيقتين",
    steps: [
      {
        title: "ثبّت EDGE IPTV",
        description: "مجاني على App Store مع تجربة مجانية لسبعة أيام.",
      },
      {
        title: "اضغط «إضافة قائمة تشغيل» ثم «Xtream Codes»",
        description: "أدخل رابط الخادم بالصيغة http://host:port، ثم اسم المستخدم وكلمة المرور.",
      },
      {
        title: "اضغط «إضافة قائمة التشغيل»",
        description: "تُحمَّل القنوات والأفلام والمسلسلات بفئاتها الحقيقية. اضغط على أي محتوى لمشاهدته.",
      },
    ],
    featuresTitle: "لماذا يعمل Xtream Codes بأفضل شكل في EDGE IPTV",
    features: [
      {
        title: "الفئات الحقيقية للمزوّد",
        description:
          "يفصل Xtream البث المباشر والأفلام والمسلسلات، ولكل منها فئاتها. يحافظ EDGE IPTV على هذا الترتيب بدل جمع كل شيء في قائمة واحدة.",
      },
      {
        title: "دليل برامج لكل قناة",
        description: "ما يُعرض الآن وما يليه، يُجلب قناةً قناةً من خادمك.",
      },
      {
        title: "تفاصيل الأفلام والمسلسلات",
        description: "ملصقات ومواسم وحلقات، مع الاستئناف من حيث توقفت والحلقة التالية بلمسة.",
      },
      {
        title: "عدة مزوّدين في تطبيق واحد",
        description: "أضف ما تشاء من قوائم Xtream أو M3U وتنقّل بينها من Playlist Hub.",
      },
      {
        title: "Chromecast وAirPlay وصورة داخل صورة",
        description: "أرسل مباراة أو فيلمًا إلى التلفاز، أو اتركه في نافذة صغيرة فوق تطبيقاتك.",
      },
      {
        title: "التحميل للمشاهدة دون اتصال",
        description: "احفظ الأفلام والحلقات عبر Wi-Fi وشاهدها في الطائرة أو القطار.",
      },
    ],
    explainTitle: "Xtream Codes أم M3U: أيهما تستخدم؟",
    explain: [
      "يعطيك معظم المزوّدين الاثنين. رابط M3U قائمة بسيطة من البث، أما بيانات Xtream فتتواصل مباشرة مع خادم المزوّد، ولهذا تأتي بفئات حقيقية ودليل برامج لكل قناة وتفاصيل الأفلام والمسلسلات. إن كان لديك الخيار، فاستخدم Xtream Codes.",
      "لديك فقط رابط M3U ينتهي بـget.php?username=…&password=…؟ إنها بيانات Xtream متنكّرة. الصقه كقائمة M3U وسيستخرج EDGE IPTV الخادم وبيانات الدخول وينتقل إلى Xtream تلقائيًا.",
    ],
    faq: [
      {
        q: "ما هي بيانات Xtream Codes؟",
        a: "Xtream Codes هي صيغة الدخول التي يستخدمها معظم مزوّدي IPTV: رابط خادم واسم مستخدم وكلمة مرور. يستخدمها مشغّل مثل EDGE IPTV لجلب قنواتك وأفلامك ومسلسلاتك.",
      },
      {
        q: "أين أجد بيانات Xtream الخاصة بي؟",
        a: "في البريد أو الرسالة التي أرسلها مزوّد IPTV عند اشتراكك. ابحث عن رابط خادم أو بوابة مع رقم منفذ، واسم مستخدم، وكلمة مرور.",
      },
      {
        q: "لماذا يقول التطبيق إن اسم المستخدم أو كلمة المرور غير صحيحة؟",
        a: "رفض الخادم الدخول. تحقّق من عدم نسخ مسافة في نهاية أحد الحقول، واحترم الأحرف الكبيرة والصغيرة في اسم المستخدم، وتأكّد أن اشتراكك ما زال فعّالًا لدى المزوّد.",
      },
      {
        q: "هل يمكنني استخدام بيانات Xtream على عدة أجهزة؟",
        a: "يعتمد ذلك على مزوّدك: كثير من الباقات تسمح باتصال واحد في الوقت نفسه، فقد يُرفض جهاز ثانٍ أو بث AirPlay أثناء تشغيل جهاز آخر.",
      },
      {
        q: "هل EDGE IPTV مجاني؟",
        a: "تحميل التطبيق مجاني مع تجربة مجانية لسبعة أيام. بعدها تتطلب المشاهدة اشتراكًا بـ3.99 دولار شهريًا أو 19.99 دولار سنويًا، دون إعلانات.",
      },
    ],
  },

  it: {
    metaTitle: "Lettore Xtream Codes per iPhone e iPad | EDGE IPTV",
    metaDescription:
      "Accedi con i tuoi codici Xtream (server, nome utente, password) e guarda TV, film e serie su iPhone e iPad, con guida TV, Chromecast e AirPlay.",
    navLabel: "Lettore Xtream Codes per iPhone",
    eyebrow: "API Xtream Codes",
    title: "Il lettore Xtream Codes per iPhone e iPad",
    intro:
      "Il tuo provider IPTV ti ha mandato un indirizzo del server, un nome utente e una password? Sono codici Xtream. Inseriscili in EDGE IPTV e avrai TV in diretta, film e serie con locandine, una guida TV completa e la trasmissione sul televisore.",
    imageAlt: "Scheda di un film in EDGE IPTV su iPhone, caricata tramite Xtream Codes",
    needTitle: "Cosa ti serve",
    need: [
      "Un iPhone o iPad con iOS 17 o successivo",
      "I codici Xtream del tuo provider IPTV: URL del server, nome utente e password (EDGE IPTV è il lettore, non vende canali)",
    ],
    stepsTitle: "Configura Xtream Codes in meno di 2 minuti",
    steps: [
      {
        title: "Installa EDGE IPTV",
        description: "Gratis su App Store, con 7 giorni di prova gratuita.",
      },
      {
        title: "Tocca «Aggiungi una playlist», poi «Xtream Codes»",
        description:
          "Inserisci l'URL del server nella forma http://host:porta, poi nome utente e password.",
      },
      {
        title: "Tocca «Aggiungi la playlist»",
        description:
          "Canali, film e serie si caricano con le loro vere categorie. Tocca un contenuto per guardarlo.",
      },
    ],
    featuresTitle: "Perché Xtream Codes funziona meglio in EDGE IPTV",
    features: [
      {
        title: "Le vere categorie del provider",
        description:
          "Xtream separa TV in diretta, film e serie, ognuno con le sue categorie. EDGE IPTV mantiene questa struttura invece di appiattire tutto in un'unica lista.",
      },
      {
        title: "Guida TV per ogni canale",
        description: "Cosa va in onda ora e dopo, recuperato canale per canale dal tuo server.",
      },
      {
        title: "Schede di film e serie",
        description:
          "Locandine, stagioni ed episodi, con ripresa da dove ti eri fermato ed episodio successivo con un tocco.",
      },
      {
        title: "Più provider in un'app",
        description:
          "Aggiungi tutte le playlist Xtream o M3U che vuoi e passa dall'una all'altra dal Playlist Hub.",
      },
      {
        title: "Chromecast, AirPlay e Picture in Picture",
        description:
          "Manda una partita o un film alla TV, o lascialo in una piccola finestra sopra le altre app.",
      },
      {
        title: "Download offline",
        description: "Salva film ed episodi in Wi-Fi e guardali in aereo o in treno.",
      },
    ],
    explainTitle: "Xtream Codes o M3U: quale usare?",
    explain: [
      "La maggior parte dei provider fornisce entrambi. Il link M3U è un elenco piatto di stream; i codici Xtream parlano direttamente con il server del provider, ed è per questo che portano categorie vere, una guida TV per canale e schede di film e serie. Se puoi scegliere, usa Xtream Codes.",
      "Hai solo un link M3U che finisce con get.php?username=…&password=…? Sono codici Xtream travestiti. Incollalo come playlist M3U ed EDGE IPTV ne estrae server e credenziali e passa a Xtream da solo.",
    ],
    faq: [
      {
        q: "Cosa sono i codici Xtream?",
        a: "Xtream Codes è il formato di accesso usato dalla maggior parte dei provider IPTV: un URL del server, un nome utente e una password. Un lettore come EDGE IPTV li usa per recuperare canali, film e serie.",
      },
      {
        q: "Dove trovo i miei codici Xtream?",
        a: "Nell'e-mail o nel messaggio che il provider IPTV ti ha inviato al momento dell'abbonamento. Cerca un URL di server o portale con un numero di porta, un nome utente e una password.",
      },
      {
        q: "Perché l'app dice che nome utente o password non sono corretti?",
        a: "Il server ha rifiutato l'accesso. Controlla che non sia stato copiato uno spazio alla fine di un campo, rispetta maiuscole e minuscole del nome utente e verifica che l'abbonamento sia ancora attivo presso il provider.",
      },
      {
        q: "Posso usare i codici Xtream su più dispositivi?",
        a: "Dipende dal provider: molti piani consentono una sola connessione alla volta, quindi un secondo dispositivo o uno stream AirPlay può essere rifiutato mentre un altro è in riproduzione.",
      },
      {
        q: "EDGE IPTV è gratuito?",
        a: "Il download è gratuito, con 7 giorni di prova gratuita. Poi guardare richiede un abbonamento da 3,99 € al mese o 19,99 € all'anno, senza pubblicità.",
      },
    ],
  },
};
