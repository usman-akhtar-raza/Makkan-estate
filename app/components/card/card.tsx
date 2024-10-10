import Image from "next/image";
import  FadeLeftOnScroll  from "../fadeLeftOnScroll/fadeLeftOnScroll";
function Card({
  url,
  title,
  subtitle,
}: {
  url: string;
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <FadeLeftOnScroll>
        <div className="col-span-12  bg-[#effdf5] p-4 rounded-md w-full h-[200px]  [&>div]:hover:bg-[#00B98E] [&>div]:hover:text-white [&>div>p]:hover:text-white cursor-pointer">
          <div className="bg-white h-full [&>p]:text-green-600  text-center p-4 border-dashed border mx-auto border-[#00B98E] rounded-md">
            <Image
              src={url}
              alt="img"
              width={50}
              height={50}
              className="bg-white p-1 border-dashed border mx-auto border-[#00B98E] rounded-full"
            />
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="">{subtitle}</p>
          </div>
        </div>
      </FadeLeftOnScroll>
    </>
  );
}
export default Card;
