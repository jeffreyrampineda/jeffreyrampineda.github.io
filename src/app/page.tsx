import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-gray-200 text-black py-16 lg:py-32">
        <About />
      </div>
    </main>
  );
}
