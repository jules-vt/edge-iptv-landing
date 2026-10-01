import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('ipad', 'ar');

export default function IptvPlayerIpadAR() {
  return <LandingPage id="ipad" lang="ar" />;
}
