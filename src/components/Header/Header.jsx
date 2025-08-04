import { useEffect, useState } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => (e) => {
    e.preventDefault(); // blokuj domyślny jump
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full flex justify-between items-center p-4 pr-10 sticky top-0 z-100 text-white">
      <h2 className="text-2xl font-bold italic cursor-crosshair">
        ~ Awitkowsky ~
      </h2>
      <nav className="flex gap-8 text-md" aria-label="Main navigation">
        <a
          href="#home"
          onClick={handleScrollTo("home")}
          className={`hover:underline hover:font-semibold ${
            activeSection === "home" ? "text-[#f3701e] font-semibold" : ""
          }`}
        >
          Start
        </a>
        <a
          href="#about"
          onClick={handleScrollTo("about")}
          className={`hover:underline hover:font-semibold ${
            activeSection === "about" ? "text-[#f3701e] font-semibold" : ""
          }`}
        >
          O mnie
        </a>
        <a
          href="#portfolio"
          onClick={handleScrollTo("portfolio")}
          className={`hover:underline hover:font-semibold ${
            activeSection === "portfolio" ? "text-[#f3701e] font-semibold" : ""
          }`}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={handleScrollTo("contact")}
          className={`hover:underline hover:font-semibold ${
            activeSection === "contact" ? "text-[#f3701e] font-semibold" : ""
          }`}
        >
          Kontakt
        </a>
      </nav>{" "}
    </header>
  );
}

export default Header;
