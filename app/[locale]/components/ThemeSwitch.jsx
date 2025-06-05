"use client";

import { assets } from "@/assets/assets";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
        <button disabled>
            <Image src={assets.sun_icon} alt="" className="w-6" />
        </button>
    );

  if (resolvedTheme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <Image src={assets.sun_icon} alt="" className="w-6" />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button onClick={() => setTheme("dark")}>
        <Image src={assets.moon_icon} alt="" className="w-6" />
      </button>
    );
  }
}
