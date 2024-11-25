'use client'
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-gray-100 h-screen ${
        isOpen ? "w-64" : "w-16"
      } transition-all`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 focus:outline-none"
      >
        <span className="material-icons">menu</span>
      </button>
      <ul className="mt-4 space-y-4 text-sm">
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Dashboard</li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Post Listing</li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer">
          Property Management
        </li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Inbox</li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
