import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import FacebookIcon from "../../assets/contact/facebook.png";
import InstagramIcon from "../../assets/contact/instagram.png";
import GoogleIcon from "../../assets/contact/google.png";

const Contact: React.FC = () => {
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
    <div className="flex flex-col lg:flex-row items-center gap-16 mx-auto gap-10 w-11/12 py-10">
      {/* Left sec */}
      <div className="flex-1 space-y-6">
        <div className="relative">
          {/* Input Field */}
          <input
            type="text"
            id="name"
            placeholder=" "
            className="peer w-full rounded-[20px] border border-slate-500 bg-transparent px-4 pt-5 pb-2 text-white placeholder-transparent font-light"
          />

          {/* Floating Label */}
          <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text- peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
            Name
          </label>
        </div>
      </div>

      {/* Right sec */}
      <div className="flex-1 space-y-6">
        <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold">
          Partner with us to build what’s{" "}
          <span className="text-primary">next</span>
        </h1>
        <p className="mt-4 text-sm lg:text-lg leading-6 md:leading-7 lg:leading-8 font-light text-justify">
          Have an idea? Let’s bring it to life. Whether it's a bold vision or a
          simple spark, we're here to help turn your ideas into reality.
        </p>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* Address Card */}
          <div className="bg-gradient-to-b from-[#01213A] from-0% to-[#035BA0] to-100% rounded-xl p-6">
            <p className="text-lg font-normal mb-1 text-white ">Address :</p>
            <p className="text-base text-white leading-6 font-light">
              3rd Floor, All in one Holdings, <br />
              349/2/1 Katugastota Rd, <br />
              Kandy, Sri Lanka.
            </p>
          </div>

          {/* Phone - Card */}
          <div className="rounded-xl p-6 bg-white">
            <p className="text-lg font-normal mb-1">Phone :</p>
            <p className="text-base leading-6 font-light">
              +94 81 2121 051 <br />
              +94 81 2121 051
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl p-6">
            <p className="text-lg font-normal mb-1">E-mail :</p>
            <p className="text-base text-[#191818] leading-6 font-light">
              info@allinoneholdings.com
            </p>
          </div>

          {/* Card 4 - Social Icons */}
          <div className="rounded-xl p-6 flex flex-col items-center lg:items-start justify-center mb-1">
            <p className="text-lg font-normal mb-1 text-center lg:text-left">
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
    </div>
  );
};

export default Contact;
