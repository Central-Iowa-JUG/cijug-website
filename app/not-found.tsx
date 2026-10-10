import type { Metadata } from "next"
import { MissingPath } from "../components/MissingPath"
import { Logo } from "../components/ui"
import { MEETUP_URL, SESSIONIZE_URL } from "../lib/site"

export const metadata: Metadata = {
  title: "404 · ClassNotFoundException",
  robots: { index: false },
  // Without these, a pasted broken link would claim to be (and preview as) the home page.
  alternates: { canonical: null },
  openGraph: { url: null },
}

const frames = [
  { method: "org.cijug.Home.goBack", file: "Home.java", line: 1, href: "/", label: "Go to the home page" },
  { method: "org.cijug.Meetup.rsvp", file: "Meetup.java", line: 1, href: MEETUP_URL, label: "Join CIJUG on Meetup" },
  { method: "org.cijug.Talks.submit", file: "Talks.java", line: 1, href: SESSIONIZE_URL, label: "Submit a talk" },
]

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-4 py-16 text-white">
      <div className="w-full max-w-2xl">
        <a href="/" className="inline-flex items-center gap-3">
          <Logo size={40} className="ring-1 ring-white/15" />
          <span className="font-mono text-sm font-semibold tracking-wider">CIJUG</span>
        </a>
        <h1 className="mt-10 text-3xl font-semibold tracking-tight sm:text-4xl">This page doesn&apos;t exist.</h1>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111214]">
          <pre className="p-5 font-mono text-xs/6 break-words whitespace-pre-wrap text-gray-300 sm:text-sm/7">
            <span className="text-[#ff6b68]">
              Exception in thread &quot;main&quot; java.lang.ClassNotFoundException: <MissingPath />
            </span>
            {"\n"}
            {"    "}at org.cijug.Router.resolve(Router.java:404){"\n"}
            {frames.map((f) => (
              <span key={f.method}>
                {"    "}at{" "}
                <a
                  href={f.href}
                  className="text-[#56a8f5] underline decoration-[#56a8f5]/40 underline-offset-4 hover:decoration-[#56a8f5]"
                  {...(f.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {f.method}({f.file}:{f.line})
                  {/* Visible text stays first so voice control users can say what they see (WCAG 2.5.3). */}
                  <span className="sr-only">
                    {" "}
                    ({f.label}
                    {f.href.startsWith("http") ? ", opens in new tab" : ""})
                  </span>
                </a>
                {"\n"}
              </span>
            ))}
          </pre>
        </div>
        <a
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-full border border-transparent bg-white px-6 font-semibold text-black transition-colors hover:bg-cijug-orange"
        >
          Back to home
        </a>
      </div>
    </main>
  )
}
