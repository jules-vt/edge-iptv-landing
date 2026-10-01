import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('m3u', 'ar');

export default function M3uPlayerIphoneAR() {
  return <LandingPage id="m3u" lang="ar" />;
}
