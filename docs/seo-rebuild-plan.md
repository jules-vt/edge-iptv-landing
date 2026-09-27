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
- [x] Forcer HTTPS et rediriger `www` → apex dans `.htaccess` (la règle HTTPS teste aussi `X-Forwarded-Proto`, sinon elle boucle derrière un reverse proxy)
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

### Phase 1 — Contenu et ton

> **Signalé pendant la Phase 2, à traiter en priorité ici** : plusieurs réponses du schema FAQ affirment que l'app est « completely free to download and use » et que « the app itself has no cost », et le tableau comparatif de `best-iptv-app-for-iphone` affiche le prix « Free ». C'est faux depuis le passage au paywall (téléchargement gratuit, essai 7 jours, puis abonnement). Même nature de risque que les faux avis corrigés en Phase 0, puisque c'est dans des données structurées.
>
> Autre relevé : les articles comptent jusqu'à 21 emojis décoratifs (✅📱💡🎯…) — c'est la signature « texte IA » la plus visible du site, avec les tirets cadratins.

- [ ] Ré-écrire tous les textes qui "sonnent IA" (tirets cadratins, formulations génériques, superlatifs vagues) — remplacer par du concret : vrais chiffres, vraies captures d'écran, comparatifs sourcés
- [ ] Ajouter une vraie mise en avant iPad : section dédiée sur la homepage, mention systématique dans les CTA, envisager un article dédié ("EDGE IPTV sur iPad : multitâche, grand écran, EPG")
- [ ] Renforcer le CTA App Store sur chaque page (actuellement inégal selon les pages)
- [ ] Auditer et retirer toute affirmation non vérifiable ("#1", "leader") qui n'apporte rien au SEO et affaiblit la crédibilité

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

### Phase 3 — Extension linguistique (DE, AR, IT)
- [ ] Remplacer la structure de dossiers dupliqués par langue par un système de contenu centralisé (éviter de recréer le problème de Phase 0 dans 3 langues de plus)
- [ ] Attention particulière à l'arabe : RTL layout (`dir="rtl"`), police adaptée, mirroring des composants UI
- [ ] Prioriser la traduction des pages qui convertissent déjà (homepage, guide d'installation) avant le reste du blog

### Phase 4 — Skill de suivi SEO continu
Voir `~/.claude/skills/seo-monitor` (à créer). Protocole récurrent : réimport des exports Search Console, comparaison mois par mois, détection des pages en perte de CTR/position, validation des données structurées, priorisation des actions.

## Notes de suivi

- 2026-09-26 : plan initial créé, décisions langues/ampleur actées avec Jules. Première snapshot Search Console enregistrée dans `docs/seo/snapshots/2026-09-26.md` (baseline avant corrections Phase 0). Skill `seo-monitor` créé pour le suivi récurrent.
- 2026-09-26 : Phase 0 terminée. À surveiller sur la prochaine snapshot : (1) disparition de l'erreur « Données structurées Vidéos » dans Search Console, (2) désindexation progressive des ~70 URLs soft-404 et des doublons `.html`/`www`, (3) effet des hreflang réparés sur les positions es/pt. **Penser à redéployer** — les corrections ne sont pas encore en ligne au moment de cette note.
