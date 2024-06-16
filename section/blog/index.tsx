import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../../component/core/Container";

interface CardProps {
  id: number;
  img: string;
  alt: string;
  title: string;
  para: string;
}
interface BlogData {
  title: string;
  date: string;
  author: string;
  blogContent: string;
  img: string;
  details: string;
}

const Blog: FC = () => {
  const router = useRouter();
  const [blogCard, setBlogCard] = useState<CardProps[]>([]);
  const [blogData, setBlogData] = useState<BlogData | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch("/api/recentBlog");
      const data: CardProps[] = await res.json();
      setBlogCard(data);
    };

    fetchCards();
  }, []);
  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch("/api/blogData");
      const data: BlogData[] = await res.json();
      setBlogData(data);
    };

    fetchCards();
  }, []);
  const handleReadMore = () => {
    router.push("/blog");
  };

  return (
    <Container>
      <div className="my-16">
        <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
          <div className="md:col-span-2 w-full">
            <h2 className="text-gray-800">Blog</h2>
            {blogData && (
              <>
                <h2 className="text-2xl font-bold text-gray-800">
                  {blogData.title}
                </h2>
                <p className="my-5">
                  {blogData.date} | {blogData.author}
                </p>
                <p className="my-5">{blogData.blogContent}</p>
                <div className="w-full h-[300px] md:h-[300px] group relative my-5 overflow-hidden">
                  <Image
                    src={blogData.img}
                    alt="reload"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-gray-600">{blogData.details}</p>
              </>
            )}
            {/* <h2 className="text-2xl font-bold text-gray-800">
              Our Success Journey
            </h2>
            <p className="my-5">25 April, 2018 | By Mark Wiens</p>
            <p className="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur.
              <br />
            </p>
            <div className="w-full h-[300px] md:h-[300px] group relative my-5 overflow-hidden">
              <Image
                src="/pix/success-journey.jpg"
                alt="reload"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur.
            </p> */}
          </div>
          <div>
            <div className="space-y-5">
              {blogCard.map((item) => (
                <div key={item.id} className="border flex space-x-3 p-3">
                  <div className="w-52">
                    <img
                      // src="/pix/student.jpg"
                      src={item.img}
                      alt={item.alt}
                      // width={100}
                      // height={100}
                      className="rounded-full  h-[70px]"
                    />
                  </div>
                  <div>
                    <h1 className="text-sm">{item.title}</h1>
                    <p className="text-sm">{item.para}</p>
                    <p
                      onClick={handleReadMore}
                      className="font-bold text-blue-500 cursor-pointer ml-2"
                    >
                      read more
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
