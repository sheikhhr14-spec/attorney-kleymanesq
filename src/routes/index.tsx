import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, Phone } from "lucide-react";
import heroPortrait from "../assets/katherine-hero.png";
import profilePortrait from "../assets/katherine-profile.png";

const freeReview = "https://calendly.com/kathykleyman/freeconsultation?back=1";
const strategySession = "https://calendly.com/kathykleyman/paid-consultation-employment-strategy-guidance";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Katherine Kleyman, Esq. | NY & CA Employment Attorney" },
      { name: "description", content: "Plaintiff-side employment attorney representing workers in wrongful termination, retaliation, discrimination, and harassment matters in New York and California." },
      { property: "og:title", content: "Katherine Kleyman, Esq. | Employment Attorney" },
      { property: "og:description", content: "Clear, strategic advocacy for workers facing workplace injustice in New York and California." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const practices = [
  ["Wrongful termination", "Representation for workers who believe they were fired in violation of state or federal law."],
  ["Retaliation", "Advocacy when an employer punishes a worker for reporting misconduct or exercising a protected right."],
  ["Discrimination", "Counsel for unlawful workplace treatment based on a legally protected characteristic."],
  ["Workplace harassment", "Clear, dignified guidance for employees navigating hostile or abusive workplace conduct."],
];

function Brand() {
  return (
    <a href="#top" className="flex min-w-0 items-baseline gap-2" aria-label="Katherine Kleyman home">
      <span className="font-serif text-lg font-bold text-primary sm:text-xl">Katherine Kleyman</span>
      <span className="hidden text-[10px] font-semibold uppercase text-secondary sm:inline">Attorney at Law</span>
    </a>
  );
}

function HomePage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            <a href="#practice" className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">Practice Areas</a>
            <a href="#experience" className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">Experience</a>
            <a href="#consultation" className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">Consultations</a>
            <a href={freeReview} className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary">Free Case Review <ArrowRight size={15} /></a>
          </nav>
          <details className="relative lg:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-sm border border-border" aria-label="Open navigation"><Menu size={20} /></summary>
            <nav className="absolute right-0 top-12 flex w-64 flex-col border border-border bg-background p-3 shadow-xl">
              <a href="#practice" className="px-3 py-3 text-sm">Practice Areas</a>
              <a href="#experience" className="px-3 py-3 text-sm">Experience</a>
              <a href="#consultation" className="px-3 py-3 text-sm">Consultations</a>
              <a href={freeReview} className="mt-2 bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground">Free Case Review</a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="px-5 py-10 sm:px-8 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="editorial-reveal lg:col-span-8">
              <div className="border-b border-border pb-8">
                <p className="mb-5 text-xs font-semibold uppercase text-secondary">Employment law · New York & California</p>
                <h1 className="max-w-4xl text-balance font-serif text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
                  Defending the rights and dignity of workers.
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
                  Strategic plaintiff-side representation for wrongful termination, retaliation, discrimination, harassment, and other workplace injustices.
                </p>
              </div>
              <div className="mt-8 grid gap-7 sm:grid-cols-[18rem_1fr] sm:items-end">
                <div className="relative overflow-hidden rounded-sm bg-card">
                  <img src={heroPortrait} alt="Katherine Kleyman, employment attorney" className="aspect-[3/4] w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-primary/90 px-4 py-3 text-primary-foreground">
                    <p className="font-serif text-sm font-bold">Katherine Kleyman, Esq.</p>
                  </div>
                </div>
                <div className="border-l border-accent pl-6">
                  <p className="mb-3 font-serif text-lg text-secondary">The perspective</p>
                  <p className="max-w-xl text-pretty leading-relaxed text-foreground/75">
                    A former corporate counsel, Katherine understands how the other side operates. She uses that insight to protect and empower employees with clarity, care, and focused strategy.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase text-foreground/60">
                    <span>Fordham Law</span><span>NY & CA</span><span>Plaintiff-side</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="editorial-reveal self-start rounded-sm bg-primary p-7 text-primary-foreground lg:sticky lg:top-24 lg:col-span-4 lg:p-8 [animation-delay:120ms]">
              <p className="text-xs font-semibold uppercase text-accent">Start here</p>
              <h2 className="mt-4 font-serif text-3xl font-bold">Free case review</h2>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">If you believe your employer violated your rights, share the details for an initial review.</p>
              <div className="mt-8 space-y-3 border-y border-primary-foreground/15 py-6 text-sm">
                <p>Wrongful termination</p><p>Retaliation or discrimination</p><p>Workplace harassment</p>
              </div>
              <a href={freeReview} className="mt-7 flex w-full items-center justify-between rounded-sm bg-accent px-5 py-4 font-semibold text-accent-foreground transition-colors hover:bg-primary-foreground">Request a free review <ArrowRight size={18} /></a>
              <a href="tel:16465835001" className="mt-5 flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-primary-foreground"><Phone size={15} /> 1-646-583-5001</a>
              <p className="mt-6 text-[11px] leading-relaxed text-primary-foreground/50">Submitting a request does not create an attorney-client relationship.</p>
            </aside>
          </div>
        </section>

        <section id="practice" className="border-y border-border bg-card px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase text-secondary">Areas of practice</p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-primary sm:text-4xl">Strategic plaintiff advocacy</h2>
              </div>
              <p className="max-w-2xl text-pretty leading-relaxed text-foreground/70 lg:col-span-2 lg:pt-7">When your job is on the line, so are your income, your rights, and your dignity. Katherine provides focused guidance through difficult workplace disputes.</p>
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

        <section id="experience" className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <img src={profilePortrait} alt="Katherine Kleyman seated in her office" className="aspect-square w-full rounded-sm object-cover" />
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <p className="text-xs font-semibold uppercase text-accent">Meet Katherine</p>
              <h2 className="mt-5 max-w-2xl text-balance font-serif text-3xl font-bold leading-tight sm:text-5xl">Insight from both sides of the table.</h2>
              <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/75 sm:text-lg">Katherine Kleyman is a dedicated employment attorney and former corporate counsel. That background gives her a practical understanding of employer strategy—knowledge she now brings to workers pursuing justice.</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/65">A graduate of Fordham University School of Law, Katherine practices in New York and California and offers contingency-based representation in qualified cases.</p>
              <a href={freeReview} className="mt-9 inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-semibold text-accent transition-colors hover:text-primary-foreground">Discuss your situation <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="consultation" className="bg-background px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase text-secondary">Choose the right next step</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-primary sm:text-5xl">Clear counsel begins with the right conversation.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="border-t-2 border-primary py-7 md:pr-10">
                <p className="text-xs font-semibold uppercase text-secondary">For unlawful workplace treatment</p>
                <h3 className="mt-4 font-serif text-2xl font-bold text-primary">Free case review</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70">For former or current employees who believe they may have an employment law claim.</p>
                <a href={freeReview} className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary">Book a free review <ArrowRight size={16} /></a>
              </article>
              <article className="border-t-2 border-accent py-7 md:pl-10">
                <p className="text-xs font-semibold uppercase text-secondary">Still employed and need advice</p>
                <h3 className="mt-4 font-serif text-2xl font-bold text-primary">Paid strategy session</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70">Focused legal guidance for navigating a current workplace issue and planning your next steps.</p>
                <a href={strategySession} className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary">Book a strategy session <ArrowRight size={16} /></a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary px-5 py-14 text-primary-foreground sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-primary-foreground/15 pb-10 md:grid-cols-3">
            <div><p className="font-serif text-xl font-bold">Katherine Kleyman, Esq.</p><p className="mt-4 text-sm text-primary-foreground/60">Employment counsel for workers in New York and California.</p></div>
            <div><p className="text-xs font-semibold uppercase text-accent">Contact</p><address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/70"><p><a href="tel:16465835001">1-646-583-5001</a></p><p>221 Kings Hwy<br />Brooklyn, NY 11223</p></address></div>
            <div><p className="text-xs font-semibold uppercase text-accent">Consultation</p><div className="mt-4 flex flex-col gap-3 text-sm"><a href={freeReview}>Free Case Review</a><a href={strategySession}>Paid Strategy Session</a></div></div>
          </div>
          <div className="mt-8 flex flex-col gap-3 text-[11px] text-primary-foreground/45 sm:flex-row sm:justify-between"><p>Attorney Advertising. Prior results do not guarantee a similar outcome.</p><p>© 2026 Katherine Kleyman, Esq.</p></div>
        </div>
      </footer>
    </div>
  );
}