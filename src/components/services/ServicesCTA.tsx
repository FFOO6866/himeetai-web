import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const ServicesCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section ref={ref} className="page-section text-center">
      <motion.h2
        className="font-display font-bold text-foreground tracking-tight leading-none story-headline mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Ready to Deploy?
      </motion.h2>

      <motion.p
        className="text-muted-foreground font-body leading-relaxed max-w-xl mx-auto story-body mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        See what your autonomous fleet can uncover about your market — or talk
        to a strategist about your specific goals.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        <Link
          to="/demo"
          className="px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:brightness-110 transition-all duration-300 text-sm tracking-wide"
        >
          See It In Action
        </Link>
        <Link
          to="/signup"
          className="px-8 py-4 border border-border text-foreground font-display font-medium rounded-lg hover:bg-secondary transition-all duration-300 text-sm tracking-wide"
        >
          Talk to a Strategist
        </Link>
      </motion.div>
    </section>
  );
};

export default ServicesCTA;
