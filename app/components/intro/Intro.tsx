"use client";
import React from "react";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { importantInfo } from "@/app/lib/static_info";

const Intro: React.FC = () => {
  const { t } = useTranslation();

  const introParagraphs = t("about.intro", { returnObjects: true }) as string[];

  return (
    <section id="about" className="pt-5 pb-5">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        {t("about.title")}
      </h2>

      <div className="container mx-auto grid lg:grid-cols-[35%_50%] gap-[15%] items-center">
        {/* Profile Image */}
        <div className="w-full aspect-square rounded-2xl relative overflow-hidden grid place-items-center">
          {/* Sfondo trasparente */}
          <div className="absolute inset-0 pointer-events-none"></div>

          {/* Effetto hover e rotazione */}
          <div className="overflow-hidden rounded-[3rem] transform rotate-[-5deg] scale-95 transition-transform duration-500 ease-in-out hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
            <Image
              src={importantInfo.profileFoto}
              alt="My picture"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Decorazioni dinamiche soft */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-2xl pointer-events-none"></div>

          {/* Decorazioni dinamiche soft */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-2xl pointer-events-none"></div>
        </div>

        {/* About Content */}
        <div className="space-y-6">
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            <article className="bg-gray-800 border border-transparent rounded-xl p-6 text-center transition hover:bg-transparent hover:border-blue-500">
              <FaGraduationCap className="text-blue-500 text-2xl mb-3 mx-auto" />
              <h5 className="text-white text-base font-medium">
                {t("about.experience")}
              </h5>
              <small className="text-gray-300">
                {t("about.experienceDetail")}
              </small>
            </article>

            <article className="bg-gray-800 border border-transparent rounded-xl p-6 text-center transition hover:bg-transparent hover:border-blue-500">
              <FaUsers className="text-blue-500 text-2xl mb-3 mx-auto" />
              <h5 className="text-white text-base font-medium">
                {t("projects.title")}
              </h5>
              <small className="text-gray-300">{t("projects.length")}</small>
            </article>
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-3">
            {introParagraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-gray-300 text-base lg:text-left text-center"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
