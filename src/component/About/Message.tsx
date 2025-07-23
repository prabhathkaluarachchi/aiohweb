import React from "react";

import { motion } from "framer-motion";

const Message: React.FC = () => {
  return (
    <div className="w-full py-0 px-0">
      {/* Text section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-[28px] md:text-[48px] lg:text-[52px] font-bold text-black ">
          Our Director’s Insight
        </h2>
        <p className="text-[18px] md:text-[18px] font-light text-black mt-2 max-w-3xl mx-auto">
          Insights from our leadership—highlighting the values and vision
          guiding our path
        </p>
      </motion.div>

      {/* Bottom section */}
      <div className="w-full flex justify-center items-center bg-amber-700 p-60"></div>
    </div>
  );
};

export default Message;
