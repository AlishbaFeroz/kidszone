import Image from "next/image";
import { FC } from "react";

interface CardProps {
  imageSrc: string;
  heading: string;
  subTitle: string;
  para: string;
  link: string;
}

const SuccessStories: FC = () => {
  const cards: CardProps[] = [
    {
      imageSrc: "/pix/success-journey.jpg",
      heading: "Our Success Journey",
      subTitle: "25 April, 2018 | By Mark Wiens",
      para: "Join us on our exciting journey of success. With every step, we have shown dedication and resilience. Let's celebrate our victories together and anticipate the adventures ahead.",
      link: "Read More",
    },
    {
      imageSrc: "/pix/award.jpg",
      heading: "Achieving Award Ceremony",
      subTitle: "25 April, 2018 | By Mark Wiens",
      para: "Thrilled to share our latest success of best school performance in sports. It's a testament to our dedication and teamwork. Thanks to all who made this possible. Let's keep soaring!",
      link: "Read More",
    },
    {
      imageSrc: "/pix/aboutimg.jpg",
      heading: "Student Success Stories",
      subTitle: "25 April, 2018 | By Mark Wiens",
      para: "Be inspired by our students' success stories featured on our blog. Discover how our school's unique approach to education is helping students thrive and achieve their goals.",
      link: "Read More",
    },
  ];

  return (
    <>
      <h1 className="text-[#02165C] text-center font-bold md:text-3xl text-2xl my-5">
        Our Success Stories
      </h1>
      <div className="grid md:grid-cols-3 md:px-32 sm:grid-cols-2 grid-cols-1 gap-5 justify-center w-full p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border-4 border-b-[#f7641bb4] border-r-[#f7641bb4] shadow-lg rounded-xl overflow-hidden"
          >
            <div className="w-full h-[200px] md:h-[200px] group relative overflow-hidden">
              <Image
                src={card.imageSrc}
                alt={card.heading}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg transition-transform duration-500 ease-in-out transform group-hover:scale-125"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl text-[#454545] font-bold">
                {card.heading}
              </h1>
              <h5 className="text-sm text-gray-500">{card.subTitle}</h5>
              <p className="text-[#494949] mt-2 line-clamp-3">{card.para}</p>
              <p className="text-[#02165C] text-sm underline cursor-pointer py-2">
                {card.link}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SuccessStories;
