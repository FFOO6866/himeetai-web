import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { capabilities } from "@/data/services";

const CapabilityPillars = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section ref={ref} className="page-section-wide">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Your AI Agents
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          The <span className="gradient-text">Full Bench</span>
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mt-4 max-w-xl mx-auto story-body">
          Specialized agents that work together on your go-to-market —
          with more agents added as we expand into new verticals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.id}
            className="p-5 rounded-lg bg-card border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
          >
            <h3 className="font-display font-bold text-foreground text-sm mb-2">
              {cap.title}
            </h3>
            <p className="text-xs text-muted-foreground font-body leading-relaxed mb-3">
              {cap.description}
            </p>
            <ul className="flex flex-col gap-1.5">
              {cap.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-1.5 text-xs font-body text-foreground/80"
                >
                  <span className="text-primary mt-0.5 shrink-0">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CapabilityPillars;
