"use client"

import { LanguageProvider } from "./contexts/LanguageContext"
// import Packages from "./pages/Packages"
// import HomePage from "./app/page"
// import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"


function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        {/* <HomePage /> */}
        {/* <ContactUs /> */}
        <AboutUs />
        {/* <Packages/> */}
      </div>
    </LanguageProvider>
  )
}

export default App
