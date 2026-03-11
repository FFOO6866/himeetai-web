import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { tiers } from "@/data/services";
import { cn } from "@/lib/utils";

const TierCards = () => {
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
          Pricing
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          Choose Your <span className="gradient-text">Tier</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.id}
            className={cn(
              "p-6 rounded-lg border flex flex-col",
              tier.recommended
                ? "bg-card border-primary/40 ring-1 ring-primary/20"
                : "bg-card border-border"
            )}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
          >
            {tier.recommended && (
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-display font-medium mb-3">
                Recommended
              </span>
            )}
            <h3 className="font-display font-bold text-foreground text-lg">
              {tier.name}
            </h3>
            <p className="text-xs text-muted-foreground font-body mt-1 mb-3">
              {tier.audience}
            </p>
            <p className="font-display font-bold text-foreground text-2xl mb-3">
              {tier.price}
            </p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
              {tier.description}
            </p>
            <ul className="flex flex-col gap-2 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm font-body text-foreground"
                >
                  <span className="text-primary mt-0.5 shrink-0">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/signup"
              state={{ tier: tier.id }}
              className={cn(
                "block text-center py-3 rounded-lg font-display font-medium text-sm tracking-wide transition-all duration-300",
                tier.recommended
                  ? "bg-primary text-primary-foreground hover:brightness-110"
                  : "border border-border text-foreground hover:bg-secondary"
              )}
            >
              {tier.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TierCards;
