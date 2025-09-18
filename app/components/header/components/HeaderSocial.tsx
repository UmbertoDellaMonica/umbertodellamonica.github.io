"use client";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const HeaderSocials: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "it" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="hidden lg:flex flex-col items-center absolute left-5 top-24 gap-4 text-2xl">
      <a
        title="Linkedin Link"
        href="https://www.linkedin.com/in/umbertodellamonica"
        target="_blank"
        rel="noreferrer noopener"
        className="hover:text-blue-500 transition"
      >
        <BsLinkedin />
      </a>
      <a
        title="Github Link"
        href="https://github.com/UmbertoDellaMonica"
        target="_blank"
        rel="noreferrer noopener"
        className="hover:text-gray-300 transition"
      >
        <FaGithub />
      </a>
      <a
        title="Instagram Link"
        href="https://www.instagram.com/umberto_della_monica"
        target="_blank"
        rel="noreferrer noopener"
        className="hover:text-pink-500 transition"
      >
        <RiInstagramFill />
      </a>

      <button
        onClick={toggleLanguage}
        className="mt-2 text-xl transition-transform hover:scale-125"
      >
        {i18n.language === "en" ? "🇮🇹" : "🇬🇧"}
      </button>

      <span className="block w-px h-8 bg-blue-600 mt-2"></span>
    </div>
  );
};

export default HeaderSocials;
