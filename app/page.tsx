import { ArrowUpRight, Calendar, Code2, Mail, Mic2, Users } from "lucide-react"
import { CodeWindow } from "../components/CodeWindow"
import { MeetupIcon } from "../components/icons"
import { Divider, External, Logo, SectionLabel } from "../components/ui"
import { EMAIL, MEETUP_URL, SESSIONIZE_URL, SITE_NAME, socials, sponsors } from "../lib/site"

// Set in next.config.mjs, so it is the date the site was built, not the date someone views it.
const BUILD_DATE = process.env.BUILD_DATE!

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
    body: "Monthly gatherings with presentations and discussions.",
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
    accent: "text-white bg-linear-to-br/oklab from-cijug-orange/25 to-cijug-blue/25 ring-white/10",
  },
]

const primaryButton =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-transparent bg-cijug-orange px-6 font-semibold text-black shadow-lg shadow-cijug-orange/25 transition hover:bg-[#f07a3c] motion-safe:hover:-translate-y-0.5"
const arrowNudge = "size-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"

export default function Home() {
  return (
    <div id="top" className="relative flex min-h-dvh flex-col overflow-x-clip text-white">
      <a
        href="#content"
        className="sr-only rounded-full bg-white font-semibold text-black focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      {/* Backdrop: a faint grid that fades out, plus two soft brand-colored glows. Capped at 1600px so the
          glows stay near the content on very wide screens. Radial gradients instead of blur filters keep
          scrolling cheap on low-end phones. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[900px] max-w-[1600px]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute -top-40 -left-40 size-[420px] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-cijug-orange)_22%,transparent),transparent)] sm:size-[900px]" />
        <div className="absolute -top-20 -right-40 size-[420px] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-cijug-blue)_28%,transparent),transparent)] sm:size-[900px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/75 backdrop-blur-md md:backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between gap-6">
          <a href="#top" className="flex h-11 items-center gap-3">
            <Logo size={36} className="ring-1 ring-white/15" priority />
            <span className="font-mono text-sm font-semibold tracking-wider">CIJUG</span>
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-6 text-sm text-gray-400 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="-mx-1 inline-flex h-11 items-center px-1 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <External
            href={MEETUP_URL}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-transparent bg-white px-4 text-sm font-semibold text-black transition-colors hover:bg-cijug-orange md:h-9"
          >
            Join
            <span className="sr-only"> CIJUG on Meetup</span>
            <ArrowUpRight aria-hidden className="size-4" />
          </External>
        </div>
        <nav aria-label="Sections" className="container -mt-1 grid grid-cols-4 gap-1.5 pb-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[13px] text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="content" tabIndex={-1} className="relative flex-1 outline-none">
        <section className="container grid grid-cols-1 items-start gap-14 pt-10 pb-24 sm:pt-16 md:pt-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16 lg:pt-28 lg:pb-32">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-cijug-orange opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-cijug-orange" />
              </span>
              Meeting monthly in Central Iowa
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance min-[375px]:text-5xl sm:text-6xl lg:text-7xl">
              Central Iowa{" "}
              <span className="bg-linear-to-r/oklab from-cijug-orange to-cijug-blue bg-clip-text text-transparent forced-colors:text-[CanvasText]">
                Java
              </span>{" "}
              Users Group
            </h1>
            <p className="mt-5 max-w-xl text-base text-pretty text-gray-400 sm:mt-6 sm:text-xl/8">
              Expand your Java expertise with CIJUG. Whether you&apos;re just starting or an experienced developer, our
              community is here to help you connect, learn, and thrive.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <External href={MEETUP_URL} className={primaryButton}>
                Join us on Meetup
                <ArrowUpRight aria-hidden className={arrowNudge} />
              </External>
              <External
                href={SESSIONIZE_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cijug-blue/40 bg-cijug-blue/10 px-6 font-semibold text-white transition hover:border-cijug-blue hover:bg-cijug-blue/20 motion-safe:hover:-translate-y-0.5"
              >
                Submit a talk
                <Mic2 aria-hidden className="size-4" />
              </External>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex h-12 items-center gap-2 self-center px-2 text-sm font-medium text-gray-400 transition-colors hover:text-white sm:self-auto"
              >
                <Mail aria-hidden className="size-4" />
                Contact us
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-xl">
            <div className="pointer-events-none absolute -right-2 -bottom-8 z-10 sm:-right-6 sm:-bottom-12">
              <div aria-hidden className="absolute inset-0 rounded-full bg-linear-to-br from-cijug-orange to-cijug-blue opacity-50 blur-xl" />
              {/* Logo always sets its own display, so the breakpoint switch lives on wrappers. */}
              <span className="relative sm:hidden">
                <Logo size={64} className="ring-4 ring-[#0a0a0a]" />
              </span>
              <span className="relative hidden sm:inline">
                <Logo size={104} className="ring-4 ring-[#0a0a0a]" />
              </span>
            </div>
            <CodeWindow />
          </div>
        </section>

        <Divider color="orange" />

        <section id="about" className="container py-24 lg:py-28">
          <div className="reveal max-w-3xl">
            <SectionLabel>about</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">More than a meetup</h2>
            <p className="mt-5 max-w-2xl text-lg text-pretty text-gray-400">
              CIJUG brings together Java and software engineering enthusiasts. We explore new technologies, share
              real-world insights, and keep learning from each other.
            </p>
          </div>
          <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, body, accent }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#0f0f10] p-6 transition-colors hover:border-white/20">
                <div className={`inline-flex size-11 items-center justify-center rounded-xl ring-1 ${accent}`}>
                  <Icon aria-hidden className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-gray-400">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="speak" className="container pb-24 lg:pb-28">
          <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br/oklab from-cijug-orange/15 via-[#0f0f10] to-cijug-blue/20 p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -bottom-24 size-96 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-cijug-blue)_30%,transparent),transparent)]"
            />
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
                className="group inline-flex h-12 items-center justify-center gap-2 justify-self-start rounded-full border border-transparent bg-white px-6 font-semibold text-black transition hover:bg-cijug-blue lg:justify-self-end"
              >
                Submit a talk
                <ArrowUpRight aria-hidden className={arrowNudge} />
              </External>
            </div>
          </div>
        </section>

        <Divider color="blue" />

        <section id="sponsors" className="container py-24 lg:py-28">
          <div className="reveal max-w-2xl">
            <SectionLabel>sponsors</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Thank you to our sponsors</h2>
            <p className="mt-4 text-lg text-gray-400">They help make our community possible.</p>
          </div>
          <ul className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((sponsor) => (
              <li key={sponsor.name} className="sm:last:col-span-2 lg:last:col-span-1">
                <External
                  href={sponsor.url}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f10] transition hover:border-white/25 motion-safe:hover:-translate-y-1"
                >
                  <div className="m-3 flex h-28 items-center justify-center rounded-xl bg-white/95 px-6 sm:h-32 lg:px-10">
                    <img
                      src={sponsor.logo}
                      alt=""
                      width={sponsor.width}
                      height={sponsor.height}
                      loading="lazy"
                      decoding="async"
                      className={`${sponsor.size} w-auto max-w-full object-contain transition-transform motion-safe:group-hover:scale-105`}
                    />
                  </div>
                  <div className="flex items-center justify-between px-5 pt-1 pb-4">
                    <span className="font-semibold">{sponsor.name}</span>
                    <ArrowUpRight aria-hidden className="size-4 text-gray-400 transition-colors group-hover:text-white" />
                  </div>
                </External>
              </li>
            ))}
          </ul>
        </section>

        <Divider color="orange" />

        <section id="connect" className="container py-24 text-center lg:py-28">
          <div className="reveal">
            <SectionLabel>connect</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Come to a meetup</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-gray-400">
              Upcoming meetups are posted on Meetup. RSVP there, and follow along on LinkedIn and X.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <External href={MEETUP_URL} className={`${primaryButton} w-full sm:w-auto`}>
                <MeetupIcon aria-hidden className="size-5" />
                Join us on Meetup
                <ArrowUpRight aria-hidden className={arrowNudge} />
              </External>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex h-12 items-center gap-2 px-2 font-medium text-gray-300 transition-colors hover:text-white"
              >
                <Mail aria-hidden className="size-4" />
                Email the board
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {socials.map(({ name, icon: Icon, url }) => (
                <li key={name}>
                  <External
                    href={url}
                    className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 font-medium transition hover:border-white/25 hover:bg-white/10"
                  >
                    <Icon aria-hidden className="size-5" />
                    {name}
                  </External>
                </li>
              ))}
            </ul>
            <External
              href="https://dsmtechevents.com/"
              className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-cijug-blue"
            >
              Find more Des Moines tech meetups and conferences
              <ArrowUpRight aria-hidden className="size-4" />
            </External>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-gray-400 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo size={28} className="ring-1 ring-white/10" />
            <p>
              © {BUILD_DATE.slice(0, 4)} {SITE_NAME} ·{" "}
              <span className="font-mono text-xs">
                updated <time dateTime={BUILD_DATE}>{BUILD_DATE}</time>
              </span>
            </p>
          </div>
          <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center transition-colors hover:text-white">
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  )
}
