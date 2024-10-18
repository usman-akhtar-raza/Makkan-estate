import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
function TeamCard({
  img,
  name,
  designation,
  facebook,
  instagram,
  twitter,
}: {
  img: string;
  name: string;
  designation: string;
  facebook: string;
  instagram: string;
  twitter: string;
}) {
  return (
    <>
      <div className="text-center shadow-2xl rounded-lg">
        <Image src={img} alt={""} width={250} height={400} />
        <div className="flex justify-center space-x-4 -mt-4">
          <div className="bg-white p-2 shadow-xl rounded-full">
            <Link href={twitter}>
              <FaTwitter color="#00B98E" />
            </Link>
          </div>
          <div className="bg-white  p-2 shadow-xl  rounded-full">
            <Link href={facebook}>
              <FaFacebookF color="#00B98E" />
            </Link>
          </div>
          <div className="bg-white  p-2 shadow-xl  rounded-full">
            <Link href={instagram}>
              <FaInstagram color="#00B98E" />
            </Link>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-gray-500">{designation}</p>
      </div>
    </>
  );
}
export default TeamCard;
