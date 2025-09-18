"use client";
import React from "react";
import { importantInfo } from "@/app/lib/static_info";
import { useTranslation } from "react-i18next";

const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center gap-6 mt-8">
      <a
        href={importantInfo.cvLink}
        download
        className="px-6 py-3 rounded-md border border-gray-300 text-gray-200 hover:bg-gray-800 transition duration-300"
      >
        {t("header.cv")}
      </a>
      <a
        href="#contact"
        className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
      >
        {t("header.talk")}
      </a>
    </div>
  );
};

export default CTA;
