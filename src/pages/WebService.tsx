import Header from "../component/common/Header";
import ContactForm from "../component/contact/ContactForm";
import WebHero from "../component/WebDetails/WebHero";
import HeroBackground from "../assets/serv_details/web/HeroBackground.jpg";
import Breadcrumb from "../component/common/Breadcrumb";
import WebFramework from "../component/WebDetails/WebFramework";

function WebService() {
  return (
    <div className="w-full font-['Roboto'] min-h-screen p-3.5 overflow-x-hidden">
      <Header />

      {/* Section 1 */}
      <section
        className="relative rounded-[20px]"
        style={{
          backgroundImage: `url(${HeroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Breadcrumb */}
        <div className="w-11/12 mx-auto relative z-10 pt-8">
          <Breadcrumb levels={["Home", "Technology", "Web Development"]} />
        </div>

        {/* WebHero*/}
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-0">
          <WebHero />
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#01213A] mt-30 rounded-[20px]">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row">
        <WebFramework />
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-green-500 mt-30 rounded-[20px]">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row p-10">
          <h1 className="text-2xl">Portfoilio Cards Section</h1>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-transparent">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-10 mt-30 mb-30">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default WebService;
