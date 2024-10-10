import { FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import Link from "next/link";
import FadeLeftOnScroll from "../fadeLeftOnScroll/fadeLeftOnScroll";

function PropertyCard({
  price,
  status,
  category,
  location,
  url,
}: {
  price: number;
  status: string;
  category: string;
  location: string;
  url: string;
}) {
  return (
    <FadeLeftOnScroll>

      <div className="w-[350px] space-y-4 rounded-lg shadow-xl cursor-pointer [&>div>img]:hover:scale-105 overflow-hidden  ">
        <div className="overflow-hidden">
          <img
            src={url}
            alt=""
            className="transition-all duration-500 overflow-hidden"
          />
          <button className="bg-[#00B98E] px-4 py-1 text-white absolute -mt-48 rounded-lg ml-5">
            {status}
          </button>
          <button className="bg-white py-2 px-4 relative -top-9 left-0 rounded-t-lg ml-5 text-[#00B98E]">
            {category}
          </button>
        </div>
        <div className="pl-4">
          <h1 className="text-[#00B98E]">${price}</h1>
          <h1 className="hover:text-[#00B98E] text-xl font-bold">
            <Link href={""}>Golden Urban House For Sell</Link>
          </h1>
          <p className="flex">
            {" "}
            <span className="text-[#00B98E]">
              <FaMapMarkerAlt />
            </span>{" "}
            {location}
          </p>
        </div>
        <div className="flex space-x-4 border-dashed border-t border-[#00B98E]">
          <p className="flex border-dashed border-r border-[#00B98E] px-2">
            <span className="text-[#00B98E] ">
              <MdSquareFoot />
            </span>
            1000 Sqft
          </p>
          <p className="flex">
            <span className="text-[#00B98E] px-2">
              <FaBed />
            </span>
            3 Bed
          </p>
          <p className="flex border-dashed border-l border-[#00B98E] px-2">
            <span className="text-[#00B98E]">
              <FaBath />
            </span>
            2 Bath
          </p>
        </div>
      </div>
      </FadeLeftOnScroll>
  );
}
export default PropertyCard;
