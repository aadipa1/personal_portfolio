import Image from "next/image";
import Section1 from "./components/Section1";
import  Navbar  from "./components/Navbar";
import  AboutSection  from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#151515]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <Section1 />
        <AboutSection />
      </div>
    </main>
  )
}
