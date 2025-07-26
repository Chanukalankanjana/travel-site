import Header from "../components/Header"
import Hero from "../components/Hero"
import Destinations from "../components/Destinations"
import Services from "../components/Services"
import Packages from "../components/Packages"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import { LanguageProvider } from "../contexts/LanguageContext"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Destinations />
          <Services />
          <Packages />
          <About />
          <Testimonials />
          <Gallery />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
