import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { capabilities } from "@/data/services";

const CapabilityPillars = () => {
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
          Capabilities
        </span>
        <h2 className="font-display font-bold text-foreground tracking-tight leading-none story-headline mt-4">
          Full-Stack <span className="gradient-text">GTM</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Tabs defaultValue="strategy" className="w-full">
          <TabsList className="w-full flex flex-wrap bg-secondary/50 border border-border rounded-lg p-1 h-auto gap-1">
            {capabilities.map((cap) => (
              <TabsTrigger
                key={cap.id}
                value={cap.id}
                className="flex-1 min-w-[100px] font-display text-xs sm:text-sm data-[state=active]:bg-card data-[state=active]:text-primary"
              >
                {cap.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {capabilities.map((cap) => (
            <TabsContent key={cap.id} value={cap.id} className="mt-8">
              <div className="p-6 md:p-8 rounded-lg bg-card border border-border">
                <h3 className="font-display font-bold text-foreground text-xl mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6 story-body">
                  {cap.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cap.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm font-body text-foreground"
                    >
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
};

export default CapabilityPillars;
