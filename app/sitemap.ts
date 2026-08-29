import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

// One page. The nav's #services / #about / #case / #contact are fragments of it,
// not separate URLs, and listing fragments in a sitemap is ignored at best.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-08-27"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
