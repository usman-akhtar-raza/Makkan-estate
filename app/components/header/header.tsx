import Image from "next/image";
import dynamic from 'next/dynamic';

import Carousel from "../carousel/carousel";

// const items = [
//   { image: "/images/carousel-1.jpg", alt: "Image" },
//   { image: "/images/carousel-2.jpg", alt: "Image" },
// ];
function Header({}) {
  return (
    <>
      <main>
        <div className="grid grid-cols-12 gap-4">
          {/* Left column: Heading, subtitle, and button */}
          <div className=" col-span-12 md:col-span-6">
            <h1 className="animate-fade text-3xl font-bold">Its heading</h1>
            <p className="animate-fade text-lg text-gray-600 mt-2">Subtitle</p>
            <button className="animate-fade mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              View Project
            </button>
          </div>

          {/* Right column: Image */}
          <div className="col-span-12 md:col-span-6 flex justify-center">
            {/* <OwlCarouselComponent items={items} /> */}
            {/* <Image
              src={"/images/carousel-1.jpg"}
              alt="image"
              width={800}
              height={800}
              className=""
              /> */}
              <Carousel/>
            {/* <Image
              src={"/images/carousel-2.jpg"}
              alt="image"
              width={800}
              height={800}
              className=""
            /> */}
          </div>
        </div>
      </main>
    </>
  );
}
export default Header;
