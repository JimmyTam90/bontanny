/**
 * HUB_SPOKE_PROXY: the Hub (primegearlab.com) rewrites /bontanny and /bontanny/:path*
 * to https://bontanny-spoke.vercel.app/bontanny/... so this Spoke must serve EVERYTHING
 * (pages, /_next/static, public files) under /bontanny. basePath does exactly that.
 * Consequence: public/logo.png is served at /bontanny/logo.png.
 */
const BASE_PATH = '/bontanny';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: BASE_PATH,
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Optimizer is off, so no image is proxied or validated at build time.
    unoptimized: true,
    // Kept explicit for the merchant's known hosts only (no wildcard host).
    remotePatterns: [
      { protocol: 'https', hostname: 'bontanny.com', pathname: '/cdn/shop/**' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
    ],
  },
  async redirects() {
    // Direct visits to the bare Spoke origin land on the app.
    return [{ source: '/', destination: BASE_PATH, basePath: false, permanent: false }];
  },
};

export default nextConfig;
