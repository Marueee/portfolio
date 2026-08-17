import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen pt-16">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <GitHubStats />
      <Contact />
      <Footer />
    </main>
  );
}
