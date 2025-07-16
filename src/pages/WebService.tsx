import { useEffect } from "react";
import { motion } from "framer-motion";

import Header from "../component/common/Header";
import WebHero from "../component/WebDetails/WebHero";
import Breadcrumb from "../component/common/Breadcrumb";
import WebFramework from "../component/WebDetails/WebFramework";
import WebContact from "../component/WebDetails/WebContact";

import WebRecentWork from "../component/WebDetails/WebRecentWork";

function WebService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-['Roboto'] min-h-screen p-3.5 overflow-x-hidden">
      <Header />

      <section className="relative rounded-[20px] bg-gradient-to-r from-white via-[#078BD612] to-white sm:bg-top bg-cover bg-center">
        {/* Breadcrumb */}
        <motion.div
          className="w-11/12 mx-auto relative z-10 pt-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Breadcrumb
            levels={[
              { label: "Home", path: "/" },
              { label: "Services", path: "/Marketing" },
              { label: "Web Development" },
            ]}
          />
        </motion.div>

        {/* WebHero */}
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-0">
          <WebHero />
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#01213A] mt-30 rounded-[20px]">
        <div className="w-11/12 mx-auto">
          <WebFramework />
        </div>
      </section>

      {/* Section 3 */}
      <section id="WebRecentWork" className=" mt-28 rounded-[20px]">
        <div className="w-11/12 mx-auto">
          <WebRecentWork />
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-transparent">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-10 mt-30 mb-30">
          <WebContact />
        </div>
      </section>
    </div>
  );
}

export default WebService;
