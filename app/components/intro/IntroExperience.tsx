"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";

interface ExperienceItem {
  company: string;
  link: string;
  duration: string;
  description: string;
  logo?: string;
}

interface Props {
  type: "internships" | "collaborations";
}

const IntroExperience: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation();
  const title = t(`about.${type}.title`);
  const items = t(`about.${type}.items`, {
    returnObjects: true,
  }) as ExperienceItem[];

  return (
    <section className="py-6">
      <h3 className="text-2xl font-semibold text-blue-400 mb-6">{title}</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {items.map((item, idx) => (
          <article
            key={idx}
            className="relative flex flex-col items-center bg-gray-900 rounded-3xl p-6 border border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
          >
            {/* Logo Badge */}
            {item.logo ? (
              <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gray-800/70 border border-gray-700 shadow-lg">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={80}
                  height={80}
                  className="object-contain rounded-full p-2"
                />
              </div>
            ) : (
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl shadow-md">
                <FaBuilding />
              </div>
            )}

            {/* Company Name */}
            <h4 className="text-white font-semibold text-lg mb-1 text-center">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {item.company}
              </a>
            </h4>

            {/* Duration */}
            <p className="text-gray-400 text-sm mb-2 text-center">
              {item.duration}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm text-center">
              {item.description}
            </p>

            {/* Decorative Glow */}
            <div className="absolute -bottom-4 w-20 h-20 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute -top-4 right-2 w-16 h-16 bg-cyan-400/20 blur-3xl rounded-full animate-pulse"></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default IntroExperience;
