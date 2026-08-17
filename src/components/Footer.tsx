export default function Footer() {
  return (
    <footer className="section-gap max-w-6xl mx-auto relative z-10">
      <div className="glass-card p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-frost-glow/60">
            <span className="text-ice-highlight font-medium">Haikal Jack</span>
            <span className="mx-2">·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-frost-glow/60">
            <a
              href="https://github.com/Marueee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-frost-glow transition-colors"
            >
              GitHub
            </a>
            <a href="#about" className="hover:text-frost-glow transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-frost-glow transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-frost-glow transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-fog/40 font-mono">
            Built with Next.js · Designed in frosted glass cathedral at midnight
          </p>
        </div>
      </div>
    </footer>
  );
}
