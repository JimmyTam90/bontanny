import ProductCard from '@/components/ProductCard';
import AffiliateLink from '@/components/AffiliateLink';
import { resolveDestination } from '@/lib/affiliate';
import { COLLECTIONS, CHECKLIST, FAQ } from '@/lib/manifest';

const btn =
  'inline-flex min-h-[48px] items-center justify-center rounded-lg bg-brand px-6 text-sm font-bold text-slate-950 transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95';

export default function Home() {
  const all = resolveDestination({ collectionKey: 'all-products' });

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
            <a href="#collections" className="text-sm font-semibold text-slate-200 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-light">
              Browse collections below
            </a>
          </div>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-400">
            This website may contain affiliate links. We may earn a commission when you purchase through eligible links, at no additional cost to you.
          </p>
        </div>

        <aside aria-labelledby="quick-title" className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
          <h2 id="quick-title" className="text-lg font-bold text-white">Shop by format</h2>
          <ul className="mt-4 divide-y divide-slate-700">
            {COLLECTIONS.map((c) => {
              const d = resolveDestination({ collectionKey: c.key });
              return (
                <li key={c.id}>
                  <AffiliateLink
                    href={d.url}
                    placement={`hero-quick-${c.key}`}
                    className="flex min-h-[52px] items-center justify-between gap-4 py-3 text-sm font-semibold text-slate-100 transition hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-light"
                  >
                    <span>{c.name}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </AffiliateLink>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs text-slate-400">Links open the Bontanny website in a new tab.</p>
        </aside>
      </section>

      <section id="collections" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Bontanny Collections</h2>
        <p className="mt-2 max-w-2xl text-slate-300">Four ways to browse. Specs differ by model, so confirm the details on each product page.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {COLLECTIONS.map((c) => (
            <ProductCard key={c.id} item={c} />
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
