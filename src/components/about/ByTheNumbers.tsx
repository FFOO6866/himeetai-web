import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "Minutes", suffix: " not months", label: "Time to first insights" },
  { value: "24/7", suffix: " uptime", label: "Your bench never sleeps" },
  { value: "1/10th", suffix: " the cost", label: "vs. traditional agencies" },
  { value: "12×50+", suffix: "", label: "Strategists × AI agents" },
];

const AnimatedCounter = ({
  text,
  suffix,
  isInView,
}: {
  text: string;
  suffix: string;
  isInView: boolean;
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShow(true), 300);
      return () => clearTimeout(timer);
    }
    setShow(false);
  }, [isInView]);

  return (
    <span className="font-display font-bold text-primary text-glow text-3xl md:text-4xl">
      {show ? text : "—"}
      <span className="text-foreground text-xl md:text-2xl">{show ? suffix : ""}</span>
    </span>
  );
};

const ByTheNumbers = () => {
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
          By The Numbers
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          Built for <span className="gradient-text">Scale</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          >
            <AnimatedCounter
              text={stat.value}
              suffix={stat.suffix}
              isInView={isInView}
            />
            <p className="text-xs text-muted-foreground font-body mt-2 uppercase tracking-[0.15em]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ByTheNumbers;
