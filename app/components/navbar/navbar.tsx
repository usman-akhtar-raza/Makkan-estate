import Link from "next/link";

const Navbar = () => {
    return (
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Profolio</h1>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-semibold">My Listings</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded"><Link href="/">Post Listing</Link></button>
          <span className="material-icons cursor-pointer">account_circle</span>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  