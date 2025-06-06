"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const InfoList = ({ list, isDarkMode, locale }) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[70%] sm:max-w-2xl md:max-w-6xl mx-auto"
    >
      {list.map(({ icon, iconDark, title, titleSpanish, description, descriptionSpanish }, index) => (
        <motion.li
          whileHover={{ scale: 1.05 }}
          key={index}
          className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-xl hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-[#2a004a]/50"
        >
          <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
          <h3 className="my-4 font-ovo font-semibold text-gray-700 dark:text-white">
            {locale === "es" ? titleSpanish : title}
          </h3>
          <p className="font-ovo text-gray-600 text-sm dark:text-white/90">
            {locale === "es" && descriptionSpanish ? descriptionSpanish : description}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default InfoList;
