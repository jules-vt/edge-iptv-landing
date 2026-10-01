import type { Lang } from "@/lib/i18n";

/**
 * "How to install IPTV on iPhone & iPad", the most visited page after the
 * home page. One copy per language, one layout in
 * components/articles/install-guide.tsx.
 *
 * The steps follow the app's real first launch (Onboarding/ in the app repo):
 * language, a short tour, the analytics choice, then the first playlist with a
 * Type picker (Xtream Codes / M3U) and the fields "Server URL
 * (http://host:port)", "Username", "Password". Button names are the app's own.
 * The previous text listed five languages (there are eleven) and buttons that
 * do not exist ("+", "Connect", "Login").
 */
export interface InstallGuideCopy {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  breadcrumb: string;
  home: string;
  download: string;
  needTitle: string;
  need: string[];
  step1Title: string;
  step1Body: string;
  whyTitle: string;
  why: string[];
  step1Button: string;
  step2Title: string;
  step2Body: string;
  languageAlt: string;
  midTitle: string;
  midBody: string;
  midButton: string;
  step3Title: string;
  step3Body: string;
  step3List: string[];
  fields: { label: string; hint: string }[];
  step3Note: string;
  m3uNote: string;
  step4Title: string;
  step4Body: string;
  seriesAlt: string;
  movieAlt: string;
  finalTitle: string;
  finalBody: string;
  finalButton: string;
  fineprint: string;
  back: string;
  privacy: string;
  terms: string;
  rights: string;
}

const APP_LANGUAGES = {
  en: "English, French, Spanish, Portuguese, German, Italian, Arabic, Dutch, Polish, Russian and Turkish",
  fr: "anglais, français, espagnol, portugais, allemand, italien, arabe, néerlandais, polonais, russe et turc",
  es: "inglés, francés, español, portugués, alemán, italiano, árabe, neerlandés, polaco, ruso y turco",
  pt: "inglês, francês, espanhol, português, alemão, italiano, árabe, holandês, polonês, russo e turco",
  de: "Englisch, Französisch, Spanisch, Portugiesisch, Deutsch, Italienisch, Arabisch, Niederländisch, Polnisch, Russisch und Türkisch",
  ar: "الإنجليزية والفرنسية والإسبانية والبرتغالية والألمانية والإيطالية والعربية والهولندية والبولندية والروسية والتركية",
  it: "inglese, francese, spagnolo, portoghese, tedesco, italiano, arabo, olandese, polacco, russo e turco",
};

export const INSTALL_GUIDE_COPY: Record<Lang, InstallGuideCopy> = {
  en: {
    metaTitle: "How to Install IPTV on iPhone & iPad (2026 Guide)",
    metaDescription:
      "Step-by-step guide to install IPTV on iPhone or iPad in under 2 minutes. Works with any IPTV provider via Xtream codes or M3U URL. Download EDGE IPTV free.",
    title: "Install IPTV on iPhone in 2 Minutes – Easy Guide",
    intro:
      "Set up IPTV on your iPhone or iPad in 4 simple steps, with the Xtream Codes or M3U link from your provider. No technical skills needed.",
    breadcrumb: "How to Install IPTV on iPhone & iPad",
    home: "Home",
    download: "Download",
    needTitle: "What you'll need",
    need: [
      "An iPhone or iPad running iOS 17.0 or later",
      "An IPTV subscription with Xtream Codes or an M3U link",
      "A stable internet connection",
      "The EDGE IPTV app",
    ],
    step1Title: "Download an IPTV player for iOS",
    step1Body:
      "An IPTV subscription gives you access to channels; you still need a player to watch them. EDGE IPTV is built for iPhone and iPad and is free to download, with a 7-day free trial.",
    whyTitle: "Why EDGE IPTV?",
    why: [
      "M3U or Xtream Codes set up in under 2 minutes",
      "TV guide (EPG) and Picture in Picture",
      "Chromecast and AirPlay to watch on the TV",
      "Downloads to watch without internet",
      `Available in ${APP_LANGUAGES.en}`,
    ],
    step1Button: "Download EDGE IPTV from the App Store",
    step2Title: "Open the app and choose your language",
    step2Body:
      "On first launch, pick your language, swipe through a short tour of the features, and choose whether to share anonymous usage statistics. You can change both later in Settings.",
    languageAlt: "EDGE IPTV language selection on first launch",
    midTitle: "Ready to get started?",
    midBody: "Download EDGE IPTV now and start watching in 2 minutes.",
    midButton: "Download now – 7-day free trial",
    step3Title: "Add your Xtream Codes",
    step3Body: "The app then asks for your first playlist. Xtream Codes is the fastest option and gives the best result:",
    step3List: [
      'At the top, select **Xtream Codes**.',
      "Enter the details from your IPTV provider:",
      'Tap **Continue**. The app checks the login and loads your channels, movies and series.',
    ],
    fields: [
      { label: "Server URL", hint: "in the form http://host:port, e.g. http://line.example.com:8080" },
      { label: "Username", hint: "your username" },
      { label: "Password", hint: "your password" },
    ],
    step3Note:
      "Enter the details exactly as provided: watch uppercase and lowercase letters, and don't copy a space at the end of a field.",
    m3uNote:
      'Only have an M3U link? Select **M3U** at the top and paste it. If it ends in get.php?username=…, the app recognises an Xtream login and switches to it on its own. To add more playlists later, use "Add a playlist" in the Playlist Hub.',
    step4Title: "Enjoy your content!",
    step4Body:
      "That's it. EDGE IPTV loads your channels, movies and series. Browse the categories, search, add favourites and start watching straight away.",
    seriesAlt: "Series view in EDGE IPTV",
    movieAlt: "Movie details in EDGE IPTV",
    finalTitle: "Start watching today",
    finalBody:
      "Download EDGE IPTV, add your M3U or Xtream Codes playlist and start watching on iPhone and iPad. Setup takes less than 2 minutes.",
    finalButton: "Start your 7-day free trial",
    fineprint: "✓ 7-day free trial ✓ M3U and Xtream Codes ✓ Chromecast and AirPlay",
    back: "Back to home",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    rights: "All rights reserved.",
  },

  fr: {
    metaTitle: "Installer l'IPTV sur iPhone et iPad : guide 2026",
    metaDescription:
      "Guide pas à pas pour installer et configurer EDGE IPTV sur iPhone et iPad : codes Xtream ou playlist M3U, en quelques minutes.",
    title: "Comment installer l'IPTV sur iPhone et iPad : guide complet 2026",
    intro:
      "Configurez l'IPTV sur votre iPhone ou iPad en 4 étapes simples, avec les codes Xtream ou le lien M3U de votre fournisseur. Aucune compétence technique requise.",
    breadcrumb: "Installer l'IPTV sur iPhone et iPad",
    home: "Accueil",
    download: "Télécharger",
    needTitle: "Ce qu'il vous faut",
    need: [
      "Un iPhone ou un iPad sous iOS 17.0 ou plus récent",
      "Un abonnement IPTV avec codes Xtream ou lien M3U",
      "Une connexion internet stable",
      "L'app EDGE IPTV",
    ],
    step1Title: "Téléchargez un lecteur IPTV pour iOS",
    step1Body:
      "Un abonnement IPTV vous donne accès aux chaînes ; il vous faut encore un lecteur pour les regarder. EDGE IPTV est conçu pour l'iPhone et l'iPad, gratuit au téléchargement, avec 7 jours d'essai gratuit.",
    whyTitle: "Pourquoi EDGE IPTV ?",
    why: [
      "Configuration M3U ou Xtream en moins de 2 minutes",
      "Guide TV (EPG) et Picture in Picture",
      "Chromecast et AirPlay pour regarder sur la TV",
      "Téléchargements pour regarder sans internet",
      `Disponible en ${APP_LANGUAGES.fr}`,
    ],
    step1Button: "Télécharger EDGE IPTV sur l'App Store",
    step2Title: "Ouvrez l'app et choisissez votre langue",
    step2Body:
      "Au premier lancement, choisissez votre langue, faites défiler une courte présentation des fonctions, puis décidez si vous partagez des statistiques d'usage anonymes. Les deux se changent ensuite dans les Réglages.",
    languageAlt: "Choix de la langue au premier lancement d'EDGE IPTV",
    midTitle: "Prêt à commencer ?",
    midBody: "Téléchargez EDGE IPTV maintenant et commencez à regarder en 2 minutes.",
    midButton: "Télécharger – 7 jours d'essai gratuit",
    step3Title: "Ajoutez vos codes Xtream",
    step3Body:
      "L'app vous demande ensuite votre première playlist. Les codes Xtream sont l'option la plus rapide et donnent le meilleur résultat :",
    step3List: [
      "En haut, sélectionnez **Xtream Codes**.",
      "Saisissez les informations de votre fournisseur IPTV :",
      "Touchez **Continuer**. L'app vérifie la connexion et charge vos chaînes, films et séries.",
    ],
    fields: [
      { label: "URL du serveur", hint: "sous la forme http://hôte:port, par ex. http://line.example.com:8080" },
      { label: "Nom d'utilisateur", hint: "votre identifiant" },
      { label: "Mot de passe", hint: "votre mot de passe" },
    ],
    step3Note:
      "Saisissez les informations exactement comme fournies : attention aux majuscules et minuscules, et ne copiez pas d'espace en fin de champ.",
    m3uNote:
      "Vous n'avez qu'un lien M3U ? Sélectionnez **M3U** en haut et collez-le. S'il se termine par get.php?username=…, l'app reconnaît un accès Xtream et l'utilise d'elle-même. Pour ajouter d'autres playlists plus tard, touchez « Ajouter une playlist » dans le Playlist Hub.",
    step4Title: "Profitez de votre contenu !",
    step4Body:
      "C'est tout. EDGE IPTV charge vos chaînes, films et séries. Parcourez les catégories, cherchez, ajoutez des favoris et lancez la lecture tout de suite.",
    seriesAlt: "Vue des séries dans EDGE IPTV",
    movieAlt: "Fiche d'un film dans EDGE IPTV",
    finalTitle: "Commencez à regarder aujourd'hui",
    finalBody:
      "Téléchargez EDGE IPTV, ajoutez votre playlist M3U ou vos codes Xtream et regardez sur iPhone et iPad. La configuration prend moins de 2 minutes.",
    finalButton: "Démarrer l'essai gratuit de 7 jours",
    fineprint: "✓ 7 jours d'essai gratuit ✓ M3U et Xtream Codes ✓ Chromecast et AirPlay",
    back: "Retour à l'accueil",
    privacy: "Confidentialité",
    terms: "Conditions d'utilisation",
    rights: "Tous droits réservés.",
  },

  es: {
    metaTitle: "Cómo Instalar IPTV en iPhone y iPad - Guía Paso a Paso 2026",
    metaDescription:
      "Guía paso a paso para instalar y configurar EDGE IPTV en iPhone y iPad con códigos Xtream o una lista M3U, en menos de 2 minutos.",
    title: "Cómo instalar IPTV en iPhone y iPad: guía completa 2026",
    intro:
      "Configura IPTV en tu iPhone o iPad en 4 pasos sencillos, con los códigos Xtream o el enlace M3U de tu proveedor. Sin conocimientos técnicos.",
    breadcrumb: "Cómo instalar IPTV en iPhone y iPad",
    home: "Inicio",
    download: "Descargar",
    needTitle: "Qué necesitas",
    need: [
      "Un iPhone o iPad con iOS 17.0 o posterior",
      "Una suscripción IPTV con códigos Xtream o enlace M3U",
      "Una conexión a internet estable",
      "La app EDGE IPTV",
    ],
    step1Title: "Descarga un reproductor IPTV para iOS",
    step1Body:
      "Una suscripción IPTV te da acceso a los canales; aún necesitas un reproductor para verlos. EDGE IPTV está hecho para iPhone y iPad, se descarga gratis e incluye 7 días de prueba gratuita.",
    whyTitle: "¿Por qué EDGE IPTV?",
    why: [
      "Configuración M3U o Xtream en menos de 2 minutos",
      "Guía de TV (EPG) y Picture in Picture",
      "Chromecast y AirPlay para ver en la TV",
      "Descargas para ver sin internet",
      `Disponible en ${APP_LANGUAGES.es}`,
    ],
    step1Button: "Descargar EDGE IPTV en la App Store",
    step2Title: "Abre la app y elige tu idioma",
    step2Body:
      "En el primer inicio, elige tu idioma, desliza una breve presentación de las funciones y decide si compartes estadísticas de uso anónimas. Ambas cosas se cambian después en Ajustes.",
    languageAlt: "Selección de idioma en el primer inicio de EDGE IPTV",
    midTitle: "¿Listo para empezar?",
    midBody: "Descarga EDGE IPTV ahora y empieza a ver en 2 minutos.",
    midButton: "Descargar – 7 días de prueba gratis",
    step3Title: "Añade tus códigos Xtream",
    step3Body:
      "Después, la app te pide tu primera lista. Los códigos Xtream son la opción más rápida y dan el mejor resultado:",
    step3List: [
      "Arriba, selecciona **Xtream Codes**.",
      "Introduce los datos de tu proveedor IPTV:",
      "Toca **Continuar**. La app comprueba el acceso y carga tus canales, películas y series.",
    ],
    fields: [
      { label: "URL del servidor", hint: "con la forma http://host:puerto, p. ej. http://line.example.com:8080" },
      { label: "Usuario", hint: "tu usuario" },
      { label: "Contraseña", hint: "tu contraseña" },
    ],
    step3Note:
      "Introduce los datos exactamente como te los dieron: cuidado con mayúsculas y minúsculas, y no copies un espacio al final de un campo.",
    m3uNote:
      "¿Solo tienes un enlace M3U? Selecciona **M3U** arriba y pégalo. Si termina en get.php?username=…, la app reconoce un acceso Xtream y lo usa sola. Para añadir más listas después, usa «Añadir una playlist» en el Playlist Hub.",
    step4Title: "¡Disfruta de tu contenido!",
    step4Body:
      "Eso es todo. EDGE IPTV carga tus canales, películas y series. Recorre las categorías, busca, añade favoritos y empieza a ver al momento.",
    seriesAlt: "Vista de series en EDGE IPTV",
    movieAlt: "Ficha de una película en EDGE IPTV",
    finalTitle: "Empieza a ver hoy",
    finalBody:
      "Descarga EDGE IPTV, añade tu lista M3U o tus códigos Xtream y mira en iPhone y iPad. La configuración lleva menos de 2 minutos.",
    finalButton: "Empieza tu prueba gratuita de 7 días",
    fineprint: "✓ 7 días de prueba gratis ✓ M3U y Xtream Codes ✓ Chromecast y AirPlay",
    back: "Volver al inicio",
    privacy: "Privacidad",
    terms: "Términos de uso",
    rights: "Todos los derechos reservados.",
  },

  pt: {
    metaTitle: "Como instalar IPTV no iPhone e iPad: guia 2026",
    metaDescription:
      "Guia passo a passo para instalar e configurar o EDGE IPTV no iPhone e iPad com códigos Xtream ou lista M3U, em menos de 2 minutos.",
    title: "Como instalar IPTV no iPhone e iPad: guia completo 2026",
    intro:
      "Configure IPTV no seu iPhone ou iPad em 4 passos simples, com os códigos Xtream ou o link M3U do seu provedor. Sem conhecimento técnico.",
    breadcrumb: "Como instalar IPTV no iPhone e iPad",
    home: "Início",
    download: "Baixar",
    needTitle: "O que você precisa",
    need: [
      "Um iPhone ou iPad com iOS 17.0 ou posterior",
      "Uma assinatura IPTV com códigos Xtream ou link M3U",
      "Uma conexão de internet estável",
      "O app EDGE IPTV",
    ],
    step1Title: "Baixe um player IPTV para iOS",
    step1Body:
      "Uma assinatura IPTV dá acesso aos canais; você ainda precisa de um player para assistir. O EDGE IPTV é feito para iPhone e iPad, é grátis para baixar e tem 7 dias de teste grátis.",
    whyTitle: "Por que o EDGE IPTV?",
    why: [
      "Configuração M3U ou Xtream em menos de 2 minutos",
      "Guia de TV (EPG) e Picture in Picture",
      "Chromecast e AirPlay para assistir na TV",
      "Downloads para assistir sem internet",
      `Disponível em ${APP_LANGUAGES.pt}`,
    ],
    step1Button: "Baixar o EDGE IPTV na App Store",
    step2Title: "Abra o app e escolha seu idioma",
    step2Body:
      "Na primeira abertura, escolha o idioma, passe por uma breve apresentação dos recursos e decida se compartilha estatísticas de uso anônimas. As duas coisas podem ser mudadas depois em Ajustes.",
    languageAlt: "Escolha do idioma na primeira abertura do EDGE IPTV",
    midTitle: "Pronto para começar?",
    midBody: "Baixe o EDGE IPTV agora e comece a assistir em 2 minutos.",
    midButton: "Baixar – 7 dias de teste grátis",
    step3Title: "Adicione seus códigos Xtream",
    step3Body:
      "Em seguida o app pede sua primeira lista. Os códigos Xtream são a opção mais rápida e dão o melhor resultado:",
    step3List: [
      "No topo, selecione **Xtream Codes**.",
      "Informe os dados do seu provedor IPTV:",
      "Toque em **Continuar**. O app verifica o acesso e carrega seus canais, filmes e séries.",
    ],
    fields: [
      { label: "URL do servidor", hint: "no formato http://host:porta, ex. http://line.example.com:8080" },
      { label: "Usuário", hint: "seu usuário" },
      { label: "Senha", hint: "sua senha" },
    ],
    step3Note:
      "Informe os dados exatamente como recebidos: atenção a maiúsculas e minúsculas, e não copie um espaço no fim de um campo.",
    m3uNote:
      "Só tem um link M3U? Selecione **M3U** no topo e cole. Se ele terminar em get.php?username=…, o app reconhece um acesso Xtream e passa a usá-lo sozinho. Para adicionar mais listas depois, use «Adicionar uma playlist» no Playlist Hub.",
    step4Title: "Aproveite seu conteúdo!",
    step4Body:
      "Pronto. O EDGE IPTV carrega seus canais, filmes e séries. Navegue pelas categorias, busque, adicione favoritos e comece a assistir na hora.",
    seriesAlt: "Visualização de séries no EDGE IPTV",
    movieAlt: "Ficha de um filme no EDGE IPTV",
    finalTitle: "Comece a assistir hoje",
    finalBody:
      "Baixe o EDGE IPTV, adicione sua lista M3U ou seus códigos Xtream e assista no iPhone e no iPad. A configuração leva menos de 2 minutos.",
    finalButton: "Comece seu teste grátis de 7 dias",
    fineprint: "✓ 7 dias de teste grátis ✓ M3U e Xtream Codes ✓ Chromecast e AirPlay",
    back: "Voltar ao início",
    privacy: "Privacidade",
    terms: "Termos de uso",
    rights: "Todos os direitos reservados.",
  },

  de: {
    metaTitle: "IPTV auf iPhone & iPad installieren: Anleitung 2026",
    metaDescription:
      "Schritt für Schritt: IPTV in unter 2 Minuten auf iPhone oder iPad einrichten, mit Xtream Codes oder M3U-Link deines Anbieters. EDGE IPTV kostenlos laden.",
    title: "IPTV auf iPhone und iPad installieren: die komplette Anleitung 2026",
    intro:
      "Richte IPTV in 4 einfachen Schritten auf deinem iPhone oder iPad ein, mit den Xtream Codes oder dem M3U-Link deines Anbieters. Ganz ohne Technikwissen.",
    breadcrumb: "IPTV auf iPhone & iPad installieren",
    home: "Startseite",
    download: "Laden",
    needTitle: "Was du brauchst",
    need: [
      "Ein iPhone oder iPad mit iOS 17.0 oder neuer",
      "Ein IPTV-Abo mit Xtream Codes oder M3U-Link",
      "Eine stabile Internetverbindung",
      "Die App EDGE IPTV",
    ],
    step1Title: "Lade einen IPTV-Player für iOS",
    step1Body:
      "Ein IPTV-Abo gibt dir Zugang zu den Sendern; zum Schauen brauchst du trotzdem einen Player. EDGE IPTV ist für iPhone und iPad gebaut, kostenlos zu laden und bietet 7 Tage Gratis-Test.",
    whyTitle: "Warum EDGE IPTV?",
    why: [
      "M3U oder Xtream in unter 2 Minuten eingerichtet",
      "Programmführer (EPG) und Bild-in-Bild",
      "Chromecast und AirPlay für den Fernseher",
      "Downloads zum Schauen ohne Internet",
      `Verfügbar auf ${APP_LANGUAGES.de}`,
    ],
    step1Button: "EDGE IPTV im App Store laden",
    step2Title: "App öffnen und Sprache wählen",
    step2Body:
      "Beim ersten Start wählst du deine Sprache, wischst durch eine kurze Vorstellung der Funktionen und entscheidest, ob du anonyme Nutzungsstatistiken teilst. Beides lässt sich später in den Einstellungen ändern.",
    languageAlt: "Sprachauswahl beim ersten Start von EDGE IPTV",
    midTitle: "Bereit loszulegen?",
    midBody: "Lade EDGE IPTV jetzt und schau in 2 Minuten los.",
    midButton: "Jetzt laden – 7 Tage gratis",
    step3Title: "Xtream Codes hinzufügen",
    step3Body:
      "Danach fragt die App nach deiner ersten Playlist. Xtream Codes sind der schnellste Weg und liefern das beste Ergebnis:",
    step3List: [
      "Wähle oben **Xtream Codes**.",
      "Gib die Daten deines IPTV-Anbieters ein:",
      "Tippe auf **Weiter**. Die App prüft die Anmeldung und lädt Sender, Filme und Serien.",
    ],
    fields: [
      { label: "Server-URL", hint: "im Format http://host:port, z. B. http://line.example.com:8080" },
      { label: "Benutzername", hint: "dein Benutzername" },
      { label: "Passwort", hint: "dein Passwort" },
    ],
    step3Note:
      "Gib die Daten genau so ein, wie du sie bekommen hast: Achte auf Groß- und Kleinschreibung und kopiere kein Leerzeichen am Ende eines Feldes mit.",
    m3uNote:
      "Du hast nur einen M3U-Link? Wähle oben **M3U** und füge ihn ein. Endet er auf get.php?username=…, erkennt die App einen Xtream-Zugang und nutzt ihn von selbst. Weitere Playlists fügst du später über „Playlist hinzufügen“ im Playlist Hub hinzu.",
    step4Title: "Viel Spaß beim Schauen!",
    step4Body:
      "Das war's. EDGE IPTV lädt deine Sender, Filme und Serien. Stöbere in den Kategorien, suche, setze Favoriten und schau sofort los.",
    seriesAlt: "Serienansicht in EDGE IPTV",
    movieAlt: "Filmdetails in EDGE IPTV",
    finalTitle: "Heute noch losschauen",
    finalBody:
      "Lade EDGE IPTV, füge deine M3U-Playlist oder Xtream Codes hinzu und schau auf iPhone und iPad. Die Einrichtung dauert keine 2 Minuten.",
    finalButton: "7 Tage kostenlos testen",
    fineprint: "✓ 7 Tage gratis ✓ M3U und Xtream Codes ✓ Chromecast und AirPlay",
    back: "Zurück zur Startseite",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    rights: "Alle Rechte vorbehalten.",
  },

  ar: {
    metaTitle: "طريقة تثبيت IPTV على الآيفون والآيباد: دليل 2026",
    metaDescription:
      "دليل خطوة بخطوة لتثبيت IPTV على الآيفون أو الآيباد في أقل من دقيقتين، ببيانات Xtream أو رابط M3U من مزوّدك. حمّل EDGE IPTV مجانًا.",
    title: "طريقة تثبيت IPTV على الآيفون والآيباد: الدليل الكامل 2026",
    intro:
      "اضبط IPTV على الآيفون أو الآيباد في 4 خطوات بسيطة، ببيانات Xtream أو رابط M3U من مزوّدك. دون أي خبرة تقنية.",
    breadcrumb: "تثبيت IPTV على الآيفون والآيباد",
    home: "الرئيسية",
    download: "تحميل",
    needTitle: "ما تحتاج إليه",
    need: [
      "آيفون أو آيباد بنظام iOS 17.0 أو أحدث",
      "اشتراك IPTV ببيانات Xtream أو رابط M3U",
      "اتصال إنترنت ثابت",
      "تطبيق EDGE IPTV",
    ],
    step1Title: "حمّل مشغّل IPTV لنظام iOS",
    step1Body:
      "يمنحك اشتراك IPTV الوصول إلى القنوات، لكنك تحتاج إلى مشغّل لمشاهدتها. صُمّم EDGE IPTV للآيفون والآيباد، وتحميله مجاني مع تجربة مجانية لسبعة أيام.",
    whyTitle: "لماذا EDGE IPTV؟",
    why: [
      "إعداد M3U أو Xtream في أقل من دقيقتين",
      "دليل البرامج (EPG) وصورة داخل صورة",
      "Chromecast وAirPlay للمشاهدة على التلفاز",
      "تحميل للمشاهدة دون إنترنت",
      `متوفر بـ${APP_LANGUAGES.ar}`,
    ],
    step1Button: "حمّل EDGE IPTV من App Store",
    step2Title: "افتح التطبيق واختر لغتك",
    step2Body:
      "عند التشغيل الأول، اختر لغتك، ومرّر عرضًا قصيرًا للميزات، ثم قرّر إن كنت تشارك إحصاءات استخدام مجهولة. يمكنك تغيير الأمرين لاحقًا من الإعدادات.",
    languageAlt: "اختيار اللغة عند التشغيل الأول لـEDGE IPTV",
    midTitle: "جاهز للبدء؟",
    midBody: "حمّل EDGE IPTV الآن وابدأ المشاهدة خلال دقيقتين.",
    midButton: "حمّل الآن – تجربة مجانية لسبعة أيام",
    step3Title: "أضف بيانات Xtream",
    step3Body: "يطلب التطبيق بعدها قائمتك الأولى. بيانات Xtream هي الخيار الأسرع والأفضل نتيجة:",
    step3List: [
      "في الأعلى، اختر **Xtream Codes**.",
      "أدخل البيانات التي أرسلها مزوّد IPTV:",
      "اضغط **استمرار**. يتحقق التطبيق من الدخول ويحمّل القنوات والأفلام والمسلسلات.",
    ],
    fields: [
      { label: "عنوان URL للخادم", hint: "بالصيغة http://host:port، مثل http://line.example.com:8080" },
      { label: "اسم المستخدم", hint: "اسم المستخدم الخاص بك" },
      { label: "كلمة المرور", hint: "كلمة المرور الخاصة بك" },
    ],
    step3Note:
      "أدخل البيانات كما وصلتك تمامًا: انتبه للأحرف الكبيرة والصغيرة، ولا تنسخ مسافة في نهاية أي حقل.",
    m3uNote:
      "لديك رابط M3U فقط؟ اختر **M3U** في الأعلى والصقه. إذا انتهى بـget.php?username=…، يتعرّف التطبيق على حساب Xtream ويستخدمه تلقائيًا. لإضافة قوائم أخرى لاحقًا، استخدم «إضافة قائمة تشغيل» في Playlist Hub.",
    step4Title: "استمتع بالمحتوى!",
    step4Body:
      "هذا كل شيء. يحمّل EDGE IPTV قنواتك وأفلامك ومسلسلاتك. تصفّح الفئات وابحث وأضف المفضلة وابدأ المشاهدة فورًا.",
    seriesAlt: "عرض المسلسلات في EDGE IPTV",
    movieAlt: "تفاصيل فيلم في EDGE IPTV",
    finalTitle: "ابدأ المشاهدة اليوم",
    finalBody:
      "حمّل EDGE IPTV، وأضف قائمة M3U أو بيانات Xtream، وشاهد على الآيفون والآيباد. يستغرق الإعداد أقل من دقيقتين.",
    finalButton: "ابدأ تجربتك المجانية لسبعة أيام",
    fineprint: "✓ تجربة مجانية لسبعة أيام ✓ M3U وXtream Codes ✓ Chromecast وAirPlay",
    back: "العودة إلى الرئيسية",
    privacy: "الخصوصية",
    terms: "شروط الاستخدام",
    rights: "جميع الحقوق محفوظة.",
  },

  it: {
    metaTitle: "Come installare l'IPTV su iPhone e iPad: guida 2026",
    metaDescription:
      "Guida passo passo per installare l'IPTV su iPhone o iPad in meno di 2 minuti, con i codici Xtream o il link M3U del tuo provider. Scarica EDGE IPTV gratis.",
    title: "Come installare l'IPTV su iPhone e iPad: guida completa 2026",
    intro:
      "Configura l'IPTV sul tuo iPhone o iPad in 4 semplici passaggi, con i codici Xtream o il link M3U del tuo provider. Nessuna competenza tecnica richiesta.",
    breadcrumb: "Installare l'IPTV su iPhone e iPad",
    home: "Home",
    download: "Scarica",
    needTitle: "Cosa ti serve",
    need: [
      "Un iPhone o iPad con iOS 17.0 o successivo",
      "Un abbonamento IPTV con codici Xtream o link M3U",
      "Una connessione internet stabile",
      "L'app EDGE IPTV",
    ],
    step1Title: "Scarica un lettore IPTV per iOS",
    step1Body:
      "Un abbonamento IPTV ti dà accesso ai canali; serve comunque un lettore per guardarli. EDGE IPTV è progettata per iPhone e iPad, si scarica gratis e include 7 giorni di prova gratuita.",
    whyTitle: "Perché EDGE IPTV?",
    why: [
      "Configurazione M3U o Xtream in meno di 2 minuti",
      "Guida TV (EPG) e Picture in Picture",
      "Chromecast e AirPlay per guardare sulla TV",
      "Download per guardare senza internet",
      `Disponibile in ${APP_LANGUAGES.it}`,
    ],
    step1Button: "Scarica EDGE IPTV dall'App Store",
    step2Title: "Apri l'app e scegli la lingua",
    step2Body:
      "Al primo avvio scegli la lingua, scorri una breve presentazione delle funzioni e decidi se condividere statistiche d'uso anonime. Entrambe le scelte si cambiano poi nelle Impostazioni.",
    languageAlt: "Scelta della lingua al primo avvio di EDGE IPTV",
    midTitle: "Pronto per iniziare?",
    midBody: "Scarica EDGE IPTV ora e inizia a guardare in 2 minuti.",
    midButton: "Scarica ora – 7 giorni di prova gratuita",
    step3Title: "Aggiungi i codici Xtream",
    step3Body:
      "Poi l'app ti chiede la prima playlist. I codici Xtream sono l'opzione più rapida e danno il risultato migliore:",
    step3List: [
      "In alto, seleziona **Xtream Codes**.",
      "Inserisci i dati del tuo provider IPTV:",
      "Tocca **Continua**. L'app verifica l'accesso e carica canali, film e serie.",
    ],
    fields: [
      { label: "URL del server", hint: "nella forma http://host:porta, es. http://line.example.com:8080" },
      { label: "Nome utente", hint: "il tuo nome utente" },
      { label: "Password", hint: "la tua password" },
    ],
    step3Note:
      "Inserisci i dati esattamente come ricevuti: attenzione a maiuscole e minuscole, e non copiare uno spazio alla fine di un campo.",
    m3uNote:
      "Hai solo un link M3U? Seleziona **M3U** in alto e incollalo. Se termina con get.php?username=…, l'app riconosce un accesso Xtream e lo usa da sola. Per aggiungere altre playlist in seguito, usa «Aggiungi una playlist» nel Playlist Hub.",
    step4Title: "Goditi i tuoi contenuti!",
    step4Body:
      "Fatto. EDGE IPTV carica canali, film e serie. Sfoglia le categorie, cerca, aggiungi preferiti e inizia subito a guardare.",
    seriesAlt: "Vista delle serie in EDGE IPTV",
    movieAlt: "Scheda di un film in EDGE IPTV",
    finalTitle: "Inizia a guardare oggi",
    finalBody:
      "Scarica EDGE IPTV, aggiungi la tua playlist M3U o i codici Xtream e guarda su iPhone e iPad. La configurazione richiede meno di 2 minuti.",
    finalButton: "Inizia la prova gratuita di 7 giorni",
    fineprint: "✓ 7 giorni di prova gratuita ✓ M3U e Xtream Codes ✓ Chromecast e AirPlay",
    back: "Torna alla home",
    privacy: "Privacy",
    terms: "Termini di utilizzo",
    rights: "Tutti i diritti riservati.",
  },
};
