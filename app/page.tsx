"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Image from "next/image";


import React, { useState, useEffect } from "react";
import { animateOnScroll } from "./scroll-animate";
import { businessContent } from "@/data/business";
import Footer from "@/components/Footer";

export default function Home() {

  const [lang, setLang] = useState<'en' | 'mr'>('en');

  useEffect(() => {
    animateOnScroll();
    // Clean up listeners on unmount
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('resize', animateOnScroll);
    };
  }, []);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} labels={businessContent[lang].navbar} theme={businessContent[lang].theme} />
      <Hero lang={lang} theme={businessContent[lang].theme} />
      <Services lang={lang} theme={businessContent[lang].theme} />
      <Showcase lang={lang} />
      <About lang={lang} theme={businessContent[lang].theme} />
      <Contact lang={lang} theme={businessContent[lang].theme} />
      <Footer lang={lang} theme={businessContent[lang].theme} date={businessContent[lang].date} businessName={businessContent[lang].name} />
    </>
  );
}
