import { useEffect } from "react";

import Header from "../component/common/Header";
import AboutHero from "../component/About/AboutHero";

function WebService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-['Roboto'] min-h-screen p-3.5 overflow-x-hidden">
      <Header />

      <section className="rounded-[20px] lg:mb-30 mb-20 bg-amber-200">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-0 lg:pt-14 bg-blue-100">
          <AboutHero />
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-blue-500 rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <h1 className="py-10">Who are Section</h1>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-green-500 rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <h1 className="py-10">Counter Section</h1>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-fuchsia-500 mt-30 rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <h1 className="py-10">Global Map Section</h1>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-orange-400 mt-30 rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <h1 className="py-10">Section 5</h1>
        </div>
      </section>

      {/* Section 6 */}
      <section className="bg-amber-800 mt-30 rounded-[20px] lg:mb-30 mb-20">
        <div className="w-11/12 mx-auto">
          <h1 className="py-10">Section 6</h1>
        </div>
      </section>
    </div>
  );
}

export default WebService;
