import React from "react";

import { motion } from "framer-motion";

type Direction =
  | "up"
  | "down"
  | "left"
  | "right"
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "fade"
  | "fadeOut";

type MotionSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
};

const getVariants = (direction: Direction) => {
  switch (direction) {
    case "up":
      return {
        initial: { opacity: 0, y: 100 },
        whileInView: { opacity: 1, y: 0 },
      };
    case "down":
      return {
        initial: { opacity: 0, y: -100 },
        whileInView: { opacity: 1, y: 0 },
      };
    case "left":
      return {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        initial: { opacity: 0, x: -80 },
        whileInView: { opacity: 1, x: 0 },
      };
    case "fadeUp":
      return {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
      };
    case "fadeDown":
      return {
        initial: { opacity: 0, y: -50 },
        whileInView: { opacity: 1, y: 0 },
      };
    case "fadeLeft":
      return {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
      };
    case "fadeRight":
      return {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
      };
    case "fade":
      return { initial: { opacity: 0 }, whileInView: { opacity: 1 } };
    case "fadeOut":
      return { initial: { opacity: 1 }, whileInView: { opacity: 0 } };
    default:
      return {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
      };
  }
};

const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const variants = getVariants(direction);

  return (
    <motion.section
      initial="initial"
      whileInView="whileInView"
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
