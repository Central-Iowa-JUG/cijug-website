import Image from "next/image"
import type { ReactNode } from "react"

export function External({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  )
}

// cijug-256.png is pre-cropped close to the logo's black circle; the black frame fills its transparent corners.
export function Logo({ size, alt = "", className = "", priority }: { size: number; alt?: string; className?: string; priority?: boolean }) {
  return (
    <span className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-black ${className}`} style={{ width: size, height: size }}>
      <Image src="/logos/cijug-256.png" alt={alt} width={size} height={size} className="size-full" priority={priority} />
    </span>
  )
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <p aria-hidden className="font-mono text-sm text-cijug-orange">
      {`// ${children}`}
    </p>
  )
}

export function Divider({ color = "orange" }: { color?: "orange" | "blue" }) {
  const via = color === "orange" ? "via-cijug-orange/40" : "via-cijug-blue/50"
  return <div aria-hidden className={`container h-px bg-linear-to-r/oklab from-transparent ${via} to-transparent`} />
}
