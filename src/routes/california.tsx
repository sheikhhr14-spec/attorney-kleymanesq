import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { ConsultationBand, PageHero, SectionLabel, SiteShell } from "@/components/site-shell";
import { pageMeta, practices, SITE_URL } from "@/lib/site-content";

const title = "California Employment Lawyer for Employees | Katherine Kleyman";
const description = "Employee-side employment law counsel across California for wrongful termination, retaliation, discrimination, and workplace harassment.";
const cities = ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Orange County", "Sacramento", "Oakland"];

export const Route = createFileRoute("/california")({
  head: () => ({ ...pageMeta(title, description, "/california"), meta: [...pageMeta(title, description, "/california").meta, { name: "geo.region", content: "US-CA" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "LegalService", name: "Katherine Kleyman, Esq. — California Employment Law", url: `${SITE_URL}/california`, telephone: "+1-646-583-5001", areaServed: { "@type": "State", name: "California" } }) }] }),
  component: CaliforniaPage,
});

function CaliforniaPage() {
  return <SiteShell><PageHero eyebrow="California Employment Law" title="Employment lawyer for California employees." intro="Katherine represents California workers navigating workplace disputes involving termination, retaliation, discrimination, and harassment." /><section className="bg-card px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12"><div className="lg:col-span-7"><SectionLabel>California representation</SectionLabel><h2 className="mt-4 font-serif text-3xl font-bold text-primary">Focused advice in a complex legal landscape.</h2><p className="mt-5 leading-relaxed text-foreground/70">California provides significant workplace protections, but each claim depends on specific facts and deadlines. Katherine helps employees evaluate records, employer explanations, and a path aligned with their goals.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{practices.map((item) => <Link key={item.slug} to="/practice-areas/$slug" params={{ slug: item.slug }} className="border-t border-border py-4 font-serif font-bold text-primary hover:text-secondary">{item.title}</Link>)}</div></div><aside className="border-l-2 border-accent pl-7 lg:col-span-5"><div className="flex items-center gap-2 text-secondary"><MapPin size={18} /><h2 className="font-serif text-2xl font-bold text-primary">Areas served</h2></div><ul className="mt-6 flex flex-wrap gap-2">{cities.map((city) => <li key={city} className="rounded-sm bg-muted px-3 py-2 text-sm">{city}</li>)}</ul><p className="mt-6 text-sm leading-relaxed text-foreground/65">Remote consultations make statewide representation accessible.</p></aside></div></section><ConsultationBand /></SiteShell>;
}
