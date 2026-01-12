import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Tv, Wifi, Globe, Star, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FAQ } from '@/components/faq';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm">
              <Image src="/images/icon.png" alt="EDGE IPTV Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/fr" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              FR
            </Link>
            <Button asChild className="hidden sm:inline-flex rounded-full font-semibold shadow-lg shadow-primary/20">
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                <Download className="mr-2 h-4 w-4" />
                Download
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
              Best IPTV Player <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">for iPhone & iPad</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your iPhone & iPad into a powerful streaming hub. Fast setup, offline viewing, and a stunning interface designed for modern entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all">
                <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                  <Download className="mr-2 h-5 w-5" />
                  Download on App Store
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg h-14 px-8">
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>No Ads</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Regular Updates</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-full flex justify-center perspective-1000">
             <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out rotate-y-12 hover:rotate-y-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Image 
                  src="/images/iphone-series-3d.png" 
                  alt="EDGE IPTV app interface displaying live TV channels, movies library and Chromecast casting feature on iPhone 15 Pro" 
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
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Why Choose EDGE IPTV?</h2>
            <p className="text-lg text-muted-foreground">
              Built with performance and user experience in mind. Everything you need for the perfect streaming session.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-blue-500" />}
              title="Lightning Fast Setup"
              description="Get started in seconds with our optimized Xtream codes integration. No complex configurations needed."
            />
            <FeatureCard 
              icon={<Tv className="w-10 h-10 text-purple-500" />}
              title="Chromecast Support"
              description="Cast your favorite movies and shows directly to your big screen TV with a single tap."
            />
            <FeatureCard 
              icon={<Wifi className="w-10 h-10 text-green-500" />}
              title="Offline Viewing"
              description="Download content to your device and watch anywhere, anytime, even without an internet connection."
            />
            <FeatureCard 
              icon={<Globe className="w-10 h-10 text-indigo-500" />}
              title="Multilingual Ready"
              description="Fully localized interface available in English, French, Spanish, and more for a native experience."
            />
            <FeatureCard 
              icon={<Star className="w-10 h-10 text-yellow-500" />}
              title="Smart Favorites"
              description="Organize your entertainment. Easily manage and access your favorite channels and series."
            />
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-red-500" />}
              title="Privacy First"
              description="We respect your data. Only anonymous global analytics are collected to improve the app. All your content and processing happen locally on your device."
            />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="secondary" className="mb-4">Interface</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Designed for Simplicity</h2>
            <p className="text-lg text-muted-foreground">
              A beautiful, intuitive interface that puts your content front and center.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
             <ScreenshotCard 
               src="/images/language-selection.jpeg" 
               alt="EDGE IPTV multilingual interface showing language selection screen with English, French, Spanish options on iPhone" 
               title="Easy Language Setup"
             />
             <ScreenshotCard 
               src="/images/series-view.png" 
               alt="EDGE IPTV series library view displaying organized TV shows with thumbnails and episode lists on iPad" 
               title="Organized Content"
             />
             <ScreenshotCard 
               src="/images/movie-details.png" 
               alt="EDGE IPTV movie details page showing title, description, cast information and Chromecast button" 
               title="Rich Details"
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to start streaming?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of users who have upgraded their streaming experience. Download EDGE IPTV today.
            </p>
            <Button asChild size="lg" className="rounded-full text-lg h-16 px-10 shadow-xl shadow-primary/25 hover:scale-105 transition-transform">
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                <Download className="mr-2 h-6 w-6" />
                Download Now
              </Link>
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              Requires iOS 12.0 or later. Compatible with iPhone and iPad.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ lang="en" />

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-lg grayscale opacity-80">
                <Image src="/images/icon.png" alt="EDGE IPTV Logo" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold text-foreground/80">EDGE IPTV</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link>
              <Link href="/how-to-install-iptv-iphone-ipad" className="hover:text-primary transition-colors">How to Install</Link>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EDGE IPTV. All rights reserved.</p>
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
