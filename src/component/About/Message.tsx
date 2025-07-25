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
      "At the heart of our company is a commitment to innovation, integrity, and impact. We’re not just building technology — we’re shaping a smarter, more connected world.",
  },
  {
    id: 2,
    quote:
      "Together with our clients and team, we continue to challenge limits and redefine success. Our strategy is rooted in long-term vision and purposeful action.",
  },
  {
    id: 3,
    quote:
      "Leadership is about inspiring change and pushing boundaries. We believe in collaboration, transparency, and making an impact that matters.",
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
        className="flex flex-col lg:flex-row gap-45 lg:gap-10 justify-center items-center mt-40"
      >
        {directorData.map((director) => (
          <div
            key={director.id}
            className="relative w-full md:w-3/5 lg:w-1/3 flex justify-center"
          >
            {/* Background Gradient Image with original size */}
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

            {/* White Card Image with Quote */}
            <div className="relative z-10 w-full ml-[60px] mt-24">
              <img
                src={whiteBg}
                alt="Card Background"
                className="w-[95%] h-auto object-contain"
              />
              <div className="absolute top-6 left-6 right-6 bottom-6 flex flex-col justify-start">
                <img src={quotesSvg} alt="quote" className="md:w-16 md:h-16 mb-0 w-12 h-12" />
                <p className="md:text-[16px] text-[14px] leading-relaxed text-black/80  ml-4 mr-4 ">
                  {director.quote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Message;
