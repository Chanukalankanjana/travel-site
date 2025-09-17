"use client";

import { useState } from "react";
import { Camera, Play, ArrowLeft, Heart, Eye } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", labelKey: "gallery.categories.all" },
    { id: "heritage", labelKey: "gallery.categories.heritage" },
    { id: "nature", labelKey: "gallery.categories.nature" },
    { id: "adventure", labelKey: "gallery.categories.adventure" },
    { id: "culture", labelKey: "gallery.categories.culture" },
    { id: "beaches", labelKey: "gallery.categories.beaches" },
    { id: "wildlife", labelKey: "gallery.categories.wildlife" },
  ];

  const galleryItems = [
    {
      id: 1,
      image: "/images/sigiriya.jpg",
      titleKey: "gallery.items.sigiriya.title",
      category: "heritage",
      type: "image",
      likes: 234,
      views: 1250,
      descriptionKey: "gallery.items.sigiriya.description",
    },
    {
      id: 2,
      image: "/images/beach-sunset.jpg",
      titleKey: "gallery.items.beach.title",
      category: "beaches",
      type: "image",
      likes: 189,
      views: 980,
      descriptionKey: "gallery.items.beach.description",
    },
    {
      id: 3,
      image: "/images/tea-plantation.jpg",
      titleKey: "gallery.items.tea.title",
      category: "nature",
      type: "image",
      likes: 312,
      views: 1450,
      descriptionKey: "gallery.items.tea.description",
    },
    {
      id: 4,
      image: "/images/kandy-temple.jpg",
      title: "Temple of the Sacred Tooth",
      category: "culture",
      type: "image",
      likes: 267,
      views: 1100,
      description:
        "Sacred Buddhist temple housing the relic of the tooth of Buddha",
    },
    {
      id: 5,
      image: "/images/elephant-safari.jpg",
      title: "Leopard Safari Adventure",
      category: "adventure",
      type: "image",
      likes: 445,
      views: 2100,
      description:
        "Wildlife encounters in their natural habitat including leopards and elephants",
    },
    {
      id: 6,
      image: "/images/cultural-dance.jpg",
      title: "Traditional Dance Performance",
      category: "culture",
      type: "image",
      likes: 203,
      views: 850,
      description:
        "Vibrant traditional Kandyan dance performances with colorful costumes",
    },
    {
      id: 7,
      image: "/images/galle-fort.jpg",
      title: "Galle Dutch Fort",
      category: "heritage",
      type: "image",
      likes: 178,
      views: 920,
      description:
        "UNESCO World Heritage colonial fort with historic lighthouse",
    },
    {
      id: 8,
      image: "/images/ella-train.jpg",
      title: "Scenic Train Journey",
      category: "nature",
      type: "image",
      likes: 356,
      views: 1680,
      description:
        "One of the most beautiful train rides in the world through misty mountains",
    },
    {
      id: 9,
      image: "/images/sigiriya.jpg",
      title: "Wildlife Documentary",
      category: "wildlife",
      type: "video",
      likes: 289,
      views: 1340,
      description:
        "Exclusive footage of Sri Lankan leopards in Yala National Park",
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
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/Hero/Gallery.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8">
            <Camera className="w-4 h-4 mr-2" /> {t("gallery.hero.title")}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t("gallery.title")}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            {t("gallery.hero.subtitle")}
          </p>
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
              Showing{" "}
              <span className="font-semibold text-emerald-600">
                {filteredItems.length}
              </span>{" "}
              items
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  in{" "}
                  <span className="font-semibold">
                    {t(`gallery.categories.${selectedCategory}`)}
                  </span>
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
                    alt={t(item.titleKey)}
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
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-white/80 text-sm mb-3 line-clamp-2">
                      {t(item.descriptionKey)}
                    </p>
                    <div className="flex items-center justify-between text-white/80 text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>
                            {item.likes} {t("gallery.common.likes")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>
                            {item.views} {t("gallery.common.views")}
                          </span>
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
      <Footer />
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={
                galleryItems.find((item) => item.id === selectedImage)?.image ||
                "/placeholder.svg"
              }
              alt={
                galleryItems.find((item) => item.id === selectedImage)?.title
              }
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
  );
}
