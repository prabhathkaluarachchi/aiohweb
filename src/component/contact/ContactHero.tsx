import React from "react";
import Image1 from "../../assets/contact/image1.png";
import Image2 from "../../assets/contact/image2.png";
import Image3 from "../../assets/contact/image3.png";
import Mesh from "../../assets/contact/mesh.png";
import MotionSection from "../common/MotionSection";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const ContactHero: React.FC = () => {
  return (
    <>
      {/* Left Side: Text */}
      <MotionSection
        delay={0.5}
        direction="fade"
        className="w-full lg:w-1/2 pr-0 lg:pr-4 lg:mt-15 md:mt-10"
      >
        <h1 className="text-[28px] md:text-[32px] lg:text-[52px] lg:leading-[80px] font-bold text-[#191818] text-center lg:text-left">
          We’re Here to Collaborate
          <br />
          Let’s <span className="text-[#02ec97]">Connect</span>
        </h1>

        <p className="text-[16px] lg:text-[20px] leading-7 lg:leading-8 text-[#191818] mt-6 font-light text-justify">
          Got a question, an idea, or a project in mind? We’re always excited to
          collaborate and help bring your vision to life. Drop us a message and
          we’ll get back to you as soon as possible.
        </p>
        <div className="hidden lg:block lg:mt-20 mt-10 w-full">
          <div className="flex gap-4 justify-center lg:justify-start">
            {/* Whatsapp */}
            <a
              href="https://wa.me/94768572709"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
            >
              <FaWhatsapp className="text-[#191818] w-[18px] h-[18px]" />
            </a>

            {/* Email */}
            <a
              href="mailto:info@allinoneholdings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
            >
              <AiOutlineMail className="text-[#191818] w-[18px] h-[18px]" />
            </a>

            {/* Telephone */}
            <a
              href="tel:+94812121051"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
            >
              <IoIosCall className="text-[#191818] w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </MotionSection>

      {/* Right Side: Images - Desktop Only */}
      <MotionSection
        delay={0.5}
        direction="right"
        className="hidden lg:block w-full lg:w-1/2 relative h-[525px] translate-x-16"
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
          <div className="absolute bottom-0 left-[-5%] w-[55%] rounded-lg overflow-hidden z-10">
            <img
              src={Image2}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image3 - Right Middle */}
          <div className="absolute top-1/2 right-0 w-[45%] rounded-lg overflow-hidden z-10 -translate-y-1/2">
            <img
              src={Image3}
              alt="Tall Team"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Mesh Overlay */}
          <div className="absolute inset-0 pointer-events-none z-20 right-0">
            <img
              src={Mesh}
              alt="Mesh Overlay"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </MotionSection>

      {/* Mobile/Tablet Images + Social Buttons */}
      <MotionSection
        delay={0.5}
        direction="up"
        className="lg:hidden w-full flex flex-col items-center gap-4 mt-8"
      >
        {/* Images Row */}
        <div className="w-full flex justify-center gap-4">
          <div className="w-[45%] rounded-lg overflow-hidden">
            <img
              src={Image1}
              alt="Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[45%] rounded-lg overflow-hidden">
            <img
              src={Image2}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className="w-full flex justify-end gap-4 mt-4">
          <a
            href="https://wa.me/94768572709"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
          >
            <FaWhatsapp className="text-[#191818] w-[18px] h-[18px]" />
          </a>
          <a
            href="mailto:info@allinoneholdings.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
          >
            <AiOutlineMail className="text-[#191818] w-[18px] h-[18px]" />
          </a>
          <a
            href="tel:+94812121051"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
          >
            <IoIosCall className="text-[#191818] w-[18px] h-[18px]" />
          </a>
        </div>
      </MotionSection>
    </>
  );
};

export default ContactHero;
