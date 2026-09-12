// dexent/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  async redirects() {
    return [
      // ---- www -> non-www (canonical host consolidation) ----
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dexentlogistics.com" }],
        destination: "https://dexentlogistics.com/:path*",
        permanent: true,
      },

      // ---- Old service pages -> new dispatch pages ----
      { source: "/services", destination: "/dispatch", permanent: true },
      { source: "/services/flatbed-dispatch", destination: "/dispatch/flatbed", permanent: true },
      { source: "/services/reefer-dispatch", destination: "/dispatch/reefer", permanent: true },
      { source: "/services/dry-van-dispatch", destination: "/dispatch/dry-van", permanent: true },
      { source: "/services/box-truck-dispatch", destination: "/dispatch", permanent: true },
      { source: "/services/owner-operator-dispatch", destination: "/dispatch", permanent: true },
      { source: "/services/fleet-management", destination: "/dispatch", permanent: true },
      { source: "/services/:slug*", destination: "/dispatch", permanent: true },

      // ---- Old conversion / misc pages ----
      { source: "/get-started", destination: "/contact", permanent: true },
      { source: "/why-dexent", destination: "/about", permanent: true },

      // ---- Old partner subpages -> the real /partners page (which now exists) ----
      { source: "/partners/:slug*", destination: "/partners", permanent: true },

      // ---- Old blog -> new resources ----
      { source: "/blog/how-to-get-top-rates-as-owner-operator", destination: "/resources/how-much-can-an-owner-operator-make", permanent: true },
      { source: "/blog/fmcsa-compliance-checklist-2025", destination: "/resources/how-to-get-mc-authority", permanent: true },
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/blog/:slug*", destination: "/resources", permanent: true },
    ];
  },

  // Allow SVG (your blog cards) to render through next/image safely.
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;