import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';
import { buildBlogAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Guia de Configuração de Códigos Xtream 2026 | Tutorial de 2 Minutos',
  description: '📺 Aprenda como configurar códigos Xtream no EDGE IPTV em menos de 2 minutos. Guia passo a passo com capturas de tela, erros comuns e dicas de solução de problemas.',
  alternates: buildBlogAlternates('configurar-codigos-xtream-pt', 'pt'),
  openGraph: {
    title: 'Configuração de Códigos Xtream: Guia Completo 2026',
    description: 'Guia completo para configurar códigos Xtream. Dicas de solução de problemas, erros comuns e melhores práticas.',
    images: ['https://edge-iptv.app/images/series-view.png'],
    type: 'article',
    publishedTime: '2026-01-12',
  },
};

export default function GuiaCodigosXtream() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Configuração de Códigos Xtream: Guia Completo para Iniciantes 2026",
    "description": "Tutorial abrangente sobre como configurar códigos Xtream em reprodutores IPTV, incluindo solução de erros comuns e dicas de otimização.",
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
    "inLanguage": "pt-BR"
  };

  return (
    <ArticleLayout
      title="Configuração de Códigos Xtream: Guia Completo 2026"
      description="Tutorial abrangente sobre como configurar códigos Xtream em reprodutores IPTV."
      date="2026-01-12"
      readTime="7 min de leitura"
      lang="pt"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Os códigos Xtream são o padrão da indústria para streaming IPTV em 2026. Este guia completo o guiará através do processo exato de configuração no EDGE IPTV, passo a passo. Seja você um iniciante completo ou esteja enfrentando problemas de conexão, você aprenderá como configurar seus códigos Xtream em menos de 2 minutos.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">O Que São Códigos Xtream?</h2>
        
        <p>
          Códigos Xtream são uma <strong>API de gerenciamento IPTV</strong> que permite aos provedores IPTV entregar conteúdo aos usuários de forma padronizada. Em vez de lidar com playlists M3U complicadas, os códigos Xtream fornecem um sistema simples de três credenciais:
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <ul className="space-y-2 mb-0">
            <li><strong>URL do Servidor:</strong> O endereço do servidor do seu provedor IPTV (ex: http://line.iptvdomain.com)</li>
            <li><strong>Nome de Usuário:</strong> Seu nome de usuário único da conta</li>
            <li><strong>Senha:</strong> Sua senha da conta</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Passo a Passo: Configurando Códigos Xtream</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Passo 1: Obtenha Suas Credenciais de Códigos Xtream</h3>
        <p>
          Entre em contato com seu provedor IPTV e solicite suas credenciais de códigos Xtream. Eles devem fornecer:
        </p>
        <ul>
          <li>URL do servidor (geralmente começa com http:// ou https://)</li>
          <li>Nome de usuário (frequentemente alfanumérico)</li>
          <li>Senha (sensível a maiúsculas e minúsculas)</li>
          <li>Número da porta (opcional, geralmente 80 ou 8080)</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Passo 2: Baixe um Reprodutor IPTV</h3>
        <p>
          Você precisa de um aplicativo reprodutor IPTV que suporte códigos Xtream. Recomendamos <strong>EDGE IPTV</strong> para a experiência de configuração mais rápida e fácil.
        </p>

        <div className="text-center my-6">
          <DownloadButton location="article-xtream-step2" size="lg">
            Baixar EDGE IPTV Grátis
          </DownloadButton>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">Passo 3: Insira Seus Códigos Xtream</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6 border-2 border-blue-200">
          <h4 className="text-lg font-bold mb-4">No EDGE IPTV - O Processo Completo:</h4>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">📱 Passo 1: Adicione Sua Playlist</p>
              <p className="text-gray-700">
                Abra o EDGE IPTV e procure o <strong>botão &quot;+&quot; no canto inferior direito</strong> da tela. Toque nele para começar a adicionar sua primeira playlist.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">🔧 Passo 2: Escolha Seu Tipo de Fonte</p>
              <p className="text-gray-700 mb-2">
                Você verá duas opções:
              </p>
              <ul className="ml-6 space-y-1 text-gray-700">
                <li><strong>• Xtream Codes API</strong> - Selecione isto para configuração de códigos Xtream</li>
                <li>• Playlist M3U - Para URLs M3U (método diferente)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Toque em <strong>&quot;Xtream Codes API&quot;</strong> para continuar.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">✍️ Passo 3: Preencha Suas Credenciais</p>
              <p className="text-gray-700">
                Insira as informações do seu provedor exatamente como foram fornecidas.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4">Pronto para Configurar IPTV?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Baixe EDGE IPTV e configure seus códigos Xtream em menos de 2 minutos
          </p>
          <DownloadButton location="article-xtream-final" size="xl">
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
