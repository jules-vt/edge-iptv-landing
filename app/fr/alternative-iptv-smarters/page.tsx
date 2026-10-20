import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('smarters', 'fr');

export default function SmartersAlternativeFR() {
  return <LandingPage id="smarters" lang="fr" />;
}
