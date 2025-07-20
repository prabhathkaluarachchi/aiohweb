import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";
import googleImg1 from "../../assets/about/client.png"; // Replace with actual image paths
import googleImg2 from "../../assets/about/client.png";
import googleImg3 from "../../assets/about/client.png";
import googleImg4 from "../../assets/about/client.png";

const testimonials = [
  {
    text: "From the initial planning session to final deployment, the team demonstrated both technical expertise and professionalism. They built us a fast, scalable website with a clean UI and excellent user experience. Post-launch support was prompt and helpful. It’s rare to find such reliable and responsive partners in tech.",
    name: "Michael D",
    title: "CTO",
    company: "BlueGrid Solutions",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U", // Example URL
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/0.jpg",
  },
    {
    text: "From the initial planning session to final deployment, the team demonstrated both technical expertise and professionalism. They built us a fast, scalable website with a clean UI and excellent user experience. Post-launch support was prompt and helpful. It’s rare to find such reliable and responsive partners in tech.",
    name: "Michael E",
    title: "CTO",
    company: "BlueGrid Solutions",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U", // Example URL
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/0.jpg",
  },
  // Add more testimonial objects as needed
];

const VoicesOfTrust: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[current];

  return (
    <div className="bg-amber-500 py-0 px-0">
      {/* Header */}
      <div className="text-left mb-12">
        <h2 className="text-[28px] md:text-[36px] font-bold text-black">
          Voices of Trust
        </h2>
        <p className="text-gray-600 mt-2 text-[16px] max-w-xl">
          Real words from real clients who’ve partnered with us to make their vision a reality.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left - Rating */}
        <div className="flex-1 bg-gradient-to-b from-[#010A12] to-[#074378] rounded-xl p-6 text-white shadow-lg">
          <div className="text-[48px] font-bold mb-2">4.9</div>
          <div className="flex items-center gap-1 mb-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} className="text-green-400" />
              ))}
          </div>
          {/* Client Images */}
          <div className="flex items-center mb-4 -space-x-5">
            <img src={googleImg1} className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={googleImg2} className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={googleImg3} className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={googleImg4} className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <div className="text-[18px] font-semibold">Google Ratings</div>
          <p className="text-sm mt-2 text-white/80">
            Here’s how our partners describe their experience working with us
          </p>
        </div>

        {/* Right - Testimonial Card */}
        <div className="flex-2 bg-white rounded-xl p-6 shadow-md relative">
          {/* Quotation */}
          <div className="text-green-500 text-3xl font-bold mb-4">“</div>
          <p className="text-gray-800 text-[15px] mb-6">{currentTestimonial.text}</p>

          {/* Signature */}
          <div className="font-bold text-black">{currentTestimonial.title},</div>
          <div className="font-semibold text-gray-600">
            {currentTestimonial.company}
          </div>
          <div className="text-sm text-gray-500">{currentTestimonial.name}</div>

          {/* Video Thumbnail */}
          <a
            href={currentTestimonial.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 w-28 h-16 rounded-md overflow-hidden shadow-md"
          >
            <div className="relative w-full h-full">
              <img
                src={currentTestimonial.thumbnail}
                alt="testimonial"
                className="object-cover w-full h-full"
              />
              <FiPlayCircle className="absolute text-white text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </a>

          {/* Navigation Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoicesOfTrust;
