"use client";
import teamData from "@/data/data";
import Nav from "../components/nav/nav";
import Header from "../components/header/header";
import Image from "next/image";
import SearchBar from "../components/searchBar/searchBar";
import FadeUpOnScroll from "../components/fadeUpOnScroll/fadeUpOnscroll";
import { FaCheck, FaPhone, FaCalendar } from "react-icons/fa";
import Footer from "../components/footer/footer";
import TeamCard from "../components/teamCard/teamCard";

export default function Home() {
  return (
    <>
      <div className="">
        <Nav />
        <Header />
        <FadeUpOnScroll>
          <SearchBar />
        </FadeUpOnScroll>
        {/* about start */}
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

        {/* cta */}
        <FadeUpOnScroll>
          <div className="grid grid-cols-12  md:m-24 bg-[#effdf5] p-2 sm:p-4 rounded-md mt-96 sm:mt-0">
            <div className="col-span-12  flex flex-wrap lg:flex-nowrap bg-white h-full  text-center p-4 border-dashed border mx-auto border-[#00B98E] rounded-md">
              <Image
                src={"/images/call-to-action.jpg"}
                alt={"call to action "}
                width={500}
                height={500}
                className="rounded-lg w-[300px] sm:w-full"
              />
              <div className="sm:ml-16 space-y-4 mt-12 text-start">
                <h1 className="font-semibold text-xl sm:text-5xl  text-[#0e2e50]">
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
        {/* footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
