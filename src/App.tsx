"use client"

import { LanguageProvider } from "./contexts/LanguageContext"
import HomePage from "./app/page"

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <HomePage />
      </div>
    </LanguageProvider>
  )
}

export default App
