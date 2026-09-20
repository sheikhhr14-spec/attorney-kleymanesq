import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionLabel, SiteShell } from "@/components/site-shell";
import { FREE_REVIEW_URL, pageMeta, STRATEGY_SESSION_URL } from "@/lib/site-content";

const title = "Contact Katherine Kleyman, Esq. | Employment Attorney";
const description = "Request a free employment case review or focused paid strategy session with Katherine Kleyman, Esq. Call 1-646-583-5001.";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta(title, description, "/contact"),
  component: ContactPage,
});

function ContactPage() {
  return <SiteShell><PageHero eyebrow="Contact" title="Tell Katherine what happened." intro="Employment deadlines can be strict. Choose the conversation that fits your situation, or call the office directly." /><section className="bg-card px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2"><article className="border-t-2 border-primary bg-background p-8"><SectionLabel>Potential legal claim</SectionLabel><h2 className="mt-4 font-serif text-2xl font-bold text-primary">Free case review</h2><p className="mt-4 leading-relaxed text-foreground/70">For current or former employees who believe they may have experienced unlawful treatment.</p><Button asChild className="mt-7 h-auto rounded-sm px-5 py-4"><a href={FREE_REVIEW_URL}>Request a free review <ArrowRight /></a></Button></article><article className="border-t-2 border-accent bg-background p-8"><SectionLabel>Still employed and seeking advice</SectionLabel><h2 className="mt-4 font-serif text-2xl font-bold text-primary">Paid strategy session</h2><p className="mt-4 leading-relaxed text-foreground/70">Focused guidance for a current workplace issue when you need to understand and plan your next steps.</p><Button asChild variant="outline" className="mt-7 h-auto rounded-sm px-5 py-4"><a href={STRATEGY_SESSION_URL}>Book a strategy session <ArrowRight /></a></Button></article></div><div className="mx-auto mt-12 grid max-w-7xl gap-6 border-t border-border pt-10 md:grid-cols-3"><div className="flex gap-3"><Phone className="shrink-0 text-secondary" size={18} /><div><p className="font-semibold text-primary">Phone</p><a href="tel:16465835001" className="mt-1 block text-sm">1-646-583-5001</a></div></div><div className="flex gap-3"><MapPin className="shrink-0 text-secondary" size={18} /><div><p className="font-semibold text-primary">Office</p><address className="mt-1 text-sm not-italic">221 Kings Hwy<br />Brooklyn, NY 11223</address></div></div><div className="flex gap-3"><Mail className="shrink-0 text-secondary" size={18} /><div><p className="font-semibold text-primary">Online</p><a href={FREE_REVIEW_URL} className="mt-1 block text-sm">Book a consultation</a></div></div></div><p className="mx-auto mt-10 max-w-7xl text-xs leading-relaxed text-foreground/55">Contacting this office does not create an attorney-client relationship. Information sent before an engagement is not confidential.</p></section></SiteShell>;
}