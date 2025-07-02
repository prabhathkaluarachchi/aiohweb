import Hero from "../component/Marketing/Hero";
import Service from "../component/Marketing/Service";

const Merketing: React.FC = () => {
  return (
    <div className="m-3.5">
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

      {/* Services */}
      <section className="mt-20 md:mt-30 bg-white rounded-[20px]"></section>

      {/* Services */}
      <section className="mt-20 md:mt-30 bg-white rounded-[20px]"></section>

      {/* Services */}
      <section className="mt-20 md:mt-30 bg-white rounded-[20px]"></section>
    </div>
  );
};

export default Merketing;

export default Merketing;
