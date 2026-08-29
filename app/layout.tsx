import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadataBase lets every relative URL below resolve to the canonical origin —
// without it, Open Graph images resolve against whichever *.vercel.app host the
// crawler happened to hit. Icons and the manifest are picked up by convention
// from app/icon.png, app/apple-icon.png, app/favicon.ico and app/manifest.ts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Casey Turczynski | Senior iOS Consultant",
  description: SITE_DESCRIPTION,
  applicationName: "Casey Turczynski",
  authors: [{ name: "Casey Turczynski", url: SITE_URL }],
  creator: "Casey Turczynski",
  publisher: "Casey Turczynski",
  keywords: [
    "iOS consultant",
    "SwiftUI consultant",
    "iOS developer for hire",
    "startup MVP development",
    "SwiftUI migration",
    "UIKit to SwiftUI",
    "Objective-C modernization",
    "mobile architecture consulting",
    "fractional iOS lead",
    "App Store launch",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Casey Turczynski",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Casey Turczynski — Senior iOS Consultant. SwiftUI, startup MVPs, mobile architecture.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
