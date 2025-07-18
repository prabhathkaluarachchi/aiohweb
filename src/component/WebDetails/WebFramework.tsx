import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/* -------------------------------- data -------------------------------- */
const steps = [
  {
    number: "01",
    title: "Study and Research",
    description:
      "We analyze industry trends, user needs, and tech insights to build a strong foundation for project success.",
  },
  {
    number: "02",
    title: "Plan and Strategic",
    description:
      "Our team creates detailed plans, defines goals, and sets timelines to guide every stage of the project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft clean, modern UI/UX designs that align with client goals and ensure a smooth user experience.",
  },
  {
    number: "04",
    title: "Prototype",
    description:
      "We build interactive prototypes to visualize ideas and gather feedback before full-scale development begins.",
  },
  {
    number: "05",
    title: "Develop and Test",
    description:
      "Our developers write clean code and rigorously test each feature to ensure performance, speed, and security.",
  },
  {
    number: "06",
    title: "Launch and Support",
    description:
      "We deploy your product with care and provide ongoing updates, maintenance, and technical support.",
  },
];

/* -------------------------------- desktop row -------------------------------- */
type Step = { number: string; title: string; description: string };
type StepItemProps = {
  step: Step;
  index: number;
  hoveredIndex: number;
  setHoveredIndex: (index: number) => void;
};

const StepItem: React.FC<StepItemProps> = ({
  step,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  const isLeft = index % 2 === 0;
  const isHovered = hoveredIndex === index;

  return (
    <div className="relative w-full flex items-center group h-[14%] min-h-[80px]">
      {/* content box */}
      <div
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(0)}
        className={`w-[44%] transition-all duration-300 text-left relative z-10 p-2.5
  ${
    isLeft
      ? `pr-8 justify-start rounded-l-[20px] ${
          isHovered ? "bg-gradient-to-r from-[#02EC9770] to-transparent" : ""
        }`
      : `pl-8 justify-start rounded-r-[20px] ml-auto ${
          isHovered ? "bg-gradient-to-l from-[#02EC9770] to-transparent" : ""
        }`
  }`}
      >
        <h3 className="text-[18px] xl:text-[24px] font-medium text-white">
          <span className="text-white mr-2 text-[28px] xl:text-[32px] font-medium">
            {step.number}
          </span>
          {step.title}
        </h3>
        <p className="text-sm xl:text-base font-light text-white/80 mt-1 leading-relaxed text-justify">
          {step.description}
        </p>
      </div>

      {/* dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-[3px] border-white/20 -m-[3px]" />
          <div
            className={`w-[20px] h-[20px] rounded-full border-[6px] transition-all duration-300
              ${
                isHovered
                  ? "border-[#02EC97] bg-[#02EC97]"
                  : "border-[#078BD6] bg-[#078BD6]"
              }
            `}
          />
          {/* arrow */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            } ${isLeft ? "-left-5 rotate-180" : "-right-5"}`}
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-[#02EC97]" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------- main component -------------------------------- */
const WebFramework: React.FC = () => {
  /* ---------- state & refs for mobile view ---------- */
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  /* ---------- observe which card is centered (active dot) ---------- */
  // For observer
  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    const cards = sc.querySelectorAll("div.snap-start"); // FIXED
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const idx = Array.from(cards).indexOf(en.target as HTMLElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: sc, threshold: 0.6 }
    );
    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ---------- auto-slide every 4 s (pause on user drag) ---------- */
  // For auto-scroll
  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    const goNext = () => {
      const next = (activeIndex + 1) % steps.length;
      const card = sc.querySelectorAll("div.snap-start")[next] as HTMLElement;
      if (card) {
        sc.scrollTo({
          top: card.offsetTop - 16, // padding fix
          behavior: "smooth",
        });
      }
    };

    autoRef.current = setInterval(goNext, 2000); // 2s as you wanted

    const stop = () => autoRef.current && clearInterval(autoRef.current);
    const resume = () => {
      stop();
      autoRef.current = setInterval(goNext, 2000);
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
    <>
      {/* ---------- DESKTOP TIMELINE ---------- */}
      <div className="hidden lg:flex w-full h-[90vh] min-h-[700px] max-h-[900px] flex-col pt-6 pb-30 relative">
        {/* ---------- Middle vertical line ---------- */}
        <motion.div
          className="absolute left-1/2 top-[220px] bottom-[80px] w-[2px] -translate-x-1/2 bg-white/80 z-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-center text-[26px] lg:text-[48px] font-bold text-white">
            The Way We Build
          </h2>
          <p className="text-center text-[16px] lg:text-[18px] text-white mt-0 font-light mb-12">
            How We Design, Develop, and Deliver Impactful Digital Products
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-0 relative h-full w-full max-w-full mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          {steps.map((s, i) => (
            <StepItem
              key={i}
              step={s}
              index={i}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </motion.div>
      </div>

      {/* ---------- MOBILE ONLY VERTICAL SCROLL ---------- */}
      <div className="lg:hidden w-full py-12 flex flex-col items-center">
        <h2 className="text-center text-2xl font-medium text-white mb-4">
          The Way We Build
        </h2>
        <p className="text-center text-[16px] lg:text-[18px] text-white mt-0 font-light mb-12">
          How We Design, Develop, and Deliver Impactful Digital Products
        </p>

        <div className="relative flex w-full px-6">
          {/* Vertical Scroll Container */}
          <div
            ref={scrollRef}
            className="h-[600px] md:h-[650px] overflow-y-auto snap-y snap-mandatory space-y-6 pr-3 scroll-hide"
          >
            {steps.map((s) => (
              <div
                key={s.number}
                className="w-full snap-start shrink-0 bg-white/5 backdrop-blur-md rounded-2xl p-6"
              >
                <h3 className="text-white text-3xl font-bold mb-1">
                  {s.number}
                </h3>
                <h4 className="text-white text-lg font-semibold">{s.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed mt-2">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Vertical Dots on the right side */}
          <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center gap-2 pr-2">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-[#02EC97]" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebFramework;
