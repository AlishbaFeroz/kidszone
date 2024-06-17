import Container from "../../component/core/Container";
import BlogData from "./BlogData";
import RecentBlog from "./RecentBlog";

const Blog: React.FC = () => {
  return (
    <>
      <Container>
        <div className="my-16">
          <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
            <div className="md:col-span-2 w-full">
              <BlogData />
            </div>
            <div>
              <RecentBlog />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Blog;
