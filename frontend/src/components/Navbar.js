"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

import { auth } from "@/services/firebase";

export default function Navbar() {

  const router = useRouter();

  const handleLogout = async () => {

    await signOut(auth);

    toast.success("Logged Out");

    router.push("/login");

  };

  return (

    <nav className="flex items-center justify-between bg-zinc-900 px-8 py-4 border-b border-zinc-800">

      <Link
        href="/"
        className="text-2xl font-bold text-purple-500"
      >
        Spectre-Hub
      </Link>

      <div className="flex items-center gap-6">

        <Link
          href="/"
          className="text-white hover:text-purple-400"
        >
          Home
        </Link>

        <Link
          href="/profile"
          className="text-white hover:text-purple-400"
        >
          Profile
        </Link>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Logout
        </button>

      </div>

    </nav>

  );

}