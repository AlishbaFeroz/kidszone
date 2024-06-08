import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../../component/header-footer/Header";
import Navbar from "../../component/header-footer/Navbar";
import SocialMediaSidebar from "../../component/sidebar/Socialicons";
import FooterImg from "../../component/header-footer/FooterImg";
import Footer from "../../component/header-footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Navbar />
      <SocialMediaSidebar />
      <main>
        <Component {...pageProps} />
      </main>
      <FooterImg />
      <Footer />
    </>
  );
}
