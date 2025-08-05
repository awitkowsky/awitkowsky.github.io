import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

import React, { useEffect, useState } from "react";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import AnimatedBlobs from "./components/IntroScreen/AnimatedBlobs";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [pendingScrollTo, setPendingScrollTo] = useState(null);

  const handleSelectSection = (sectionId) => {
    setShowIntro(false);
    setPendingScrollTo(sectionId);
  };

  useEffect(() => {
    if (!showIntro && pendingScrollTo) {
      const timeout = setTimeout(() => {
        const section = document.getElementById(pendingScrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        setPendingScrollTo(null);
      }, 1100);

      return () => clearTimeout(timeout);
    }
  }, [showIntro, pendingScrollTo]);

  return (
    <>
      <AnimatedBlobs />

      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <IntroScreen onSelectSection={handleSelectSection} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <main className="h-screen snap-y snap-mandatory overflow-y-scroll text-2xl text-white">
              <section id="home" className="h-screen snap-start w-screen">
                <Home />
              </section>
              <section id="about" className="h-screen snap-start">
                <About />
              </section>
              <section id="portfolio" className="h-screen snap-start">
                <Portfolio />
              </section>
              <section id="contact" className="h-screen snap-start">
                <Contact />
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
