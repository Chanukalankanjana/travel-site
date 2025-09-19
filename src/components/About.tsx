"use client"

import { useState, useEffect } from "react"
import { Award, Users, MapPin, Shield, Target, Eye } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { useNavigation } from "../contexts/NavigationContext"

export default function About() {
  const { t } = useLanguage()
  const { navigateToAbout } = useNavigation()
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ experience: 0, clients: 0, tours: 0, guides: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const targets = { experience: 12, clients: 5000, tours: 500, guides: 50 }
          const duration = 2000
          const steps = 60
          const stepTime = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            setCounters({
              experience: Math.floor(targets.experience * progress),
              clients: Math.floor(targets.clients * progress),
              tours: Math.floor(targets.tours * progress),
              guides: Math.floor(targets.guides * progress),
            })

            if (step >= steps) {
              clearInterval(timer)
              setCounters(targets)
            }
          }, stepTime)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Award,
      number: counters.experience,
      suffix: "+",
      labelKey: "about.experience",
    },
    {
      icon: Users,
      number: counters.clients,
      suffix: "+",
      labelKey: "about.clients",
    },
    {
      icon: MapPin,
      number: counters.tours,
      suffix: "+",
      labelKey: "about.tours",
    },
    {
      icon: Shield,
      number: counters.guides,
      suffix: "+",
      labelKey: "about.guides",
    },
  ]

  const values = [
    {
      icon: Target,
      titleKey: "about.mission.title",
      descKey: "about.mission.desc",
    },
    {
      icon: Eye,
      titleKey: "about.vision.title",
      descKey: "about.vision.desc",
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
{t("about.hero.trustedSince")}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{t("about.title")}</h2>
            <p className="text-xl text-gray-600 mb-6">{t("about.subtitle")}</p>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">{t("about.desc")}</p>

            <button
              onClick={() => navigateToAbout()}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
{t("about.cta.learnMore")}
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="aboutus.jpg"
              alt="Sri Lanka temple"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-gray-600">{t(stat.labelKey)}</div>
              </div>
            )
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t(value.titleKey)}</h3>
                <p className="text-gray-700 leading-relaxed">{t(value.descKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
