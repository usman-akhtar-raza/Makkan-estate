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

export function SignUp() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          <div className="flex justify-around text-[#00B98E]">
            Create an account
            <Image
              src={"/images/logo.png"}
              alt={"logo"}
              width={30}
              height={30}
            />
          </div>
        </CardTitle>
        <CardDescription>Enter the following details of you </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2 grid-cols-2">
            <div className="grid gap-2 ">
              <Label htmlFor="First-name">First Name</Label>
              <Input
                id="First-name"
                type="text"
                placeholder="jhon doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="Last-name">Last Name</Label>
              <Input
                id="Last-name"
                type="text"
                placeholder="jhon doe"
                required
              />
            </div>
          </div>
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
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#00B98E] hover:bg-[#00B99E]"
          >
            Sign Up
          </Button>
          <Button variant="outline" className="w-full ">
            <Image
              src={"/images/google icon.png"}
              width={30}
              height={30}
              alt={""}
              className="rounded-full"
            />{" "}
            Sign Up with Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
