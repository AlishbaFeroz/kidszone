import type { NextApiRequest, NextApiResponse } from "next";

interface BlogData {
  title: string;
  date: string;
  author: string;
  blogContent: string;
  img: string;
  details: string;
}

const blogData: BlogData = {
  title: "Our Success Journey",
  date: "25 April, 2018",
  author: "By Mark Wiens",
  blogContent: `
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
  eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
  est, qui dolorem ipsum quia dolor sit amet.
  `,
  img: "/pix/success-journey.jpg",
  details:
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi  nsequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogData | BlogData[]>
) {
  const { id } = req.query;

  if (id) {
    const card = blogData.find((card) => card.id === id);
    if (card) {
      res.status(200).json(card);
    }
  } else {
    res.status(200).json(blogData);
  }
}
