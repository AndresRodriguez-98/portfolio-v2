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
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:lightHover hover:-translate-y-1 duration-500 hover:shadow-2xl shadow-black "
          >
            <Image src={icon} alt={title} className="w-7 mt-3" />
            <h3 className="my-4 font-ovo font-semibold text-gray-700">{title}</h3>
            <p className="font-ovo text-gray-600 text-sm">{description}</p>
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
