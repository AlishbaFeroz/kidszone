import React from "react";
import Image from "next/image";
import Button from "../../component/core/Button";

const Counter: React.FC = () => {
  return (
    <div className="relative w-full md:min-h-[550px] bg-cover bg-center">
      <div className="absolute inset-0">
        <Image
          src="/pix/staff.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 z-10 bg-[#020A25] bg-opacity-75"></div>
      </div>
      <div className="relative z-20 flex flex-col md:flex-row justify-center items-center p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Explore Us</h1>
          <p className="mb-8">
            Students, teachers, classrooms. These figures reflect our commitment
            to quality education. Explore our stats and learn more!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#f7641bb4] text-white py-8 space-y-2 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-center">40+</h1>
              <h3 className="text-lg  text-center">Our Teachers</h3>
            </div>
            <div className="bg-[#f7641bb4] text-white py-8 space-y-2 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-center">70+</h1>
              <h3 className="text-lg  text-center">Class Rooms</h3>
            </div>
            <div className="bg-[#f7641bb4] text-white py-8 space-y-2 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-center">1000+</h1>
              <h3 className="text-lg  text-center">Our Students</h3>
            </div>
            <div className="bg-[#f7641bb4] text-white py-8 space-y-2 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-center">20+</h1>
              <h3 className="text-lg  text-center">Passed Years</h3>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/2 p-4">
          <form className="bg-white lg:p-8 p-5 rounded-lg shadow-lg">
            <h1 className="text-2xl text-center font-bold mb-4 text-[#02165C]">
              Contact Us
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="enter your name"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="type your message here"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-transparent w-full border-2 border-[#F7631B] px-5 py-2 rounded-lg text-[#F7631B]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Counter;
