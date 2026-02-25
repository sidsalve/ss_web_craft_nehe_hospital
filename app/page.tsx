"use client";

import { useState } from "react";

import { getContent } from "@/lib/getContent";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutHospital from "@/components/AboutHospital";
import Services from "@/components/Services";
import AboutDoctors from "@/components/AboutDoctors";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import Insurance from "@/components/Insurnace";
import Gallery from "@/components/Gallery";

export default function Home() {

  const [lang, setLang] = useState<"en" | "mr">("en");

  const content = getContent(lang);

  return (
    <>

      <Navbar
        content={content}
        lang={lang}
        setLang={setLang}
      />

      <Hero data={content.hero} />

      <Features data={content.features} />

      <AboutHospital data={content.aboutHospital} />

      <Services data={content.services} heading={content.servicesHeading} />

      <AboutDoctors
        aboutDoctors={content.aboutDoctors}
        doctors={content.doctors}
      />

      <Testimonials data={content.testimonials} heading={content.testimonialsHeading} />

      <Insurance data={content.insurance} heading={content.insuranceHeading} />

      <FAQ data={content.faq} heading={content.headingFaq} />

      <Gallery data={content.gallery} heading={content.headingGallery} />
      <Contact data={content.contact} />

      <Footer data={content.footer} lang={lang} />

      {/* <WhatsAppFloat /> */}
      <ScrollToTop />

    </>
  );

}