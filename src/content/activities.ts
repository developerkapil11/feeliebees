export const activities = [
  {
    id: "feelings",
    title: "My Feelings Check-In",
    category: "Feelings",
    access: "direct",
    description:
      "Pause, pick a feelings face, and draw what’s in your heart. A gentle way to start a conversation.",
    preview: "/activities/feelings-preview.webp",
    file: "/activities/feelings.pdf",
  },
  {
    id: "colouring",
    title: "Colour with Heartly",
    category: "Colouring",
    access: "direct",
    description:
      "Grab your favourite crayons and bring our little fox’s world to life, one happy colour at a time.",
    preview: "/activities/colouring-preview.webp",
    file: "/activities/colouring.pdf",
  },
  {
    id: "kindness",
    title: "Little Acts of Kindness",
    category: "Kindness",
    access: "email",
    description:
      "Seven small ways to brighten someone’s day, with space to dream up a kind idea of your own.",
    preview: "/activities/kindness-preview.webp",
    file: null,
  },
] as const;
