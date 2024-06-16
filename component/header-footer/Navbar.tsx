import React, { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/admission", label: "Admissions" },
  { href: "/facilities", label: "Facilities" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#020a25df] text-white shadow-lg z-50 max-w-[1440px] mx-auto relative">
      <div className="container mx-auto flex items-center justify-between p-4 md:h-16">
        <div className="text-2xl font-bold">
          <div className="flex items-center space-x-3">
            {/* <Image src="/home/house.png" height={40} width={40} alt="logo" /> */}
            <Link href="/" legacyBehavior>
              <a className="flex items-center cursor-pointer">
                Kids<span className="text-[#F7631B] ml-1">Zone</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link href={link.href} key={link.label} legacyBehavior>
              <a className="hover:text-[#F7631B] cursor-pointer transition duration-200">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        <div
          className={`fixed inset-0 bg-[#071351] text-white z-30 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            {links.map((link) => (
              <Link href={link.href} key={link.label} legacyBehavior>
                <a
                  className="block py-2 px-4 hover:text-[#F7631B] cursor-pointer transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="md:hidden block">{/* <Header /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
