import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 0.9]);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      style={{
        backgroundColor: `hsl(216 50% 8% / ${bgOpacity})`,
        backdropFilter: "blur(12px)",
      }}
    >
      <Link
        to="/"
        className="font-display font-bold text-lg text-foreground tracking-tight"
      >
        Hi Meet <span className="text-primary">AI</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm font-body transition-colors ${
              location.pathname === link.to
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/demo"
          className="px-5 py-2 text-sm font-display font-medium bg-primary text-primary-foreground rounded-md hover:brightness-110 transition-all"
        >
          Try the Demo
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="text-foreground p-2" aria-label="Open menu">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <SheetTitle className="font-display font-bold text-foreground">
              Hi Meet <span className="text-primary">AI</span>
            </SheetTitle>
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-base font-body transition-colors ${
                    location.pathname === link.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/demo"
                onClick={() => setOpen(false)}
                className="px-5 py-3 text-sm font-display font-medium bg-primary text-primary-foreground rounded-md hover:brightness-110 transition-all text-center"
              >
                Try the Demo
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Navbar;
