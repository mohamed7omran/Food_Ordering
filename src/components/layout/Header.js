"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const session = useSession();
  console.log(session);
  const status = session.status;
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
          MSO PIZZA
        </Link>
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === "authenticated" && (
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="bg-primary rounded-full text-white px-8 py-2"
          >
            Logout
          </button>
        )}
        {status !== "authenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              className="bg-primary rounded-full text-white px-8 py-2"
              href={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
