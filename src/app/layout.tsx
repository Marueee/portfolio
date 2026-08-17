import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Haikal Jack — Software Engineer",
  description: "Portfolio of Haikal Jack — software engineer building modern web applications and intelligent business automation systems.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: "Haikal Jack — Software Engineer",
    description: "Building modern web apps and intelligent business automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#05060f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <div className="aurora" aria-hidden="true"><span className="b1" /><span className="b2" /><span className="b3" /></div>
        <div className="grid-overlay" aria-hidden="true" />
        <div className="stars" aria-hidden="true" />

        <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-canvas/40 border-b border-glass-edge">
          <a href="#" className="font-mono text-sm tracking-widest text-ice-highlight">HJ<span className="text-violet">.</span></a>
          <div className="hidden sm:flex gap-6 text-sm text-frost-glow/80">
            <a href="#projects" className="hover:text-ice-highlight transition-colors">Work</a>
            <a href="#about" className="hover:text-ice-highlight transition-colors">About</a>
            <a href="#github" className="hover:text-ice-highlight transition-colors">Open Source</a>
            <a href="#contact" className="hover:text-ice-highlight transition-colors">Contact</a>
          </div>
          <a href="https://github.com/Marueee" target="_blank" rel="noopener noreferrer" className="text-sm text-frost-glow/80 hover:text-ice-highlight transition-colors">GitHub &#8599;</a>
        </nav>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
