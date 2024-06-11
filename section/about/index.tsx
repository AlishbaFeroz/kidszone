import Image from "next/image";
import Button from "../../component/core/Button";
import Container from "../../component/core/Container";

const AboutUs: React.FC = () => {
  const aboutPara = [
    "Welcome to the Kids-zone where we inspire a love for learning and nurture each student's unique potential. Our modern curriculum makes learning exciting and effective. We are a supportive community of dedicated teachers, staff, and parents. We offer various extracurricular activities for holistic development.",
  ];

  const bulletPoints = [
    "Innovative and engaging teaching methods",
    "Strong parent-teacher collaboration",
    "Wide range of sports, arts, and clubs",
  ];
  return (
    <>
      <Container>
        <div className="my-16 mb-[70px] w-full" data-aos="fade-down">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
            <div className="md:mr-5">
              <h5 className="text-[#F7631B] text-md font-bold">About Us</h5>
              <h1 className="text-[#02165C] text-2xl font-bold">
                Why Choose Us
              </h1>
              {aboutPara.map((paragraph, index) => (
                <p key={index} className="text-[#616161] pt-2 leading-6">
                  {paragraph}
                </p>
              ))}
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center mt-2">
                  <Image
                    src="/pix/checklist.png"
                    alt="bullet"
                    width={20}
                    height={20}
                  />
                  <p className="ml-2 text-[#616161]">{point}</p>
                </div>
              ))}

              <div className="my-5">
                <Button label="Learn More" />
              </div>
            </div>

            <div className="w-full hidden md:block  relative h-auto">
              <div className="absolute top-0 left-36 hidden lg:block bg-[#F7631B] w-[400px] h-[320px] z-0"></div>
              <div className="relative mt-7 z-10">
                <Image
                  src="/pix/aboutimg.jpg"
                  alt="apartment"
                  width={450}
                  height={500}
                  className="md:h-full lg:w-full overflow-hidden px-12 w-full lg:h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default AboutUs;
