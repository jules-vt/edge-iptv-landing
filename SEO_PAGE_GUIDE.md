# 📖 Guide SEO : Ajouter une nouvelle page au site EDGE IPTV

## 🎯 Structure multilingue actuelle

Le site utilise cette structure :

- **Anglais (défaut)** : `https://edge-iptv.app/`
- **Français** : `https://edge-iptv.app/fr/`

## ✅ Checklist pour ajouter une nouvelle page

### 1. **Créer les versions linguistiques**

#### Version anglaise (racine)

```html
<!DOCTYPE html>
<html lang="en" data-lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title - EDGE IPTV</title>
    <meta name="description" content="English description for SEO" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://edge-iptv.app/page-name.html" />

    <!-- Hreflang links -->
    <link
      rel="alternate"
      hreflang="en"
      href="https://edge-iptv.app/page-name.html"
    />
    <link
      rel="alternate"
      hreflang="fr"
      href="https://edge-iptv.app/fr/page-name.html"
    />

    <!-- Autres meta tags... -->
  </head>
</html>
```

#### Version française (/fr/)

```html
<!DOCTYPE html>
<html lang="fr" data-lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Titre de la Page - EDGE IPTV</title>
    <meta name="description" content="Description française pour le SEO" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://edge-iptv.app/fr/page-name.html" />

    <!-- Hreflang links -->
    <link
      rel="alternate"
      hreflang="en"
      href="https://edge-iptv.app/page-name.html"
    />
    <link
      rel="alternate"
      hreflang="fr"
      href="https://edge-iptv.app/fr/page-name.html"
    />

    <!-- Chemins relatifs pour les ressources -->
    <link rel="icon" type="image/png" href="../images/icon.png" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
</html>
```

### 2. **Mettre à jour le sitemap.xml**

Ajouter les nouvelles URLs dans `/sitemap.xml` :

```xml
<!-- Nouvelle page anglaise -->
<url>
    <loc>https://edge-iptv.app/page-name.html</loc>
    <lastmod>2025-08-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://edge-iptv.app/page-name.html"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://edge-iptv.app/fr/page-name.html"/>
</url>

<!-- Nouvelle page française -->
<url>
    <loc>https://edge-iptv.app/fr/page-name.html</loc>
    <lastmod>2025-08-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://edge-iptv.app/page-name.html"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://edge-iptv.app/fr/page-name.html"/>
</url>
```

### 3. **Structure des fichiers**

```
/
├── page-name.html              (Version anglaise)
├── sitemap.xml                 (Mis à jour)
└── fr/
    └── page-name.html          (Version française)
```

### 4. **Éléments SEO obligatoires**

#### Meta tags essentiels

- ✅ `lang` attribute correct (`en` ou `fr`)
- ✅ `title` unique et descriptif
- ✅ `meta description` optimisée (150-160 caractères)
- ✅ `meta robots` avec `index, follow`
- ✅ `link rel="canonical"` pointant vers l'URL correcte

#### Balises hreflang

- ✅ Toujours inclure les deux langues
- ✅ URLs absolues uniquement
- ✅ Cohérence entre les pages liées

#### Chemins de ressources

- ✅ **Anglais** : chemins relatifs (`images/`, `styles.css`)
- ✅ **Français** : chemins relatifs avec `../` (`../images/`, `../styles.css`)

### 5. **Navigation et liens internes**

Mettre à jour les menus de navigation dans :

- `index.html` (anglais)
- `fr/index.html` (français)
- Footer des pages existantes

```html
<!-- Exemple de lien dans le footer -->
<a href="page-name.html" data-fr="Nom de la Page" data-en="Page Name"
  >Page Name</a
>
```

### 6. **Après publication**

#### Google Search Console

1. **Soumettre le sitemap mis à jour**

   - Aller dans Sitemaps
   - Resoummettre `https://edge-iptv.app/sitemap.xml`

2. **Demander l'indexation**

   - Inspection d'URL pour chaque nouvelle page
   - Cliquer sur "Demander une indexation"

3. **Vérifier les hreflang**
   - Expérience → Internationalisation
   - S'assurer qu'il n'y a pas d'erreurs

#### Validation technique

- ✅ Tester les liens hreflang avec Google Rich Results Test
- ✅ Vérifier la vitesse de page avec PageSpeed Insights
- ✅ Valider le HTML avec W3C Validator

## 🚨 Erreurs communes à éviter

### ❌ Erreurs critiques

- Oublier les balises hreflang
- URLs canoniques incorrectes
- Chemins de ressources cassés en français
- Ne pas mettre à jour le sitemap
- Meta descriptions identiques entre langues

### ❌ Erreurs de structure

- Mélanger les langues dans les URLs
- Utiliser des URLs relatives dans hreflang
- Oublier le `x-default` pour les pages principales

## 📋 Template de validation

Avant de publier, vérifier :

```
□ Page anglaise créée avec bon `lang="en"`
□ Page française créée dans /fr/ avec `lang="fr"`
□ Balises hreflang présentes sur les deux pages
□ URLs canoniques correctes
□ Sitemap.xml mis à jour
□ Liens de navigation mis à jour
□ Chemins de ressources corrects (../ pour français)
□ Meta descriptions uniques et traduites
□ Test des liens sur les deux versions
```

## 🔗 URLs de référence

- **Site principal** : https://edge-iptv.app/
- **Version française** : https://edge-iptv.app/fr/
- **Sitemap** : https://edge-iptv.app/sitemap.xml
- **Google Search Console** : [Lien vers votre propriété GSC]

---

> **Note** : Toujours tester en local avant de publier et vérifier que les balises hreflang sont cohérentes entre toutes les pages du site.
