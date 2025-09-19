"use client"

import { useState, useEffect } from "react"
import { Camera, Play, ArrowRight } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Gallery() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("gallery")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const galleryItems = [
    {
      id: 1,
      image: "sigiriya-rock.jpg",
      title: t("gallery.items.sigiriya.title"),
      category: "heritage",
      type: "image",
    },
    {
      id: 2,
      image: "beach.jpg",
      title: t("gallery.items.beach.title"),
      category: "beaches",
      type: "image",
    },
    {
      id: 3,
      image: "tea.jpg",
      title: t("gallery.items.tea.title"),
      category: "nature",
      type: "image",
    },
    {
      id: 4,
      image: "temple-sacred.jpg",
      title: t("gallery.items.temple.title"),
      category: "culture",
      type: "image",
    },
    {
      id: 5,
      image: "wildlife.jpg",
      title: t("gallery.items.wildlife.title"),
      category: "adventure",
      type: "image",
    },
    {
      id: 6,
      image: "cultural.jpg",
      title: t("gallery.items.cultural.title"),
      category: "culture",
      type: "image",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4 mr-2" />
{t("gallery.hero.visualJourney")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t("gallery.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("gallery.subtitle")}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Type Indicator */}
                {item.type === "video" && (
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                )}

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-2">
          <a
            href="/gallery"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
          >
            <span>{t("gallery.viewAll")}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
