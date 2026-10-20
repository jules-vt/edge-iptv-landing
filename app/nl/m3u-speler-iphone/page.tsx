import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('m3u', 'nl');

export default function LandingNL() {
  return <LandingPage id="m3u" lang="nl" />;
}
