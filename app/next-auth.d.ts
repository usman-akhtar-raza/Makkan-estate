import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    User_ID: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Pasword: string;
  }
  interface session {
    user: { User_ID?: string; Email: string } & DefaultSession["user"];
  }
  interface jwt {
    User_ID?: string;
    Email: string;
  }
}

export type PagesOptions = {
  signIn?: string;
  signOut?: string;
  error?: string;
  verifyRequest?: string;
  newUser?: string;
  dashboard?: string;
};