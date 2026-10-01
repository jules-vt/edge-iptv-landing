import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('m3u', 'it');

export default function LettoreM3uIphoneIT() {
  return <LandingPage id="m3u" lang="it" />;
}
