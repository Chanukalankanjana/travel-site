import Hero from "../components/Hero"
import Destinations from "../components/Destinations"
import Services from "../components/Services"
import Packages from "../components/Packages"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Destinations />
        <Services />
        <Packages />
        <About />
        <Testimonials />
        <Gallery />
      </main>
    </div>
  )
}
