"use client"

import { Play, RotateCcw } from "lucide-react"
import { type ReactNode, useEffect, useRef, useState } from "react"
import { MEETUP_URL, SESSIONIZE_URL } from "../lib/site"

type Output = { text: string; className?: string; link?: { href: string; label: string } }
const output: Output[] = [
  { text: "$ java CentralIowa.java", className: "text-gray-400" },
  { text: "Searching Central Iowa..." },
  { text: "Found: you. Next steps:", className: "text-[#6aab73]" },
  { text: "  → ", link: { href: MEETUP_URL, label: "RSVP on Meetup" } },
  { text: "  → ", link: { href: SESSIONIZE_URL, label: "Submit a talk" } },
  { text: "Process finished with exit code 0", className: "text-gray-400" },
]

export function RunnableWindow({ children }: { children: ReactNode }) {
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
    setShown(0)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Reset first, then show everything on the next tick, so a second Run still changes the output.
      timers.current.push(setTimeout(() => setShown(output.length), 50))
      return
    }
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
        {children}
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
