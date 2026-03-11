export interface CapabilityPillar {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Tier {
  id: "starter" | "growth" | "enterprise";
  name: string;
  audience: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  cta: string;
}

export const capabilities: CapabilityPillar[] = [
  {
    id: "strategy",
    title: "Strategy",
    description:
      "AI-powered market intelligence that maps your competitive landscape and identifies growth vectors in minutes, not months.",
    features: [
      "Competitive landscape mapping",
      "ICP identification & scoring",
      "Market opportunity analysis",
      "Go-to-market playbook generation",
    ],
  },
  {
    id: "communications",
    title: "Communications",
    description:
      "Autonomous content generation calibrated to your brand voice, audience segments, and channel requirements.",
    features: [
      "Brand voice calibration",
      "Multi-channel content generation",
      "Messaging framework creation",
      "Tone & sentiment analysis",
    ],
  },
  {
    id: "gtm-execution",
    title: "GTM Execution",
    description:
      "End-to-end campaign deployment across channels — from outbound sequences to paid media, orchestrated by AI agents.",
    features: [
      "Outbound sequence automation",
      "Campaign orchestration",
      "Lead nurture workflows",
      "Multi-channel deployment",
    ],
  },
  {
    id: "optimisation",
    title: "Optimisation",
    description:
      "Continuous performance analysis and real-time adjustments that compound results over time.",
    features: [
      "Real-time performance dashboards",
      "A/B test automation",
      "Conversion funnel analysis",
      "Budget allocation optimisation",
    ],
  },
  {
    id: "scale",
    title: "Scale",
    description:
      "Expand into new markets, segments, and channels without expanding headcount. Your fleet grows with you.",
    features: [
      "Multi-market expansion",
      "New segment targeting",
      "Channel diversification",
      "Autonomous scaling protocols",
    ],
  },
];

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Tier A — Launch",
    audience: "Startups & Early-Stage",
    price: "From $2,500/mo",
    description:
      "Self-serve AI growth engine. Perfect for startups ready to punch above their weight.",
    features: [
      "AI competitive intelligence",
      "Automated outbound sequences",
      "Content generation (2 channels)",
      "Monthly performance reports",
      "Self-serve dashboard access",
    ],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Tier B — Growth",
    audience: "SMEs & Scale-ups",
    price: "From $7,500/mo",
    description:
      "Full-stack agentic GTM with strategist oversight. The sweet spot for ambitious teams.",
    features: [
      "Everything in Launch, plus:",
      "Dedicated strategist check-ins",
      "Multi-channel campaign orchestration",
      "Advanced ICP scoring & segmentation",
      "Weekly optimisation cycles",
      "Custom integrations",
    ],
    recommended: true,
    cta: "Talk to a Strategist",
  },
  {
    id: "enterprise",
    name: "Tier C — Command",
    audience: "Enterprise",
    price: "Custom",
    description:
      "White-glove agentic operations embedded into your org. Human strategists + autonomous fleet.",
    features: [
      "Everything in Growth, plus:",
      "Embedded strategist team",
      "Custom AI agent workflows",
      "Multi-market expansion support",
      "Priority SLA & dedicated Slack",
      "Quarterly business reviews",
      "API & data warehouse access",
    ],
    cta: "Request Briefing",
  },
];
