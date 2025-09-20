"use client"

import { useEffect, useState } from "react"
import { Star, ArrowRight, MapPin } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { useNavigation } from "../contexts/NavigationContext"

export default function Destinations() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const { navigateToDestination, navigateToDestinations } = useNavigation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("destinations")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  // Function to convert destination name to URL slug
  const nameToSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  const destinations = [
    {
      id: "1",
      name: t("destinations.sigiriya.name"),
      slug: nameToSlug(t("destinations.sigiriya.name")),
      image: "sigiria-sri-lanka-945x630.jpg",
      rating: 4.9,
    },
    {
      id: "2",
      name: t("destinations.kandy.name"),
      slug: nameToSlug(t("destinations.kandy.name")),
      image: "temple.jpg",
      rating: 4.8,
    },
    {
      id: "3",
      name: t("destinations.ella.name"),
      slug: nameToSlug(t("destinations.ella.name")),
      image: "distEella.jpg",
      rating: 4.9,
    },
  ]

  return (
    <section id="destinations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 mr-2" />
{t("destinations.hero.exploreParadise")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t("destinations.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("destinations.subtitle")}</p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => navigateToDestination(destination.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  navigateToDestination(destination.id)
                }
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${(destination.image || "/placeholder.svg").replace(/^\//, "")}`}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Category Badge */}
                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-800">{destination.rating}</span>
                </div>

                {/* Price */}
                {/* <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="text-xs text-gray-600">{t("destinations.from")}</div>
                  <div className="text-lg font-bold text-gray-900">{destination.price}</div>
                </div> */}
              </div>

              {/* Content */}
              {/* <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>
                      {destination.duration} {t("destinations.days")}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{destination.description}</p>

                {/* CTA Button */}
              {/*  <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>{t("common.learnMore")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div> */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{destination.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      navigateToDestination(destination.id)
                    }}
                  >
{t("common.viewDetails")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button onClick={() => navigateToDestinations()} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
            <span>{t("destinations.viewAll")}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
