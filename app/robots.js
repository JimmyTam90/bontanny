import { CANONICAL_BASE_URL } from '@/lib/config';

export default function robots() {
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${CANONICAL_BASE_URL}/sitemap.xml` };
}
