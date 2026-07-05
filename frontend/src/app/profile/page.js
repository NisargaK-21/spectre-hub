"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

import api from "@/services/api";

export default function Profile() {

  const { user } = useAuth();

  const [progress, setProgress] = useState([]);

  useEffect(() => {

    if (!user) return;

    async function fetchProgress() {

      try {

        const res = await api.get(`/user/${user.uid}`);

        setProgress(res.data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchProgress();

  }, [user]);

  const completedStages = progress.filter(
    (item) => item.completed
  ).length;

  const totalAttempts = progress.length;

  const averageScore =
    progress.length === 0
      ? 0
      : (
          progress.reduce((sum, item) => sum + item.score, 0) /
          progress.length
        ).toFixed(1);

  const totalXP = progress.reduce((xp, item) => {

    if (!item.completed) return xp;

    switch (item.stage) {

      case "html":
        return xp + 50;

      case "css":
        return xp + 50;

      case "javascript":
        return xp + 75;

      case "firebase":
        return xp + 75;

      case "react":
      case "nextjs":
      case "nodejs":
      case "express":
      case "mongodb":
        return xp + 100;

      case "rest-api":
        return xp + 125;

      case "deployment":
        return xp + 150;

      default:
        return xp;

    }

  }, 0);

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-10">

        <h1 className="text-4xl font-bold mb-8">
          Profile
        </h1>

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 max-w-3xl">

          <p className="mb-4">
            <strong>Name:</strong> {user?.displayName}
          </p>

          <p className="mb-4">
            <strong>Email:</strong> {user?.email}
          </p>

          <p className="mb-4">
            <strong>Completed Stages:</strong> {completedStages}
          </p>

          <p className="mb-4">
            <strong>Total Attempts:</strong> {totalAttempts}
          </p>

          <p className="mb-4">
            <strong>Average Score:</strong> {averageScore}/10
          </p>

          <p className="mb-8">
            <strong>Total XP:</strong> {totalXP}
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Submission History
          </h2>

          {progress.length === 0 ? (

            <p>No submissions yet.</p>

          ) : (

            progress.map((item) => (

              <div
                key={item._id}
                className="border border-zinc-700 rounded-lg p-4 mb-4"
              >

                <p>
                  <strong>Stage:</strong> {item.stage}
                </p>

                <p>
                  <strong>Score:</strong> {item.score}/10
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {item.completed ? "Completed ✅" : "Incomplete ❌"}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(item.submittedAt).toLocaleString()}
                </p>

              </div>

            ))

          )}

        </div>

      </main>

    </ProtectedRoute>

  );

}