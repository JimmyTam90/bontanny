import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import AffiliateLink from '@/components/AffiliateLink';
import { resolveDestination } from '@/lib/affiliate';
import { PRODUCTS, CHECKLIST, FAQ, OBSERVED_ON } from '@/lib/manifest';

const btn =
  'inline-flex min-h-[48px] items-center justify-center rounded-lg bg-brand px-6 text-sm font-bold text-slate-950 transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95';

export default function Home() {
  const all = resolveDestination({ collectionKey: 'all-products' });
  const featured = PRODUCTS[0];
  const featuredDest = resolveDestination({ productKey: featured.key });

  return (
    <main>
      {/* HERO: 1.05fr / 0.95fr on desktop, content-height driven, vertically centered, compact padding */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Red light therapy guide</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Find the Right Bontanny Red Light Therapy Device
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Compare panels, belts and portable devices by format, then check wavelengths, power and warranty on the Bontanny website before you buy.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <AffiliateLink href={all.url} placement="hero" className={btn}>Explore Bontanny Devices</AffiliateLink>
            <a href="#models" className="text-sm font-semibold text-slate-200 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-light">
              Browse models below
            </a>
          </div>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-400">
            This website may contain affiliate links. We may earn a commission when you purchase through eligible links, at no additional cost to you.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50">
          <div className="relative aspect-[4/3] w-full bg-white">
            <Image src={featured.heroImage} alt={featured.title} fill unoptimized priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain p-4" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-light">Featured model</p>
              <p className="mt-1 font-bold text-white">{featured.name}</p>
            </div>
            <AffiliateLink href={featuredDest.url} placement="hero-featured" className="inline-flex min-h-[44px] items-center rounded-lg border border-brand px-4 text-sm font-bold text-brand-light transition hover:bg-brand hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-light">
              View on Bontanny
            </AffiliateLink>
          </div>
        </div>
      </section>

      <section id="models" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Bontanny Models</h2>
        <p className="mt-2 max-w-2xl text-slate-300">Six models from the official Bontanny store. "From" prices were read on {OBSERVED_ON} and change often, so confirm details on each product page.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} item={p} priority={i < 3} />
          ))}
        </div>
      </section>

      <section id="guide" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">What to Check Before You Buy</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {CHECKLIST.map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-700 bg-slate-800/40 p-5">
              <h3 className="font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-slate-400">
          General information only, not medical advice. Consult a qualified healthcare professional before starting any light therapy routine.
        </p>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-slate-700 rounded-xl border border-slate-700 bg-slate-800/40">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-light">
                {f.q}
                <span aria-hidden="true" className="text-brand-light transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6">
        <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to Compare Models?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">See current models, pricing and warranty terms directly on the Bontanny website.</p>
          <div className="mt-6">
            <AffiliateLink href={all.url} placement="final-cta" className={btn}>Explore Bontanny Devices</AffiliateLink>
          </div>
        </div>
      </section>
    </main>
  );
}
