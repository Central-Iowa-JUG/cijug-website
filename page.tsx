import { Calendar, Users, ExternalLink, Mic2, Mail, Code2 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#0A0A0A] text-white">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#E5682722,transparent_1px),linear-gradient(to_bottom,#2186B122,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#2186B108,transparent),radial-gradient(circle_800px_at_0%_300px,#E5682708,transparent)] pointer-events-none" />
      <main className="relative flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cijug-orange to-cijug-blue opacity-75 blur" />
                <div className="relative bg-black rounded-xl p-4">
                  <Image
                    src="/cijug-website/logos/cijug.png"
                    alt="CIJUG Logo"
                    width={300}
                    height={120}
                    className="w-auto h-24 md:h-32 lg:h-40"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Central Iowa Java Users Group
                </h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Expand Your Java Expertise with CIJUG. Whether you're just starting or an experienced developer, our
                  community is here to help you connect, learn, and thrive.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="https://www.meetup.com/central-iowa-java-users-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-cijug-orange/90 px-8 text-sm font-medium text-white shadow-lg shadow-cijug-orange/20 backdrop-blur-sm transition-all hover:bg-cijug-orange hover:scale-105"
                >
                  Join Our Meetup
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="https://sessionize.com/central-iowa-java-users-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-cijug-blue/90 px-8 text-sm font-medium text-white shadow-lg shadow-cijug-blue/20 backdrop-blur-sm transition-all hover:bg-cijug-blue hover:scale-105"
                >
                  Submit a Talk
                  <Mic2 className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="mailto:boardmembers@cijug.net"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 text-sm font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
                >
                  Contact Us
                  <Mail className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="relative space-y-4">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-cijug-blue to-cijug-orange opacity-10 blur-xl" />
                <div className="relative">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About CIJUG</h2>
                  <p className="mt-4 text-gray-300 md:text-xl">
                    At CIJUG, we're more than a meetup—we're a thriving network of Java and software engineering
                    enthusiasts. We explore new technologies, share real-world insights, and support continuous learning.
                    Whether you're just starting or an expert in the field, CIJUG is the place to connect, grow, and
                    share your passion!
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cijug-orange to-cijug-orange/50 opacity-50 blur transition-all group-hover:opacity-75" />
                  <div className="relative flex items-start gap-4 rounded-lg border border-white/10 bg-black p-4">
                    <Calendar className="h-6 w-6 mt-1 text-cijug-orange" />
                    <div>
                      <h3 className="font-bold text-white">Regular Meetups</h3>
                      <p className="text-gray-300">Monthly gatherings with expert presentations and discussions</p>
                    </div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cijug-blue to-cijug-blue/50 opacity-50 blur transition-all group-hover:opacity-75" />
                  <div className="relative flex items-start gap-4 rounded-lg border border-white/10 bg-black p-4">
                    <Users className="h-6 w-6 mt-1 text-cijug-blue" />
                    <div>
                      <h3 className="font-bold text-white">Community Driven</h3>
                      <p className="text-gray-300">Connect with local developers and industry professionals</p>
                    </div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cijug-orange to-cijug-blue opacity-50 blur transition-all group-hover:opacity-75" />
                  <div className="relative flex items-start gap-4 rounded-lg border border-white/10 bg-black p-4">
                    <Code2 className="h-6 w-6 mt-1 text-white" />
                    <div>
                      <h3 className="font-bold text-white">Tech Focus</h3>
                      <p className="text-gray-300">Deep dives into Java, JVM, and broader tech ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Sponsors</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl">
                  Thank you to our amazing sponsors who help make our community possible
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                {[
                  {
                    name: "Source Allies",
                    url: "https://www.sourceallies.com/",
                    logo: "/cijug-website/logos/source-allies.png?height=64&width=200",
                  },
                  {
                    name: "No Fluff Just Stuff",
                    url: "https://nofluffjuststuff.com/",
                    logo: "/cijug-website/logos/nfjs.png?height=64&width=200",
                  },
                  {
                    name: "JetBrains",
                    url: "https://www.jetbrains.com/",
                    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.png?height=64&width=200",
                  },
                ].map((sponsor) => (
                  <Link
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cijug-orange to-cijug-blue opacity-50 blur transition-all group-hover:opacity-75" />
                    <div className="relative flex flex-col items-center gap-4 rounded-lg border border-white/10 bg-gradient-to-r from-cijug-orange/10 to-cijug-blue/10 backdrop-blur-sm p-8 transition-all group-hover:scale-[1.01]">
                      <div className="h-16 flex items-center">
                        <Image
                          src={`${sponsor.logo}`}
                          alt={`${sponsor.name} Logo`}
                          width={200}
                          height={64}
                          className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                      </div>
                      <span className="font-semibold text-lg text-white">{sponsor.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Connect with Us</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl">
                  Follow us on social media to stay updated with our latest events and discussions
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  {
                    name: "Twitter",
                    icon: FaXTwitter,
                    url: "https://twitter.com/cijug",
                    hoverColor: "group-hover:text-cijug-orange",
                  },
                  {
                    name: "LinkedIn",
                    icon: FaLinkedin,
                    url: "https://www.linkedin.com/company/cijug/",
                    hoverColor: "group-hover:text-cijug-blue",
                  },
                  {
                    name: "YouTube",
                    icon: FaYoutube,
                    url: "https://www.youtube.com/@CIJUG",
                    hoverColor: "group-hover:text-cijug-orange",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.name}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Outer ring with gradient */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cijug-orange to-cijug-blue opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {/* Inner container */}
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black transition-all duration-300 group-hover:scale-110">
                        {/* Icon */}
                        <social.icon className={`h-6 w-6 transition-all duration-300 ${social.hoverColor}`} />
                        {/* Subtle pulse animation */}
                        <div className="absolute inset-0 rounded-full border border-white/5 group-hover:animate-ping opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative px-4 lg:px-6 py-6 flex items-center justify-center border-t border-white/10">
        <p className="text-xs text-gray-300">© {new Date().getFullYear()} Central Iowa Java Users Group.</p>
      </footer>
    </div>
  )
}
