// "use client";
// import { useState } from "react";
// import {
//   FaAddressBook,
//   FaDashcube,
//   FaHamburger,
//   FaInbox,
//   FaLocationArrow,
// } from "react-icons/fa";
// import { FaHouseMedical } from "react-icons/fa6";
// import { IoSettingsOutline } from "react-icons/io5";
// import { TiThMenu } from "react-icons/ti";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className={`bg-gray-100 h-screen  ${
//         isOpen ? "w-64" : "w-12"
//       } transition-all`}
//     >
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-4 focus:outline-none"
//       >
//         <span className="material-icons">
//           <TiThMenu />
//         </span>
//       </button>
//       <ul className="mt-4 space-y-4 text-sm">
//         <li className="p-2 hover:bg-gray-200 cursor-pointer flex  justify-between items-center ">
//           <FaDashcube />
//           <p className={isOpen ? "" : "hidden"}> Dashboard</p>
//         </li>
//         <li className="p-2 hover:bg-gray-200 cursor-pointer flex  justify-between items-center ">
//           <FaLocationArrow />
//           <p className={isOpen ? "" : "hidden"}> Post Listing</p>
//         </li>
//         <li className="p-2 hover:bg-gray-200 cursor-pointer flex  justify-between items-center ">
//           <FaHouseMedical />
//           <p className={isOpen ? "" : "hidden"}>Property Management</p>
//         </li>
//         <li className="p-2 hover:bg-gray-200 cursor-pointer flex  justify-between items-center ">
//           <FaInbox />
//           <p className={isOpen ? "" : "hidden"}>Inbox</p>
//         </li>
//         <li className="p-2 hover:bg-gray-200 cursor-pointer flex  justify-between items-center ">
//           <IoSettingsOutline />
//           <p className={isOpen ? "" : "hidden"}>Settings</p>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
"use client";
import { useState } from "react";
import { FaDashcube, FaLocationArrow, FaInbox } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FaHouseMedical } from "react-icons/fa6";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 fixed top-3 left-4 z-50  text-green-500 rounded-md focus:outline-none"
      >
        <TiThMenu className="text-2xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed bg-gray-100 text-green-500 z-40 transform transition-transform ${
          isOpen
            ? "translate-x-0 md:translate-y-0 h-screen"
            : "-translate-x-full md:-translate-y-full"
        } h-screen w-64 md:w-64 md:h-screen md:left-0 md:top-0`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 text-gray-600 focus:outline-none absolute top-4 right-4"
        >
          ✕
        </button>

        <ul className="mt-12 space-y-4 text-sm p-4">
          <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
            <FaDashcube />
            <span><Link href="/">Dashboard</Link></span>
          </li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
            <FaLocationArrow />
            <span>Post Listing</span>
          </li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
            <FaHouseMedical />
            <span>Property Management</span>
          </li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
            <FaInbox />
            <span>Inbox</span>
          </li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
            <IoSettingsOutline />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </div>
  );
};

export default Sidebar;
