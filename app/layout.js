import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import { CANONICAL_BASE_URL, SITE_ORIGIN, LOGO, BRAND_NAME } from '@/lib/config';

export const metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: 'Bontanny Red Light Therapy Panels, Belts & Portable Devices | PrimeGearLab',
  description:
    'Browse Bontanny red light therapy panels, belts and portable devices by collection, with a short buying checklist and clear affiliate disclosure.',
  alternates: { canonical: CANONICAL_BASE_URL },
  openGraph: {
    type: 'website',
    url: CANONICAL_BASE_URL,
    siteName: BRAND_NAME,
    title: 'Bontanny Red Light Therapy Panels, Belts & Portable Devices',
    description: 'Browse Bontanny red light therapy collections and what to check before you buy.',
    images: [{ url: LOGO.absoluteUrl, width: LOGO.width, height: LOGO.height, alt: LOGO.alt }],
  },
  robots: { index: true, follow: true },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0f172a' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://bontanny.com" />
        <link rel="dns-prefetch" href="https://bontanny.com" />
      </head>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
