# Documentation du Projet "Landing Page v2"

**Généré le:** 9 janvier 2026  
**Type de projet:** Monolithe - Application Web Next.js  
**Niveau de scan:** Exhaustif  
**Auteur:** Jules

## Vue d'ensemble

Ce projet est une landing page pour une application IPTV, développée avec Next.js 16 et React 19. Il s'agit d'un site web statique avec internationalisation (français et anglais), incluant un blog et des pages d'information.

### Classification du projet

- **Type:** Web
- **Architecture:** Monolithe
- **Framework principal:** Next.js avec App Router
- **Langage:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion

## Structure du projet

```
landing page v2/
├── app/                          # Routes Next.js (App Router)
│   ├── blog/                     # Blog en anglais
│   ├── fr/                       # Version française
│   ├── how-to-install-iptv-iphone-ipad/  # Guide d'installation
│   ├── privacy-policy/           # Politique de confidentialité
│   ├── terms-of-use/             # Conditions d'utilisation
│   ├── globals.css               # Styles globaux
│   ├── layout.tsx                # Layout principal
│   ├── not-found.tsx             # Page 404
│   ├── page.tsx                  # Page d'accueil
│   ├── robots.ts                 # Configuration robots
│   └── sitemap.ts                # Sitemap
├── components/                   # Composants réutilisables
│   ├── article-layout.tsx        # Layout d'article
│   ├── blog-card.tsx             # Carte de blog
│   ├── breadcrumb.tsx            # Fil d'Ariane
│   ├── faq.tsx                   # FAQ
│   ├── schema-org.tsx            # Schéma SEO
│   └── ui/                       # Composants UI (Badge, Button, Card)
├── lib/                          # Utilitaires
│   ├── blog-posts.ts             # Données des posts de blog
│   └── utils.ts                  # Fonctions utilitaires
├── public/                       # Assets statiques
│   └── images/                   # Images
├── _bmad/                        # Outils BMAD (ignoré par Git)
├── _bmad-output/                 # Artefacts de génération BMAD
├── docs/                         # Cette documentation
└── Fichiers de config (package.json, next.config.ts, etc.)
```

## Pile technologique

| Catégorie     | Technologie                                    | Version  | Justification                                          |
| ------------- | ---------------------------------------------- | -------- | ------------------------------------------------------ |
| Framework     | Next.js                                        | 16.1.1   | Framework React pour le rendu côté serveur et statique |
| Runtime       | React                                          | 19.2.3   | Bibliothèque UI principale                             |
| Langage       | TypeScript                                     | 5.x      | Typage statique pour JavaScript                        |
| Styling       | Tailwind CSS                                   | 4.1.18   | Framework CSS utilitaire                               |
| Animations    | Framer Motion                                  | 12.23.26 | Bibliothèque d'animations React                        |
| Icônes        | Lucide React                                   | 0.562.0  | Bibliothèque d'icônes                                  |
| UI Components | Radix UI                                       | 1.2.4    | Composants accessibles de base                         |
| Utilitaires   | clsx, class-variance-authority, tailwind-merge | -        | Gestion des classes CSS                                |

### Patterns architecturaux

- **App Router:** Utilisation du nouveau système de routage de Next.js
- **Component-based:** Architecture modulaire avec composants réutilisables
- **Internationalisation:** Support multilingue avec routes séparées (/fr/)
- **SEO-friendly:** Métadonnées, sitemap, robots.txt intégrés

## Composants UI

Le projet utilise une bibliothèque de composants UI organisée :

- **Badge:** Indicateurs et étiquettes
- **Button:** Boutons avec variantes (via class-variance-authority)
- **Card:** Conteneurs de contenu

### Patterns de composants

- Utilisation de `clsx` et `tailwind-merge` pour la gestion des classes
- Composants accessibles via Radix UI
- Animations fluides avec Framer Motion

## Contenu et fonctionnalités

### Pages principales

- **Accueil:** Landing page avec présentation de l'app IPTV
- **Blog:** Articles sur l'IPTV (en anglais et français)
- **Guide d'installation:** Tutoriel pour iPhone/iPad
- **Politiques:** Confidentialité et conditions d'utilisation

### Internationalisation

- Routes séparées pour le français (`/fr/`)
- Contenu dupliqué dans les deux langues
- Structure identique pour maintenance facile

### SEO et performance

- Métadonnées Next.js intégrées
- Sitemap automatique
- Robots.txt configuré
- Schéma Org pour le SEO structuré

## Configuration de déploiement

### Next.js Config

- Export statique activé (sortie dans `/out`)
- Optimisations pour le déploiement

### Build et scripts

- `npm run dev`: Développement local
- `npm run build`: Build de production
- `npm run start`: Serveur de production
- `npm run lint`: Vérification ESLint

## État du projet

- **Phase:** Production prête
- **Maintenance:** Faible (site statique)
- **Évolutivité:** Bonne pour ajout de contenu
- **Tests:** Non présents (site simple)

## Recommandations

1. **Tests:** Ajouter des tests unitaires pour les composants
2. **CMS:** Intégrer un CMS pour la gestion du contenu blog
3. **Analytics:** Ajouter suivi des visiteurs
4. **Performance:** Optimiser les images et lazy loading

---

_Documentation générée automatiquement par BMAD Master Executor_
