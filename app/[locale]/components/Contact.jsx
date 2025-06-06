"use client";

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import "../globals.css";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("Contact");
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2fbf1f51-e8f1-4f22-9afd-4659978127ce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        {t("sectionTitle")}
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        {t("sectionSubtitle")}
      </motion.h2>

      <p className="max-w-2xl mx-auto mt-5 mb-12 font-ovo text-center">
        {t("description")}
      </p>

      <motion.form 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid autoGrid gap-6 mb-8 mt-10">
          <input
            type="text"
            placeholder={t("placeholderName")}
            required
            className="flex-1/2 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a] dark:border-white/90"
            name="name"
          />
          <input
            type="email"
            placeholder={t("placeholderEmail")}
            required
            className="flex-1/2 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a] dark:border-white/90"
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder={t("placeholderMessage")}
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 font-ovo dark:bg-[#2a004a]/30 dark:border-white/90"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 font-ovo dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[#2a004a]"
        >
          {t("submitButton")} <Image src={assets.right_arrow_white} alt="Right arrow white" className="w-4" />
        </button>

        <p className="mt-4">{result}</p>
      </motion.form >
    </motion.div>
  );
};

export default Contact;
