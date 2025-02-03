/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Iprojects } from "@/data/projects";
import "swiper/css";
import Image from "next/image";

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState<Iprojects[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsData: Iprojects[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          description: data.description || "",
          imageUrl: data.imageUrl || "/placeholder.jpg",
          liveUrl: data.liveUrl || "",
          backendRepoUrl: data.backendRepoUrl || "",
          frontendRepoUrl: data.frontendRepoUrl || "",
          techStack: Array.isArray(data.techStack) ? data.techStack : typeof data.techStack === "string" ? data.techStack.split(",") : [],
          title: data.title || "Projet sans titre",
        };
      });
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-16 pt-24" id="projects">
  <h2 className="text-3xl font-bold text-center mb-8 text-white">Mes Projets</h2>
  <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
    {projects.map((project) => (
      <SwiperSlide key={project.id}>
        <div className="relative p-4 bg-gray-800 text-white rounded-lg group">
          <div className="relative w-full h-48 sm:h-56 md:h-72 lg:h-80 xl:h-[500px] 2xl:h-[600px]">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg mb-4 group-hover:opacity-75"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center text-white p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            {project.techStack.length > 0 && (
              <div className="mb-4">
                <span className="font-semibold">Technologies utilisées : </span>
                <ul className="list-disc pl-5">
                  {project.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.backendRepoUrl && (
              <a
                href={project.backendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mb-2"
              >
                Voir le code backend (GitHub)
              </a>
            )}
            {project.frontendRepoUrl && (
              <a
                href={project.frontendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mb-4"
              >
                Voir le code frontend (GitHub)
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Voir l'application
              </a>
            )}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
};

export default ProjectsCarousel;
