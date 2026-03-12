import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignUpConfirmation = () => {
  return (
    <motion.div
      className="max-w-md mx-auto text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-8 rounded-lg bg-card border border-primary/20">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-primary text-2xl">✓</span>
        </div>

        <h3 className="font-display font-bold text-foreground text-xl mb-3">
          Mission Briefing In Progress
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8">
          Your mission briefing is being prepared. A strategist will be in touch
          within 24 hours to align on your goals and assemble your bench.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/demo"
            className="px-6 py-3 bg-primary text-primary-foreground font-display font-medium rounded-lg hover:brightness-110 transition-all duration-300 text-sm tracking-wide"
          >
            Try the Demo While You Wait
          </Link>
          <Link
            to="/"
            className="px-6 py-3 border border-border text-foreground font-display font-medium rounded-lg hover:bg-secondary transition-all duration-300 text-sm tracking-wide"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUpConfirmation;
