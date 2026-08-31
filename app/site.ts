/**
 * The one canonical origin for this site.
 *
 * Custom domain since 2026-08-31; the apex is canonical and `www` redirects to
 * it. Vercel still serves the deployment on `casey-ios-site.vercel.app` and on
 * the `*-git-main-*` / `*-projects.vercel.app` aliases — those cannot be removed
 * from a project, so the canonical built from this constant is what tells search
 * engines the apex is home. It also consolidates `?utm_source=…` variants.
 *
 * Anything that hardcodes a site URL must come through here.
 */
export const SITE_URL = "https://caseyturczynski.com";

export const SITE_NAME = "Casey Turczynski — Senior iOS Consultant";

export const SITE_DESCRIPTION =
  "Senior iOS consultant specializing in startup MVPs, SwiftUI modernization, mobile architecture, and App Store launches.";
