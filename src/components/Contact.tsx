import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const LINKS = [
  { label: "GitHub", href: "https://github.com/Marueee", icon: Github, ExternalLink: true },
  { label: "Email", href: "mailto:haikal@example.com", icon: Mail, ExternalLink: false },
  { label: "LinkedIn", href: "#", icon: Linkedin, ExternalLink: true },
  { label: "Twitter / X", href: "#", icon: Twitter, ExternalLink: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section-gap max-w-4xl mx-auto relative z-10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card p-8 md:p-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="font-mono text-[15px] tracking-[0.1em] text-moon-mist/80 uppercase">
            Get in touch
          </span>
          <div className="w-8 h-px bg-glass-edge" />
        </div>

        <h2 className="text-3xl md:text-4xl font-medium text-ice-highlight mb-4">
          Let's work together
        </h2>

        <p className="text-frost-glow/80 max-w-lg mx-auto mb-8 text-base leading-relaxed">
          Whether you have a project in mind, a problem to solve, or just want to say hello —
          I'd love to hear from you.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:haikal@example.com"
          className="btn-primary inline-flex items-center gap-2 mb-8"
        >
          <Send className="w-4 h-4" />
          haikal@example.com
        </a>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.ExternalLink ? "_blank" : undefined}
              rel={link.ExternalLink ? "noopener noreferrer" : undefined}
              className="glass-card-light p-4 rounded-full hover:bg-steel/30 transition-colors group"
            >
              <link.icon className="w-5 h-5 text-frost-glow/70 group-hover:text-frost-glow transition-colors" />
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
