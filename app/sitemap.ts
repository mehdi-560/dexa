// dexent/app/sitemap.ts
// Auto-generated sitemap. Pulls from the same data as the pages, so it stays
// in sync as you add states or blog posts — every canonical URL, no manual edits.

import type { MetadataRoute } from "next";
import { SITE, EQUIPMENT } from "@/lib/constants";
import { LIVE_STATE_SLUGS } from "@/content/states";
import { getAllPostSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  const now = new Date();

  // Static, high-priority pages
  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/dispatch", priority: 0.9, freq: "weekly" },
    { path: "/pricing", priority: 0.9, freq: "monthly" },
    { path: "/new-mc-program", priority: 0.8, freq: "monthly" },
    { path: "/roll-with-dexent", priority: 0.7, freq: "monthly" },
    { path: "/reviews", priority: 0.6, freq: "monthly" },
    { path: "/about", priority: 0.5, freq: "yearly" },
    { path: "/contact", priority: 0.7, freq: "yearly" },
    { path: "/resources", priority: 0.7, freq: "weekly" },
    { path: "/tools", priority: 0.6, freq: "monthly" },
    { path: "/tools/cost-per-mile", priority: 0.6, freq: "monthly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  // Equipment hubs
  for (const e of EQUIPMENT) {
    entries.push({
      url: `${base}/dispatch/${e.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
    // Equipment × live state pages
    for (const s of LIVE_STATE_SLUGS) {
      entries.push({
        url: `${base}/dispatch/${e.slug}/${s}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  // Blog / resource posts
  for (const slug of getAllPostSlugs()) {
    entries.push({
      url: `${base}/resources/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
