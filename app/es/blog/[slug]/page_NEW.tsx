import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, Star, Check, X, AlertCircle, CheckCircle, Tv, Wifi, Cast, Activity, Settings, Zap, FileText } from 'lucide-react';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog-posts';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all Spanish blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'es');
  
  if (!post) {
    return {
      title: 'Artículo No Encontrado',
    };
  }

  return {
    title: `${post.title} - Blog EDGE IPTV`,
    description: post.description,
    alternates: {
      canonical: `https://edge-iptv.app/es/blog/${post.slug}`,
      languages: {
        'en': `https://edge-iptv.app/blog/${post.alternateSlug || post.slug}`,
        'fr': `https://edge-iptv.app/fr/blog/${post.alternateSlug || post.slug}`,
        'es': `https://edge-iptv.app/es/blog/${post.slug}`,
        'pt': `https://edge-iptv.app/pt/blog/${post.alternateSlug || post.slug}`,
      },
    },
    openGraph: {
      type: 'article',
      url: `https://edge-iptv.app/es/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      images: [`https://edge-iptv.app${post.image}`],
      publishedTime: post.date,
      locale: 'es_ES',
    },
  };
}

export default async function BlogPostPageES({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'es');

  if (!post) {
    notFound();
  }

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `https://edge-iptv.app${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "inLanguage": "es-ES",
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://edge-iptv.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://edge-iptv.app/images/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://edge-iptv.app/es/blog/${post.slug}`
    }
  };

  // Render content based on slug
  const renderContent = () => {
    switch (slug) {
      case 'mejor-reproductor-iptv-ios-2026':
        return <BestIPTVPlayerArticle />;
      case 'guia-streaming-iptv-chromecast':
        return <ChromecastIPTVGuide />;
      case 'solucionar-buffering-iptv-guia':
        return <IPTVBufferingFixGuide />;
      case 'configurar-lista-m3u-guia':
        return <M3UPlaylistGuide />;
      case 'configurar-codigos-xtream-guia':
        return <XtreamCodesGuide />;
      default:
        return (
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-center py-8">
              Contenido del artículo próximamente...
            </p>
          </div>
        );
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleLayout
        title={post.title}
        description={post.description}
        date={post.date}
        readTime={post.readTime}
        lang="es"
        breadcrumbItems={[
          { label: 'Inicio', href: '/es' },
          { label: 'Blog', href: '/es/blog' }
        ]}
      >
        {renderContent()}
      </ArticleLayout>
    </>
  );
}

// Article 1: Best IPTV Player for iOS 2026 - COMPLETE TRANSLATION
function BestIPTVPlayerArticle() {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead text-xl text-gray-600 mb-8">
        ¿Buscas el mejor reproductor IPTV para tu iPhone o iPad en 2026? Hemos probado las 7 mejores aplicaciones para ayudarte a elegir la solución de streaming perfecta. Ya sea que necesites soporte Chromecast, visualización sin conexión o la configuración más rápida de códigos Xtream, esta guía completa te tiene cubierto.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6">Nuestra Mejor Opción: EDGE IPTV 🏆</h2>
      
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border-2 border-blue-200">
        <div className="flex items-start gap-6">
          <Image 
            src="/images/icon.png" 
            alt="Icono EDGE IPTV" 
            width={100} 
            height={100}
            className="rounded-2xl shadow-lg"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold m-0">EDGE IPTV</h3>
              <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="font-bold">5.0</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              El reproductor IPTV más completo para iOS con configuración ultrarrápida de códigos Xtream, integración completa de Chromecast y capacidades de visualización sin conexión.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-green-700">
                <Check className="w-5 h-5" />
                <span>Configuración Xtream más rápida (2 min)</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <Check className="w-5 h-5" />
                <span>Soporte completo Chromecast</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <Check className="w-5 h-5" />
                <span>Descargas sin conexión</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <Check className="w-5 h-5" />
                <span>Interfaz en 5 idiomas</span>
              </div>
            </div>
            <DownloadButton location="article-best-player-top-es" size="md">
              Descargar EDGE IPTV Gratis
            </DownloadButton>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">Tabla Comparativa: Los 7 Mejores Reproductores IPTV</h2>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3 text-left">Nombre de la App</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Calificación</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Precio</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Chromecast</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Sin conexión</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Tiempo de config.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50">
              <td className="border border-gray-300 px-4 py-3 font-bold">EDGE IPTV</td>
              <td className="border border-gray-300 px-4 py-3 text-center">⭐ 5.0</td>
              <td className="border border-gray-300 px-4 py-3 text-center">Gratis</td>
              <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
              <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
              <td className="border border-gray-300 px-4 py-3 text-center">2 min</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">GSE Smart IPTV</td>
              <td className="border border-gray-300 px-4 py-3 text-center">⭐ 4.5</td>
              <td className="border border-gray-300 px-4 py-3 text-center">$4.99</td>
              <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
              <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
              <td className="border border-gray-300 px-4 py-3 text-center">5 min</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">IPTV Smarters Pro</td>
              <td className="border border-gray-300 px-4 py-3 text-center">⭐ 4.3</td>
              <td className="border border-gray-300 px-4 py-3 text-center">Gratis</td>
              <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
              <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
              <td className="border border-gray-300 px-4 py-3 text-center">4 min</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Ibo Player</td>
              <td className="border border-gray-300 px-4 py-3 text-center">⭐ 4.1</td>
              <td className="border border-gray-300 px-4 py-3 text-center">Gratis</td>
              <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
              <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
              <td className="border border-gray-300 px-4 py-3 text-center">5 min</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">VLC for Mobile</td>
              <td className="border border-gray-300 px-4 py-3 text-center">⭐ 4.7</td>
              <td className="border border-gray-300 px-4 py-3 text-center">Gratis</td>
              <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
              <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
              <td className="border border-gray-300 px-4 py-3 text-center">10 min</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">iPlayTV</td>
              <td className="border border-gray-300 px-4 py-3 text-center">⭐ 4.2</td>
              <td className="border border-gray-300 px-4 py-3 text-center">$3.99</td>
              <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
              <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
              <td className="border border-gray-300 px-4 py-3 text-center">6 min</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">IPTV Player Pro</td>
              <td className="border border-gray-300 px-4 py-3 text-center">⭐ 3.8</td>
              <td className="border border-gray-300 px-4 py-3 text-center">$2.99</td>
              <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
              <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
              <td className="border border-gray-300 px-4 py-3 text-center">7 min</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">Reseñas Detalladas</h2>

      <h3 className="text-2xl font-bold mt-8 mb-4">1. EDGE IPTV - La Mejor Opción en General ⭐ 5.0</h3>
      <p>
        <strong>EDGE IPTV</strong> ocupa el puesto n.º 1 para 2026 con su inigualable combinación de características, facilidad de uso y rendimiento. La aplicación establece un nuevo estándar para el streaming IPTV en dispositivos iOS.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Características Principales:</h4>
      <ul className="space-y-2">
        <li><strong>Configuración Ultrarrápida:</strong> Configura códigos Xtream en menos de 2 minutos con nuestra interfaz optimizada</li>
        <li><strong>Integración Completa con Chromecast:</strong> Transmite a cualquier TV con un solo toque: películas, series y canales en vivo</li>
        <li><strong>Descargas Sin Conexión:</strong> Guarda contenido para verlo sin conexión a internet</li>
        <li><strong>Interfaz Multilingüe:</strong> Disponible en inglés, francés, español, portugués y turco</li>
        <li><strong>Soporte EPG:</strong> Guía electrónica de programación completa con horarios de canales</li>
        <li><strong>Gestión de Favoritos:</strong> Organiza tus canales y contenido fácilmente</li>
      </ul>

      <h4 className="text-xl font-bold mt-6 mb-3">Ventajas:</h4>
      <ul className="list-none space-y-2">
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-1" /><span>Completamente gratis sin anuncios ni suscripciones</span></li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-1" /><span>Configuración de códigos Xtream más rápida del mercado</span></li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-1" /><span>Integración perfecta con Chromecast</span></li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-1" /><span>Interfaz limpia y moderna optimizada para iOS</span></li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-1" /><span>Actualizaciones regulares y excelente estabilidad</span></li>
      </ul>

      <h4 className="text-xl font-bold mt-6 mb-3">Desventajas:</h4>
      <ul className="list-none space-y-2">
        <li className="flex items-start gap-2"><X className="w-5 h-5 text-gray-400 mt-1" /><span>Requiere iOS 12.0 o posterior (no compatible con dispositivos antiguos)</span></li>
      </ul>

      <div className="bg-blue-50 rounded-xl p-6 my-6">
        <p className="font-bold text-lg mb-2">🏆 Mejor Para:</p>
        <p className="mb-0">Usuarios que desean la experiencia IPTV más completa y sin complicaciones con Chromecast y visualización sin conexión.</p>
      </div>

      <div className="text-center my-8">
        <DownloadButton location="article-best-player-detail-es" size="lg">
          Prueba EDGE IPTV Gratis
        </DownloadButton>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4">2. GSE Smart IPTV ⭐ 4.5</h3>
      <p>
        GSE Smart IPTV es una alternativa sólida con funciones avanzadas para usuarios expertos. Aunque cuesta $4.99, ofrece amplias opciones de personalización.
      </p>
      <p><strong>Ventajas:</strong> Controles de reproducción avanzados, controles parentales, soporte para múltiples playlists</p>
      <p><strong>Desventajas:</strong> No hay descargas sin conexión, interfaz compleja para principiantes, aplicación de pago</p>
      <p className="bg-gray-50 p-4 rounded-lg"><strong>Mejor Para:</strong> Usuarios avanzados que necesitan personalización extensa</p>

      <h3 className="text-2xl font-bold mt-12 mb-4">3. IPTV Smarters Pro ⭐ 4.3</h3>
      <p>
        IPTV Smarters Pro es una de las aplicaciones IPTV más populares, pero su interfaz anticuada y diseño desordenado la hacen sentir obsoleta en comparación con alternativas modernas como EDGE IPTV.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Problemas de Diseño e Interfaz:</h4>
      <ul className="space-y-2">
        <li><strong>Diseño Visual Anticuado:</strong> La interfaz parece de 2020 con colores planos básicos y sin elementos de diseño modernos de iOS</li>
        <li><strong>Navegación Desordenada:</strong> Demasiados menús y submenús hacen que encontrar contenido sea confuso</li>
        <li><strong>Tipografía Deficiente:</strong> Fuentes pequeñas y espaciado apretado reducen la legibilidad</li>
        <li><strong>UI Inconsistente:</strong> Diferentes secciones usan diferentes patrones de diseño</li>
        <li><strong>Sin Soporte de Modo Oscuro:</strong> Falta integración nativa del modo oscuro de iOS</li>
      </ul>

      <h4 className="text-xl font-bold mt-6 mb-3">Comparación con EDGE IPTV:</h4>
      <div className="bg-gray-50 rounded-xl p-6 my-4">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-3">Característica</th>
              <th className="text-center py-3">EDGE IPTV</th>
              <th className="text-center py-3">Smarters Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3">Diseño Moderno iOS</td>
              <td className="text-center py-3">✅</td>
              <td className="text-center py-3">❌</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3">Navegación Intuitiva</td>
              <td className="text-center py-3">✅</td>
              <td className="text-center py-3">❌</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3">Modo Oscuro</td>
              <td className="text-center py-3">✅</td>
              <td className="text-center py-3">❌</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3">Soporte Chromecast</td>
              <td className="text-center py-3">✅</td>
              <td className="text-center py-3">❌</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3">Tiempo de Configuración</td>
              <td className="text-center py-3">2 min</td>
              <td className="text-center py-3">4 min</td>
            </tr>
            <tr>
              <td className="py-3">Anuncios</td>
              <td className="text-center py-3">Ninguno</td>
              <td className="text-center py-3">Sí</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p><strong>Ventajas:</strong> Gratis, descargas sin conexión, gran base de usuarios, actualizaciones regulares</p>
      <p><strong>Desventajas:</strong> Diseño anticuado, interfaz desordenada, sin Chromecast, anuncios en versión gratuita, navegación compleja, sin modo oscuro</p>
      <p className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400"><strong>Veredicto:</strong> Aunque funcional, Smarters Pro se siente como una aplicación heredada. EDGE IPTV ofrece una experiencia mucho más pulida y moderna con mejores características.</p>

      <h3 className="text-2xl font-bold mt-12 mb-4">4. Ibo Player ⭐ 4.1</h3>
      <p>
        Ibo Player es otra opción popular, pero sufre de una interfaz confusa y malas elecciones de diseño que la hacen frustrante de usar diariamente.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Problemas de Diseño y Usabilidad:</h4>
      <ul className="space-y-2">
        <li><strong>Diseño Confuso:</strong> La pantalla principal está desordenada con demasiadas opciones e íconos poco claros</li>
        <li><strong>Esquema de Colores Deficiente:</strong> Usa colores agresivos que cansan la vista durante sesiones largas de visualización</li>
        <li><strong>Objetivos Táctiles Pequeños:</strong> Los botones son demasiado pequeños y están muy juntos, causando toques accidentales</li>
        <li><strong>Configuraciones Abrumadoras:</strong> El menú de configuración tiene docenas de opciones crípticas que confunden a principiantes</li>
        <li><strong>Elementos UI No Estándar:</strong> No sigue las directrices de diseño de iOS, se siente como una adaptación de Android</li>
        <li><strong>Carga Lenta:</strong> Las listas de canales tardan 5-10 segundos en cargar incluso con buena internet</li>
      </ul>

      <h3 className="text-2xl font-bold mt-12 mb-4">5. VLC for Mobile ⭐ 4.7</h3>
      <p>
        VLC es un reproductor multimedia versátil que puede manejar playlists IPTV, pero no está optimizado específicamente para streaming IPTV.
      </p>
      <p><strong>Ventajas:</strong> Gratis, reproduce casi cualquier formato, confiable</p>
      <p><strong>Desventajas:</strong> No enfocado en IPTV, sin Chromecast, configuración M3U compleja, sin EPG</p>
      <p className="bg-gray-50 p-4 rounded-lg"><strong>Mejor Para:</strong> Usuarios que ya usan VLC y quieren reproducción IPTV básica</p>

      <h3 className="text-2xl font-bold mt-12 mb-4">6. iPlayTV ⭐ 4.2</h3>
      <p>
        iPlayTV ofrece soporte para Chromecast pero cobra $3.99 y carece de capacidades de visualización sin conexión.
      </p>
      <p><strong>Ventajas:</strong> Soporte Chromecast, diseño limpio</p>
      <p><strong>Desventajas:</strong> De pago ($3.99), sin modo sin conexión, configuración más lenta</p>
      <p className="bg-gray-50 p-4 rounded-lg"><strong>Mejor Para:</strong> Usuarios dispuestos a pagar por una solución solo con Chromecast</p>

      <h2 className="text-3xl font-bold mt-12 mb-6">Conclusión: Por Qué EDGE IPTV Gana en 2026</h2>
      
      <p>
        Después de pruebas exhaustivas, <strong>EDGE IPTV</strong> es el claro ganador para usuarios iOS en 2026. He aquí por qué:
      </p>

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 my-8">
        <ul className="space-y-3 mb-0">
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
            <span><strong>Completamente Gratis:</strong> Todas las funciones desbloqueadas, sin anuncios, sin suscripciones</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
            <span><strong>Configuración Más Rápida:</strong> Configuración de códigos Xtream en 2 minutos</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
            <span><strong>Mejores Funciones:</strong> Chromecast + visualización sin conexión en una sola app</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
            <span><strong>Diseño Moderno:</strong> Interfaz hermosa y nativa de iOS</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
            <span><strong>Calificación Perfecta:</strong> 5/5 estrellas de más de 1000 usuarios</span>
          </li>
        </ul>
      </div>

      <p>
        Ya seas principiante o usuario experimentado de IPTV, EDGE IPTV ofrece el equilibrio perfecto entre simplicidad y funciones poderosas. Descárgala hoy y experimenta el mejor streaming IPTV en iOS.
      </p>

      <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-4">¿Listo para Comenzar a Transmitir?</h3>
        <p className="text-lg text-gray-600 mb-6">
          Únete a miles de usuarios que eligieron EDGE IPTV para la experiencia definitiva de streaming en iOS
        </p>
        <DownloadButton location="article-best-player-final-es" size="xl">
          Descargar EDGE IPTV Gratis
        </DownloadButton>
        <p className="text-sm text-gray-500 mt-4">
          ✓ Gratis para siempre ✓ Sin anuncios ✓ Todas las funciones ✓ Configuración en 2 minutos
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">Preguntas Frecuentes</h2>

      <h3 className="text-xl font-bold mt-6 mb-3">¿Cuál es el mejor reproductor IPTV gratuito para iPhone?</h3>
      <p>
        <strong>EDGE IPTV</strong> es el mejor reproductor IPTV gratuito para iPhone en 2026, ofreciendo soporte Chromecast, visualización sin conexión y la configuración más rápida de códigos Xtream, todo completamente gratis sin anuncios.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">¿Necesito pagar por aplicaciones de reproductor IPTV?</h3>
      <p>
        No, el mejor reproductor IPTV (EDGE IPTV) es completamente gratuito. Mientras que algunos competidores cobran $3-5, puedes obtener todas las funciones premium gratis con EDGE IPTV.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">¿Qué reproductor IPTV tiene soporte para Chromecast?</h3>
      <p>
        EDGE IPTV, GSE Smart IPTV e iPlayTV tienen soporte para Chromecast. Sin embargo, solo EDGE IPTV ofrece Chromecast + visualización sin conexión + gratis en un solo paquete.
      </p>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link 
          href="/es/blog" 
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={20} />
          Volver al Blog
        </Link>
      </div>
    </div>
  );
}

// Article 2: Chromecast Guide - COMPLETE TRANSLATION
function ChromecastIPTVGuide() {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead text-xl text-gray-600 mb-8">
        ¿Quieres ver tu contenido IPTV en la pantalla grande? EDGE IPTV hace que sea increíblemente fácil transmitir tus canales, películas y programas favoritos directamente a tu TV o dispositivo compatible con Chromecast. Esta guía completa te guiará por todo el proceso, desde la configuración inicial hasta la solución de problemas comunes.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6">Lo Que Necesitarás</h2>

      <div className="bg-blue-50 rounded-xl p-6 my-6">
        <h3 className="text-xl font-bold mb-4">Antes de Empezar:</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <span><strong>App EDGE IPTV</strong> - Instalada en tu iPhone o iPad</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <span><strong>Dispositivo Chromecast</strong> - Chromecast, Chromecast Ultra, o TV con Chromecast integrado</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <span><strong>Misma Red Wi-Fi</strong> - Tu iPhone/iPad y Chromecast deben estar en la misma red</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <span><strong>Suscripción IPTV Activa</strong> - Con canales/contenido configurado en EDGE IPTV</span>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">Cómo Transmitir IPTV a Chromecast</h2>

      <p className="text-lg mb-6">
        Transmitir desde EDGE IPTV es increíblemente simple. Todo el proceso toma menos de 30 segundos una vez que estés configurado. Esto es exactamente lo que debes hacer:
      </p>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 my-6 border-2 border-purple-200">
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-bold text-purple-700 mb-2">📱 Paso 1: Abre EDGE IPTV</p>
            <p className="text-gray-700">
              Inicia la aplicación EDGE IPTV en tu iPhone o iPad. Asegúrate de estar conectado a la misma red Wi-Fi que tu dispositivo Chromecast.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-bold text-purple-700 mb-2">🎬 Paso 2: Comienza a Reproducir Contenido</p>
            <p className="text-gray-700">
              Navega por tus canales, películas o series y <strong>toca lo que quieres ver</strong>. El contenido comenzará a reproducirse en tu iPhone/iPad primero. Esto es normal: lo transmitirás a tu TV en el siguiente paso.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-300">
            <p className="font-bold text-blue-700 mb-2 flex items-center gap-2">
              <Cast className="w-5 h-5" />
              Paso 3: Toca el Botón Chromecast
            </p>
            <p className="text-gray-700 mb-2">
              Mientras el contenido se está reproduciendo, busca el <strong>ícono de Chromecast en la esquina superior derecha del reproductor de video</strong>. Parece una pantalla de TV con ondas Wi-Fi en la esquina.
            </p>
            <div className="bg-blue-50 p-3 rounded mt-2">
              <p className="text-sm font-bold text-blue-800 mb-1">📍 Dónde Encontrarlo:</p>
              <p className="text-sm text-blue-700 mb-0">
                El botón de transmisión aparece en los controles del reproductor, en el área superior derecha. Si no lo ves inmediatamente, asegúrate de que tu Chromecast esté encendido y conectado a la misma red.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-yellow-300">
            <p className="font-bold text-yellow-700 mb-2">⚠️ Paso 4: Acepta Permisos (Solo la Primera Vez)</p>
            <p className="text-gray-700 mb-2">
              <strong>Si es tu primera vez transmitiendo</strong>, iOS mostrará una ventana emergente solicitando permiso para encontrar y conectarse a dispositivos en tu red local.
            </p>
            <div className="bg-yellow-50 p-3 rounded mt-2">
              <p className="text-sm font-bold text-yellow-800 mb-1">🔐 Importante:</p>
              <p className="text-sm text-yellow-700 mb-0">
                <strong>DEBES tocar "Permitir" o "OK"</strong> en esta ventana de permisos. Sin este permiso, EDGE IPTV no puede descubrir tus dispositivos Chromecast en la red. Si lo denegaste accidentalmente, deberás ir a Ajustes de iPhone → EDGE IPTV → Red Local y habilitarlo.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-bold text-purple-700 mb-2">📺 Paso 5: Elige Tu Dispositivo Chromecast</p>
            <p className="text-gray-700 mb-2">
              Después de tocar el botón de transmisión (y aceptar permisos si es necesario), aparecerá una lista de dispositivos Chromecast disponibles. Esto incluye:
            </p>
            <ul className="ml-6 space-y-1 text-gray-700">
              <li>• Tus adaptadores Chromecast</li>
              <li>• TVs con Chromecast integrado</li>
              <li>• Dispositivos Google TV</li>
            </ul>
            <p className="text-gray-700 mt-2">
              <strong>Toca el dispositivo</strong> donde quieres mostrar el contenido.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-bold text-purple-700 mb-2">⏳ Paso 6: Espera la Conexión</p>
            <p className="text-gray-700">
              Tu contenido comenzará a transmitirse al TV. Verás un indicador de <strong>"Transmitiendo..."</strong> o <strong>"Conectado"</strong> en tu iPhone/iPad. El video desaparecerá de tu teléfono y aparecerá en la pantalla de tu TV en 2-5 segundos.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-green-300">
            <p className="font-bold text-green-700 mb-2">🎉 Paso 7: Controla la Reproducción</p>
            <p className="text-gray-700">
              Tu iPhone/iPad ahora actúa como control remoto. Puedes:
            </p>
            <ul className="ml-6 space-y-1 text-gray-700 mt-2">
              <li>• Pausar y reanudar la reproducción</li>
              <li>• Ajustar volumen</li>
              <li>• Saltar adelante/atrás</li>
              <li>• Detener la transmisión y volver a reproducción en teléfono</li>
              <li>• Cambiar a un canal o video diferente</li>
            </ul>
            <p className="text-gray-700 mt-2">
              ¡El contenido se reproduce directamente desde internet a tu Chromecast, así que incluso puedes bloquear tu teléfono o usar otras apps sin interrumpir la reproducción!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-green-800 mb-1">¡Éxito!</p>
            <p className="text-green-700 mb-0">Ahora estás viendo IPTV en tu pantalla grande! Para detener la transmisión, toca el botón de transmisión nuevamente y selecciona "Desconectar" o "Detener transmisión".</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">Solución de Problemas: Chromecast No Aparece</h2>

      <p>
        Si no ves tu dispositivo Chromecast en la lista cuando tocas el botón de transmisión, prueba estas soluciones en orden:
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Solución 1: Verificar Misma Red</h3>
      <div className="bg-blue-50 rounded-xl p-6 my-4">
        <div className="flex items-start gap-3 mb-3">
          <Wifi className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <p className="font-bold text-blue-800">Verificar Conexión de Red</p>
        </div>
        <p className="mb-2"><strong>Tu iPhone/iPad:</strong></p>
        <ol className="ml-6 space-y-1">
          <li>1. Ve a Ajustes → Wi-Fi</li>
          <li>2. Anota el nombre de la red (ej., "Casa_WiFi")</li>
        </ol>
        <p className="mt-3 mb-2"><strong>Tu Chromecast:</strong></p>
        <ol className="ml-6 space-y-1">
          <li>1. Abre la app Google Home</li>
          <li>2. Toca tu dispositivo Chromecast</li>
          <li>3. Toca el ícono de ajustes</li>
          <li>4. Verifica la red Wi-Fi listada</li>
        </ol>
        <div className="bg-blue-100 p-3 rounded mt-3">
          <p className="text-sm font-bold text-blue-900 mb-1">⚠️ Importante:</p>
          <p className="text-sm text-blue-800 mb-0">
            Ambos dispositivos DEBEN estar en la misma red. Si tu router tiene redes 2.4GHz y 5GHz separadas con nombres diferentes, asegúrate de que ambos dispositivos estén en la misma.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Solución 2: Verificar Permiso de Red Local</h3>
      <div className="bg-orange-50 rounded-xl p-6 my-4">
        <p className="mb-2">Si denegaste el permiso de red local, EDGE IPTV no puede descubrir dispositivos Chromecast. Para solucionarlo:</p>
        <ol className="space-y-2">
          <li><strong>1.</strong> Ve a <strong>Ajustes de iPhone</strong></li>
          <li><strong>2.</strong> Desplázate y busca <strong>EDGE IPTV</strong></li>
          <li><strong>3.</strong> Tócalo para abrir ajustes específicos de la app</li>
          <li><strong>4.</strong> Busca <strong>"Red Local"</strong> y actívalo <strong>ON</strong> (verde)</li>
          <li><strong>5.</strong> Cierra Ajustes y reinicia EDGE IPTV</li>
        </ol>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Solución 3: Reiniciar Dispositivos</h3>
      <div className="bg-purple-50 rounded-xl p-6 my-4">
        <p className="mb-2">A veces un simple reinicio soluciona problemas de descubrimiento:</p>
        <ol className="space-y-2">
          <li><strong>1. Reiniciar Chromecast:</strong> Desconéctalo por 10 segundos, luego conecta de nuevo</li>
          <li><strong>2. Reiniciar Router:</strong> Apaga y enciende tu router Wi-Fi</li>
          <li><strong>3. Reiniciar iPhone/iPad:</strong> Apágalo completamente y enciéndelo de nuevo</li>
          <li><strong>4. Forzar Cierre de EDGE IPTV:</strong> Desliza hacia arriba desde inicio, desliza EDGE IPTV, luego ábrela de nuevo</li>
        </ol>
        <p className="mt-3 text-sm text-gray-600">Espera 30 segundos después de reiniciar el router antes de probar de nuevo.</p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">Preguntas Frecuentes</h2>

      <h3 className="text-xl font-bold mt-6 mb-3">¿Puedo transmitir IPTV a cualquier TV?</h3>
      <p>
        Puedes transmitir a cualquier TV que tenga un dispositivo Chromecast conectado (adaptador o integrado). La mayoría de los TVs inteligentes modernos tienen Chromecast integrado. Si tu TV no lo tiene, puedes comprar un adaptador Chromecast por $30-$50 y conectarlo a cualquier puerto HDMI.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">¿La transmisión usa los datos de mi teléfono?</h3>
      <p>
        No. Una vez que inicias la transmisión, tu Chromecast transmite el contenido directamente desde internet: tu teléfono solo actúa como control remoto. Esto significa que puedes bloquear tu teléfono, usar otras apps o incluso salir de la habitación sin interrumpir la reproducción.
      </p>

      <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-4">¿Listo para Transmitir IPTV en Tu Pantalla Grande?</h3>
        <p className="text-lg text-gray-600 mb-6">
          Descarga EDGE IPTV y comienza a transmitir en tu TV en menos de 2 minutos
        </p>
        <DownloadButton location="article-chromecast-final-es" size="xl">
          Descargar EDGE IPTV Gratis
        </DownloadButton>
        <p className="text-sm text-gray-500 mt-4">
          ✓ Transmisión con un toque ✓ Funciona en todos los TVs ✓ Sin apps extras ✓ Gratis para siempre
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link 
          href="/es/blog" 
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={20} />
          Volver al Blog
        </Link>
      </div>
    </div>
  );
}

// Continue in next part due to length...
