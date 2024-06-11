import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="text-white bg-[#020A25] body-font max-w-[1440px] mx-auto">
        <div className="container mx-auto px-4 py-8 lg:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-3">
                {/* <Image
                  src="/home/house.png"
                  height={40}
                  width={40}
                  alt="logo"
                /> */}
                <Link href="/" legacyBehavior>
                  <a className="flex items-center">
                    <p className="text-xl font-bold">Home</p>
                    <span className="text-[#F7631B] ml-1 text-xl font-bold">
                      Finders
                    </span>
                  </a>
                </Link>
              </div>
              <p className="mt-2 text-sm text-gray-300 mt-4">
                Air plant banjo lyft occupy retro adaptogen indego
              </p>
              <div className="flex mt-2 space-x-5">
                <Image
                  src="/pix/email (1).png"
                  alt="Email"
                  width={25}
                  height={20}
                />
                <Image
                  src="/pix/gps.png"
                  alt="Location"
                  width={25}
                  height={20}
                />
                <Image
                  src="/pix/phone-call (1).png"
                  alt="Phone"
                  width={25}
                  height={20}
                />
              </div>
            </div>
            <div>
              <h2 className="font-medium text-white text-sm mb-3">ABOUT US</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-300 text-sm">Our Story</a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm">Our Team</a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm">Testimonials</a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm">
                    Awards and Recognition
                  </a>
                </li>
              </nav>
            </div>
            <div>
              <h2 className="font-medium text-white text-sm mb-3">
                PROPERTIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-300 text-sm">Residential Listings</a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm">Commercial Listings</a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm">Land Listings</a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm">Featured Properties</a>
                </li>
              </nav>
            </div>
            <div>
              <h2 className="font-medium text-white text-sm mb-3">BLOG</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-300 text-sm">Latest Articles</a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm">Real Estate Trends</a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm">Buying Guides</a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm">Selling Tips</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#F7631B]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left ">
              © 2024 HomeFinders —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
              >
                @alishkhane5@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
