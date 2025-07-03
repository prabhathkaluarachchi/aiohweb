const Service: React.FC = () => {
  return (
    <div className="w-5/6 mx-auto py-4">
      {/* sec heading */}
      <div className="flex flex-col items-center">
        <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold text-center">
          Expertise That Powers Growth
        </h1>
        <p className="lg:w-2/3 mt-4 text-sm lg:text-lg leading-6 md:leading-7 lg:leading-8 font-light text-center">
          We deliver data-driven marketing services tailored to your brand —
          combining strategy, creativity, and technology to accelerate your
          digital growth.
        </p>
      </div>

      {/* servise card sec */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Service Card */}
        <div className="relative w-[300px] h-[280px] p-4 pt-6 border border-slate-500 rounded-lg">
          <span className="absolute -top-3 left-4 bg-white px-2 text-sm">
            Heading
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
