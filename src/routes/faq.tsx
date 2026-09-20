import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { ConsultationBand, PageHero, SiteShell } from "@/components/site-shell";
import { faqs, pageMeta, SITE_URL } from "@/lib/site-content";

const title = "Employment Law FAQ | New York & California Employees";
const description = "Answers to common questions about employment claims, attorney fees, workplace advice, deadlines, and employee representation in New York and California.";

export const Route = createFileRoute("/faq")({
  head: () => ({ ...pageMeta(title, description, "/faq"), scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "@id": `${SITE_URL}/faq#faq`, mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }) }] }),
  component: FaqPage,
});

function FaqPage() {
  return <SiteShell><PageHero eyebrow="Questions & Answers" title="What employees ask most." intro="General information about employment claims, consultations, fees, and timing. Your particular situation deserves a direct review." /><section className="bg-card px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto max-w-4xl divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-start justify-between gap-6"><h2 className="font-serif text-xl font-bold text-primary">{question}</h2><ChevronDown size={20} className="mt-1 shrink-0 text-secondary transition-transform group-open:rotate-180" /></summary><p className="mt-4 max-w-3xl leading-relaxed text-foreground/70">{answer}</p></details>)}</div></section><ConsultationBand /></SiteShell>;
}
