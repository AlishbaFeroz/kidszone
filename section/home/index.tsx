import React from "react";
import BnrSlider from "../../component/banner/BnrSlider";
import Card from "./Card";
import AboutUs from "../about";
import ExploreCategories from "./Explore";
import Counter from "./Counter";
import SuccessStories from "./SuccessStories";
import LatestNews from "./LatestNews";
import Testimonial from "./Testimonial";
import Staff from "./Staff";

const Home: React.FC = () => {
  return (
    <>
      <BnrSlider />
      <div className="md:mb-0 mt-14 mb-[900px] lg:mb-60">
        <Card />
      </div>
      <div className="md:pt-0 pt-5">
        <AboutUs />
      </div>
      <div className="md:pt-2">
        <ExploreCategories />
      </div>
      <Counter />
      <div className="mt-24">
        <SuccessStories />
      </div>
      <div className="mt-24">
        <LatestNews />
      </div>
      <div className="mt-24">
        <Testimonial />
      </div>
      <div className="mt-24">
        <Staff />
      </div>
    </>
  );
};

export default Home;
