"use client";

import About from "../[locale]/components/About";
import Contact from "../[locale]/components/Contact";
import Footer from "../[locale]/components/Footer";
import Header from "../[locale]/components/Header";
import Navbar from "../[locale]/components/Navbar";
import Services from "../[locale]/components/Services";
import Work from "../[locale]/components/Work";

export default function Home() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
