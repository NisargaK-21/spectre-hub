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
    <main className="min-h-screen flex items-center justify-center bg-black px-4">

      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-white">
            Spectre-Hub
          </h1>

          <p className="mt-2 text-zinc-400">
            Welcome Back
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging In..." : "login"}
          </Button>

        </form>

        <p className="mt-6 text-center text-zinc-400">

          Do not have an account? </p>
          <Link
            href="/signup"
            className="text-purple-400 hover:underline"
          >
            Signup
          </Link>


      </div>

    </main>
  );
}