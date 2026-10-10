"use client"

import { useEffect } from "react"
import { MEETUP_URL, SESSIONIZE_URL, sponsors } from "../lib/site"

declare global {
  interface Window {
    cijug?: { join: (who?: unknown) => string; talkAbout: (...topics: unknown[]) => string; sponsors: () => void }
    you?: string
  }
}

// Module-level so React's development double-invoke of effects does not print the banner twice.
let greeted = false

// A hello for anyone who opens DevTools: an invitation, plus a tiny API so `cijug.join(you)` works.
export function DevConsole() {
  useEffect(() => {
    if (greeted) return
    greeted = true

    window.you = "you"
    window.cijug = {
      join: () => {
        window.open(MEETUP_URL, "_blank", "noopener")
        return "Opening Meetup. See you at the next one!"
      },
      talkAbout: () => {
        window.open(SESSIONIZE_URL, "_blank", "noopener")
        return "Opening Sessionize. We'd love to hear your talk."
      },
      sponsors: () => console.table(sponsors.map(({ name, url }) => ({ name, url }))),
    }

    console.log(
      "%c CI%cJUG %c Central Iowa Java Users Group",
      "background:#e56827;color:#000;font:700 16px monospace;padding:4px 0 4px 8px;border-radius:4px 0 0 4px",
      "background:#2186b1;color:#000;font:700 16px monospace;padding:4px 8px 4px 0;border-radius:0 4px 4px 0",
      "color:inherit;font:600 13px sans-serif",
    )
    console.log(
      "%cReading the source? You'd probably enjoy giving a talk.\n\n%c  cijug.join(you)      %c// RSVP on Meetup\n%c  cijug.talkAbout()    %c// submit a talk\n%c  cijug.sponsors()     %c// who keeps the lights on",
      "font:13px sans-serif",
      "color:#56a8f5;font:12px monospace",
      "color:#888;font:12px monospace",
      "color:#56a8f5;font:12px monospace",
      "color:#888;font:12px monospace",
      "color:#56a8f5;font:12px monospace",
      "color:#888;font:12px monospace",
    )
  }, [])

  return null
}
