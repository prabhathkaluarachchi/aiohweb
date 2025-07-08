import React from "react";

const steps = [
  "Brand Platform",
  "Business Objectives",
  "The Foundation",
  "Digital Strategy",
  "Execution",
  "Performance",
  "Evolution",
];

const Process: React.FC = () => {
  return (
    <div className="mx-auto py-4 text-white w-5/6 md:w-full lg:w-5/6 lg:w-full">
      {/* sec heading */}
      <div className="flex flex-col items-center">
        <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold text-center w-2/3 lg:w-full">
          How We Deliver Our Work
        </h1>
        <p className="md:w-3/4 lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-6 lg:leading-7 font-light text-center">
          We follow a focused, collaborative process from strategic discovery to
          agile execution ensuring clarity, quality, and impact at every stage.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 w-4/5 py-10 mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="p-2 text-center">
            <div className="flex flex-row md:flex-col items-center p-2 md:space-y-2 gap-4 md:gap-6">
              <div className="relative bg-primary w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl">
                <p className="absolute -top-2 -right-2 bg-[#0A7CBD] w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  {index + 1}
                </p>
              </div>
              <div className="block md:hidden text-white text-lg text-left">
                {step}
              </div>
            </div>

            <div className="hidden md:block text-white text-base lg:text-lg">
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
