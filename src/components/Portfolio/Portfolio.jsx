import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Certifications from "./Certifications";

const tabs = [
  { key: "projects", label: "Projects" },
  { key: "tech", label: "Tech Stack" },
  { key: "certifications", label: "Certifications" },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="min-h-screen flex flex-col items-center px-8 pt-30 gap-8 relative z-0 text-[#e8d8c9]">
      <div className="text-center">
        <h2 className="text-6xl font-bold tracking-tight">PORTFOLIO</h2>
        <p className="text-md mt-3 max-w-xl text-[#dbcaba]">
          Here I collect everything about my skills like my projects, tech
          stack, and certifications.
        </p>
      </div>

      <nav className="flex gap-4 flex-wrap justify-center relative">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-8 py-3 rounded-full border transition-all duration-200 text-base tracking-wide font-medium ${
                isActive
                  ? "border-[#f3701e] text-[#f3701e]"
                  : "border-[#4b607f] text-[#e8d8c9] hover:border-[#f3701e] hover:text-[#f3701e] hover:-translate-y-1"
              }`}
            >
              {tab.label}
              {isActive && (
                <motion.span
                  layoutId="tabHighlight"
                  className="absolute inset-0 rounded-full z-0"
                  style={{ backgroundColor: "rgba(243, 112, 30, 0.1)" }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      <div
        className={`transition-all duration-300 w-4/5 ${
          activeTab === "projects"
            ? ""
            : activeTab === "tech"
            ? "max-w-8xl"
            : "max-w-10xl"
        }`}
      >
        {activeTab === "projects" && <Projects />}
        {activeTab === "tech" && <TechStack />}
        {activeTab === "certifications" && <Certifications />}
      </div>
    </div>
  );
}

export default Portfolio;
