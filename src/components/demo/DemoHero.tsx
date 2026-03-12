import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DemoHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  const capabilities = [
    "Competitor SWOT analysis",
    "Scored prospect list",
    "Campaign brief with channel mix",
    "Market opportunity map",
  ];

  return (
    <section ref={ref} className="page-hero relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-10 text-center w-full">
        <motion.span
          className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Kairos Demo
        </motion.span>

        <motion.h1
          className="font-display font-bold text-foreground tracking-tight leading-none story-headline mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        >
          See Kairos in{" "}
          <span className="gradient-text">Action</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto story-body mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Enter your company details and Kairos will generate a real GTM
          intelligence briefing — competitor analysis, lead scores, and campaign
          suggestions — personalized to your market.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {capabilities.map((cap) => (
            <div
              key={cap}
              className="flex items-center gap-2 text-sm font-body text-foreground"
            >
              <span className="text-primary shrink-0">▸</span>
              {cap}
            </div>
          ))}
        </motion.div>

        {/* Sample briefing preview — hidden on mobile to keep hero compact */}
        <motion.div
          className="hidden md:block mt-12 max-w-2xl mx-auto text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display font-bold text-foreground text-sm">
                Sample GTM Briefing
              </h4>
              <span className="text-xs font-display text-primary bg-primary/10 px-2 py-0.5 rounded">
                PREVIEW
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-display block mb-1.5">
                  Top Competitors Identified
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-body text-foreground/80">
                    ▸ <span className="blur-sm select-none">CompetitorOne Ltd</span> — Strong APAC presence, weak self-serve
                  </p>
                  <p className="text-xs font-body text-foreground/80">
                    ▸ <span className="blur-sm select-none">CompetitorTwo Inc</span> — Aggressive pricing, limited AI
                  </p>
                  <p className="text-xs font-body text-foreground/80">
                    ▸ <span className="blur-sm select-none">CompetitorThree Co</span> — Enterprise focus, SME gap
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-display block mb-1.5">
                  Highest-Scored Leads
                </span>
                <div className="flex items-center gap-4 text-xs font-body text-foreground/80">
                  <span><span className="blur-sm select-none">████ Labs</span> · <span className="text-primary font-bold">94</span></span>
                  <span><span className="blur-sm select-none">████ Inc</span> · <span className="text-primary font-bold">89</span></span>
                  <span><span className="blur-sm select-none">████ AI</span> · <span className="text-primary font-bold">82</span></span>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-display block mb-1.5">
                  Recommended Campaign
                </span>
                <p className="text-xs font-body text-foreground/80">
                  LinkedIn outreach + email sequence targeting <span className="blur-sm select-none">Series A-B SaaS</span> segment
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground font-body italic mt-4 pt-3 border-t border-border/50 text-center">
              Your personalized briefing will be ready in minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoHero;
