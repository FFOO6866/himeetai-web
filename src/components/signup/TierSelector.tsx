import { motion } from "framer-motion";
import { tiers, type Tier } from "@/data/services";
import { cn } from "@/lib/utils";

interface TierSelectorProps {
  selected: Tier["id"] | null;
  onSelect: (id: Tier["id"]) => void;
}

const TierSelector = ({ selected, onSelect }: TierSelectorProps) => {
  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Choose Your Plan
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          Select a <span className="gradient-text">Plan</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {tiers.map((tier, i) => (
        <motion.button
          key={tier.id}
          type="button"
          onClick={() => onSelect(tier.id)}
          className={cn(
            "p-6 rounded-lg border text-left transition-all duration-300 w-full",
            selected === tier.id
              ? "bg-card border-primary ring-2 ring-primary/40"
              : "bg-card border-border hover:border-primary/30"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              {tier.recommended && (
                <span className="text-xs uppercase tracking-[0.3em] text-primary font-display font-medium mb-1 block">
                  Recommended
                </span>
              )}
              <h3 className="font-display font-bold text-foreground text-base">
                {tier.name}
              </h3>
              <p className="text-xs text-muted-foreground font-body mt-0.5">
                {tier.audience}
              </p>
            </div>
            <p className="font-display font-bold text-foreground text-lg shrink-0">
              {tier.price}
            </p>
          </div>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mt-3">
            {tier.description}
          </p>
          <ul className="mt-3 flex flex-col gap-1">
            {tier.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="text-xs font-body text-foreground/70 flex items-center gap-1.5"
              >
                <span className="text-primary shrink-0">✓</span>
                {feature}
              </li>
            ))}
            {tier.features.length > 3 && (
              <li className="text-xs font-body text-muted-foreground mt-0.5">
                +{tier.features.length - 3} more
              </li>
            )}
          </ul>
          {/* Selection indicator */}
          <div
            className={cn(
              "mt-4 pt-3 border-t text-center text-xs font-display font-medium tracking-wide transition-colors duration-300",
              selected === tier.id
                ? "border-primary/30 text-primary"
                : "border-border/50 text-muted-foreground"
            )}
          >
            {selected === tier.id ? "✓ Selected" : "Select Plan"}
          </div>
        </motion.button>
      ))}
      </div>
    </div>
  );
};

export default TierSelector;
