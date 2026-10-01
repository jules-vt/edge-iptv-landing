import type { Lang } from "@/lib/i18n";

export interface LandingCopy {
  /** ≤ 60 characters, or Google truncates it. */
  metaTitle: string;
  /** ≤ 160 characters. */
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  imageAlt: string;
  needTitle: string;
  need: string[];
  stepsTitle: string;
  steps: { title: string; description: string }[];
  featuresTitle: string;
  features: { title: string; description: string }[];
  explainTitle: string;
  explain: string[];
  faq: { q: string; a: string }[];
}

/** Strings shared by every landing page in a language. */
export interface LandingUi {
  cta: string;
  fineprint: string;
  home: string;
  faqTitle: string;
  more: string;
  guides: string;
  installGuide: string;
  blog: string;
  rights: string;
}

export const LANDING_UI: Record<Lang, LandingUi> = {
  en: {
    cta: "Start your 7-day free trial",
    fineprint: "Free download · 7-day free trial · then $3.99/month or $19.99/year · no ads",
    home: "Home",
    faqTitle: "Frequently asked questions",
    more: "Also on EDGE IPTV",
    guides: "Guides",
    installGuide: "How to install IPTV on iPhone & iPad",
    blog: "All guides",
    rights: "All rights reserved.",
  },
  fr: {
    cta: "Démarrer l'essai gratuit de 7 jours",
    fineprint: "Téléchargement gratuit · 7 jours d'essai · puis 3,99 €/mois ou 19,99 €/an · sans publicité",
    home: "Accueil",
    faqTitle: "Questions fréquentes",
    more: "Aussi sur EDGE IPTV",
    guides: "Guides",
    installGuide: "Installer l'IPTV sur iPhone et iPad",
    blog: "Tous les guides",
    rights: "Tous droits réservés.",
  },
  es: {
    cta: "Empieza tu prueba gratuita de 7 días",
    fineprint: "Descarga gratis · 7 días de prueba · luego 3,99 €/mes o 19,99 €/año · sin anuncios",
    home: "Inicio",
    faqTitle: "Preguntas frecuentes",
    more: "También en EDGE IPTV",
    guides: "Guías",
    installGuide: "Cómo instalar IPTV en iPhone y iPad",
    blog: "Todas las guías",
    rights: "Todos los derechos reservados.",
  },
  pt: {
    cta: "Comece seu teste grátis de 7 dias",
    fineprint: "Download grátis · 7 dias de teste · depois US$ 3,99/mês ou US$ 19,99/ano · sem anúncios",
    home: "Início",
    faqTitle: "Perguntas frequentes",
    more: "Também no EDGE IPTV",
    guides: "Guias",
    installGuide: "Como instalar IPTV no iPhone e iPad",
    blog: "Todos os guias",
    rights: "Todos os direitos reservados.",
  },
  de: {
    cta: "7 Tage kostenlos testen",
    fineprint: "Kostenloser Download · 7 Tage gratis · danach 3,99 €/Monat oder 19,99 €/Jahr · keine Werbung",
    home: "Startseite",
    faqTitle: "Häufige Fragen",
    more: "Mehr zu EDGE IPTV",
    guides: "Guides",
    installGuide: "IPTV auf iPhone & iPad installieren",
    blog: "Alle Guides",
    rights: "Alle Rechte vorbehalten.",
  },
  ar: {
    cta: "ابدأ تجربتك المجانية لسبعة أيام",
    fineprint: "تحميل مجاني · تجربة 7 أيام · ثم 3.99 دولار شهريًا أو 19.99 دولار سنويًا · دون إعلانات",
    home: "الرئيسية",
    faqTitle: "الأسئلة الشائعة",
    more: "المزيد عن EDGE IPTV",
    guides: "الأدلة",
    installGuide: "تثبيت IPTV على الآيفون والآيباد",
    blog: "كل الأدلة",
    rights: "جميع الحقوق محفوظة.",
  },
  it: {
    cta: "Inizia la prova gratuita di 7 giorni",
    fineprint: "Download gratuito · 7 giorni di prova · poi 3,99 €/mese o 19,99 €/anno · senza pubblicità",
    home: "Home",
    faqTitle: "Domande frequenti",
    more: "Anche su EDGE IPTV",
    guides: "Guide",
    installGuide: "Installare l'IPTV su iPhone e iPad",
    blog: "Tutte le guide",
    rights: "Tutti i diritti riservati.",
  },
};
