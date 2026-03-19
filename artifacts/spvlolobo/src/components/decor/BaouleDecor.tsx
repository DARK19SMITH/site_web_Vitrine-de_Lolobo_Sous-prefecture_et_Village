import { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DecorProps {
  className?: string;
  type?: "kente-strip" | "adinkra-watermark" | "zigzag" | "cowrie";
}

export const BaouleDecor: FC<DecorProps> = ({ className, type = "kente-strip" }) => {
  if (type === "kente-strip") {
    return (
      <div className={cn("flex w-full overflow-hidden h-4", className)}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-shrink-0 flex h-full w-24">
            <div className="w-1/3 bg-primary h-full"></div>
            <div className="w-1/3 bg-secondary h-full relative">
               <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-accent"></div>
            </div>
            <div className="w-1/3 bg-accent h-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "zigzag") {
    return (
      <svg 
        className={cn("w-full h-8 text-primary", className)} 
        viewBox="0 0 100 20" 
        preserveAspectRatio="none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 10 L5 0 L15 20 L25 0 L35 20 L45 0 L55 20 L65 0 L75 20 L85 0 L95 20 L100 10" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      </svg>
    );
  }

  if (type === "cowrie") {
    return (
      <svg className={cn("w-6 h-8 text-accent drop-shadow-md", className)} viewBox="0 0 24 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 8.059 0 18c0 9.941 5.373 18 12 18s12-8.059 12-18C24 8.059 18.627 0 12 0zm0 33c-4.418 0-8-6.716-8-15S7.582 3 12 3s8 6.716 8 15-3.582 15-8 15z"/>
        <path d="M11 6h2v24h-2z"/>
      </svg>
    );
  }

  // Adinkra watermark style
  return (
    <svg className={cn("opacity-5 w-64 h-64 text-primary", className)} viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 Z M50 80 C33.431 80 20 66.569 20 50 C20 33.431 33.431 20 50 20 C66.569 20 80 33.431 80 50 C80 66.569 66.569 80 50 80 Z"/>
      <circle cx="50" cy="50" r="15" />
      <path d="M50 5 L50 20 M50 80 L50 95 M5 50 L20 50 M80 50 L95 50" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
};

export const FloatingElement: FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      className={cn("absolute pointer-events-none", className)}
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
}
