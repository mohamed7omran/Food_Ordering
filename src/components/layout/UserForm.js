"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const UserForm = () => {
  const session = useSession();
  const { status } = session;
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.username);
    }
  }, [session, status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName }),
    });
  };
  return (
    <>
      <div></div>
      <form onSubmit={handleSubmit} className="grow">
        <label>First and last name</label>
        <input
          type="text"
          onChange={(ev) => setUserName(ev.target.value)}
          value={userName}
          placeholder="First and last name"
        />
        <label>Email</label>
        <input
          type="email"
          disabled={true}
          value={session.data?.user?.email}
          placeholder={"email"}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default UserForm;
