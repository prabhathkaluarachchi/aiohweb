import React, { useRef, useEffect, useState } from "react";
import {
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaBullseye,
  FaAward,
} from "react-icons/fa";

import { motion } from "framer-motion";

import AIOHLogo from "../../assets/about/AIOH.png";

const cards = [
  {
    title: "Integrity",
    description:
      "Honest, transparent actions that build lasting trust and accountability.",
    icon: <FaHandshake size={20} />,
  },
  {
    title: "Collaboration",
    description:
      "Stronger results through teamwork, communication, and shared goals.",
    icon: <FaUsers size={20} />,
  },
  {
    title: "Innovation",
    description:
      "Creative solutions driven by change, technology, and fresh thinking.",
    icon: <FaLightbulb size={20} />,
  },
  {
    title: "Client-First",
    description:
      "We listen, adapt, and deliver solutions fully aligned with your goals and long-term success.",
    icon: <FaBullseye size={20} />,
  },
  {
    title: "Excellence",
    description: "Committed to quality, precision, and outstanding results.",
    icon: <FaAward size={20} />,
  },
];

const WhatSets: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Observe active slide for dot indicator
  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    const cards = sc.querySelectorAll(".snap-start");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(cards).indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: sc, threshold: 0.6 }
    );

    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    const goNext = () => {
      const next = (activeIndex + 1) % cards.length;
      const card = sc.querySelectorAll(".snap-start")[next] as HTMLElement;
      if (card) {
        sc.scrollTo({
          left: card.offsetLeft - 16, // padding fix
          behavior: "smooth",
        });
      }
    };

    autoRef.current = setInterval(goNext, 2500);

    const stop = () => autoRef.current && clearInterval(autoRef.current);
    const resume = () => {
      stop();
      autoRef.current = setInterval(goNext, 2500);
    };

    sc.addEventListener("pointerdown", stop);
    sc.addEventListener("pointerup", resume);
    sc.addEventListener("pointercancel", resume);

    return () => {
      stop();
      sc.removeEventListener("pointerdown", stop);
      sc.removeEventListener("pointerup", resume);
      sc.removeEventListener("pointercancel", resume);
    };
  }, [activeIndex]);

  return (
    <div className="w-full py-0">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-10 px-4"
      >
        <h2 className="text-[28px] md:text-[48px] lg:text-[52px] font-bold text-black">
          What Sets Us Apart
        </h2>
        <p className="text-[18px] font-light text-black mt-2 max-w-3xl mx-auto">
          Our core values aren’t just words — they’re the foundation of
          everything we do.
        </p>
      </motion.div>

      {/* MOBILE ONLY */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      className="lg:hidden bg-gradient-to-b from-black to-[#00376E] rounded-[20px] px-4 pt-8 pb-14 relative overflow-hidden">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={AIOHLogo} alt="AIOH Logo" className="w-36 object-contain" />
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto snap-x snap-mandatory px-2 scroll-smooth scroll-hide"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[270px] bg-white/10 backdrop-blur-md rounded-[20px] p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#02EC97] w-10 h-10 flex items-center justify-center rounded-md text-black">
                  {card.icon}
                </div>
                <h3 className="text-lg font-medium">{card.title}</h3>
              </div>
              <p className="text-sm font-light text-white/80 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Active Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-[#02EC97]" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* DESKTOP GRID */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:block bg-gradient-to-b from-black to-[#00376E] rounded-[20px] py-16 px-6"
      >
        <div className="grid grid-cols-3 gap-12 w-11/12 mx-auto">
          {/* Top Row */}
          <div className="bg-white/20 rounded-[20px] p-6 flex flex-col gap-2 text-white font-roboto">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#02EC97] w-10 h-10 flex items-center justify-center rounded-md text-black">
                <FaHandshake size={20} />
              </div>
              <h3 className="text-xl font-medium">Integrity</h3>
            </div>
            <p className="text-base font-light text-white/80">
              Honest, transparent actions that build lasting trust and
              accountability.
            </p>
          </div>

          <div className="flex items-center justify-center bg-transparent">
            <img
              src={AIOHLogo}
              alt="AIOH Logo"
              className="w-48 lg:w-72 object-contain"
            />
          </div>

          <div className="bg-white/20 rounded-[20px] p-6 flex flex-col gap-2 text-white font-roboto">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#02EC97] w-10 h-10 flex items-center justify-center rounded-md text-black">
                <FaUsers size={20} />
              </div>
              <h3 className="text-xl font-medium">Collaboration</h3>
            </div>
            <p className="text-base font-light text-white/80">
              Stronger results through teamwork, communication, and shared
              goals.
            </p>
          </div>

          {/* Bottom Row */}
          {[
            {
              title: "Innovation",
              description:
                "Creative solutions driven by change, technology, and fresh thinking.",
              icon: <FaLightbulb size={20} />,
            },
            {
              title: "Client-First",
              description:
                "We listen, adapt, and deliver solutions fully aligned with your goals and long-term success.",
              icon: <FaBullseye size={20} />,
            },
            {
              title: "Excellence",
              description:
                "Committed to quality, precision, and outstanding results.",
              icon: <FaAward size={20} />,
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/20 rounded-[20px] p-6 flex flex-col gap-2 text-white font-roboto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#02EC97] w-10 h-10 flex items-center justify-center rounded-md text-black">
                  {card.icon}
                </div>
                <h3 className="text-xl font-medium">{card.title}</h3>
              </div>
              <p className="text-base font-light text-white/80">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhatSets;
