import { CANONICAL_BASE_URL } from '@/lib/config';

export default function sitemap() {
  const now = new Date();
  return ['', '/privacy', '/terms', '/affiliate-disclosure', '/contact'].map((p) => ({
    url: `${CANONICAL_BASE_URL}${p}`,
    lastModified: now,
  }));
}
