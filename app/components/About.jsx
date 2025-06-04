import React from "react";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

const About = () => {
  const resolvedTheme = useTheme();
  const isDarkMode = resolvedTheme.theme === "dark";

  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
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
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About me
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
          <p className="max-w-2xl font-ovo mb-10">
            Hello! I'm Andrés Rodriguez, a passionate web developer with a focus on creating interactive and responsive
            web applications. I specialize in using modern technologies like React, Next.js, and Tailwind CSS to build
            user-friendly interfaces that provide a seamless experience across all devices. My goal is to combine
            creativity with technical expertise to deliver high-quality solutions that meet the needs of users and
            businesses alike.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-xl hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-[#2a004a]/50"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-ovo font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="font-ovo text-gray-600 text-sm dark:text-white/90">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-gray-700 font-ovo my-6 dark:text-white/90"
          >
            Tools I use
          </motion.h4>

          <motion.ul 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
