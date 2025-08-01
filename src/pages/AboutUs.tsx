import { useEffect } from "react";

import Header from "../component/common/Header";
import AboutHero from "../component/About/AboutHero";
import WhoAre from "../component/About/WhoAre";
import Counter from "../component/About/Counter";
import Map from "../component/About/Map";
import WhatSets from "../component/About/WhatSets";
import VoicesOfTrust from "../component/About/VoicesOfTrust";
import Message from "../component/About/Message";
import Locations from "../component/About/Locations";

function WebService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-['Roboto'] min-h-screen p-3.5 overflow-x-hidden">
      {/* Header */}
      <div className="mx-auto">
        <Header currentPath="/Aboutus" />
      </div>

      <section className="rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-0 lg:mt-14">
          <AboutHero />
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-transparent rounded-[20px] lg:mb-30 mb-20">
        <div className="mx-auto">
          <WhoAre />
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <Counter />
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-transparent lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <Map />
        </div>
      </section>

      {/* Section 5 */}
      <section className="rounded-[20px] lg:mb-30 mb-20">
        <div className="mx-auto">
          <WhatSets />
        </div>
      </section>

      {/* Section 6 */}
      <section className="rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <Message />
        </div>
      </section>

      {/* Section 7 */}
      <section className="rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <Locations />
        </div>
      </section>

      {/* Section 8 */}
      <section className="rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <VoicesOfTrust />
        </div>
      </section>
    </div>
  );
}

export default WebService;
