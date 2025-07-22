import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

const stats = [
  { value: 7, label: "Countries" },
  { value: 50, label: "Clients" },
  { value: 250, label: "Projects" },
  { value: 70, label: "Ongoing" },
];

const Counter: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCount();
          setHasAnimated(true);
          obs.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up
    };
  }, [hasAnimated]);

  const startCount = () => {
    const durations = 1000;
    const frameRate = 60;
    const totalFrames = Math.round((durations / 1000) * frameRate);

    const counters = stats.map((stat) => {
      const increment = stat.value / totalFrames;
      return { current: 0, increment };
    });

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setCounts(() =>
        counters.map((counter, i) =>
          frame < totalFrames
            ? Math.floor(counter.increment * frame)
            : stats[i].value
        )
      );

      if (frame >= totalFrames) {
        clearInterval(interval);
      }
    }, 1000 / frameRate);
  };

  return (
    <div ref={containerRef} className="w-full py-4 px-0">
      <motion.div 
                initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center ">
        {counts.map((count, i) => (
          <div key={i}>
            <div className="text-[60px] md:text-[80px] font-bold text-black leading-20">
              {count}
              <span className="text-[#02EC97]">+</span>
            </div>
            <div className="text-[18px] md:text-[24px] font-medium text-black">
              {stats[i].label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Counter;
