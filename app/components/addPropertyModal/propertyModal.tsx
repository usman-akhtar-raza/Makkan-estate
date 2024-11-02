// components/Modal.js
import React, { useEffect } from "react";

const AddPropertyModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    // Disable scrolling when the modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="absolute -top-6  inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl h-screen  ">
      <div className="bg-white  p-5 rounded-md shadow-lg max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-3xl text-white hover:text-gray-800"
        >
          ×
        </button>
        <form className="bg-[#00B98E] text-white p-2 ">
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <input type="text" name="status" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input type="file" name="image" />
          </div>
          <button type="submit">Add Property</button>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyModal;
