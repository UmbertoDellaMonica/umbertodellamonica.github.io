"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description?: string;
  technologies?: string;
  database?: string;
  hardware?: string;
  link?: string;
  icon?: string;
}

interface Project {
  title: string;
  description?: string;
  technologies?: string;
  database?: string;
  hardware?: string;
  link?: string;
  icon?: string;
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true }) as Project[];

  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
        {t("projectsTitle")}
      </h2>

      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#0f172a] border border-blue-800 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Icon e titolo */}
            <div className="flex flex-col items-center text-center">
              {project.icon && (
                <img
                  src={project.icon}
                  alt={project.title}
                  className="w-16 h-16 mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
            </div>

            {/* Tecnologie come badge */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.technologies && (
                <span className="text-blue-400 text-xs font-medium px-3 py-1 border border-blue-400 rounded-full">
                  {project.technologies}
                </span>
              )}
              {project.database && (
                <span className="text-green-400 text-xs font-medium px-3 py-1 border border-green-400 rounded-full">
                  {project.database}
                </span>
              )}
              {project.hardware && (
                <span className="text-purple-400 text-xs font-medium px-3 py-1 border border-purple-400 rounded-full">
                  {project.hardware}
                </span>
              )}
            </div>

            {/* Link al progetto */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                <FaGithub /> View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
