import { motion } from "framer-motion";
import React from "react";

type MotionSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ✅ Add delay prop
};

const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
};

const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className = "",
  delay = 0, // ✅ default value
}) => (
  <motion.section
    initial="initial"
    whileInView="whileInView"
    transition={{ duration: 0.6, delay, ease: "easeOut" }} // ✅ use delay
    viewport={{ once: true }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.section>
);

export default MotionSection;
