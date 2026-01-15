import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';

export const metadata: Metadata = {
  title: 'Guía de Configuración de Lista M3U 2026 | Tutorial Completo',
  description: '📺 Aprende cómo configurar listas de reproducción M3U en EDGE IPTV. Guía paso a paso con consejos y solución de problemas.',
  alternates: {
    canonical: 'https://edge-iptv.app/es/blog/configurar-lista-m3u-guia',
    languages: {
      'en': 'https://edge-iptv.app/blog/m3u-playlist-setup-guide',
      'fr': 'https://edge-iptv.app/fr/blog/configurer-playlist-m3u-guide',
      'es': 'https://edge-iptv.app/es/blog/configurar-lista-m3u-guia',
      'pt': 'https://edge-iptv.app/pt/blog/configurar-lista-m3u-pt',
    },
  },
  openGraph: {
    title: 'Guía de Configuración de Lista M3U 2026',
    description: 'Aprende cómo configurar listas M3U en tu reproductor IPTV. Tutorial completo con ejemplos.',
    images: ['https://edge-iptv.app/images/series-view.png'],
    type: 'article',
    publishedTime: '2026-01-12',
  },
};

export default function GuiaM3U() {
  return (
    <ArticleLayout
      title="Guía de Configuración de Lista M3U 2026"
      description="Tutorial completo sobre cómo configurar listas de reproducción M3U."
      date="12 de enero de 2026"
      readTime="6 min de lectura"
      lang="es"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Las listas de reproducción M3U son un formato popular para IPTV. Esta guía te mostrará cómo configurar tu lista M3U en EDGE IPTV de manera rápida y sencilla.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">¿Qué es una Lista M3U?</h2>
        <p>
          Una lista M3U es un archivo de texto que contiene enlaces a canales de televisión en vivo y contenido multimedia. Es uno de los formatos más comunes para IPTV.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Cómo Configurar tu Lista M3U</h2>
        
        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Paso 1: Obtén tu URL M3U</h3>
          <p>Tu proveedor IPTV te proporcionará una URL M3U o un archivo .m3u para descargar.</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Paso 2: Abre EDGE IPTV</h3>
          <p>Descarga e instala EDGE IPTV si aún no lo has hecho.</p>
        </div>

        <div className="text-center my-6">
          <DownloadButton location="article-m3u" size="lg">
            Descargar EDGE IPTV Gratis
          </DownloadButton>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Paso 3: Añade tu Lista M3U</h3>
          <p>En EDGE IPTV, toca el botón &quot;+&quot;, selecciona &quot;Lista de Reproducción M3U&quot; y pega tu URL.</p>
        </div>

        <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4">Comienza a Ver IPTV Ahora</h3>
          <p className="text-lg text-gray-600 mb-6">
            Configura tu lista M3U en minutos con EDGE IPTV
          </p>
          <DownloadButton location="article-m3u-final" size="xl">
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
