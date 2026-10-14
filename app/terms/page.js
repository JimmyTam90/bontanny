import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { CANONICAL_BASE_URL } from '@/lib/config';

export const metadata = {
  title: 'Terms of Service | PrimeGearLab',
  alternates: { canonical: `${CANONICAL_BASE_URL}/terms` },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Service">
      <p>By using this website you agree to these terms.</p>
      <h2>Informational purpose</h2>
      <p>Content is provided for general information only and is not medical, legal or financial advice. Nothing here is a guarantee of results.</p>
      <h2>Independent publisher</h2>
      <p>PrimeGearLab is not the merchant. Products, prices, availability, shipping, warranties and returns are controlled solely by Bontanny on its own website.</p>
      <h2>Third-party links</h2>
      <p>We are not responsible for the content or practices of third-party websites.</p>
      <h2>Changes</h2>
      <p>We may update this website and these terms at any time. See also the <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.</p>
    </LegalPage>
  );
}
