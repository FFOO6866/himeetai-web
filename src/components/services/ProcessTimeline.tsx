import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your Kairos account in minutes. No sales call required for Starter.",
  },
  {
    number: "02",
    title: "Connect",
    description: "Tell Kairos about your company, market, and goals. Paste your website URL and the agents get to work.",
  },
  {
    number: "03",
    title: "Analyze",
    description: "AI agents map your competitive landscape, identify your ideal customers, and score potential leads.",
  },
  {
    number: "04",
    title: "Act",
    description: "Review scored lead lists, competitor SWOTs, and campaign briefs — then launch outreach directly.",
  },
  {
    number: "05",
    title: "Scale",
    description: "Expand into new segments and markets. Your agents adapt automatically as your targets evolve.",
  },
];

const ProcessTimeline = () => {
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
          Process
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          How It <span className="gradient-text">Works</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="flex items-start gap-6 p-5 rounded-lg bg-card border border-border"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          >
            <span className="font-display font-bold text-primary text-2xl shrink-0">
              {step.number}
            </span>
            <div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                {step.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;
