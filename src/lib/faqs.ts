import { defaultFaqs, type FaqItem } from "@/content/faqs";

type SanityFaq = Omit<FaqItem, "id"> & { id?: string };

export async function getFaqs(): Promise<FaqItem[]> {
  const hasSanityConfig =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!hasSanityConfig) {
    return defaultFaqs;
  }

  try {
    const { client } = await import("@/sanity/lib/client");
    const sanityFaqs = await client.fetch<SanityFaq[]>(
      `*[_type == "faq" && coalesce(published, true)] | order(order asc, _createdAt asc) {
        "id": _id,
        order,
        question,
        answer,
        steps,
        "link": select(
          defined(linkLabel) && defined(linkHref) => {
            "leadIn": linkLeadIn,
            "label": linkLabel,
            "href": linkHref
          }
        )
      }`,
      {},
      { next: { revalidate: 60 } }
    );

    const merged = new Map(defaultFaqs.map((item) => [item.question, item]));

    for (const item of sanityFaqs) {
      if (!item.question || !item.answer) continue;
      merged.set(item.question, {
        ...item,
        id: item.id || `sanity-${item.order}-${item.question}`,
        order: item.order ?? 999,
      });
    }

    return [...merged.values()].sort((a, b) => a.order - b.order);
  } catch {
    return defaultFaqs;
  }
}
