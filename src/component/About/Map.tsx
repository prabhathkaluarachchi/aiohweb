import React from "react";
import MapImage from "../../assets/about/map.png"; // Adjust path based on your folder

const Map: React.FC = () => {
  return (
    <div className="w-full py-0 px-0">
      {/* Text section */}
      <div className="text-center mb-8">
        <h2 className="text-[28px] md:text-[32px] lg:text-[52px] font-bold text-black ">
          Global Impact, Local Expertise
        </h2>
        <p className="text-[18px] md:text-[18px] font-light text-black mt-2 max-w-3xl mx-auto">
          Over the 10 years, we’ve proudly delivered successful projects for clients across multiple countries
        </p>
      </div>

      {/* Map Image section */}
      <div className="flex justify-center">
        <img
          src={MapImage}
          alt="Global map with project connections"
          className="w-full max-w-6xl h-auto"
        />
      </div>
    </div>
  );
};

export default Map;
