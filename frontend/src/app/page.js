"use client";
import { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";

export default function Home() {
  const [stages, setStages] = useState([]);
  const [activeCard, setActiveCard] = useState(0);

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

  const flashcards = [
    {
      step: "01",
      title: "The Dynamic Canvas",
      tech: "Next.js Framework",
      description: "Serves as the foundational bedrock. Instead of waiting for raw code to assemble on your screen, it pre-renders structured layouts directly on server networks, slashing load lag down to absolute zero.",
      glow: "from-purple-600/20 to-transparent"
    },
    {
      step: "02",
      title: "Reactive State Streams",
      tech: "React Engine Hooks",
      description: "Utilizes reactive runtime streams like useState and useEffect. They constantly monitor the user space, triggering instantaneous, seamless visual updates across the layout without ever reloading.",
      glow: "from-fuchsia-600/20 to-transparent"
    },
    {
      step: "03",
      title: "Asynchronous Corridors",
      tech: "Axios API Tunneling",
      description: "Bridges the deep dark chasm between remote database servers and your local interface. Safely channels JSON streams over optimized, authenticated background pathways instantly.",
      glow: "from-violet-600/20 to-transparent"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050409] text-zinc-100 font-sans selection:bg-purple-900 selection:text-purple-200 overflow-x-hidden relative pb-32">
  
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[800px] left-1/3 w-[500px] h-[500px] bg-fuchsia-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 pt-24 relative z-10">
        
        {/* Aggressive Horror Cryptic Intro Section */}
        <section className="mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-fuchsia-900/5 to-transparent blur-xl rounded-3xl" />
          <div className="relative border-2 border-purple-900/40 bg-gradient-to-b from-zinc-950 via-[#0d091a] to-zinc-950 rounded-3xl p-8 md:p-14 shadow-[0_0_80px_rgba(0,0,0,0.95)] overflow-hidden group">
            
          
            {/* Animated Red/Purple pulsing terminal indicator */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 absolute" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400 font-bold">Terminal Payload Entry</span>
            </div>

            <p className="text-2xl md:text-3.5xl font-black tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-purple-100 to-zinc-400 max-w-4xl">
              Step into a specialized crucible designed to forge your technical instincts. 
              Through haunting challenges and structured progression tracks, this ecosystem balances 
              immutability with interactive design, transforming raw concepts into razor-sharp, 
              practical execution.
            </p>

          </div>
        </section>

        {/* Dynamic Flashcards: How a Website is Built */}
        <section className="mb-32">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs uppercase tracking-[0.4em] text-purple-500 font-extrabold block mb-2">Architectural Mechanics</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-100">
              Anatomy of a Digital Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Flashcard Controller Column */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
              {flashcards.map((card, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCard(i)}
                  className={`flex-1 text-left p-6 rounded-2xl border-2 transition-all duration-300 min-w-[220px] md:min-w-0 ${
                    activeCard === i
                      ? "bg-purple-950/30 border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.2)] translate-x-2"
                      : "bg-zinc-950/60 border-zinc-900/80 hover:border-zinc-800"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-base font-black ${activeCard === i ? "text-purple-400" : "text-zinc-700"}`}>
                      {card.step}
                    </span>
                    <span className={`text-base font-extrabold tracking-wide transition-colors ${activeCard === i ? "text-purple-200" : "text-zinc-400"}`}>
                      {card.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Flashcard Display View */}
            <div className="lg:col-span-8 min-h-[320px] relative bg-zinc-950 border-2 border-zinc-900 rounded-3xl p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between group">
              {/* Dynamic Glow Layer */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${flashcards[activeCard].glow} pointer-events-none transition-all duration-500`} />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-6xl md:text-7xl font-mono font-black text-purple-950/40 select-none">
                    {flashcards[activeCard].step}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono font-bold tracking-wider text-purple-300 uppercase shadow-inner">
                    {flashcards[activeCard].tech}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-zinc-100 tracking-wide mb-4">
                  {flashcards[activeCard].title}
                </h3>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
                  {flashcards[activeCard].description}
                </p>
              </div>

              <div className="mt-8 flex gap-2">
                {flashcards.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 rounded-full transition-all duration-300 ${activeCard === i ? "w-10 bg-purple-500" : "w-2 bg-zinc-800"}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gamified Road Map (Tightened Alignment to contain nodes cleanly on path) */}
        <section className="relative py-12 max-w-3xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-[0.4em] text-purple-500 font-black mb-2 block font-mono">Progression Path</span>
            <h2 className="text-3xl font-black tracking-widest text-zinc-300 uppercase">The Descent Pipeline</h2>
          </div>
          
          {/* SVG Vector River Path Line connecting layout perfectly within bounds */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
            <svg className="w-full h-full min-h-[1000px]" viewBox="0 0 800 1200" fill="none" preserveAspectRatio="none">
              <path 
                d="M 500 40 C 350 200, 250 240, 320 460 C 400 680, 580 620, 480 920 C 380 1120, 280 1050, 420 1260" 
                stroke="#6366f1" 
                strokeWidth="4" 
                strokeDasharray="12 8" 
                className="opacity-40"
              />
              <path 
                d="M 500 40 C 350 200, 250 240, 320 460 C 400 680, 580 620, 480 920 C 380 1120, 280 1050, 420 1260" 
                stroke="#a855f7" 
                strokeWidth="1.5" 
                className="opacity-20"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-28 relative z-10">
            {stages.map((stage, index) => {
              
              // Refined, bounded positions to ensure cards anchor perfectly around the river path line coordinates
              const alignments = [
                "md:ml-auto md:mr-24",      // Anchored Right over line
                "md:mr-auto md:ml-16",      // Anchored Left over line
                "md:mx-auto md:translate-x-12", // Center-Right crossover
                "md:mr-auto md:ml-28",      // Mid Left sweep
                "md:ml-auto md:mr-16"       // Final Right track
              ];
              const positionClass = alignments[index % alignments.length];

              // Clean geometric uneven structures (Larger presentation boxes)
              const clipShapes = [
                "polygon(2% 0%, 100% 3%, 98% 96%, 0% 100%)",
                "polygon(0% 3%, 97% 0%, 100% 94%, 2% 97%)",
                "polygon(3% 1%, 97% 0%, 100% 100%, 0% 95%)",
                "polygon(0% 0%, 100% 4%, 96% 100%, 3% 96%)"
              ];
              const shapeStyle = clipShapes[index % clipShapes.length];

              return (
                <div 
                  key={stage._id} 
                  className={`w-full md:w-[31rem] transition-all duration-500 transform ${positionClass}`}
                  style={{ perspective: "1200px" }}
                >
                  <Link href={`/stages/${stage.slug}`} className="block group">
                    
                    {/* 3D Isometric Card Layout with Strict Purple Accents */}
                    <div 
                      style={{ clipPath: shapeStyle }}
                      className="relative bg-gradient-to-br from-zinc-950 via-[#100b1a] to-black border-2 border-zinc-900 p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.95)] group-hover:shadow-[0_30px_70px_rgba(168,85,247,0.3)] group-hover:border-purple-500 group-hover:-rotate-x-6 group-hover:rotate-y-8 group-hover:-translate-y-4 transition-all duration-300 ease-out overflow-hidden"
                    >
                      
                      {/* Ambient Internal Glow Portal */}
                      <div className="absolute top-0 right-0 w-44 h-44 bg-purple-600/5 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-all duration-300" />
                      
                      <div className="flex items-center gap-5 mb-6">
                        
                        {/* Custom Round Path Icon Circle Component styled explicitly like the source design */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-800 to-purple-950 border-2 border-purple-500/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:from-purple-500 group-hover:to-fuchsia-600 shadow-[0_8px_25px_rgba(147,51,234,0.45)] transition-all duration-300 shrink-0">
                          <svg className="w-6 h-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>

                        <div>
                          <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-purple-400 block mb-1">
                            Phase // Node 0{index + 1}
                          </span>
                          <h3 className="text-2xl font-black tracking-wide text-zinc-100 group-hover:text-purple-400 transition-colors duration-300">
                            {stage.title}
                          </h3>
                        </div>
                      </div>

                      {/* Main Node Body Description Text */}
                      <p className="text-base text-zinc-400 leading-relaxed mb-6 font-normal">
                        {stage.description}
                      </p>

                      {/* Info Parameter Footer Tracker */}
                      <div className="flex items-center justify-between pt-4 border-t border-zinc-900 text-xs font-mono tracking-wider text-zinc-500">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                          <span>DIFFICULTY: <strong className="text-zinc-200 uppercase font-bold">{stage.difficulty}</strong></span>
                        </div>
                        <div className="bg-purple-950/60 border border-purple-800/40 px-3 py-1 rounded-md text-purple-400 font-bold shadow-sm">
                          +{stage.xp} XP
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
        
      </div>
    </main>
  );
}