import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('tivimate', 'en');

export default function TivimateIphoneEN() {
  return <LandingPage id="tivimate" lang="en" />;
}
