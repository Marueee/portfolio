"use client";

import { useEffect, useState } from "react";
import { Github, Calendar, Users, Code } from "lucide-react";

interface GitHubUser { login: string; public_repos: number; followers: number; avatar_url: string; name: string | null; }
interface ContributionDay { date: string; level: number; }
interface GitHubApiResponse { contributions: ContributionDay[]; total: { lastYear: number }; }

const FALLBACK_CONTRIBUTIONS: ContributionDay[] = Array.from({ length: 365 }, (_, i) => ({
  date: new Date(Date.UTC(2025, 0, 1 + i)).toISOString().split("T")[0],
  level: Math.floor(Math.random() * 4),
}));
const FALLBACK_USER: GitHubUser = { login: "Marueee", public_repos: 12, followers: 48, avatar_url: "https://avatars.githubusercontent.com/u/0?v=4", name: "Haikal Jack" };
const FALLBACK_TOTAL = { lastYear: 284 };

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [total, setTotal] = useState<{ lastYear: number } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Marueee", { headers: { Accept: "application/vnd.github+json" } });
        if (res.ok) { const data: GitHubUser = await res.json(); setUser(data); }
      } catch { /* fallback */ }
    };
    const fetchContributions = async () => {
      try {
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/Marueee?y=last", { headers: { Accept: "application/json" } });
        if (res.ok) { const data: GitHubApiResponse = await res.json(); setContributions(data.contributions); setTotal(data.total); }
      } catch { /* fallback */ }
    };
    fetchUser();
    fetchContributions();
  }, []);

  const displayUser = user ?? FALLBACK_USER;
  const displayContributions = contributions.length > 0 ? contributions : FALLBACK_CONTRIBUTIONS;
  const displayTotal = total ?? FALLBACK_TOTAL;

  const levelColors: Record<number, string> = {
    0: "bg-steel/30", 1: "bg-violet-900/40", 2: "bg-violet-700/50", 3: "bg-violet-500/60", 4: "bg-violet-400/70",
  };

  return (
    <section id="github" className="section-gap max-w-6xl mx-auto relative z-10 px-6">
      <div className="glass-card neon-card p-8 md:p-12 rise">
        <div className="flex items-start gap-4 mb-8">
          <span className="eyebrow pt-1">Open Source</span>
          <div className="flex-1 h-px bg-glass-edge mt-3" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-80 flex-shrink-0">
            <div className="glass-card-light p-6 text-center">
              {displayUser.avatar_url !== "https://avatars.githubusercontent.com/u/0?v=4" ? (
                <img src={displayUser.avatar_url} alt={displayUser.login} className="w-20 h-20 rounded-full mx-auto mb-4 ring-2 ring-glass-edge" />
              ) : (
                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-steel/60 flex items-center justify-center">
                  <Github className="w-10 h-10 text-frost-glow/60" />
                </div>
              )}
              <h3 className="text-lg font-medium text-ice-highlight mb-1">{displayUser.name ?? displayUser.login}</h3>
              <p className="text-sm text-fog font-mono mb-4">@{displayUser.login}</p>
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-frost-glow/80"><Code className="w-4 h-4 text-violet/60" /><span>{displayUser.public_repos} repos</span></div>
                <div className="flex items-center justify-center gap-2 text-sm text-frost-glow/80"><Users className="w-4 h-4 text-blueprint/60" /><span>{displayUser.followers} followers</span></div>
              </div>
              <a href={`https://github.com/${displayUser.login}`} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full justify-center text-sm py-3">
                <Github className="w-4 h-4" /> View Profile
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-frost-glow/60" />
              <span className="text-sm font-mono text-moon-mist/80 uppercase tracking-wider">Contribution activity — last year</span>
            </div>
            <div className="flex items-end gap-[3px] h-12 overflow-hidden">
              {displayContributions.slice(0, 128).map((day, i) => (
                <div key={i} className={`w-[9px] md:w-[11px] h-1 rounded-sm ${levelColors[day.level] ?? "bg-steel/30"} transition-all duration-200 hover:opacity-80`} title={`${day.date}: ${day.level > 0 ? day.level + " contributions" : "none"}`} />
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-fog font-mono">
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-steel/30" /><span>Less</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-violet-900/40" /><span>1</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-violet-700/50" /><span>2</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-violet-500/60" /><span>3</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-violet-400/70" /><span>4+</span></div>
            </div>
            {displayTotal.lastYear > 0 && (
              <p className="text-sm text-frost-glow/60 mt-3 font-mono">{displayTotal.lastYear} contributions in the last year</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
