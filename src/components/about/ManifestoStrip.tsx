import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const comparisons = [
  {
    legacy: "Hire a 6-person marketing team ($30k+/mo)",
    agentic: "Kairos: AI agents + strategist from $700/mo",
  },
  {
    legacy: "Wait 3 months for market research",
    agentic: "Competitor SWOT and market map in minutes",
  },
  {
    legacy: "Pay agency retainers with vague deliverables",
    agentic: "See every output: lead lists, campaign briefs, SWOT analyses",
  },
  {
    legacy: "One account manager juggling 12 clients",
    agentic: "Dedicated agents focused solely on your market",
  },
  {
    legacy: "Monthly PowerPoint reports",
    agentic: "Live dashboard with real-time intelligence",
  },
];

const ManifestoStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section ref={ref} className="page-section-wide">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Why Kairos Wins
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          Legacy GTM is <span className="gradient-text">Broken</span>
        </h2>
      </motion.div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {comparisons.map((item, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          >
            <div className="px-5 py-4 rounded-lg bg-card border border-border opacity-60">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                Traditional
              </span>
              <p className="text-sm font-body text-muted-foreground">
                {item.legacy}
              </p>
            </div>
            <div className="px-5 py-4 rounded-lg bg-card border border-border ring-1 ring-primary/20">
              <span className="text-xs uppercase tracking-[0.2em] text-primary block mb-1">
                Kairos
              </span>
              <p className="text-sm font-body text-foreground">{item.agentic}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ManifestoStrip;
