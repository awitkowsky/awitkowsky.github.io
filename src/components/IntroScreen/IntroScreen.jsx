import SectionTitle from "./SectionTitle";
import SectionButtons from "./SectionButtons";
import Footer from "./Footer";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const IntroScreen = ({ onSelectSection }) => {
  return (
    <motion.div
      className="relative h-screen overflow-hidden"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="h-full flex flex-col justify-center items-center px-4 text-center">
        <SectionTitle />
        <SectionButtons onSelectSection={onSelectSection} />
        <Footer />
      </div>
    </motion.div>
  );
};

export default IntroScreen;
