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
- [ ] Ré-écrire tous les textes qui "sonnent IA" (tirets cadratins, formulations génériques, superlatifs vagues) — remplacer par du concret : vrais chiffres, vraies captures d'écran, comparatifs sourcés
- [ ] Ajouter une vraie mise en avant iPad : section dédiée sur la homepage, mention systématique dans les CTA, envisager un article dédié ("EDGE IPTV sur iPad : multitâche, grand écran, EPG")
- [ ] Renforcer le CTA App Store sur chaque page (actuellement inégal selon les pages)
- [ ] Auditer et retirer toute affirmation non vérifiable ("#1", "leader") qui n'apporte rien au SEO et affaiblit la crédibilité

### Phase 2 — Refonte design (homepage + blog)
- [ ] Nouvelle direction visuelle homepage, cohérente avec l'identité app (voir icône/captures déjà produites avec les skills `appicon`/`appstore-screenshots`)
- [ ] Refonte de `article-layout.tsx`, `blog-card.tsx`, `blog-header.tsx` — le blog est actuellement signalé "moche et mal construit"
- [ ] Refonte de la page listing `/blog` (0 clic malgré indexation) : catégories, mise en avant des articles qui convertissent, pas juste une liste chronologique

### Phase 3 — Extension linguistique (DE, AR, IT)
- [ ] Remplacer la structure de dossiers dupliqués par langue par un système de contenu centralisé (éviter de recréer le problème de Phase 0 dans 3 langues de plus)
- [ ] Attention particulière à l'arabe : RTL layout (`dir="rtl"`), police adaptée, mirroring des composants UI
- [ ] Prioriser la traduction des pages qui convertissent déjà (homepage, guide d'installation) avant le reste du blog

### Phase 4 — Skill de suivi SEO continu
Voir `~/.claude/skills/seo-monitor` (à créer). Protocole récurrent : réimport des exports Search Console, comparaison mois par mois, détection des pages en perte de CTR/position, validation des données structurées, priorisation des actions.

## Notes de suivi

- 2026-09-26 : plan initial créé, décisions langues/ampleur actées avec Jules. Première snapshot Search Console enregistrée dans `docs/seo/snapshots/2026-09-26.md` (baseline avant corrections Phase 0). Skill `seo-monitor` créé pour le suivi récurrent.
- 2026-09-26 : Phase 0 terminée. À surveiller sur la prochaine snapshot : (1) disparition de l'erreur « Données structurées Vidéos » dans Search Console, (2) désindexation progressive des ~70 URLs soft-404 et des doublons `.html`/`www`, (3) effet des hreflang réparés sur les positions es/pt. **Penser à redéployer** — les corrections ne sont pas encore en ligne au moment de cette note.
