import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import FacebookIcon from "../../assets/contact/facebook.png";
import InstagramIcon from "../../assets/contact/instagram.png";
import GoogleIcon from "../../assets/contact/google.png";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const name = form.current.from_name.value.trim();
    const phone = form.current.from_phone.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !phone || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Please fill all fields",
        confirmButtonColor: "#02ec97",
      });
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "We’ll get back to you soon.",
            confirmButtonColor: "#02ec97",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#02ec97",
          });
        }
      );

    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Mobile & Tablet Heading - show only below lg */}
      <div className="block lg:hidden mb-2 w-full text-center">
        <h2 className="text-[26px] md:text-[30px] leading-[26px] font-bold text-[#191818]">
          Reach Out, We're Listening
        </h2>
        <p className="text-[16px] leading-[26px] text-[#191818] mt-4 font-light">
          We’re ready to assist. Share the details below and we’ll get back to
          you soon.
        </p>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 w-full lg:w-1/2 pr-0 lg:pr-4"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="border border-black/45 rounded-[20px] px-4 py-4 text-[16px] font-light placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
        />
        <input
          type="tel"
          name="from_phone"
          placeholder="Phone Number"
          className="border border-black/45 rounded-[20px] px-4 py-4 text-[16px] font-light placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email Address"
          className="border border-black/45 rounded-[20px] px-4 py-4 text-[16px] font-light placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          rows={6}
          className="border border-black/45 rounded-[20px] px-4 py-4 text-[16px] font-light placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
        />
        <button
          type="submit"
          className="w-full lg:w-fit mt-4 bg-[#02ec97] text-[#191818] text-[18px] font-medium rounded-full py-[12px] px-6 hover:bg-[#02ec97]/80 hover:text-[#191818]/80 transition"
        >
          Send Message
        </button>
      </form>

      {/* Right Side: Content & Cards */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {/* Desktop Heading & Description - show only lg and above */}
        <div className="hidden lg:block">
          <h2 className="text-[26px] lg:text-[48px] md:text-[30px] leading-[40px] lg:leading-[40px] font-bold text-[#191818]">
            Reach Out, We're Listening
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-[#191818] mt-6 font-light">
            We’re ready to assist. Share the details below and we’ll get back to
            you soon.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* Card 1 - Address */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-[18px] font-normal mb-1">Address :</p>
            <p className="text-[16px] text-[#191818] leading-[24px] font-light">
              3rd Floor, All in one Holdings, <br />
              349/2/1 Katugastota Rd, <br />
              Kandy, Sri Lanka.
            </p>
          </div>

          {/* Card 2 - Phone - Gradient */}
          <div
            className="rounded-xl p-6 shadow-sm text-white"
            style={{
              background: "linear-gradient(180deg, #01213A 0%, #035BA0 100%)",
            }}
          >
            <p className="text-[18px] font-normal mb-1">Phone :</p>
            <p className="text-[16px] text-white leading-[24px] font-light">
              +94 81 2121 051 <br />
              +94 81 2121 051
            </p>
          </div>

          {/* Card 3 - Email */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-[18px] font-normal mb-1">E-mail :</p>
            <p className="text-[16px] text-[#191818] leading-[24px] font-light">
              info@allinoneholdings.com
            </p>
          </div>

          {/* Card 4 - Social Icons */}
          <div className="rounded-xl p-6 flex flex-col items-center lg:items-start justify-center gap-4">
            <p className="text-[18px] font-normal mb-1 text-center lg:text-left">
              Follow Us:
            </p>

            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[18px] h-[18px]"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-[18px] h-[18px]"
                />
              </a>

              {/* Google */}
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img
                  src={GoogleIcon}
                  alt="Google"
                  className="w-[18px] h-[18px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
