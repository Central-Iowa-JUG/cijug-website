import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "CIJUG",
  description: "Central Iowa Java Users Group",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: "/cijug-website/favicon.ico", sizes: "any" },
      { url: "/cijug-website/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/cijug-website/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
