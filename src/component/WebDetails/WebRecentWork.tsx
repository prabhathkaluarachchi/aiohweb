import { useEffect, useRef, useState } from "react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { LuCircleChevronRight } from "react-icons/lu";

import rw1 from "../../assets/recentWork/rw1.png";
import rw6 from "../../assets/recentWork/rw6.png";
import rw7 from "../../assets/recentWork/rw7.png";
import rw8 from "../../assets/recentWork/rw8.png";
import rw9 from "../../assets/recentWork/rw9.png";
import rw10 from "../../assets/recentWork/rw10.png";
import rw11 from "../../assets/recentWork/rw11.png";
import rw12 from "../../assets/recentWork/rw12.png";
import rw13 from "../../assets/recentWork/rw13.png";

import { AnimatePresence, motion } from "framer-motion";

const projects = [
  // Recent works
  {
    title: "EIKONE Admissions",
    description:
      "Free counselling and application support for UK university admissions.",
    image: rw9,
    link: "#",
    description2:
      "This website was crafted to help travelers explore and book unforgettable experiences through Travel Regency House, your trusted gateway to world-class journeys. Built using React.js, Vite, and Tailwind CSS, the platform offers a fast, responsive, and user-friendly interface across all devices.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    solutions: [
      "Produced a consistent experience across customization of Volvo Cars.",
      "A start to finish agile web application where you can build your Volvo Car from engine configuration, to colour, wheels, upholstery, and optional equipment.",
      "Real time changes that reflected the latest updates while browsing.",
      "Created a new experience of car configuration.",
      "Bespoke backend solution that integrates with user experience.",
    ],
  },
  {
    title: "Dinuda Resort",
    description:
      "Dinuda Resort offers an unparalleled escape into tropical paradise.",
    image: rw10,
    link: "#",
    description2:
      "This website was crafted to help travelers explore and book unforgettable experiences through Travel Regency House, your trusted gateway to world-class journeys. Built using React.js, Vite, and Tailwind CSS, the platform offers a fast, responsive, and user-friendly interface across all devices.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    solutions: [
      "Produced a consistent experience across customization of Volvo Cars.",
      "A start to finish agile web application where you can build your Volvo Car from engine configuration, to colour, wheels, upholstery, and optional equipment.",
      "Real time changes that reflected the latest updates while browsing.",
      "Created a new experience of car configuration.",
      "Bespoke backend solution that integrates with user experience.",
    ],
  },
  {
    title: "Fly Limousines",
    description: "Fly Limousines is a premier luxury transportation service.",
    image: rw11,
    link: "#",
    description2:
      "This website was crafted to help travelers explore and book unforgettable experiences through Travel Regency House, your trusted gateway to world-class journeys. Built using React.js, Vite, and Tailwind CSS, the platform offers a fast, responsive, and user-friendly interface across all devices.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    solutions: [
      "Produced a consistent experience across customization of Volvo Cars.",
      "A start to finish agile web application where you can build your Volvo Car from engine configuration, to colour, wheels, upholstery, and optional equipment.",
      "Real time changes that reflected the latest updates while browsing.",
      "Created a new experience of car configuration.",
      "Bespoke backend solution that integrates with user experience.",
    ],
  },
  {
    title: "NAFCO",
    description:
      "Prominent manufacturer of cellular cement blocks in Sri Lanka.",
    image: rw12,
    link: "#",
    description2:
      "This website was crafted to help travelers explore and book unforgettable experiences through Travel Regency House, your trusted gateway to world-class journeys. Built using React.js, Vite, and Tailwind CSS, the platform offers a fast, responsive, and user-friendly interface across all devices.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    solutions: [
      "Produced a consistent experience across customization of Volvo Cars.",
      "A start to finish agile web application where you can build your Volvo Car from engine configuration, to colour, wheels, upholstery, and optional equipment.",
      "Real time changes that reflected the latest updates while browsing.",
      "Created a new experience of car configuration.",
      "Bespoke backend solution that integrates with user experience.",
    ],
  },
  {
    title: "Muswenna Tea",
    description:
      "Muswenna Tea Factory, where passion meets tradition in every cup.",
    image: rw13,
    link: "#",
    description2:
      "This website was crafted to help travelers explore and book unforgettable experiences through Travel Regency House, your trusted gateway to world-class journeys. Built using React.js, Vite, and Tailwind CSS, the platform offers a fast, responsive, and user-friendly interface across all devices.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    solutions: [
      "Produced a consistent experience across customization of Volvo Cars.",
      "A start to finish agile web application where you can build your Volvo Car from engine configuration, to colour, wheels, upholstery, and optional equipment.",
      "Real time changes that reflected the latest updates while browsing.",
      "Created a new experience of car configuration.",
      "Bespoke backend solution that integrates with user experience.",
    ],
  },
  {
    title: "Aluvihare Website",
    description:
      "A Sacred Buddhist Temple located in Aluvihare. Matale, District.",
    image: rw1,
    link: "#",
    description2:
      "This website was crafted to help travelers explore and book unforgettable experiences through Travel Regency House, your trusted gateway to world-class journeys. Built using React.js, Vite, and Tailwind CSS, the platform offers a fast, responsive, and user-friendly interface across all devices.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    solutions: [
      "Produced a consistent experience across customization of Volvo Cars.",
      "A start to finish agile web application where you can build your Volvo Car from engine configuration, to colour, wheels, upholstery, and optional equipment.",
      "Real time changes that reflected the latest updates while browsing.",
      "Created a new experience of car configuration.",
      "Bespoke backend solution that integrates with user experience.",
    ],
  },
  {
    title: "Regency Travel House",
    description: "Custom travel packages designed to your accommodations.",
    image: rw7,
    link: "#",
    description2:
      "This website was crafted to help travelers explore and book unforgettable experiences through Travel Regency House, your trusted gateway to world-class journeys. Built using React.js, Vite, and Tailwind CSS, the platform offers a fast, responsive, and user-friendly interface across all devices.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    solutions: [
      "Produced a consistent experience across customization of Volvo Cars.",
      "A start to finish agile web application where you can build your Volvo Car from engine configuration, to colour, wheels, upholstery, and optional equipment.",
      "Real time changes that reflected the latest updates while browsing.",
      "Created a new experience of car configuration.",
      "Bespoke backend solution that integrates with user experience.",
    ],
  },
  {
    title: "HARRISONS",
    description:
      "HARRISONS offers timeless elegance and style in their men’s collection.",
    image: rw8,
    link: "#",
    description2:
      "This website was crafted to help travelers explore and book unforgettable experiences through Travel Regency House, your trusted gateway to world-class journeys. Built using React.js, Vite, and Tailwind CSS, the platform offers a fast, responsive, and user-friendly interface across all devices.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    solutions: [
      "Produced a consistent experience across customization of Volvo Cars.",
      "A start to finish agile web application where you can build your Volvo Car from engine configuration, to colour, wheels, upholstery, and optional equipment.",
      "Real time changes that reflected the latest updates while browsing.",
      "Created a new experience of car configuration.",
      "Bespoke backend solution that integrates with user experience.",
    ],
  },
  {
    title: "Kandy Rent Cars",
    description:
      "Kandy Rent Cars is your trusted car rental service in Kandy and beyond.",
    image: rw6,
    link: "#",
    description2:
      "This website was crafted to help travelers explore and book unforgettable experiences through Travel Regency House, your trusted gateway to world-class journeys. Built using React.js, Vite, and Tailwind CSS, the platform offers a fast, responsive, and user-friendly interface across all devices.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    solutions: [
      "Produced a consistent experience across customization of Volvo Cars.",
      "A start to finish agile web application where you can build your Volvo Car from engine configuration, to colour, wheels, upholstery, and optional equipment.",
      "Real time changes that reflected the latest updates while browsing.",
      "Created a new experience of car configuration.",
      "Bespoke backend solution that integrates with user experience.",
    ],
  },
];

// Project type definition
type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  description2?: string;
  challenges?: string[];
  solutions?: string[];
};

const WebRecentWork: React.FC = () => {
  // Ref to scroll to card section
  const cardSectionRef = useRef<HTMLDivElement>(null);

  // Popup state management
  const [popupData, setPopupData] = useState<Project | null>(null);

  // State to manage current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Determine screen size
  const [screen, setScreen] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  // Update screen size on resize and set interval for mobile pagination
  useEffect(() => {
    const updateScreen = () => {
      if (window.innerWidth < 640) setScreen("mobile");
      else if (window.innerWidth < 1024) setScreen("tablet");
      else setScreen("desktop");
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);

    let interval: NodeJS.Timeout | null = null;

    if (screen === "mobile") {
      interval = setInterval(() => {
        setCurrentPage((prev) =>
          prev < Math.ceil(projects.length / 4) ? prev + 1 : 1
        );
      }, 8000);
    }

    return () => {
      window.removeEventListener("resize", updateScreen);
      if (interval) clearInterval(interval);
    };
  }, [screen]);

  // Scroll to top of card section when currentPage changes
  useEffect(() => {
    const section = cardSectionRef.current;
    if (!section) return;

    // Skip scroll if auto-slide is active on mobile
    if (screen === "mobile") return;

    const rect = section.getBoundingClientRect();
    const isInView =
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);

    if (isInView) {
      section.scrollIntoView({
        // behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  // Calculate pagination based on screen size
  let itemsPerPage = 8;
  if (screen === "mobile") itemsPerPage = 4;
  else if (screen === "tablet") itemsPerPage = 6;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => {
        const newPage = Math.max(prev - 1, 1);
        setTimeout(() => {
          cardSectionRef.current?.scrollIntoView({
            // behavior: "smooth",
            block: "start",
          });
        }, 50);
        return newPage;
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => {
        const newPage = Math.min(prev + 1, totalPages);
        setTimeout(() => {
          cardSectionRef.current?.scrollIntoView({
            // behavior: "smooth",
            block: "start",
          });
        }, 50);
        return newPage;
      });
    }
  };

  return (
    <div className="py-4">
      {/* sec heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[32px] font-bold text-center"
        >
          What We've Built
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-11/12 md:w-3/4 lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-7 lg:leading-8 font-light text-center"
        >
          Explore our journey through recent builds
        </motion.p>
      </motion.div>

      {/* card sec */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          ref={cardSectionRef}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12 pt-8 lg:pt-10"
        >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white hover:bg-[#01213A] text-secondary hover:text-white rounded-xl shadow-sm hover:shadow-md transition-transform group hover:scale-[1.015] flex flex-col justify-between h-full"
            >
              {/* Card Top Content */}
              <div className="items-start p-4 pt-4 sm:pt-6 cursor-pointer" onClick={() => setPopupData(project)}>
                <div className="flex justify-between md:mb-4">
                  <h3 className="font-medium text-sm md:text-lg w-3/4 sm:max-w-4/5">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => setPopupData(project)}
                    className="bg-primary text-secondary w-8 h-8 md:w-9 md:h-9 ml-2 md:ml-1 flex items-center justify-center rounded-full group-hover:scale-110 transition cursor-pointer"
                  >
                    <GoArrowUpRight className="text-sm md:text-lg" />
                  </button>
                </div>
                <p className="text-xs md:text-sm font-light md:leading-5 my-2 md:my-1">
                  {project.description}
                </p>
              </div>

              <div
                className="relative flex items-center justify-center md:mt-4 scale-100 group-hover:scale-105 transition-transform duration-300 ease-out cursor-pointer"
                onClick={() => setPopupData(project)}
              >
                {/* SHAPE back - hover */}
                <div className="hidden group-hover:block absolute -top-3 sm:-top-4.5 w-4/5 h-16 bg-white rounded-[10px] opacity-60 z-0" />

                {/* SHAPE front - hover */}
                <div className="hidden group-hover:block absolute -top-1.5 sm:-top-2.5 w-11/12 h-16 bg-white rounded-[10px] opacity-80 z-10" />

                {/* SHAPE back */}
                <div className="block group-hover:hidden absolute -top-3 sm:-top-4.5 w-4/5 h-16 bg-[#595959] rounded-[10px] opacity-60 z-0" />

                {/* SHAPE front */}
                <div className="block group-hover:hidden absolute -top-1.5 sm:-top-2.5 w-11/12 h-16 bg-[#595959] rounded-[10px] opacity-80 z-10" />

                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full h-28 md:h-36 lg:h-44 object-cover rounded-[10px] rounded-b-xl z-20"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-10 lg:mt-16">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full border ${
            currentPage === 1
              ? "bg-ternary/5 text-ternary/50 cursor-not-allowed"
              : "hover:bg-ternary/5 cursor-pointer"
          }`}
        >
          <FiArrowLeft />
        </button>

        <span className="text-sm font-medium text-secondary/80">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full border ${
            currentPage === totalPages
              ? "bg-ternary/5 text-ternary/50 cursor-not-allowed"
              : "hover:bg-ternary/5 cursor-pointer"
          }`}
        >
          <FiArrowRight />
        </button>
      </div>

      {/* Popup menu */}
      <AnimatePresence>
        {popupData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full z-50 bg-secondary/10 backdrop-blur-xs"
            onClick={() => setPopupData(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-0 z-10 m-3.5 sm:w-fit h-auto bg-secondary/85 backdrop-blur-lg rounded-[20px] p-6 py-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-10 lg:gap-8"
            >
              {/* Close button */}
              <button
                onClick={() => setPopupData(null)}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                <IoClose className="w-6 md:w-10 h-auto" />
              </button>

              {/* Left sec - Image */}
              <div className="flex lg:flex-1/2">
                <div className="relative w-full lg:h-4/5 rounded-t-[20px] overflow-hidden group shadow-lg pb-16">
                  <img
                    src={popupData.image}
                    alt={popupData.title}
                    className="w-full h-full object-fill object-top"
                    // className="w-full h-auto object-cover object-top"
                  />
                  <div className="absolute flex items-center justify-center bottom-0 left-0 w-full p-2 md:p-4 bg-white/20 backdrop-blur-md rounded-b-[20px] z-0">
                    <button className="text-secondary flex items-center justify-center gap-1 w-fit px-6 py-2 bg-primary hover:bg-primary/80 rounded-full cursor-pointer">
                      <span className="text-sm md:text-base font-medium">
                        Explore
                      </span>
                      <GoArrowUpRight
                        style={{ strokeWidth: 1 }}
                        className="text-sm md:text-base"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 lg:flex-1/2 text-white flex flex-col justify-between text-left overflow-y-scroll mx-4 lg:mx-0 lg:pr-6">
                <div>
                  <h2 className="text-2xl md:text-[32px] leading-[41px] font-semibold mb-4">
                    {popupData.title}
                  </h2>
                  <p className="text-base md:text-lg font-light leading-6 md:leading-7 lg:leading-8 mb-4 text-justify">
                    {popupData.description2}
                  </p>

                  {popupData.challenges && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        Key Challenges We Solved
                      </h3>
                      <ul className="text-base md:text-lg font-light space-y-1 list-disc ml-5">
                        {popupData.challenges.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {popupData.solutions && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        Our Strategic Solutions & Achievements
                      </h3>
                      <ul className="text-base md:text-lg font-light leading-8 space-y-1 list-disc ml-5">
                        {popupData.solutions.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="mt-6 text-secondary">
                  <button className="w-fit my-4 px-6 py-4 rounded-full font-medium bg-primary hover:bg-primary/80 flex items-center justify-center gap-2 transition cursor-pointer">
                    <span className="leading-none">View Project</span>
                    <LuCircleChevronRight className="text-base leading-none" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebRecentWork;
