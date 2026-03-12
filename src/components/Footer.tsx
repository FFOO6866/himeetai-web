import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background" style={{ scrollSnapAlign: "end" }}>
      <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <Link
              to="/"
              className="font-display font-bold text-lg text-foreground tracking-tight"
            >
              Hi Meet <span className="text-primary">AI</span>
            </Link>
            <p className="text-sm text-muted-foreground font-body mt-3 max-w-xs leading-relaxed">
              Kairos: Your AI GTM platform. Specialized agents that analyze
              markets, find leads, and build campaigns — guided by human strategists.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display">
                Navigate
              </h4>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/about"
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kairos
                </Link>
                <Link
                  to="/demo"
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  Demo
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sign Up
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-muted-foreground font-body">
            &copy; {new Date().getFullYear()} Hi Meet AI. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-border" />
            <span className="text-xs font-body text-muted-foreground tracking-[0.2em] uppercase">
              Intelligence · Action · Control
            </span>
            <div className="h-px w-8 bg-border" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
