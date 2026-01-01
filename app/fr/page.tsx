import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Tv, Wifi, Globe, Star, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomeFR() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm">
              <Image src="/images/icon.png" alt="Logo EDGE IPTV" fill className="object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              EN
            </Link>
            <Button asChild className="hidden sm:inline-flex rounded-full font-semibold shadow-lg shadow-primary/20">
              <Link href="https://apps.apple.com/ca/app/edge-iptv/id6745966143">
                <Download className="mr-2 h-4 w-4" />
                Télécharger
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              L'Expérience IPTV <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ultime</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transformez votre iPhone et iPad en un puissant centre de streaming. Configuration rapide, visionnage hors ligne et une interface magnifique conçue pour le divertissement moderne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all">
                <Link href="https://apps.apple.com/ca/app/edge-iptv/id6745966143">
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger sur l'App Store
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg h-14 px-8">
                <Link href="#features">
                  En savoir plus
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Sans Pubs</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Sécurisé</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Mises à jour régulières</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-full flex justify-center perspective-1000">
             <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out rotate-y-12 hover:rotate-y-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Image 
                  src="/images/iphone-series-3d.png" 
                  alt="Interface de l'application EDGE IPTV" 
                  width={400} 
                  height={800}
                  priority
                  className="relative drop-shadow-2xl"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Pourquoi choisir EDGE IPTV ?</h2>
            <p className="text-lg text-muted-foreground">
              Conçu avec la performance et l'expérience utilisateur à l'esprit. Tout ce dont vous avez besoin pour la session de streaming parfaite.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-blue-500" />}
              title="Configuration Éclair"
              description="Commencez en quelques secondes grâce à notre intégration optimisée des codes Xtream. Aucune configuration complexe nécessaire."
            />
            <FeatureCard 
              icon={<Tv className="w-10 h-10 text-purple-500" />}
              title="Support Chromecast"
              description="Diffusez vos films et émissions préférés directement sur votre grand écran d'une simple pression."
            />
            <FeatureCard 
              icon={<Wifi className="w-10 h-10 text-green-500" />}
              title="Visionnage Hors Ligne"
              description="Téléchargez du contenu sur votre appareil et regardez-le n'importe où, n'importe quand, même sans connexion internet."
            />
            <FeatureCard 
              icon={<Globe className="w-10 h-10 text-indigo-500" />}
              title="Prêt pour le Multilingue"
              description="Interface entièrement localisée disponible en anglais, français, espagnol et plus pour une expérience native."
            />
            <FeatureCard 
              icon={<Star className="w-10 h-10 text-yellow-500" />}
              title="Favoris Intelligents"
              description="Organisez votre divertissement. Gérez et accédez facilement à vos chaînes et séries préférées."
            />
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-red-500" />}
              title="Confidentialité d'Abord"
              description="Nous respectons vos données. Seules des analyses globales anonymes sont collectées. Tout votre contenu et le traitement se font localement sur votre appareil."
            />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="secondary" className="mb-4">Interface</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Conçu pour la Simplicité</h2>
            <p className="text-lg text-muted-foreground">
              Une interface magnifique et intuitive qui met votre contenu au premier plan.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
             <ScreenshotCard 
               src="/images/language-selection.jpeg" 
               alt="Sélection de la langue" 
               title="Configuration Facile"
             />
             <ScreenshotCard 
               src="/images/series-view.png" 
               alt="Vue des séries" 
               title="Contenu Organisé"
             />
             <ScreenshotCard 
               src="/images/movie-details.png" 
               alt="Détails du film" 
               title="Détails Riches"
             />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Prêt à commencer le streaming ?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui ont amélioré leur expérience de streaming. Téléchargez EDGE IPTV aujourd'hui.
            </p>
            <Button asChild size="lg" className="rounded-full text-lg h-16 px-10 shadow-xl shadow-primary/25 hover:scale-105 transition-transform">
              <Link href="https://apps.apple.com/ca/app/edge-iptv/id6745966143">
                <Download className="mr-2 h-6 w-6" />
                Télécharger Maintenant
              </Link>
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              Nécessite iOS 12.0 ou version ultérieure. Compatible avec iPhone et iPad.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-lg grayscale opacity-80">
                <Image src="/images/icon.png" alt="Logo EDGE IPTV" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold text-foreground/80">EDGE IPTV</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
              <Link href="/fr/privacy-policy" className="hover:text-primary transition-colors">Politique de Confidentialité</Link>
              <Link href="/fr/terms-of-use" className="hover:text-primary transition-colors">Conditions d'Utilisation</Link>
              <Link href="/fr/comment-installer-iptv-iphone-ipad" className="hover:text-primary transition-colors">Comment Installer</Link>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EDGE IPTV. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-border/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 w-fit">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function ScreenshotCard({ src, alt, title }: { src: string, alt: string, title: string }) {
  return (
    <div className="group text-center space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-muted bg-muted transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl">
        <Image 
          src={src} 
          alt={alt} 
          width={300} 
          height={600} 
          className="w-full h-auto"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
    </div>
  );
}
