import React from "react";

const Process: React.FC = () => {
  return (
    <div className="mx-auto py-4 text-white w-5/6 lg:w-full">
      {/* sec heading */}
      <div className="flex flex-col items-center">
        <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold text-center w-2/3 lg:w-full">
          How We Deliver Our Work
        </h1>
        <p className="lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-6 lg:leading-7 font-light text-center">
          We follow a focused, collaborative process from strategic discovery to
          agile execution ensuring clarity, quality, and impact at every stage.
        </p>
      </div>
    </div>
  );
};

export default Process;
