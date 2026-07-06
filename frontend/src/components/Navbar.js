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
    <nav className="sticky top-0 z-50 w-full bg-[#050409]/80 backdrop-blur-md border-b border-purple-950/40 px-8 py-4 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      
      {/* Decorative background glow accent line right under border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent pointer-events-none" />

      {/* Brand Identification Anchor Link */}
      <Link
        href="/"
        className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-purple-400 to-purple-600 hover:opacity-90 transition-opacity drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] font-mono uppercase"
      >
        Spectre-Hub
      </Link>

      {/* Interactive Interface Controls */}
      <div className="flex items-center gap-8 text-sm font-mono tracking-wider">
        <Link
          href="/"
          className="relative text-zinc-400 hover:text-purple-300 transition-colors duration-200 py-1 group"
        >
          <span>HOME</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
        </Link>

        <Link
          href="/profile"
          className="relative text-zinc-400 hover:text-purple-300 transition-colors duration-200 py-1 group"
        >
          <span>PROFILE</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
        </Link>

        {/* Tactical Deprovisioning Action Controller */}
        <button
          onClick={handleLogout}
          className="relative overflow-hidden rounded-xl border border-red-950 bg-gradient-to-b from-red-950/20 to-red-950/60 px-5 py-2 text-xs font-bold text-red-400 tracking-widest hover:text-red-200 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300 group"
        >
          <span className="absolute inset-0 w-full h-full bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          DISCONNECT
        </button>
      </div>

    </nav>
  );
}