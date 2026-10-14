import LegalPage from '@/components/LegalPage';
import { CANONICAL_BASE_URL } from '@/lib/config';

export const metadata = {
  title: 'Contact | PrimeGearLab',
  alternates: { canonical: `${CANONICAL_BASE_URL}/contact` },
};

export default function Page() {
  return (
    <LegalPage title="Contact">
      <p>For questions about this website, email <a href="mailto:daniaengracia26377@gmail.com">daniaengracia26377@gmail.com</a>.</p>
      <p>We cannot help with orders, shipping, warranty or returns. Please contact Bontanny directly for those.</p>
    </LegalPage>
  );
}
