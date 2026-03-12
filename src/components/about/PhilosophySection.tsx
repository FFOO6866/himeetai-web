import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    title: "Commander",
    subtitle: "You",
    description:
      "Set the vision, define the mission. Your strategic intent drives the bench. You stay in control — we amplify your direction.",
  },
  {
    title: "Mission Control",
    subtitle: "Our Strategists",
    description:
      "Human strategists who architect campaigns, calibrate agents, and ensure everything aligns with your business goals.",
  },
  {
    title: "The Agents",
    subtitle: "AI Workforce",
    description:
      "Autonomous agents that execute at scale — research, create, deploy, optimise. 24/7, no bottlenecks, no burnout. Directed by strategists, not left on autopilot.",
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
          Our Philosophy
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          Human Vision. <span className="gradient-text">Agentic Force.</span>
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
