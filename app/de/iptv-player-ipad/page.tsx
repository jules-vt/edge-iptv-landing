import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('ipad', 'de');

export default function IptvPlayerIpadDE() {
  return <LandingPage id="ipad" lang="de" />;
}
