// import Image from "next/image";
// import { FC, useEffect, useState } from "react";
// import { useRouter } from "next/router";

// interface BlogDataProp {
//   id: string;
//   title: string;
//   date: string;
//   author: string;
//   blogContent: string;
//   img: string;
//   details: string;
// }

// const BlogData: FC = () => {
//   const router = useRouter();
//   const [blogData, setBlogData] = useState<BlogDataProp[]>([]);
//   const [singleBlog, setSingleBlog] = useState<BlogDataProp | null>(null);
//   const { id } = router.query;

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       const res = await fetch(id ? `/api/blogData?id=${id}` : "/api/blogData");
//       const data = await res.json();
//       if (id) {
//         setSingleBlog(data);
//       } else {
//         setBlogData(data);
//       }
//     };

//     fetchBlogData();
//   }, [id]);

//   if (id && singleBlog) {
//     return (
//       <div>
//         <h2 className="text-[#02165C]">Blog</h2>
//         <div>
//           <h2 className="text-2xl font-bold text-[#F7631B]">
//             {singleBlog.title}
//           </h2>
//           <p className="text-[#494949]">
//             {singleBlog.date} | {singleBlog.author}
//           </p>
//           <p className="mt-5 text-[#494949]">{singleBlog.blogContent}</p>
//           <div className="w-full h-[300px] md:h-[300px] group relative my-5 overflow-hidden">
//             <Image
//               src={singleBlog.img}
//               alt="reload"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <p className="text-[#494949]">{singleBlog.details}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="text-[#02165C]">Blog</h2>
//       {blogData.map((blog) => (
//         <div key={blog.id} onClick={() => router.push(`/blog?id=${blog.id}`)}>
//           <h2 className="text-2xl font-bold text-[#F7631B]">{blog.title}</h2>
//           <p className="text-[#494949]">
//             {blog.date} | {blog.author}
//           </p>
//           <p className="mt-5 text-[#494949]">{blog.blogContent}</p>
//           <div className="w-full h-[300px] md:h-[300px] group relative my-5 overflow-hidden">
//             <Image
//               src={blog.img}
//               alt="reload"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <p className="text-[#494949]">{blog.details}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogData;
import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";

interface BlogDataProp {
  id: string;
  title: string;
  date: string;
  author: string;
  blogContent: string;
  img: string;
  details: string;
}

const BlogData: React.FC = () => {
  const router = useRouter();
  const [blogData, setBlogData] = useState<BlogDataProp[]>([]);
  const [filteredData, setFilteredData] = useState<BlogDataProp[]>([]);
  const { id } = router.query;

  useEffect(() => {
    const fetchBlogData = async () => {
      const res = await fetch("/api/blogData");
      const data: BlogDataProp[] = await res.json();
      setBlogData(data);
      if (id) {
        const singlePost = data.filter((blog) => blog.id === id);
        setFilteredData(singlePost);
      } else {
        setFilteredData(data);
      }
    };

    fetchBlogData();
  }, [id]);

  return (
    <div>
      <h2 className="text-[#02165C]">Blog</h2>

      {filteredData.map((blog) => (
        <div key={blog.id}>
          <h2 className="text-2xl font-bold text-[#F7631B]">{blog.title}</h2>
          <p className="text-[#494949]">
            {blog.date} | {blog.author}
          </p>
          <p className="mt-5 text-[#494949]">{blog.blogContent}</p>
          <div className="w-full h-[300px] md:h-[300px] group relative my-5 overflow-hidden">
            <Image
              src={blog.img}
              alt="reload"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-[#494949]">{blog.details}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogData;
