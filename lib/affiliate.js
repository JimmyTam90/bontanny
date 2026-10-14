// Central affiliate destination resolver. No component builds affiliate URLs itself.
// Slugs below are copied verbatim from the authoritative project input.

const AFFILIATE_PARAM = 'ref';
const AFFILIATE_ID = 'ekvbgtpg';
const ALLOWED_HOSTS = ['bontanny.com', 'www.bontanny.com'];

const DEFAULT_URL = 'https://bontanny.com/?ref=ekvbgtpg';

const COLLECTION_URLS = {
  'red-light-therapy': 'https://bontanny.com/collections/red-light-therapy?ref=ekvbgtpg',
  'therapy-panels': 'https://bontanny.com/collections/therapy-panels?ref=ekvbgtpg',
  'therapy-belts': 'https://bontanny.com/collections/therapy-belts?ref=ekvbgtpg',
  'portable-devices': 'https://bontanny.com/collections/portable-devices?ref=ekvbgtpg',
  'all-products': DEFAULT_URL,
};

// Product pages are real URLs read from the official bontanny.com homepage (2026-10-14).
// The supplied affiliate parameter (ref=ekvbgtpg) is appended unchanged, as in the project input.
// NOTE: of the supplied collection slugs, /collections/therapy-belts was observed to redirect to the
// merchant homepage (collection not found), so no card or CTA depends on a collection URL.
const P = (slug) => `https://bontanny.com/products/${slug}?ref=ekvbgtpg`;
const PRODUCT_URLS = {
  'bontanny-7-wavelengths-red-light-therapy-panel-pro-max': P('bontanny-7-wavelengths-red-light-therapy-panel-pro-max'),
  'red-light-therapy-panel-bo1500': P('red-light-therapy-panel-bo1500'),
  'bontanny-pro-full-body-red-light-panel': P('bontanny-pro-full-body-red-light-panel'),
  'bontanny-bo-600-red-light-therapy-panel': P('bontanny-bo-600-red-light-therapy-panel'),
  'bontanny-bo-300-red-light-panel': P('bontanny-bo-300-red-light-panel'),
  'bontanny-portable-red-light-therapy-bo-60': P('bontanny-portable-red-light-therapy-bo-60'),
};

export function validateAffiliateUrl(raw) {
  try {
    const u = new URL(raw);
    if (u.protocol !== 'https:') return false;
    if (!ALLOWED_HOSTS.includes(u.hostname)) return false;
    if (u.searchParams.getAll(AFFILIATE_PARAM).length !== 1) return false;
    return u.searchParams.get(AFFILIATE_PARAM) === AFFILIATE_ID;
  } catch {
    return false;
  }
}

/**
 * Priority: exact product -> exact collection -> default (only when explicitly requested).
 * Returns { url, status, source, key }. url is null when nothing valid exists.
 */
export function resolveDestination({ productKey, collectionKey, allowDefault = false } = {}) {
  const attempts = [];
  if (productKey) attempts.push(['product', productKey, PRODUCT_URLS[productKey]]);
  if (collectionKey) attempts.push(['collection', collectionKey, COLLECTION_URLS[collectionKey]]);
  if (allowDefault || (!productKey && !collectionKey)) attempts.push(['default', 'default', DEFAULT_URL]);

  for (const [source, key, url] of attempts) {
    if (!url) continue;
    if (!validateAffiliateUrl(url)) {
      return { url: null, status: 'INVALID_INPUT', source, key };
    }
    return { url, status: 'DESTINATION_NOT_RUNTIME_VERIFIED', source, key };
  }
  return {
    url: null,
    status: 'BLOCKED_MISSING_AFFILIATE_URL',
    source: null,
    key: productKey || collectionKey || null,
  };
}

export function allDestinationsForAudit() {
  return { DEFAULT_URL, COLLECTION_URLS, PRODUCT_URLS };
}
