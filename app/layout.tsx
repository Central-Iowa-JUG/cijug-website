import './globals.css'
import {Metadata, Viewport} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {DevConsole} from "../components/DevConsole";
import {EMAIL, MEETUP_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, socials} from "../lib/site";

const geistSans = Geist({subsets: ["latin"], variable: "--font-geist-sans"});
const geistMono = Geist_Mono({subsets: ["latin"], variable: "--font-geist-mono"});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} (CIJUG)`,
    template: "%s | CIJUG",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  // The share image is app/opengraph-image.png (1200x630), picked up by file convention.
  openGraph: {
    title: `${SITE_NAME} (CIJUG)`,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "CIJUG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cijug",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  referrer: "strict-origin",
};

// Structured data for search engines, built only from facts the site already states.
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "CIJUG",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/cijug-512.png`,
  email: EMAIL,
  description: SITE_DESCRIPTION,
  areaServed: ["Des Moines, Iowa", "Central Iowa"],
  sameAs: [MEETUP_URL, ...socials.map((s) => s.url)],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    <head>
      <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self';"
      />
    </head>
    <body>
      {children}
      <DevConsole/>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(organization).replace(/</g, "\\u003c")}}
      />
    </body>
    </html>
  )
}
