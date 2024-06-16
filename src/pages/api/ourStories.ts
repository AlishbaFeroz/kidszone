import type { NextApiRequest, NextApiResponse } from "next";

type CardProps = {
  id: string;
  imageSrc: string;
  heading: string;
  subTitle: string;
  para: string;
  link: string;
};

const cards: CardProps[] = [
  {
    id: "1",
    imageSrc: "/pix/success-journey.jpg",
    heading: "Our Success Journey",
    subTitle: "25 April, 2018 | By Mark Wiens",
    para: "Join us on our exciting journey of success. With every step, we have shown dedication and resilience. Let's celebrate our victories together and anticipate the adventures ahead.",
    link: "Read More",
  },
  {
    id: "2",
    imageSrc: "/pix/award.jpg",
    heading: "Achieving Award Ceremony",
    subTitle: "25 April, 2018 | By Mark Wiens",
    para: "Thrilled to share our latest success of best school performance in sports. It's a testament to our dedication and teamwork. Thanks to all who made this possible. Let's keep soaring!",
    link: "Read More",
  },
  {
    id: "3",
    imageSrc: "/pix/aboutimg.jpg",
    heading: "Student Success Stories",
    subTitle: "25 April, 2018 | By Mark Wiens",
    para: "Be inspired by our students' success stories featured on our blog. Discover how our school's unique approach to education is helping students thrive and achieve their goals.",
    link: "Read More",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardProps | CardProps[]>
) {
  const { id } = req.query;

  if (id) {
    const card = cards.find((card) => card.id === id);
    if (card) {
      res.status(200).json(card);
    }
  } else {
    res.status(200).json(cards);
  }
}
