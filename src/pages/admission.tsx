import PagesBnr from "../../component/banner/PagesBnr";
import Admission from "../../section/admission";

export default function admission() {
  return (
    <>
      <div>
        <PagesBnr
          backgroundImage="/pix/admission.jpg"
          title="Admission"
          alt="banner image"
          para="Home / Admission"
          buttonText="Contact Now"
        />
      </div>
      <Admission />
    </>
  );
}
