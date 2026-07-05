"use client";
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import InputField from "@/components/InputField";
import Button from "@/components/Button";

import { auth } from "@/services/firebase";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [loading, setLoading] = useState(false);

const handleSignup = async (e) => {
  e.preventDefault();

  if (!name || !email || !password || !confirmPassword) {
    toast.error("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return;
  }

  try {
    setLoading(true);

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await updateProfile(userCredential.user, {
      displayName: name,
    });

    toast.success("Account created successfully!");

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
            Begin Your Journey
          </p>
        </div>

        <form
  onSubmit={handleSignup}
  className="space-y-5"
>

          <InputField
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
          />

          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

         <Button
  type="submit"
  disabled={loading}
>
  {loading ? "Creating..." : "Create Account"}
</Button>

        </form>

        <p className="mt-6 text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-purple-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}