import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Tv,
  Wifi,
  Globe,
  Star,
  Zap,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FAQ } from "@/components/faq";

export default function HomeES() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/images/icon.png"
                alt="Logo EDGE IPTV"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/es/blog"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <LanguageSwitcher currentLang="es" />
            <Button
              asChild
              className="hidden sm:inline-flex rounded-full font-semibold shadow-lg shadow-primary/20"
            >
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                <Download className="mr-2 h-4 w-4" />
                Descargar
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
              EDGE IPTV - Mejor <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Reproductor IPTV para iOS
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>EDGE IPTV</strong> transforma tu iPhone y iPad en un
              potente centro de streaming. El reproductor IPTV #1 con
              configuración rápida, visualización sin conexión y una interfaz
              hermosa diseñada para el entretenimiento moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
              >
                <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar en App Store
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-lg h-14 px-8"
              >
                <Link href="#features">Saber más</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Sin Anuncios</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Actualizaciones Regulares</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-full flex justify-center perspective-1000">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out rotate-y-12 hover:rotate-y-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/iphone-series-3d.png"
                alt="Interfaz de la aplicación EDGE IPTV mostrando canales de TV en vivo, biblioteca de películas y función Chromecast en iPhone 15 Pro"
                width={400}
                height={800}
                priority
                className="relative drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es EDGE IPTV? Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-center mb-8">
              ¿Qué es EDGE IPTV?
            </h2>
            <div className="prose prose-lg dark:prose-invert mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong>EDGE IPTV</strong> es el reproductor IPTV más avanzado
                diseñado exclusivamente para dispositivos iOS, incluidos iPhone
                y iPad. Como la aplicación de streaming IPTV líder en 2026, EDGE
                IPTV revoluciona la forma en que ves televisión en vivo,
                películas y series en tus dispositivos Apple.
              </p>
              <p>
                Lo que distingue a <strong>EDGE IPTV</strong> de otros
                reproductores IPTV es su integración perfecta con las
                características de iOS, su rendimiento ultrarrápido y su
                interfaz fácil de usar. Ya seas un usuario de IPTV principiante
                o un streamer experimentado, EDGE IPTV hace increíblemente fácil
                acceder a tu contenido favorito en solo minutos.
              </p>
              <p>
                Con <strong>EDGE IPTV</strong>, obtienes funciones potentes como
                soporte Chromecast con un solo toque, capacidades de
                visualización sin conexión e integración completa de la API de
                Xtream Codes. La aplicación admite todos los principales
                protocolos IPTV, incluidas las listas de reproducción M3U, lo
                que hace de EDGE IPTV la solución IPTV más versátil para
                usuarios de iOS. Nuestro sistema de almacenamiento en búfer
                inteligente garantiza una reproducción fluida incluso en
                conexiones más lentas, mientras que nuestra interfaz moderna
                ofrece una experiencia de navegación intuitiva.
              </p>
              <p>
                <strong>EDGE IPTV</strong> ha sido calificado como #1 en
                múltiples comparaciones independientes por su estabilidad,
                conjunto de características y facilidad de uso. Únete a miles de
                usuarios satisfechos que han hecho de EDGE IPTV su reproductor
                IPTV preferido para iPhone e iPad. Descarga EDGE IPTV hoy y
                experimenta el futuro del streaming IPTV en iOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              ¿Por qué elegir EDGE IPTV?
            </h2>
            <p className="text-lg text-muted-foreground">
              EDGE IPTV está diseñado pensando en el rendimiento y la
              experiencia del usuario. Todo lo que necesitas para la sesión de
              streaming perfecta.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-blue-500" />}
              title="Configuración Rápida"
              description="Comienza en segundos con nuestra integración optimizada de códigos Xtream. No se necesita configuración compleja."
            />
            <FeatureCard
              icon={<Tv className="w-10 h-10 text-purple-500" />}
              title="Soporte Chromecast"
              description="Transmite tus películas y programas favoritos directamente a tu pantalla grande con solo presionar un botón."
            />
            <FeatureCard
              icon={<Wifi className="w-10 h-10 text-green-500" />}
              title="Visualización Sin Conexión"
              description="Descarga contenido en tu dispositivo y míralo en cualquier lugar, en cualquier momento, incluso sin conexión a internet."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10 text-indigo-500" />}
              title="Multilingüe"
              description="Interfaz completamente localizada disponible en inglés, francés, español y más para una experiencia nativa."
            />
            <FeatureCard
              icon={<Star className="w-10 h-10 text-yellow-500" />}
              title="Favoritos Inteligentes"
              description="Organiza tu entretenimiento. Gestiona y accede fácilmente a tus canales y series favoritas."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10 text-red-500" />}
              title="Privacidad Primero"
              description="Respetamos tus datos. Solo se recopilan análisis globales anónimos. Todo tu contenido y procesamiento se realiza localmente en tu dispositivo."
            />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="secondary" className="mb-4">
              Interfaz
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Diseñado para la Simplicidad
            </h2>
            <p className="text-lg text-muted-foreground">
              Una interfaz hermosa e intuitiva que pone tu contenido en primer
              plano.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <ScreenshotCard
              src="/images/language-selection.jpeg"
              alt="Interfaz multilingüe EDGE IPTV mostrando la pantalla de selección de idioma con opciones francés, inglés, español en iPhone"
              title="Configuración Fácil"
            />
            <ScreenshotCard
              src="/images/series-view.png"
              alt="Biblioteca de series EDGE IPTV mostrando programas de TV organizados con miniaturas y listas de episodios en iPad"
              title="Contenido Organizado"
            />
            <ScreenshotCard
              src="/images/movie-details.png"
              alt="Página de detalles de película EDGE IPTV mostrando título, descripción, información del reparto y botón Chromecast"
              title="Detalles Completos"
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              ¿Listo para comenzar a transmitir?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Únete a miles de usuarios que han mejorado su experiencia de
              streaming. Descarga EDGE IPTV hoy.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full text-lg h-16 px-10 shadow-xl shadow-primary/25 hover:scale-105 transition-transform"
            >
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                <Download className="mr-2 h-6 w-6" />
                Descargar Ahora
              </Link>
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              Requiere iOS 12.0 o posterior. Compatible con iPhone y iPad.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ lang="es" />

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-lg grayscale opacity-80">
                <Image
                  src="/images/icon.png"
                  alt="Logo EDGE IPTV"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold text-foreground/80">
                EDGE IPTV
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
              <Link
                href="/es/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/es/terms-of-use"
                className="hover:text-primary transition-colors"
              >
                Términos de Uso
              </Link>
              <Link
                href="/es/como-instalar-iptv-iphone-ipad"
                className="hover:text-primary transition-colors"
              >
                Cómo Instalar
              </Link>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} EDGE IPTV. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
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

function ScreenshotCard({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
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
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
    </div>
  );
}
