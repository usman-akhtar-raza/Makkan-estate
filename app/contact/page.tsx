"use client";

import Nav from "../components/nav/nav";
import Header from "../components/header/header";

import SearchBar from "../components/searchBar/searchBar";
import FadeUpOnScroll from "../components/fadeUpOnScroll/fadeUpOnscroll";

import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="">
        <Nav />
        <Header />
        <FadeUpOnScroll>
          <SearchBar />
        </FadeUpOnScroll>
        {/* contact page content */}
        <div className="flex flex-col items-center py-8 px-4 space-y-6 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-center max-w-md text-gray-600">
            Limited text goes here for intro or instructions. You can add
            additional details to guide users on how to contact.
          </p>

          {/* Contact Info Section */}
          <div className="flex space-x-4 justify-center">
            <div className="col-span-12  bg-[#effdf5] p-4 rounded-md ml-8 sm:ml-0 w-[300px] md:w-[400px] cursor-pointer">
              <div className="flex flex-col space-y-4 justify-center items-center  bg-white p-4 border-dashed border mx-auto border-[#00B98E] rounded-md">
                <span className="block font-semibold text-gray-700">
                  📍 Location
                </span>
                <p className="text-sm text-gray-600">123 St, New York, USA</p>
              </div>
            </div>
            <div className="col-span-12  bg-[#effdf5] p-4 rounded-md ml-8 sm:ml-0 w-[300px] md:w-[400px] cursor-pointer">
              <div className="flex flex-col space-y-4 justify-center items-center  bg-white p-4 border-dashed border mx-auto border-[#00B98E] rounded-md">
                <span className="block font-semibold text-gray-700">
                  📧 Email
                </span>
                <p className="text-sm text-gray-600">info@company.com</p>
              </div>
            </div>
            <div className="col-span-12  bg-[#effdf5] p-4 rounded-md ml-8 sm:ml-0 w-[300px] md:w-[400px] cursor-pointer">
              <div className="flex flex-col space-y-4 justify-center items-center  bg-white p-4 border-dashed border mx-auto border-[#00B98E] rounded-md">
                <span className="block font-semibold text-gray-700">
                  📞 Phone
                </span>
                <p className="text-sm text-gray-600">+1 234 567 890</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Map Embed */}
            <div className="w-full max-w-lg h-[370px] bg-white rounded overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>

            {/* Contact Form */}
            <form className="w-full max-w-lg bg-white p-6 rounded shadow-md space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 border border-gray-300 rounded h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
