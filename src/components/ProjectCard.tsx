"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

export default function ProjectCard({ title, description, image, github, demo }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Image src={image} alt= "profile" width={500} height={300}/>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        <div className="mt-4 flex justify-between">
          <a href={github} target="_blank" className="text-blue-400 hover:text-blue-300">
            GitHub
          </a>
          <a href={demo} target="_blank" className="text-green-400 hover:text-green-300">
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
