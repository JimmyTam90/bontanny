import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import { CANONICAL_BASE_URL, SITE_ORIGIN, ICONS, BRAND_NAME } from '@/lib/config';
import { PRODUCTS } from '@/lib/manifest';

// Share image = the featured model shown in the Hero (PRODUCTS[0]), as an absolute Shopify CDN URL.
const SHARE = PRODUCTS[0];
const SHARE_IMAGE = SHARE.heroImage;
const SHARE_TITLE = 'Bontanny Red Light Therapy Panels, Belts & Portable Devices';
const SHARE_DESCRIPTION = 'Browse Bontanny red light therapy collections and what to check before you buy.';

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
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [{ url: SHARE_IMAGE, alt: SHARE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
  // Icon URLs are explicit and include the basePath (metadata icon strings are not auto-prefixed).
  icons: {
    icon: [
      { url: ICONS.ico, sizes: 'any' },
      { url: ICONS.png, type: 'image/png' },
    ],
    shortcut: ICONS.ico,
    apple: ICONS.apple,
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
