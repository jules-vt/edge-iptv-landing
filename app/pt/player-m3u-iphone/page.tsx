import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('m3u', 'pt');

export default function PlayerM3uIphonePT() {
  return <LandingPage id="m3u" lang="pt" />;
}
