import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { CodingProfiles } from "@/sections/CodingProfiles";
import { Certifications } from "@/sections/Certifications";
import { References } from "@/sections/References";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <CodingProfiles/>
        <Certifications/>
        <References/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App