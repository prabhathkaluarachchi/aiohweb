import heroVM from "../../assets/marketing/heroM.mp4";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-1 text-theme">
      <div className="flex-1/2 space-y-6">
        {/* heading in desktop */}
        <h1 className="hidden lg:block text-[28px] md:text-[32px] lg:text-[52px] lg:leading-[80px] font-bold">
          <span className="text-primary">Marketing</span> That Moves Brands
          Forward
        </h1>

        <p className="mt-4 text-base lg:text-xl leading-7 lg:leading-8 font-light text-justify">
          We craft growth-driven marketing strategies that thoughtfully connect
          ambitious brands with the audiences that matter most seamlessly
          blending strategic insight, creative storytelling, and
          performance-focused execution across every digital touch-point to
          drive real, measurable business impact.
        </p>

        <button className="lg:mt-6 px-6 py-3 bg-primary text-base lg:text-xl rounded-full hover:bg-opacity-90 transition">
          Explore Our Services
        </button>
      </div>
      <div className="flex-col lg:flex space-y-4 lg:w-1/2 w-full">
        {/* heading in mobile */}
        <h1 className="block lg:hidden text-[28px] md:text-[32px] font-bold text-center">
          <span className="text-primary">Marketing</span> That Moves Brands
          Forward
        </h1>

        <div className="rounded-[20px] lg-w-auto overflow-hidden lg:translate-x-[9%]">
          <video
            src={heroVM}
            className="w-full h-auto lg:h-[480px] object-cover rounded-[20px]"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
