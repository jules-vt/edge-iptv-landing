import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('smarters', 'nl');

export default function LandingNL() {
  return <LandingPage id="smarters" lang="nl" />;
}
