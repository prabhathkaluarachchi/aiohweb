import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { TextField, MenuItem, Box, FormHelperText } from "@mui/material";
import countries from "world-countries";
import { motion } from "framer-motion";

import FacebookIcon from "../../assets/img/facebook.svg";
import InstagramIcon from "../../assets/img/instagram.svg";
import GoogleIcon from "../../assets/img/google.svg";
import LinkIcon from "../../assets/img/linkedin.svg";
import XIcon from "../../assets/img/x.svg";
import AIOHImage from "../../assets/img/logo/aiohlogo.png";

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  // Styles for the text fields
  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      fontSize: "16px",
      fontWeight: 400,
      pl: 2,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#19181899", // 60% opacity border
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#191818",
    },
    "& .MuiInputLabel-root": {
      fontSize: "16px",
      fontWeight: 300,
      color: "#19181899",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#191818",
      fontWeight: 400,
    },
    "& .MuiInputBase-input::placeholder": {
      fontSize: "16px",
      fontWeight: 300,
      color: "#191818",
    },
    "& .MuiFormHelperText-root": {
      color: "#19181866",
      fontSize: "12px",
    },
  };

  // errors state
  const [errors, setErrors] = useState({
    from_name: false,
    from_phone: false,
    from_email: false,
    main_service: false,
    sub_service: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // show error only if empty
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const [phone, setPhone] = useState({
    countryCode: "94",
    number: "",
  });

  const isValidPhone = (phone: string) => {
    // Validate international phone number format
    return /^\+\d{8,15}$/.test(phone);
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("from_name")?.toString().trim();
    const email = formData.get("from_email")?.toString().trim();
    const service = formData.get("main_service")?.toString().trim();
    const subService = formData.get("sub_service")?.toString().trim();

    // Combine phone number with country code
    const fullPhoneNumber = `+${phone.countryCode}${phone.number}`;

    const newErrors = {
      from_name: !name,
      from_phone: !phone.number || !isValidPhone(fullPhoneNumber),
      from_email: !email || !isValidEmail(email),
      main_service: !service,
      sub_service: !subService,
    };

    setErrors(newErrors);
    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    // Create a hidden input for the full phone number
    const phoneInput = document.createElement("input");
    phoneInput.type = "hidden";
    phoneInput.name = "from_phone";
    phoneInput.value = fullPhoneNumber;
    form.current.appendChild(phoneInput);

    setIsSending(true);

    emailjs
      .sendForm("service_yxj2rit", "template_d3x0uv7", form.current, {
        publicKey: "vC8wukAc-UNdnr0Cu",
      })
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Message Sent!",
            html: "Thanks for contacting us, We have received your message.<br/>We'll get back to you soon.",
            imageUrl: AIOHImage,
            imageWidth: 200,
            imageAlt: "Success",
            showConfirmButton: true,
            confirmButtonText: "OK",
            customClass: {
              popup: "!rounded-[20px] p-6",
              title: "text-[22px] font-semibold",
              image: "object-contain",
              htmlContainer: "!text-[16px]",
              confirmButton:
                "w-full mt-4 bg-primary text-secondary text-lg font-medium rounded-full py-3 px-10 cursor-pointer",
            },
            buttonsStyling: false,
          });
          form.current?.reset();
          setSelectedSubService("");
          setPhone({ countryCode: "94", number: "" });
          setErrors({
            from_name: false,
            from_phone: false,
            from_email: false,
            main_service: false,
            sub_service: false,
          });
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: "A system or user network error occurred.<br/>Please try again shortly.",
            customClass: {
              popup: "!rounded-[20px] p-6",
              title: "text-[22px] font-semibold",
              image: "object-contain",
              confirmButton:
                "w-full mt-4 bg-red-400 text-white text-lg font-medium rounded-full py-3 px-10 cursor-pointer",
            },
            buttonsStyling: false,
          });
          setIsSending(false);
        }
      );
  };

  // Get current path using useLocation hook
  const location = useLocation();

  // Extract last part of URL like "marketing", "design", etc.
  const currentPath = location.pathname.split("/").filter(Boolean).pop() || "";

  // Main services dropdown options
  const services = [
    { label: "Marketing", value: "Marketing" },
    { label: "Technology", value: "Technology" },
    { label: "Design", value: "Design" },
  ];

  // sub services for each main service
  const subService: Record<string, { label: string; value: string }[]> = {
    Marketing: [
      { label: "Brand Strategy", value: "Brand Strategy" },
      { label: "Social Media Management", value: "Social Media Management" },
      { label: "SEO Audit and Setup", value: "SEO Audit and Setup" },
      {
        label: "Digital Marketing Consulting",
        value: "Digital Marketing Consulting",
      },
      { label: "Social Media Advertising", value: "Social Media Advertising" },
      { label: "Brand Strategy Sample", value: "Brand Strategy Sample" },
    ],
    Technology: [
      { label: "Web site development", value: "Web site development" },
      { label: "Web system development", value: "Web system development" },
      { label: "Standalone system", value: "Standalone system" },
      { label: "Cloud solution", value: "Cloud solution" },
      { label: "AI solutions", value: "AI solutions" },
      { label: "UI/UX solutions", value: "UI/UX solutions" },
    ],
    Design: [
      { label: "Video and advertising", value: "Video and advertising" },
      {
        label: "Brand identity development",
        value: "Brand identity development",
      },
      { label: "Package design", value: "Package design" },
      { label: "Creative content", value: "Creative content" },
    ],
  };

  // Default selected service based on current path
  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const defaultService =
    services.find((s) => s.value === capitalizeFirstLetter(currentPath))
      ?.value || "";

  // State to manage selected main service
  const [selectedMainService, setSelectedMainService] =
    useState(defaultService);

  const [selectedSubService, setSelectedSubService] = useState("");

  // State to manage sending state for the button
  const [isSending, setIsSending] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-start lg:gap-16 mx-auto gap-16 w-11/12 py-10">
      {/* Left sec */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 space-y-10 lg:space-y-6 lg:pt-4"
      >
        <div className="lg:hidden block text-center justify-center">
          <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold">
            Partner with us to build what’s{" "}
            <span className="text-primary">next</span>
          </h1>
          <p className="lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-6 lg:leading-7 font-light text-center">
            Have an idea? Let’s bring it to life. Whether it's a bold vision or
            a simple spark, we're here to help turn your ideas into reality.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          {/* Name */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="from_name"
              label="Your name"
              fullWidth
              error={errors.from_name}
              helperText={errors.from_name ? "Name is required." : ""}
              onChange={handleInputChange}
              sx={textFieldStyles}
            />
          </Box>

          {/* Phone */}
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                width: "100%",
                "& > *:first-of-type": {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px 0 0 20px",
                    borderRight: "none",
                  },
                },
                "& > *:last-child": {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0 20px 20px 0",
                  },
                },
              }}
            >
              {/* Country Code Selector */}
              <TextField
                select
                name="country_code"
                value={phone.countryCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPhone((prev) => ({
                    ...prev,
                    countryCode: e.target.value,
                  }));
                  setErrors((prev) => ({
                    ...prev,
                    from_phone: !isValidPhone(
                      `+${e.target.value}${phone.number}`
                    ),
                  }));
                }}
                sx={textFieldStyles}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        maxHeight: 300, // Limit dropdown height
                        marginTop: 0.5, // Small gap from the input field
                        marginLeft: "3.75%", // Align with the input field
                        width: "350px", // Fixed width for dropdown
                        // Shadow and border styling
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #e0e0e0",
                        borderRadius: "12px",
                        // Positioning
                        transform: "translateY(8px) !important", // Ensure it appears right below
                      },
                    },
                  },
                  renderValue: (value: unknown) => (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {
                        countries.find(
                          (country) =>
                            country.idd.root.replace("+", "") +
                              (country.idd.suffixes[0] || "") ===
                            value
                        )?.flag
                      }
                      <Box sx={{ ml: 1 }}>+{value as string}</Box>
                    </Box>
                  ),
                }}
              >
                {countries.map((country: any) => (
                  <MenuItem
                    key={country.cca2}
                    value={
                      country.idd.root.replace("+", "") +
                      (country.idd.suffixes[0] || "")
                    }
                    sx={{
                      padding: "8px 16px", // Compact padding
                      "&:hover": {
                        backgroundColor: "#f5f5f5", // Hover effect
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ mr: 1, minWidth: "24px" }}>{country.flag}</Box>
                      <Box sx={{ minWidth: "60px" }}>
                        +
                        {country.idd.root.replace("+", "") +
                          (country.idd.suffixes[0] || "")}
                      </Box>
                      <Box
                        sx={{
                          ml: 2,
                          opacity: 0.7,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "200px",
                        }}
                      >
                        {country.name.common}
                      </Box>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>

              {/* Phone Number Input */}
              <TextField
                name="phone_number"
                value={phone.number}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  // Remove any non-digit characters
                  const cleanedValue = e.target.value.replace(/\D/g, "");
                  setPhone((prev) => ({
                    ...prev,
                    number: cleanedValue,
                  }));
                  setErrors((prev) => ({
                    ...prev,
                    from_phone: !isValidPhone(
                      `+${phone.countryCode}${cleanedValue}`
                    ),
                  }));
                }}
                error={errors.from_phone}
                placeholder="Phone number"
                sx={{
                  ...textFieldStyles,
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    paddingLeft: "14px",
                  },
                }}
              />
            </Box>

            {errors.from_phone && (
              <FormHelperText
                sx={{
                  color: "#d32f2f",
                  fontSize: "12px",
                  ml: "14px",
                  mt: "4px",
                }}
              >
                Please enter a valid phone number (8-15 digits)
              </FormHelperText>
            )}
          </Box>

          {/* Email */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="from_email"
              label="E-mail"
              fullWidth
              error={errors.from_email}
              helperText={
                errors.from_email ? "Please enter a valid email address." : ""
              }
              onChange={handleInputChange}
              sx={textFieldStyles}
            />
          </Box>
          {/* Main service Dropdown */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="main_service"
              label="Main service"
              select
              fullWidth
              defaultValue={defaultService}
              error={errors.main_service}
              helperText={
                errors.main_service ? "Please select a main service." : ""
              }
              sx={textFieldStyles}
              onChange={(e) => {
                handleInputChange(e);
                setSelectedMainService(e.target.value);
              }}
            >
              {services.map((service) => (
                <MenuItem key={service.value} value={service.value}>
                  {service.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {/* Sub services Dropdown */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="sub_service"
              label="Select a sub service"
              select
              fullWidth
              value={selectedSubService}
              onChange={(e) => setSelectedSubService(e.target.value)}
              error={errors.sub_service && !selectedSubService}
              helperText={
                !selectedSubService && errors.sub_service
                  ? "Please select a sub service."
                  : ""
              }
              sx={textFieldStyles}
            >
              {subService[selectedMainService]?.map((sub) => (
                <MenuItem key={sub.value} value={sub.value}>
                  {sub.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {/* Message */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="message"
              label="Enter your message"
              multiline
              rows={6}
              fullWidth
              onChange={handleInputChange}
              sx={textFieldStyles}
            />
          </Box>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full lg:w-fit mt-4 text-[18px] font-medium rounded-full py-[12px] px-6  transition cursor-pointer ${
              isSending
                ? "bg-primary/60 text-[#19181899] cursor-not-allowed"
                : "bg-primary text-[#191818] hover:bg-primary/80"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* Right sec */}
      <div className="w-full lg:w-1/2 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold w-2/3 lg:w-full"
          >
            Partner with us to build what’s{" "}
            <span className="text-primary">next</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-sm lg:text-lg leading-6 md:leading-7 lg:leading-8 font-light text-justify"
          >
            Have an idea? Let’s bring it to life. Whether it's a bold vision or
            a simple spark, we're here to help turn your ideas into reality.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:mt-6 ">
          {/* Card 1 - Address */}

          <div className="rounded-[20px] p-6 shadow-sm text-white bg-[linear-gradient(180deg,_#01213A_0%,_#035BA0_100%)]">
            <p className="text-[18px] font-normal mb-1">Address :</p>
            <p className="text-[16px] text-white leading-[24px] font-light">
              3rd Floor, All in one Holdings, <br />
              349/2/1 Katugastota Rd, <br />
              Kandy, Sri Lanka.
            </p>
          </div>

          {/* Card 2 - Phone - Gradient */}
          <div className="bg-transparent rounded-xl p-6">
            <p className="text-[18px] font-normal mb-1">Phone :</p>
            <p className="text-[16px] text-[#191818]leading-[32px] font-light">
              +94 81 2121 051 <br />
              +94 77 6722 709
            </p>
          </div>

          {/* Card 3 - Email */}
          <div className="bg-transparent rounded-xl p-6 ">
            <p className="text-[18px] font-normal mb-1">E-mail :</p>
            <p className="text-[16px] text-[#191818] leading-[24px] font-light">
              info@allinoneholdings.com
            </p>
          </div>

          {/* Card 4 - Social Icons */}
          <div className="rounded-xl p-6 flex flex-col items-center md:items-start justify-center gap-4">
            <p className="text-[18px] font-normal mb-1 text-center lg:text-left">
              Follow Us:
            </p>
            <div className="flex flex-wrap  gap-4">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
