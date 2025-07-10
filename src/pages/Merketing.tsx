import Contact from "../component/Marketing/ContactSection";
import Hero from "../component/Marketing/Hero";
import Process from "../component/Marketing/Process";
import RecentWork from "../component/Marketing/RecentWork";
import Service from "../component/Marketing/Service";
import nav from "../assets/marketing/Navbar.png";
import footer from "../assets/marketing/Footer.png";

const Merketing: React.FC = () => {
  return (
    <>
      <div className="m-3.5 text-text">
        {/* Header */}
        <header className="bg-[#01213A] mb-3.5 h-[67px] rounded-[20px]">
          <img src={nav} />
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
