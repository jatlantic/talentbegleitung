import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.talentbegleitung.com'),
  title: {
    default: 'Talentbegleitung | Marie-Louise Schäfer',
    template: '%s | Talentbegleitung',
  },
  description:
    'Talentbegleitung für Führungspersönlichkeiten, Teams und Organisationen: Executive Coaching, Teamentwicklung, Alps Days, Trainings und Organisationsimpulse.',
  openGraph: {
    title: 'Talentbegleitung | Marie-Louise Schäfer',
    description:
      'Sie im Mittelpunkt. Führung stärken. Wandel gestalten. Talentbegleitung für Führungspersönlichkeiten, Teams und Organisationen.',
    url: 'https://www.talentbegleitung.com',
    siteName: 'Talentbegleitung',
    locale: 'de_DE',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#89A3B0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
