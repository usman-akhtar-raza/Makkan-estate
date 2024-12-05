// // components/Modal.js
// import React, { useEffect } from "react";

// const AddPropertyModal = ({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) => {
//   useEffect(() => {
//     // Disable scrolling when the modal is open
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     // Cleanup on component unmount
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);
//   if (!isOpen) return null;

//   return (
//     <div className="absolute -top-6  inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl h-screen  ">
//       <div className="bg-white  p-5 rounded-md shadow-lg max-w-sm w-full">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-3xl text-white hover:text-gray-800"
//         >
//           ×
//         </button>
//         <form className="bg-[#00B98E] text-white p-2 ">
//           <div>
//             <label htmlFor="price">Price</label>
//             <input type="number" name="price" />
//           </div>
//           <div>
//             <label htmlFor="status">Status</label>
//             <input type="text" name="status" />
//           </div>
//           <div>
//             <label htmlFor="category">Category</label>
//             <input type="text" name="category" />
//           </div>
//           <div>
//             <label htmlFor="location">Location</label>
//             <input type="text" name="location" />
//           </div>
//           <div>
//             <label htmlFor="image">Image</label>
//             <input type="file" name="image" />
//           </div>
//           <button type="submit">Add Property</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddPropertyModal;
import React, { useEffect, useState } from "react";

const AddPropertyModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    Price: "",
    Status: "",
    Category: "",
    Location: "",
    Image: null as File | null, // For file input
  });

  const [loading, setLoading] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "Image" && files) {
      setFormData((prev) => ({ ...prev, Image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create FormData to handle file uploads
    const data = new FormData();
    data.append("Price", formData.Price);
    data.append("Status", formData.Status);
    data.append("Category", formData.Category);
    data.append("Location", formData.Location);

    // Append image if it exists
    if (formData.Image) {
      data.append("Image", formData.Image);
    }

    try {
      const response = await fetch("http://localhost:3006/house", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to add property");
      }

      const result = await response.json();
      console.log("Property added successfully:", result);

      // Reset form data after successful submission
      setFormData({
        Price: "",
        Status: "",
        Category: "",
        Location: "",
        Image: null,
      });
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error adding property:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute -top-6 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl h-screen">
      <div className="bg-white p-5 rounded-md shadow-lg max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-3xl text-white hover:text-gray-800"
        >
          ×
        </button>
        <form
          className="bg-[#00B98E] text-center space-y-2  text-black p-2"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between">
            <label htmlFor="Price">Price</label>
            <input
              className="text-black rounded-lg px-6"
              placeholder="Price"
              type="number"
              name="Price"
              value={formData.Price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="Status">Status</label>
            <input
              className="text-black rounded-lg px-6"
              placeholder=""
              type="text"
              name="Status"
              value={formData.Status}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="Category">Category</label>
            <input
              className="text-black rounded-lg px-6"
              type="text"
              name="Category"
              value={formData.Category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="Location">Location</label>
            <input
              className="text-black rounded-lg px-6"
              type="text"
              name="Location"
              value={formData.Location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="Image">Image</label>
            <input
              type="file"
              name="Image"
              accept="image/*"
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-white text-[#00B98E] px-4 py-2 rounded-md"
          >
            {loading ? "Adding..." : "Add Property"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyModal;
