'use client';
import Navbar from "@/components/layout/Navbar";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
  //     document.documentElement.classList.add('dark');
  //     setIsDarkMode(true)
  //   } else {
  //     setIsDarkMode(false)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.theme = 'dark';
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.theme = '';
  //   }

  // }, [isDarkMode])

  return (
    <>
      {/* <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} /> */}
      <Header />
      <About />
      <Work />
      <Contact />
    </>
  );
}
