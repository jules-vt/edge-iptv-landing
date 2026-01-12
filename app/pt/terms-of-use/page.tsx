import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso - EDGE IPTV',
  description: 'Termos de uso do aplicativo EDGE IPTV. Por favor, leia estes termos cuidadosamente antes de usar nosso aplicativo.',
  alternates: {
    canonical: 'https://edge-iptv.app/pt/terms-of-use',
    languages: {
      'en': 'https://edge-iptv.app/terms-of-use',
      'fr': 'https://edge-iptv.app/fr/terms-of-use',
      'es': 'https://edge-iptv.app/es/terms-of-use',
      'pt': 'https://edge-iptv.app/pt/terms-of-use',
    },
  },
};

export default function TermsOfUsePT() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/pt" className="flex items-center gap-3">
            <Image src="/images/icon.png" alt="Logo EDGE IPTV" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/terms-of-use" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Termos de Uso</h1>
              <p className="text-gray-500">Última atualização: 14 de maio de 2025</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Por favor, leia estes termos de uso cuidadosamente antes de usar o aplicativo Edge IPTV.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Aceitação dos Termos</h2>
              <p className="text-gray-600 mb-4">
                Ao baixar, instalar ou usar o aplicativo Edge IPTV, você concorda em estar sujeito a estes termos de uso. Se você não aceita estes termos, não deve usar o aplicativo.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Uso do Aplicativo</h2>
              <p className="text-gray-600 mb-4">
                Edge IPTV é um player de fluxos IPTV que permite visualizar conteúdo multimídia disponível através de URLs IPTV. Nosso aplicativo é projetado como um simples player e não fornece nenhum conteúdo por si só.
              </p>
              <p className="text-gray-600 mb-4">
                Você é o único responsável por obter os direitos legais para acessar qualquer conteúdo que visualize através de nosso aplicativo. Edge IPTV não incentiva nem endossa a violação de direitos autorais ou outras violações de propriedade intelectual.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Direitos de Propriedade Intelectual</h2>
              <p className="text-gray-600 mb-4">
                O aplicativo Edge IPTV e seu conteúdo original, recursos e funções são e permanecerão propriedade exclusiva da Edge IPTV e seus licenciadores. O aplicativo é protegido por direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Restrições</h2>
              <p className="text-gray-600 mb-3">Você concorda em não:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Usar o aplicativo para fins ilegais ou não autorizados</li>
                <li>Tentar descompilar, desmontar ou fazer engenharia reversa do aplicativo</li>
                <li>Remover, contornar ou desativar qualquer recurso de segurança do aplicativo</li>
                <li>Redistribuir, vender, alugar ou sublicenciar o aplicativo</li>
                <li>Usar o aplicativo de uma maneira que possa danificar, desativar, sobrecarregar ou alterar os servidores ou redes</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Limitação de Responsabilidade</h2>
              <p className="text-gray-600 mb-4">
                Em nenhum caso Edge IPTV ou seus fornecedores serão responsáveis por qualquer dano especial, incidental, indireto ou consequente (incluindo, sem limitação, danos por perda de lucros, interrupção de negócios, perda de informações comerciais ou qualquer outra perda pecuniária) decorrente do uso ou da incapacidade de usar o aplicativo.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Conteúdo de Terceiros</h2>
              <p className="text-gray-600 mb-4">
                Nosso aplicativo permite que você acesse conteúdo fornecido por terceiros. Este conteúdo é de responsabilidade exclusiva da entidade que o disponibiliza. Não podemos garantir sua exatidão, pertinência ou qualidade e não somos responsáveis por nenhum conteúdo de terceiros que você acesse através do aplicativo.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Modificações dos Termos</h2>
              <p className="text-gray-600 mb-4">
                Reservamos o direito de modificar ou substituir estes termos a qualquer momento a nosso exclusivo critério. Se uma revisão for substancial, tentaremos fornecer um aviso de pelo menos 30 dias antes que os novos termos entrem em vigor.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Rescisão</h2>
              <p className="text-gray-600 mb-4">
                Podemos encerrar ou suspender seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos de Uso.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Lei Aplicável</h2>
              <p className="text-gray-600 mb-4">
                Estes Termos de Uso são regidos e interpretados de acordo com as leis da França, sem considerar seus princípios de conflito de leis.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Entre em Contato</h2>
              <p className="text-gray-600 mb-2">Se você tiver perguntas sobre estes Termos de Uso, entre em contato conosco:</p>
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
              <Link href="/pt/privacy-policy" className="hover:text-white transition-colors">Política de Privacidade</Link>
              <Link href="/pt/terms-of-use" className="text-white font-medium">Termos de Uso</Link>
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
