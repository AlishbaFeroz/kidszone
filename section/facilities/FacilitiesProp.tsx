import React from "react";
// import Image from "next/image";
interface FacilitiesProps {
  title: string;
  para: string;
  list: string[];
}

const Facilities: React.FC<FacilitiesProps> = ({ title, para, list }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-[#F7631B]">{title}</h3>
      <p className="mb-4 text-[#616161] text-md">{para}</p>
      <ul className="list-disc list-inside text-[#616161] font-thin text-left">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Facilities;
