export const SITE_URL = "https://www.kleymanesq.com";
export const FREE_REVIEW_URL = "https://calendly.com/kathykleyman/freeconsultation?back=1";
export const STRATEGY_SESSION_URL = "https://calendly.com/kathykleyman/paid-consultation-employment-strategy-guidance";

export type Practice = {
  slug: "wrongful-termination" | "retaliation" | "discrimination" | "workplace-harassment";
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  concerns: string[];
  process: string[];
};

export const practices: Practice[] = [
  {
    slug: "wrongful-termination",
    title: "Wrongful Termination",
    shortTitle: "Wrongful termination",
    summary: "Counsel for employees who believe they were fired for an unlawful reason under New York, California, or federal law.",
    intro: "Losing a job can be devastating. When a termination follows protected activity, reflects discrimination, or violates another workplace protection, an employee may have legal options.",
    concerns: ["Termination after reporting misconduct", "Discriminatory reasons for dismissal", "Leave-related or accommodation disputes", "Pretextual performance allegations"],
    process: ["Review the timeline and employment records", "Identify the stated and possible real reasons", "Assess applicable state and federal protections", "Develop a practical path toward resolution"],
  },
  {
    slug: "retaliation",
    title: "Workplace Retaliation",
    shortTitle: "Retaliation",
    summary: "Advocacy when an employer punishes a worker for reporting misconduct or exercising a legally protected right.",
    intro: "Employees should not have to choose between speaking up and protecting their careers. Retaliation can take many forms, from sudden discipline to demotion or termination.",
    concerns: ["Discipline after an internal complaint", "Punishment for requesting protected leave", "Retaliation after reporting discrimination", "Adverse action after raising wage or safety concerns"],
    process: ["Document the protected activity", "Compare timing and treatment before and after", "Preserve communications and performance records", "Evaluate agency, negotiation, or litigation options"],
  },
  {
    slug: "discrimination",
    title: "Workplace Discrimination",
    shortTitle: "Discrimination",
    summary: "Representation for unlawful workplace treatment based on a legally protected characteristic.",
    intro: "Workplace decisions cannot lawfully be based on protected characteristics. Katherine helps employees understand patterns, evidence, deadlines, and available remedies.",
    concerns: ["Unequal pay or opportunities", "Biased discipline or termination", "Pregnancy or disability discrimination", "Failure to provide a reasonable accommodation"],
    process: ["Identify the challenged employment decision", "Review comparators, comments, and patterns", "Assess New York, California, and federal law", "Choose a strategy aligned with the employee’s goals"],
  },
  {
    slug: "workplace-harassment",
    title: "Workplace Harassment",
    shortTitle: "Workplace harassment",
    summary: "Clear, dignified guidance for employees facing hostile, abusive, or sexually harassing conduct at work.",
    intro: "Harassment can undermine a person’s safety, health, and ability to work. Employees deserve a confidential, careful review of what occurred and how the employer responded.",
    concerns: ["Sexual harassment or unwanted conduct", "Hostile comments tied to a protected trait", "Employer failure to address complaints", "Retaliation after reporting harassment"],
    process: ["Create a clear chronology", "Preserve messages, reports, and witness details", "Review the employer’s response", "Discuss protective and legal next steps"],
  },
];

export const faqs = [
  ["Do I have an employment case in New York or California?", "It depends on what happened, when it happened, and the reason behind your employer’s decision. Both states protect employees against discrimination, retaliation, and harassment. A direct case review is the best way to assess your facts."],
  ["How much does it cost to hire an employment attorney?", "Katherine offers a free case review, and contingency-based representation is available in qualified cases. A paid strategy session is also available for employees seeking focused advice while still employed."],
  ["Can I get advice while I still have my job?", "Yes. A paid strategy session can help you understand your rights, protect relevant records, and think through next steps before making a decision."],
  ["How long do I have to bring a claim?", "Deadlines vary by claim and state, and some agency filings must occur before a lawsuit. Waiting can affect a valid claim, so prompt review is important."],
  ["Why does former corporate counsel experience matter?", "Katherine previously advised companies. That experience informs how she evaluates employer strategy, documentation, and risk on behalf of workers."],
  ["Do you represent employers?", "No. Katherine represents employees in New York and California."],
] as const;

export function pageMeta(title: string, description: string, path: string, type = "website") {
  const canonical = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
