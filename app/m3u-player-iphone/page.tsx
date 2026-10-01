import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('m3u', 'en');

export default function M3uPlayerIphoneEN() {
  return <LandingPage id="m3u" lang="en" />;
}
