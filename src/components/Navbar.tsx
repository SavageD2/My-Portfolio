"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(`Intersection observed: ${entry.target.id} - Is Visible: ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        } else if (entry.target.id === activeSection) {
          setActiveSection("");
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeSection]);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full p-4 transition-all ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}
      style={{
        zIndex: 1000,
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/marvin.jpg"
              alt="Marvin"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="ml-2 text-white font-bold">Savage</h1>
          </div>
        </Link>
        <div className="space-x-4">
          <button
            onClick={() => scrollToSection("about")}
            className={`text-white ${activeSection === "about" ? "text-blue-500 font-bold" : ""}`}
          >
            À propos
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-white ${activeSection === "projects" ? "text-blue-500 font-bold" : ""}`}
          >
            Projets
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-white ${activeSection === "contact" ? "text-blue-500 font-bold" : ""}`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
