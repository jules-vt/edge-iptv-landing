import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';

export const metadata: Metadata = {
  title: 'Guia de Configuração de Lista M3U 2026 | Tutorial Completo',
  description: '📺 Aprenda como configurar listas de reprodução M3U no EDGE IPTV. Guia passo a passo com dicas e solução de problemas.',
  alternates: {
    canonical: 'https://edge-iptv.app/pt/blog/configurar-lista-m3u-pt',
    languages: {
      'en': 'https://edge-iptv.app/blog/m3u-playlist-setup-guide',
      'fr': 'https://edge-iptv.app/fr/blog/configurer-playlist-m3u-guide',
      'es': 'https://edge-iptv.app/es/blog/configurar-lista-m3u-guia',
      'pt': 'https://edge-iptv.app/pt/blog/configurar-lista-m3u-pt',
    },
  },
  openGraph: {
    title: 'Guia de Configuração de Lista M3U 2026',
    description: 'Aprenda como configurar listas M3U no seu reprodutor IPTV. Tutorial completo com exemplos.',
    images: ['https://edge-iptv.app/images/series-view.png'],
    type: 'article',
    publishedTime: '2026-01-12',
  },
};

export default function GuiaM3U() {
  return (
    <ArticleLayout
      title="Guia de Configuração de Lista M3U 2026"
      description="Tutorial completo sobre como configurar listas de reprodução M3U."
      date="12 de janeiro de 2026"
      readTime="6 min de leitura"
      lang="pt"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          As listas de reprodução M3U são um formato popular para IPTV. Este guia mostrará como configurar sua lista M3U no EDGE IPTV de forma rápida e simples.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">O Que é uma Lista M3U?</h2>
        <p>
          Uma lista M3U é um arquivo de texto que contém links para canais de televisão ao vivo e conteúdo multimídia. É um dos formatos mais comuns para IPTV.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Como Configurar Sua Lista M3U</h2>
        
        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Passo 1: Obtenha Sua URL M3U</h3>
          <p>Seu provedor IPTV fornecerá uma URL M3U ou um arquivo .m3u para download.</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Passo 2: Abra o EDGE IPTV</h3>
          <p>Baixe e instale o EDGE IPTV se ainda não o fez.</p>
        </div>

        <div className="text-center my-6">
          <DownloadButton location="article-m3u" size="lg">
            Baixar EDGE IPTV Grátis
          </DownloadButton>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">Passo 3: Adicione Sua Lista M3U</h3>
          <p>No EDGE IPTV, toque no botão &quot;+&quot;, selecione &quot;Playlist M3U&quot; e cole sua URL.</p>
        </div>

        <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4">Comece a Assistir IPTV Agora</h3>
          <p className="text-lg text-gray-600 mb-6">
            Configure sua lista M3U em minutos com EDGE IPTV
          </p>
          <DownloadButton location="article-m3u-final" size="xl">
            Baixar EDGE IPTV Grátis
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
