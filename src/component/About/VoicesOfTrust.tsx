import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

import googleImg1 from "../../assets/about/client.png";
import googleImg2 from "../../assets/about/client2.jpeg";
import googleImg3 from "../../assets/about/client.png";
import googleImg4 from "../../assets/about/client2.jpeg";
import googleImg5 from "../../assets/about/google.jpg";
import quotesSvg from "../../assets/about/quotes.svg";
import LeftArrow from "../../assets/about/left.svg";
import RightArrow from "../../assets/about/right.svg";
import PlayIcon from "../../assets/about/play.svg";

// Testimonials
const testimonials = [
  {
    text: "From the initial planning session to final deployment, the team demonstrated both technical expertise and professionalism. They built us a fast, scalable website with a clean UI and excellent user experience. Post-launch support was prompt and helpful. ",
    name: "Sarah L",
    title: "Head of Product",
    company: "Nexora Tech",
    videoUrl: "https://www.youtube.com/embed/wa88vwvhR_U",
  },
  {
    text: "Working with this team was a fantastic experience. Their attention to detail, design clarity, and tech-stack decisions made a major difference in how our app performs today. They've been more of a partner than just a service provider.",
    name: "David K",
    title: "Founder & CEO",
    company: "BrightSync Labs",
    videoUrl: "https://www.youtube.com/embed/QC8iQqtG0hg",
  },
];

// Helper function
function getYouTubeThumbnail(url: string) {
  const videoId = url.split("embed/")[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

const VoicesOfTrust: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const testimonial = testimonials[current];

  const handlePrev = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-transparent">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-[28px] md:text-[48px] lg:text-[52px] font-bold text-black">
          Voices of Trust
        </h2>
        <p className="text-black text-[18px] font-light mt-2 max-w-xl">
          Real words from real clients who’ve partnered with us to make their
          vision a reality.
        </p>
      </motion.div>

      {/* 3-part Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Left - Ratings */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-b from-[#010A12] to-[#074378] lg:py-20 rounded-xl p-6 lg:px-6 md:px-38 text-white shadow-lg flex flex-col items-center justify-center text-center"
        >
          <div className="text-[96px] font-medium text-[#02EC97]">4.9</div>
          <div className="flex items-center justify-center gap-4 mb-12 mt-[-10px]">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} className="text-[#02EC97]" />
              ))}
          </div>
          <div className="flex items-center justify-center mb-4 -space-x-5">
            {[googleImg1, googleImg2, googleImg3, googleImg4, googleImg5].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-10 h-10 rounded-full border-2 border-[#078BD6]"
                />
              )
            )}
          </div>
          <div className="text-[18px] font-medium">Google Ratings</div>
          <p className="text-[18px] font-light mt-4 text-white">
            Here’s how our partners describe their experience working with us
          </p>
        </motion.div>

        {/* Right - Testimonial with slide animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2 relative bg-white rounded-xl p-8 shadow-md min-h-[420px] flex flex-col justify-between overflow-hidden"
        >
          {/* Navigation Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 z-10 p-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-[#01213A] text-white rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition cursor-pointer"
            >
              <img src={LeftArrow} alt="Previous" className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-[#02EC97] text-white rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition cursor-pointer"
            >
              <img src={RightArrow} alt="Next" className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={testimonial.videoUrl}
              initial={{ x: direction === "right" ? 200 : -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "right" ? -200 : 200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between h-full lg:py-4"
            >
              {/* Top: Quote icon */}
              <img src={quotesSvg} alt="Quote" className="w-20 h-20 mb-4" />

              {/* Feedback */}
              <p className="text-black text-[18px] mb-4 font-light leading-relaxed text-justify">
                {testimonial.text}
              </p>

              {/* Bottom Row: Signature + Video Preview */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 gap-6">
                {/* Signature */}
                <div>
                  <div className="text-[18px] font-semibold text-[#191818]">
                    {testimonial.title},
                  </div>
                  <div className="text-[18px] font-semibold text-[#191818]">
                    {testimonial.company}
                  </div>
                  <div className="text-[18px] text-[#595959] font-medium">
                    {testimonial.name}
                  </div>
                </div>

                {/* Video Thumbnail + Popup Trigger */}
                <div className="w-full sm:w-[300px] h-[150px] relative">
                  <div
                    onClick={() => setIsModalOpen(true)}
                    className="w-full h-full rounded-[20px] overflow-hidden shadow-md relative cursor-pointer"
                  >
                    <img
                      src={getYouTubeThumbnail(testimonial.videoUrl)}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#078BD699] to-transparent" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <img
                        src={PlayIcon}
                        alt="Play"
                        className="w-14 h-14 mb-1"
                      />
                      <p className="text-[12px] font-bold text-white text-center mt-2">
                        Hear It From Our Client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 text-white text-2xl cursor-pointer"
          >
            ✕
          </button>
          <div className="w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={testimonial.videoUrl + "?autoplay=1"}
              title="Client Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VoicesOfTrust;
