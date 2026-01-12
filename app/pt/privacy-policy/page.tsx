import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade - EDGE IPTV',
  description: 'Política de privacidade do aplicativo EDGE IPTV. Descubra como tratamos seus dados e protegemos sua privacidade.',
  alternates: {
    canonical: 'https://edge-iptv.app/pt/privacy-policy',
    languages: {
      'en': 'https://edge-iptv.app/privacy-policy',
      'fr': 'https://edge-iptv.app/fr/privacy-policy',
      'es': 'https://edge-iptv.app/es/privacy-policy',
      'pt': 'https://edge-iptv.app/pt/privacy-policy',
    },
  },
};

export default function PrivacyPolicyPT() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/pt" className="flex items-center gap-3">
            <Image src="/images/icon.png" alt="Logo EDGE IPTV" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              EN
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <Link href="/pt" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors mb-6">
                <ArrowLeft size={16} />
                Voltar ao início
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Política de Privacidade</h1>
              <p className="text-gray-500">Última atualização: 14 de maio de 2025</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Esta Política de Privacidade descreve nossas políticas e procedimentos sobre a coleta, uso e divulgação de suas informações quando você usa o aplicativo Edge IPTV.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Coleta e Uso de Dados</h2>
              <p className="text-gray-600 mb-4">
                Edge IPTV foi projetado para respeitar sua privacidade. Não coletamos informações de identificação pessoal sobre você, a menos que você nos forneça voluntariamente.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Informações que Coletamos</h3>
              <p className="text-gray-600 mb-3">Ao usar nosso aplicativo, podemos coletar as seguintes informações:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Informações de uso anônimas para melhorar o aplicativo</li>
                <li>Registros de erros em caso de falhas do aplicativo</li>
                <li>Preferências de configuração que você definir no aplicativo</li>
                <li>URLs IPTV que você adicionar ao aplicativo (armazenadas apenas localmente no seu dispositivo)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Armazenamento de Dados</h3>
              <p className="text-gray-600 mb-6">
                Todas as listas IPTV, URLs e identificadores que você inserir no aplicativo são armazenados apenas no seu dispositivo. Não transmitimos essas informações para nossos servidores ou terceiros.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Dados de Análise</h3>
              <p className="text-gray-600 mb-6">
                Coletamos dados de uso anônimos para melhorar continuamente nosso aplicativo. Esses dados nos ajudam a entender como os usuários interagem com o aplicativo e identificar possíveis melhorias. Todos os dados coletados são agregados e não contêm informações de identificação pessoal.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Segurança</h3>
              <p className="text-gray-600 mb-6">
                A segurança dos seus dados é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Alterações a esta Política de Privacidade</h3>
              <p className="text-gray-600 mb-4">
                Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer mudanças publicando a nova Política de Privacidade nesta página.
              </p>
              <p className="text-gray-600 mb-6">
                Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As mudanças a esta Política de Privacidade são efetivas quando publicadas nesta página.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Entre em Contato</h3>
              <p className="text-gray-600 mb-2">Se você tiver perguntas sobre esta Política de Privacidade, pode entrar em contato conosco:</p>
              <p className="text-gray-600">
                Por e-mail: <a href="mailto:contact@edge-iptv.app" className="text-blue-600 hover:underline">contact@edge-iptv.app</a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <Link 
                href="/pt" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Voltar ao início
              </Link>
            </div>
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
              <Link href="/pt/privacy-policy" className="text-white font-medium">Política de Privacidade</Link>
              <Link href="/pt/terms-of-use" className="hover:text-white transition-colors">Termos de Uso</Link>
              <Link href="/pt/como-instalar-iptv-iphone-ipad" className="hover:text-white transition-colors">Como Instalar</Link>
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
