import { motion } from "framer-motion";
import heroVM from "../../assets/video/heroT.mp4";

const Hero: React.FC = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-1">
        <motion.div
          className="flex-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* heading in desktop */}
          <motion.h1
            className="hidden lg:block text-[28px] md:text-[32px] lg:text-[52px] lg:leading-[80px] font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary">Technology</span> That Powers
            Possibility
          </motion.h1>

          <motion.p
            className="mt-4 text-base lg:text-xl leading-7 lg:leading-8 font-light text-justify"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We craft growth-driven marketing strategies that thoughtfully
            connect ambitious brands with the audiences that matter most
            seamlessly blending strategic insight, creative storytelling, and
            performance-focused execution across every digital touch-point to
            drive real, measurable business impact.
          </motion.p>

          <button
            className="w-fit lg:mt-10 px-6 py-3 bg-primary hover:bg-primary/80 text-base lg:text-xl rounded-full cursor-pointer font-medium flex items-center justify-center"
            onClick={() => {
              const section = document.getElementById("services");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Explore Our Services</span>
          </button>
        </motion.div>

        {/* Right sec */}
        <motion.div
          className="flex-col lg:flex space-y-4 lg:space-y-0 lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* heading in mobile */}
          <motion.h1
            className="block lg:hidden text-[28px] md:text-[32px] font-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary">Marketing</span> That Moves Brands
            Forward
          </motion.h1>

          <motion.div
            className="rounded-[20px] lg:w-auto overflow-hidden lg:translate-x-[9%]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <video
              src={heroVM}
              className="w-full h-auto lg:h-[480px] object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
