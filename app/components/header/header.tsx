
import Carousel from "../carousel/carousel";


function Header({}) {
  return (
    <>
      <main>
        <div className="grid grid-cols-12 gap-4">
          {/* Left column: Heading, subtitle, and button */}
          <div className=" col-span-12 md:col-span-6  mx-20 mt-12">
            <h1 className="text-[#0e2e50] animate-fade text-4xl font-extrabold">
              Find A{" "}
              <span className=" text-[#00B98E] animate-fade">Perfect Home</span>{" "}
              To Live With Your Family
            </h1>
            <p className="animate-fade text-lg text-gray-600 mt-2">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p>
            <button className="animate-fade mt-4 px-6 py-4 bg-[#00B98E] text-white rounded hover:bg-[#2fe7bc]">
              Get Started
            </button>
          </div>

          {/* Right column: Image */}
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <Carousel />
          </div>
          
        </div>
      </main>
    </>
  );
}
export default Header;
