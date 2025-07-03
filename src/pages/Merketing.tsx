import Contact from "../component/Marketing/Contact";
import Hero from "../component/Marketing/Hero";
import Process from "../component/Marketing/Process";
import RecentWork from "../component/Marketing/RecentWork";
import Service from "../component/Marketing/Service";

const Merketing: React.FC = () => {
  return (
    <div className="p-3.5 text-text">
      {/* Header */}
      <header className="bg-[#01213A] mb-3.5 h-[67px] rounded-[20px]"></header>

      {/* Hero*/}
      <section className="w-11/12 mx-auto lg:pt-14">
        <Hero />
      </section>

      {/* Services */}
      <section className="mt-20 md:mt-30 bg-white rounded-[20px]">
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
  );
};

export default Merketing;
