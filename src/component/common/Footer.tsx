import { Link } from "react-router-dom";

import bgImage from "../../assets/img/logo/footback.jpg";
import topSvg from "../../assets/img/logo/allinone.svg";
import FacebookIcon from "../../assets/contact/facebook.svg";
import InstagramIcon from "../../assets/contact/instagram.svg";
import GoogleIcon from "../../assets/contact/google.svg";
import AIOHLogo from "../../assets/img/logo/AIOH.png";
import SendIcon from "../../assets/img/logo/Send.svg";
import PhoneIcon from "../../assets/img/logo/Phone.svg";
import LocationIcon from "../../assets/img/logo/Location.svg";
import EmailIcon from "../../assets/img/logo/Email.svg";

const Footer = () => {
  return (
    <footer className="relative mt-32 text-white font-light font-['Roboto']">
      {/* ✅ Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0 rounded-[20px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-[20px]" />
      </div>

      {/* ✅ Big AllinOne SVG top of footer */}
      <div className="absolute lg:-top-40 -top-10  w-full flex justify-center z-10">
        <img src={topSvg} alt="AllinOne" className="w-full h-auto px-4" />
      </div>

      {/* ✅ Main content */}
      <div className="relative z-10 w-11/12 mx-auto md:pt-60 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-8 text-left text-[16px] font-light leading-relaxed">
          {/* Column 1 */}
          <div>
            <div className="mb-3">
              <img
                src={AIOHLogo}
                alt="All in One Holdings Logo"
                className="w-[140px] h-auto"
              />
            </div>
            <p className="mb-2">
              Empowering startups and businesses with result-driven Digital
              Marketing and custom-built Software Solutions. Turn your ideas
              into digital succes
            </p>
            {/* Newsletter */}
            <div className="mt-4 flex items-center">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="px-4 py-2 w-4/5 rounded-full border border-[#595959] text-black placeholder-[#595959] focus:outline-none"
              />
              <button
                className="ml-2 w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center pointer-cursor hover:bg-[#02EC97]/90 transition-colors duration-300"
                aria-label="Subscribe"
              >
                <img src={SendIcon} alt="Send" className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[18px] font-medium mb-3">What We Do Best</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  Brand strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  Social media management
                </Link>
              </li>
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  Digital marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  Social media advertising
                </Link>
              </li>
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  SEO audit and setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[18px] font-medium mb-3">Standout Services</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  Web development
                </Link>
              </li>
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  Software development
                </Link>
              </li>
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  Cloud solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/technology/WebService"
                  className="hover:text-[#02EC97] transition-colors duration-200"
                >
                  UI/UX designs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[18px] font-medium mb-3">Contact</h3>

            <div className="flex items-start gap-2 mb-1">
              <img src={PhoneIcon} alt="Phone" className="w-5 h-5 mt-1" />
              <p>+94 81 2121 051</p>
            </div>

            <div className="flex items-start gap-2 mb-1">
              <img src={LocationIcon} alt="Location" className="w-5 h-5 mt-1" />
              <div>
                <p>3rd Floor, All in one Holdings,</p>
                <p>349/17 Katugastota Rd,</p>
                <p>Kandy, Sri Lanka.</p>
              </div>
            </div>

            <div className="flex items-start gap-2 mt-1">
              <img src={EmailIcon} alt="Email" className="w-5 h-5 mt-1" />
              <p>info@allinoneholdings.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Footer Bottom Section with social + nav + credit */}
      <div className="relative z-10 w-full">
        <div className="w-11/12 mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to="/" className="hover:text-[#02EC97] transition">
              Home
            </Link>
            <Link to="/Aboutus" className="hover:text-[#02EC97] transition">
              About
            </Link>
            <Link to="/Marketing" className="hover:text-[#02EC97] transition">
              Marketing
            </Link>
            <Link to="/Technology" className="hover:text-[#02EC97] transition">
              Technology
            </Link>
            <Link to="/Design" className="hover:text-[#02EC97] transition">
              Design
            </Link>
            <Link to="/Contact" className="hover:text-[#02EC97] transition">
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center md:justify-end">
            <a
              href="https://www.facebook.com/allinoneholdings"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center hover:opacity-80"
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="w-[18px] h-[18px]"
              />
            </a>
            <a
              href="https://www.instagram.com/all_in_one_holdings"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center hover:opacity-80"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-[18px] h-[18px]"
              />
            </a>
            <a
              href="https://g.co/kgs/Cw4rrUZ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center hover:opacity-80"
            >
              <img
                src={GoogleIcon}
                alt="Google"
                className="w-[18px] h-[18px]"
              />
            </a>
          </div>
        </div>

        {/* ✅ Credit Line */}
        <div className="text-xs py-3 bg-[#000107]">
          <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
            <p>
              Copyrights © 2025 All in One IT Solutions. All Rights Reserved
            </p>
            <p className="text-[10px]">
              User Terms & Conditions | Privacy Policy
            </p>
          </div>
        </div>
        <div className="relative z-10 w-11/12 mx-auto">
          {/* All footer content */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
