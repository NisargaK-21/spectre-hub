"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";

export default function Home() {

  const [stages, setStages] = useState([]);

  useEffect(() => {

    async function fetchStages() {

      try {

        const res = await api.get("/stages");

        setStages(res.data);

      } catch (err) {

        console.log(err);

      }

    }

    fetchStages();

  }, []);

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Spectre-Hub
      </h1>

     {stages.map((stage) => (
  <Link
    key={stage._id}
    href={`/stages/${stage.slug}`}
  >
    <div className="border border-zinc-700 rounded-xl p-6 hover:border-purple-500 hover:scale-105 transition-all">

      <h2 className="text-2xl font-bold">
        {stage.title}
      </h2>

      <p className="mt-2 text-zinc-400">
        {stage.description}
      </p>

      <p className="mt-4">
        Difficulty : {stage.difficulty}
      </p>

      <p>
        XP : {stage.xp}
      </p>

    </div>
  </Link>
))}

    </main>

  );

}