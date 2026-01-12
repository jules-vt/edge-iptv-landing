import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - EDGE IPTV',
  description: 'Política de privacidad de la aplicación EDGE IPTV. Descubre cómo tratamos tus datos y protegemos tu privacidad.',
  alternates: {
    canonical: 'https://edge-iptv.app/es/privacy-policy',
    languages: {
      'en': 'https://edge-iptv.app/privacy-policy',
      'fr': 'https://edge-iptv.app/fr/privacy-policy',
      'es': 'https://edge-iptv.app/es/privacy-policy',
      'pt': 'https://edge-iptv.app/pt/privacy-policy',
    },
  },
};

export default function PrivacyPolicyES() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/es" className="flex items-center gap-3">
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
              <Link href="/es" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors mb-6">
                <ArrowLeft size={16} />
                Volver al inicio
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Política de Privacidad</h1>
              <p className="text-gray-500">Última actualización: 14 de mayo de 2025</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Esta Política de Privacidad describe nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de su información cuando utiliza la aplicación Edge IPTV.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Recopilación y Uso de Datos</h2>
              <p className="text-gray-600 mb-4">
                Edge IPTV está diseñado para respetar su privacidad. No recopilamos información de identificación personal sobre usted a menos que nos la proporcione voluntariamente.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Información que Recopilamos</h3>
              <p className="text-gray-600 mb-3">Al usar nuestra aplicación, podemos recopilar la siguiente información:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Información de uso anónima para mejorar la aplicación</li>
                <li>Registros de errores en caso de fallos de la aplicación</li>
                <li>Preferencias de configuración que establezca en la aplicación</li>
                <li>URLs IPTV que agregue a la aplicación (almacenadas solo localmente en su dispositivo)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Almacenamiento de Datos</h3>
              <p className="text-gray-600 mb-6">
                Todas las listas IPTV, URLs e identificadores que ingrese en la aplicación se almacenan únicamente en su dispositivo. No transmitimos esta información a nuestros servidores ni a terceros.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Datos de Análisis</h3>
              <p className="text-gray-600 mb-6">
                Recopilamos datos de uso anónimos para mejorar continuamente nuestra aplicación. Estos datos nos ayudan a comprender cómo los usuarios interactúan con la aplicación e identificar posibles mejoras. Todos los datos recopilados son agregados y no contienen información de identificación personal.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Seguridad</h3>
              <p className="text-gray-600 mb-6">
                La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por utilizar medios comercialmente aceptables para proteger su información personal, no podemos garantizar su seguridad absoluta.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Cambios a esta Política de Privacidad</h3>
              <p className="text-gray-600 mb-4">
                Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.
              </p>
              <p className="text-gray-600 mb-6">
                Se le recomienda revisar esta Política de Privacidad periódicamente para cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Contáctenos</h3>
              <p className="text-gray-600 mb-2">Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos:</p>
              <p className="text-gray-600">
                Por correo electrónico: <a href="mailto:contact@edge-iptv.app" className="text-blue-600 hover:underline">contact@edge-iptv.app</a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <Link 
                href="/es" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Volver al inicio
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
              <Link href="/es/privacy-policy" className="text-white font-medium">Política de Privacidad</Link>
              <Link href="/es/terms-of-use" className="hover:text-white transition-colors">Términos de Uso</Link>
              <Link href="/es/como-instalar-iptv-iphone-ipad" className="hover:text-white transition-colors">Cómo Instalar</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} EDGE IPTV. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
