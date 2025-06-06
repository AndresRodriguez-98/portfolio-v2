"use client";

import React from "react";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import InfoList from './InfoList';
import ToolsList from "./ToolsList";

const About = ({ locale }) => {
  const { t } = useTranslation("About");
  const resolvedTheme = useTheme();
  const isDarkMode = resolvedTheme.theme === "dark";

  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-48 md:py-12 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        {t("introduction")}
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        {t("aboutTitle")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image className="rounded-3xl w-full" src={assets.profile_img} alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="max-w-[70%] md:max-w-[100%] sm:max-w-2xl mx-auto mb-10 text-start">{t("description")}</p>

          {/* Info List */}
          <InfoList list={infoList} isDarkMode={isDarkMode} locale={locale} />

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-gray-700 my-6 dark:text-white/90 text-lg sm:text-xl text-center md:text-start"
          >
            {t("toolsTitle")}
          </motion.h4>

          <ToolsList tools={toolsData} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
