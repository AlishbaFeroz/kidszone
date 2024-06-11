import React, { useEffect, useState } from "react";
import Image from "next/image";
import BnrContent from "./BnrContent";

const images = ["/pix/bnrImg1.jpg", "/pix/bnrimg2.jpg", "/pix/bnrImg3.jpg"];

const BnrSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[550px] max-w-[1440px] mx-auto overflow-hidden mt-[-64px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full ${
            index === currentIndex ? "opacity-100 animate-fadeIn" : "opacity-0"
          }`}
        >
          <BnrContent />
          <div className="absolute inset-0 z-10 bg-[#020A25] bg-opacity-75"></div>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default BnrSlider;
