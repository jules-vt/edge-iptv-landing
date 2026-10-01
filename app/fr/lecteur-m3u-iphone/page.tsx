import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('m3u', 'fr');

export default function LecteurM3uIphoneFR() {
  return <LandingPage id="m3u" lang="fr" />;
}
