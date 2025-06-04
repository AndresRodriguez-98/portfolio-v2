import { serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo"> My Services </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I offer a range of web development services to help you build and enhance your online presence. Whether you need
        a new website, a redesign, or ongoing maintenance, I can provide tailored solutions to meet your needs. My
        services include:
      </p>

      <div className="grid autoGrid gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black shadow-2xl cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 dark:hover:bg-[#2a004a] dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-7 mt-3" />
            <h3 className="my-4 font-ovo font-semibold text-gray-700 dark:text-white">{title}</h3>
            <p className="font-ovo text-gray-600 text-sm leading-5 dark:text-white/90">{description}</p>
            <a href={link} className="">
              Read more <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
