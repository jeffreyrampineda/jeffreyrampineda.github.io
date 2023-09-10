import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <div
        id="projects"
        className="bg-gray-200 text-black py-8 md:py-16 lg:py-32"
      >
        <Projects />
      </div>
      <div id="about" className="bg-gray-100 text-black py-8 md:py-16 lg:py-32">
        <About />
      </div>
    </main>
  );
}
