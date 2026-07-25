import type { Metadata } from 'next';
import PrivacyContent from './content';

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return <PrivacyContent />;
}
