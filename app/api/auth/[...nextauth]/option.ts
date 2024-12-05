import  { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Call your Nest.js API endpoint for login
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/validate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        const userData = await response.json();

        // Return the user data with the correct property names
        return {
          User_ID: userData.User_ID,
          FirstName: userData.FirstName,
          LastName: userData.LastName,
          Email: userData.Email,
          Pasword: userData.Pasword,
          id: userData.User_ID,
          name: `${userData.FirstName} ${userData.LastName}`,
          email: userData.Email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session.user as { User_ID: string; Email: string }).User_ID =
          token.id as string;
        (session.user as { User_ID: string; Email: string }).Email =
          token.email as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
