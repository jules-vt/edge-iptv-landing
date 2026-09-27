import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';
import { buildBlogAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Guia de Streaming IPTV com Chromecast 2026 | Tutorial Completo',
  description: 'Aprenda como transmitir IPTV para sua TV com Chromecast usando EDGE IPTV. Guia passo a passo fácil.',
  alternates: buildBlogAlternates('guia-streaming-iptv-chromecast-pt', 'pt'),
  openGraph: {
    title: 'Guia de Streaming IPTV com Chromecast 2026',
    description: 'Tutorial completo sobre como transmitir IPTV para sua TV usando Chromecast.',
    images: ['https://edge-iptv.app/images/series-view.png'],
    type: 'article',
    publishedTime: '2026-01-12',
  },
};

export default function GuiaChromecast() {
  return (
    <ArticleLayout
      title="Guia de Streaming IPTV com Chromecast 2026"
      description="Tutorial completo sobre como transmitir IPTV para sua TV usando Chromecast."
      date="2026-01-12"
      readTime="5 min de leitura"
      lang="pt"
    >
      <div className="max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Quer assistir seu IPTV na tela grande? Este guia mostrará como transmitir canais, filmes e séries do seu iPhone/iPad para sua TV usando Chromecast com EDGE IPTV.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Usar Chromecast para IPTV?</h2>
        <p>
          O Chromecast permite que você desfrute do seu conteúdo IPTV na tela grande da sua TV com qualidade perfeita e sem cabos. Com EDGE IPTV, a transmissão é tão simples quanto tocar um botão.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Requisitos</h2>
        <ul>
          <li>Um dispositivo Chromecast conectado à sua TV</li>
          <li>iPhone ou iPad com iOS 17.0 ou superior</li>
          <li>EDGE IPTV instalado</li>
          <li>Ambos os dispositivos na mesma rede Wi-Fi</li>
        </ul>

        <div className="text-center my-6">
          <DownloadButton location="article-chromecast" size="lg">
            Começar o teste grátis de 7 dias
          </DownloadButton>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Como Transmitir para Chromecast</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Passo 1: Conecte Seu Chromecast</h3>
          <p>Certifique-se de que seu Chromecast esteja ligado e conectado à mesma rede Wi-Fi que seu iPhone/iPad.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Passo 2: Abra o EDGE IPTV</h3>
          <p>Navegue até o conteúdo que deseja assistir (canal ao vivo, filme ou série).</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Passo 3: Toque no Ícone Cast</h3>
          <p>Procure o ícone do Chromecast na parte superior da tela e toque nele. Selecione seu dispositivo Chromecast da lista.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Passo 4: Aproveite na Tela Grande!</h3>
          <p>Seu conteúdo começará a reproduzir em sua TV automaticamente. Use seu iPhone/iPad como controle remoto.</p>
        </div>

        <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4">Transmita IPTV para Sua TV Agora</h3>
          <p className="text-lg text-gray-600 mb-6">
            Desfrute do EDGE IPTV na tela grande com Chromecast
          </p>
          <DownloadButton location="article-chromecast-final" size="xl">
            Começar o teste grátis de 7 dias
          </DownloadButton>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/pt/blog" 
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar ao Blog
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
