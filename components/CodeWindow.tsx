"use client"

import { Play, RotateCcw } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { MEETUP_URL, SESSIONIZE_URL } from "../lib/site"

const kw = "text-[#cf8e6d]"
const type = "text-[#6fafbd]"
const str = "text-[#6aab73]"
const fn = "text-[#56a8f5]"
const constant = "text-[#c77dbb]"
const comment = "text-gray-400"

// A token can link somewhere and show a Javadoc-style tooltip on hover. The code is aria-hidden decoration,
// so these links are mouse shortcuts only (tabIndex -1); the page's real buttons go to the same places.
type Token = { text: string; className?: string; href?: string; tip?: string }
const t = (text: string, className?: string, link?: { href?: string; tip: string }): Token => ({ text, className, ...link })

// Every line stays at or under 34 characters so the window fits a 320px phone without wrapping.
const lines: Token[][] = [
  [t("var", kw), t(" cijug = "), t("UserGroup", type, { href: "#about", tip: "About CIJUG" }), t("."), t("of", fn), t("("), t('"CIJUG"', str), t(");")],
  [],
  [t("cijug."), t("meet", fn), t("("), t("Cadence", type), t("."), t("MONTHLY", constant, { tip: "Monthly, in Central Iowa" }), t(");")],
  [t("cijug."), t("talkAbout", fn, { href: "#speak", tip: "Got a talk? Submit it" }), t("(")],
  [t("    "), t('"Java"', str), t(",")],
  [t("    "), t('"JVM"', str), t(",")],
  [t("    "), t('"everything else"', str)],
  [t(");")],
  [t("cijug."), t("welcome", fn, { href: "#connect", tip: "Come to a meetup" }), t("(everyone);")],
  [],
  [t("// you're invited", comment)],
  [t("cijug."), t("join", fn, { href: MEETUP_URL, tip: "Join us on Meetup ↗" }), t("("), t("you", kw), t(");")],
]

type Output = { text: string; className?: string; link?: { href: string; label: string } }
const output: Output[] = [
  { text: "$ java CentralIowa.java", className: "text-gray-400" },
  { text: "Searching Central Iowa..." },
  { text: "Found: you. Next steps:", className: "text-[#6aab73]" },
  { text: "  → ", link: { href: MEETUP_URL, label: "RSVP on Meetup" } },
  { text: "  → ", link: { href: SESSIONIZE_URL, label: "Submit a talk" } },
  { text: "Process finished with exit code 0", className: "text-gray-400" },
]

function CodeToken({ token }: { token: Token }) {
  if (!token.tip) return <span className={token.className}>{token.text}</span>
  const external = token.href?.startsWith("http")
  const body = token.href ? (
    <a
      href={token.href}
      tabIndex={-1}
      className={`${token.className} underline decoration-current/0 underline-offset-4 transition-colors hover:decoration-current/70`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {token.text}
    </a>
  ) : (
    <span className={`${token.className} cursor-help underline decoration-dotted decoration-current/40 underline-offset-4`}>{token.text}</span>
  )
  return (
    <span className="group/tip relative">
      {body}
      <span className="pointer-events-none absolute bottom-full left-0 z-10 mb-1.5 rounded-md border border-white/10 bg-[#1e1f22] px-2 py-1 font-sans text-xs whitespace-nowrap text-gray-200 opacity-0 shadow-lg transition-opacity group-hover/tip:opacity-100">
        {token.tip}
      </span>
    </span>
  )
}

export function CodeWindow() {
  // The Run button needs JavaScript, so it only appears once the component has mounted in the browser.
  // The title bar's min-h-12 reserves its height so nothing shifts when it appears.
  const [mounted, setMounted] = useState(false)
  const [shown, setShown] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    setMounted(true)
    return () => timers.current.forEach(clearTimeout)
  }, [])

  function run() {
    timers.current.forEach(clearTimeout)
    timers.current = []
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(output.length)
      return
    }
    setShown(0)
    output.forEach((_, i) => timers.current.push(setTimeout(() => setShown(i + 1), 150 + i * 280)))
  }

  return (
    <figure className="relative">
      <figcaption className="sr-only">
        A short Java program: CIJUG meets monthly, talks about Java, the JVM and everything else, and welcomes
        everyone.
      </figcaption>
      <div aria-hidden className="absolute -inset-px rounded-2xl bg-linear-to-br from-cijug-orange/60 via-white/10 to-cijug-blue/60" />
      <div className="relative overflow-hidden rounded-2xl bg-[#111214] shadow-2xl shadow-black/60">
        <div className="flex min-h-12 items-center gap-2 border-b border-white/5 py-2 pr-2 pl-4">
          <span aria-hidden className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-gray-400">CentralIowa.java</span>
          </span>
          {mounted && (
            <button
              type="button"
              onClick={run}
              aria-label={shown ? "Run CentralIowa.java again" : "Run CentralIowa.java"}
              className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 font-mono text-xs text-[#5fb85f] transition-colors hover:bg-white/5"
            >
              {shown ? <RotateCcw aria-hidden className="size-3.5" /> : <Play aria-hidden className="size-3.5 fill-current" />}
              Run
            </button>
          )}
        </div>
        <pre aria-hidden className="p-4 font-mono text-xs/6 break-words whitespace-pre-wrap text-gray-300 sm:p-5 sm:text-sm/7">
          <code className="block">
            {lines.map((tokens, i) => (
              <span key={i} className="flex">
                <span className="hidden w-10 shrink-0 pr-4 text-right text-gray-600 select-none sm:inline-block">{i + 1}</span>
                <span className="min-w-0">
                  {tokens.length === 0 ? " " : tokens.map((tok, j) => <CodeToken key={j} token={tok} />)}
                </span>
              </span>
            ))}
          </code>
        </pre>
        <div aria-live="polite" className={shown ? "border-t border-white/5 bg-black/30" : undefined}>
          {shown > 0 && (
            <div className="p-4 font-mono text-xs/6 break-words whitespace-pre-wrap text-gray-300 sm:px-5 sm:text-sm/7">
              {output.slice(0, shown).map((line, i) => (
                <div key={i} className={line.className}>
                  {line.text}
                  {line.link && (
                    <a href={line.link.href} target="_blank" rel="noopener noreferrer" className="text-[#56a8f5] underline underline-offset-4">
                      {line.link.label}
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </figure>
  )
}
