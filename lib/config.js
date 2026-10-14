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
