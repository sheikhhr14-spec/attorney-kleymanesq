import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { ConsultationBand, PageHero, SectionLabel, SiteShell } from "@/components/site-shell";
import { pageMeta, practices, SITE_URL } from "@/lib/site-content";

const title = "New York Employment Lawyer for Employees | Katherine Kleyman";
const description = "Employee-side employment law counsel in New York for wrongful termination, retaliation, discrimination, and workplace harassment.";
const cities = ["Brooklyn", "Manhattan", "Queens", "The Bronx", "Staten Island", "Long Island", "Westchester"];

export const Route = createFileRoute("/new-york")({
  head: () => ({ ...pageMeta(title, description, "/new-york"), meta: [...pageMeta(title, description, "/new-york").meta, { name: "geo.region", content: "US-NY" }, { name: "geo.placename", content: "Brooklyn, New York" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "Katherine Kleyman, Esq. — New York Employment Law", url: `${SITE_URL}/new-york`, telephone: "+1-646-583-5001", address: { "@type": "PostalAddress", streetAddress: "221 Kings Hwy", addressLocality: "Brooklyn", addressRegion: "NY", postalCode: "11223", addressCountry: "US" }, areaServed: { "@type": "State", name: "New York" } }) }] }),
  component: NewYorkPage,
});

function NewYorkPage() {
  return <SiteShell><PageHero eyebrow="New York Employment Law" title="Employment lawyer for New York employees." intro="Katherine represents workers across New York in workplace disputes involving termination, retaliation, discrimination, and harassment." /><section className="bg-card px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12"><div className="lg:col-span-7"><SectionLabel>New York representation</SectionLabel><h2 className="mt-4 font-serif text-3xl font-bold text-primary">Clear strategy for difficult workplace decisions.</h2><p className="mt-5 leading-relaxed text-foreground/70">New York employees may be protected by federal, state, and local laws. Which protections apply depends on the employer, location, conduct, and timing. Katherine helps workers organize the facts and understand practical next steps.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{practices.map((item) => <Link key={item.slug} to="/practice-areas/$slug" params={{ slug: item.slug }} className="border-t border-border py-4 font-serif font-bold text-primary hover:text-secondary">{item.title}</Link>)}</div></div><aside className="border-l-2 border-accent pl-7 lg:col-span-5"><div className="flex items-center gap-2 text-secondary"><MapPin size={18} /><h2 className="font-serif text-2xl font-bold text-primary">Areas served</h2></div><ul className="mt-6 flex flex-wrap gap-2">{cities.map((city) => <li key={city} className="rounded-sm bg-muted px-3 py-2 text-sm">{city}</li>)}</ul><p className="mt-6 text-sm leading-relaxed text-foreground/65">Office: 221 Kings Hwy, Brooklyn, NY 11223. Remote consultations are available.</p></aside></div></section><ConsultationBand /></SiteShell>;
}
