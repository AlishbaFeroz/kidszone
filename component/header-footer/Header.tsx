// import React from "react";
// import Image from "next/image";
// const Header: React.FC = () => {
//   return (
//     <div className="bg-[#F7631B] md:block hidden text-white p-1">
//       <h2 className="flex items-center justify-center">
//         We are offering best &nbsp;
//         <Image src="/pix/25-percent.png" alt="reload" width={35} height={35} />
//         &nbsp; discount services in 2024 session
//       </h2>
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isTop = scrollTop < 100;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        className={`bg-[#F7631B] md:block hidden  text-white z-50 p-1 ${
          isScrolled ? "fixed top-0 left-0 w-full" : ""
        }`}
      >
        <h2 className="flex items-center justify-center">
          We are offering best &nbsp;
          <Image
            src="/pix/25-percent.png"
            alt="reload"
            width={35}
            height={35}
          />
          &nbsp; discount services in 2024 session
        </h2>
      </div>
    </div>
  );
};

export default Header;
