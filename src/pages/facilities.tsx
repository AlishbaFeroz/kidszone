import PagesBnr from "../../component/banner/PagesBnr";
import ClassRoom from "../../section/facilities/ClassRooms";
export default function admission() {
  return (
    <>
      <div>
        <PagesBnr
          backgroundImage="/pix/bnr.jpg"
          title="Facilities"
          alt="banner image"
          para="Home / Facilities"
          buttonText="Contact Now"
        />
      </div>
      {/* <Facilities /> */}
      <ClassRoom />
    </>
  );
}
