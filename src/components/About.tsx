import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="section-gap max-w-6xl mx-auto relative z-10">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card p-8 md:p-12 mb-8"
      >
        <div className="flex items-start gap-4 mb-6">
          <span className="font-mono text-[15px] tracking-[0.1em] text-moon-mist/80 uppercase whitespace-nowrap pt-1 border-l border-glass-edge pl-4">
            About
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium text-ice-highlight mb-6">
          Building systems that work<br />
          <span className="text-gradient">for people and businesses</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-frost-glow leading-relaxed text-base md:text-lg">
          <div>
            <p className="mb-4">
              I'm a software engineer focused on building modern web applications and
              intelligent automation systems. I care about craft — the details that make
              software feel intentional rather than assembled.
            </p>
            <p>
              My work spans from sleek user-facing interfaces to the infrastructure that
              keeps them reliable at scale. I believe good engineering is invisible: the
              best systems are the ones users never have to think about.
            </p>
          </div>
          <div>
            <p className="mb-4">
              Currently building and shipping features used by thousands of daily users —
              everything from customer-facing dashboards to the backend automation that
              keeps operations running smoothly.
            </p>
            <p>
              When I'm not coding, I'm thinking about design systems, developer experience,
              and how to make complex things feel simple. I write code that's meant to be
              read, maintained, and extended.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Years Building", value: "5+" },
          { label: "Projects Shipped", value: "20+" },
          { label: "Technologies", value: "15+" },
          { label: "Users Served", value: "500K+" },
        ].map((stat, i) => (
          <div key={i} className="glass-card-light p-6 text-center">
            <div className="text-2xl md:text-3xl font-medium text-ice-highlight mb-1">{stat.value}</div>
            <div className="text-sm text-fog uppercase tracking-wider font-mono">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
