import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layers, PictureInPicture2, Cast, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Lang } from '@/lib/blog-posts';

/**
 * Dedicated iPad section.
 *
 * Tablets convert better than any other device on this site — 14.93% CTR
 * against 8.18% on mobile and 1.21% on desktop — on barely 268 impressions,
 * because almost nothing here was written for them. Every claim below is
 * checked against the app: the layout really does adapt on a regular size
 * class, and Picture in Picture, AirPlay and Chromecast all exist.
 */

const COPY: Record<
  Lang,
  {
    badge: string;
    title: string;
    intro: string;
    points: { title: string; body: string }[];
    devices: string;
    link: string;
    href: string;
    alt: string;
    caption: string;
  }
> = {
  en: {
    badge: 'iPhone & iPad',
    title: 'Built for the iPad screen, not just stretched onto it',
    intro:
      'EDGE IPTV is a universal app: one subscription covers your iPhone and your iPad. On the larger screen the layout changes rather than scaling up: posters are drawn at nearly twice the size, and a show sits next to its episode list instead of below it.',
    points: [
      {
        title: 'A TV guide with room to breathe',
        body: 'The EPG grid shows far more of the schedule at once on an iPad, so you can scan the evening without scrolling channel by channel.',
      },
      {
        title: 'Picture in Picture',
        body: 'Keep a channel playing in a corner while you answer a mail or look something up, on iPad and iPhone alike.',
      },
      {
        title: 'Send it to the TV',
        body: 'Cast to a Chromecast or AirPlay to an Apple TV straight from the player, without leaving the app.',
      },
    ],
    devices:
      'Requires iPadOS 17 or later: iPad Pro (2nd generation), iPad Air (3rd generation), iPad (6th generation) and iPad mini (5th generation) or newer.',
    link: 'How to set up IPTV on your iPad',
    href: '/how-to-install-iptv-iphone-ipad',
    alt: 'The EDGE IPTV guide on iPad, showing nine channels and four hours of programming at once',
    caption: 'The TV guide on an iPad: nine channels and four hours on screen, without scrolling.',
  },
  fr: {
    badge: 'iPhone & iPad',
    title: "Pensé pour l'écran de l'iPad, pas seulement étiré dessus",
    intro:
      "EDGE IPTV est une app universelle : un seul abonnement couvre votre iPhone et votre iPad. Sur le grand écran, la mise en page change au lieu de s'agrandir : les affiches sont dessinées presque deux fois plus grandes, et une série s'affiche à côté de sa liste d'épisodes plutôt qu'en dessous.",
    points: [
      {
        title: 'Un guide TV qui respire',
        body: "La grille EPG affiche bien plus de programmes d'un coup sur iPad : vous parcourez la soirée sans dérouler chaîne par chaîne.",
      },
      {
        title: 'Picture in Picture',
        body: 'Gardez une chaîne dans un coin de l’écran pendant que vous répondez à un message, sur iPad comme sur iPhone.',
      },
      {
        title: 'Envoyez-le sur la TV',
        body: "Diffusez vers un Chromecast ou en AirPlay sur une Apple TV directement depuis le lecteur, sans quitter l'app.",
      },
    ],
    devices:
      'Nécessite iPadOS 17 ou version ultérieure : iPad Pro (2ᵉ génération), iPad Air (3ᵉ génération), iPad (6ᵉ génération) et iPad mini (5ᵉ génération) ou plus récents.',
    link: "Comment configurer l'IPTV sur votre iPad",
    href: '/fr/comment-installer-iptv-iphone-ipad',
    alt: 'Le guide EDGE IPTV sur iPad, avec neuf chaînes et quatre heures de programmes affichées en même temps',
    caption: 'Le guide TV sur iPad : neuf chaînes et quatre heures à l’écran, sans défilement.',
  },
  es: {
    badge: 'iPhone y iPad',
    title: 'Diseñado para la pantalla del iPad, no solo estirado en ella',
    intro:
      'EDGE IPTV es una app universal: una sola suscripción cubre tu iPhone y tu iPad. En la pantalla grande el diseño cambia en lugar de ampliarse: los pósteres se dibujan casi al doble de tamaño y una serie aparece junto a su lista de episodios en vez de debajo.',
    points: [
      {
        title: 'Una guía de TV con espacio',
        body: 'La parrilla EPG muestra mucha más programación de una vez en el iPad, así revisas la noche sin desplazarte canal por canal.',
      },
      {
        title: 'Picture in Picture',
        body: 'Deja un canal en una esquina mientras respondes un mensaje o buscas algo, tanto en iPad como en iPhone.',
      },
      {
        title: 'Envíalo a la TV',
        body: 'Transmite a un Chromecast o por AirPlay a un Apple TV directamente desde el reproductor, sin salir de la app.',
      },
    ],
    devices:
      'Requiere iPadOS 17 o posterior: iPad Pro (2.ª generación), iPad Air (3.ª generación), iPad (6.ª generación) y iPad mini (5.ª generación) o más recientes.',
    link: 'Cómo configurar IPTV en tu iPad',
    href: '/es/como-instalar-iptv-iphone-ipad',
    alt: 'La guía de EDGE IPTV en iPad, mostrando nueve canales y cuatro horas de programación a la vez',
    caption: 'La guía de TV en un iPad: nueve canales y cuatro horas en pantalla, sin desplazarse.',
  },
  pt: {
    badge: 'iPhone e iPad',
    title: 'Feito para a tela do iPad, não apenas esticado nela',
    intro:
      'O EDGE IPTV é um app universal: uma única assinatura cobre seu iPhone e seu iPad. Na tela maior o layout muda em vez de simplesmente aumentar: os pôsteres são desenhados quase no dobro do tamanho, e uma série aparece ao lado da sua lista de episódios em vez de abaixo.',
    points: [
      {
        title: 'Um guia de TV com espaço',
        body: 'A grade do EPG mostra muito mais da programação de uma vez no iPad, então você percorre a noite sem rolar canal por canal.',
      },
      {
        title: 'Picture in Picture',
        body: 'Deixe um canal em um canto enquanto responde uma mensagem ou procura algo, no iPad e no iPhone.',
      },
      {
        title: 'Mande para a TV',
        body: 'Transmita para um Chromecast ou via AirPlay para uma Apple TV direto do player, sem sair do app.',
      },
    ],
    devices:
      'Requer iPadOS 17 ou posterior: iPad Pro (2ª geração), iPad Air (3ª geração), iPad (6ª geração) e iPad mini (5ª geração) ou mais recentes.',
    link: 'Como configurar IPTV no seu iPad',
    href: '/pt/como-instalar-iptv-iphone-ipad',
    alt: 'O guia do EDGE IPTV no iPad, mostrando nove canais e quatro horas de programação ao mesmo tempo',
    caption: 'O guia de TV num iPad: nove canais e quatro horas na tela, sem rolar.',
  },
};

const ICONS = [Layers, PictureInPicture2, Cast];

export function IpadSection({ lang = 'en' }: { lang?: Lang }) {
  const copy = COPY[lang];

  return (
    <section className="border-y border-border/40 bg-secondary/30 py-24">
      <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <Badge variant="secondary" className="mb-4">
            {copy.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">{copy.title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{copy.intro}</p>

          <ul className="mt-8 space-y-5">
            {copy.points.map((point, i) => {
              const Icon = ICONS[i];
              return (
                <li key={point.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold">{point.title}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      {point.body}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 text-sm text-muted-foreground">{copy.devices}</p>

          <Link
            href={copy.href}
            className="mt-5 inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
          >
            {copy.link}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <figure className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 to-purple-500/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
            <Image
              src={`/images/ipad-epg-${lang}.webp`}
              alt={copy.alt}
              width={1400}
              height={1058}
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs text-muted-foreground">
            {copy.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
