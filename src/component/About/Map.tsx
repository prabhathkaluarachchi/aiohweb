import React from "react";
import { motion } from "framer-motion";

import MapImage from "../../assets/about/map.png";

const Map: React.FC = () => {
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
          Global Impact, Local Expertise
        </h2>
        <p className="text-[18px] md:text-[18px] font-light text-black mt-2 max-w-3xl mx-auto">
          Over the 10 years, we’ve proudly delivered successful projects for
          clients across multiple countries
        </p>
      </motion.div>

      {/* Map Image section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <img
          src={MapImage}
          alt="Global map with project connections"
          className="w-full max-w-6xl h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Map;
