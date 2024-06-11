import Image from "next/image";
import React from "react";

const FooterImg: React.FC = () => {
  return (
    <div
      className="flex flex-wrap mt-16 overflow-hidden max-w-[1440px] mx-auto"
      data-aos="fade-down"
    >
      <div className="flex-1">
        <Image
          src="/pix/bnrImg1.jpg"
          width={200}
          height={200}
          alt="homes"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1">
        <Image
          src="/pix/bnrimg2.jpg"
          width={200}
          height={200}
          alt="homes"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1">
        <Image
          src="/pix/bnrImg3.jpg"
          width={200}
          height={200}
          alt="homes"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1">
        <Image
          src="/pix/ground.jpg"
          width={200}
          height={200}
          alt="homes"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1">
        <Image
          src="/pix/win.jpg"
          width={200}
          height={200}
          alt="homes"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1">
        <Image
          src="/pix/award.jpg"
          width={200}
          height={200}
          alt="homes"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1">
        <Image
          src="/pix/sports.jpg"
          width={200}
          height={200}
          alt="homes"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default FooterImg;
