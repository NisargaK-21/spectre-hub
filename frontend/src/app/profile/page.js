"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function Profile() {

  return (

    <ProtectedRoute>

      <h1 className="text-white">
        Profile
      </h1>

    </ProtectedRoute>

  );

}