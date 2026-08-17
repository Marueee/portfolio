const STATS = [
  { label: "Years Building", value: "5+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Technologies", value: "15+" },
  { label: "Users Served", value: "500K+" },
];

export default function About() {
  return (
    <section id="about" className="section-gap max-w-6xl mx-auto relative z-10 px-6">
      <div className="glass-card neon-card p-8 md:p-12 rise" style={{ animationDelay: "0.05s" }}>
        <span className="eyebrow">About</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-medium text-ice-highlight">
          Building systems that work <span className="text-gradient">for people &amp; businesses</span>
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8 text-frost-glow leading-relaxed text-base md:text-lg">
          <p>
            I'm a software engineer focused on building modern web applications and
            intelligent automation systems. I care about craft — the details that make
            software feel intentional rather than assembled.
          </p>
          <p>
            My work spans sleek user-facing interfaces to the infrastructure that keeps
            them reliable at scale. I believe good engineering is invisible: the best
            systems are the ones users never have to think about.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <div key={s.label} className="glass-card-light p-6 text-center rise" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
            <div className="text-2xl md:text-3xl font-medium text-ice-highlight">{s.value}</div>
            <div className="text-sm text-fog uppercase tracking-wider font-mono">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
