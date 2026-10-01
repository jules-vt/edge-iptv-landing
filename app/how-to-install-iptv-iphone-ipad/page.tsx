import { InstallGuide, installGuideMetadata } from '@/components/articles/install-guide';

export const metadata = installGuideMetadata('en');

export default function InstallGuideEN() {
  return <InstallGuide lang="en" />;
}
