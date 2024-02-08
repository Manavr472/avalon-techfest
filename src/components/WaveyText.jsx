import React from "react";
import { motion } from "framer-motion";

const Waveytext = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
        <motion.div
          className="text-[41px] text-center md:text-8xl font-Rozha text-white"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 , y: 100}}
        >
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      );
    };

export default Waveytext;