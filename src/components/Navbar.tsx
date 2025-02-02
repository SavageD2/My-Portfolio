"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full p-4 transition-all ${
        scrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">Savage</h1>
        </Link>
        <div className="space-x-4">
          <Link href="#projects">Projets</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
