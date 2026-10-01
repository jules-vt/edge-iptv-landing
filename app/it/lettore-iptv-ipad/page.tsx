import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('ipad', 'it');

export default function LettoreIptvIpadIT() {
  return <LandingPage id="ipad" lang="it" />;
}
