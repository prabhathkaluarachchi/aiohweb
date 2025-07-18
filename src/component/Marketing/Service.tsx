import { useNavigate } from "react-router-dom";

// bg images
import sc1 from "../../assets/img/services/mkt-sc1.png";
import sc2 from "../../assets/img/services/mkt-sc2.png";
import sc3 from "../../assets/img/services/mkt-sc3.png";
import sc4 from "../../assets/img/services/mkt-sc4.png";
import sc5 from "../../assets/img/services/mkt-sc5.png";
import sc6 from "../../assets/img/services/mkt-sc6.png";

import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Strategy",
    description:
      "We manage your social media to grow your audience, boost engagement, and strengthen your brand presence online.",
    img: sc1,
    path: "/marketing/brand-strategy",
  },
  {
    title: "Social Media Management",
    description:
      "We manage your social media to grow your audience, boost engagement, and strengthen your brand presence online.",
    img: sc2,
    path: "/marketing/social-media-management",
  },
  {
    title: "SEO Audit and Setup",
    description:
      "We manage your social media to grow your audience, boost engagement, and strengthen your brand presence online.",
    img: sc3,
    path: "/marketing/seo-audit-and-setup",
  },
  {
    title: "Digital Marketing Consulting",
    description:
      "We manage your social media to grow your audience, boost engagement, and strengthen your brand presence online.",
    img: sc4,
    path: "/marketing/digital-marketing-consulting",
  },
  {
    title: "Social Media Advertising",
    description:
      "We manage your social media to grow your audience, boost engagement, and strengthen your brand presence online.",
    img: sc5,
    path: "/marketing/social-media-advertising",
  },
  {
    title: "Brand Strategy Sample",
    description:
      "We manage your social media to grow your audience, boost engagement, and strengthen your brand presence online.",
    img: sc6,
    path: "/marketing/brand-strategy-sample",
  },
];

const Service: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent, path: string) => {
    // Check if we're on mobile/tablet (you can adjust the breakpoint)
    const isMobileOrTablet = window.innerWidth <= 1024;

    // Check if the click was on a button or link
    const isButtonClick =
      (e.target as HTMLElement).tagName === "BUTTON" ||
      (e.target as HTMLElement).closest("button");

    // Only navigate if on mobile/tablet and not clicking a button
    if (isMobileOrTablet && !isButtonClick) {
      navigate(path);
    }
  };

  return (
    <div className="w-11/12 md:w-5/6 mx-auto py-4">
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
          className="md:w-full w-3/4 text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold text-center"
        >
          Expertise That Powers Growth
        </motion.h1>
        <p className="md:w-5/6 lg:w-3/4 mt-4 text-sm lg:text-lg leading-6 md:leading-7 lg:leading-8 font-light text-center">
          We deliver data-driven marketing services tailored to your brand
          combining strategy, creativity, and technology to accelerate your
          digital growth.
        </p>
      </motion.div>

      {/* servise card sec */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-5/6 mx-auto py-10"
      >
        {services.map((service, index) => (
          <div
            className="relative rounded-[20px] overflow-hidden group shadow-lg cursor-pointer lg:cursor-default"
            onClick={(e) => handleCardClick(e, service.path)}
          >
            {/* Bg image */}
            <img
              src={service.img}
              alt={service.title}
              className="object-cover w-full h-56 md:h-auto duration-500 group-hover:scale-105 transition"
            />

            {/* Floating Label with Outline */}
            <div className="absolute top-4 left-4 right-4 items-center z-50 mx-auto">
              <span className="absolute -top-3.5 md:-top-2.5 lg:-top-3  left-4 mr-4 rounded-xl bg-white/0 backdrop-blur-lg px-1 text-sm md:text-md lg:text-lg font-medium text-white">
                {service.title}
              </span>
            </div>
            <div className="absolute inset-0 rounded-xl border-3 border-white z-40 pointer-events-none m-3 md:m-4 lg:m-4.5" />

            {/* explore button -desktop/tab */}
            <div className="group-hover:hidden hidden lg:block">
              <button className="absolute bottom-5 right-5 md:bottom-7 md:right-7 bg-primary text-secondary w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full z-10 group-hover:scale-110 transition cursor-pointer">
                <GoArrowUpRight className="text-base md:text-lg" />
              </button>
            </div>

            {/* hover effect */}
            <div className="hidden md:block lg:hidden group-hover:block">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                className="absolute sm:min-h-[60%] md:min-h-[50%] py-4 md:py-2 bottom-0 left-0 w-full bg-[#01213A]/20 backdrop-blur-md flex-col items-center justify-between z-30 px-8"
              >
                <p className="text-left md:text-justify leading-[22px] text-xs lg:text-sm text-white">
                  {service.description}
                </p>

                {/* explore button - in hover sec */}
                <button
                  key={index}
                  onClick={() => navigate(service.path)}
                  className="hidden md:block w-full md:w-fit md:my-2 lg:my-4 px-4 py-2 bg-primary hover:bg-primary/80 text-xs rounded-full cursor-pointer font-medium"
                >
                  Explore Service
                </button>
              </motion.div>
            </div>
            <div className="block md:hidden">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                className="absolute sm:min-h-[60%] md:min-h-[50%] pt-2 pb-6 md:py-2 bottom-0 left-0 w-full bg-[#01213A]/20 backdrop-blur-md flex-col items-end md:items-center flex justify-end md:justify-between z-30 px-8"
              >
                {/* explore button - mobile */}
                <p className="text-left md:text-justify leading-[22px] text-xs lg:text-sm text-white">
                  {service.description}
                </p>
                <button
                  onClick={() => navigate(service.path)}
                  className="md:hidden bg-primary text-secondary w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full group-hover:scale-110 transition cursor-pointer"
                >
                  <GoArrowUpRight className="text-base md:text-lg" />
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
