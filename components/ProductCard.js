import AffiliateLink from './AffiliateLink';
import { resolveDestination } from '@/lib/affiliate';

// DOM order is the mobile order: IMAGE -> TITLE -> DESCRIPTION/SPECS -> CTA. No CSS `order`, no overlays.
export default function ProductCard({ item }) {
  const dest = resolveDestination({ collectionKey: item.key });
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50">
      <div className="product-card__image relative aspect-[4/3] w-full bg-gradient-to-br from-slate-800 to-slate-900" aria-hidden="true">
        {/* No verified merchant image available: neutral placeholder, not a product photo. */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-brand-light">
          <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
          </svg>
          <span className="text-xs uppercase tracking-widest text-slate-400">Collection</span>
        </div>
      </div>
      <h3 className="px-5 pt-5 text-lg font-bold leading-snug text-white">{item.name}</h3>
      <div className="px-5 pt-2">
        <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
        <dl className="mt-4 space-y-2 border-t border-slate-700 pt-4 text-sm">
          {item.specs.map((s) => (
            <div key={s.label} className="grid grid-cols-[6.5rem_1fr] gap-3">
              <dt className="text-slate-400">{s.label}</dt>
              <dd className="text-slate-200">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-auto p-5 pt-6">
        <AffiliateLink
          href={dest.url}
          placement={`card-${item.key}`}
          ariaLabel={`${item.cta} on Bontanny (opens in a new tab)`}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand px-4 text-center text-sm font-bold text-slate-950 transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
        >
          {item.cta}
        </AffiliateLink>
      </div>
    </article>
  );
}
