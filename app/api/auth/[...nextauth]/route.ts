import  NextAuth  from "next-auth";
import { AuthOptions } from "./option";
const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST };
