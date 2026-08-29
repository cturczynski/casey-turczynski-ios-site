/**
 * The one canonical origin for this site.
 *
 * Vercel also serves this deployment on `casey-ios-site-git-main-*` and
 * `casey-ios-site-*-projects.vercel.app`, but both sit behind deployment
 * protection and answer with `X-Robots-Tag: noindex` (verified 2026-08-27), so
 * they were never competing duplicates. What the canonical built from this
 * constant actually earns is consolidation of `?utm_source=…` and other
 * query-string variants of the real URL.
 *
 * Anything that hardcodes a site URL must come through here.
 */
export const SITE_URL = "https://casey-ios-site.vercel.app";

export const SITE_NAME = "Casey Turczynski — Senior iOS Consultant";

export const SITE_DESCRIPTION =
  "Senior iOS consultant specializing in startup MVPs, SwiftUI modernization, mobile architecture, and App Store launches.";
