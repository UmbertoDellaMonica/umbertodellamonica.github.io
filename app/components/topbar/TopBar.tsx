"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiBookOpen, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const navItems = [
    { href: "#home", icon: <AiOutlineHome />, label: "Home" },
    { href: "#about", icon: <AiOutlineUser />, label: "Chi Sono" },
    { href: "#publishing", icon: <BiBookOpen />, label: "Pubblicazioni" },
    { href: "#skills", icon: <BiBook />, label: "Skills" },
    { href: "#projects", icon: <RiServiceLine />, label: "Projects" },
    { href: "#contact", icon: <BiMessageSquareDetail />, label: "Contatti" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 px-6 py-2 rounded-full bg-black/30 backdrop-blur-xl z-50">
      {navItems.map((item) => (
        <div key={item.href} className="relative group">
          <a
            href={item.href}
            onClick={() => setActiveNav(item.href)}
            className={`flex p-3 rounded-full text-lg transition duration-300 ease-in-out ${
              activeNav === item.href
                ? "bg-white text-black"
                : "text-gray-200 hover:bg-black/30"
            }`}
          >
            {item.icon}
          </a>
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md bg-black/80 text-white text-sm opacity-0 group-hover:opacity-100 transition">
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default Topbar;
