"use client";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
};

const publications: Publication[] = [
  {
    title:
      "Threat Analysis and Risk Assessment (TARA) Analysis of an Autonomous Emergency Braking (AEB) System",
    authors:
      "Umberto Della Monica*, Kimberly-Annalena Munjal, Mark Paul Tamas, Biagio Boi, Christian Esposito, Rahamatullah Khondoker",
    venue:
      "Applied Sciences, Special Issue: Application of IoT and Cybersecurity Technologies",
    year: "2025",
    link: "https://doi.org/10.3390/app15031400",
  },
];

const Publishing: React.FC = () => {
  return (
    <section id="publishing" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        Publishing
      </h2>

      <div className="container mx-auto grid gap-10 md:grid-cols-1">
        {publications.map((pub, idx) => (
          <article
            key={idx}
            className="relative bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg 
                       hover:shadow-blue-500/30 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300"
          >
            {/* Icona e titolo */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <FaBookOpen className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-3"></div>

            {/* Autori */}
            <p className="text-gray-300 text-sm mb-1">{pub.authors}</p>

            {/* Venue + anno */}
            <p className="text-gray-400 text-sm italic">
              {pub.venue} • {pub.year}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publishing;
