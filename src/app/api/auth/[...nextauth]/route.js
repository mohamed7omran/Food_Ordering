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
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const email = credentials.email;
        const password = credentials.password;
        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });
        const isValidEmail =
          user && bcrypt.compareSync(password, user.password);
        if (!isValidEmail) {
          console.log("Invalid email");
        } else {
          return {
            id: user._id,
            email: user.email,
            username: user.userName,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Attach username to the session object
      session.user.username = token.username;
      session.user.email = token.email;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
