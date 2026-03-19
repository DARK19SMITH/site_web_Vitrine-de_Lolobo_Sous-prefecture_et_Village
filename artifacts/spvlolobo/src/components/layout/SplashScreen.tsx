import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BaouleDecor } from "@/components/decor/BaouleDecor";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Allow fade out animation to finish
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10"><BaouleDecor type="adinkra-watermark" className="w-96 h-96 animate-spin-slow" /></div>
            <div className="absolute bottom-10 right-10"><BaouleDecor type="adinkra-watermark" className="w-96 h-96 animate-spin-slow" /></div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10 flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold text-primary text-glow-primary mb-4 tracking-wider">
              SPVLolobo
            </h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="w-full h-1 bg-accent origin-center rounded-full"
            />
            <p className="mt-6 text-xl md:text-2xl text-secondary font-medium tracking-widest uppercase">
              Héritage & Avenir
            </p>
          </motion.div>

          {/* Kente Strips entering from sides */}
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="absolute bottom-0 w-full"
          >
            <BaouleDecor type="kente-strip" className="h-4 md:h-6" />
          </motion.div>
          
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="absolute top-0 w-full"
          >
            <BaouleDecor type="kente-strip" className="h-4 md:h-6" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
