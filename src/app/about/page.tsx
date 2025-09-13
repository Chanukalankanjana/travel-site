import About from "../../pages/AboutUs"
import Header from "../../components/Header"
import { LanguageProvider } from "../../contexts/LanguageContext"
import Footer from "../../components/Footer"

export default function AboutPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
            <About />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
