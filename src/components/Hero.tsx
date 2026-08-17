"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Github, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 section-gap overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,145,182,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="inline-block font-mono text-[15px] tracking-[0.1em] text-moon-mist/80 uppercase bg-luminous-fill/50 px-4 py-1.5 rounded-full border border-glass-edge">
            Introducing
          </span>
        </div>

        {/* Wordmark */}
        <h1 className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ice-highlight">
            Haikal<br />Jack
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`mt-8 text-lg sm:text-xl text-frost-glow max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Software Engineer building modern web applications and<br />
          intelligent business automation systems.
        </p>

        {/* CTA buttons */}
        <div className={`mt-10 flex flex-wrap gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link href="#projects" className="btn-primary group">
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`${process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Marueee"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <Github className="w-4 h-4" />
            GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Scroll hint */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
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
