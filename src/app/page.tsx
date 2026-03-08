import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      {/* 1. The Hook (Who you are) */}
      <Hero />
      
      {/* 2. The Context (Why you do it) */}
      <About />
      
      {/* 3. The Proof (What you've built) */}
      <ProjectsGrid />
      
      {/* 4. The Toolkit (How you do it) */}
      <TechStack />
    </main>
  );
}