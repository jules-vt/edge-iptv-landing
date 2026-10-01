import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('m3u', 'de');

export default function M3uPlayerIphoneDE() {
  return <LandingPage id="m3u" lang="de" />;
}
