// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SectionTitle = () => (
  <>
    <motion.h1
      className="text-6xl font-bold"
      style={{ color: "#e8d8c9" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      Awitkowsky
    </motion.h1>

    <motion.p
      className="text-2xl mt-4 max-w-xl"
      style={{ color: "#4b607f" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      Frontend Developer & Interface Designer. Designing with precision.
    </motion.p>
  </>
);

export default SectionTitle;
