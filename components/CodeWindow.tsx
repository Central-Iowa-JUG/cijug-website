import { MEETUP_URL } from "../lib/site"
import { RunnableWindow } from "./RunnableWindow"

const kw = "text-[#cf8e6d]"
const type = "text-[#6fafbd]"
const str = "text-[#6aab73]"
const fn = "text-[#56a8f5]"
const constant = "text-[#c77dbb]"
const comment = "text-gray-400"

// A token can link somewhere and show a Javadoc-style tooltip on hover. The code is aria-hidden decoration,
// so these links are mouse shortcuts only (tabIndex -1); the page's real buttons go to the same places.
type Token = { text: string; className?: string; href?: string; tip?: string }
const t = (text: string, className?: string, link?: { href: string; tip: string }): Token => ({ text, className, ...link })

// Every line stays at or under 34 characters so the window fits a 320px phone without wrapping.
const lines: Token[][] = [
  [t("var", kw), t(" cijug = "), t("UserGroup", type, { href: "#about", tip: "About CIJUG" }), t("."), t("of", fn), t("("), t('"CIJUG"', str), t(");")],
  [],
  [t("cijug."), t("meet", fn), t("("), t("Cadence", type), t("."), t("MONTHLY", constant), t(");")],
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

function CodeToken({ token }: { token: Token }) {
  if (!token.href) return <span className={token.className}>{token.text}</span>
  const external = token.href?.startsWith("http")
  return (
    <span className="group/tip relative">
      <a
        href={token.href}
        tabIndex={-1}
        className={`${token.className} underline decoration-current/0 underline-offset-4 transition-colors hover:decoration-current/70`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {token.text}
      </a>
      <span className="pointer-events-none absolute bottom-full left-0 z-10 mb-1.5 rounded-md border border-white/10 bg-[#1e1f22] px-2 py-1 font-sans text-xs whitespace-nowrap text-gray-200 opacity-0 shadow-lg transition-opacity group-hover/tip:opacity-100">
        {token.tip}
      </span>
    </span>
  )
}

// Rendered on the server: the listing is static HTML. Only the window around it (Run button and output)
// is a client component.
export function CodeWindow() {
  return (
    <RunnableWindow>
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
    </RunnableWindow>
  )
}
