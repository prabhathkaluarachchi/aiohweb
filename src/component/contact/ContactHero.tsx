import React from "react";
import Image1 from "../../assets/contact/image1.png";
import Image2 from "../../assets/contact/image2.png";
import Image3 from "../../assets/contact/image3.png";
import Mesh from "../../assets/contact/mesh.png";

const ContactHero: React.FC = () => {
  return (
    <>
      {/* Left Side: Text */}
      <div className="w-full lg:w-1/2 pr-0 lg:pr-4 lg:mt-15 md:mt-10">
        <h1 className="text-[28px] md:text-[32px] lg:text-[52px] leading-[48px] lg:leading-[80px] font-bold text-[#191818] text-center lg:text-left">
          We’re Here to Collaborate
          <br />
          Let’s <span className="text-[#02ec97]">Connect</span>
        </h1>

        <p className="text-[16px] lg:text-[20px] leading-[28px] lg:leading-8 text-[#191818] mt-6 font-light text-justify">
          Got a question, an idea, or a project in mind? We’re always excited to
          collaborate and help bring your vision to life. Drop us a message and
          we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Right Side: Images - Desktop Only */}
      <div className="hidden lg:block w-full lg:w-1/2 relative h-[525px] translate-x-10">
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
      </div>

      {/* Mobile/Tablet Images Only */}
      <div className="lg:hidden w-full flex justify-center gap-4 mt-6">
        {/* Responsive Image 1 */}
        <div className="w-[45%] rounded-lg overflow-hidden">
          <img
            src={Image1}
            alt="Collaboration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Responsive Image 2 */}
        <div className="w-[45%] rounded-lg overflow-hidden">
          <img
            src={Image2}
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ContactHero;
