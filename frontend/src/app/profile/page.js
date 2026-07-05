"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold mb-8">Profile</h1>

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 max-w-xl">

          <p className="mb-4">
            <span className="font-semibold">Name:</span>{" "}
            {user?.displayName || "Not Available"}
          </p>

          <p className="mb-4">
            <span className="font-semibold">Email:</span>{" "}
            {user?.email}
          </p>

          <p className="mb-4">
            <span className="font-semibold">User ID:</span>{" "}
            {user?.uid}
          </p>

          <p>
            <span className="font-semibold">Email Verified:</span>{" "}
            {user?.emailVerified ? "Yes" : "No"}
          </p>

        </div>
      </main>
    </ProtectedRoute>
  );
}