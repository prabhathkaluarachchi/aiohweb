import React from "react";
import { motion } from "framer-motion";

const Locations: React.FC = () => {
  return (
    <div className="w-full">
      {/* Text section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-[28px] md:text-[48px] lg:text-[52px] font-bold text-black">
          Global Impact, Local Expertise
        </h2>
        <p className="text-[18px] md:text-[18px] font-light text-black mt-2 max-w-3xl mx-auto">
          Over the 10 years, we’ve proudly delivered successful projects for
          clients across multiple countries
        </p>
      </motion.div>

      {/* Cards section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col lg:flex-row justify-center items-stretch gap-8"
      >
        {/* Left card */}
        <div className="w-full lg:w-[48%] bg-gray-200 rounded-xl h-[430px] shadow-md">
          {/* TODO: Add content for left card */}
        </div>

        {/* Right stacked cards */}
        <div className="w-full lg:w-[48%] flex flex-col justify-between gap-6">
          <div className="bg-gray-200 rounded-xl h-[200px] shadow-md">
            {/* TODO: Add content for top right card */}
          </div>
          <div className="bg-gray-200 rounded-xl h-[200px] shadow-md">
            {/* TODO: Add content for bottom right card */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Locations;
