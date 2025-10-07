import Navbar from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Project"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import Testimonials from "./components/Testimonials"
import { ScrollToTop } from "./components/ScrollToTop"
import { AnimatedSection } from "./components/AnimatedSection"

export default function App() {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col scroll-smooth relative">
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      
      <AnimatedSection id="projects">
  <Projects />
</AnimatedSection>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Footer />

      {/* 👇 Floating back-to-top button (stays visible when scrolled down) */}
      <ScrollToTop />
    </div>
  )
}
