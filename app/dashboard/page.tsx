// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const SellerDashboard = () => {
//   const [properties, setProperties] = useState([]);
//   const [form, setForm] = useState({ title: '', price: '', description: '' });

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     const response = await axios.get('/api/properties/1'); // Replace with sellerId dynamically
//     setProperties(response.data);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await axios.post('/api/properties', form);
//     fetchProperties();
//   };

//   const handleDelete = async (id: number) => {
//     await axios.delete(`/api/properties/${id}`);
//     fetchProperties();
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           className="border p-2 mb-2 w-full"
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           className="border p-2 mb-2 w-full"
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           className="border p-2 mb-2 w-full"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2">
//           Add Property
//         </button>
//       </form>
//       {/* <ul>
//         {properties.map((property) => (
//             <li>
//                 <h1>hello</h1>
//             </li>
//           <li key={property.id} className="border p-4 mb-2">
//             <h2 className="text-lg font-bold">{property.title}</h2>
//             <p>{property.description}</p>
//             <p>${property.price}</p>
//             <button
//               onClick={() => handleDelete(property.id)}
//               className="bg-red-500 text-white px-2 py-1 mt-2"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default SellerDashboard;

// import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
// import Dashboard from '../components/Dashboard';

"use client";
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/navbar";
import Dashboard from "../components/dashboard/dasboard";
import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
const DashboardPage = () => {
  const { data: session } = useSession();
  // if (!session) {
  //   redirect("/login" );
  // }

  console.log(session);
  if (!session) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    );
  }
};

export default DashboardPage;
