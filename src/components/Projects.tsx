"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Calendar, Users, ExternalLink, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const PROJECTS = [
  {
    title: "Business Automation Platform",
    description: "Intelligent workflow automation system orchestrating multi-step business processes. Reduced manual overhead by 70% for operations teams at mid-size companies.",
    tags: ["Next.js", "TypeScript", "Python", "PostgreSQL"],
    color: "from-violet-500/20 to-frost-glow/5",
    link: "#",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Live data visualization platform processing streaming events with sub-second latency. Built for operational visibility when seconds matter.",
    tags: ["React", "D3", "WebSocket", "Go"],
    color: "from-signal-500/20 to-frost-glow/5",
    link: "#",
  },
  {
    title: "Customer Identity System",
    description: "Enterprise authentication and profile management serving 500K+ users. SSO, MFA, role-based access control, and comprehensive audit logging.",
    tags: ["Auth", "React", "Node.js", "Redis"],
    color: "from-blueprint-500/20 to-frost-glow/5",
    link: "#",
  },
  {
    title: "Open Source CLI Toolkit",
    description: "Developer tooling for automated code quality checks, dependency audits, and deployment verification. Used by 2K+ engineers every month.",
    tags: ["TypeScript", "Node.js", "CLI"],
    color: "from-frost-500/20 to-frost-glow/5",
    link: "https://github.com/Marueee",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-gap max-w-6xl mx-auto relative z-10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <span className="font-mono text-[15px] tracking-[0.1em] text-moon-mist/80 uppercase">
          Work
        </span>
        <h2 className="text-3xl md:text-4xl font-medium text-ice-highlight mt-3">
          Things I've built
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="glass-card p-6 md:p-8 h-full group">
              {/* Accent line */}
              <div className={`h-[2px] rounded-full bg-gradient-to-r ${project.color} mb-6 w-0 group-hover:w-full transition-all duration-500`} />

              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-medium text-ice-highlight group-hover:text-blueprint transition-colors">
                  {project.title}
                </h3>
                {project.link.startsWith("http") ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-frost-glow/60 hover:text-frost-glow transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : null}
              </div>

              <p className="text-frost-glow/90 leading-relaxed mb-5 text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-luminous-fill/50 border border-glass-edge text-moon-mist"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-frost-glow/60">View case study</span>
                <ArrowUpRight className="w-4 h-4 text-frost-glow/60 group-hover:text-frost-glow transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
