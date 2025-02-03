"use client";
import ScrollDownButton from "./ScrollDownButton";

const Hero = () => {
  return (
    <main>
      <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">Bienvenue sur mon Portfolio</h1>
      <p className="mt-4 text-lg">Développeur Web Fullstack | React, Next.js, Firebase</p>
      <ScrollDownButton />
    </section>
    </main>
  );
};

export default Hero;
