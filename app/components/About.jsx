import React from "react";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "next-themes";

const About = () => {
  const resolvedTheme = useTheme();
  const isDarkMode = resolvedTheme.theme === "dark";

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo"> About me </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image className="rounded-3xl w-full" src={assets.profile_img} alt="" />
        </div>
        <div className="flex-1">
          <p className="max-w-2xl font-ovo mb-10">
            Hello! I'm Andrés Rodriguez, a passionate web developer with a focus on creating interactive and responsive
            web applications. I specialize in using modern technologies like React, Next.js, and Tailwind CSS to build
            user-friendly interfaces that provide a seamless experience across all devices. My goal is to combine
            creativity with technical expertise to deliver high-quality solutions that meet the needs of users and
            businesses alike.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-xl hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-[#2a004a]/50"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-ovo font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="font-ovo text-gray-600 text-sm dark:text-white/90">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="text-gray-700 font-ovo my-6 dark:text-white/90">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index}>
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
