"use client";
import Image from "next/image";
import Link from "next/link";
const LoginPage = () => {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
        <form className="max-w-xs mx-auto">
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button type="submit">Login</button>
          <div className="my-4 text-center text-gray-500">
            or login with provider
          </div>
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex gap-4 justify-center"
          >
            <Image src={"/google.png"} alt={""} width={24} height={24} />
            Login with google
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
