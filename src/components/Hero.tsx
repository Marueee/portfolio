"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all duration-700";
  const vis = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`${base} delay-0 ${vis}`}>
          <span className="eyebrow inline-block px-4 py-1.5 rounded-full border border-glass-edge bg-luminous-fill">Available for new projects</span>
        </div>

        <h1 className={`mt-6 ${base} delay-100 ${vis}`}>
          <span className="block text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-gradient glow-violet">HAIKAL</span>
          <span className="block text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-ice-highlight mt-2">JACK</span>
        </h1>

        <p className={`mt-8 text-lg sm:text-xl text-frost-glow max-w-2xl mx-auto leading-relaxed ${base} delay-200 ${vis}`}>
          Software Engineer crafting <span className="text-gradient">modern web applications</span> and intelligent business automation.
        </p>

        <div className={`mt-10 flex flex-wrap gap-4 justify-center ${base} delay-300 ${vis}`}>
          <Link href="#projects" className="btn-primary group">
            View Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a href="https://github.com/Marueee" target="_blank" rel="noopener noreferrer" className="btn-secondary group">
            <Github className="w-4 h-4" /> GitHub <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className={`mt-20 ${base} delay-500 ${vis}`}>
          <div className="flex flex-col items-center gap-2 text-fog/60">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border border-glass-edge rounded-sm flex justify-center pt-1 animate-bounce">
              <div className="w-1 h-2 bg-frost-glow rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
