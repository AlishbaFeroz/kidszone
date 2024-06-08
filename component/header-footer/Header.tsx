import React from "react";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <div className="bg-[#F7631B] text-white p-1">
      <h2 className="flex items-center justify-center">
        We are offering best &nbsp;
        <Image src="/pix/25-percent.png" alt="reload" width={35} height={35} />
        &nbsp; discount services in 2024 session
      </h2>
    </div>
  );
};

export default Header;
