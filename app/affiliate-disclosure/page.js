import LegalPage from '@/components/LegalPage';
import { CANONICAL_BASE_URL } from '@/lib/config';

export const metadata = {
  title: 'Affiliate Disclosure | PrimeGearLab',
  alternates: { canonical: `${CANONICAL_BASE_URL}/affiliate-disclosure` },
};

export default function Page() {
  return (
    <LegalPage title="Affiliate Disclosure">
      <p>This website contains affiliate links. We may earn a commission when you purchase through eligible links, at no additional cost to you.</p>
      <p>PrimeGearLab is an independent publisher and is not the merchant. A link does not mean that every purchase earns a commission, and commission eligibility is determined by the merchant&apos;s affiliate program rules.</p>
      <p>Prices, availability and terms are set by the merchant; always confirm them on the merchant&apos;s website.</p>
    </LegalPage>
  );
}
