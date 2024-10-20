import Image from "next/image";

function TestiminomialCard({
  url,
  name,
  profession,
  comment,
}: {
  url: string;
  name: string;
  profession: string;
  comment: string;
}) {
  return (
    <>
      <div className="col-span-12  bg-[#effdf5] p-4 rounded-md ml-8 sm:ml-0 w-[300px] md:w-[400px] cursor-pointer">
        <div className="flex flex-col space-y-4 justify-center items-center  bg-white p-4 border-dashed border mx-auto border-[#00B98E] rounded-md">
          <p>
            {comment}
            <br />
          </p>
          <div className="flex self-start">
            <Image src={url} alt="client" width={30} height={30} />
            <div className="ml-3">
              <h1>{name}</h1>
              <p>{profession}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TestiminomialCard;
