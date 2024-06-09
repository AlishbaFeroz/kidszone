// import Image from "next/image";
// const Testimonial: React.FC = () => {
//   const cards = [
//     {
//       img: "/pix/parent1.jpg",
//       para: " Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
//     },
//     {
//       img: "/pix/parent1.jpg",
//       para: " Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
//     },
//     {
//       img: "/pix/parent1.jpg",
//       para: " Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
//     },
//     {
//       img: "/pix/parent1.jpg",
//       para: " Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
//     },
//   ];
//   const rating = Array(5).fill({ img: "/pix/star.png" });

//   return (
//     <>
//       <h1 className="text-[#020A25] text-center font-bold md:text-3xl text-2xl py-5">
//         Parents Reviews For US!
//       </h1>
//       <div className="bg-[#020A25] py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center md:px-44 p-5">
//           {cards.map((card, index) => (
//             <div key={index} className="bg-white p-5">
//               <div className="flex justify-between pb-3">
//                 <div className="flex">
//                   <Image src={card.img} width={70} height={70} alt="reload" />
//                   <h3 className="text-[#02165C] text-center font-bold text-lg ml-2">
//                     Rana Begum
//                   </h3>
//                 </div>
//                 <div className="flex">
//                   {rating.map((icon, index) => (
//                     <div key={index}>
//                       <Image
//                         src={icon.img}
//                         width={25}
//                         height={25}
//                         alt="reload"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <p className="text-[#494949]">{card.para}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Testimonial;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // Importing Next.js Image component

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="slick-arrow-prev"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "10px",
      zIndex: 1,
      transform: "translateY(-50%)",
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "50%",
      padding: "10px",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="slick-arrow-next"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: "10px",
      zIndex: 1,
      transform: "translateY(-50%)",
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "50%",
      padding: "10px",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

interface Rating {
  name: string;
  comment: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const ratings: Rating[] = [
    {
      name: "Parent 1",
      comment:
        "Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
      rating: 5,
      image: "/pix/parent1.jpg",
    },
    {
      name: "Parent 2",
      comment:
        "Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
      rating: 4,
      image: "/pix/parent1.jpg",
    },
    {
      name: "Parent 3",
      comment:
        "Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
      rating: 3,
      image: "/pix/parent1.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10%",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "5%",
        },
      },
    ],
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg
            key={i}
            className="text-yellow-500 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="text-gray-400 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <h1 className="text-center text-[#020A25] font-bold md:text-3xl text-2xl pb-5">
        Our Client Reviews
      </h1>
      <Slider {...settings}>
        {ratings.map((rating, index) => (
          <div key={index} className="px-4 lg:h-[330px] mt-5">
            <div className="w-full bg-white p-5 text-center border-4 border-b-[#f7641bb4] border-r-[#f7641bb4] rounded-lg  h-80 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={rating.image}
                  alt={rating.name}
                  className="rounded-full h-[80px] w-[80px] mb-2"
                />
                <h3 className="font-bold uppercase">{rating.name}</h3>
                <p className="text-md font-light italic text-gray-700">
                  {rating.comment}
                </p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  {renderStars(rating.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
