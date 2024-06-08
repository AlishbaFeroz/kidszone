import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  heading: string;
  paragraph: string;
}

const Card: React.FC = () => {
  const cards: CardProps[] = [
    {
      imageSrc: "/pix/tutor.png",
      heading: "Experience Tutors",
      paragraph:
        "Learn from highly qualified and dedicated teachers committed to nurturing your child's potential and providing quality education.",
    },
    {
      imageSrc: "/pix/building.png",
      heading: "Top Facilities",
      paragraph:
        "Benefit from state-of-the-art facilities, including modern classrooms and advanced labs, providing the best environment for learning.",
    },
    {
      imageSrc: "/pix/training.png",
      heading: "Advanced Course",
      paragraph:
        "Our innovative curriculum uses modern teaching methods and interactive activities to make learning exciting and effective.",
    },
    {
      imageSrc: "/pix/grow.png",
      heading: "Tech Learning",
      paragraph:
        "We are providing best technology learning with practical approach, integrating the latest technology to make education more engaging.",
    },
  ];

  return (
    <div className="md:mx-28 sm:mx-20 px-5 absolute md:mt-[-150px] z-40">
      <div className="w-full grid md:grid-cols-4 grid-col-1 gap-5 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white w-full border shadow-lg rounded-lg overflow-hidden"
          >
            <div className="flex items-center justify-center">
              <Image
                src={card.imageSrc}
                alt={card.heading}
                width={80}
                height={80}
                className="w-20 md:w-14 lg:w-[70px] "
              />
            </div>

            <div className="p-3 text-center w-full">
              <h2 className="lg:text-lg text-sm text-[#02165C] font-bold">
                {card.heading}
              </h2>
              <p className="mt-1 lg:text-base md:text-xs text-[#494949]">
                {card.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
