function SearchBar() {
  return (
    <>
      <div className=" grid pl-5 lg:pl-10 lg:gap-0 gap-4 md:grid-cols-2 lg:grid-cols-4 bg-[#00B98E] py-10 mt-1">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Keyword"
            className="border-0 py-3 px-14 rounded-lg  col-span-12 md:col-span-4"
          />
        </div>
        <div>
          <select
            name=""
            id=""
            className="border-0 py-3 px-20  rounded-lg text-gray-500  col-span-12 md:col-span-4"
          >
            <option selected>Property Type</option>
            <option value="1">Property Type 1</option>
            <option value="2">Property Type 2</option>
            <option value="3">Property Type 3</option>
          </select>
        </div>
        <div>
          <select
            name=""
            id=""
            className="border-0 py-3 px-[6.1rem]  rounded-lg text-gray-500  col-span-12 md:col-span-4"
          >
            <option selected>Location</option>
            <option value="1">Location 1</option>
            <option value="2">Location 2</option>
            <option value="3">Location 3</option>
          </select>
        </div>
        <div>
          <button className="bg-[#0e2e50] text-white py-3 px-[122px]  rounded-lg col-span-12 md:col-span-4           ">
            Search{" "}
          </button>
        </div>
      </div>
    </>
  );
}
export default SearchBar;
