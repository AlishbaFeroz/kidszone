// import Blog from "../../section/blog/BlogData";
import PagesBnr from "../../component/banner/PagesBnr";
import Blog from "../../section/blog";
import SuccessStories from "../../section/home/SuccessStories";

export default function blog() {
  return (
    <>
      {/* <h1>blog page</h1> */}
      <PagesBnr
        backgroundImage="/pix/award.jpg"
        title="Blog"
        alt="banner image"
        para="Home / Blog"
        buttonText="Contact Now"
      />
      <Blog />
      <SuccessStories />
    </>
  );
}
