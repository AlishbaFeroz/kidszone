import Image from "next/image";
type Prop = {
  backgroundImage: string;
  title: string;
  para: string;
  alt: string;
  buttonText: string;
};
const PagesBnr: React.FC<Prop> = ({
  backgroundImage,
  title,
  para,
  alt,
  buttonText,
}) => {
  return (
    <section className="max-w-[1440px] mx-auto  mt-[-64px]">
      <div className="relative h-80" data-aos="fade-down">
        <Image
          src={backgroundImage}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-[#1B3E7B] bg-opacity-60 z-0"></div>
        <div className="absolute inset-0 flex items-center justify-between md:mx-16 mx-3 gap-2 ">
          <div>
            <p className="text-white font-bold text-lg md:text-3xl">{title}</p>
            <p className="text-white md:text-lg text-sm">{para}</p>
          </div>
          <div className="md:flex justify-between items-center">
            <button className="bg-[#F7631B] px-5 py-2 border-2 border-[#F7631B] rounded-lg text-white">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PagesBnr;
