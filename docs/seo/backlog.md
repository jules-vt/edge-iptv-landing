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
- [ ] `[auto]` **Article « best IPTV app for iPhone » (8 langues) : retirer les affirmations non vérifiées sur les concurrents.** Notes inventées (★ 4.1 / 3.8 / 3.5 / 3.7, incohérentes d'un article à l'autre), « aucun concurrent ne gère Chromecast », « Smarters : pas de mode hors ligne ». Texte dans `lib/articles/best-iptv-app-iphone.ts`, rendu dans `components/articles/best-iptv-app-iphone.tsx` (colonne `rating` du tableau). Garder seulement ce qui se vérifie sur les fiches App Store, en datant le relevé.
- [ ] `[auto]` **Métadonnées par défaut de `app/layout.tsx`** : « #1 IPTV player », « Best IPTV App… 2026 », « Free download », « 4K ». Même famille d'affirmations que celles retirées en Phase 0/1 ; les remplacer par une description factuelle (essai 7 jours, puis abonnement).
- [ ] `[auto]` **CTR de `/blog/m3u-playlist-setup-guide`** : 492 impressions, 1,0 % de CTR, position 12 (export du 20/10). Réécrire title + meta description sur l'intention réelle (« how to set up an M3U playlist on iPhone »).
- [ ] `[jules]` **Search Console : demander l'indexation** de `/m3u-player-iphone`, `/xtream-codes-player-iphone`, `/iptv-player-ipad`, `/m3u-checker`, `/de/m3u-player-iphone`, `/fr/lecteur-m3u-iphone`, `/tivimate-for-iphone`, `/iptv-smarters-alternative`, `/nl` ; renvoyer le sitemap. (Aucune des pages du 01/10 n'avait d'impression au 20/10.)

### P2
- [ ] `[auto]` **Page glossaire « What is an M3U playlist / playlist URL / M3U vs EPG »** (7 langues + nl). Requêtes déjà en position 7-10 mais 0 clic : « what is an m3u playlist », « what is a playlist url », « m3u vs epg ». Réponse courte en tête (format extrait), lien vers le vérificateur.
- [ ] `[auto]` **Guide « Where to find your Xtream Codes server URL »** : requêtes « xtream server url », « xtream iptv port number », « xtream url format » en position 1-11.
- [ ] `[auto]` **Page alternative IBO Player** (`/ibo-player-alternative`), même gabarit que TiviMate/Smarters (`lib/landing/`, champ `comparison`). Popularité App Store 49-61 sur UK/DE/NL. Faits uniquement depuis la fiche App Store, datés.
- [ ] `[auto]` **Page alternative GSE Smart IPTV**, puis **APTV** (« como configurar aptv iphone » apparaît en ES/PT, position 8-9).
- [ ] `[auto]` **Traduire les guides Xtream et M3U en allemand et néerlandais** : ce sont les seuls articles qui rapportent des clics en anglais (`xtream-codes-setup-guide` : 19 clics, position 8).
- [ ] `[auto]` **France en position 23** : retravailler `/fr/blog/configurer-playlist-m3u-guide` (7 % de CTR mais position 24) et créer `/fr/blog/configurer-xtream-codes-iphone`.
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
- 2026-10-20 · `5fef8a6` · Fusion de `best-iptv-player-ios-2026` (4 langues) dans `best-iptv-app-for-iphone`, 301 nginx, déploiement corrigé (`--delete-excluded`). **Mesurer** : impressions de `/blog/best-iptv-app-for-iphone` et de ses traductions.
- 2026-10-20 · `8d2b6d6` · Page « TiviMate for iPhone » (7 langues). **Mesurer** : impressions/clics sur `/tivimate-for-iphone` et les requêtes contenant « tivimate ».
- 2026-10-20 · `5f955f4` · Page « IPTV Smarters alternative » (7 langues). **Mesurer** : requêtes contenant « smarters ».
- 2026-10-20 · `c05a6b0` · Version néerlandaise (10 pages), titre FAQ corrigé en de/ar/it, hreflang des homepages dérivés de `LANGS`. **Mesurer** : impressions/clics depuis les Pays-Bas (3 clics / 58 impr. / pos 14,4 sur les 3 mois au 20/10).
- 2026-10-20 · Géolocalisation Umami réparée. **Mesurer** : `download_click` par pays dans Umami.

## Journal hebdomadaire
<!-- La tâche du lundi ajoute ici une entrée par semaine : date, données utilisées, ce qui a marché ou pas, changements faits (commits), rappels pour Jules. -->
