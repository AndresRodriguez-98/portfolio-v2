"use client";

import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const resolvedTheme = useTheme();
  const logo = resolvedTheme.theme === "dark" ? assets.logo_dark : assets.logo;
  const isDarkMode = resolvedTheme.theme === "dark";

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-1 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:shadow-white/20 dark:bg-transparent" : ""
        }`}
      >
        <a href="#top">
          <Image src={logo} alt="" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white/50 backdrop-blur-lg shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-outfit" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-outfit" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-outfit" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-outfit" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-outfit" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-outfit dark:border-white/50"
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-6 cursor-pointer" />
          </div>
          <li>
            <a className="font-outfit" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-outfit" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-outfit" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-outfit" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-outfit" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
