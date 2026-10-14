import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { CANONICAL_BASE_URL } from '@/lib/config';

export const metadata = {
  title: 'Privacy Policy | PrimeGearLab',
  alternates: { canonical: `${CANONICAL_BASE_URL}/privacy` },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>PrimeGearLab operates this website as an independent affiliate publisher. This page describes how the site behaves today.</p>
      <h2>Information we collect</h2>
      <p>This website does not ask you to create an account and does not collect personal information through forms. If you email us, we receive the information you choose to send.</p>
      <h2>Analytics and cookies</h2>
      <p>No analytics, advertising pixels or tracking scripts are configured on this site at the time of writing. If that changes, this policy will be updated and consent will be requested where required.</p>
      <h2>Third-party websites</h2>
      <p>Links to bontanny.com open the merchant&apos;s website, which has its own privacy policy and may set cookies, including cookies used to attribute referrals. We do not control those practices.</p>
      <h2>Contact</h2>
      <p>Questions about this policy: <Link href="/contact">Contact</Link>.</p>
    </LegalPage>
  );
}
