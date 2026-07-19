import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { About, Contact, Faq, Gallery, Hero, Process, Services } from "../components/sections";

export default function App() {
  return (
    <div className="bg-[#111111] text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
