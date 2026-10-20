import { LandingPage, landingMetadata } from '@/components/landing-page';

export const metadata = landingMetadata('tivimate', 'de');

export default function TivimateIphoneDE() {
  return <LandingPage id="tivimate" lang="de" />;
}
