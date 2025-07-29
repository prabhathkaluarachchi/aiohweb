import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/about/AIOH.png";

const Arrow = ({ isOpen = false }: { isOpen?: boolean }) => (
  <svg
    className={`ml-1 inline-block transform transition-transform duration-200 ${
      isOpen ? "rotate-90" : ""
    }`}
    width="15"
    height="15"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 2.5L6.5 5L3 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type NavItem = {
  label: string;
  to: string;
  submenu?: NavItem[];
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/Aboutus" },
  {
    label: "Marketing",
    to: "/Marketing",
    submenu: [
      { label: "SEO", to: "/marketing/seo" },
      { label: "Content", to: "/marketing/content" },
    ],
  },
  {
    label: "Technology",
    to: "/Technology",
    submenu: [
      { label: "Web Development", to: "/technology/WebService" },
      { label: "Blockchain", to: "/technology/blockchain" },
    ],
  },
  {
    label: "Design",
    to: "/Design",
    submenu: [
      { label: "UX", to: "/design/ux" },
      { label: "UI", to: "/design/ui" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

interface HeaderProps {
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const navbarBg = "#01213A";
  const gradientColors = ["#0B385A", "#02EC97", "#05BBB7"];

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <header
      style={{ backgroundColor: navbarBg }}
      className="rounded-[20px] h-16 select-none font-['Roboto']"
    >
      <div className="w-11/12 mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
            draggable={false}
          />
        </div>
        {/* Desktop Nav */}
        <nav
          className="hidden md:flex flex-1 justify-center space-x-8 items-center text-white/80 text-[18px] font-light"
          style={{ fontFamily: "Roboto" }}
        >
          {navItems.map(({ label, to, submenu }) => {
            const isActive =
              currentPath === to ||
              (submenu &&
                submenu.some((sub) => currentPath.startsWith(sub.to)));

            return (
              <div key={to} className="relative group">
                <NavLink
                  to={to}
                  className={`inline-flex items-center hover:text-[#02EC97] transition-colors duration-300 ${
                    isActive ? "text-[#02EC97]" : ""
                  }`}
                >
                  {label}
                  {submenu && <Arrow />}
                </NavLink>

                <span
                  className={`absolute bottom-[-6px] left-1/2 h-[2px] bg-[#02EC97] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                    isActive ? "w-4" : "w-0"
                  } group-hover:w-8`}
                />

                {submenu && (
                  <div
                    className="absolute top-full left-0 bg-[#01213A] rounded-md mt-2 py-2 min-w-[180px] whitespace-nowrap opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-20"
                    onMouseEnter={() =>
                      setOpenDropdowns((prev) => [...prev, label])
                    }
                    onMouseLeave={() =>
                      setOpenDropdowns((prev) =>
                        prev.filter((item) => item !== label)
                      )
                    }
                  >
                    {submenu.map(({ label: subLabel, to: subTo }) => (
                      <NavLink
                        key={subTo}
                        to={subTo}
                        className={({ isActive }) =>
                          `block px-4 py-1 text-white/80 hover:text-[#02EC97] text-left ${
                            isActive ? "text-[#02EC97]" : ""
                          }`
                        }
                      >
                        {subLabel}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-block ml-6 px-5 py-1.5 rounded-[30px] font-light text-white text-[18px] whitespace-nowrap"
          style={{
            background: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
          }}
        >
          Connect with us
        </NavLink>
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="z-50 relative w-8 h-8 flex flex-col justify-center items-center"
          >
            {mobileMenuOpen ? (
              // Close (×) icon — only size and spacing changed
              <span className="text-white text-[36px] font-light absolute -top-2 right-[-10px]">
                ×
              </span>
            ) : (
              <>
                <span className="block h-0.5 w-6 bg-white rounded-sm mb-1"></span>
                <span className="block h-0.5 w-6 bg-white rounded-sm mb-1"></span>
                <span className="block h-0.5 w-6 bg-white rounded-sm"></span>
              </>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 flex flex-col p-6 pt-20 text-white text-[18px] font-light"
            style={{
              backgroundColor: navbarBg,
              fontFamily: "Roboto",
            }}
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map(({ label, to, submenu }) => (
                <div key={to} className="flex flex-col">
                  <button
                    onClick={() =>
                      submenu ? toggleDropdown(label) : setMobileMenuOpen(false)
                    }
                    className={`flex items-center justify-between w-full text-left ${
                      currentPath === to ? "text-[#02EC97]" : "text-white"
                    }`}
                  >
                    <NavLink
                      to={to}
                      className="flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </NavLink>
                    {submenu && (
                      <Arrow isOpen={openDropdowns.includes(label)} />
                    )}
                  </button>

                  {/* Collapsible Submenu */}
                  {submenu && openDropdowns.includes(label) && (
                    <div className="pl-4 mt-2 flex flex-col space-y-2">
                      {submenu.map(({ label: subLabel, to: subTo }) => (
                        <NavLink
                          key={subTo}
                          to={subTo}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `hover:text-[#02EC97] transition-colors duration-300 ${
                              isActive ? "text-[#02EC97]" : "text-white"
                            }`
                          }
                        >
                          {subLabel}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-6 py-3 rounded-[30px] font-light text-white text-[18px] whitespace-nowrap text-center"
                style={{
                  background: `linear-gradient(90deg, ${gradientColors.join(
                    ", "
                  )})`,
                }}
              >
                Connect with us
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
