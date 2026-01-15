import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';

export const metadata: Metadata = {
  title: 'Guía de Streaming IPTV con Chromecast 2026 | Tutorial Completo',
  description: '📺 Aprende cómo transmitir IPTV a tu TV con Chromecast usando EDGE IPTV. Guía paso a paso fácil.',
  alternates: {
    canonical: 'https://edge-iptv.app/es/blog/guia-streaming-iptv-chromecast',
    languages: {
      'en': 'https://edge-iptv.app/blog/chromecast-iptv-streaming-guide',
      'fr': 'https://edge-iptv.app/fr/blog/diffuser-iptv-chromecast-guide',
      'es': 'https://edge-iptv.app/es/blog/guia-streaming-iptv-chromecast',
      'pt': 'https://edge-iptv.app/pt/blog/guia-streaming-iptv-chromecast-pt',
    },
  },
  openGraph: {
    title: 'Guía de Streaming IPTV con Chromecast 2026',
    description: 'Tutorial completo sobre cómo transmitir IPTV a tu TV usando Chromecast.',
    images: ['https://edge-iptv.app/images/series-view.png'],
    type: 'article',
    publishedTime: '2026-01-12',
  },
};

export default function GuiaChromecast() {
  return (
    <ArticleLayout
      title="Guía de Streaming IPTV con Chromecast 2026"
      description="Tutorial completo sobre cómo transmitir IPTV a tu TV usando Chromecast."
      date="12 de enero de 2026"
      readTime="5 min de lectura"
      lang="es"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          ¿Quieres ver tu IPTV en la pantalla grande? Esta guía te mostrará cómo transmitir canales, películas y series desde tu iPhone/iPad a tu TV usando Chromecast con EDGE IPTV.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">¿Por Qué Usar Chromecast para IPTV?</h2>
        <p>
          Chromecast te permite disfrutar de tu contenido IPTV en la pantalla grande de tu TV con calidad perfecta y sin cables. Con EDGE IPTV, la transmisión es tan simple como tocar un botón.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Requisitos</h2>
        <ul>
          <li>Un dispositivo Chromecast conectado a tu TV</li>
          <li>iPhone o iPad con iOS 12.0 o superior</li>
          <li>EDGE IPTV instalado</li>
          <li>Ambos dispositivos en la misma red Wi-Fi</li>
        </ul>

        <div className="text-center my-6">
          <DownloadButton location="article-chromecast" size="lg">
            Descargar EDGE IPTV Gratis
          </DownloadButton>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Cómo Transmitir a Chromecast</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Paso 1: Conecta tu Chromecast</h3>
          <p>Asegúrate de que tu Chromecast esté encendido y conectado a la misma red Wi-Fi que tu iPhone/iPad.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Paso 2: Abre EDGE IPTV</h3>
          <p>Navega al contenido que quieres ver (canal en vivo, película o serie).</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Paso 3: Toca el Icono de Cast</h3>
          <p>Busca el icono de Chromecast en la parte superior de la pantalla y tócalo. Selecciona tu dispositivo Chromecast de la lista.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Paso 4: ¡Disfruta en la Pantalla Grande!</h3>
          <p>Tu contenido comenzará a reproducirse en tu TV automáticamente. Usa tu iPhone/iPad como control remoto.</p>
        </div>

        <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4">Transmite IPTV a tu TV Ahora</h3>
          <p className="text-lg text-gray-600 mb-6">
            Disfruta de EDGE IPTV en la pantalla grande con Chromecast
          </p>
          <DownloadButton location="article-chromecast-final" size="xl">
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
