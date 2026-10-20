import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('smarters', 'de');

export default function SmartersAlternativeDE() {
  return <LandingPage id="smarters" lang="de" />;
}
