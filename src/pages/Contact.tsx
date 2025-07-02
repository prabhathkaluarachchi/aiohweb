import ChatWithUsButton from "../component/common/ChatWithUsButton";
import Header from "../component/common/Header";
import MotionSection from "../component/common/MotionSection";
import ContactForm from "../component/contact/ContactForm";
import ContactHero from "../component/contact/ContactHero";

const Contact = () => {
  return (
    <div className="w-full font-['Roboto'] min-h-screen">
      <Header />

      {/* Section 1 */}
      <MotionSection
        className="w-11/12 mx-auto flex flex-col lg:flex-row gap-0 lg:pt-14"
        delay={0.3}
      >
        <ContactHero />
      </MotionSection>

      {/* Section 2 */}
      <MotionSection
        className="w-11/12 mx-auto flex flex-col lg:flex-row gap-10 lg:mt-30 mt-20 pb-30"
        delay={0.3}
      >
        <ContactForm />
      </MotionSection>

      <ChatWithUsButton />
    </div>
  );
};

export default Contact;
