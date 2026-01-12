import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Cómo Instalar IPTV en iPhone y iPad - Guía Paso a Paso 2026',
  description: 'Guía completa paso a paso para instalar y configurar EDGE IPTV en iPhone y iPad. Aprende a configurar códigos Xtream y comienza a transmitir en 30 segundos.',
  alternates: {
    canonical: 'https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad',
    languages: {
      'en': 'https://edge-iptv.app/how-to-install-iptv-iphone-ipad',
      'fr': 'https://edge-iptv.app/fr/comment-installer-iptv-iphone-ipad',
      'es': 'https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad',
      'pt': 'https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad',
    title: 'Cómo Instalar IPTV en iPhone y iPad - Guía Paso a Paso 2026',
    description: 'Guía completa paso a paso para instalar y configurar EDGE IPTV en iPhone y iPad. Comienza a transmitir en 30 segundos.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'es_ES',
  },
};

export default function HowToInstallES() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Instalar IPTV en iPhone y iPad en 2 Minutos",
    "description": "Guía completa paso a paso para instalar y configurar EDGE IPTV en iPhone y iPad con códigos Xtream. Configuración en menos de 2 minutos sin conocimientos técnicos.",
    "image": {
      "@type": "ImageObject",
      "url": "https://edge-iptv.app/images/iphone-series-3d.png",
      "width": "400",
      "height": "800"
    },
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0"
    },
    "tool": [{
      "@type": "HowToTool",
      "name": "iPhone o iPad con iOS 12.0 o posterior"
    }, {
      "@type": "HowToTool",
      "name": "Conexión a Internet"
    }],
    "supply": [{
      "@type": "HowToSupply",
      "name": "Suscripción IPTV con códigos API Xtream"
    }],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Descargar EDGE IPTV desde App Store",
        "text": "Descarga el mejor reproductor IPTV desde App Store. EDGE IPTV está especialmente diseñado para iPhone y iPad con soporte Chromecast, visualización offline y configuración rápida de códigos Xtream. La aplicación es completamente gratuita.",
        "url": "https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad#step1",
        "image": {
          "@type": "ImageObject",
          "url": "https://edge-iptv.app/images/icon.png",
          "width": "512",
          "height": "512"
        }
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Iniciar la App y Seleccionar tu Idioma",
        "text": "Abre EDGE IPTV y selecciona tu idioma preferido desde la interfaz multilingüe. La app soporta español, inglés, francés, portugués y turco para una experiencia nativa.",
        "url": "https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad#step2",
        "image": {
          "@type": "ImageObject",
          "url": "https://edge-iptv.app/images/language-selection.jpeg",
          "width": "600",
          "height": "400"
        }
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Configurar tus Códigos Xtream",
        "text": "Toca 'Agregar Playlist' o el botón '+', selecciona la opción 'Códigos Xtream', e ingresa tus credenciales proporcionadas por tu proveedor IPTV: URL del servidor (ej: http://line.iptvdomain.com), Nombre de usuario, y Contraseña. Luego toca 'Conectar'. La app cargará automáticamente todos tus canales, películas y series.",
        "url": "https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad#step3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Comenzar a Ver tu Contenido Favorito",
        "text": "Navega por tus canales, películas y biblioteca de series. Usa la interfaz intuitiva para buscar, agregar a favoritos, y comenzar a transmitir inmediatamente. Transmite a Chromecast con un clic o descarga contenido para visualización offline.",
        "url": "https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad#step4",
        "image": {
          "@type": "ImageObject",
          "url": "https://edge-iptv.app/images/series-view.png",
          "width": "400",
          "height": "800"
        }
      }
    ],
    "video": {
      "@type": "VideoObject",
      "name": "Tutorial: Cómo Instalar IPTV en iPhone",
      "description": "Guía en video mostrando cómo instalar y configurar EDGE IPTV en iPhone y iPad",
      "thumbnailUrl": "https://edge-iptv.app/images/iphone-series-3d.png",
      "uploadDate": "2025-01-01"
    },
    "inLanguage": "es-ES"
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Instalar IPTV en iPhone en 2 Minutos – Guía Fácil",
    "description": "Guía completa paso a paso para instalar y configurar IPTV en iPhone y iPad. Compatible con códigos Xtream. Sin conocimientos técnicos necesarios.",
    "image": {
      "@type": "ImageObject",
      "url": "https://edge-iptv.app/images/iphone-series-3d.png",
      "width": 400,
      "height": 800
    },
    "author": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "url": "https://edge-iptv.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://edge-iptv.app/images/icon.png",
        "width": 512,
        "height": 512
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2026-01-12",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad"
    },
    "keywords": "IPTV, iPhone, iPad, instalar, tutorial, códigos Xtream, guía, streaming",
    "articleSection": "Tutorial",
    "wordCount": 800,
    "inLanguage": "es-ES"
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/es" className="flex items-center gap-3">
            <Image src="/images/icon.png" alt="Logo EDGE IPTV" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/how-to-install-iptv-iphone-ipad" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              EN
            </Link>
            <Link 
              href="https://j-analytics.cloud/q/Z0m1Qmdtf" 
              className="hidden sm:inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all"
            >
              <Download size={16} />
              Descargar
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumb 
            items={[{ label: 'Inicio', href: '/es' }]} 
            currentPage="Cómo Instalar IPTV en iPhone y iPad"
            lang="es"
          />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Cómo Instalar IPTV en iPhone y iPad: Guía Completa 2026
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aprende a configurar streaming IPTV en tus dispositivos iOS en solo minutos. Esta guía completa te acompañará en todo el proceso usando el mejor reproductor IPTV disponible.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <h4 className="text-blue-800 font-bold mb-4 text-lg">Lo que necesitarás:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> iPhone o iPad con iOS 12.0 o más reciente
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> Suscripción IPTV con códigos Xtream
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> Conexión a internet estable
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> Aplicación EDGE IPTV (recomendada para la mejor experiencia)
              </li>
            </ul>
          </div>

          <div className="space-y-12">
            <div id="step1" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Descarga el Mejor Reproductor IPTV para iOS</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                El primer paso es descargar un reproductor IPTV confiable. Recomendamos encarecidamente <strong>EDGE IPTV</strong> ya que está especialmente diseñado para iPhone y iPad, ofreciendo la experiencia de streaming más fluida con funciones avanzadas.
              </p>
              
              <div className="mb-6">
                <strong className="block mb-2 text-gray-800">¿Por qué elegir EDGE IPTV?</strong>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Configuración Xtream rápida en segundos</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Soporte Chromecast para ver en pantalla grande</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Descarga offline para ver sin internet</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Interfaz multilingüe (Inglés, Francés, Español, Portugués, Turco)</li>
                </ul>
              </div>
              
              <Link 
                href="https://j-analytics.cloud/q/Z0m1Qmdtf" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <Download size={20} />
                Descargar EDGE IPTV en App Store
              </Link>
            </div>

            <div id="step2" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Inicia la Aplicación y Selecciona el Idioma</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Una vez instalada, abre EDGE IPTV. Serás recibido por una interfaz hermosa donde podrás seleccionar tu idioma preferido. La aplicación soporta múltiples idiomas para que te sientas como en casa.
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image 
                  src="/images/language-selection.jpeg" 
                  alt="Selección de idioma EDGE IPTV" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div id="step3" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Configura los Códigos Xtream</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                EDGE IPTV hace que la conexión vía códigos Xtream sea increíblemente fácil. No necesitas gestionar complejas playlists M3U.
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6 ml-2">
                <li>Toca el botón <strong>"Agregar Playlist"</strong> o <strong>"+"</strong>.</li>
                <li>Selecciona la opción <strong>"Códigos Xtream"</strong>.</li>
                <li>Ingresa los detalles proporcionados por tu proveedor IPTV:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-500">
                    <li><strong>URL del Servidor:</strong> (ej: http://line.iptvdomain.com)</li>
                    <li><strong>Nombre de usuario:</strong> Tu nombre de usuario</li>
                    <li><strong>Contraseña:</strong> Tu contraseña</li>
                  </ul>
                </li>
                <li>Toca <strong>"Conectar"</strong> o <strong>"Login"</strong>.</li>
              </ol>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                <strong>Nota:</strong> Asegúrate de ingresar los detalles exactamente como se proporcionan, prestando atención a mayúsculas y minúsculas.
              </div>
            </div>

            <div id="step4" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">4</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">¡Disfruta de tu Contenido!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ¡Eso es todo! EDGE IPTV cargará tus canales, películas y series. Ahora puedes navegar por las categorías, buscar tu contenido favorito y comenzar a transmitir inmediatamente.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image 
                    src="/images/series-view.png" 
                    alt="Vista de series" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image 
                    src="/images/movie-details.png" 
                    alt="Detalles de película" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <Link 
              href="/es" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              <ArrowLeft size={20} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image src="/images/icon.png" alt="Logo EDGE IPTV" width={40} height={40} className="rounded-lg opacity-80" />
              <span className="text-xl font-bold text-white">EDGE IPTV</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/es/privacy-policy" className="hover:text-white transition-colors">Política de Privacidad</Link>
              <Link href="/es/terms-of-use" className="hover:text-white transition-colors">Términos de Uso</Link>
              <Link href="/es/como-instalar-iptv-iphone-ipad" className="text-white font-medium">Cómo Instalar</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} EDGE IPTV. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
