import { ArrowUpRight, Calendar, Code2, Mail, Mic2, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6"

const MEETUP_URL = "https://www.meetup.com/central-iowa-java-users-group/"
const SESSIONIZE_URL = "https://sessionize.com/central-iowa-java-users-group"
const EMAIL = "boardmembers@cijug.net"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Speak", href: "#speak" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Connect", href: "#connect" },
]

const features = [
  {
    icon: Calendar,
    title: "Regular Meetups",
    body: "Monthly gatherings with expert presentations and discussions.",
    accent: "text-cijug-orange bg-cijug-orange/10 ring-cijug-orange/20",
  },
  {
    icon: Users,
    title: "Community Driven",
    body: "Connect with local developers and industry professionals.",
    accent: "text-cijug-blue bg-cijug-blue/10 ring-cijug-blue/20",
  },
  {
    icon: Code2,
    title: "Tech Focus",
    body: "Deep dives into Java, the JVM, and the broader tech ecosystem.",
    accent: "text-white bg-white/5 ring-white/10",
  },
]

const sponsors = [
  { name: "Source Allies", url: "https://www.sourceallies.com/", logo: "/logos/source-allies.png", width: 148, height: 148, size: "h-20" },
  { name: "No Fluff Just Stuff", url: "https://nofluffjuststuff.com/", logo: "/logos/nfjs.png", width: 281, height: 145, size: "h-20" },
  { name: "JetBrains", url: "https://www.jetbrains.com/", logo: "/logos/jetbrains.png", width: 1192, height: 256, size: "h-12" },
]

const socials = [
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/company/cijug/" },
  { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@CIJUG" },
  { name: "X", icon: FaXTwitter, url: "https://twitter.com/cijug" },
]

function External({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </Link>
  )
}

function Logo({ size, alt = "", className = "", priority }: { size: number; alt?: string; className?: string; priority?: boolean }) {
  return (
    <span className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-black ${className}`} style={{ width: size, height: size }}>
      <Image src="/logos/cijug.png" alt={alt} width={size} height={size} className="size-full scale-[1.22]" priority={priority} />
    </span>
  )
}

function SectionLabel({ children }: { children: string }) {
  return <p className="font-mono text-sm text-cijug-orange">{`// ${children}`}</p>
}

function CodeWindow() {
  const kw = "text-[#cf8e6d]"
  const type = "text-[#6fafbd]"
  const str = "text-[#6aab73]"
  const fn = "text-[#56a8f5]"
  const constant = "text-[#c77dbb]"
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-px rounded-2xl bg-linear-to-br from-cijug-orange/60 via-white/10 to-cijug-blue/60" />
      <div className="relative overflow-hidden rounded-2xl bg-[#111214] shadow-2xl shadow-black/60">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-gray-500">CentralIowa.java</span>
        </div>
        <pre className="p-4 font-mono text-xs/6 break-words whitespace-pre-wrap text-gray-300 sm:p-5 sm:text-sm/7">
          <code>
            <span className={kw}>var</span> cijug = <span className={type}>UserGroup</span>.<span className={fn}>of</span>(<span className={str}>&quot;CIJUG&quot;</span>);{"\n"}
            {"\n"}
            cijug.<span className={fn}>meet</span>(<span className={type}>Cadence</span>.<span className={constant}>MONTHLY</span>);{"\n"}
            cijug.<span className={fn}>talkAbout</span>({"\n"}
            {"    "}<span className={str}>&quot;Java&quot;</span>,{"\n"}
            {"    "}<span className={str}>&quot;JVM&quot;</span>,{"\n"}
            {"    "}<span className={str}>&quot;everything else&quot;</span>{"\n"}
            );{"\n"}
            cijug.<span className={fn}>welcome</span>(everyone);{"\n"}
            {"\n"}
            <span className="text-gray-500">{"// you're invited"}</span>{"\n"}
            cijug.<span className={fn}>join</span>(<span className={kw}>you</span>);
          </code>
        </pre>
      </div>
    </div>
  )
}

export default function Component() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip text-white">
      {/* Backdrop: a faint grid that fades out, plus two soft brand-colored glows */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-[-10%] size-[640px] rounded-full bg-cijug-orange/15 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -top-20 right-[-10%] size-[640px] rounded-full bg-cijug-blue/20 blur-[140px]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/70 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between gap-6">
          <Link href="#top" className="flex items-center gap-3">
            <Logo size={36} className="ring-1 ring-white/15" priority />
            <span className="font-mono text-sm font-semibold tracking-wider">CIJUG</span>
          </Link>
          <nav aria-label="Sections" className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
          <External
            href={MEETUP_URL}
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-semibold text-black transition-colors hover:bg-cijug-orange hover:text-white"
          >
            Join
            <ArrowUpRight className="size-4" />
          </External>
        </div>
      </header>

      <main id="top" className="relative flex-1">
        <section className="container grid items-center gap-14 pt-16 pb-24 md:pt-24 grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16 lg:pt-28 lg:pb-32">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-cijug-orange opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-cijug-orange" />
              </span>
              Meeting monthly in Central Iowa
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Central Iowa{" "}
              <span className="bg-linear-to-r from-cijug-orange via-[#f0a35e] to-cijug-blue bg-clip-text text-transparent">Java</span>{" "}
              Users Group
            </h1>
            <p className="mt-6 max-w-xl text-lg text-pretty text-gray-400 sm:text-xl/8">
              Expand your Java expertise with CIJUG. Whether you&apos;re just starting or an experienced developer, our
              community is here to help you connect, learn, and thrive.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <External
                href={MEETUP_URL}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-cijug-orange px-6 font-semibold text-white shadow-lg shadow-cijug-orange/25 transition hover:bg-[#f07a3c] motion-safe:hover:-translate-y-0.5"
              >
                Join Our Meetup
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </External>
              <External
                href={SESSIONIZE_URL}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-cijug-blue/40 bg-cijug-blue/10 px-6 font-semibold text-white transition hover:border-cijug-blue hover:bg-cijug-blue/20 motion-safe:hover:-translate-y-0.5"
              >
                Submit a Talk
                <Mic2 className="size-4" />
              </External>
              <Link href={`mailto:${EMAIL}`} className="inline-flex h-12 items-center gap-2 px-2 text-sm font-medium text-gray-400 transition-colors hover:text-white">
                <Mail className="size-4" />
                Contact us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -top-12 -right-6 z-10 hidden sm:block">
              <div aria-hidden className="absolute inset-0 rounded-full bg-linear-to-br from-cijug-orange to-cijug-blue opacity-50 blur-xl" />
              <Logo size={104} alt="CIJUG logo" className="ring-4 ring-[#0a0a0a]" priority />
            </div>
            <CodeWindow />
          </div>
        </section>

        <section id="about" className="scroll-mt-16 border-t border-white/5 bg-white/[0.015]">
          <div className="container py-24 lg:py-28">
            <div className="max-w-3xl">
              <SectionLabel>about</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">More than a meetup</h2>
              <p className="mt-5 text-lg text-pretty text-gray-400">
                CIJUG is a thriving network of Java and software engineering enthusiasts. We explore new technologies,
                share real-world insights, and support continuous learning. Whether you&apos;re just starting or an
                expert in the field, CIJUG is the place to connect, grow, and share your passion.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {features.map(({ icon: Icon, title, body, accent }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-[#0f0f10] p-6 transition-colors hover:border-white/20">
                  <div className={`inline-flex size-11 items-center justify-center rounded-xl ring-1 ${accent}`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-gray-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="speak" className="container scroll-mt-16 py-24 lg:py-28">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-cijug-orange/15 via-[#0f0f10] to-cijug-blue/20 p-8 sm:p-12 lg:p-16">
            <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full bg-cijug-blue/25 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <SectionLabel>speak</SectionLabel>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Got something to share?</h2>
                <p className="mt-4 text-lg text-pretty text-gray-300">
                  A tool you love, a lesson learned the hard way, a deep dive into the JVM. First talk or fiftieth, send
                  us your idea.
                </p>
              </div>
              <External
                href={SESSIONIZE_URL}
                className="group inline-flex h-12 items-center justify-center gap-2 justify-self-start rounded-full bg-white px-6 font-semibold text-black transition hover:bg-cijug-blue hover:text-white lg:justify-self-end"
              >
                Submit a Talk
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </External>
            </div>
          </div>
        </section>

        <section id="sponsors" className="scroll-mt-16 border-t border-white/5">
          <div className="container py-24 lg:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>sponsors</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Thank you to our sponsors</h2>
              <p className="mt-4 text-lg text-gray-400">They help make our community possible.</p>
            </div>
            <ul className="mt-14 grid gap-5 sm:grid-cols-3">
              {sponsors.map((sponsor) => (
                <li key={sponsor.name}>
                  <External
                    href={sponsor.url}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f10] transition hover:border-white/25 motion-safe:hover:-translate-y-1"
                  >
                    <div className="flex h-40 items-center justify-center bg-white px-10">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={sponsor.width}
                        height={sponsor.height}
                        className={`${sponsor.size} w-auto max-w-full object-contain transition-transform motion-safe:group-hover:scale-105`}
                      />
                    </div>
                    <div className="flex items-center justify-between px-5 py-4">
                      <span className="font-semibold">{sponsor.name}</span>
                      <ArrowUpRight className="size-4 text-gray-500 transition-colors group-hover:text-white" />
                    </div>
                  </External>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="connect" className="scroll-mt-16 border-t border-white/5 bg-white/[0.015]">
          <div className="container py-24 text-center lg:py-28">
            <SectionLabel>connect</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Stay in the loop</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">Follow us for our latest events and discussions.</p>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {socials.map(({ name, icon: Icon, url }) => (
                <li key={name}>
                  <External
                    href={url}
                    className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 font-medium transition hover:border-white/25 hover:bg-white/10"
                  >
                    <Icon className="size-5" />
                    {name}
                  </External>
                </li>
              ))}
            </ul>
            <External
              href="https://dsmtechevents.com/"
              className="mt-10 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-cijug-blue"
            >
              Find more Des Moines tech meetups and conferences
              <ArrowUpRight className="size-4" />
            </External>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-gray-500 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo size={28} className="ring-1 ring-white/10" />
            <p>© {new Date().getFullYear()} Central Iowa Java Users Group</p>
          </div>
          <Link href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center transition-colors hover:text-white">
            {EMAIL}
          </Link>
        </div>
      </footer>
    </div>
  )
}
