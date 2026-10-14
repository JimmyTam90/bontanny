import AffiliateLink from './AffiliateLink';
import { resolveDestination } from '@/lib/affiliate';

export default function StickyCta() {
  const all = resolveDestination({ collectionKey: 'all-products' });
  if (!all.url) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-700 bg-ink/95 px-4 pt-3 backdrop-blur md:hidden" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
      <AffiliateLink
        href={all.url}
        placement="mobile-sticky"
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand px-4 text-sm font-bold text-slate-950 active:scale-95"
      >
        Explore Bontanny Devices
      </AffiliateLink>
    </div>
  );
}
