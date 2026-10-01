import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('ipad', 'fr');

export default function LecteurIptvIpadFR() {
  return <LandingPage id="ipad" lang="fr" />;
}
