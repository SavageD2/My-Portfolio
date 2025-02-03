"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const { top } = aboutSection.getBoundingClientRect();
        setIsVisible(top > window.innerHeight / 4);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    const targetElement = document.getElementById("about");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return isVisible ? (
    <motion.div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
      animate={{ y: [0, 10, 0] }}
      transition={{
        y: { repeat: Infinity, duration: 1, ease: "easeInOut" },
      }}
      onClick={handleScrollClick}
    >
      <a className="text-white text-4xl">↓</a>
    </motion.div>
  ) : null;
};

export default ScrollDownButton;
