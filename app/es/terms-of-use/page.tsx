import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Uso - EDGE IPTV',
  description: 'Términos de uso de la aplicación EDGE IPTV. Por favor, lee estos términos cuidadosamente antes de usar nuestra aplicación.',
  alternates: {
    canonical: 'https://edge-iptv.app/es/terms-of-use',
    languages: {
      'en': 'https://edge-iptv.app/terms-of-use',
      'fr': 'https://edge-iptv.app/fr/terms-of-use',
      'es': 'https://edge-iptv.app/es/terms-of-use',
      'pt': 'https://edge-iptv.app/pt/terms-of-use',
    },
  },
};

export default function TermsOfUseES() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/es" className="flex items-center gap-3">
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
              <Link href="/es" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors mb-6">
                <ArrowLeft size={16} />
                Volver al inicio
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Términos de Uso</h1>
              <p className="text-gray-500">Última actualización: 14 de mayo de 2025</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Por favor, lee cuidadosamente estos términos de uso antes de utilizar la aplicación Edge IPTV.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Aceptación de los Términos</h2>
              <p className="text-gray-600 mb-4">
                Al descargar, instalar o usar la aplicación Edge IPTV, aceptas estar sujeto a estos términos de uso. Si no aceptas estos términos, no debes usar la aplicación.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Uso de la Aplicación</h2>
              <p className="text-gray-600 mb-4">
                Edge IPTV es un reproductor de flujos IPTV que te permite visualizar contenido multimedia disponible a través de URLs IPTV. Nuestra aplicación está diseñada como un simple reproductor y no proporciona ningún contenido por sí misma.
              </p>
              <p className="text-gray-600 mb-4">
                Eres el único responsable de obtener los derechos legales para acceder a cualquier contenido que visualices a través de nuestra aplicación. Edge IPTV no fomenta ni respalda la violación de derechos de autor u otras violaciones de propiedad intelectual.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Derechos de Propiedad Intelectual</h2>
              <p className="text-gray-600 mb-4">
                La aplicación Edge IPTV y su contenido original, características y funciones son y seguirán siendo propiedad exclusiva de Edge IPTV y sus licenciantes. La aplicación está protegida por derechos de autor, marcas comerciales y otras leyes de propiedad intelectual.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Restricciones</h2>
              <p className="text-gray-600 mb-3">Aceptas no:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Usar la aplicación para fines ilegales o no autorizados</li>
                <li>Intentar descompilar, desensamblar o aplicar ingeniería inversa a la aplicación</li>
                <li>Eliminar, eludir o desactivar cualquier función de seguridad de la aplicación</li>
                <li>Redistribuir, vender, alquilar o sublicenciar la aplicación</li>
                <li>Usar la aplicación de una manera que pueda dañar, desactivar, sobrecargar o alterar los servidores o redes</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Limitación de Responsabilidad</h2>
              <p className="text-gray-600 mb-4">
                En ningún caso Edge IPTV o sus proveedores serán responsables de cualquier daño especial, incidental, indirecto o consecuente (incluyendo, sin limitación, daños por pérdida de beneficios, interrupción de negocios, pérdida de información comercial o cualquier otra pérdida pecuniaria) derivada del uso o la incapacidad de usar la aplicación.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contenido de Terceros</h2>
              <p className="text-gray-600 mb-4">
                Nuestra aplicación te permite acceder a contenido proporcionado por terceros. Este contenido es responsabilidad exclusiva de la entidad que lo pone a disposición. No podemos garantizar su exactitud, pertinencia o calidad y no somos responsables de ningún contenido de terceros al que accedas a través de la aplicación.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Modificaciones de los Términos</h2>
              <p className="text-gray-600 mb-4">
                Nos reservamos el derecho de modificar o reemplazar estos términos en cualquier momento a nuestra sola discreción. Si una revisión es sustancial, intentaremos proporcionar un aviso de al menos 30 días antes de que entren en vigencia los nuevos términos.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Terminación</h2>
              <p className="text-gray-600 mb-4">
                Podemos terminar o suspender tu acceso inmediatamente, sin previo aviso o responsabilidad, por cualquier razón, incluyendo, sin limitación, si violas los Términos de Uso.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Ley Aplicable</h2>
              <p className="text-gray-600 mb-4">
                Estos Términos de Uso se rigen e interpretan de acuerdo con las leyes de Francia, sin tener en cuenta sus principios de conflicto de leyes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contáctenos</h2>
              <p className="text-gray-600 mb-2">Si tienes preguntas sobre estos Términos de Uso, contáctanos:</p>
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
              <Link href="/es/privacy-policy" className="hover:text-white transition-colors">Política de Privacidad</Link>
              <Link href="/es/terms-of-use" className="text-white font-medium">Términos de Uso</Link>
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
