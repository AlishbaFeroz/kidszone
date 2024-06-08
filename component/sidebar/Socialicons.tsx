import React from "react";
import Image from "next/image";

const socialMediaData = [
  {
    name: "Phone",
    iconSrc: "/pix/phone-call.png",
    detail: "09988887777",
  },
  {
    name: "WhatsApp",
    iconSrc: "/pix/email.png",
    detail: "09988887777",
  },
  {
    name: "Facebook",
    iconSrc: "/pix/facebook.png",
    detail: "/facebook-profile",
  },
  {
    name: "Twitter",
    iconSrc: "/pix/twitter.png",
    detail: "@twitter_handle",
  },
  {
    name: "Email",
    iconSrc: "/pix/email.png",
    detail: "example@example.com",
  },
  {
    name: "Instagram",
    iconSrc: "/pix/instagram.png",
    detail: "@instagram_handle",
  },
];

const SocialMediaSidebar: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      {socialMediaData.map((item, index) => (
        <div key={index} className="relative group mb-4">
          <div className="flex items-center transition-all duration-300 transform  group-hover:shadow-lg">
            <div className="bg-white rounded-l-full py-2 pl-2 flex items-center shadow-md w-12 h-12 justify-center">
              <Image
                src={item.iconSrc}
                alt={item.name}
                width={24}
                height={24}
                className="transition-transform duration-300 transform group-hover:translate-x-[-12px]"
              />
            </div>
            <div className="absolute right-0 bg-white rounded-l-full py-2 pl-4 pr-10 flex items-center shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="whitespace-nowrap">{item.detail}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaSidebar;
