import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('smarters', 'en');

export default function SmartersAlternativeEN() {
  return <LandingPage id="smarters" lang="en" />;
}
