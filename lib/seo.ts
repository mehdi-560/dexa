// dexent/lib/seo.ts
// Small helper to build consistent canonical URLs. Every dynamic page uses this
// so each page is self-canonical (prevents "Duplicate without user-selected
// canonical" errors on the state-page matrix).

import { SITE } from "./constants";

export function canonical(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.domain}${clean}`;
}
