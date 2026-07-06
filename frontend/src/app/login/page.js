"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import toast from "react-hot-toast";

import { auth } from "@/services/firebase";

import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("Welcome Back!");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050409] px-4 relative overflow-hidden selection:bg-purple-900 selection:text-purple-200">
      
      {/* Immersive Gothic Atmospheric Glow Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-fuchsia-950/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Styled 3D Isometric / Glitch Shape Container */}
      <div 
        style={{ clipPath: "polygon(0% 0%, 100% 2%, 98% 97%, 2% 100%)" }}
        className="w-full max-w-md bg-gradient-to-br from-zinc-950 via-[#100b1a] to-black border-2 border-zinc-900/80 p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] relative overflow-hidden"
      >
        
        {/* Ambient Corner Glow Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl pointer-events-none" />


        {/* Header Block */}
        <div className="mb-10 text-center relative">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-purple-400 font-bold">Secure Gateway</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-purple-400 to-purple-600 drop-shadow-[0_0_15px_rgba(168,85,247,0.35)] uppercase font-mono">
            Spectre-Hub
          </h1>
          
          <p className="mt-2 text-sm font-mono tracking-wide text-zinc-500 uppercase">
            Initialize Access Session
          </p>
        </div>

        {/* Authentication Form Block */}
        <form
          onSubmit={handleLogin}
          className="space-y-6 relative"
        >
          {/* Form input elements contained cleanly inside customizable component slots */}
          <div className="group relative transition-all duration-300">
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="group relative transition-all duration-300">
            <InputField
              type="password"
              placeholder="Password Key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Action trigger customized to inherit interactive gradient states */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
            >
              <span className="font-mono tracking-[0.2em] uppercase font-black text-sm text-zinc-100">
                {loading ? "ESTABLISHING LINK..." : "LOGIN"}
              </span>
            </Button>
          </div>
        </form>

        {/* Dynamic Context Footer Links */}
        <div className="mt-8 pt-6 border-t border-zinc-900 text-center font-mono text-xs tracking-wide">
          <p className="text-zinc-500 inline">Do not have an account? </p>
          <Link
            href="/signup"
            className="text-purple-400 hover:text-purple-300 font-bold transition-colors ml-1 inline-block relative group"
          >
            <span>Signup</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-purple-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </main>
  );
}