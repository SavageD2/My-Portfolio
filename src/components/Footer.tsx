"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: showFooter ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-6 w-full"
    >
      <div className="container mx-auto text-center">
        <p className="flex justify-center items-center gap-2 text-lg">
          Développé avec <FaFire size={20} color="#ff5733" /> par Marvin
        </p>
        <p className="mt-2 text-sm">📍 Tours, France</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/marvin-bourhane-0011a0134/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SavageD2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-400"
          >
            GitHub
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">© 2025 Marvin - Tous droits réservés</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
