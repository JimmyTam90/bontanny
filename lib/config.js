export const BRAND_NAME = 'PrimeGearLab';
export const MERCHANT_NAME = 'Bontanny';
export const CONTACT_EMAIL = 'daniaengracia26377@gmail.com';

export const SITE_ORIGIN = 'https://primegearlab.com';
export const BASE_PATH = '/bontanny';
export const CANONICAL_BASE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

// Single authoritative logo config (Header + Footer + metadata).
// File lives at public/logo.png; basePath makes it public at /bontanny/logo.png.
export const LOGO = {
  src: `${BASE_PATH}/logo.png`,
  absoluteUrl: `${CANONICAL_BASE_URL}/logo.png`,
  width: 1254,
  height: 1254,
  alt: BRAND_NAME,
};

// Prefix any public/ file with the basePath. Metadata icon URLs are NOT auto-prefixed by Next.js,
// so every icon URL goes through asset(). Files live in public/ and are served at /bontanny/<file>.
export const asset = (path) => `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;

export const ICONS = {
  ico: asset('/favicon.ico'),
  png32: asset('/favicon-32.png'),
  png: asset('/favicon.png'),
  apple: asset('/apple-touch-icon.png'),
};
