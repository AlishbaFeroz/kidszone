import Image from "next/image";
import Container from "../../component/core/Container";

const Staff: React.FC = () => {
  const teachers = [
    {
      name: "John Doe",
      role: "Mathematics Teacher",
      img: "/pix/parent1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Science Teacher",
      img: "/pix/parent2.jpg",
    },
    {
      name: "David Johnson",
      role: "English Teacher",
      img: "/pix/parent3.jpg",
    },
    {
      name: "Emily Brown",
      role: "History Teacher",
      img: "/pix/parent4.jpg",
    },
  ];

  return (
    <Container>
      <div className="mt-8">
        <h2 className="text-[#02165C] text-center font-bold text-3xl my-8">
          Our Expert Senior Teachers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center p-5">
          {teachers.map((teacher, index) => (
            <div key={index} className="text-center">
              <div
                className="rounded-full overflow-hidden mx-auto"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "100%",
                }}
              >
                {/* <Image src={teacher.img} width={120} height={190} alt="reload" /> */}
                <img src={teacher.img} className="h-32 w-32" alt="reload" />
              </div>
              <h3 className="text-[#02165C] font-bold text-xl mt-4">
                {teacher.name}
              </h3>
              <p className="text-[#494949] text-lg">{teacher.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Staff;
