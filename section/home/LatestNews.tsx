import React from "react";
import Image from "next/image";

const LatestNews: React.FC = () => {
  const images = [
    {
      src: "/pix/presentation.jpg",
      heading: "Speech Competition Program",
      para: "we offer a huge speech compition program every year in our school and many other schools do participates with us ",
      link: "Read More",
    },
    {
      src: "/pix/sports.jpg",
      heading: "Annual Sports Day",
      para: "Join us for the annual sports day.",
      link: "Read More",
    },
    {
      src: "/pix/teacher.jpg",
      heading: "Teachers' Workshop",
      para: "Workshop for enhancing teaching skills.",
      link: "Read More",
    },
    {
      src: "/pix/win.jpg",
      heading: "Academic Achievements",
      para: "Celebrating academic accomplishments.",
      link: "Read More",
    },
    {
      src: "/pix/staff.jpg",
      heading: "Staff Recognition",
      para: "Acknowledging staff dedication.",
      link: "Read More",
    },
  ];

  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-[#02165C] text-center font-bold md:text-3xl text-2xl my-8">
          Activities or Latest News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Column */}
          <div className="relative h-[500px] w-full">
            <Image
              src={images[0].src}
              alt={images[0].heading}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 z-10 bg-[#020A25] bg-opacity-75 flex flex-col justify-end p-4">
              <h2 className="text-[#F7631B] text-xl font-bold">
                {images[0].heading}
              </h2>
              <p className="text-white">{images[0].para}</p>
              <p className="text-white text-sm underline cursor-pointer py-2">
                {images[0].link}
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              {[images[1], images[2]].map((image, index) => (
                <div key={index} className="relative h-[240px] w-full">
                  <Image
                    src={image.src}
                    alt={image.heading}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 z-10 bg-[#020A25] bg-opacity-75 opacity-0 hover:opacity-100 flex flex-col justify-end p-4 transition-opacity duration-300">
                    <h2 className="text-white text-xl">{image.heading}</h2>
                    <p className="text-white">{image.para}</p>
                    <p className="text-white text-sm underline cursor-pointer py-2">
                      {image.link}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[images[3], images[4]].map((image, index) => (
                <div key={index} className="relative h-[240px] w-full">
                  <Image
                    src={image.src}
                    alt={image.heading}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 z-10 bg-[#020A25] bg-opacity-75 opacity-0 hover:opacity-100 flex flex-col justify-end p-4 transition-opacity duration-300">
                    <h2 className="text-white text-xl">{image.heading}</h2>
                    <p className="text-white">{image.para}</p>
                    <p className="text-white text-sm underline cursor-pointer py-2">
                      {image.link}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
