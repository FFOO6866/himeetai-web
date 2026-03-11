import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const BrandSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section
      ref={ref}
      className="story-panel relative flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-10 story-safe-area text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-body text-muted-foreground">AI Strategy Consultancy</span>
        </motion.div>

        <motion.h1
          className="font-display font-bold text-foreground mb-4 leading-none story-brand-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        >
          Hi Meet{" "}
          <span className="gradient-text">AI</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mb-12 story-body"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          We don't outrun disruption.{" "}
          <span className="text-foreground">We outwit it.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <Link to="/demo" className="px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:brightness-110 transition-all duration-300 text-sm tracking-wide">
            Get Your GTM Briefing
          </Link>
          <Link to="/about" className="px-8 py-4 border border-border text-foreground font-display font-medium rounded-lg hover:bg-secondary transition-all duration-300 text-sm tracking-wide">
            View Case Studies
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="h-px w-16 bg-border" />
          <span className="text-xs font-body text-muted-foreground tracking-[0.2em] uppercase">Strategy · Foresight · Execution</span>
          <div className="h-px w-16 bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;
