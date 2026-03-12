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
    id: "market-intelligence",
    title: "Market Intelligence Agent",
    description:
      "Continuously scans your industry landscape, tracks trends, and surfaces opportunities your competitors haven't spotted yet.",
    features: [
      "Industry trend monitoring",
      "Total addressable market sizing",
      "Market gap identification",
      "Emerging opportunity alerts",
    ],
  },
  {
    id: "competitor-analyst",
    title: "Competitor Analyst Agent",
    description:
      "Builds live competitor profiles with SWOT analysis, pricing intelligence, and positioning maps — updated in real time.",
    features: [
      "Automated SWOT analysis",
      "Pricing & packaging tracking",
      "Positioning & messaging audit",
      "Competitive move alerts",
    ],
  },
  {
    id: "customer-profiler",
    title: "Customer Profiler Agent",
    description:
      "Defines and scores your ideal customer profiles using firmographic, technographic, and behavioral signals.",
    features: [
      "ICP definition & scoring",
      "Buyer persona generation",
      "Segment prioritization",
      "Intent signal detection",
    ],
  },
  {
    id: "lead-hunter",
    title: "Lead Hunter Agent",
    description:
      "Finds, scores, and prioritizes prospects that match your ICP — delivering ranked lead lists ready for outreach.",
    features: [
      "Automated prospect sourcing",
      "Lead scoring & ranking",
      "Contact enrichment",
      "Outreach-ready lead lists",
    ],
  },
  {
    id: "campaign-architect",
    title: "Campaign Architect Agent",
    description:
      "Designs multi-channel campaign briefs with messaging, targeting, and channel mix tailored to each segment.",
    features: [
      "Campaign brief generation",
      "Channel mix optimization",
      "Messaging framework creation",
      "A/B test recommendations",
    ],
  },
  {
    id: "gtm-strategist",
    title: "GTM Strategist Agent",
    description:
      "Synthesizes outputs from all agents into a unified go-to-market playbook with priorities, timelines, and KPIs.",
    features: [
      "GTM playbook assembly",
      "Priority & timeline setting",
      "KPI framework definition",
      "Resource allocation guidance",
    ],
  },
];

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Kairos Starter",
    audience: "Self-Serve Platform",
    price: "$700/mo",
    description:
      "Full access to Kairos and all AI agents. Analyze your market, find leads, and generate campaign briefs — on your own schedule.",
    features: [
      "All AI agents",
      "Unlimited market & competitor analysis",
      "Lead scoring & prospect lists",
      "Campaign brief generation",
      "Self-serve dashboard",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "growth",
    name: "Kairos Pro",
    audience: "Platform + Strategist",
    price: "$2,500/mo",
    description:
      "Everything in Starter, plus a dedicated human strategist who reviews outputs, refines targeting, and keeps your GTM on track.",
    features: [
      "Everything in Starter, plus:",
      "Dedicated strategist reviews",
      "Bi-weekly strategy calls",
      "Custom agent configurations",
      "Priority support & Slack channel",
      "Quarterly GTM audit",
    ],
    recommended: true,
    cta: "Start with a Strategist",
  },
  {
    id: "enterprise",
    name: "Kairos Enterprise",
    audience: "Embedded Team",
    price: "$7,000/mo",
    description:
      "A senior strategist team embedded in your operations, with custom AI agent workflows built for your specific market and goals.",
    features: [
      "Everything in Pro, plus:",
      "Embedded strategist team",
      "Custom AI agent workflows",
      "Multi-market expansion support",
      "API & data warehouse access",
      "Quarterly business reviews",
      "Dedicated SLA",
    ],
    cta: "Talk to Us",
  },
];
