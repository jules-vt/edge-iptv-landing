import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Como Instalar IPTV no iPhone e iPad - Guia Passo a Passo 2026',
  description: 'Guia completo passo a passo para instalar e configurar EDGE IPTV no iPhone e iPad. Aprenda a configurar códigos Xtream e comece a transmitir em 30 segundos.',
  alternates: {
    canonical: 'https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad',
    languages: {
      'en': 'https://edge-iptv.app/how-to-install-iptv-iphone-ipad',
      'fr': 'https://edge-iptv.app/fr/comment-installer-iptv-iphone-ipad',
      'es': 'https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad',
      'pt': 'https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad',
    title: 'Como Instalar IPTV no iPhone e iPad - Guia Passo a Passo 2026',
    description: 'Guia completo passo a passo para instalar e configurar EDGE IPTV no iPhone e iPad. Comece a transmitir em 30 segundos.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'pt_BR',
  },
};

export default function HowToInstallPT() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Instalar IPTV no iPhone e iPad em 2 Minutos",
    "description": "Guia completo passo a passo para instalar e configurar EDGE IPTV no iPhone e iPad com códigos Xtream. Configuração em menos de 2 minutos sem conhecimentos técnicos.",
    "image": {
      "@type": "ImageObject",
      "url": "https://edge-iptv.app/images/iphone-series-3d.png",
      "width": "400",
      "height": "800"
    },
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "BRL",
      "value": "0"
    },
    "tool": [{
      "@type": "HowToTool",
      "name": "iPhone ou iPad com iOS 12.0 ou posterior"
    }, {
      "@type": "HowToTool",
      "name": "Conexão com Internet"
    }],
    "supply": [{
      "@type": "HowToSupply",
      "name": "Assinatura IPTV com códigos API Xtream"
    }],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Baixar EDGE IPTV da App Store",
        "text": "Baixe o melhor player IPTV da App Store. EDGE IPTV é especialmente projetado para iPhone e iPad com suporte Chromecast, visualização offline e configuração rápida de códigos Xtream. O aplicativo é completamente gratuito.",
        "url": "https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad#step1",
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
        "name": "Iniciar o App e Selecionar seu Idioma",
        "text": "Abra o EDGE IPTV e selecione seu idioma preferido na interface multilíngue. O app suporta português, inglês, francês, espanhol e turco para uma experiência nativa.",
        "url": "https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad#step2",
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
        "name": "Configurar seus Códigos Xtream",
        "text": "Toque em 'Adicionar Playlist' ou no botão '+', selecione a opção 'Códigos Xtream', e insira suas credenciais fornecidas pelo seu provedor IPTV: URL do servidor (ex: http://line.iptvdomain.com), Nome de usuário, e Senha. Depois toque em 'Conectar'. O app carregará automaticamente todos os seus canais, filmes e séries.",
        "url": "https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad#step3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Começar a Assistir seu Conteúdo Favorito",
        "text": "Navegue pelos seus canais, filmes e biblioteca de séries. Use a interface intuitiva para pesquisar, adicionar aos favoritos, e começar a transmitir imediatamente. Transmita para Chromecast com um clique ou baixe conteúdo para visualização offline.",
        "url": "https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad#step4",
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
      "name": "Tutorial: Como Instalar IPTV no iPhone",
      "description": "Guia em vídeo mostrando como instalar e configurar EDGE IPTV no iPhone e iPad",
      "thumbnailUrl": "https://edge-iptv.app/images/iphone-series-3d.png",
      "uploadDate": "2025-01-01"
    },
    "inLanguage": "pt-BR"
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Instalar IPTV no iPhone em 2 Minutos – Guia Fácil",
    "description": "Guia completo passo a passo para instalar e configurar IPTV no iPhone e iPad. Compatível com códigos Xtream. Sem conhecimentos técnicos necessários.",
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
      "@id": "https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad"
    },
    "keywords": "IPTV, iPhone, iPad, instalar, tutorial, códigos Xtream, guia, streaming",
    "articleSection": "Tutorial",
    "wordCount": 800,
    "inLanguage": "pt-BR"
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
          <Link href="/pt" className="flex items-center gap-3">
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
              Baixar
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumb 
            items={[{ label: 'Início', href: '/pt' }]} 
            currentPage="Como Instalar IPTV no iPhone e iPad"
            lang="pt"
          />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Como Instalar IPTV no iPhone e iPad: Guia Completo 2026
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aprenda a configurar streaming IPTV em seus dispositivos iOS em apenas minutos. Este guia completo irá acompanhá-lo em todo o processo usando o melhor player IPTV disponível.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <h4 className="text-blue-800 font-bold mb-4 text-lg">O que você vai precisar:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> iPhone ou iPad com iOS 12.0 ou mais recente
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> Assinatura IPTV com códigos Xtream
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> Conexão com internet estável
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span> Aplicativo EDGE IPTV (recomendado para a melhor experiência)
              </li>
            </ul>
          </div>

          <div className="space-y-12">
            <div id="step1" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Baixe o Melhor Player IPTV para iOS</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                O primeiro passo é baixar um player IPTV confiável. Recomendamos fortemente <strong>EDGE IPTV</strong> pois é especialmente projetado para iPhone e iPad, oferecendo a experiência de streaming mais fluida com recursos avançados.
              </p>
              
              <div className="mb-6">
                <strong className="block mb-2 text-gray-800">Por que escolher EDGE IPTV?</strong>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Configuração Xtream rápida em segundos</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Suporte Chromecast para assistir em tela grande</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Download offline para assistir sem internet</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Interface multilíngue (Inglês, Francês, Espanhol, Português, Turco)</li>
                </ul>
              </div>
              
              <Link 
                href="https://j-analytics.cloud/q/Z0m1Qmdtf" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <Download size={20} />
                Baixar EDGE IPTV na App Store
              </Link>
            </div>

            <div id="step2" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Inicie o Aplicativo e Selecione o Idioma</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Uma vez instalado, abra o EDGE IPTV. Você será recebido por uma interface linda onde poderá selecionar seu idioma preferido. O aplicativo suporta múltiplos idiomas para que você se sinta em casa.
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image 
                  src="/images/language-selection.jpeg" 
                  alt="Seleção de idioma EDGE IPTV" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div id="step3" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Configure os Códigos Xtream</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                EDGE IPTV torna a conexão via códigos Xtream incrivelmente fácil. Você não precisa gerenciar complexas playlists M3U.
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6 ml-2">
                <li>Toque no botão <strong>"Adicionar Playlist"</strong> ou <strong>"+"</strong>.</li>
                <li>Selecione a opção <strong>"Códigos Xtream"</strong>.</li>
                <li>Insira os detalhes fornecidos pelo seu provedor IPTV:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-500">
                    <li><strong>URL do Servidor:</strong> (ex: http://line.iptvdomain.com)</li>
                    <li><strong>Nome de usuário:</strong> Seu nome de usuário</li>
                    <li><strong>Senha:</strong> Sua senha</li>
                  </ul>
                </li>
                <li>Toque em <strong>"Conectar"</strong> ou <strong>"Login"</strong>.</li>
              </ol>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                <strong>Nota:</strong> Certifique-se de inserir os detalhes exatamente como fornecidos, prestando atenção a maiúsculas e minúsculas.
              </div>
            </div>

            <div id="step4" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">4</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Aproveite seu Conteúdo!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Isso é tudo! EDGE IPTV carregará seus canais, filmes e séries. Agora você pode navegar pelas categorias, pesquisar seu conteúdo favorito e começar a transmitir imediatamente.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image 
                    src="/images/series-view.png" 
                    alt="Vista de séries" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image 
                    src="/images/movie-details.png" 
                    alt="Detalhes do filme" 
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
              href="/pt" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar ao início
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
              <Link href="/pt/privacy-policy" className="hover:text-white transition-colors">Política de Privacidade</Link>
              <Link href="/pt/terms-of-use" className="hover:text-white transition-colors">Termos de Uso</Link>
              <Link href="/pt/como-instalar-iptv-iphone-ipad" className="text-white font-medium">Como Instalar</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} EDGE IPTV. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
