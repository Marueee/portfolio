import { ExternalLink, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Business Automation Platform",
    description: "Intelligent workflow automation system orchestrating multi-step business processes. Reduced manual overhead by 70% for operations teams at mid-size companies.",
    tags: ["Next.js", "TypeScript", "Python", "PostgreSQL"],
    color: "from-violet/30 to-frost-glow/5",
    link: "#",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Live data visualization platform processing streaming events with sub-second latency. Built for operational visibility when seconds matter.",
    tags: ["React", "D3", "WebSocket", "Go"],
    color: "from-signal/30 to-frost-glow/5",
    link: "#",
  },
  {
    title: "Customer Identity System",
    description: "Enterprise authentication and profile management serving 500K+ users. SSO, MFA, role-based access control, and comprehensive audit logging.",
    tags: ["Auth", "React", "Node.js", "Redis"],
    color: "from-blueprint/30 to-frost-glow/5",
    link: "#",
  },
  {
    title: "Open Source CLI Toolkit",
    description: "Developer tooling for automated code quality checks, dependency audits, and deployment verification. Used by 2K+ engineers every month.",
    tags: ["TypeScript", "Node.js", "CLI"],
    color: "from-steel/40 to-frost-glow/5",
    link: "https://github.com/Marueee",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-gap max-w-6xl mx-auto relative z-10 px-6">
      <div className="mb-10 rise">
        <span className="eyebrow">Work</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-medium text-ice-highlight">Things I've built</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <div
            key={p.title}
            className="glass-card neon-card p-6 md:p-8 h-full group rise hover:-translate-y-1 transition-transform duration-300"
            style={{ animationDelay: `${0.08 * i}s` }}
          >
            <div className={`h-[2px] w-12 mb-6 rounded-full bg-gradient-to-r ${p.color} group-hover:w-full transition-all duration-500`} />
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl md:text-2xl font-medium text-ice-highlight group-hover:text-blueprint transition-colors">{p.title}</h3>
              {p.link.startsWith("http") && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-frost-glow/60 hover:text-frost-glow transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-frost-glow/90 leading-relaxed mb-5 text-base">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => (<span key={t} className="chip">{t}</span>))}
            </div>
            <div className="flex items-center gap-2 text-sm text-frost-glow/60">
              View case study <ArrowUpRight className="w-4 h-4 group-hover:text-frost-glow transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
