import Link from 'next/link';
import Logo from './Logo';
import { BRAND_NAME } from '@/lib/config';

const LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pb-28 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[auto_1fr] md:items-center">
        <Logo className="h-28 w-28" />
        <div className="md:text-right">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-light">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-slate-400 md:ml-auto">
            Affiliate disclosure: this website contains affiliate links. We may earn a commission when you purchase through eligible links, at no additional cost to you. {BRAND_NAME} is an independent publisher and is not the merchant.
          </p>
          <p className="mt-3 text-xs text-slate-500">&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
