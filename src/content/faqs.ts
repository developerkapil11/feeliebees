export type FaqLink = {
  leadIn?: string;
  label: string;
  href: string;
};

export type FaqItem = {
  id: string;
  order: number;
  question: string;
  answer: string;
  steps?: string[];
  link?: FaqLink;
};

export const defaultFaqs: FaqItem[] = [
  {
    id: "age-range",
    order: 10,
    question: "What age is Heartly's Pocket of Feelings designed for?",
    answer:
      "Heartly's Pocket of Feelings is designed for children ages 3–7, with playful activities and conversations that support emotional learning through story, play, and connection.",
  },
  {
    id: "gift-set-contents",
    order: 20,
    question: "What's included in the gift set?",
    answer:
      "Each gift set includes a Heartly plush fox with 9 interchangeable emotion hearts, a beautifully illustrated storybook, and 9 matching emotion cards.",
  },
  {
    id: "how-to-use",
    order: 30,
    question: "How do you use the set?",
    answer: "Using Heartly is simple:",
    steps: [
      "Read the story and discover the feelings Heartly experiences throughout his forest adventure.",
      "Choose a feeling heart that matches how you're feeling today.",
      "Place it on Heartly's chest to share your feeling with him.",
      "Read the matching emotion card together and explore what you can do when you feel that way.",
    ],
    link: {
      leadIn: "For a closer look at how everything works together, read our blog post:",
      label: "Discover Heartly's Pocket of Feelings",
      href: "/blog/discover-heartlys-pocket-of-feelings",
    },
  },
  {
    id: "independent-play",
    order: 40,
    question: "Can children use it independently?",
    answer:
      "Yes. Heartly encourages open-ended imaginative play, giving children a safe space to explore feelings, create stories, and develop empathy as they step into different characters and perspectives.",
  },
  {
    id: "all-children",
    order: 50,
    question: "Is it designed for boys and girls?",
    answer:
      "Yes. Heartly's Pocket of Feelings is designed for all children. Every child experiences big feelings, and every child deserves a safe, playful way to understand and share them.",
  },
  {
    id: "not-ready-to-talk",
    order: 60,
    question: "What if my child doesn't want to talk about feelings?",
    answer:
      "That's completely okay. Some children find it easier to talk about feelings than others. Play is often a gentle, natural way to encourage emotional conversations without pressure.",
    link: {
      leadIn: "For more tips, read our blog post:",
      label: "Helping Children Open Up About Their Feelings",
      href: "/blog/help-children-talk-about-feelings",
    },
  },
  {
    id: "expressing-feelings",
    order: 70,
    question: "Can this help children who struggle to express themselves?",
    answer:
      "It can. Heartly helps children discover that all feelings are natural and welcome, while giving them a playful new language for talking about emotions. By connecting feelings with simple symbols and stories, you may hear your child say they're feeling “cloudy” or “stormy” instead of struggling to find the right words.",
  },
  {
    id: "safety-testing",
    order: 80,
    question: "Is the product safety tested?",
    answer:
      "Yes. Heartly's Pocket of Feelings has been safety tested and complies with U.S. safety requirements for children's products.",
  },
];
