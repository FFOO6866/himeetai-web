export type Story = {
  id: string;
  title: string;
  subtitle: string;
  scenes: {
    image: string;
    sceneNumber: string;
    headline: string;
    text: string;
  }[];
};

export const stories: Story[] = [
  {
    id: "bear",
    title: "The Bear in the Forest",
    subtitle: "A parable on strategy",
    scenes: [
      {
        image: "/stories/bear/scene1.png",
        sceneNumber: "I. The Encounter",
        headline: "Disruption Arrives",
        text: "Every industry faces its bear — an AI disruption that cannot be ignored. The question isn't whether it comes. It's whether you're ready.",
      },
      {
        image: "/stories/bear/scene2.png",
        sceneNumber: "II. Panic & Composure",
        headline: "Two Responses",
        text: "Most organizations panic. They sprint without direction, burning resources on reactive moves. The strategic few stay calm, observe, and plan.",
      },
      {
        image: "/stories/bear/scene3.png",
        sceneNumber: "III. Strategic Execution",
        headline: "Tie Your Shoes",
        text: "You don't need to outrun the bear. You need to outrun the competition. Strategy is preparation meeting opportunity with precision.",
      },
    ],
  },
  {
    id: "david",
    title: "David vs Goliath",
    subtitle: "A parable on leverage",
    scenes: [
      {
        image: "/stories/david/scene1.png",
        sceneNumber: "I. The Giant",
        headline: "The giant always looks unbeatable.",
        text: "In every market there is a Goliath — larger teams, deeper pockets, more resources. Most competitors assume the outcome is already decided.",
      },
      {
        image: "/stories/david/scene2.png",
        sceneNumber: "II. The Wrong Fight",
        headline: "Most challengers fight the wrong battle.",
        text: "They try to outspend, outscale, or outwork the giant. But competing on the giant's terms only reinforces the giant's advantage.",
      },
      {
        image: "/stories/david/scene3.png",
        sceneNumber: "III. Asymmetric Advantage",
        headline: "The smarter move changes the rules.",
        text: "David did not defeat Goliath with strength. He won by using a different weapon. In modern markets, intelligence and speed are the new asymmetry.",
      },
    ],
  },
  {
    id: "crow",
    title: "The Crow and the Pitcher",
    subtitle: "A parable on resourcefulness",
    scenes: [
      {
        image: "/stories/crow/scene1.png",
        sceneNumber: "I. The Drought",
        headline: "The problem seems impossible.",
        text: "Sometimes the opportunity is visible but just out of reach. Many organisations recognise the problem, but cannot access the solution.",
      },
      {
        image: "/stories/crow/scene2.png",
        sceneNumber: "II. Incremental Intelligence",
        headline: "Most teams try harder.",
        text: "They add more people, more meetings, more effort. But brute force rarely changes the physics of the problem.",
      },
      {
        image: "/stories/crow/scene3.png",
        sceneNumber: "III. The Overflow",
        headline: "The smarter approach changes the system.",
        text: "The crow did not force the solution. It redesigned the situation. Intelligence transforms problems that effort alone cannot solve.",
      },
    ],
  },
  {
    id: "tortoise",
    title: "The Tortoise and the Hare",
    subtitle: "A parable on consistency",
    scenes: [
      {
        image: "/stories/tortoise/scene1.png",
        sceneNumber: "I. The Sprint",
        headline: "Speed creates confidence.",
        text: "In many markets, early leaders look unstoppable. They move faster, grow quicker, and leave competitors far behind.",
      },
      {
        image: "/stories/tortoise/scene2.png",
        sceneNumber: "II. The Steady Path",
        headline: "Confidence becomes complacency.",
        text: "The hare believed the race was already won. Many organisations make the same mistake — assuming yesterday's advantage will hold tomorrow.",
      },
      {
        image: "/stories/tortoise/scene3.png",
        sceneNumber: "III. The Finish Line",
        headline: "Discipline quietly wins.",
        text: "The tortoise never tried to outrun the hare. It simply kept moving forward. In competitive markets, consistency and execution compound into advantage.",
      },
    ],
  },
  {
    id: "oak",
    title: "The Oak and the Reed",
    subtitle: "A parable on adaptability",
    scenes: [
      {
        image: "/stories/oak/scene1.png",
        sceneNumber: "I. The Storm",
        headline: "Change Is Relentless",
        text: "The winds of disruption don't stop. New models, new regulations, new competitors — the storm is permanent. Rigidity is a death sentence.",
      },
      {
        image: "/stories/oak/scene2.png",
        sceneNumber: "II. The Mighty Fall",
        headline: "Strength Becomes Weakness",
        text: "The oak stands tall and refuses to bend. Legacy systems, fixed processes, sunk-cost thinking — the strongest organizations break first.",
      },
      {
        image: "/stories/oak/scene3.png",
        sceneNumber: "III. Bend, Don't Break",
        headline: "Adaptability Is Power",
        text: "The reed survives because it bends. Adaptive AI strategy means building flexible systems, modular architectures, and teams that learn continuously.",
      },
    ],
  },
];
