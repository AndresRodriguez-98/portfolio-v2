'use client';

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("Footer");
  const resolvedTheme = useTheme();
  const isDarkMode = resolvedTheme.theme === "dark";
  
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className="w-25 h-25 mx-auto" />
        <div className="w-max flex items-center gap-2 mx-auto font-outfit">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          andresrodriguezab98@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© Andres Rodriguez 2025. {t("rights")}</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/AndresRodriguez-98">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/andresrodriguezab">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
