import React from "react";

// Import your images (adjust filenames accordingly)
import Image1 from "../assets/contact/image1.png";
import Image2 from "../assets/contact/image2.png";
import Image3 from "../assets/contact/image3.png";

const ContactSectionOne = () => {
  return (
    <div className="w-full bg-[#F9F3F3] py-[90px] font-['Roboto']">
      {/* Inner container with side spacing */}
      <div className="w-5/6 mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-[48px] leading-[62px] font-bold text-[#191818]">
            We’re Here to Collaborate<br />
            Let’s <span className="text-[#02ec97]">Connect</span>
          </h1>

          <p className="text-[18px] leading-[24px] text-[#191818]">
            Got a question, an idea, or a project in mind? We’re always excited to collaborate and help bring your vision to life.
            Drop us a message and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Right Side: Image Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={Image1}
              alt="Collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={Image2}
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="aspect-square rounded-lg overflow-hidden col-span-2">
            <img
              src={Image3}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionOne;
