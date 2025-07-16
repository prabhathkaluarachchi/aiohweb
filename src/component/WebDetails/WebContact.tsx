import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import FacebookIcon from "../../assets/contact/facebook.svg";
import InstagramIcon from "../../assets/contact/instagram.svg";
import GoogleIcon from "../../assets/contact/google.svg";
import LinkIcon from "../../assets/contact/linkedin.svg";
import XIcon from "../../assets/contact/x.svg";
import AIOHImage from "../../assets/contact/aiohlogo.png";

import MotionSection from "../common/MotionSection";

const WebContact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const serviceOptions = ["WordPress", "E-commerce", "Custom", "Showcase"];
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceSelect = (service: string) => {
    setSelectedServices((prev) => {
      const newSelected = prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service];

      // Clear error for services if now selectedServices is not empty
      setErrors((prevErrors) => ({
        ...prevErrors,
        services: newSelected.length === 0,
      }));

      return newSelected;
    });
  };

  const [errors, setErrors] = useState({
    from_name: false,
    from_phone: false,
    from_email: false,
    message: false,
    services: false,
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
      services: selectedServices.length === 0,
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            html: "Thanks for contacting us.<br/>We'll get back to you soon.",
            imageUrl: AIOHImage,
            imageWidth: 200,
            imageAlt: "Success",
            showConfirmButton: true,
            confirmButtonText: "OK",
            customClass: {
              popup: "rounded-xl p-6",
              title: "text-[22px] font-semibold",
              image: "object-contain",
              confirmButton:
                "w-full mt-4 bg-[#02ec97] text-[#191818] text-[18px] font-medium rounded-full py-[12px] px-6 hover:bg-[#02ec97]/80 hover:text-[#191818]/80 transition cursor-pointer",
            },
            buttonsStyling: false,
          });

          form.current?.reset();
          setSelectedServices([]);
          setErrors({
            from_name: false,
            from_phone: false,
            from_email: false,
            message: false,
            services: false,
          });
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: "Something went wrong.<br/>Please try again.",
            customClass: {
              popup: "!rounded-[20px] p-6",
              title: "text-[22px] font-semibold",
              image: "object-contain",
              confirmButton:
                "w-full mt-4 bg-red-400 text-white text-lg font-medium rounded-full py-3 px-10 cursor-pointer",
            },
            buttonsStyling: false,
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
        <MotionSection delay={0.5} direction="fadeUp">
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
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
                  if (value.length <= 10) {
                    e.target.value = value;
                    handleInputChange(e);
                  }
                }}
                inputProps={{ maxLength: 10 }}
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

            <div className="flex flex-col gap-2">
              {/* <label className="text-sm text-[#191818] font-light">
                Select web services*
              </label> */}

              <TextField
                name="services"
                label="Selected services from below"
                value={selectedServices.join(", ")}
                fullWidth
                error={errors.services}
                helperText={
                  errors.services ? "Select service is required." : ""
                }
                variant="outlined"
                InputProps={{ readOnly: true }}
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

              <div className="flex flex-wrap gap-2 mt-2">
                {serviceOptions.map((service) => (
                  <span
                    key={service}
                    onClick={() => handleServiceSelect(service)}
                    className={`px-4 py-1 text-[12px] rounded-full border cursor-pointer transition ${
                      selectedServices.includes(service)
                        ? "bg-[#19181840] text-[#191818] border-[#19181830]"
                        : "bg-gray-100 text-gray-600 border-gray-300"
                    }`}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

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

            <input
              type="hidden"
              name="services"
              value={selectedServices.join(", ")}
            />

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
          <h2 className="text-[26px] lg:text-[48px] md:text-[30px] leading-[40px] lg:leading-[62px] font-bold text-[#191818]">
            Partner with us to build <br />
            what’s <span className="text-[#02ec97]">next</span>
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-[#191818] mt-2 font-light mb-[-20px]">
            Have an idea? Let’s bring it to life. Whether it's a bold vision or
            a simple spark, <br />
            we're here to help turn your ideas into reality.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:mt-10 lg:pt-4 ">
          {/* Card 1 - Address */}
          <MotionSection
            delay={0.7}
            direction="right"
            className="rounded-xl p-6 shadow-sm text-white bg-[linear-gradient(180deg,_#01213A_0%,_#035BA0_100%)]"
          >
            <p className="text-[18px] font-normal mb-1">Address :</p>
            <p className="text-[16px] text-white leading-[24px] font-light">
              3rd Floor, All in one Holdings, <br />
              349/2/1 Katugastota Rd, <br />
              Kandy, Sri Lanka.
            </p>
          </MotionSection>

          {/* Card 2 - Phone */}
          <MotionSection
            delay={0.7}
            direction="right"
            className="bg-transparent rounded-xl p-6"
          >
            <p className="text-[18px] font-normal mb-1 text-[#191818]">
              Phone :
            </p>

            {/* Desktop & Tablet view */}
            <p className="hidden sm:block text-[16px] text-[#191818] leading-[32px] font-light">
              +94 81 2121 051 <br />
              +94 77 6722 709
            </p>

            {/* Mobile-only view */}
            <p className="block sm:hidden text-[16px] text-[#191818] leading-[32px] font-light">
              +94 81 2121 051 / +94 77 6722 709
            </p>
          </MotionSection>

          {/* Card 3 - Email */}
          <MotionSection
            delay={0.7}
            direction="right"
            className="bg-transparent rounded-xl p-6 bottom-0"
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

              {/* Linkedin */}
              <a
                href="https://lk.linkedin.com/company/all-in-one-holdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img src={LinkIcon} alt="X" className="w-[18px] h-[18px]" />
              </a>
              {/* X com */}
              <a
                href="https://x.com/allinoneholding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img src={XIcon} alt="X" className="w-[18px] h-[18px]" />
              </a>
            </div>
          </MotionSection>
        </div>
      </MotionSection>
    </>
  );
};

export default WebContact;
