import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: FC = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Village", path: "/village" },
    { name: "Sous-préfecture", path: "/sous-prefecture" }
    // AOL is deliberately excluded from main nav per requirements
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300 kente-border-bottom",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className={cn(
              "text-2xl font-display font-bold tracking-tight transition-colors",
              isScrolled ? "text-primary" : "text-white text-glow-gold"
            )}>
              Lolobo
            </span>
            <span className={cn(
              "text-xs font-semibold uppercase tracking-widest transition-colors",
              isScrolled ? "text-muted-foreground" : "text-white/75"
            )}>
              Sous-Préfecture &amp; Village
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path}
                className={cn(
                  "relative text-sm uppercase tracking-widest font-semibold py-2 transition-colors hover:text-accent",
                  isScrolled ? (isActive ? "text-primary" : "text-foreground") : (isActive ? "text-accent" : "text-white/90")
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location === link.path;
                return (
                  <Link 
                    key={link.path} 
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block text-lg font-semibold py-2 border-b border-border/50",
                      isActive ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
