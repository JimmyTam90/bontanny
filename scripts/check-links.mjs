// Offline audit: validates every mapped affiliate URL (syntax, host, single ref param).
// Does NOT prove the pages exist or that commissions attribute.
import { allDestinationsForAudit, validateAffiliateUrl } from '../lib/affiliate.js';

const { DEFAULT_URL, COLLECTION_URLS } = allDestinationsForAudit();
let failed = 0;
for (const [k, v] of Object.entries({ default: DEFAULT_URL, ...COLLECTION_URLS })) {
  const ok = validateAffiliateUrl(v);
  if (!ok) failed++;
  console.log(`${ok ? 'URL_SYNTAX_VALID' : 'INVALID_INPUT'}  ${k}  ${v}`);
}
console.log('Runtime destination check: NOT_EXECUTED (offline script)');
process.exit(failed ? 1 : 0);
