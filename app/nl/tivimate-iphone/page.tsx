import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('tivimate', 'nl');

export default function LandingNL() {
  return <LandingPage id="tivimate" lang="nl" />;
}
