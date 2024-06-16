import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Container from "../../component/core/Container";
import { useRouter } from "next/router";

interface CardProps {
  id: string;
  imageSrc: string;
  heading: string;
  subTitle: string;
  para: string;
  link: string;
}
const SuccessStories: FC = () => {
  const [cardsData, setCardsData] = useState<CardProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch("/api/ourStories");
      const data: CardProps[] = await res.json();
      setCardsData(data);
    };

    fetchCards();
  }, []);

  const handleCardClick = (cardId: string) => {
    router.push(`/blog?id=${cardId}`);
  };
  return (
    <>
      <Container>
        <h1 className="text-[#02165C] text-center font-bold md:text-3xl text-2xl my-5">
          Our Success Stories
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-center w-full p-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="bg-white border-4 border-b-[#f7641bb4] cursor-pointer border-r-[#f7641bb4] shadow-lg rounded-xl overflow-hidden"
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
      </Container>
    </>
  );
};

export default SuccessStories;
