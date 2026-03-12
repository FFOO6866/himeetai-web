import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    title: "Intelligence",
    subtitle: "Know Your Market",
    description:
      "Kairos uses Market Intelligence, Competitor Analyst, and Customer Profiler agents to build a living picture of your landscape — opportunities, threats, and ideal buyers, continuously updated.",
  },
  {
    title: "Action",
    subtitle: "Move with Precision",
    description:
      "Lead Hunter and Campaign Architect agents turn intelligence into action — sourcing scored prospects, designing multi-channel campaigns, and generating outreach-ready briefs.",
  },
  {
    title: "Control",
    subtitle: "Stay in Command",
    description:
      "The GTM Strategist agent synthesizes everything into a unified playbook. On Pro and Enterprise tiers, human strategists review, refine, and keep your go-to-market on target.",
  },
];

const PhilosophySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section ref={ref} className="page-section">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          The Kairos Framework
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          Intelligence. <span className="gradient-text">Action. Control.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            className="p-6 rounded-lg bg-card border border-border text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.25 + i * 0.15 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-2 block">
              {pillar.subtitle}
            </span>
            <h3 className="font-display font-bold text-foreground text-xl mb-3">
              {pillar.title}
            </h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;
