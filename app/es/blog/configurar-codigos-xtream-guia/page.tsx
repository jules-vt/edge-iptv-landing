import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';
import { buildBlogAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Guía de Configuración de Códigos Xtream 2026 | Tutorial de 2 Minutos',
  description: '📺 Aprende cómo configurar códigos Xtream en EDGE IPTV en menos de 2 minutos. Guía paso a paso con capturas de pantalla, errores comunes y consejos de solución de problemas.',
  alternates: buildBlogAlternates('configurar-codigos-xtream-guia', 'es'),
  openGraph: {
    title: 'Configuración de Códigos Xtream: Guía Completa 2026',
    description: 'Guía completa para configurar códigos Xtream. Consejos de solución de problemas, errores comunes y mejores prácticas.',
    images: ['https://edge-iptv.app/images/series-view.png'],
    type: 'article',
    publishedTime: '2026-01-12',
  },
};

export default function GuiaCodigosXtream() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Configuración de Códigos Xtream: Guía Completa para Principiantes 2026",
    "description": "Tutorial exhaustivo sobre cómo configurar códigos Xtream en reproductores IPTV, incluyendo solución de errores comunes y consejos de optimización.",
    "image": "https://edge-iptv.app/images/series-view.png",
    "author": {
      "@type": "Organization",
      "name": "EDGE IPTV Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://edge-iptv.app/images/icon.png"
      }
    },
    "datePublished": "2026-01-12",
    "dateModified": "2026-01-12",
    "inLanguage": "es-ES"
  };

  return (
    <ArticleLayout
      title="Configuración de Códigos Xtream: Guía Completa 2026"
      description="Tutorial exhaustivo sobre cómo configurar códigos Xtream en reproductores IPTV."
      date="2026-01-12"
      readTime="7 min de lectura"
      lang="es"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Los códigos Xtream son el estándar de la industria para streaming IPTV en 2026. Esta guía completa te llevará a través del proceso exacto de configuración en EDGE IPTV, paso a paso. Ya seas un principiante completo o estés experimentando problemas de conexión, aprenderás cómo configurar tus códigos Xtream en menos de 2 minutos.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">¿Qué son los Códigos Xtream?</h2>
        
        <p>
          Los códigos Xtream son una <strong>API de gestión IPTV</strong> que permite a los proveedores IPTV entregar contenido a los usuarios de forma estandarizada. En lugar de lidiar con complicadas listas M3U, los códigos Xtream proporcionan un sistema simple de tres credenciales:
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <ul className="space-y-2 mb-0">
            <li><strong>URL del Servidor:</strong> La dirección del servidor de tu proveedor IPTV (ej: http://line.iptvdomain.com)</li>
            <li><strong>Usuario:</strong> Tu nombre de usuario único de cuenta</li>
            <li><strong>Contraseña:</strong> Tu contraseña de cuenta</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Paso a Paso: Configurando Códigos Xtream</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Paso 1: Obtén tus Credenciales de Códigos Xtream</h3>
        <p>
          Contacta a tu proveedor IPTV y solicita tus credenciales de códigos Xtream. Deben proporcionarte:
        </p>
        <ul>
          <li>URL del servidor (usualmente comienza con http:// o https://)</li>
          <li>Nombre de usuario (a menudo alfanumérico)</li>
          <li>Contraseña (sensible a mayúsculas)</li>
          <li>Número de puerto (opcional, usualmente 80 u 8080)</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Paso 2: Descarga un Reproductor IPTV</h3>
        <p>
          Necesitas una aplicación de reproductor IPTV que soporte códigos Xtream. Recomendamos <strong>EDGE IPTV</strong> para la experiencia de configuración más rápida y fácil.
        </p>

        <div className="text-center my-6">
          <DownloadButton location="article-xtream-step2" size="lg">
            Descargar EDGE IPTV Gratis
          </DownloadButton>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">Paso 3: Ingresa tus Códigos Xtream</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6 border-2 border-blue-200">
          <h4 className="text-lg font-bold mb-4">En EDGE IPTV - El Proceso Completo:</h4>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">📱 Paso 1: Añade tu Lista de Reproducción</p>
              <p className="text-gray-700">
                Abre EDGE IPTV y busca el <strong>botón &quot;+&quot; en la esquina inferior derecha</strong> de tu pantalla. Tócalo para comenzar a añadir tu primera lista de reproducción.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">🔧 Paso 2: Elige tu Tipo de Fuente</p>
              <p className="text-gray-700 mb-2">
                Verás dos opciones:
              </p>
              <ul className="ml-6 space-y-1 text-gray-700">
                <li><strong>• Xtream Codes API</strong> - Selecciona esto para configuración de códigos Xtream</li>
                <li>• Lista de Reproducción M3U - Para URLs M3U (método diferente)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Toca <strong>&quot;Xtream Codes API&quot;</strong> para continuar.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">✍️ Paso 3: Completa tus Credenciales</p>
              <p className="text-gray-700">
                Ingresa la información de tu proveedor exactamente como te la proporcionaron.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4">¿Listo para Configurar IPTV?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Descarga EDGE IPTV y configura tus códigos Xtream en menos de 2 minutos
          </p>
          <DownloadButton location="article-xtream-final" size="xl">
            Descargar EDGE IPTV Gratis
          </DownloadButton>
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
    </ArticleLayout>
  );
}
