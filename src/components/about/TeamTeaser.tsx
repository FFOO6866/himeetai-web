import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const TeamTeaser = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section ref={ref} className="page-section text-center">
      <motion.span
        className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        The Bench
      </motion.span>

      <motion.h2
        className="font-display font-bold text-foreground tracking-tight leading-none story-headline mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        Meet the{" "}
        <span className="gradient-text">Full Bench</span>
      </motion.h2>

      <motion.p
        className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto story-body mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        Every Kairos plan puts specialized AI agents to work on your
        go-to-market — Market Intelligence, Competitor Analyst, Customer
        Profiler, Lead Hunter, Campaign Architect, and GTM Strategist. On Pro
        and Enterprise tiers, human strategists direct the bench.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.65 }}
      >
        <Link
          to="/services"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:brightness-110 transition-all duration-300 text-sm tracking-wide"
        >
          Explore Kairos
        </Link>
      </motion.div>
    </section>
  );
};

export default TeamTeaser;
