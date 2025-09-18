"use client";

import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const navItems = [
    { href: "#home", icon: <AiOutlineHome /> },
    { href: "#about", icon: <AiOutlineUser /> },
    { href: "#experience", icon: <BiBook /> },
    { href: "#portfolio", icon: <RiServiceLine /> },
    { href: "#contact", icon: <BiMessageSquareDetail /> },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 px-6 py-2 rounded-full bg-black/30 backdrop-blur-xl z-50">
      {navItems.map((item) => (
        <a
          key={item.href}
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
      ))}
    </nav>
  );
};

export default Topbar;
