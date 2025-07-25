import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import ArrowIcon from "../../assets/about/arrow.svg";

const WhoAre: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-0 lg:p-0">
      {/* Left Box */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex-1 rounded-[20px] bg-gradient-to-r from-[#010A12] to-[#074378]  p-8 flex flex-col justify-center items-center text-center min-h-[500px]"
      >
        {/* Top-right circular button */}
        <Link to="/contact">
          <button className="absolute top-6 right-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/50 flex items-center justify-center shadow-md transition cursor-pointer">
            <img
              src={ArrowIcon}
              alt="Arrow pointing northeast"
              className="w-6 h-6"
            />
          </button>
        </Link>

        {/* Center Content */}
        <div className="text-white ">
          <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
            Who Are We
          </h1>
          <p className="text-[18px] font-light mb-6">
            Creative Thinkers. Technical Experts. Strategic Partners.
          </p>
          <p className="text-[18px] font-light max-w-xl mx-auto leading-[30px]">
            We are a multidisciplinary team dedicated to solving complex
            challenges with smart, creative solutions. With a strong foundation
            built on collaboration and continuous learning, we help businesses
            of all sizes navigate the digital landscape with clarity and impact.
          </p>
        </div>
      </motion.div>

      {/* Right Box */}
      <motion.div 
                initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
      className="flex-1 rounded-[20px] bg-white p-8 flex flex-col justify-center items-center text-center min-h-[500px]">
        <div className="text-black ">
          <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
            What We Do
          </h1>
          <p className="text-[18px] font-light mb-6">
            End-to-End Digital Solutions for Every Stage of Growth
          </p>
          <p className="text-[18px] font-light max-w-xl mx-auto leading-[30px] mb-10">
            From digital marketing strategies and custom software development to
            visually engaging design experiences, our services are designed to
            meet diverse client needs. Whether launching a new idea or scaling
            an existing platform, we bring the tools and expertise to make it
            happen.
          </p>

          <div className="flex justify-center gap-6 font-medium text-[16px] ">
            <a
              href="/Marketing"
              className="text-black/45 underline decoration-black/45 hover:text-black/70"
            >
              Marketing
            </a>
            <a
              href="/Webservice"
              className="text-black/45 underline decoration-black/45 hover:text-black/70"
            >
              Technology
            </a>
            <a
              href="/Design"
              className="text-black/45 underline decoration-black/45 hover:text-black/70"
            >
              Design
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhoAre;
