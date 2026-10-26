
import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Hero",
  type: "document",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "Helping little hearts understand big feelings",
    }),

    defineField({
        name: "title",
        title: "Hero Heading",
        type: "string",
        initialValue:
          'Growing <span>Emotional & Social Skills</span> Through Play.',
    }),

    defineField({
      name: "description",
      title: "Hero Description",
      type: "text",
      rows: 4,
      initialValue:
        "At FeelieBees, we believe emotional growth begins with connection. Our playful stories, games, and hands-on activities help children understand and share their feelings while connecting with the people who care for them.",
    }),

    defineField({
      name: "heroImage",
      title: "Hero Artwork",
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
      name: "primaryButton",
      title: "Primary Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          initialValue: "Meet Heartly",
        }),
        defineField({
          name: "href",
          title: "Button Link",
          type: "string",
          initialValue: "/shop",
        }),
      ],
    }),

    defineField({
      name: "amazonButton",
      title: "Amazon Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          initialValue: "Buy on Amazon",
        }),
        defineField({
          name: "url",
          title: "Amazon URL",
          type: "url",
        }),
      ],
    }),

    defineField({
      name: "features",
      title: "Hero Features",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Star", value: "star" },
                  { title: "Butterfly", value: "butterfly" },
                  { title: "Heart", value: "heart" },
                ],
                layout: "dropdown",
              },
            }),
            defineField({
              name: "text",
              title: "Feature Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "text",
              subtitle: "icon",
            },
          },
        },
      ],
      initialValue: [
        { _key: "feature1", icon: "star", text: "Builds Emotional Skills" },
        { _key: "feature2", icon: "butterfly", text: "Fun & Engaging" },
        {
          _key: "feature3",
          icon: "heart",
          text: "Loved by Families & Educators",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Hero",
        subtitle: "Hero Section Content",
      };
    },
  },
});
