import React from "react";
import { Link } from "react-router-dom";

import ArrowIcon from "../../assets/about/arrow.svg";

const WhoAre: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-0 lg:p-0">
      {/* Left Box */}
      <div className="relative flex-1 rounded-[20px] bg-gradient-to-r from-[#010A12] to-[#074378]  p-8 flex flex-col justify-center items-center text-center min-h-[500px]">
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
          <h1 className="text-[48px] font-medium mb-3">Who Are We</h1>
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
      </div>

      {/* Right Box */}
      <div className="flex-1 rounded-[20px] bg-white p-8 flex flex-col justify-center items-center text-center min-h-[500px]">
        <div className="text-black ">
          <h1 className="text-[48px] font-medium mb-3">What We Do</h1>
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

          <div className="flex justify-center gap-6 font-medium text-[16px]">
            <a
              href="/Marketing"
              className="text-black/45 underline decoration-black/45"
            >
              Marketing
            </a>
            <a
              href="/Webservice"
              className="text-black/45 underline decoration-black/45"
            >
              Technology
            </a>
            <a
              href="/Design"
              className="text-black/45 underline decoration-black/45"
            >
              Design
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAre;
