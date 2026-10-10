const kw = "text-[#cf8e6d]"
const type = "text-[#6fafbd]"
const str = "text-[#6aab73]"
const fn = "text-[#56a8f5]"
const constant = "text-[#c77dbb]"
const comment = "text-gray-400"

type Token = { text: string; className?: string }
const t = (text: string, className?: string): Token => ({ text, className })

// Every line stays at or under 34 characters so the window fits a 320px phone without wrapping.
const lines: Token[][] = [
  [t("var", kw), t(" cijug = "), t("UserGroup", type), t("."), t("of", fn), t("("), t('"CIJUG"', str), t(");")],
  [],
  [t("cijug."), t("meet", fn), t("("), t("Cadence", type), t("."), t("MONTHLY", constant), t(");")],
  [t("cijug."), t("talkAbout", fn), t("(")],
  [t("    "), t('"Java"', str), t(",")],
  [t("    "), t('"JVM"', str), t(",")],
  [t("    "), t('"everything else"', str)],
  [t(");")],
  [t("cijug."), t("welcome", fn), t("(everyone);")],
  [],
  [t("// you're invited", comment)],
  [t("cijug."), t("join", fn), t("("), t("you", kw), t(");")],
]

export function CodeWindow() {
  return (
    <figure className="relative">
      <figcaption className="sr-only">
        A short Java program: CIJUG meets monthly, talks about Java, the JVM and everything else, and welcomes
        everyone.
      </figcaption>
      <div aria-hidden className="absolute -inset-px rounded-2xl bg-linear-to-br from-cijug-orange/60 via-white/10 to-cijug-blue/60" />
      <div className="relative overflow-hidden rounded-2xl bg-[#111214] shadow-2xl shadow-black/60">
        <div aria-hidden className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-gray-400">CentralIowa.java</span>
        </div>
        <pre aria-hidden className="p-4 font-mono text-xs/6 break-words whitespace-pre-wrap text-gray-300 sm:p-5 sm:text-sm/7">
          <code className="block">
            {lines.map((tokens, i) => (
              <span key={i} className="flex">
                <span className="hidden w-10 shrink-0 pr-4 text-right text-gray-600 select-none sm:inline-block">{i + 1}</span>
                <span className="min-w-0">
                  {tokens.length === 0 ? " " : tokens.map((tok, j) => <span key={j} className={tok.className}>{tok.text}</span>)}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </figure>
  )
}
