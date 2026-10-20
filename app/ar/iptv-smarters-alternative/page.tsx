import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('smarters', 'ar');

export default function SmartersAlternativeAR() {
  return <LandingPage id="smarters" lang="ar" />;
}
