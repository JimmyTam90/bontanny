import Image from 'next/image';
import AffiliateLink from './AffiliateLink';
import { resolveDestination } from '@/lib/affiliate';

// DOM order is the mobile order: IMAGE -> TITLE -> DESCRIPTION/SPECS -> CTA. No CSS `order`, no overlays.
export default function ProductCard({ item, priority = false }) {
  const dest = resolveDestination({ productKey: item.key });
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50">
      <div className="product-card__image relative aspect-[4/3] w-full bg-white">
        <Image
          src={item.image}
          alt={item.title}
          fill
          unoptimized
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-3"
        />
      </div>
      <h3 className="px-5 pt-5 text-lg font-bold leading-snug text-white">{item.name}</h3>
      <div className="px-5 pt-2">
        <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
        <dl className="mt-4 space-y-2 border-t border-slate-700 pt-4 text-sm">
          {item.specs.map((s) => (
            <div key={s.label} className="grid grid-cols-[6rem_1fr] gap-3">
              <dt className="text-slate-400">{s.label}</dt>
              <dd className="text-slate-200">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-auto p-5 pt-6">
        <AffiliateLink
          href={dest.url}
          placement={`card-${item.id}`}
          ariaLabel={`${item.cta} on Bontanny (opens in a new tab)`}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand px-4 text-center text-sm font-bold text-slate-950 transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
        >
          {item.cta}
        </AffiliateLink>
      </div>
    </article>
  );
}
