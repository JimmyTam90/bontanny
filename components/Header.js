'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import AffiliateLink from './AffiliateLink';
import { resolveDestination } from '@/lib/affiliate';

// Internal links: next/link adds the /bontanny basePath automatically, so "/" is the Bontanny home
// and "/#models" works from the home page and from the legal pages alike.
const NAV = [
  { href: '/#models', label: 'Models' },
  { href: '/#guide', label: 'Buying Guide' },
  { href: '/#faq', label: 'FAQ' },
];

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light';
const ctaClass =
  'inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand px-4 text-sm font-bold text-slate-950 transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95';

export default function Header() {
  const [open, setOpen] = useState(false);
  const all = resolveDestination({ collectionKey: 'all-products' });

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-2 sm:px-6">
        <Logo priority />

        {/* Right-aligned group: [Navigation Links] [CTA Button] on desktop, [Menu] on mobile */}
        <div className="ml-auto flex items-center gap-6">
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`text-sm font-medium text-slate-300 transition hover:text-white ${focusRing}`}>
                {n.label}
              </Link>
            ))}
          </nav>

          <AffiliateLink href={all.url} placement="header" className={`hidden md:inline-flex ${ctaClass}`}>
            Explore Bontanny
          </AffiliateLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-600 px-3 text-sm font-semibold text-slate-100 md:hidden ${focusRing}`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
            <span>{open ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-slate-700 bg-ink shadow-xl md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            <Link href="/" onClick={close} className={`flex min-h-[48px] items-center border-b border-slate-800 text-base font-semibold text-slate-100 ${focusRing}`}>
              Home
            </Link>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={close} className={`flex min-h-[48px] items-center border-b border-slate-800 text-base font-semibold text-slate-100 ${focusRing}`}>
                {n.label}
              </Link>
            ))}
            <div className="py-4">
              <AffiliateLink href={all.url} placement="mobile-menu" className={`w-full ${ctaClass}`}>
                Explore Bontanny
              </AffiliateLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
