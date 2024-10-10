// components/FadeUpOnScroll.js
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState, useRef } from "react";

// Custom hook to detect when the element is in view
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

const FadeUpOnScroll = ({ children }) => {
  const [ref, isInView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and shifted down
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Control the animation speed
    >
      {children}
    </motion.div>
  );
};


export default FadeUpOnScroll;
