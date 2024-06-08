import Button from "../core/Button";

const BnrContent: React.FC = () => {
  return (
    <>
      <div className="absolute z-30 inset-0 flex items-center lg:px-28 md:px-16 pl-5 pr-16 max-w-5xl">
        <div className="space-y-5">
          <h1 className="text-white md:text-4xl text-2xl font-bold">
            WE ENSURE BETTER EDUCATION FOR A BETTER WORLD
          </h1>
          <p className="text-gray-200 text-md font-thin">
            In the history of modern astronomy, there is probably no one greater
            leap forward than the building and launch of the space telescope
            known as the Hubble.
          </p>
          <div className="md:space-x-3 md:space-y-0 space-y-5 flex-col md:flex-row">
            <button className="bg-[#F7631B] px-5 py-2 border-2 border-[#F7631B] rounded-lg text-white">
              Enroll Now
            </button>

            <button className="bg-transparent border-2 border-[#F7631B] px-5 py-2 rounded-lg text-white">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BnrContent;
