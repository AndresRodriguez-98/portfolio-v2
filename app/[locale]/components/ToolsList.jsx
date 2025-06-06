"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ToolsList = ({ tools }) => {
  return (
    <div className="w-full flex justify-center">
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-5"
      >
        {tools.map((tool, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            key={index}
          >
            <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ToolsList;
