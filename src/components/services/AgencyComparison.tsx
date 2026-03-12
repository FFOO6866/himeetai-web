import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  { metric: "Time to first insights", legacy: "3–6 months", kairos: "Minutes" },
  { metric: "Monthly investment", legacy: "$15k–$50k+", kairos: "From $700" },
  { metric: "Team required", legacy: "6–12 people", kairos: "Just you + Kairos" },
  { metric: "Deliverable visibility", legacy: "Monthly decks", kairos: "Real-time dashboard" },
  { metric: "Scale capacity", legacy: "Hire more people", kairos: "Instant — same platform" },
  { metric: "Uptime", legacy: "Business hours", kairos: "24/7" },
];

const AgencyComparison = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section ref={ref} className="page-section">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Comparison
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          Traditional Agency vs <span className="gradient-text">Kairos</span>
        </h2>
      </motion.div>

      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4 text-xs uppercase tracking-[0.2em] text-muted-foreground font-display font-medium">
                Metric
              </th>
              <th className="py-3 px-4 text-xs uppercase tracking-[0.2em] text-muted-foreground font-display font-medium">
                Legacy Agency
              </th>
              <th className="py-3 pl-4 text-xs uppercase tracking-[0.2em] text-primary font-display font-medium">
                Kairos
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={row.metric}
                className="border-b border-border/50"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.06 }}
              >
                <td className="py-4 pr-4 text-sm font-body text-foreground">
                  {row.metric}
                </td>
                <td className="py-4 px-4 text-sm font-body text-muted-foreground">
                  {row.legacy}
                </td>
                <td className="py-4 pl-4 text-sm font-body text-primary font-medium">
                  {row.kairos}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default AgencyComparison;
