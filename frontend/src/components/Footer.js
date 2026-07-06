"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050409] border-t border-purple-950/40 relative overflow-hidden mt-auto">
      {/* Structural Accent Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 font-sans">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <Link
            href="/"
            className="text-lg font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-purple-400 to-purple-600 drop-shadow-[0_0_10px_rgba(168,85,247,0.2)] uppercase font-mono"
          >
            Spectre-Hub
          </Link>
          <p className="text-xs text-zinc-500 tracking-wide">
            &copy; {currentYear} Spectre-Hub. All rights reserved.
          </p>
        </div>

        {/* Right Side: Direct Contact Meta Node */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs font-mono text-zinc-400 tracking-wider">
          <div className="flex items-center gap-2 border border-zinc-900/80 bg-zinc-950/50 px-4 py-2 rounded-xl">
            <span className="text-purple-500 text-[10px]">●</span>
            <span className="text-zinc-500 uppercase text-[10px] mr-1">SYS_EMAIL:</span>
            <a 
              href="mailto:nisargakshetty@gmail.com" 
              className="hover:text-purple-400 transition-colors duration-200"
            >
              nisargakshetty@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 border border-zinc-900/80 bg-zinc-950/50 px-4 py-2 rounded-xl">
            <span className="text-purple-500 text-[10px]">●</span>
            <span className="text-zinc-500 uppercase text-[10px] mr-1">COMMS_NODE:</span>
            <a 
              href="tel:+918123739916" 
              className="hover:text-purple-400 transition-colors duration-200"
            >
              +91 81237 39916
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}