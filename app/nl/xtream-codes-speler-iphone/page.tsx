import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('xtream', 'nl');

export default function LandingNL() {
  return <LandingPage id="xtream" lang="nl" />;
}
