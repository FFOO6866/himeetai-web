import { motion } from "framer-motion";
import { tiers, type Tier } from "@/data/services";
import { cn } from "@/lib/utils";

interface TierSelectorProps {
  selected: Tier["id"] | null;
  onSelect: (id: Tier["id"]) => void;
}

const TierSelector = ({ selected, onSelect }: TierSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
      {tiers.map((tier, i) => (
        <motion.button
          key={tier.id}
          type="button"
          onClick={() => onSelect(tier.id)}
          className={cn(
            "p-5 rounded-lg border text-left transition-all duration-300",
            selected === tier.id
              ? "bg-card border-primary ring-1 ring-primary/30"
              : "bg-card border-border hover:border-primary/30"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
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
          <p className="font-display font-bold text-foreground text-lg mt-2">
            {tier.price}
          </p>
        </motion.button>
      ))}
    </div>
  );
};

export default TierSelector;
