import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import mongoose from "mongoose";
import User from "@/app/models/User";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });
        if (!user) {
          console.log("email is not available");
        } else {
          console.log("email is available");
        }
        const isValidEmail =
          user && bcrypt.compareSync(password, user.password);
        if (!isValidEmail) {
          console.log("Invalid email");
        } else {
          console.log("Invalid email");
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
