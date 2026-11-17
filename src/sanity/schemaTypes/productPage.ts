
import { defineField, defineType } from "sanity";

export const productPage = defineType({
  name: "productPage",
  title: "Product",
  type: "document",
  __experimental_formPreviewTitle: false,

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "Discover Our Signature Gift Set",
    }),

    defineField({
      name: "title",
      title: "Product Heading",
      type: "string",
      initialValue: "Heartly’s Pocket of Feelings",
    }),

    defineField({
      name: "description",
      title: "Product Description",
      type: "text",
      rows: 3,
      initialValue:
        "A playful gift set that makes talking about feelings easier, more natural, and more fun.",
    }),

    defineField({
      name: "howItWorksTitle",
      title: "How It Works Heading",
      type: "string",
      initialValue: "How It Works:",
    }),

    defineField({
      name: "steps",
      title: "How It Works Steps",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "Read Heartly’s story.",
        "Choose a feeling heart from his pocket.",
        "Place it on his chest to share how you feel.",
        "Explore the matching emotion card together to keep the conversation going.",
      ],
    }),

    defineField({
      name: "features",
      title: "Product Features",
      type: "array",
      validation: (Rule) => Rule.max(4),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Feature Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alternative Text",
                  type: "string",
                }),
              ],
            }),
            defineField({
              name: "line1",
              title: "First Label Line",
              type: "string",
            }),
            defineField({
              name: "line2",
              title: "Second Label Line",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "line1",
              subtitle: "line2",
              media: "image",
            },
          },
        },
      ],
      initialValue: [
        { _key: "product1", line1: "Beautiful", line2: "Storybook" },
        { _key: "product2", line1: "Plush Fox", line2: "Companion" },
        { _key: "product3", line1: "9 Feeling", line2: "Hearts" },
        { _key: "product4", line1: "9 Emotion", line2: "Cards" },
      ],
    }),

    defineField({
      name: "sectionImage",
      title: "Product Section Artwork",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "button",
      title: "Learn More Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          initialValue: "Learn More",
        }),
        defineField({
          name: "href",
          title: "Button Link",
          type: "string",
          initialValue: "/shop",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Product",
        subtitle: "Product Section Content",
      };
    },
  },
});
