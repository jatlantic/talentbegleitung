import type { Metadata } from 'next';
import ImprintContent from './content';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return <ImprintContent />;
}
