import { SignUp } from "@/components/ui/sign-up";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-2 gap-4">
      <Image
        src="/images/about.jpg"
        alt="logo"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-screen hidden md:block"
      />
      <SignUp />
    </div>
  );
}
