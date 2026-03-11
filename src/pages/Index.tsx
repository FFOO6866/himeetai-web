import { useMemo } from "react";
import { getActiveStory } from "@/lib/getActiveStory";
import StoryScroller from "@/components/StoryScroller";
import BrandSection from "@/components/BrandSection";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const story = useMemo(() => getActiveStory(), []);

  return (
    <div className="bg-background story-container">
      <Navbar />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-primary z-[60]"
        style={{ width: progressWidth }}
      />

      {/* Hero intro */}
      <section className="story-panel relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
        </div>
        <motion.div
          className="relative z-10 text-center story-safe-area"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-display font-medium tracking-[0.3em] uppercase text-primary mb-6 text-glow story-label">
            {story.subtitle}
          </p>
          <h1 className="font-display font-bold text-foreground mb-6 leading-tight max-w-3xl story-headline">
            {story.title}
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto story-body">
            Scroll to experience the story
          </p>
          <motion.div
            className="mt-12 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1.5 h-2.5 bg-primary rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Scenes */}
      <StoryScroller story={story} />

      {/* Brand Reveal */}
      <BrandSection />
    </div>
  );
};

export default Index;
