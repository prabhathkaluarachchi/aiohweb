import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import FacebookIcon from "../../assets/contact/facebook.svg";
import InstagramIcon from "../../assets/contact/instagram.svg";
import GoogleIcon from "../../assets/contact/google.svg";
import RoboImage from "../../assets/contact/robo.png";

import MotionSection from "../common/MotionSection";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState({
    from_name: false,
    from_phone: false,
    from_email: false,
    message: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("from_name")?.toString().trim();
    const phone = formData.get("from_phone")?.toString().trim();
    const email = formData.get("from_email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const newErrors = {
      from_name: !name,
      from_phone: !phone,
      from_email: !email || !isValidEmail(email),
      message: !message,
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    // Proceed with emailjs
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
            title: "Message Sent!",
            text: "We’ll get back to you soon.",
            imageUrl: RoboImage,
            imageWidth: 60,
            imageHeight: 60,
            imageAlt: "Success",
            showConfirmButton: true,
            confirmButtonText: "OK",
            customClass: {
              popup: "rounded-xl p-6",
              title: "text-[22px] font-semibold",
              confirmButton:
                "w-full mt-4 bg-[#02ec97] text-[#191818] text-[18px] font-medium rounded-full py-[12px] px-6 hover:bg-[#02ec97]/80 hover:text-[#191818]/80 transition cursor-pointer",
            },
            buttonsStyling: false,
          });

          form.current?.reset();
          setErrors({
            from_name: false,
            from_phone: false,
            from_email: false,
            message: false,
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
  };

  return (
    <>
      {/* Mobile & Tablet Heading - show only below lg */}
      <MotionSection
        delay={0.5}
        direction="fade"
        className="block lg:hidden mb-2 w-full text-center"
      >
        <h2 className="text-[24px] md:text-[30px] leading-[26px] font-bold text-[#191818]">
          Reach Out, We're Listening
        </h2>
        <p className="text-[16px] leading-[26px] text-[#191818] mt-4 font-light">
          We’re ready to assist. Share the details below and we’ll get back to
          you soon.
        </p>
      </MotionSection>
      {/* Contact Form */}
      <div className="w-full lg:w-1/2 pr-0 lg:pr-4 mb-4">
        <MotionSection delay={0.5} direction="fadeRight">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <Box sx={{ width: "100%" }}>
              <TextField
                name="from_name"
                label="Your Name"
                variant="outlined"
                fullWidth
                error={errors.from_name}
                helperText={errors.from_name ? "Name is required." : ""}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    fontSize: "16px",
                    fontWeight: 300,
                    px: 2,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0,0,0,0.45)",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#000",
                    },
                  "& .MuiInputLabel-root": {
                    fontSize: "16px",
                    fontWeight: 300,
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000",
                  },
                }}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <TextField
                name="from_phone"
                label="Phone Number"
                variant="outlined"
                fullWidth
                error={errors.from_phone}
                helperText={errors.from_phone ? "Phone is required." : ""}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    fontSize: "16px",
                    fontWeight: 300,
                    px: 2,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0,0,0,0.45)",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#000",
                    },
                  "& .MuiInputLabel-root": {
                    fontSize: "16px",
                    fontWeight: 300,
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000",
                  },
                }}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <TextField
                name="from_email"
                label="Email Address"
                variant="outlined"
                fullWidth
                error={errors.from_email}
                helperText={
                  errors.from_email ? "Please enter a valid email address." : ""
                }
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    fontSize: "16px",
                    fontWeight: 300,
                    px: 2,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0,0,0,0.45)",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#000",
                    },
                  "& .MuiInputLabel-root": {
                    fontSize: "16px",
                    fontWeight: 300,
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000",
                  },
                }}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <TextField
                name="message"
                label="Your Message"
                multiline
                rows={6}
                variant="outlined"
                fullWidth
                error={errors.message}
                helperText={errors.message ? "Message is required." : ""}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    fontSize: "16px",
                    fontWeight: 300,
                    px: 2,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0,0,0,0.45)",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#000",
                    },
                  "& .MuiInputLabel-root": {
                    fontSize: "16px",
                    fontWeight: 300,
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000",
                  },
                }}
              />
            </Box>

            <button
              type="submit"
              className="w-full lg:w-fit mt-4 bg-[#02ec97] text-[#191818] text-[18px] font-medium rounded-full py-[12px] px-6 hover:bg-[#02ec97]/80 hover:text-[#191818]/80 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </MotionSection>
      </div>

      {/* Right Side: Content & Cards */}
      <MotionSection
        delay={0.7}
        direction="up"
        className="w-full lg:w-1/2 flex flex-col"
      >
        {/* Desktop Heading & Description - show only lg and above */}
        <div className="hidden lg:block">
          <h2 className="text-[26px] lg:text-[48px] md:text-[30px] leading-[40px] lg:leading-[40px] font-bold text-[#191818]">
            Reach Out, We're Listening
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-[#191818] mt-6 font-light mb-[-20px]">
            We’re ready to assist. Share the details below and <br /> we’ll get
            back to you soon.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:mt-10 ">
          {/* Card 1 - Address */}
          <MotionSection
            delay={0.7}
            direction="right"
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <p className="text-[18px] font-normal mb-1">Address :</p>
            <p className="text-[16px] text-[#191818] leading-[24px] font-light">
              3rd Floor, All in one Holdings, <br />
              349/2/1 Katugastota Rd, <br />
              Kandy, Sri Lanka.
            </p>
          </MotionSection>

          {/* Card 2 - Phone - Gradient */}
          <MotionSection
            delay={0.7}
            direction="left"
            className="rounded-xl p-6 shadow-sm text-white  bg-[linear-gradient(180deg,_#01213A_0%,_#035BA0_100%)]"
          >
            <p className="text-[18px] font-normal mb-1">Phone :</p>
            <p className="text-[16px] text-white leading-[32px] font-light">
              +94 81 2121 051 <br />
              +94 81 2121 051
            </p>
          </MotionSection>

          {/* Card 3 - Email */}
          <MotionSection
            delay={0.7}
            direction="left"
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <p className="text-[18px] font-normal mb-1">E-mail :</p>
            <p className="text-[16px] text-[#191818] leading-[24px] font-light">
              info@allinoneholdings.com
            </p>
          </MotionSection>

          {/* Card 4 - Social Icons */}
          <MotionSection
            delay={0.7}
            direction="right"
            className="rounded-xl p-6 flex flex-col items-center md:items-start justify-center gap-4"
          >
            <p className="text-[18px] font-normal mb-1 text-center lg:text-left">
              Follow Us:
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/allinoneholdings"
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
                href="https://www.instagram.com/all_in_one_holdings"
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
                href="https://g.co/kgs/Cw4rrUZ"
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
          </MotionSection>
        </div>
      </MotionSection>
    </>
  );
};

export default ContactForm;
