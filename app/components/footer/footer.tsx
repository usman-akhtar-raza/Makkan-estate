function Footer() {
  return (
    <>
      <div className="bg-[#0e2e50] text-white h-96 space-y-8">
        <div className="flex justify-around flex-wrap ">
          <div>
            <ul>
              <li>i am list</li>
              <li>i am list</li>
              <li>i am list</li>
              <li>i am list</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>i am also list</li>
              <li>i am also list</li>
              <li>i am also list</li>
              <li>i am also list</li>
              <li>i am also list</li>
              <li>i am also list</li>
            </ul>
          </div>
          <div>i am galary</div>
          <div> newsletter</div>
        </div>
        <div className="mx-20  h-[1px] bg-gray-400 "></div>
        <div className="flex justify-between px-20">
          <p>© 2022 Makaan. All rights reserved.</p>
          <div className="flex space-x-4">
            <div className=" border-r-2 border-gray-500 px-5">home</div>
            <div className=" border-r-2 border-gray-500 px-5">cookies</div>
            <div className=" border-r-2 border-gray-500 px-5">help</div>
            <div className=" ">FAQ's</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
