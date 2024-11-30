"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import AddPropertyModal from "../addPropertyModal/propertyModal";
export default function Navbar() {
  const [isPropertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  // Handle scroll event to apply sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={`bg-white shadow-md h-[70px] px-4 md:px-12 z-[9999] ${
        isSticky
          ? "fixed top-0 left-0 w-full"
          : "relative mt-[30px] w-[90%] mx-auto"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/icon-deal.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold text-[#00B98E] ml-2">Makaan</span>
        </div>

        {/* Right: Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <HiX color={"#00B98E"} size={24} />
            ) : (
              <FaHome color={"#00B98E"} size={24} />
            )}
          </button>
        </div>

        {/* Middle: Links (Desktop) */}
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
                  transition={{ duration: 0.1 }}
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
                      href="/contact"
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

        {/* Right: Add Property Button (Desktop) */}
        <motion.div className="hidden md:block  " whileHover={{ scale: 1.05 }}>
          <button
            onClick={handleOpenModal}
            className="bg-[#00B98E] text-white px-4 py-2 rounded-md"
          >
            Add Property
          </button>
        </motion.div>
        <motion.div
          className="hidden md:block md:-ml-32 "
          whileHover={{ scale: 1.05 }}
        >
          <button className="bg-[#00B98E] text-white px-4 py-2 rounded-md">
            <Link href="/dashboard"> Dashboard</Link>
          </button>
        </motion.div>
      </div>

      <AddPropertyModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pt-4 pb-6 bg-white shadow-md space-y-4"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#00B98E] font-medium"
            >
              HOME
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 font-medium"
            >
              ABOUT
            </Link>
            <button
              className="w-full text-left text-gray-600 font-medium"
              onClick={() => setPropertyDropdownOpen(!isPropertyDropdownOpen)}
            >
              PROPERTY
            </button>
            <AnimatePresence>
              {isPropertyDropdownOpen && (
                <motion.div className="pl-4">
                  <Link
                    href="/property/houses"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600"
                  >
                    Houses
                  </Link>
                  <Link
                    href="/property/apartments"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600"
                  >
                    Apartments
                  </Link>
                  <Link
                    href="/property/commercial"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600"
                  >
                    Commercial
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className="w-full text-left text-gray-600 font-medium"
              onClick={() => setPagesDropdownOpen(!isPagesDropdownOpen)}
            >
              PAGES
            </button>
            <AnimatePresence>
              {isPagesDropdownOpen && (
                <motion.div className="pl-4">
                  <Link
                    href="/pages/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/pages/faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/pages/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 font-medium"
            >
              CONTACT
            </Link>
            <Link
              href="/add-property"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#00B98E] text-white px-4 py-2 rounded-md text-center"
            >
              Add Property
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
