import Hero from "@/components/Hero";
import Projects from "@/components/ProjectsCarousel";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
