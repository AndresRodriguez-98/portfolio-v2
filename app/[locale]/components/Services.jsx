import { serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("Services");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        {t("sectionTitle")}
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center text-5xl font-ovo"
      >
        {t("sectionSubtitle")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        {t("description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="grid autoGrid gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black shadow-2xl cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 dark:hover:bg-[#2a004a] dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-7 mt-3" />
            <h3 className="my-4 font-ovo font-semibold text-gray-700 dark:text-white">{title}</h3>
            <p className="font-ovo text-gray-600 text-sm leading-5 dark:text-white/90">{description}</p>
            <a href={link} className="">
              {t("readMore")} <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
