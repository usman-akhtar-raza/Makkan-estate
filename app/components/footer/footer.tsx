import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaInbox,
  FaAngleRight,
} from "react-icons/fa";


function Footer() {
  return (
    <>
      <div className="bg-[#0e2e50] text-white py-10 space-y-8">
        <div className="px-10 flex justify-around flex-wrap ">
          {/* Location and mail */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold ">Get In Touch</h1>
            <ul>
              <li className="flex text-gray-500 items-center ">
                <FaMapMarkerAlt color="gray" className="mr-6" />
                123 Street, New York, USA
              </li>
              <li className="flex text-gray-500 items-center ">
                <FaPhone color="gray" className="mr-6" />
                +012 345 67890
              </li>
              <li className="flex text-gray-500 items-center ">
                <FaInbox color="gray" className="mr-6" />
                info@example.com
              </li>
            </ul>
            <div className="flex space-x-5">
              <div className="bg-[#0e2e50] border  p-2 shadow-xl  rounded-full">
                <Link href={"/"}>
                  <FaFacebook />
                </Link>
              </div>
              <div className="bg-[#0e2e50] border  p-2 shadow-xl  rounded-full">
                <Link href={"/"}>
                  <FaLinkedin />
                </Link>
              </div>
              <div className="bg-[#0e2e50] border  p-2 shadow-xl  rounded-full">
                <Link href={"/"}>
                  <FaTwitter />
                </Link>
              </div>
              <div className="bg-[#0e2e50] border  p-2 shadow-xl  rounded-full">
                <Link href={"/"}>
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-5">
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <ul>
              <li className=" text-gray-500">
                <Link
                  href={"/"}
                  className="flex items-center hover:tracking-wider transition-all duration-100 font-semibold"
                >
                  <FaAngleRight className="mr-4" />
                  About Us
                </Link>
              </li>
              <li className=" text-gray-500">
                <Link
                  href={"/"}
                  className="flex items-center hover:tracking-wider transition-all duration-100 font-semibold"
                >
                  <FaAngleRight className="mr-4" />
                  Contact US
                </Link>
              </li>
              <li className=" text-gray-500">
                <Link
                  href={"/"}
                  className="flex items-center hover:tracking-wider transition-all duration-100 font-semibold"
                >
                  <FaAngleRight className="mr-4" />
                  Our Services
                </Link>
              </li>
              <li className=" text-gray-500">
                <Link
                  href={"/"}
                  className="flex items-center hover:tracking-wider transition-all duration-100 font-semibold"
                >
                  <FaAngleRight className="mr-4" />
                  Privacy Policy
                </Link>
              </li>
              <li className=" text-gray-500 w-48">
                <Link
                  href={"/"}
                  className="flex items-center hover:tracking-wider transition-all duration-100 font-semibold"
                >
                  <FaAngleRight className="mr-4" />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* Galary */}
          <div className="grid grid-cols-3 gap-x-2 gap-y-2 h-[100px]">
            <Image
              src={"/images/property-1.jpg"}
              alt={""}
              width={80}
              height={80}
              className="border-2 border-white rounded-lg"
            />
            <Image
              src={"/images/property-2.jpg"}
              alt={""}
              width={80}
              height={80}
              className="border-2 border-white rounded-lg"
            />
            <Image
              src={"/images/property-3.jpg"}
              alt={""}
              width={80}
              height={80}
              className="border-2 border-white rounded-lg"
            />
            <Image
              src={"/images/property-4.jpg"}
              alt={""}
              width={80}
              height={80}
              className="border-2 border-white rounded-lg"
            />
            <Image
              src={"/images/property-5.jpg"}
              alt={""}
              width={80}
              height={80}
              className="border-2 border-white rounded-lg"
            />
            <Image
              src={"/images/property-6.jpg"}
              alt={""}
              width={80}
              height={80}
              className="border-2 border-white rounded-lg"
            />
          </div>
          {/* NewsLetter */}
          <div className="w-[300px] space-y-5">
            <h1 className=" text-2xl font-semibold"> NewsLetter</h1>
            <p className="text-gray-500">
              Dolor amet sit justo amet elitr clita <br />
              ipsum elitr est.
            </p>
            <div className="border rounded-lg  px-2 py-3 ">
              <input
                type="email"
                name=""
                id=""
                placeholder="Your Email"
                className="border-0 bg-transparent"
              />

              <button className="bg-[#00B98E] text-white px-5 py-2 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="mx-16  h-[1px] bg-gray-600 "></div>
        {/* copy rights wala footer */}
        <div className="flex justify-between px-20">
          <p>© 2022 Makaan. All rights reserved.</p>
          <div className="flex space-x-4">
            <div className=" border-r-2 border-gray-500 px-5">Home</div>
            <div className=" border-r-2 border-gray-500 px-5">Cookies</div>
            <div className=" border-r-2 border-gray-500 px-5">Help</div>
            <div className=" ">FAQs</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
