import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

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
    <section className="section-gap max-w-6xl mx-auto relative z-10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <span className="font-mono text-[15px] tracking-[0.1em] text-moon-mist/80 uppercase">
          Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-medium text-ice-highlight mt-3">
          Tools & technologies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([key, skillsList], catIdx) => (
          <motion.div
            key={key}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: catIdx * 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-sm text-moon-mist/80 uppercase tracking-wider">
                {CATEGORY_LABELS[key]}
              </span>
              <div className="flex-1 h-px bg-glass-edge" />
            </div>

            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-steel/40 border border-glass-edge text-frost-glow text-sm hover:bg-steel/60 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
