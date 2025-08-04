// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";

const buttons = [
  { label: "Home", icon: <Home size={22} />, section: "home" },
  { label: "About", icon: <User size={22} />, section: "about" },
  { label: "Portfolio", icon: <Briefcase size={22} />, section: "portfolio" },
  { label: "Contact", icon: <Mail size={22} />, section: "contact" },
];

// Definiujesz warianty dla kontenera
const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

// I warianty dla pojedynczego przycisku
const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const SectionButtons = ({ onSelectSection }) => (
  <motion.div
    className="mt-10 grid grid-cols-2 md:flex gap-4"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {buttons.map(({ label, icon, section }) => (
      <motion.button
        key={section}
        onClick={() => onSelectSection(section)}
        variants={buttonVariants}
        className="relative flex items-center gap-2 px-5 py-3 rounded-full text-base transition"
        style={{
          background:
            "linear-gradient(#1a1a1f, #1a1a1f) padding-box, linear-gradient(135deg, #f3701e, #a67bc5) border-box",
          border: "2px solid transparent",
          color: "#e8d8c9",
        }}
        whileHover={{
          scale: 1.05,
          backgroundColor: "#27272f",
          color: "#f3701e",
        }}
        whileTap={{ scale: 0.97 }}
      >
        {icon}
        {label}
      </motion.button>
    ))}
  </motion.div>
);

export default SectionButtons;
