import { createFileRoute, notFound } from "@tanstack/react-router";
import { PracticePage } from "@/components/practice-page";
import { pageMeta, practices } from "@/lib/site-content";

export const Route = createFileRoute("/practice-areas/$slug")({
  loader: ({ params }) => {
    const practice = practices.find((item) => item.slug === params.slug);
    if (!practice) throw notFound();
    return practice;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Practice Area Unavailable | Katherine Kleyman, Esq." }, { name: "robots", content: "noindex" }] };
    const title = `${loaderData.title} Lawyer NY & CA | Katherine Kleyman`;
    return { ...pageMeta(title, loaderData.summary, `/practice-areas/${params.slug}`, "article"), scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: loaderData.title, description: loaderData.summary, provider: { "@type": "Attorney", name: "Katherine Kleyman, Esq." }, areaServed: ["New York", "California"] }) }] };
  },
  component: PracticeRoute,
});

function PracticeRoute() {
  return <PracticePage practice={Route.useLoaderData()} />;
}
