"use client";
import Image from "next/image";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Card from "./components/card/card";
import SearchBar from "./components/searchBar/searchBar";
import FadeUpOnScroll from "./components/fadeUpOnScroll/fadeUpOnscroll";
import { FaCheck } from "react-icons/fa";
const data = [
  {
    url: "/images/icon-apartment.png",
    title: "apartment",
    subtitle: "lorem",
  },
  {
    url: "/images/icon-building.png",
    title: "building",
    subtitle: "lorem",
  },
  {
    url: "/images/icon-condominium.png",
    title: "condominium",
    subtitle: "lorem",
  },
  {
    url: "/images/icon-deal copy.png",
    title: "deal",
    subtitle: "lorem",
  },
  {
    url: "/images/icon-house.png",
    title: "house",
    subtitle: "lorem",
  },
  {
    url: "/images/icon-housing.png",
    title: "housing",
    subtitle: "lorem",
  },
  {
    url: "/images/icon-luxury.png",
    title: "luxury",
    subtitle: "lorem",
  },
  {
    url: "/images/icon-neighborhood.png",
    title: "neigborhood",
    subtitle: "lorem",
  },
  // {
  //   url: "/images/icon-search.png",
  //   title: "search",
  //   subtitle: "lorem",
  // },
  // {
  //   url: "/images/icon-villa.png",
  //   title: "villa",
  //   subtitle: "lorem",
  // },
];
export default function Home() {
  return (
    <>
      <div className="">
        <Nav />
        <Header />
        <FadeUpOnScroll>
          <SearchBar />
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <div className="text-center space-y-6 my-16">
            <h1 className="text-4xl font-bold">Property Types</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd <br /> vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:mx-20  gap-4">
            {data.map((item) => {
              return (
                <div key={item.title} className="">
                  <Card
                    url={item.url}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </div>
              );
            })}
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="grid grid-cols-12 md:mx-20 mt-28 overflow-x-hidden">
            <div className="col-span-6 bg-[#00B98E] relative left-[-50%] h-[600px]  skew-x-[20deg] z-[1]"></div>
            <div className="absolute my-16 ml-10 z-[2]">
              <div className="col-span-12">
                <div className="flex flex-wrap">
                  <Image
                    src={"/images/about.jpg"}
                    alt={"about"}
                    width={500}
                    height={450}
                  />

                  <div className="flex flex-col justify-center ml-10 space-y-6">
                    <h1 className="text-4xl font-bold">
                      #1 Place To Find The <br /> Perfect Property
                    </h1>
                    <p className="text-gray-500">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam <br /> amet diam et eos. Clita erat ipsum
                      et lorem et sit, sed stet lorem sit clita <br /> duo justo
                      magna dolore erat amet
                    </p>
                    <ul className="space-y-6 text-gray-500">
                      <li className="flex items-center ">
                        {" "}
                        <FaCheck className="text-[#00B98E] mr-4" />
                        Tempor erat elitr rebum at clita
                      </li>
                      <li className="flex items-center ">
                        <FaCheck className="text-[#00B98E] mr-4" /> Aliqu diam
                        amet diam et eos
                      </li>
                      <li className="flex items-center ">
                        <FaCheck className="text-[#00B98E] mr-4" /> Clita duo
                        justo magna dolore erat amet
                      </li>
                    </ul>

                    <div>
                      <button className="bg-[#00B98E] text-white mt-10 rounded-md hover:bg-[#00B98E] px-6 py-4">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUpOnScroll>
      </div>
    </>
  );
}
