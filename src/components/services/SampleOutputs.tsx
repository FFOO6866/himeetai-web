import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const swotData = {
  strengths: ["Strong brand recognition in APAC", "Deep integration ecosystem"],
  weaknesses: ["Limited self-serve onboarding", "No freemium tier"],
  opportunities: ["Emerging SME segment underserved", "AI-native positioning gap"],
  threats: ["Well-funded incumbents expanding", "Commoditization of core features"],
};

const leadData = [
  { company: "████████ Labs", score: 92, signal: "Hiring for GTM roles" },
  { company: "████████ Inc", score: 87, signal: "Recent Series B close" },
  { company: "████████ Co", score: 81, signal: "Competitor contract expiring" },
  { company: "████████ AI", score: 74, signal: "New market entry signals" },
];

const campaignData = {
  segment: "Series A–B SaaS, 20–100 employees",
  channels: ["LinkedIn Outreach", "Email Sequence", "Targeted Content"],
  messages: [
    "Lead with competitive intelligence angle",
    "Emphasize time-to-value vs. agency timelines",
  ],
};

const SampleOutputs = () => {
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
          What You Get
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          Real <span className="gradient-text">Outputs</span>
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mt-4 max-w-xl mx-auto story-body">
          Kairos doesn't produce vague strategy decks. Here's what your agents
          actually deliver.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Competitor SWOT */}
        <motion.div
          className="p-6 rounded-lg bg-card border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-display block mb-1">
            Competitor Analyst Agent
          </span>
          <h3 className="font-display font-bold text-foreground text-base mb-4">
            Competitor SWOT
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {(["strengths", "weaknesses", "opportunities", "threats"] as const).map(
              (key) => (
                <div key={key}>
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-display block mb-1.5">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  {swotData[key].map((item) => (
                    <p
                      key={item}
                      className="text-xs font-body text-foreground/80 leading-relaxed"
                    >
                      ▸ {item}
                    </p>
                  ))}
                </div>
              )
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-border/50">
            <span className="text-xs text-muted-foreground font-body italic">
              Sample output · your analysis will be personalized
            </span>
          </div>
        </motion.div>

        {/* Scored Lead List */}
        <motion.div
          className="p-6 rounded-lg bg-card border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-display block mb-1">
            Lead Hunter Agent
          </span>
          <h3 className="font-display font-bold text-foreground text-base mb-4">
            Scored Lead List
          </h3>
          <div className="flex flex-col gap-3">
            {leadData.map((lead) => (
              <div key={lead.company} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-body text-foreground/80">
                    {lead.company}
                  </span>
                  <span className="text-xs font-display font-bold text-primary">
                    {lead.score}
                  </span>
                </div>
                <div className="w-full h-1 rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary/60"
                    style={{ width: `${lead.score}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-body">
                  {lead.signal}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-border/50">
            <span className="text-xs text-muted-foreground font-body italic">
              Sample output · real companies, real scores
            </span>
          </div>
        </motion.div>

        {/* Campaign Brief */}
        <motion.div
          className="p-6 rounded-lg bg-card border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-display block mb-1">
            Campaign Architect Agent
          </span>
          <h3 className="font-display font-bold text-foreground text-base mb-4">
            Campaign Brief
          </h3>
          <div className="flex flex-col gap-3">
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-display block mb-1">
                Target Segment
              </span>
              <p className="text-xs font-body text-foreground/80">
                {campaignData.segment}
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-display block mb-1">
                Channels
              </span>
              <div className="flex flex-wrap gap-1.5">
                {campaignData.channels.map((ch) => (
                  <span
                    key={ch}
                    className="text-xs font-body text-primary bg-primary/10 px-2 py-0.5 rounded"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-display block mb-1">
                Key Messages
              </span>
              {campaignData.messages.map((msg) => (
                <p
                  key={msg}
                  className="text-xs font-body text-foreground/80 leading-relaxed"
                >
                  ▸ {msg}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-border/50">
            <span className="text-xs text-muted-foreground font-body italic">
              Sample output · tailored to your market
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SampleOutputs;
