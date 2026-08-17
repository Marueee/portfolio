const SKILLS = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
  backend: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
  infrastructure: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Terraform"],
  design: ["UI/UX Design", "Design Systems", "Figma", "Tailwind Style Systems", "WCAG Accessibility"],
};

const CATEGORY_LABELS: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  infrastructure: "Infrastructure",
  design: "Design",
};

export default function Skills() {
  return (
    <section className="section-gap max-w-6xl mx-auto relative z-10 px-6">
      <div className="mb-10 rise">
        <span className="eyebrow">Capabilities</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-medium text-ice-highlight">Tools &amp; technologies</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([key, list], ci) => (
          <div key={key} className="glass-card p-6 md:p-8 rise" style={{ animationDelay: `${0.08 * ci}s` }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-sm text-moon-mist/80 uppercase tracking-wider">{CATEGORY_LABELS[key]}</span>
              <div className="flex-1 h-px bg-glass-edge" />
            </div>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => (<span key={s} className="chip">{s}</span>))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
