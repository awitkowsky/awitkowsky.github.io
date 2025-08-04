// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => (
  <motion.p
    className="absolute bottom-6 text-xs"
    style={{ color: "#4b607f" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    © {new Date().getFullYear()} Awitkowsky. All rights reserved.
  </motion.p>
);

export default Footer;
