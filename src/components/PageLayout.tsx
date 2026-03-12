import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="bg-background page-scroll-container">
      <Navbar />
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-primary z-[60]"
        style={{ width: progressWidth }}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
