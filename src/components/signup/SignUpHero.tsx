import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SignUpHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

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
          Get Started
        </motion.span>

        <motion.h1
          className="font-display font-bold text-foreground tracking-tight leading-none story-headline mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        >
          Activate Your{" "}
          <span className="gradient-text">Full Bench</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto story-body"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Select your tier, tell us about your goals, and a strategist will
          prepare your mission briefing within 24 hours.
        </motion.p>
      </div>
    </section>
  );
};

export default SignUpHero;
