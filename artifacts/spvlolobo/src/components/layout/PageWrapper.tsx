import { FC, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

export const PageWrapper: FC<PageWrapperProps> = ({ children, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (title) {
      document.title = `${title} | SPVLolobo`;
    }
  }, [title]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen flex flex-col"
    >
      {children}
    </motion.main>
  );
};
