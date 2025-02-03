/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16 px-8 bg-gray-900 text-white pt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
          <Image
            src="/marvin.jpg"
            alt="Marvin, développeur web"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <p className="text-lg leading-relaxed">
            Je suis un développeur web passionné, avec un parcours diversifié
            dans le domaine de la programmation et du développement logiciel. Après
            avoir suivi plusieurs formations en développement web, notamment au
            CEFIM, à la WidCodeSchool et sur Udemy, j'ai acquis des compétences
            solides en développement backend et frontend. Ma curiosité m'a poussé
            à explorer une large palette de technologies, que ce soit avec des
            outils comme React, Node.js, Angular, ou encore des bases de données
            comme MongoDB et MySQL. Je me spécialise dans la création
            d’applications dynamiques et performantes, tout en ayant une
            préférence pour les solutions modernes et efficaces. Ce qui m'anime,
            c'est le défi de résoudre des problèmes techniques complexes tout en
            créant des expériences utilisateur intuitives et fluides. Mes projets
            sont souvent le fruit d'une approche collaborative et de la
            méthodologie AGILE, ce qui m’a permis de travailler dans des
            environnements dynamiques et de gérer des projets en équipe.
            Aujourd’hui, je suis en recherche d’opportunités où je peux continuer
            à apprendre, me challenger, et apporter ma contribution à des projets
            passionnants. Mon objectif est de mettre mes compétences au service
            d’équipes ambitieuses et de continuer à grandir en tant que
            développeur web.
          </p>
          <a
            href="https://drive.google.com/file/d/12AVbTaU7JxONxXVd89M3AvbvA3KAp60G/view?usp=sharing"
            download="Développeur fullstack Marvin.pdf"
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
