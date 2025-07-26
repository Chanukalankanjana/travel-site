"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MessageCircle, Play, Star, MapPin, Users, Calendar } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Hero() {
  const { t, currentLanguage } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const whatsappNumbers = {
    en: "+94771234567",
    ru: "+94777654321",
  }

  const handleWhatsAppClick = () => {
    const number = whatsappNumbers[currentLanguage.code]
    const message = encodeURIComponent(
      currentLanguage.code === "en"
        ? "Hello! I'm interested in your travel services."
        : "Привет! Меня интересуют ваши туристические услуги.",
    )
    window.open(`https://wa.me/${number}?text=${message}`, "_blank")
  }

  // const stats = [
  //   {
  //     number: "50+",
  //     label: t("hero.stats.destinations"),
  //     icon: MapPin,
  //   },
  //   {
  //     number: "5000+",
  //     label: t("hero.stats.clients"),
  //     icon: Users,
  //   },
  //   {
  //     number: "12+",
  //     label: t("hero.stats.experience"),
  //     icon: Calendar,
  //   },
  //   {
  //     number: "4.9",
  //     label: t("hero.stats.rating"),
  //     icon: Star,
  //   },
  // ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="hero.webp" alt="Sri Lanka Landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>{t("hero.cta")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="group px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t("hero.whatsapp")}</span>
            </button>
          </div>

          {/* Stats
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              )
            })}
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
