import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
// import Container from "../../component/core/Container";

interface CardProps {
  id: number;
  img: string;
  alt: string;
  title: string;
  para: string;
}

const RecentBlog: React.FC = () => {
  const router = useRouter();
  const [blogCard, setBlogCard] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch("/api/recentBlog");
      const data: CardProps[] = await res.json();
      setBlogCard(data);
    };

    fetchCards();
  }, []);

  const handleReadMore = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="space-y-5">
      {blogCard.map((item) => (
        <div key={item.id} className="border shadow-md flex space-x-3 p-3">
          <div className="w-52">
            <img
              src={item.img}
              alt={item.alt}
              className="rounded-full  h-[80px]"
            />
          </div>
          <div>
            <h1 className="text-sm text-[#02165C]">{item.title}</h1>
            <p className="text-sm text-[#555555]">{item.para}</p>
            <p
              onClick={() => handleReadMore(item.id)}
              className="text-gray-600 text-sm font-semibold cursor-pointer"
            >
              read more
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentBlog;
