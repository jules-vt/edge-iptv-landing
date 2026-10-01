import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('ipad', 'en');

export default function IptvPlayerIpadEN() {
  return <LandingPage id="ipad" lang="en" />;
}
