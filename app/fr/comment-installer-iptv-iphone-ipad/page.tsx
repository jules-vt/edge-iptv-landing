import { InstallGuide, installGuideMetadata } from '@/components/articles/install-guide';

export const metadata = installGuideMetadata('fr');

export default function InstallGuideFR() {
  return <InstallGuide lang="fr" />;
}
