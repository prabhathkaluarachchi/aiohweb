import React from "react";
import manImg from "../../assets/about/man.png";
import quotesSvg from "../../assets/about/quotes.svg";
import gradientBg from "../../assets/about/gredientbg.png";
import whiteBg from "../../assets/about/whitebg.png";

import { motion } from "framer-motion";

const directorData = [
  {
    id: 1,
    quote:
      "At the heart of our company is a commitment to innovation, integrity, and impact. we’re shaping a smarter, more connected world.",
    role: "CEO",
  },
  {
    id: 2,
    quote:
      "Together with our clients and team, we continue to challenge limits and redefine success. Our strategy is rooted in long-term vision and purposeful action.",
    role: "CTO",
  },
  {
    id: 3,
    quote:
      "Leadership is about inspiring change and pushing boundaries. We believe in collaboration, transparency, and making an impact that matters.",
    role: "COO",
  },
];

const Message: React.FC = () => {
  return (
    <div className="w-full">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-[28px] md:text-[48px] lg:text-[52px] font-bold text-black">
          Our Director’s Insight
        </h2>
        <p className="text-[18px] font-light text-black mt-2 max-w-3xl mx-auto">
          Insights from our leadership—highlighting the values and vision
          guiding our path.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-40 lg:gap-10 justify-center items-center mt-40"
      >
        {directorData.map((director) => (
          <div
            key={director.id}
            className="relative w-full md:w-3/5 lg:w-1/3 flex justify-center scale-[0.95] md:scale-100 max-w-xs md:max-w-none"
          >
            {/* Background Gradient */}
            <img
              src={gradientBg}
              alt="Gradient Background"
              className="absolute z-0"
              style={{
                top: 0,
                left: 0,
                width: "auto",
                height: "auto",
                maxWidth: "80%",
              }}
            />

            {/* Man Image */}
            <img
              src={manImg}
              alt="Director"
              className="absolute z-[5] w-[200px] h-auto object-contain"
              style={{
                top: "-140px",
                left: "60px",
              }}
            />

            {/* Card with Quote */}
            <div className="relative z-10 w-full ml-[60px] mt-24">
              <div className="relative md:w-[95%] w-full">
                <img
                  src={whiteBg}
                  alt="Card Background"
                  className="w-full h-auto object-contain"
                />
                {/* Content on top of white background */}
                <div className="absolute inset-0 px-4 pb-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <img
                      src={quotesSvg}
                      alt="quote"
                      className="md:w-16 md:h-16 w-12 h-12 px-0"
                    />
                    <p className="md:text-[16px] text-[14px] leading-relaxed text-black/80 ml-4">
                      {director.quote}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-black/70 text-right">
                    — {director.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Message;
