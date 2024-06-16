import Image from "next/image";
import Button from "../../component/core/Button";

interface CardProp {
  img: string;
  title: string;
  para: string;
  btn: string;
}

const Admission: React.FC = () => {
  const cards: CardProp[] = [
    {
      img: "/pix/applicationForm.jpg",
      title: "Application Form",
      para: "You can fill out our online application form with your child’s basic details. We have a user-friendly interface on our website that makes it easy to get started.",
      btn: "Apply Now",
    },
    {
      img: "/pix/docsSubmission.jpg",
      title: "Document Submission",
      para: "You can submit the required documents online. This includes previous academic records, birth certificate, and any other relevant documents.",
      btn: "Submit Documents",
    },
    {
      img: "/pix/kidsInterview.jpg",
      title: "Assessment & Interview",
      para: "Once the application and documents are reviewed, we will schedule an assessment and interview with your child. This helps us understand their academic and personal background better.",
      btn: "Schedule Assessment",
    },
  ];

  return (
    <div className="flex justify-center my-16">
      <div>
        <h5 className="text-[#02165C] text-3xl mb-5 font-bold text-center">
          Admission Process
        </h5>
        <div className="max-w-5xl">
          <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col bg-white border-4 border-b-[#f7641bb4] border-r-[#f7641bb4] shadow-lg rounded-xl overflow-hidden"
              >
                <div className="w-full h-[200px] md:h-[200px] group relative overflow-hidden">
                  <Image
                    src={card.img}
                    alt="reload"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                  />
                </div>
                <div className="flex flex-col flex-grow p-2">
                  <h5 className="text-[#F7631B] my-1 text-center text-lg text-md font-bold">
                    {card.title}
                  </h5>
                  <p className="text-[#616161] text-center text-sm  flex-grow">
                    {card.para}
                  </p>
                </div>
                <div className="flex mb-5 justify-center">
                  <Button label={card.btn} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
