import type { NextApiRequest, NextApiResponse } from "next";

type CardProps = {
  id: number;
  img: string;
  alt: string;
  title: string;
  para: string;
};

const cards: CardProps[] = [
  {
    id: 1,
    img: "/pix/student.jpg",
    alt: "reload",
    title: "Teacher Award",
    para: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Integer nec odio. Praesent libero, Integer nec odio.",
  },
  {
    id: 2,
    img: "/pix/student.jpg",
    alt: "reload",
    title: "Award Ceremony",
    para: "Sed nisi. Nulla quis sem at nibh elemen tum imperdiet. Duis sagittis ipsum. Praesent mauris, nec odio.",
  },
  {
    id: 3,
    img: "/pix/student.jpg",
    alt: "reload",
    title: "Student Success",
    para: "Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor Integer nec odio.",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardProps | CardProps[]>
) {
  res.status(200).json(cards);
}
