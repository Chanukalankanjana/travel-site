"use client"

import { useState } from "react"
import { Camera, Play, ArrowLeft, Heart, Eye } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function GalleryPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { id: "all", labelKey: "gallery.categories.all" },
    { id: "heritage", labelKey: "gallery.categories.heritage" },
    { id: "nature", labelKey: "gallery.categories.nature" },
    { id: "adventure", labelKey: "gallery.categories.adventure" },
    { id: "culture", labelKey: "gallery.categories.culture" },
    { id: "beaches", labelKey: "gallery.categories.beaches" },
    { id: "wildlife", labelKey: "gallery.categories.wildlife" },
  ]

  const galleryItems = [
    {
      id: 1,
      image: "/images/sigiriya.jpg",
      title: "Sigiriya Rock Fortress",
      category: "heritage",
      type: "image",
      likes: 234,
      views: 1250,
      description: "Ancient royal palace and fortress with stunning frescoes and water gardens",
    },
    {
      id: 2,
      image: "/images/beach-sunset.jpg",
      title: "Pristine Beach Paradise",
      category: "beaches",
      type: "image",
      likes: 189,
      views: 980,
      description: "Golden beaches with crystal clear waters and spectacular sunsets",
    },
    {
      id: 3,
      image: "/images/tea-plantation.jpg",
      title: "Emerald Tea Plantations",
      category: "nature",
      type: "image",
      likes: 312,
      views: 1450,
      description: "Rolling hills covered in lush green tea bushes stretching to the horizon",
    },
    {
      id: 4,
      image: "/images/kandy-temple.jpg",
      title: "Temple of the Sacred Tooth",
      category: "culture",
      type: "image",
      likes: 267,
      views: 1100,
      description: "Sacred Buddhist temple housing the relic of the tooth of Buddha",
    },
    {
      id: 5,
      image: "/images/elephant-safari.jpg",
      title: "Leopard Safari Adventure",
      category: "adventure",
      type: "image",
      likes: 445,
      views: 2100,
      description: "Wildlife encounters in their natural habitat including leopards and elephants",
    },
    {
      id: 6,
      image: "/images/cultural-dance.jpg",
      title: "Traditional Dance Performance",
      category: "culture",
      type: "image",
      likes: 203,
      views: 850,
      description: "Vibrant traditional Kandyan dance performances with colorful costumes",
    },
    {
      id: 7,
      image: "/images/galle-fort.jpg",
      title: "Galle Dutch Fort",
      category: "heritage",
      type: "image",
      likes: 178,
      views: 920,
      description: "UNESCO World Heritage colonial fort with historic lighthouse",
    },
    {
      id: 8,
      image: "/images/ella-train.jpg",
      title: "Scenic Train Journey",
      category: "nature",
      type: "image",
      likes: 356,
      views: 1680,
      description: "One of the most beautiful train rides in the world through misty mountains",
    },
    {
      id: 9,
      image: "/images/sigiriya.jpg",
      title: "Wildlife Documentary",
      category: "wildlife",
      type: "video",
      likes: 289,
      views: 1340,
      description: "Exclusive footage of Sri Lankan leopards in Yala National Park",
    },
    {
      id: 10,
      image: "/images/beach-sunset.jpg",
      title: "Whale Watching Experience",
      category: "adventure",
      type: "video",
      likes: 412,
      views: 1890,
      description: "Blue whale watching off the coast of Mirissa",
    },
    {
      id: 11,
      image: "/images/tea-plantation.jpg",
      title: "Tea Factory Tour",
      category: "culture",
      type: "video",
      likes: 198,
      views: 760,
      description: "Traditional tea processing methods in the hill country",
    },
    {
      id: 12,
      image: "/images/kandy-temple.jpg",
      title: "Temple Ceremony",
      category: "culture",
      type: "video",
      likes: 234,
      views: 1020,
      description: "Sacred evening ceremony at the Temple of the Tooth",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Camera className="w-4 h-4 mr-2" />
              {t("gallery.hero.title")}
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">{t("gallery.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t("gallery.hero.subtitle")}</p>

            {/* Back to Home */}
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-emerald-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="text-center mb-12">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-emerald-600">{filteredItems.length}</span> items
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  in <span className="font-semibold">{t(`gallery.categories.${selectedCategory}`)}</span>
                </span>
              )}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Type Indicator */}
                  {item.type === "video" && (
                    <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  )}

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between text-white/80 text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                        {t(`gallery.categories.${item.category}`)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Load More Images
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryItems.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
              alt={galleryItems.find((item) => item.id === selectedImage)?.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
