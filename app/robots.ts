import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

// Vercel already sends X-Robots-Tag: noindex on preview deployments, and Next's
// built-in not-found page carries its own noindex — so nothing here needs to be
// disallowed. A crawler has to be able to fetch a page to see a noindex tag,
// so blocking those paths here would make the exclusion weaker, not stronger.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
