"use client"

import { useEffect, useState } from "react"
import { Crown, Landmark, Mountain, Sparkles, Car, Hotel } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Services() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Crown,
      titleKey: "services.luxury.title",
      descKey: "services.luxury.desc",
      image: "/placeholder.svg?height=300&width=400&text=Luxury Tours",
    },
    {
      icon: Landmark,
      titleKey: "services.cultural.title",
      descKey: "services.cultural.desc",
      image: "/placeholder.svg?height=300&width=400&text=Cultural Heritage",
    },
    {
      icon: Mountain,
      titleKey: "services.adventure.title",
      descKey: "services.adventure.desc",
      image: "/placeholder.svg?height=300&width=400&text=Adventure Tours",
    },
    {
      icon: Sparkles,
      titleKey: "services.wellness.title",
      descKey: "services.wellness.desc",
      image: "/placeholder.svg?height=300&width=400&text=Wellness Retreats",
    },
    {
      icon: Car,
      titleKey: "services.transport.title",
      descKey: "services.transport.desc",
      image: "/placeholder.svg?height=300&width=400&text=Transportation",
    },
    {
      icon: Hotel,
      titleKey: "services.accommodation.title",
      descKey: "services.accommodation.desc",
      image: "/placeholder.svg?height=300&width=400&text=Accommodation",
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
{t("services.hero.premiumServices")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">{t(service.descKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
