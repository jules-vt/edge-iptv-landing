import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Tv, Wifi, Globe, Star, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FAQ } from '@/components/faq';

export default function HomePT() {
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
            <Link href="/pt/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <LanguageSwitcher currentLang="pt" />
            <Button asChild className="hidden sm:inline-flex rounded-full font-semibold shadow-lg shadow-primary/20">
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                <Download className="mr-2 h-4 w-4" />
                Baixar
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
              EDGE IPTV - Melhor <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Player IPTV para iOS</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>EDGE IPTV</strong> transforma seu iPhone e iPad em um poderoso centro de streaming. O player IPTV #1 com configuração rápida, visualização offline e uma interface linda projetada para o entretenimento moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all">
                <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar na App Store
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg h-14 px-8">
                <Link href="#features">
                  Saiba mais
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Sem Anúncios</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Atualizações Regulares</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-full flex justify-center perspective-1000">
             <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out rotate-y-12 hover:rotate-y-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Image 
                  src="/images/iphone-series-3d.png" 
                  alt="Interface do aplicativo EDGE IPTV mostrando canais de TV ao vivo, biblioteca de filmes e função Chromecast no iPhone 15 Pro" 
                  width={400} 
                  height={800}
                  priority
                  className="relative drop-shadow-2xl"
                />
             </div>
          </div>
        </div>
      </section>

      {/* O que é EDGE IPTV Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-center mb-8">O que é EDGE IPTV?</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong>EDGE IPTV</strong> é o player IPTV mais avançado projetado exclusivamente para dispositivos iOS, incluindo iPhone e iPad. Como o aplicativo de streaming IPTV líder em 2026, EDGE IPTV revoluciona a forma como você assiste televisão ao vivo, filmes e séries em seus dispositivos Apple.
              </p>
              <p>
                O que distingue <strong>EDGE IPTV</strong> de outros players IPTV é sua integração perfeita com os recursos do iOS, desempenho super rápido e interface amigável. Seja você um usuário iniciante de IPTV ou um streamer experiente, EDGE IPTV torna incrivelmente fácil acessar seu conteúdo favorito em apenas minutos.
              </p>
              <p>
                Com <strong>EDGE IPTV</strong>, você obtém recursos poderosos como suporte Chromecast com um toque, recursos de visualização offline e integração completa da API Xtream Codes. O aplicativo suporta todos os principais protocolos IPTV, incluindo playlists M3U, tornando EDGE IPTV a solução IPTV mais versátil para usuários iOS. Nosso sistema de buffering inteligente garante reprodução suave mesmo em conexões mais lentas, enquanto nossa interface moderna oferece uma experiência de navegação intuitiva.
              </p>
              <p>
                <strong>EDGE IPTV</strong> foi classificado como #1 em várias comparações independentes por sua estabilidade, conjunto de recursos e facilidade de uso. Junte-se a milhares de usuários satisfeitos que fizeram do EDGE IPTV seu player IPTV preferido para iPhone e iPad. Baixe EDGE IPTV hoje e experimente o futuro do streaming IPTV no iOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Por que escolher EDGE IPTV?</h2>
            <p className="text-lg text-muted-foreground">
              EDGE IPTV é projetado pensando em desempenho e experiência do usuário. Tudo o que você precisa para a sessão de streaming perfeita.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-blue-500" />}
              title="Configuração Rápida"
              description="Comece em segundos com nossa integração otimizada de códigos Xtream. Nenhuma configuração complexa necessária."
            />
            <FeatureCard 
              icon={<Tv className="w-10 h-10 text-purple-500" />}
              title="Suporte Chromecast"
              description="Transmita seus filmes e programas favoritos diretamente para sua tela grande com apenas um toque."
            />
            <FeatureCard 
              icon={<Wifi className="w-10 h-10 text-green-500" />}
              title="Visualização Offline"
              description="Baixe conteúdo no seu dispositivo e assista em qualquer lugar, a qualquer hora, mesmo sem conexão com a internet."
            />
            <FeatureCard 
              icon={<Globe className="w-10 h-10 text-indigo-500" />}
              title="Multilíngue"
              description="Interface totalmente localizada disponível em inglês, francês, espanhol e mais para uma experiência nativa."
            />
            <FeatureCard 
              icon={<Star className="w-10 h-10 text-yellow-500" />}
              title="Favoritos Inteligentes"
              description="Organize seu entretenimento. Gerencie e acesse facilmente seus canais e séries favoritas."
            />
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-red-500" />}
              title="Privacidade em Primeiro Lugar"
              description="Respeitamos seus dados. Apenas análises globais anônimas são coletadas. Todo o seu conteúdo e processamento são feitos localmente no seu dispositivo."
            />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="secondary" className="mb-4">Interface</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Projetado para a Simplicidade</h2>
            <p className="text-lg text-muted-foreground">
              Uma interface linda e intuitiva que coloca seu conteúdo em primeiro plano.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
             <ScreenshotCard 
               src="/images/language-selection.jpeg" 
               alt="Interface multilíngue EDGE IPTV mostrando a tela de seleção de idioma com opções francês, inglês, espanhol no iPhone" 
               title="Configuração Fácil"
             />
             <ScreenshotCard 
               src="/images/series-view.png" 
               alt="Biblioteca de séries EDGE IPTV mostrando programas de TV organizados com miniaturas e listas de episódios no iPad" 
               title="Conteúdo Organizado"
             />
             <ScreenshotCard 
               src="/images/movie-details.png" 
               alt="Página de detalhes de filme EDGE IPTV mostrando título, descrição, informações do elenco e botão Chromecast" 
               title="Detalhes Completos"
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Pronto para começar a transmitir?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Junte-se a milhares de usuários que melhoraram sua experiência de streaming. Baixe o EDGE IPTV hoje.
            </p>
            <Button asChild size="lg" className="rounded-full text-lg h-16 px-10 shadow-xl shadow-primary/25 hover:scale-105 transition-transform">
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                <Download className="mr-2 h-6 w-6" />
                Baixar Agora
              </Link>
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              Requer iOS 12.0 ou posterior. Compatível com iPhone e iPad.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ lang="pt" />

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
              <Link href="/pt/privacy-policy" className="hover:text-primary transition-colors">Política de Privacidade</Link>
              <Link href="/pt/terms-of-use" className="hover:text-primary transition-colors">Termos de Uso</Link>
              <Link href="/pt/como-instalar-iptv-iphone-ipad" className="hover:text-primary transition-colors">Como Instalar</Link>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EDGE IPTV. Todos os direitos reservados.</p>
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
