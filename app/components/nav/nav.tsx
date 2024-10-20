// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isPropertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
//   const [isPagesDropdownOpen, setPagesDropdownOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   // Handle scroll event to apply sticky class
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 45) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     // Attach the event listener for scroll
//     window.addEventListener("scroll", handleScroll);

//     // Clean up the event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`bg-white shadow-md px-12 transition-all duration-300 z-[9999] ${
//         isSticky
//           ? "fixed top-0 left-0 w-full"
//           : "relative mt-[45px] w-[90%] mx-auto"
//       }`}
//     >
//       <div className=" container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Left: Logo */}
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center">
//             <img
//               src="/images/icon-deal.png"
//               alt="Logo"
//               className="h-8 w-8"
//             />
//             <span className="text-xl font-bold text-[#00B98E] ml-2">
//               Makaan
//             </span>
//           </div>
//         </div>

//         {/* Middle: Links */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <Link
//             href="/"
//             className="text-[#00B98E] font-medium hover:text-[#00B98E]"
//           >
//             HOME
//           </Link>
//           <Link
//             href="/about"
//             className="text-gray-600 font-medium hover:text-[#00B98E]"
//           >
//             ABOUT
//           </Link>

//           {/* Property Dropdown */}
//           <div className="relative">
//             <button
//               className="text-gray-600 font-medium hover:text-[#00B98E]"
//               onClick={() => setPropertyDropdownOpen(!isPropertyDropdownOpen)}
//             >
//               PROPERTY <span>▼</span>
//             </button>
//             {isPropertyDropdownOpen && (
//               <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                 <div className="py-1">
//                   <Link
//                     href="/property/houses"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Houses
//                   </Link>
//                   <Link
//                     href="/property/apartments"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Apartments
//                   </Link>
//                   <Link
//                     href="/property/commercial"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Commercial
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Pages Dropdown */}
//           <div className="relative">
//             <button
//               className="text-gray-600 font-medium hover:text-[#00B98E]"
//               onClick={() => setPagesDropdownOpen(!isPagesDropdownOpen)}
//             >
//               PAGES <span>▼</span>
//             </button>
//             {isPagesDropdownOpen && (
//               <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                 <div className="py-1">
//                   <Link
//                     href="/pages/blog"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Blog
//                   </Link>
//                   <Link
//                     href="/pages/faq"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     FAQ
//                   </Link>
//                   <Link
//                     href="/pages/contact"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Contact Us
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link
//             href="/contact"
//             className="text-gray-600 font-medium hover:text-[#00B98E]"
//           >
//             CONTACT
//           </Link>
//         </div>

//         {/* Right: Add Property Button */}
//         <div>
//           <Link
//             href="/add-property"
//             className="bg-[#00B98E] text-white px-4 py-2 rounded-md hover:bg-[#00B98E]"
//           >
//             Add Property
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isPropertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event to apply sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={`bg-white shadow-md px-12 z-[9999] ${
        isSticky
          ? "fixed top-0 left-0 w-full"
          : "relative mt-[45px] w-[90%] mx-auto"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Image src="/images/icon-deal.png" alt="Logo" width={32} height={32} />
            <span className="text-xl font-bold text-[#00B98E] ml-2">
              Makaan
            </span>
          </div>
        </div>

        {/* Middle: Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="text-[#00B98E] font-medium hover:text-[#00B98E]"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-gray-600 font-medium hover:text-[#00B98E]"
          >
            ABOUT
          </Link>

          {/* Property Dropdown */}
          <div className="relative">
            <button
              className="text-gray-600 font-medium hover:text-[#00B98E]"
              onClick={() => setPropertyDropdownOpen(!isPropertyDropdownOpen)}
            >
              PROPERTY <span>▼</span>
            </button>
            <AnimatePresence>
              {isPropertyDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.1 }}
                  className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1">
                    <Link
                      href="/property/houses"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Houses
                    </Link>
                    <Link
                      href="/property/apartments"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Apartments
                    </Link>
                    <Link
                      href="/property/commercial"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Commercial
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              className="text-gray-600 font-medium hover:text-[#00B98E]"
              onClick={() => setPagesDropdownOpen(!isPagesDropdownOpen)}
            >
              PAGES <span>▼</span>
            </button>
            <AnimatePresence>
              {isPagesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1">
                    <Link
                      href="/pages/blog"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/pages/faq"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/pages/contact"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            className="text-gray-600 font-medium hover:text-[#00B98E]"
          >
            CONTACT
          </Link>
        </div>

        {/* Right: Add Property Button */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/add-property"
            className="bg-[#00B98E] text-white px-4 py-2 rounded-md"
          >
            Add Property
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
