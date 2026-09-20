import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationBand, SectionLabel, SiteShell } from "@/components/site-shell";
import heroPortrait from "@/assets/katherine-ny-office-hero.png";
import officePortrait from "@/assets/katherine-actual-office.png";
import { FREE_REVIEW_URL, pageMeta, practices, SITE_URL } from "@/lib/site-content";

const title = "Employment Lawyer for Employees in New York & California | Katherine Kleyman";
const description = "Katherine Kleyman, Esq. represents employees in New York and California in wrongful termination, retaliation, discrimination, and workplace harassment matters.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["Attorney", "LegalService"], "@id": `${SITE_URL}/#practice`, name: "Katherine Kleyman, Esq.", url: SITE_URL, telephone: "+1-646-583-5001", description, address: { "@type": "PostalAddress", streetAddress: "221 Kings Hwy", addressLocality: "Brooklyn", addressRegion: "NY", postalCode: "11223", addressCountry: "US" }, areaServed: [{ "@type": "State", name: "New York" }, { "@type": "State", name: "California" }], founder: { "@type": "Person", name: "Katherine Kleyman", honorificSuffix: "Esq.", jobTitle: "Employment Attorney", alumniOf: { "@type": "CollegeOrUniversity", name: "Fordham University School of Law" } } },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Katherine Kleyman, Esq." },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({ ...pageMeta(title, description, "/"), scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }] }),
  component: HomePage,
});

function HomePage() {
  return <SiteShell>
    <section className="border-b border-border px-5 py-8 sm:px-8 sm:py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
        <div className="editorial-reveal lg:col-span-7">
          <SectionLabel>Employment law · New York & California</SectionLabel>
          <h1 className="mt-5 max-w-4xl text-balance font-serif text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">Employment counsel for the people who power the workplace.</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/75">Katherine Kleyman, Esq. represents employees — never employers — in wrongful termination, retaliation, discrimination, and workplace harassment matters.</p>
          <div className="mt-8 flex flex-wrap gap-4"><Button asChild className="h-auto rounded-sm px-6 py-4"><a href={FREE_REVIEW_URL}>Free Case Review <ArrowRight /></a></Button><Button asChild variant="outline" className="h-auto rounded-sm px-6 py-4"><Link to="/about">Meet Katherine</Link></Button></div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-xs font-semibold uppercase tracking-wider text-foreground/60"><span>Former corporate counsel</span><span>Fordham Law</span><span>Licensed in NY & CA</span></div>
        </div>
        <div className="editorial-reveal relative lg:col-span-5 [animation-delay:120ms]">
          <img src={heroPortrait} alt="Katherine Kleyman standing in a New York office overlooking Manhattan" width={1280} height={1600} className="aspect-[4/5] w-full rounded-sm object-cover object-top" />
          <div className="absolute inset-x-4 bottom-4 bg-primary/95 px-5 py-4 text-primary-foreground"><p className="font-serif text-lg font-bold">Katherine Kleyman, Esq.</p><p className="mt-1 text-xs text-primary-foreground/65">Employment Attorney · New York & California</p></div>
        </div>
      </div>
    </section>
    <section className="bg-card px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-3"><div><SectionLabel>Practice Areas</SectionLabel><h2 className="mt-4 font-serif text-3xl font-bold text-primary sm:text-4xl">Strategic plaintiff advocacy.</h2></div><p className="max-w-2xl leading-relaxed text-foreground/70 lg:col-span-2 lg:pt-7">When your job is on the line, so are your income, your rights, and your dignity. Katherine provides focused guidance through difficult workplace disputes.</p></div><div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{practices.map((item, index) => <article key={item.slug} className="min-h-72 bg-card p-7 transition-colors hover:bg-muted"><span className="font-serif text-sm text-secondary">0{index + 1}</span><h3 className="mt-10 font-serif text-xl font-bold text-primary">{item.shortTitle}</h3><p className="mt-4 text-sm leading-relaxed text-foreground/65">{item.summary}</p><Link to="/practice-areas/$slug" params={{ slug: item.slug }} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Learn more <ArrowRight size={15} /></Link></article>)}</div></div></section>
    <section className="bg-primary px-5 py-16 text-primary-foreground sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center"><div className="lg:col-span-5"><img src={officePortrait} alt="Katherine Kleyman in her law office" loading="lazy" width={1200} height={1200} className="aspect-square w-full rounded-sm object-cover" /></div><div className="lg:col-span-7 lg:pl-8"><SectionLabel inverse>Why Katherine</SectionLabel><h2 className="mt-5 font-serif text-3xl font-bold sm:text-5xl">Insight from both sides of the table.</h2><p className="mt-7 text-lg leading-relaxed text-primary-foreground/75">As a former corporate counsel, Katherine understands how employers evaluate risk, build a record, and prepare a defense. She now uses that insight for employees.</p><ul className="mt-7 space-y-3 text-primary-foreground/70"><li className="flex gap-3"><Check className="text-accent" size={18} /> Direct, practical communication</li><li className="flex gap-3"><Check className="text-accent" size={18} /> Worker-focused representation</li><li className="flex gap-3"><Check className="text-accent" size={18} /> Strategy shaped around your goals</li></ul><Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-2 font-semibold text-accent">About Katherine <ArrowRight size={16} /></Link></div></div></section>
    <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><article className="border-t-2 border-primary pt-7"><div className="flex items-center gap-2"><MapPin className="text-secondary" size={18} /><SectionLabel>New York</SectionLabel></div><h2 className="mt-4 font-serif text-3xl font-bold text-primary">From Brooklyn across New York.</h2><p className="mt-4 max-w-xl leading-relaxed text-foreground/70">Serving employees in New York City, Long Island, Westchester, and throughout the state.</p><Link to="/new-york" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">New York employment law <ArrowRight size={16} /></Link></article><article className="border-t-2 border-accent pt-7"><div className="flex items-center gap-2"><MapPin className="text-secondary" size={18} /><SectionLabel>California</SectionLabel></div><h2 className="mt-4 font-serif text-3xl font-bold text-primary">Counsel across California.</h2><p className="mt-4 max-w-xl leading-relaxed text-foreground/70">Serving employees in Los Angeles, San Francisco, San Diego, San Jose, and communities statewide.</p><Link to="/california" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">California employment law <ArrowRight size={16} /></Link></article></div></section>
    <section className="border-y border-border bg-card px-5 py-16 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><SectionLabel>Start here</SectionLabel><h2 className="mt-3 font-serif text-3xl font-bold text-primary">A clear first conversation.</h2><p className="mt-3 text-foreground/70">Free review for potential claims. Call or book online.</p></div><div className="flex flex-wrap gap-4"><Button asChild className="h-auto rounded-sm px-6 py-4"><a href={FREE_REVIEW_URL}>Request a review <ArrowRight /></a></Button><Button asChild variant="outline" className="h-auto rounded-sm px-6 py-4"><a href="tel:16465835001"><Phone /> 1-646-583-5001</a></Button></div></div></section>
    <ConsultationBand />
  </SiteShell>;
}