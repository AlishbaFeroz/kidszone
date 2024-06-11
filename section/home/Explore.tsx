import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../component/core/Button";
import Container from "../../component/core/Container";

const cards = [
  {
    imageSrc: "/pix/admission.jpg",
    heading: "Online Admission",
    paragraph:
      "Enrol your child easily with our online admission process. Fill out the application form, upload necessary documents, and secure a spot for your child in our esteemed school.",
  },
  {
    imageSrc: "/pix/tutor.jpg",
    heading: "Become a Tutor",
    paragraph:
      "Join our dedicated team of educators. Apply to become a tutor and make a significant impact on students' lives. Submit your application quickly and start your teaching journey with us.",
  },
  {
    imageSrc: "/pix/bnrImg3.jpg",
    heading: "Sports Participation",
    paragraph:
      "Encourage your child's physical and mental growth through our sports programs. Sign up for various sports activities and help your child develop teamwork and leadership skills.",
  },
  {
    imageSrc: "/pix/feeSubmit.jpg",
    heading: "Online Fee Submit",
    paragraph:
      "Skip the queues and submit your fees online effortlessly. Our secure payment portal ensures quick and convenient transactions for parents and guardians.",
  },
];

const ExploreCategories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <h1 className="text-[#02165C] text-center text-2xl font-bold md:text-3xl my-8">
          Explore Opportunities
        </h1>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full px-5">
            <Slider {...settings} className="relative">
              {cards.map((card, index) => (
                <div key={index} className="px-2 pb-8">
                  <div className="border h-full border-r-4 border-b-4 border-[#f7641ba3] rounded-lg">
                    <div className="w-full h-[300px] md:h-[250px] group relative rounded-lg overflow-hidden">
                      <Image
                        src={card.imageSrc}
                        alt={card.heading}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                      />
                    </div>
                    <div className="p-4 bg-white rounded-b-lg">
                      <h2 className="text-[#02165C] text-xl font-bold">
                        {card.heading}
                      </h2>
                      <p className="text-[#494949]">{card.paragraph}</p>
                      <div className="pt-2">
                        <Button label="Apply Now" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <style jsx global>{`
          .slick-dots {
            display: flex !important;
            justify-content: center;
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            bottom: -25px;
            width: 100%;
          }

          .slick-dots li {
            margin: 0 5px;
          }

          .slick-dots li button {
            width: 12px;
            height: 12px;
            font-size: 0;
            border: none;
            border-radius: 50%;
            background-color: #333;
            cursor: pointer;
          }

          .slick-dots li.slick-active button {
            background-color: #f7631b;
          }
        `}</style>
      </Container>
    </>
  );
};

export default ExploreCategories;
