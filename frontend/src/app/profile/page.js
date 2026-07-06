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

  const completedStages = progress.filter((item) => item.completed).length;
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
      <main className="min-h-screen bg-[#050409] text-zinc-100 font-sans selection:bg-purple-900 selection:text-purple-200 overflow-x-hidden relative p-6 md:p-12">
        
        {/* Ambient Dark Gothic Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-fuchsia-950/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 space-y-12">
          
          {/* Header Dashboard Title */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-6 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400 font-bold">User Central</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-100 font-mono uppercase">
                Profile
              </h1>
            </div>
            
            {/* Identity Info Accent */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-2xl px-6 py-4 flex flex-col justify-center min-w-[240px]">
              <span className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">User Signature</span>
              <span className="text-base font-bold text-purple-200 truncate">{user?.displayName || "Anonymous Node"}</span>
              <span className="text-xs font-mono text-zinc-400 truncate mt-0.5">{user?.email}</span>
            </div>
          </div>

          {/* Grid Stats Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* XP Box */}
            <div 
              style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 0 100%)" }}
              className="bg-gradient-to-br from-zinc-950 via-[#120b1c] to-black border-2 border-purple-900/30 p-6 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-6 font-mono text-7xl font-black text-purple-950/20 select-none pointer-events-none">XP</div>
              <span className="font-mono text-xs tracking-wider text-purple-400 block mb-1 uppercase font-bold">Total Accumulation</span>
              <div className="text-4xl font-black font-mono tracking-tight text-zinc-100">{totalXP} <span className="text-xs text-purple-400">XP</span></div>
            </div>

            {/* Stages Box */}
            <div 
              style={{ clipPath: "polygon(0 0, 100% 4%, 100% 100%, 4% 96%)" }}
              className="bg-gradient-to-br from-zinc-950 to-black border-2 border-zinc-900 p-6 shadow-xl relative overflow-hidden"
            >
              <span className="font-mono text-xs tracking-wider text-zinc-500 block mb-1 uppercase">Completed Arenas</span>
              <div className="text-4xl font-black font-mono tracking-tight text-zinc-100">{completedStages}</div>
            </div>

            {/* Attempts Box */}
            <div 
              style={{ clipPath: "polygon(2% 0, 100% 0, 98% 96%, 0 100%)" }}
              className="bg-gradient-to-br from-zinc-950 to-black border-2 border-zinc-900 p-6 shadow-xl relative overflow-hidden"
            >
              <span className="font-mono text-xs tracking-wider text-zinc-500 block mb-1 uppercase">Total Pipelines Run</span>
              <div className="text-4xl font-black font-mono tracking-tight text-zinc-100">{totalAttempts}</div>
            </div>

            {/* Average Score Box */}
            <div 
              style={{ clipPath: "polygon(0 4%, 96% 0, 100% 100%, 0 94%)" }}
              className="bg-gradient-to-br from-zinc-950 to-black border-2 border-zinc-900 p-6 shadow-xl relative overflow-hidden"
            >
              <span className="font-mono text-xs tracking-wider text-zinc-500 block mb-1 uppercase">Average Efficiency</span>
              <div className="text-4xl font-black font-mono tracking-tight text-zinc-100">{averageScore}<span className="text-xs text-zinc-600"> / 10</span></div>
            </div>

          </div>

          {/* Submission History Segment */}
          <section className="space-y-6">
            <div className="border-b border-zinc-900 pb-3">
              <h2 className="text-xl md:text-2xl font-black tracking-wider text-zinc-300 font-mono uppercase">
                Submission Registry
              </h2>
            </div>

            {progress.length === 0 ? (
              <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center bg-zinc-950/40">
                <p className="font-mono text-sm text-zinc-500 uppercase tracking-widest">No operations recorded in database.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {progress.map((item) => {
                  // Geometric slant structure layout
                  const clipShapes = [
                    "polygon(1% 0%, 100% 2%, 99% 97%, 0% 100%)",
                    "polygon(0% 2%, 99% 0%, 100% 96%, 1% 98%)",
                  ];
                  const shapeStyle = clipShapes[Math.abs(item._id.hashCode ? item._id.hashCode() : item._id.length) % clipShapes.length] || clipShapes[0];

                  return (
                    <div
                      key={item._id}
                      style={{ clipPath: shapeStyle }}
                      className="relative bg-gradient-to-br from-zinc-950 via-[#0f0a17] to-black border-2 border-zinc-900/80 p-6 md:p-8 shadow-lg hover:border-purple-950 transition-colors duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        {/* Upper Details Row */}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="font-mono text-[10px] text-purple-400 tracking-[0.2em] uppercase block mb-0.5">Stage Identifier</span>
                            <h3 className="text-lg font-extrabold tracking-wide text-zinc-200 group-hover:text-purple-400 transition-colors uppercase font-mono">
                              {item.stage}
                            </h3>
                          </div>

                          <div className={`px-3 py-1 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border ${
                            item.completed 
                              ? "bg-purple-950/40 border-purple-800/40 text-purple-400 shadow-sm" 
                              : "bg-zinc-900/60 border-zinc-800 text-zinc-500"
                          }`}>
                            {item.completed ? "Success ✅" : "Failed ❌"}
                          </div>
                        </div>

                        {/* Metric Metrics */}
                        <div className="mt-6 flex items-baseline gap-2 font-mono">
                          <span className="text-[11px] text-zinc-500 uppercase">Evaluated Score:</span>
                          <span className="text-2xl font-black text-zinc-100">{item.score}</span>
                          <span className="text-xs text-zinc-600">/ 10</span>
                        </div>
                      </div>

                      {/* Timestamp Footer */}
                      <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                        <span>TIMESTAMP</span>
                        <span className="text-zinc-400">{new Date(item.submittedAt).toLocaleString()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

        </div>
      </main>
    </ProtectedRoute>
  );
}

// Minimal safe fallback hash calculation string method attached dynamically if needed
if (!String.prototype.hashCode) {
  String.prototype.hashCode = function() {
    let hash = 0;
    for (let i = 0; i < this.length; i++) {
      hash = this.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };
}