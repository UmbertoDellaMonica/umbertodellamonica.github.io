"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import { useTranslation } from "react-i18next";
import CTA from "./components/CTA";
import HeaderSocials from "./components/HeaderSocial";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const roles = [
    "Ethical Hacker",
    "IoT Security Specialist",
    "Reverse Engineering Explorer",
    "AI for Security Researcher",
    "Robotics & Microcontrollers Learner",
    "Problem Solver",
    "Team Player",
    "Continuous Learner",
    "Open-Source Contributor",
  ];

  return (
    <header id="home" className="relative overflow-hidden text-center">
      <div className="container mx-auto flex flex-col items-center justify-start h-[85vh] pt-16 sm:pt-24">
        {/* Saluto */}
        <h3 className="text-xl text-gray-200">
          {t("header.greeting")}{" "}
          <span className="inline-block origin-[70%_70%] animate-wave">👋🏻</span>{" "}
          {t("header.am")}
        </h3>

        {/* Nome */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mt-2">
          Umberto Della Monica
        </h1>

        {/* Ruoli con effetto typing */}
        <h3 className="text-gray-400 text-2xl sm:text-3xl mt-2">
          <ReactTyped strings={roles} typeSpeed={40} backSpeed={50} loop />
        </h3>

        {/* Call To Action */}
        <div className="mt-6">
          <CTA />
        </div>

        {/* Scroll indicator */}
        <a
          href="#contact"
          className="hidden lg:block absolute right-5 top-1/2 -translate-y-1/2 text-gray-200 text-xl font-light rotate-90"
        >
          {t("header.scroll")}
        </a>

        {/* Social icons */}
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
