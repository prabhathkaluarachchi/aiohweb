import Hero from "../component/marketing/Hero";
import Service from "../component/marketing/Service";
import Process from "../component/marketing/Process";
import RecentWork from "../component/marketing/RecentWork";
import Contact from "../component/marketing/ContactSection";

import nav from "../assets/img/Navbar.png";
import footer from "../assets/img/Footer.png";

import { useEffect } from "react";

const Merketing: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="m-3.5 text-text">
        {/* Header */}
        <header className="bg-[#01213A] mb-3.5 h-12 md:h-[67px] rounded-[20px] flex items-center justify-center">
          <img src={nav} className="w-full h-auto object-fill" />
        </header>

        {/* Hero*/}
        <section className="w-full lg:pt-14 rounded-[20px]">
          <Hero />
        </section>

        {/* Services */}
        <section
          className="mt-20 md:mt-30 bg-white rounded-[20px]"
          id="services"
        >
          <Service />
        </section>

        {/* Process */}
        <section className="mt-20 md:mt-30 bg-gradient-to-r from-[#01213A] from-5% to-[#035BA0] to-100% rounded-[20px]">
          <Process />
        </section>

        {/* RecentWork */}
        <section className="mt-20 md:mt-30 bg-transparent rounded-[20px]">
          <RecentWork />
        </section>

        {/* Contact */}
        <section className="mt-20 md:mt-30 bg-white rounded-[20px]">
          <Contact />
        </section>
      </div>
      <footer className="mt-20 lg:mt-30">
        <img src={footer} />
      </footer>
    </>
  );
};

export default Merketing;
