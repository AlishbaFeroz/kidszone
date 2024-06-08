import Image from "next/image";
const FooterImg: React.FC = () => {
  return (
    <>
      <div className="flex overflow-hidden mt-16" data-aos="fade-down">
        <Image src="/pix/bnrImg1.jpg" width={200} height={200} alt="homes" />
        <Image src="/pix/bnrimg2.jpg" width={200} height={200} alt="homes" />
        <Image src="/pix/bnrImg3.jpg" width={200} height={200} alt="homes" />
        <Image src="/pix/ground.jpg" width={200} height={200} alt="homes" />
        <Image src="/pix/win.jpg" width={200} height={200} alt="homes" />
        <Image src="/pix/award.jpg" width={200} height={200} alt="homes" />
        <Image src="/pix/sports.jpg" width={200} height={200} alt="homes" />
      </div>
    </>
  );
};
export default FooterImg;
