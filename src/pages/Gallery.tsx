"use client";

import { useMemo, useState } from "react";
import { Camera, Play, ArrowLeft, Heart, Eye } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GalleryPage() {
  const { t, currentLanguage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

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
    { id: 1, image: "/sigiriya-rock.jpg", titleKey: "gallery.items.sigiriya.title", descriptionKey: "gallery.items.sigiriya.description", category: "heritage", type: "image", likes: 234, views: 1250 },
    { id: 2, image: "/beach.jpg", titleKey: "gallery.items.beach.title", descriptionKey: "gallery.items.beach.description", category: "beaches", type: "image", likes: 189, views: 980 },
    { id: 3, image: "/tea.jpg", titleKey: "gallery.items.tea.title", descriptionKey: "gallery.items.tea.description", category: "nature", type: "image", likes: 312, views: 1450 },
    { id: 4, image: "/temple-sacred.jpg", titleKey: "gallery.items.temple.title", descriptionKey: "gallery.items.temple.description", category: "culture", type: "image", likes: 267, views: 1100 },
    { id: 5, image: "/Sri-Lanka-wildlife.webp", titleKey: "gallery.items.wildlife.title", descriptionKey: "gallery.items.wildlife.description", category: "wildlife", type: "image", likes: 220, views: 1200 },
    { id: 6, image: "/Sri-Lankan-leopard.jpg", titleKey: "gallery.items.leopard.title", descriptionKey: "gallery.items.leopard.description", category: "wildlife", type: "image", likes: 245, views: 1500 },
    { id: 7, image: "/distEella.jpg", titleKey: "gallery.items.mountain.title", descriptionKey: "gallery.items.mountain.description", category: "nature", type: "image", likes: 356, views: 1680 },
    { id: 8, image: "/Sinharaja.jpg", titleKey: "gallery.items.forest.title", descriptionKey: "gallery.items.forest.description", category: "adventure", type: "image", likes: 198, views: 860 },
    { id: 9, image: "/adventureWild.jpg", titleKey: "gallery.items.wildlife.title", descriptionKey: "gallery.items.wildlife.description", category: "wildlife", type: "image", likes: 412, views: 1890 },
    { id: 10, image: "/whaleWatch.webp", titleKey: "gallery.items.whale.title", descriptionKey: "gallery.items.whale.description", category: "adventure", type: "image", likes: 330, views: 1400 },
    { id: 11, image: "/cultural.jpg", titleKey: "gallery.items.cultural.title", descriptionKey: "gallery.items.cultural.description", category: "culture", type: "image", likes: 203, views: 850 },
    { id: 12, image: "/culturalHeri.jpg", titleKey: "gallery.items.heritage.title", descriptionKey: "gallery.items.heritage.description", category: "heritage", type: "image", likes: 178, views: 920 },
    { id: 13, image: "/beachRelax.jpg", titleKey: "gallery.items.beachRelax.title", descriptionKey: "gallery.items.beachRelax.description", category: "beaches", type: "image", likes: 260, views: 1010 },
    { id: 14, image: "/tea.jpg", titleKey: "gallery.items.teaPlantation.title", descriptionKey: "gallery.items.teaPlantation.description", category: "nature", type: "image", likes: 190, views: 780 },
    { id: 15, image: "/temple.jpg", titleKey: "gallery.items.templeSacred.title", descriptionKey: "gallery.items.templeSacred.description", category: "culture", type: "image", likes: 222, views: 990 },
    { id: 16, image: "/sigiria-sri-lanka-945x630.jpg", titleKey: "gallery.items.ancient.title", descriptionKey: "gallery.items.ancient.description", category: "heritage", type: "image", likes: 240, views: 1120 },
    { id: 17, image: "/hero.webp", titleKey: "gallery.items.sunset.title", descriptionKey: "gallery.items.sunset.description", category: "beaches", type: "image", likes: 175, views: 800 },
    { id: 18, image: "/tea-factory.webp", titleKey: "gallery.items.teaFactory.title", descriptionKey: "gallery.items.teaFactory.description", category: "culture", type: "image", likes: 198, views: 760 },
    { id: 19, image: "/fishing-boat.jpg", titleKey: "gallery.items.boat.title", descriptionKey: "gallery.items.boat.description", category: "beaches", type: "image", likes: 160, views: 720 },
    { id: 20, image: "/traditiona-dance.jpg", titleKey: "gallery.items.traditional.title", descriptionKey: "gallery.items.traditional.description", category: "culture", type: "image", likes: 210, views: 840 },
    { id: 21, image: "/safari.webp", titleKey: "gallery.items.wildlife.title", descriptionKey: "gallery.items.wildlife.description", category: "wildlife", type: "image", likes: 190, views: 720 },
    { id: 22, image: "/adventure.jpg", titleKey: "gallery.items.adventure.title", descriptionKey: "gallery.items.adventure.description", category: "adventure", type: "image", likes: 205, views: 760 },
    { id: 23, image: "/temple.jpg", titleKey: "gallery.items.templeSacred.title", descriptionKey: "gallery.items.templeSacred.description", category: "culture", type: "image", likes: 160, views: 650 },
    { id: 24, image: "/ancien-ruins.jpg", titleKey: "gallery.items.ancient.title", descriptionKey: "gallery.items.ancient.description", category: "heritage", type: "image", likes: 230, views: 980 },
    { id: 25, image: "/beach.jpg", titleKey: "gallery.items.beaches.title", descriptionKey: "gallery.items.beaches.description", category: "beaches", type: "image", likes: 240, views: 1000 },
    { id: 26, image: "/train-journey.jpg", titleKey: "gallery.items.train.title", descriptionKey: "gallery.items.train.description", category: "nature", type: "image", likes: 188, views: 700 },
    { id: 27, image: "/tropical-sunset.jpg", titleKey: "gallery.items.sunset.title", descriptionKey: "gallery.items.sunset.description", category: "beaches", type: "image", likes: 155, views: 610 },
    { id: 28, image: "/world-heritage.jpg", titleKey: "gallery.items.heritage.title", descriptionKey: "gallery.items.heritage.description", category: "heritage", type: "image", likes: 175, views: 690 },
  ];

  const filteredItems = useMemo(
    () =>
      selectedCategory === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  const visibleItems = useMemo(
    () => filteredItems.slice(0, visibleCount),
    [filteredItems, visibleCount]
  );

  const countLabels = currentLanguage.code === "ru"
    ? { showing: "Показано", items: "элементов", in: "в" }
    : { showing: "Showing", items: "items", in: "in" };
  const loadMoreLabel = currentLanguage.code === "ru" ? "Загрузить больше изображений" : "Load More Images";

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
              {countLabels.showing}{" "}
              <span className="font-semibold text-emerald-600">
                {filteredItems.length}
              </span>{" "}
              {countLabels.items}
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  {countLabels.in}{" "}
                  <span className="font-semibold">
                    {t(`gallery.categories.${selectedCategory}`)}
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
            {visibleItems.map((item) => (
              <div key={item.id} className="mb-6 break-inside-avoid">
                <div
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={t(item.titleKey)}
                      className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {t(item.titleKey)}
                      </h3>
                      <div className="flex items-center justify-between text-white/80 text-xs">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-3 h-3" />
                            <span>{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{item.views}</span>
                          </div>
                        </div>
                        <div className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full">
                          <span className="text-[11px] font-medium">
                            {t(`gallery.categories.${item.category}`)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount(filteredItems.length)}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                {loadMoreLabel}
              </button>
            </div>
          )}
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
                t(
                  galleryItems.find((item) => item.id === selectedImage)
                    ?.titleKey || "gallery.title"
                )
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
