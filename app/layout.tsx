import './globals.css'
import {Metadata, Viewport} from "next";
import {Geist, Geist_Mono} from "next/font/google";

const geistSans = Geist({subsets: ["latin"], variable: "--font-geist-sans"});
const geistMono = Geist_Mono({subsets: ["latin"], variable: "--font-geist-mono"});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cijug.net"),
  title: "Central Iowa Java Users Group (CIJUG)",
  description: "Monthly meetups in Central Iowa for Java, JVM, and software engineering enthusiasts.",
  openGraph: {
    title: "Central Iowa Java Users Group (CIJUG)",
    description: "Monthly meetups in Central Iowa for Java, JVM, and software engineering enthusiasts.",
    url: "/",
    siteName: "CIJUG",
    images: [{ url: "/logos/cijug.png", alt: "CIJUG logo" }],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
  },
  referrer: "strict-origin",
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
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';"
      />
    </head>
    <body>{children}</body>
    </html>
  )
}
