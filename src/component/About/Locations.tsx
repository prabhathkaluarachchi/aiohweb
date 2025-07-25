import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image1 from "../../assets/about/locimage1.png";
import Image2 from "../../assets/about/locimage2.png";
import Image3 from "../../assets/about/locimage3.png";

// Types
type SubLocation = {
  label: string;
  address: string;
};

type LocationCard = {
  title: string;
  description: string;
  address?: string;
  subLocations?: SubLocation[];
  images: string[];
  layout: "full" | "split";
};

// Location content array
const locationCards: LocationCard[] = [
  {
    title: "Australia",
    description:
      "Our state-of-the-art workspace in Australia offers modern amenities and flexible environments designed to foster creativity and business success.",
    address: "123 Innovation Drive, Sydney, NSW 2000",
    images: [Image1, Image2, Image3],
    layout: "full",
  },
  {
    title: "Sri Lanka",
    description:
      "Our Sri Lankan hub is a blend of culture and tech innovation, fueling regional growth and talent development.",
    subLocations: [
      {
        label: "Kandy Headquarters",
        address: "45 Hill Street, Kandy 20000",
      },
      {
        label: "Colombo",
        address: "22 Sea Avenue, Colombo 00300",
      },
    ],
    images: [Image2, Image3, Image1],
    layout: "split",
  },
  {
    title: "USA",
    description:
      "Our U.S. office is strategically located to serve clients nationwide with tailored solutions and tech leadership.",
    address: "456 Enterprise Lane, San Francisco, CA 94107",
    images: [Image3, Image1, Image2],
    layout: "full",
  },
];

// ✅ Fixed ImageSlider
const ImageSlider = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward (future support)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full min-h-full rounded-xl overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Location"
          className="w-full h-full object-cover absolute inset-0 z-0"
          initial={{
            opacity: 0,
            x: direction === 1 ? 50 : -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: direction === 1 ? -50 : 50,
          }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#078BD680] to-transparent z-10" />

    </div>
  );
};

// ✅ Main component
const Locations: React.FC = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-[28px] md:text-[48px] lg:text-[52px] font-bold text-black">
          Global Impact, Local Expertise
        </h2>
        <p className="text-[18px] font-light text-black mt-2">
          Over the 10 years, we’ve proudly delivered successful projects for
          clients across multiple countries
        </p>
      </motion.div>

      {/* Cards layout */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8">
        {/* Australia card */}
        <div className="w-full lg:w-[50%] h-[560px] relative shadow-md rounded-[20px] overflow-hidden">
          <ImageSlider images={locationCards[0].images} />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-20 text-center">
            <h3 className="text-2xl font-bold">{locationCards[0].title}</h3>
            <p className="mt-2 md:text-[16px] text-[14px] leading-relaxed">
              {locationCards[0].description}
            </p>
            <p className="mt-4 text-[12px] md:text-right font-light italic">
              {locationCards[0].address}
            </p>
          </div>
        </div>

        {/* Right column: Sri Lanka + USA */}
        <div className="w-full lg:w-[48%] flex flex-col gap-8">
          {/* Sri Lanka card */}
          <div className="h-[264px] relative shadow-md rounded-[20px] overflow-hidden">
            <ImageSlider images={locationCards[1].images} />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white z-20 text-center">
              <h3 className="text-2xl font-bold">{locationCards[1].title}</h3>
              {/* <p className="mt-1 md:text-[16px] text-[14px] leading-relaxed">{locationCards[1].description}</p> */}
              <div className="flex justify-between mt-2 text-[12px] px-2">
                <div className="text-left">
                  <p className="font-semibold">
                    {locationCards[1].subLocations?.[0]?.label ??
                      "Kandy - Headquarters"}
                  </p>
                  <p className="italic">
                    {locationCards[1].subLocations?.[0]?.address ??
                      "Address not available"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    {locationCards[1].subLocations?.[1]?.label ?? "Colombo"}
                  </p>
                  <p className="italic">
                    {locationCards[1].subLocations?.[1]?.address ??
                      "Address not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* USA card */}
          <div className="h-[264px] relative shadow-md rounded-[20px] overflow-hidden">
            <ImageSlider images={locationCards[2].images} />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white z-20 text-center">
              <h3 className="text-2xl font-bold">{locationCards[2].title}</h3>
              {/* <p className="mt-1 md:text-[16px] text-[14px] leading-relaxed">{locationCards[2].description}</p> */}
              <p className="mt-2 text-[12px] italic ">
                {locationCards[2].address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
