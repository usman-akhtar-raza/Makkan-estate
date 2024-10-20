"use client";
import Image from "next/image";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Card from "./components/card/card";
import SearchBar from "./components/searchBar/searchBar";
import FadeUpOnScroll from "./components/fadeUpOnScroll/fadeUpOnscroll";
import { FaCheck, FaPhone, FaCalendar } from "react-icons/fa";
import PropertyCard from "./components/propertyCard/propertyCard";
import FadeLeftOnScroll from "./components/fadeLeftOnScroll/fadeLeftOnScroll";
import FadeRightOnScroll from "./components/fadeRightOnScroll/fadeRightOnScroll";
import TeamCard from "./components/teamCard/teamCard";
import teamData, { data, propertyList } from "../data/data";
import Testmonial from "./components/testmonial/testmonial";
import Footer from "./components/footer/footer";

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
            <div className="absolute my-16 ml-0 md:ml-10 z-[2]">
              <div className="col-span-12">
                <div className="flex flex-wrap">
                  <Image
                    src={"/images/about.jpg"}
                    alt={"about"}
                    width={500}
                    height={450}
                  />

                  <div className="flex flex-col justify-center md:ml-10 ml-0 space-y-6">
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
        {/* property card */}
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
        {/* cta */}
        <FadeUpOnScroll>
          <div className="grid grid-cols-12 mx-auto md:m-24 bg-[#effdf5] p-4 rounded-md  ">
            <div className="col-span-12  flex flex-wrap lg:flex-nowrap bg-white h-full  text-center p-4 border-dashed border mx-auto border-[#00B98E] rounded-md">
              <Image
                src={"/images/call-to-action.jpg"}
                alt={"call to action "}
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div className="ml-16 space-y-4 mt-12 text-start">
                <h1 className="font-semibold text-5xl  text-[#0e2e50]">
                  Contact With Our <br /> Certified Agent
                </h1>
                <p className="text-gray-500">
                  Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd
                  vero ipsum <br />
                  sit sit diam justo sed vero dolor duo.
                </p>
                <div className="flex  space-x-4">
                  <button className="flex text-white bg-[#00B98E] mt-10 rounded-md   hover:bg-[#00B95E] px-6 py-4">
                    <FaPhone size={20} className="mr-1" />
                    Make A Call
                  </button>
                  <button className="flex text-white bg-[#0e2e50] mt-10 rounded-md   hover:bg-[#0e2e60] px-6 py-4  ">
                    <FaCalendar size={20} className="mr-1" />
                    Get Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeUpOnScroll>
        {/* our team */}
        <FadeUpOnScroll>
          <div className="flex flex-col text-center space-y-5">
            <h1 className="text-5xl font-bold text-[#0e2e50] ">Our Team</h1>
            <p className="text-gray-500">
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd <br />
              vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor
              duo.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-around mx-20 my-11">
            {teamData.map(
              (item: {
                img: string;
                name: string;
                designation: string;
                facebook: string;
                instagram: string;
                twitter: string;
              }) => {
                return (
                  <TeamCard
                    key={item.name}
                    img={item.img}
                    name={item.name}
                    designation={item.designation}
                    facebook={item.facebook}
                    instagram={item.instagram}
                    twitter={item.twitter}
                  />
                );
              }
            )}
          </div>
        </FadeUpOnScroll>
        {/* testiminomials */}
        <FadeUpOnScroll>
          <div className="flex flex-col items-center justify-center mx-auto my-10 ">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-[#0e2e50]">
                Our Clients Say!
              </h1>
              <p className="text-gray-500">
                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                dolore lorem kasd <br /> vero ipsum sit eirmod sit. Ipsum diam
                justo sed rebum vero dolor duo.
              </p>
            </div>
            <Testmonial />
          </div>
        </FadeUpOnScroll>
        {/* footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
