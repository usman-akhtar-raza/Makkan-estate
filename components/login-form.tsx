import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm border-[#00B98E]">
      <CardHeader>
        <CardTitle className="text-2xl">
          <div className="flex justify-around text-[#00B98E]">
            Makkan Real Estate
            <Image
              src={"/images/logo.png"}
              alt={"logo"}
              width={30}
              height={30}
            />
          </div>
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#00B98E] hover:bg-[#00B10E]"
          >
            Login
          </Button>
          <Button variant="outline" className="w-full">
            <Image
              src={"/images/google icon.png"}
              alt={""}
              className="rounded-full"
              width={30}
              height={30}
            />
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
