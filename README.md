# EDGE IPTV Landing Page

Landing page for EDGE IPTV - Premium IPTV Player for iOS. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- 🌍 Multi-language support (English/French)
- 📱 Fully responsive design
- ⚡ Static site generation for optimal performance
- 🔍 SEO optimized with structured data (Schema.org)
- 📊 FAQ sections with rich snippets
- 🍞 Breadcrumb navigation
- 🎨 Modern UI with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: VPS with Nginx

## 📦 Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌐 Deployment

### Automatic Deployment (CI/CD)

The project uses GitHub Actions for automatic deployment to the VPS. On every push to `main`, the workflow:

1. Builds the Next.js static site
2. Deploys to VPS via rsync over SSH
3. Updates the live site at https://edge-iptv.app

### Required GitHub Secrets

Configure these secrets in your GitHub repository (Settings → Secrets and variables → Actions):

- `SSH_PRIVATE_KEY`: Private SSH key for VPS access
- `VPS_HOST`: VPS IP address (e.g., `72.60.172.173`)
- `VPS_USER`: SSH user (e.g., `root`)
- `VPS_PATH`: Deployment path (e.g., `/var/www/edge-iptv.app`)

### Manual Deployment

```bash
# Build the project
yarn build

# Deploy to VPS
cd out
rsync -avz --delete --progress \
  --exclude='.DS_Store' --exclude='*.txt' \
  -e ssh ./ root@YOUR_VPS_IP:/var/www/edge-iptv.app/
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── fr/                # French version pages
│   ├── layout.tsx         # Root layout (EN)
│   └── page.tsx           # Home page (EN)
├── components/            # React components
│   ├── breadcrumb.tsx    # Breadcrumb navigation
│   ├── faq.tsx           # FAQ component
│   ├── schema-org.tsx    # Structured data
│   └── ...
├── lib/                   # Utilities
├── public/               # Static assets
│   └── images/          # Images
├── .github/workflows/   # GitHub Actions
└── out/                 # Build output (static files)
```

## 🔧 Configuration

### Nginx Configuration

The site is served by **nginx**, not Apache: there is no `.htaccess` and any
added to the repo would be ignored. Redirects live in the vhost on the VPS,
`/etc/nginx/sites-available/edge-iptv.app`:

- `www.edge-iptv.app` → `edge-iptv.app` (301)
- `/page.html` → `/page` (301), and `/page` serves `page.html`
- Custom error pages (403 → 404), no directory listing

After changing it, check production with `curl -sI`, not the repo.

## 📝 License

Proprietary - All rights reserved
