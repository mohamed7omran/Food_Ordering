"use client";
import { useSession } from "next-auth/react";
import UserForm from "@/components/layout/UserForm";
const ProfilePage = () => {
  const session = useSession();
  const { status } = session;

  if (status === "loading") {
    return "loading...";
  }
  if (status === "unauthenticated") {
    window.location.href = "/login";
  }

  return (
    <section className="mt-8">
      <div className="max-w-xl mx-auto mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
        <UserForm />
      </div>
    </section>
  );
};

export default ProfilePage;
