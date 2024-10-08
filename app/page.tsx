import Image from "next/image";

import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";
export default function Home() {
  return (
    <>
      <div className="h-screen pb-[1000px]">
        <Nav />
        <Header />
        {/* <Carousel/> */}
      </div>
    </>
  );
}
