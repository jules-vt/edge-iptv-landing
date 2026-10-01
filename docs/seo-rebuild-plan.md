# Plan de reconstruction — site vitrine & blog EDGE IPTV

Créé le 2026-09-26. Objectif final : maximiser le trafic qui se convertit en visites sur la fiche App Store (`apps.apple.com/ca/app/edge-iptv-m3u-xtream/id6812893793`), pas juste le volume d'impressions.

## Diagnostic (baseline avant travaux)

Source : exports Search Console du 25/09/2025 au 24/09/2026 (12 derniers mois).

- **Panne serveur** : trafic quasi nul du 17/07/2026 au 21/08/2026 (~5 semaines). Reprise depuis, mais position moyenne encore dégradée (15-25 contre 6-8 avant panne) sur beaucoup de jours récents — à surveiller, pas encore stabilisé.
- **Le problème principal est la conversion, pas le volume.** Plusieurs pages ont un trafic potentiel énorme et un CTR proche de zéro :
  - `best-iptv-player-ios-2026` : 3285 impressions / 5 clics (0.15% CTR, position 11.4)
  - `chromecast-iptv-streaming-guide` : 1930 impressions / 3 clics (0.16% CTR, position 28.7)
  - `iptv-buffering-fix-guide` : 921 impressions / 5 clics (0.54% CTR, position 18.9)
  - Page listing `/blog` : 18 impressions / 0 clic
  - La homepage, elle, convertit bien : 498 clics / 6088 impressions (8.18% CTR, position 8.08) — c'est le modèle à répliquer.
- **Requête de marque mal positionnée** : "edge iptv" est en position moyenne 6.89 alors que ça devrait être en position 1 quasi systématique pour une requête de marque exacte.
- **Tablette = meilleur CTR du site (14.93%)** sur seulement 268 impressions — segment sous-exploité, alors que iPad n'est presque pas mis en avant dans le contenu actuel.
- **Marchés chauds non couverts** : Allemagne (348 impressions), cluster arabophone Maroc/Arabie Saoudite/Algérie (~470 impressions cumulées, CTR 6-10%), Italie (114 impressions) — aucune version DE/AR/IT du site.
- **Pages dupliquées indexées séparément** : `/terms-of-use` et `/terms-of-use.html`, `/fr/` et `/fr.html`, `www.edge-iptv.app` et `edge-iptv.app` — dilution du signal de ranking.

## Bugs et risques techniques identifiés dans le code

Ces points sont indépendants du choix de design — à corriger dans tous les cas.

1. **Données structurées fabriquées (risque de pénalité Google)** — `components/schema-org.tsx` contient un `aggregateRating` inventé (5.0/5, 1000 avis) et un `reviewSchema` attribué à "App Store Users" (pas un vrai avis). Google interdit explicitement les notes auto-attribuées sans vrai système d'avis ; ça correspond aussi au CTR 0% observé sur l'extrait d'avis en Search Console.
2. **`VideoObject` fantôme** — `app/how-to-install-iptv-iphone-ipad/page.tsx` (+ clones fr/es/pt) déclare une vidéo qui n'existe pas sur la page : pas de `contentUrl`/`embedUrl`, `uploadDate` sans fuseau horaire. C'est exactement les 3 erreurs remontées par Search Console.
3. **Bug de changement de langue sur le blog** — deux sources de vérité divergentes : `alternateSlug` (un seul lien) dans `lib/blog-posts.ts`, et une table `blogSlugMapping` dupliquée à la main dans `components/language-switcher.tsx`. Un article sans entrée dans les deux (ex. `best-iptv-app-for-iphone`) casse le changement de langue.
4. **Canonicalisation incomplète** — le `.htaccess` redirige déjà `.html` → URL propre, mais ne force pas HTTPS (commenté) et ne gère pas `www` → apex.
5. **Structure de pages par langue dupliquée à la main** — `app/es/`, `app/fr/`, `app/pt/` sont des dossiers de fichiers séparés à maintenir manuellement en parallèle : source d'erreurs et de dérive de contenu entre langues.

## Décisions prises avec Jules (26/09/2026)

- **Langues à ajouter** : allemand (DE), arabe (AR — RTL), italien (IT), en plus de en/fr/es/pt existants.
- **Ampleur** : refonte complète (homepage + blog), pas juste des corrections ciblées.

## Phases

### Phase 0 — Corrections critiques ✅ terminée le 2026-09-26
- [x] Supprimer `aggregateRating` et `reviewSchema` fabriqués de `schema-org.tsx`
- [x] Supprimer les 4 `VideoObject` fantômes (aucune vraie vidéo n'existe ; à rebrancher proprement le jour où une démo sera tournée)
- [x] Forcer HTTPS et rediriger `www` → apex — d'abord écrit dans `.htaccess`, **qui n'a jamais été lu** : le serveur est nginx. Refait dans le vhost nginx le 2026-09-27 et vérifié en production ; le `.htaccess` a été supprimé du repo le 2026-10-01
- [x] Unifier la table de traduction en une seule source de vérité : `translationGroup` sur chaque `BlogPost`, plus `buildBlogAlternates()` utilisé par les 25 pages
- [x] Vérifier le lien CTA : OK, 1 redirection, 533 ms, arrive bien sur la fiche App Store

Trouvé et corrigé en cours de route (même nature — des données fausses servies à Google) :
- [x] **~70 URLs poubelles supprimées.** `generateStaticParams` générait les slugs de *toutes* les langues sous *chaque* langue : `/blog/` contenait 23 pages pour 6 articles réels, le reste étant des soft-404 dont le canonical pointait vers la homepage. `getBlogSlugs(lang)` est désormais scopé par langue.
- [x] **hreflang cassés dans les 4 langues.** Chaque page déclarait des alternates écrits à la main, tous incomplets ou faux — les versions es/pt pointaient les lecteurs français et portugais vers des slugs anglais qui renvoyaient 404. Les clusters sont maintenant complets et symétriques.
- [x] **« Invalid Date » affiché sur 20 articles sur 21.** Les pages passaient une date déjà traduite (`"12 de janeiro de 2026"`) à `new Date()`. Passage en ISO + rendu forcé en UTC (sinon le fuseau de la machine de build décale d'un jour).
- [x] **`iOS 12.0` corrigé en `iOS 17.0` partout (~30 occurrences).** L'app exige iOS 17 : la fausse valeur était aussi dans le schema FAQ et les schemas HowTo. Les appareils annoncés ont suivi (iPhone 6s → iPhone XS).
- [x] Faits produit remis à jour dans le schema : version 1.0 → 1.1, `downloadUrl` pointant vers la vraie fiche App Store au lieu du lien de tracking, dates de publication réelles.
- [x] Le guide d'installation n'offrait qu'une seule autre langue (lien codé en dur) alors que les 4 versions existent → remplacé par le sélecteur partagé.

Vérifié et **exact**, aucune correction nécessaire : l'essai gratuit de 7 jours, le sitemap (41 URLs, aucune poubelle), les hreflang des guides d'installation, et les features annoncées (téléchargements hors ligne, EPG, Chromecast existent bien dans l'app).

### Phase 1 — Contenu et ton (fait le 2026-09-27)

**Le modèle tarifaire réel a d'abord dû être établi**, parce que la documentation interne était fausse. Vérification dans le code (2026-09-27) : il n'y a **pas** de paywall dur, `RootTabView` n'est pas gaté. Installation, onboarding, ajout de playlists M3U/Xtream et navigation dans le catalogue sont libres ; en revanche **toute lecture** est réservée aux abonnés après 7 jours d'essai — direct, films, séries et téléchargements. Donc « l'app est gratuite » est faux sur le fond : on ne peut rien regarder sans payer. Tarif : 3,99 $/mois ou 19,99 $/an, sans publicité.

- [x] **Affirmations tarifaires fausses supprimées.** Le site prétendait que l'app était « completely free to download and use », que « the app itself has no cost », et comparait même EDGE IPTV à des concurrents « qui facturent 3-5 € » alors qu'il en coûte 3,99. Réécrit en EN et FR, y compris dans le schema FAQ. Fait notable : `components/faq.tsx` disait déjà la vérité (essai 7 jours puis abonnement) — ce sont les articles qui la contredisaient.
- [x] **Notes « 5.0 » auto-attribuées supprimées** dans les 4 langues (badge, tableau comparatif, titres de section). Même problème que le faux `aggregateRating` de la Phase 0 : une note inventée pour une app qui n'a pas d'historique d'avis. Remplacées par « Nouveau » / « Notre choix ».
- [x] **497 symboles décoratifs traités.** Les emojis (✅❌⭐💡📺📱🎯…) étaient la signature « texte IA » la plus visible : jusqu'à 55 dans un seul article. Les pictogrammes de tableau deviennent des signes typographiques (✓ ✗ ★), les emojis décoratifs disparaissent. Les flèches → et coches ✓ restent : ce sont de la ponctuation, pas de la décoration.
- [x] **Tous les tirets cadratins retirés de la prose** (celui que Jules avait repéré en premier), en gardant ceux qui séparent un titre d'un libellé, où ils sont typographiquement normaux.
- [x] **Libellés de CTA rendus honnêtes** : « Download EDGE IPTV Free » (34 occurrences, 4 langues) devient « Démarrer l'essai gratuit de 7 jours » et ses traductions.
- [x] **Section iPad ajoutée aux 4 homepages** (`components/ipad-section.tsx`), **avec de vraies captures iPad**. La tablette est le meilleur segment du site — 14,93 % de CTR contre 8,18 % sur mobile et 1,21 % sur desktop — sur seulement 268 impressions, faute de contenu qui lui parle. Chaque affirmation est vérifiée dans le code : l'adaptation à l'écran large est réelle (`horizontalSizeClass == .regular` passe les affiches de 120×180 à 220×330), et Picture in Picture, AirPlay et Chromecast existent bien. Les modèles compatibles sont listés précisément.
  - Les captures viennent de `EDGE IPTV 2.0/screenshots/captures/<langue>/ipad/` (2064×2752), recadrées en haut pour retirer le vide du bas et converties en webp (~50 Ko). Une image par langue, donc la barre d'onglets et le guide EPG apparaissent dans la langue de la page. **Ces captures existent en 11 langues, dont l'allemand et l'italien** : à réutiliser tels quels en Phase 3.
- [x] **~2400 lignes de code mort supprimées.** Les 4 routes `blog/[slug]/page.tsx` n'étaient jamais rendues : chaque article a un dossier concret, qui a la priorité sur la route dynamique. Vérifié empiriquement — les 43 pages produisent un texte identique sans elles. Elles contenaient 156 emojis et des affirmations périmées, et constituaient un piège pour toute modification future.

Reste ouvert :
- [ ] Les notes des concurrents dans les tableaux comparatifs sont incohérentes d'un article à l'autre (GSE Smart IPTV noté 4.1 ici, 4.5 là) et invérifiables en l'état. À reprendre avec de vraies données App Store, ou à retirer.
- [ ] Article iPad dédié (« EDGE IPTV sur iPad »), pour viser les requêtes repérées dans Search Console : « iptv setup for ipad », « install iptv on ipad », « best iptv apps for ipad 2026 ».

### Phase 2 — Refonte design (blog fait le 2026-09-27, homepage à décider)

Mesure avant/après sur `/blog/m3u-playlist-setup-guide` :

| | Avant | Après |
|---|---|---|
| Premier lien App Store | 5812 px (70 % de la page) | 12 px (0 %) |
| Nombre de CTA | 3 | 6 |
| Sommaire | aucun | 11 sections |
| Liens internes en fin d'article | 0 | 3 |

- [x] **Template d'article reconstruit.** CTA compact injecté juste après le paragraphe d'introduction, sommaire auto en colonne latérale (≥1280 px), carte CTA collante, barre CTA collante sur mobile (450 des 628 clics annuels), et section « À lire ensuite » qui donne enfin des liens internes au blog.
- [x] **Listing blog reconstruit.** Article mis en avant en tête (le plus récent, donc auto-entretenu), grille en dessous, bloc CTA avec l'icône de l'app. Les 4 pages de listing (en/fr/es/pt) passent maintenant par un seul composant `BlogIndex` — elles étaient dupliquées à la main, c'est exactement ce qui avait causé la désynchronisation corrigée en Phase 0.
- [x] **Couvertures d'articles distinctes.** Les 7 articles partageaient 3 images identiques, sans rapport avec leur sujet : rien n'incitait à cliquer. Chaque sujet a désormais son dégradé, son pictogramme et une capture pertinente, le tout indexé sur `translationGroup` pour que les 4 langues partagent le visuel.
- [x] **Typographie de corps d'article.** `@tailwindcss/typography` n'a jamais été installé alors que les classes `prose` étaient utilisées dans 38 fichiers : toute la typographie était du code mort. Remplacé par `.article-body` (longueur de ligne lisible, tableaux scrollables sur mobile), et les classes mortes ont été retirées pour que personne ne s'y fie à nouveau.

Bugs trouvés et corrigés au passage :
- [x] `buildAlternates()` forçait le canonical sur la version **anglaise** quelle que soit la page. Utilisée telle quelle sur les listings fr/es/pt, elle leur aurait fait déclarer à Google qu'ils sont des doublons de l'anglais. La fonction prend maintenant la langue courante.
- [x] Les dates des cartes du blog rejouaient le bug de fuseau de la Phase 0 (décalage d'un jour) **et** affichaient les dates espagnoles et portugaises au format français. Un seul `formatPostDate()` sert désormais partout.
- [x] Les listings en/fr ne déclaraient que 2 hreflang sur 4.
- [x] « Free forever » / « Gratuit pour toujours » retiré de 10 fichiers : faux, l'app a un paywall avec essai de 7 jours.

À décider :
- [ ] **Homepage** : à l'inspection, elle est en bon état visuel et convertit à 8,18 % de CTR. Une refonte complète présente plus de risque que de gain — mon avis est de ne toucher qu'au contenu (Phase 1) plutôt qu'au design. À trancher avec Jules.

### Phase 3 — Extension linguistique (fait le 2026-09-27)

Le site passe de 4 à **7 langues** : allemand, arabe et italien s'ajoutent à en/fr/es/pt.

- [x] **Centralisation d'abord, ajout ensuite.** `lib/i18n.ts` devient la source unique : liste des langues, libellés, `hreflang`, locale Open Graph et direction d'écriture. Le sélecteur, le sitemap, le blog, les schemas et chaque dictionnaire y puisent. Ajouter une langue se résume à une entrée ici — TypeScript signale ensuite chaque dictionnaire encore incomplet, ce qui a servi de liste de tâches.
- [x] **Une seule homepage.** Les 4 pages d'accueil étaient 4 fichiers de 400 à 530 lignes qui avaient déjà divergé : l'anglaise passait par `DownloadButton` (avec tracking GA4), les trois autres par un lien brut — **leurs conversions étaient invisibles dans les statistiques**. Il y a maintenant un composant `HomePage` et un dictionnaire `lib/home-copy.ts`, et les 7 pages sont des enveloppes de 25 lignes.
- [x] **RTL arabe.** `<html lang>` était figé à « en » pour toutes les langues — un bug préexistant. Le conteneur de page porte désormais `lang` et `dir` corrects, rendus côté serveur, donc l'arabe s'affiche en miroir dès le premier octet sans attendre le JavaScript. La capture iPad arabe montre d'ailleurs l'app elle-même en RTL.
- [x] **Captures iPad dans les 7 langues** (les sources existaient en 11 langues).
- [x] **Sitemap dérivé des données** au lieu d'énumérer chaque URL à la main en blocs par langue — la même duplication qui avait produit les hreflang cassés de la Phase 0.
- [x] **Aucun lien mort** : le guide d'installation et les pages légales ne sont pas traduits en de/ar/it, donc `installGuidePath()` et `legalPath()` retombent explicitement sur l'anglais, et `blogPath()` ne pointe vers un blog localisé que s'il contient des articles.
- [x] **Affirmations invérifiables retirées des schemas** : « the leading IPTV player brand », « The #1 IPTV Player », « Provider of the best IPTV player ». Les ternaires à 4 langues qu'elles habitaient retombaient en plus silencieusement sur le portugais pour toute nouvelle langue.

Reste à traduire pour ces 3 langues (le contenu existant reste en anglais, sans lien mort) :
- [ ] Guide d'installation (la page la plus visitée après la homepage)
- [~] Articles de blog — `best-iptv-app-for-iphone` traduit le 2026-10-01 (ouvre `/de/blog`, `/ar/blog`, `/it/blog`) ; les 5 autres restent à faire
- [ ] Pages légales — textes juridiques, à traduire sérieusement ou pas du tout

### Phase 4 — Skill de suivi SEO continu
Voir `~/.claude/skills/seo-monitor` (à créer). Protocole récurrent : réimport des exports Search Console, comparaison mois par mois, détection des pages en perte de CTR/position, validation des données structurées, priorisation des actions.

## Notes de suivi

- 2026-09-26 : plan initial créé, décisions langues/ampleur actées avec Jules. Première snapshot Search Console enregistrée dans `docs/seo/snapshots/2026-09-26.md` (baseline avant corrections Phase 0). Skill `seo-monitor` créé pour le suivi récurrent.
- 2026-09-26 : Phase 0 terminée. À surveiller sur la prochaine snapshot : (1) disparition de l'erreur « Données structurées Vidéos » dans Search Console, (2) désindexation progressive des ~70 URLs soft-404 et des doublons `.html`/`www`, (3) effet des hreflang réparés sur les positions es/pt. **Penser à redéployer** — les corrections ne sont pas encore en ligne au moment de cette note.
- 2026-10-01 : l'article `best-iptv-app-for-iphone` (requête la plus commerciale) existe dans les 7 langues, texte dans `lib/articles/best-iptv-app-iphone.ts`. Il affirmait encore une note de 5.0, « Free » et « no in-app purchases » : corrigé. En chemin : le Smart App Banner pointait vers l'app v1 ; chaque page traduite portait deux `SoftwareApplication` (layout racine + layout de langue), désormais rendus sur les seules homepages ; le `BreadcrumbList` émettait « / » comme URL. Titles ≤ 60 et descriptions ≤ 160 sur les 51 pages, `.htaccess` supprimé. À surveiller : indexation des 6 nouvelles URL et des 3 index de blog, et l'effet des titles raccourcis sur le CTR.
