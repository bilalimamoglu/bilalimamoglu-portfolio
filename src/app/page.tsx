import {
  Navigation,
  Hero,
  Expertise,
  Philosophy,
  About,
  Writing,
  Quote,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16 max-w-[1400px] mx-auto">
        <Hero />
        <Expertise />
        <Philosophy />
        <About />
        <Writing />
        <Quote />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
