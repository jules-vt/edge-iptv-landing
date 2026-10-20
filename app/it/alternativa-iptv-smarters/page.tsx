import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('smarters', 'it');

export default function SmartersAlternativeIT() {
  return <LandingPage id="smarters" lang="it" />;
}
