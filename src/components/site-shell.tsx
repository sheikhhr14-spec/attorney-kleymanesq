import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Phone, Scale } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { FREE_REVIEW_URL, STRATEGY_SESSION_URL, practices } from "@/lib/site-content";

const mainNav = [
  ["/about", "About"],
  ["/practice-areas", "Practice Areas"],
  ["/new-york", "New York"],
  ["/california", "California"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
] as const;

export function Brand() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Katherine Kleyman, Esq. home">
      <Scale className="shrink-0 text-secondary" size={20} aria-hidden="true" />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate font-serif text-base font-bold text-primary sm:text-lg">Katherine Kleyman</span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary">Attorney at Law</span>
      </span>
    </Link>
  );
}

export function SectionLabel({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${inverse ? "text-accent" : "text-secondary"}`}>{children}</p>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
            {mainNav.map(([to, label]) => (
              <Link key={to} to={to} activeProps={{ className: "text-primary" }} className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">{label}</Link>
            ))}
            <Button asChild className="h-auto rounded-sm px-5 py-3">
              <a href={FREE_REVIEW_URL}>Free Case Review <ArrowRight /></a>
            </Button>
          </nav>
          <div className="flex items-center gap-3 xl:hidden">
            <Button asChild size="icon" className="rounded-sm">
              <a href="tel:16465835001" aria-label="Call 1-646-583-5001"><Phone /></a>
            </Button>
            <details className="relative">
              <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-sm border border-border" aria-label="Open navigation"><Menu size={20} /></summary>
              <nav className="absolute right-0 top-12 flex w-64 flex-col border border-border bg-background p-3 shadow-xl" aria-label="Mobile navigation">
                <Link to="/" className="px-3 py-3 text-sm hover:text-primary">Home</Link>
                {mainNav.map(([to, label]) => <Link key={to} to={to} className="px-3 py-3 text-sm hover:text-primary">{label}</Link>)}
                <a href={FREE_REVIEW_URL} className="mt-2 bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground">Free Case Review</a>
              </nav>
            </details>
          </div>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="bg-primary px-5 py-14 text-primary-foreground sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-primary-foreground/15 pb-10 md:grid-cols-4">
            <div><p className="font-serif text-xl font-bold">Katherine Kleyman, Esq.</p><p className="mt-4 text-sm text-primary-foreground/60">Employment counsel for workers in New York and California.</p></div>
            <div><SectionLabel inverse>Practice Areas</SectionLabel><div className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/70">{practices.map((item) => <Link key={item.slug} to="/practice-areas/$slug" params={{ slug: item.slug }} className="hover:text-primary-foreground">{item.shortTitle}</Link>)}</div></div>
            <div><SectionLabel inverse>Locations</SectionLabel><div className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/70"><Link to="/new-york">New York</Link><Link to="/california">California</Link><Link to="/about">About Katherine</Link><Link to="/faq">FAQ</Link></div></div>
            <div><SectionLabel inverse>Contact</SectionLabel><div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70"><a href="tel:16465835001">1-646-583-5001</a><p>221 Kings Hwy<br />Brooklyn, NY 11223</p><a href={FREE_REVIEW_URL}>Free Case Review</a><a href={STRATEGY_SESSION_URL}>Paid Strategy Session</a></div></div>
          </div>
          <div className="mt-8 flex flex-col gap-3 text-[11px] text-primary-foreground/45 sm:flex-row sm:justify-between"><p>Attorney Advertising. Prior results do not guarantee a similar outcome. General information only, not legal advice.</p><p>© 2026 Katherine Kleyman, Esq.</p></div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="border-b border-border px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
        <div className="editorial-reveal lg:col-span-8"><SectionLabel>{eyebrow}</SectionLabel><h1 className="mt-5 max-w-4xl text-balance font-serif text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-foreground/75">{intro}</p>{children}</div>
        <aside className="self-start border-l-2 border-accent pl-7 lg:col-span-4 lg:mt-8"><p className="font-serif text-xl font-bold text-primary">Talk with Katherine</p><p className="mt-3 text-sm leading-relaxed text-foreground/65">Employment deadlines can be strict. Start with a confidential review of your situation.</p><Button asChild className="mt-6 h-auto rounded-sm px-5 py-4"><a href={FREE_REVIEW_URL}>Free Case Review <ArrowRight /></a></Button><a href="tel:16465835001" className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary"><Phone size={15} /> 1-646-583-5001</a></aside>
      </div>
    </section>
  );
}

export function ConsultationBand() {
  return <section className="bg-primary px-5 py-16 text-primary-foreground sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><SectionLabel inverse>Take the next step</SectionLabel><h2 className="mt-3 font-serif text-3xl font-bold">Tell Katherine what happened.</h2><p className="mt-3 max-w-2xl text-primary-foreground/70">Get a direct assessment of your employment situation and the options that may be available.</p></div><Button asChild className="h-auto shrink-0 rounded-sm bg-accent px-6 py-4 text-accent-foreground hover:bg-primary-foreground"><a href={FREE_REVIEW_URL}>Request a free review <ArrowRight /></a></Button></div></section>;
}
