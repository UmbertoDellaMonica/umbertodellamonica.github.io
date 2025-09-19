"use client";
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface Skill {
  name: string;
}
interface ExperienceCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const experiences: ExperienceCategory[] = [
    {
      title: "Cybersecurity",
      skills: [
        { name: t("skills.cybersecurity.rev") },
        { name: t("skills.cybersecurity.fwext") },
        { name: t("skills.cybersecurity.andrev") },
        { name: t("skills.cybersecurity.ics") },
        { name: t("skills.cybersecurity.def") },
        { name: t("skills.cybersecurity.net") },
        { name: t("skills.cybersecurity.forensics") },
        { name: t("skills.cybersecurity.crypto") },
      ],
    },
    {
      title: "Penetration Testing",
      skills: [
        { name: t("skills.pentesting.test") },
        { name: t("skills.pentesting.osint") },
        { name: t("skills.pentesting.target") },
        { name: t("skills.pentesting.port") },
        { name: t("skills.pentesting.vuln") },
        { name: t("skills.pentesting.tax") },
        { name: t("skills.pentesting.exp") },
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        { name: t("skills.ai.ml") },
        { name: t("skills.ai.llm") },
        { name: t("skills.ai.gen") },
        { name: t("skills.ai.prompt") },
        { name: t("skills.ai.cv") },
      ],
    },
    {
      title: "IoT & Embedded",
      skills: [
        { name: t("skills.iot.embed") },
        { name: t("skills.iot.iotsec") },
        { name: t("skills.iot.proto") },
        { name: t("skills.iot.hw") },
      ],
    },
    {
      title: "Programming & Frameworks",
      skills: [
        { name: t("skills.programming.java") },
        { name: t("skills.programming.c") },
        { name: t("skills.programming.cpp") },
        { name: t("skills.programming.csharp") },
        { name: t("skills.programming.python") },
        { name: t("skills.programming.js") },
        { name: t("skills.programming.dart") },
        { name: t("skills.programming.solidity") },
        { name: t("skills.programming.vhdl") },
        { name: t("skills.programming.bash") },
        { name: t("skills.frameworks.spring") },
        { name: t("skills.frameworks.flutter") },
        { name: t("skills.frameworks.angular") },
        { name: t("skills.frameworks.react") },
        { name: t("skills.frameworks.flask") },
        { name: t("skills.frameworks.django") },
      ],
    },
    {
      title: "Databases & Other",
      skills: [
        { name: t("skills.databases.mysql") },
        { name: t("skills.databases.postgres") },
        { name: t("skills.databases.neo4j") },
        { name: t("skills.other.os") },
        { name: t("skills.other.virt") },
        { name: t("skills.other.emul") },
        { name: t("skills.other.open") },
        { name: t("skills.other.team") },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <h2 className="text-4xl font-extrabold text-center text-white mb-16">
        {t("skills.title")}
      </h2>

      <div className="container mx-auto grid lg:grid-cols-2 gap-10">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700 
                       rounded-2xl p-8 shadow-md hover:shadow-blue-500/30 
                       hover:-translate-y-2 transition-all duration-300"
          >
            <h3
              className="text-center text-transparent bg-clip-text 
                           bg-gradient-to-r from-blue-400 to-cyan-300 
                           mb-8 text-xl font-bold tracking-wide"
            >
              {exp.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">
              {exp.skills.map((skill, sidx) => (
                <article
                  key={sidx}
                  className="flex items-center gap-3 hover:translate-x-1 transition"
                >
                  <BsFillPatchCheckFill className="text-blue-400" />
                  <h4 className="text-gray-300 text-sm">{skill.name}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
