"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Journey from "./Journey";
import Projects from "./Projects";
import Skills from "./Skills";
import Leadership from "./Leadership";
import Contact from "./Contact";
import Footer from "./Footer";
import BackgroundBlobs from "./BackgroundBlobs";

const INTRO_DURATION_MS = 2400;

export default function PortfolioShell() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), INTRO_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <BackgroundBlobs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
