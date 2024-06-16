import React from "react";
import Facilities from "./FacilitiesProp";
// import Content from "./content";
import Content from "./Content";
import Image from "next/image";

const ClassRoom: React.FC = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="max-w-[1440px] w-full">
        <h1 className="font-bold text-3xl text-center text-[#02165C] mb-8">
          Our Facilities
        </h1>
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Facilities
              title={Content.content1.title}
              para={Content.content1.para}
              list={Content.content1.list}
            />
            <div className="w-full h-full">
              <Image
                src="/pix/bnrImg1.jpg"
                alt="reload"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        {/* ................................................................ */}
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-full">
              <Image
                src="/pix/bnrImg3.jpg"
                alt="reload"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <Facilities
              title={Content.content2.title}
              para={Content.content2.para}
              list={Content.content2.list}
            />
          </div>
        </div>
        {/* ............................................................ */}
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Facilities
              title={Content.content3.title}
              para={Content.content3.para}
              list={Content.content3.list}
            />
            <div className="w-full h-full">
              <Image
                src="/pix/teacher.jpg"
                alt="reload"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        {/* ................................................................ */}
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-full">
              <Image
                src="/pix/kidsInterview.jpg"
                alt="reload"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <Facilities
              title={Content.content4.title}
              para={Content.content4.para}
              list={Content.content4.list}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
