"use client";
import Image from "next/image";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Card from "./components/card/card";
import SearchBar from "./components/searchBar/searchBar";
import FadeUpOnScroll from "./components/fadeUpOnScroll/fadeUpOnscroll";
import { FaCheck } from "react-icons/fa";
import PropertyCard from "./components/propertyCard/propertyCard";
import FadeLeftOnScroll from "./components/fadeLeftOnScroll/fadeLeftOnScroll";
import FadeRightOnScroll from "./components/fadeRightOnScroll/fadeRightOnScroll";
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

const propertyList = [
  {
    price: 12345,
    status: "For Rent",
    category: "Villa",
    location: "123 Street, Pakistan",
    url: "/images/property-1.jpg",
  },
  {
    price: 50000,
    status: "For Sale",
    category: "Apartment",
    location: "456 Avenue, Lahore, Pakistan",
    url: "/images/property-2.jpg",
  },
  {
    price: 30000,
    status: "For Rent",
    category: "Townhouse",
    location: "789 Road, Karachi, Pakistan",
    url: "/images/property-3.jpg",
  },
  {
    price: 25000,
    status: "For Rent",
    category: "Penthouse",
    location: "321 Lane, Islamabad, Pakistan",
    url: "/images/property-4.jpg",
  },
  {
    price: 75000,
    status: "For Sale",
    category: "Bungalow",
    location: "654 Boulevard, Multan, Pakistan",
    url: "/images/property-5.jpg",
  },
  {
    price: 45000,
    status: "For Rent",
    category: "Cottage",
    location: "987 Street, Murree, Pakistan",
    url: "/images/property-6.jpg",
  },
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

        <div className="  flex justify-between flex-wrap space-y-6 mt-[450px] md:mt-0 md:mx-20 mb-10">
          <FadeLeftOnScroll>
            <div className="col-span-6">
              <h1 className="text-4xl font-bold">Property Listing</h1>
              <p className="mt-5">
                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                dolore <br /> lorem kasd vero ipsum sit eirmod sit diam justo
                sed rebum.
              </p>
            </div>
          </FadeLeftOnScroll>
          <FadeRightOnScroll>
            <div className="space-x-4 md:ml-auto col-span-6">
              <button className="bg-[#00B98E] text-white mt-10 rounded-md hover:bg-[#00B98E] px-4 py-2">
                Featured
              </button>
              <button className="border border-[#00B98E] mt-10 transition-all duration-1000 hover:text-white  rounded-md hover:bg-[#00B98E] px-4 py-2">
                For Rent
              </button>
              <button className="border border-[#00B98E] mt-10 transition-all duration-1000 hover:text-white  rounded-md hover:bg-[#00B98E] px-4 py-2">
                For sell
              </button>
            </div>
          </FadeRightOnScroll>
        </div>
        <FadeUpOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-y-6 lg:ml-20">
            {propertyList.map((item) => {
              return (
                <PropertyCard
                  url={item.url}
                  key={item.price}
                  price={item.price}
                  status={item.status}
                  category={item.category}
                  location={item.location}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <button className="bg-[#00B98E] text-white mt-10 rounded-md hover:bg-[#00b963] px-6 py-4 ">
              Browse more property
            </button>
          </div>
        </FadeUpOnScroll>
      </div>
    </>
  );
}
