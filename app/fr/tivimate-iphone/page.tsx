import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('tivimate', 'fr');

export default function TivimateIphoneFR() {
  return <LandingPage id="tivimate" lang="fr" />;
}
