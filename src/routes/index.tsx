import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, Scale } from "lucide-react";
import heroPortrait from "../assets/katherine-actual-hero.png";
import officePortrait from "../assets/katherine-actual-office.png";

const SITE = "https://www.kleymanesq.com";
const freeReview = "https://calendly.com/kathykleyman/freeconsultation?back=1";
const strategySession = "https://calendly.com/kathykleyman/paid-consultation-employment-strategy-guidance";

const practices = [
  ["Wrongful termination", "Representation for employees in New York and California who believe they were fired in violation of state or federal law."],
  ["Retaliation", "Advocacy when an employer punishes a worker for reporting misconduct, filing a complaint, or exercising a protected right."],
  ["Discrimination", "Counsel for unlawful workplace treatment based on a legally protected characteristic, under NY, CA, and federal law."],
  ["Workplace harassment", "Clear, dignified guidance for employees facing hostile, abusive, or sexually harassing conduct at work."],
];

const steps = [
  ["Free case review", "Share what happened. Katherine listens to the facts and timeline before anything else."],
  ["Honest evaluation", "You get a straight assessment of whether there is a viable claim and what it would involve."],
  ["Strategy & filing", "Demand letters, agency charges, negotiation, or litigation — whichever fits your goals."],
  ["Resolution", "Settlement or trial, with your priorities driving the decisions at every stage."],
];

const locations = [
  ["New York", ["Brooklyn", "Manhattan", "Queens", "The Bronx", "Staten Island", "Long Island", "Westchester"]],
  ["California", ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Orange County", "Sacramento", "Oakland"]],
] as const;

const faqs = [
  ["Do I have an employment case in New York or California?", "It depends on what happened, when it happened, and the reason behind your employer's decision. Both New York and California give employees strong protections against discrimination, retaliation, and harassment. The fastest way to find out is a free case review, where Katherine evaluates your facts directly."],
  ["How much does it cost to hire an employment attorney?", "Katherine offers a free case review, and contingency-based representation is available in qualified cases — meaning no attorney fee unless there is a recovery. If you are still employed and want guidance rather than representation, a paid strategy session is available."],
  ["I still have my job. Can I get advice without filing anything?", "Yes. Many employees want to understand their rights before making a move. The paid strategy session is built for exactly that: focused guidance on a current workplace issue and how to protect yourself going forward."],
  ["How long do I have to bring a claim?", "Employment deadlines are strict and vary by claim type and state, and some agency filings must happen well before any lawsuit. Because waiting can end a valid claim, it is best to have your situation reviewed as soon as possible."],
  ["Why does former corporate counsel experience matter?", "Katherine previously advised companies. She knows how employers evaluate risk, build a paper trail, and prepare a defense — and she uses that insight on behalf of employees."],
  ["Do you represent employers?", "No. Katherine represents workers only, in New York and California."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Attorney", "LegalService"],
      "@id": `${SITE}/#practice`,
      name: "Katherine Kleyman, Esq.",
      description:
        "Plaintiff-side employment attorney representing employees in New York and California in wrongful termination, retaliation, discrimination, and workplace harassment matters.",
      url: SITE,
      telephone: "+1-646-583-5001",
      priceRange: "Free case review; paid strategy sessions available",
      address: {
        "@type": "PostalAddress",
        streetAddress: "221 Kings Hwy",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        postalCode: "11223",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "State", name: "New York" },
        { "@type": "State", name: "California" },
        { "@type": "City", name: "New York City" },
        { "@type": "City", name: "Los Angeles" },
        { "@type": "City", name: "San Francisco" },
        { "@type": "City", name: "San Diego" },
      ],
      knowsLanguage: "en",
      founder: {
        "@type": "Person",
        name: "Katherine Kleyman",
        honorificSuffix: "Esq.",
        jobTitle: "Employment Attorney",
        alumniOf: { "@type": "CollegeOrUniversity", name: "Fordham University School of Law" },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Employment law services",
        itemListElement: practices.map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description, serviceType: "Employment law" },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Employment Lawyer for Employees in New York & California | Katherine Kleyman, Esq." },
      {
        name: "description",
        content:
          "Katherine Kleyman, Esq. is a plaintiff-side employment attorney in New York and California handling wrongful termination, retaliation, discrimination, and workplace harassment. Free case review: 1-646-583-5001.",
      },
      {
        name: "keywords",
        content:
          "employment lawyer New York, employment attorney California, wrongful termination lawyer NYC, retaliation attorney Los Angeles, workplace discrimination lawyer Brooklyn, harassment attorney San Francisco",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "geo.region", content: "US-NY" },
      { name: "geo.placename", content: "Brooklyn, New York" },
      { name: "ICBM", content: "40.6033, -73.9750" },
      { name: "author", content: "Katherine Kleyman, Esq." },
      { property: "og:title", content: "Employment Lawyer for Employees in New York & California | Katherine Kleyman, Esq." },
      {
        property: "og:description",
        content:
          "Plaintiff-side employment advocacy for wrongful termination, retaliation, discrimination, and harassment in New York and California.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Katherine Kleyman, Esq." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Employment Lawyer for Employees in NY & CA | Katherine Kleyman, Esq." },
      {
        name: "twitter:description",
        content: "Wrongful termination, retaliation, discrimination, and harassment representation for workers.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: HomePage,
});

const navLinks = [
  ["#practice", "Practice Areas"],
  ["#about", "About"],
  ["#process", "How It Works"],
  ["#locations", "Locations"],
  ["#faq", "FAQ"],
  ["#contact", "Contact"],
];

function Brand() {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label="Katherine Kleyman, Esq. — home">
      <Scale className="shrink-0 text-secondary" size={20} aria-hidden="true" />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate font-serif text-base font-bold text-primary sm:text-lg">Katherine Kleyman</span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary">Attorney at Law</span>
      </span>
    </a>
  );
}

function SectionLabel({ children, tone = "secondary" }: { children: string; tone?: "secondary" | "accent" }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone === "accent" ? "text-accent" : "text-secondary"}`}>
      {children}
    </p>
  );
}

function HomePage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a href="#practice" className="sr-only focus:not-sr-only">Skip to content</a>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary">
                {label}
              </a>
            ))}
            <a
              href={freeReview}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
            >
              Free Case Review <ArrowRight size={15} />
            </a>
          </nav>
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href="tel:16465835001"
              aria-label="Call 1-646-583-5001"
              className="grid size-10 place-items-center rounded-sm bg-primary text-primary-foreground"
            >
              <Phone size={17} />
            </a>
            <details className="relative">
              <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-sm border border-border" aria-label="Open navigation">
                <Menu size={20} />
              </summary>
              <nav className="absolute right-0 top-12 flex w-64 flex-col border border-border bg-background p-3 shadow-xl" aria-label="Mobile navigation">
                {navLinks.map(([href, label]) => (
                  <a key={href} href={href} className="px-3 py-3 text-sm hover:text-primary">{label}</a>
                ))}
                <a href={freeReview} className="mt-2 bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground">
                  Free Case Review
                </a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-5 py-10 sm:px-8 sm:py-16 lg:py-20" aria-label="Introduction">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="editorial-reveal lg:col-span-8">
              <div className="border-b border-border pb-8">
                <SectionLabel>Employment law · New York &amp; California</SectionLabel>
                <h1 className="mt-5 max-w-4xl text-balance font-serif text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
                  Employment lawyer for employees in New York &amp; California.
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
                  Katherine Kleyman, Esq. represents workers — never employers — in wrongful termination, retaliation,
                  discrimination, and workplace harassment matters. Start with a free case review.
                </p>
              </div>
              <div className="mt-8 grid gap-7 sm:grid-cols-[17rem_1fr] sm:items-end">
                <div className="relative overflow-hidden rounded-sm bg-card">
                  <img
                    src={heroPortrait}
                    alt="Katherine Kleyman, Esq., employment attorney in New York and California"
                    width={1024}
                    height={1408}
                    className="aspect-[3/4] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-primary/90 px-4 py-3 text-primary-foreground">
                    <p className="font-serif text-sm font-bold">Katherine Kleyman, Esq.</p>
                    <p className="text-[11px] text-primary-foreground/70">Employment Attorney · NY &amp; CA</p>
                  </div>
                </div>
                <div className="border-l border-accent pl-6">
                  <p className="mb-3 font-serif text-lg text-secondary">The perspective</p>
                  <p className="max-w-xl text-pretty leading-relaxed text-foreground/75">
                    A former corporate counsel, Katherine understands how the other side operates. She uses that insight to
                    protect and empower employees with clarity, care, and focused strategy.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                    <span>Fordham Law</span>
                    <span>Licensed in NY &amp; CA</span>
                    <span>Plaintiff-side only</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="editorial-reveal self-start rounded-sm bg-primary p-7 text-primary-foreground lg:sticky lg:top-24 lg:col-span-4 lg:p-8 [animation-delay:120ms]">
              <SectionLabel tone="accent">Start here</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl font-bold">Free case review</h2>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
                If you believe your employer violated your rights, share the details for an initial review.
              </p>
              <div className="mt-8 space-y-3 border-y border-primary-foreground/15 py-6 text-sm">
                <p>Wrongful termination</p>
                <p>Retaliation or discrimination</p>
                <p>Workplace harassment</p>
              </div>
              <a
                href={freeReview}
                className="mt-7 flex w-full items-center justify-between rounded-sm bg-accent px-5 py-4 font-semibold text-accent-foreground transition-colors hover:bg-primary-foreground"
              >
                Request a free review <ArrowRight size={18} />
              </a>
              <a href="tel:16465835001" className="mt-5 flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-primary-foreground">
                <Phone size={15} /> 1-646-583-5001
              </a>
              <p className="mt-6 text-[11px] leading-relaxed text-primary-foreground/50">
                Submitting a request does not create an attorney-client relationship.
              </p>
            </aside>
          </div>
        </section>

        {/* Practice areas */}
        <section id="practice" className="scroll-mt-20 border-y border-border bg-card px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <SectionLabel>Areas of practice</SectionLabel>
                <h2 className="mt-4 font-serif text-3xl font-bold text-primary sm:text-4xl">Strategic plaintiff advocacy</h2>
              </div>
              <p className="max-w-2xl text-pretty leading-relaxed text-foreground/70 lg:col-span-2 lg:pt-7">
                When your job is on the line, so are your income, your rights, and your dignity. Katherine provides focused
                guidance through difficult workplace disputes under New York, California, and federal law.
              </p>
            </div>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {practices.map(([title, body], index) => (
                <article key={title} className="min-h-64 bg-card p-7 transition-colors hover:bg-muted">
                  <span className="font-serif text-sm text-secondary">0{index + 1}</span>
                  <h3 className="mt-12 font-serif text-xl font-bold text-primary">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/65">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <img
                src={officePortrait}
                alt="Katherine Kleyman, Esq. at her desk in her law office"
                loading="lazy"
                width={1200}
                height={1200}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <SectionLabel tone="accent">Meet Katherine</SectionLabel>
              <h2 className="mt-5 max-w-2xl text-balance font-serif text-3xl font-bold leading-tight sm:text-5xl">
                Insight from both sides of the table.
              </h2>
              <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
                Katherine Kleyman is a dedicated employment attorney and former corporate counsel. That background gives her a
                practical understanding of employer strategy — knowledge she now brings to workers pursuing justice.
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/65">
                A graduate of Fordham University School of Law, Katherine practices in New York and California and offers
                contingency-based representation in qualified cases.
              </p>
              <a
                href={freeReview}
                className="mt-9 inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-semibold text-accent transition-colors hover:text-primary-foreground"
              >
                Discuss your situation <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 bg-background px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <SectionLabel>How it works</SectionLabel>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-primary sm:text-4xl">
                Four clear steps, no guesswork.
              </h2>
            </div>
            <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(([title, body], index) => (
                <li key={title} className="border-t-2 border-primary pt-6">
                  <span className="font-serif text-2xl font-bold text-accent">{index + 1}</span>
                  <h3 className="mt-3 font-serif text-lg font-bold text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Locations */}
        <section id="locations" className="scroll-mt-20 border-y border-border bg-card px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <SectionLabel>Locations served</SectionLabel>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-primary sm:text-4xl">
                Representing employees coast to coast — New York and California.
              </h2>
              <p className="mt-5 leading-relaxed text-foreground/70">
                Licensed in both states, Katherine works with clients remotely and in person, from Brooklyn to the Bay Area.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {locations.map(([state, cities]) => (
                <article key={state} className="rounded-sm border border-border bg-background p-7">
                  <div className="flex items-center gap-2 text-secondary">
                    <MapPin size={17} />
                    <h3 className="font-serif text-2xl font-bold text-primary">{state}</h3>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <li key={city} className="rounded-sm bg-muted px-3 py-2 text-sm text-foreground/75">{city}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Consultations */}
        <section id="consultation" className="scroll-mt-20 bg-background px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <SectionLabel>Choose the right next step</SectionLabel>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-primary sm:text-5xl">
                Clear counsel begins with the right conversation.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="border-t-2 border-primary py-7 md:pr-10">
                <SectionLabel>For unlawful workplace treatment</SectionLabel>
                <h3 className="mt-4 font-serif text-2xl font-bold text-primary">Free case review</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70">
                  For former or current employees who believe they may have an employment law claim.
                </p>
                <a href={freeReview} className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary">
                  Book a free review <ArrowRight size={16} />
                </a>
              </article>
              <article className="border-t-2 border-accent py-7 md:pl-10">
                <SectionLabel>Still employed and need advice</SectionLabel>
                <h3 className="mt-4 font-serif text-2xl font-bold text-primary">Paid strategy session</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70">
                  Focused legal guidance for navigating a current workplace issue and planning your next steps.
                </p>
                <a href={strategySession} className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary">
                  Book a strategy session <ArrowRight size={16} />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-y border-border bg-card px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel>Questions &amp; answers</SectionLabel>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-primary sm:text-4xl">
                What employees ask most.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                General information only — not legal advice. Your situation deserves a direct conversation.
              </p>
            </div>
            <div className="divide-y divide-border border-y border-border lg:col-span-8">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <h3 className="font-serif text-lg font-bold text-primary">{question}</h3>
                    <ChevronDown size={20} className="mt-1 shrink-0 text-secondary transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/70">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-background px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-primary sm:text-5xl">
                Tell Katherine what happened.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-foreground/75">
                Employment deadlines are strict. The sooner your situation is reviewed, the more options you are likely to have.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={freeReview}
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors hover:bg-secondary"
                >
                  Free case review <ArrowRight size={17} />
                </a>
                <a
                  href="tel:16465835001"
                  className="inline-flex items-center gap-2 rounded-sm border border-primary px-6 py-4 font-semibold text-primary transition-colors hover:bg-muted"
                >
                  <Phone size={17} /> 1-646-583-5001
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="font-serif text-xl font-bold text-primary">Office</h3>
              <address className="mt-5 space-y-4 text-sm not-italic text-foreground/75">
                <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-secondary" /> 221 Kings Hwy<br />Brooklyn, NY 11223</p>
                <p className="flex items-center gap-3"><Phone size={17} className="shrink-0 text-secondary" /> <a href="tel:16465835001" className="hover:text-primary">1-646-583-5001</a></p>
                <p className="flex items-center gap-3"><Mail size={17} className="shrink-0 text-secondary" /> <a href={freeReview} className="hover:text-primary">Book online</a></p>
              </address>
              <p className="mt-7 border-t border-border pt-5 text-[11px] leading-relaxed text-foreground/55">
                Contacting this office does not create an attorney-client relationship, and information sent before an
                engagement is not confidential.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary px-5 py-14 text-primary-foreground sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-primary-foreground/15 pb-10 md:grid-cols-4">
            <div>
              <p className="font-serif text-xl font-bold">Katherine Kleyman, Esq.</p>
              <p className="mt-4 text-sm text-primary-foreground/60">Employment counsel for workers in New York and California.</p>
            </div>
            <div>
              <SectionLabel tone="accent">Explore</SectionLabel>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/70">
                {navLinks.map(([href, label]) => (
                  <a key={href} href={href} className="hover:text-primary-foreground">{label}</a>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel tone="accent">Contact</SectionLabel>
              <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/70">
                <p><a href="tel:16465835001">1-646-583-5001</a></p>
                <p>221 Kings Hwy<br />Brooklyn, NY 11223</p>
              </address>
            </div>
            <div>
              <SectionLabel tone="accent">Consultation</SectionLabel>
              <div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70">
                <a href={freeReview} className="hover:text-primary-foreground">Free Case Review</a>
                <a href={strategySession} className="hover:text-primary-foreground">Paid Strategy Session</a>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 text-[11px] text-primary-foreground/45 sm:flex-row sm:justify-between">
            <p>Attorney Advertising. Prior results do not guarantee a similar outcome. This site is general information, not legal advice.</p>
            <p>© 2026 Katherine Kleyman, Esq.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
