import ChatWithUsButton from "../component/common/ChatWithUsButton";
import Header from "../component/common/Header";
import ContactForm from "../component/contact/ContactForm";
import ContactHero from "../component/contact/ContactHero";

const Contact = () => {
  return (
    <div className="w-full font-['Roboto'] min-h-screen p-3.5">
                  {/* Header */}
      <div className="mx-auto mb-3.5">
        <Header currentPath="/contact" />
      </div>


      {/* Section 1 */}
      <section className="bg-transparent">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-0 lg:pt-14">
          <ContactHero />
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-transparent">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-10 lg:mt-30 mt-20 pb-30">
          <ContactForm />
        </div>
      </section>

      <ChatWithUsButton />
    </div>
  );
};

export default Contact;
