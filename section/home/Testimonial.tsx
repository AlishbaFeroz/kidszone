import Image from "next/image";
const Testimonial: React.FC = () => {
  const cards = [
    {
      img: "/pix/parent1.jpg",
      para: " Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
    },
    {
      img: "/pix/parent1.jpg",
      para: " Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
    },
    {
      img: "/pix/parent1.jpg",
      para: " Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
    },
    {
      img: "/pix/parent1.jpg",
      para: " Choosing KidsZone was the best decision we made for our child. The caring staff, excellent facilities, and focus on holistic development make it exceptional.",
    },
  ];
  const rating = Array(5).fill({ img: "/pix/star.png" });

  return (
    <>
      <h1 className="text-[#020A25] text-center font-bold md:text-3xl text-2xl py-5">
        Parents Reviews For US!
      </h1>
      <div className="bg-[#020A25] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center md:px-44 p-5">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-5">
              <div className="flex justify-between pb-3">
                <div className="flex">
                  <Image src={card.img} width={70} height={70} />
                  <h3 className="text-[#02165C] text-center font-bold text-lg ml-2">
                    Rana Begum
                  </h3>
                </div>
                <div className="flex">
                  {rating.map((icon, index) => (
                    <div key={index}>
                      <Image src={icon.img} width={25} height={25} />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[#494949]">{card.para}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Testimonial;
