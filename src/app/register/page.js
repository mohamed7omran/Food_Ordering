"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const RegisterPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, userName }),
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  };
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.
          <br />
          Now you can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.
          <br />
          Please try again later
        </div>
      )}
      <form onSubmit={handleSubmit} className="block max-w-xs mx-auto">
        <input
          type="text"
          value={userName}
          disabled={creatingUser}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          disabled={creatingUser}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link className="underline" href={"/login"}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
