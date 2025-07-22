import React from "react";

import Image1 from "../../assets/about/image1.png";
import Image2 from "../../assets/about/image2.png";
import Image3 from "../../assets/about/image3.png";
import FacebookIcon from "../../assets/contact/facebook.svg";
import InstagramIcon from "../../assets/contact/instagram.svg";
import GoogleIcon from "../../assets/contact/google.svg";

import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
  return (
    <>
      {/* Left Side: Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 pr-0 lg:mt-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[32px] md:text-[48px] lg:text-[52px] lg:leading-[80px] font-bold text-[#191818] text-center lg:text-left"
        >
          Driven by Innovation,
          <br /> Defined by <span className="text-[#02ec97]">Passion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[18px] lg:text-[20px] leading-7 lg:leading-8 text-[#191818] mt-6 font-light text-justify"
        >
          We deliver forward-thinking solutions across marketing, technology,      
          and design. By combining strategic insight with creative execution, we
          help businesses elevate their digital presence and achieve meaningful
          growth fostering long-term success through quality, reliability, and
          innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block lg:mt-20 mt-10 w-full"
        >
          <div className="flex gap-4 justify-center lg:justify-start">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/allinoneholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[18px] h-[18px]"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/all_in_one_holdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-[18px] h-[18px]"
                />
              </a>

              {/* Google */}
              <a
                href="https://g.co/kgs/Cw4rrUZ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img
                  src={GoogleIcon}
                  alt="Google"
                  className="w-[18px] h-[18px]"
                />
              </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side: Images - Desktop Only */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block w-full lg:w-1/2 relative h-[580px] translate-x-16"
      >
        {/* Shifted Inner Wrapper */}
        <div className="relative w-full h-full ">
          {/* Image1 - Top Left */}
          <div className="absolute top-0 left-0 w-[50%] rounded-lg overflow-hidden z-10">
            <img
              src={Image1}
              alt="Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image2 - Bottom Left */}
          <div className="absolute bottom-0 right-0 w-[93%] rounded-lg overflow-hidden z-10">
            <img
              src={Image2}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image3 - Right Middle */}
          <div className="absolute top-[36%] right-[5%] w-[40%] rounded-lg overflow-hidden z-10 -translate-y-1/2">
            <img
              src={Image3}
              alt="Tall Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Mobile/Tablet Images + Social Buttons */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:hidden w-full flex flex-col items-center gap-0 mt-10 "
      >
        {/* Images Row */}
        <div className="w-full flex justify-between gap-4">
          <div className="w-[50%] rounded-lg overflow-hidden">
            <img
              src={Image1}
              alt="Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[50%] rounded-lg overflow-hidden">
            <img
              src={Image2}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className="w-full flex justify-start gap-4 mt-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/allinoneholdings"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="w-[18px] h-[18px]"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/all_in_one_holdings"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="w-[18px] h-[18px]"
            />
          </a>

          {/* Google */}
          <a
            href="https://g.co/kgs/Cw4rrUZ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
          >
            <img src={GoogleIcon} alt="Google" className="w-[18px] h-[18px]" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default AboutHero;
