"use client";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const getYear = () => new Date().getFullYear();

  // Estrae tutto l'oggetto footer
  const footerText = t("footer", { returnObjects: true }) as {
    aboutF: string;
    contactF: string;
    copyright: string;
  };

  return (
    <footer className="bg-blue-600 text-center text-sm mt-28 py-12 text-white">
      <a href="#home" className="text-2xl font-medium mb-8 inline-block">
        Umberto Della Monica
      </a>

      <ul className="flex flex-wrap justify-center gap-8 mb-12">
        <li>
          <a href="#home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            {footerText.aboutF}
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:underline">
            Skills
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            {footerText.contactF}
          </a>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-10">
        <a
          title="Linkedin Link"
          href="https://www.linkedin.com/in/umbertodellamonica"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-white text-blue-600 p-3 rounded-lg border border-transparent flex items-center justify-center hover:bg-transparent hover:text-white hover:border-white transition"
        >
          <BsLinkedin size={20} />
        </a>
        <a
          title="Github Link"
          href="https://github.com/UmbertoDellaMonica"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-white text-blue-600 p-3 rounded-lg border border-transparent flex items-center justify-center hover:bg-transparent hover:text-white hover:border-white transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          title="Instagram Link"
          href="https://www.instagram.com/umberto_della_monica"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-white text-blue-600 p-3 rounded-lg border border-transparent flex items-center justify-center hover:bg-transparent hover:text-white hover:border-white transition"
        >
          <RiInstagramFill size={20} />
        </a>
      </div>

      <div className="mb-10 text-white">
        <small>
          &copy; Umberto Della Monica {getYear()}. {footerText.copyright}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
