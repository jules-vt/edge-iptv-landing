# Backlog SEO — edge-iptv.app

Liste vivante des améliorations SEO, relue et mise à jour chaque lundi par la
tâche planifiée `seo-hebdo-edge-iptv` (qui en applique 2 ou 3 par semaine).
Jules peut l'éditer à la main : ajouter, retirer, changer une priorité.

Objectif final : plus de visites vers la fiche App Store
(`apps.apple.com/ca/app/edge-iptv-m3u-xtream/id6812893793`), pas plus
d'impressions. Marchés prioritaires : Pays-Bas, Allemagne, Royaume-Uni,
France, Canada, États-Unis.

**Légende**
- `[auto]` : la tâche du lundi peut le faire seule (code et contenu du repo).
- `[jules]` : demande Jules (serveur nginx, Search Console, comptes externes,
  liens entrants, décision produit). La tâche le rappelle, elle ne le fait pas.
- Priorité : **P1** (cette semaine ou la suivante), **P2** (ce mois-ci), **P3** (un jour).

Quand un point est fait : le déplacer dans « Fait », avec la date, le commit,
et **ce qu'il faudra mesurer** pour savoir si ça a marché (requête, page, métrique).

---

## À faire

### P1
- [ ] `[auto]` **Notes inventées dans `/blog/xtream-codes-setup-guide`** (l'article anglais qui rapporte le plus de clics : 28 clics, position 8) : « GSE Smart IPTV ★ 4.5 · Paid app ($4.99) », « IPTV Smarters Pro ★ 4.3 ». Faux : GSE SMART IPTV PRO coûte 2,99 $ (fiche US du 26/10). Même traitement que le comparatif iPhone (`0e0297f`) : faits de la fiche App Store, datés, sans note. Vérifier aussi les versions traduites de ce guide.
- [ ] `[auto]` **« Gratuit Pour Toujours »** dans `/fr/blog/diffuser-iptv-chromecast-guide` (`app/fr/blog/diffuser-iptv-chromecast-guide/page.tsx:474`) : faux, et interdit sans l'essai de 7 jours. Chercher les équivalents dans les autres langues (`grep -rn "Forever\|Para Siempre\|Para Sempre"`).
- [ ] `[jules]` **Search Console : demander l'indexation** (les pages TiviMate/Smarters de/nl/es commencent à sortir au 24/10, mais `/m3u-player-iphone` n'a que 10 impressions) de `/m3u-player-iphone`, `/xtream-codes-player-iphone`, `/iptv-player-ipad`, `/m3u-checker`, `/de/m3u-player-iphone`, `/fr/lecteur-m3u-iphone`, `/tivimate-for-iphone`, `/iptv-smarters-alternative`, `/nl` ; renvoyer le sitemap. (Aucune des pages du 01/10 n'avait d'impression au 20/10.)

### P2
- [ ] `[auto]` **Page « alternative à APTV »** (`/aptv-alternative` + slugs traduits), gabarit TiviMate/Smarters. Export du 24/10 : 15 requêtes APTV, 43 impressions, position 7-9, 0 clic, surtout ES/PT (« como configurar aptv no iphone »). Faits uniquement depuis la fiche App Store d'APTV, datés.
- [ ] `[auto]` **Snippet de `/it/blog/migliore-app-iptv-iphone`** : 298 impressions en position 8,3 mais 0,67 % de CTR (export du 24/10), alors que les versions ES/PT/AR font 2,4 à 7,9 %. Comparer title/description à ceux qui convertissent ; les requêtes italiennes contiennent souvent « gratis ».
- [ ] `[auto]` **CTA de `/fr/blog/configurer-playlist-m3u-guide`** : 28 clics Search Console et 37 vues Umami en 28 jours, mais 1 seul `download_click`. Ajouter le CTA intégré (`article-inline`) qui convertit sur les articles anglais.
- [ ] `[auto]` **Page glossaire « What is an M3U playlist / playlist URL / M3U vs EPG »** (7 langues + nl). Requêtes déjà en position 7-10 mais 0 clic : « what is an m3u playlist », « what is a playlist url », « m3u vs epg ». Réponse courte en tête (format extrait), lien vers le vérificateur.
- [ ] `[auto]` **Guide « Where to find your Xtream Codes server URL »** : requêtes « xtream server url », « xtream iptv port number », « xtream url format » en position 1-11.
- [ ] `[auto]` **Page alternative IBO Player** (`/ibo-player-alternative`), même gabarit que TiviMate/Smarters (`lib/landing/`, champ `comparison`). Popularité App Store 49-61 sur UK/DE/NL. Faits uniquement depuis la fiche App Store, datés.
- [ ] `[auto]` **Page alternative GSE Smart IPTV**, puis **APTV** (« como configurar aptv iphone » apparaît en ES/PT, position 8-9).
- [ ] `[auto]` **Traduire les guides Xtream et M3U en allemand et néerlandais** : ce sont les seuls articles qui rapportent des clics en anglais (`xtream-codes-setup-guide` : 19 clics, position 8).
- [ ] `[auto]` **France (position 23 → 14,5 au 24/10)** : retravailler `/fr/blog/configurer-playlist-m3u-guide` (7 % de CTR mais position 24) et créer `/fr/blog/configurer-xtream-codes-iphone`.
- [ ] `[auto]` **Page « tv-gids / TV guide sur iPhone »** : « tv gids » a 61 de popularité sur l'App Store NL, « tv guide » au UK.
- [ ] `[auto]` **Capture iPhone du hero localisée** : la homepage montre une capture en anglais dans toutes les langues ; les captures existent en 11 langues dans `EDGE IPTV 2.0/screenshots/captures/<lang>/`.
- [ ] `[auto]` **Articles chromecast (119 impr.) et buffering** : position 11-15, ~0 clic. Rafraîchir title/meta et contenu (vrai parcours de l'app).
- [ ] `[jules]` **Liens entrants** (le levier hors code, toujours à zéro) : fiche AlternativeTo (face à TiviMate, Smarters, GSE), Product Hunt, une démo YouTube, réponses Reddit. Le vérificateur M3U est la page la plus citable.

### P3
- [ ] `[auto]` Traduire les 4 articles restants (chromecast, buffering, xtream, m3u) en de/ar/it/nl, une langue à la fois, en commençant par les marchés prioritaires (de, nl).
- [ ] `[auto]` `lastmod` des pages légales figé à 2025-01-01 dans le sitemap.
- [ ] `[auto]` Marque « edge iptv » bloquée en position ~7, « iptv edge » ~15, confusion avec « Edge TV » (Fire Stick, Québec) : renforcer l'entité (Organization + `sameAs`, page « À propos »), mais le vrai levier reste les liens entrants.
- [ ] `[jules]` Brancher l'API Search Console (compte de service Google) pour que la tâche du lundi ait les chiffres sans export manuel.

## Contrôles récurrents (chaque lundi, pas des tâches)
- Pages TiviMate et Smarters : les faits concurrents (prix, publicité, étiquettes de confidentialité, Apple TV, iOS minimum) sont-ils toujours vrais sur les fiches App Store US ? Sinon, corriger en priorité.
- Aucun `aggregateRating` / `Review` / `VideoObject` dans le code ni sur les pages en ligne.
- 301 `www` → apex, `.html` → URL propre, anciennes URL du `map` nginx (`docs/server/edge-iptv.app.nginx`).
- Umami enregistre bien le pays des sessions (réparé le 20/10).

## Fait
- 2026-10-26 · `0e0297f` · Comparatif « meilleure app IPTV pour iPhone » (8 langues) : notes, temps d'installation et « aucun concurrent n'a Chromecast » retirés (faux : GSE le liste), tableau prix / Chromecast / hors ligne / Apple TV tiré des fiches App Store US du 26/10, « #1 » → « notre choix », titles « testées » → « comparées ». **Mesurer** : CTR et position de `/blog/best-iptv-app-for-iphone` (1,26 %, pos 17,6) et de `/es`, `/it` (0,67 %), `/pt`, `/ar` ; `download_click` des emplacements `article-iphone-*`.
- 2026-10-26 · `5f591b3` · Métadonnées par défaut de `app/layout.tsx` (blog, légal, 404) : plus de « #1 », « Best… 2026 », « 4K », « Free download ». **Mesurer** : CTR de `/blog` et des pages légales (faible volume, surtout un contrôle de conformité).
- 2026-10-26 · `aabcbac` · `/blog/m3u-playlist-setup-guide` : title « What Is an M3U Playlist URL? Set It Up on iPhone (2026) », description et réponse courte en tête de section. **Mesurer** : CTR de la page (1,36 % sur 663 impr. au 24/10) et clics sur « what is a playlist url », « what is an m3u playlist » (position 8-9, 0 clic).
- 2026-10-20 · `5fef8a6` · Fusion de `best-iptv-player-ios-2026` (4 langues) dans `best-iptv-app-for-iphone`, 301 nginx, déploiement corrigé (`--delete-excluded`). **Mesurer** : impressions de `/blog/best-iptv-app-for-iphone` et de ses traductions.
- 2026-10-20 · `8d2b6d6` · Page « TiviMate for iPhone » (7 langues). **Mesurer** : impressions/clics sur `/tivimate-for-iphone` et les requêtes contenant « tivimate ».
- 2026-10-20 · `5f955f4` · Page « IPTV Smarters alternative » (7 langues). **Mesurer** : requêtes contenant « smarters ».
- 2026-10-20 · `c05a6b0` · Version néerlandaise (10 pages), titre FAQ corrigé en de/ar/it, hreflang des homepages dérivés de `LANGS`. **Mesurer** : impressions/clics depuis les Pays-Bas (3 clics / 58 impr. / pos 14,4 sur les 3 mois au 20/10).
- 2026-10-20 · Géolocalisation Umami réparée. **Mesurer** : `download_click` par pays dans Umami.

## Journal hebdomadaire
<!-- La tâche du lundi ajoute ici une entrée par semaine : date, données utilisées, ce qui a marché ou pas, changements faits (commits), rappels pour Jules. -->

### 2026-10-26
- **Données** : export Search Console du 26/10 déposé par Jules en cours de tâche (`~/Downloads/edge-iptv-2`, période 07-25 → 10-24, même durée que le précédent, décalée de 7 jours) → snapshot `docs/seo/snapshots/2026-10-26.md`. Umami 7/28 jours. Contrôles en ligne. Fiches App Store US relevées le 26/10.
- **Tendance** : semaine du 18 au 24/10 = 90 clics / 2625 impressions / position 8,5, contre 41 / 1130 / 10,0 la semaine d'avant. `download_click` Umami : 32 sur 7 jours contre 26 sur les 21 jours précédents. La France gagne 9 places (23,3 → 14,5).
- **Effet des changements du 20/10** :
  - Fusion `best-iptv-player-ios-2026` (`5fef8a6`) : stable. `/blog/best-iptv-app-for-iphone` 228 → 317 impr., position 18,1 → 17,6, CTR 1,3 % ; les 301 sont en place, l'ancienne URL garde 41 impr. le temps d'être absorbée.
  - TiviMate (`8d2b6d6`) : **amélioration**. 31 impr. et 2 clics sur 11 requêtes « tivimate », pages de/nl/es visibles en position 8-10, 1 `download_click` depuis `/de/tivimate-iphone`.
  - Smarters (`5f955f4`) : début. Aucune requête « smarters », mais les pages de/it/es ont 4-7 impr. et 1 clic (de).
  - Néerlandais (`c05a6b0`) : impressions en hausse (Pays-Bas 58 → 100, position 14,4 → 11,6), clics stables à 3, aucune session NL notable dans Umami.
  - Géolocalisation Umami : **réparée**, les sessions ont un pays depuis le 20/10.
- **Contrôle concurrents** : Smarters Player Lite (gratuit, « Contains Advertising », Premium 1,99 $, iOS 15.6, Apple TV, « Data Used to Track You: Usage Data ») et Smarters Pro (gratuit, Premium 4,99 $, iOS 15.6, Apple TV, même étiquette) inchangés. TiviMate : toujours aucune app officielle sur l'App Store US (seulement des imitations : « Tivimate - IPTV & M3U Player » d'Anna Mathew, « TiviMato Player Pro »). Pages TiviMate et Smarters justes.
- **Poussé** : `0e0297f` comparatif iPhone en 8 langues (la priorité : il contenait des affirmations fausses sur GSE et Opus, pas seulement invérifiables), `5f591b3` métadonnées par défaut, `aabcbac` title du guide M3U. Build OK, rendu vérifié en local (desktop, mobile 375 px en arabe, sans défilement horizontal).
- **Trouvé, à faire la semaine prochaine** : notes inventées dans le guide Xtream anglais et « Gratuit Pour Toujours » dans le guide Chromecast FR (P1).
- **Rappels pour Jules** : demander l'indexation des pages produit restantes dans Search Console ; liens entrants toujours à zéro (google.com est le seul référent).
