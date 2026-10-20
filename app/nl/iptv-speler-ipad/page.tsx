import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('ipad', 'nl');

export default function LandingNL() {
  return <LandingPage id="ipad" lang="nl" />;
}
