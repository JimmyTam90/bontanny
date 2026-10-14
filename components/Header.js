import Logo from './Logo';
import AffiliateLink from './AffiliateLink';
import { resolveDestination } from '@/lib/affiliate';

const NAV = [
  { href: '#models', label: 'Models' },
  { href: '#guide', label: 'Buying Guide' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const all = resolveDestination({ collectionKey: 'all-products' });
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Logo priority />
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-light">
              {n.label}
            </a>
          ))}
        </nav>
        <AffiliateLink
          href={all.url}
          placement="header"
          className="inline-flex min-h-[44px] items-center rounded-lg bg-brand px-4 text-sm font-bold text-slate-950 transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
        >
          Explore Bontanny
        </AffiliateLink>
      </div>
    </header>
  );
}
