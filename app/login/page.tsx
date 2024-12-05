"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { LoginForm } from "@/components/login-form";
import Image from "next/image";

import { redirect } from "next/navigation";

export default function Page() {
  const { data: session } = useSession();

  if (session) {
    redirect("/dashboard");
  }

  if (!session) {
    return (
      <div className="flex h-screen w-full items-center justify-center px-2 gap-4 ">
        <Image
          src={"/images/about.jpg"}
          alt={"Makkan Real estate"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[80%] h-screen hidden md:block"
        />
        <LoginForm />
      </div>
    );
  }
}
