"use client";

import { useState } from "react";
import { MapPin, Heart, Filter } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface DestinationsPageProps {
  onNavigateToDestination: (id: string) => void;
}

export default function DestinationsPage({
  onNavigateToDestination,
}: DestinationsPageProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", labelKey: "destinations.filters.all" },
    { id: "heritage", labelKey: "destinations.filters.heritage" },
    { id: "nature", labelKey: "destinations.filters.nature" },
    { id: "culture", labelKey: "destinations.filters.culture" },
    { id: "adventure", labelKey: "destinations.filters.adventure" },
    { id: "beaches", labelKey: "destinations.filters.beaches" },
  ];

  const durations = [
    { id: "all", labelKey: "destinations.filters.anyDuration" },
    { id: "1", labelKey: "destinations.filters.oneDay" },
    { id: "2-3", labelKey: "destinations.filters.twoThreeDays" },
    { id: "4-7", labelKey: "destinations.filters.fourPlusDays" },
    { id: "7+", labelKey: "destinations.filters.fourPlusDays" },
  ];

  const destinations = [
    {
      id: 1,
      name: t("destinations.destination.sigiriya.name"),
      image: "/sigiriya-rock.jpg",
      category: "heritage",
      duration: "2-3",
      price: 150,
      rating: 4.9,
      reviews: 234,
      location: t("destinations.destination.sigiriya.location"),
      description: t("destinations.destination.sigiriya.description"),
      highlights: [
        t("destinations.destination.sigiriya.highlights.ancient"),
        t("destinations.destination.sigiriya.highlights.frescoes"),
        t("destinations.destination.sigiriya.highlights.gardens"),
        t("destinations.destination.sigiriya.highlights.museum"),
      ],
      bestTime: t("destinations.destination.sigiriya.bestTime"),
      difficulty: t("destinations.destination.sigiriya.difficulty"),
      groupSize: t("destinations.destination.sigiriya.groupSize"),
    },
    {
      id: 2,
      name: t("destinations.destination.kandy.name"),
      image: "/Distination/kandy-cultural.jpg",
      category: "culture",
      duration: "2-3",
      price: 200,
      rating: 4.8,
      reviews: 189,
      location: t("destinations.destination.kandy.location"),
      description: t("destinations.destination.kandy.description"),
      highlights: [
        t("destinations.destination.kandy.highlights.temple"),
        t("destinations.destination.kandy.highlights.gardens"),
        t("destinations.destination.kandy.highlights.dance"),
        t("destinations.destination.kandy.highlights.lake"),
      ],
      bestTime: t("destinations.destination.kandy.bestTime"),
      difficulty: t("destinations.destination.kandy.difficulty"),
      groupSize: t("destinations.destination.kandy.groupSize"),
    },
    {
      id: 3,
      name: t("destinations.destination.ella.name"),
      image: "/Distination/Ella-country.jpg",
      category: "nature",
      duration: "2-3",
      price: 120,
      rating: 4.9,
      reviews: 156,
      location: t("destinations.destination.ella.location"),
      description: t("destinations.destination.ella.description"),
      highlights: [
        t("destinations.destination.ella.highlights.bridge"),
        t("destinations.destination.ella.highlights.peak"),
        t("destinations.destination.ella.highlights.tea"),
        t("destinations.destination.ella.highlights.train"),
      ],
      bestTime: t("destinations.destination.ella.bestTime"),
      difficulty: t("destinations.destination.ella.difficulty"),
      groupSize: t("destinations.destination.ella.groupSize"),
    },
    {
      id: 4,
      name: t("destinations.destination.galle.name"),
      image: "/Distination/dutch-fort.jpg",
      category: "heritage",
      duration: "1",
      price: 80,
      rating: 4.7,
      reviews: 203,
      location: t("destinations.destination.galle.location"),
      description: t("destinations.destination.galle.description"),
      highlights: [
        t("destinations.destination.galle.highlights.architecture"),
        t("destinations.destination.galle.highlights.lighthouse"),
        t("destinations.destination.galle.highlights.ramparts"),
        t("destinations.destination.galle.highlights.museum"),
      ],
      bestTime: t("destinations.destination.galle.bestTime"),
      difficulty: t("destinations.destination.galle.difficulty"),
      groupSize: t("destinations.destination.galle.groupSize"),
    },
    {
      id: 5,
      name: t("destinations.destination.yala.name"),
      image: "/Distination/yala-national.jpg",
      category: "nature",
      duration: "1-2",
      price: 180,
      rating: 4.8,
      reviews: 178,
      location: t("destinations.destination.yala.location"),
      description: t("destinations.destination.yala.description"),
      highlights: [
        t("destinations.destination.yala.highlights.leopard"),
        t("destinations.destination.yala.highlights.elephants"),
        t("destinations.destination.yala.highlights.birds"),
        t("destinations.destination.yala.highlights.camping"),
      ],
      bestTime: t("destinations.destination.yala.bestTime"),
      difficulty: t("destinations.destination.yala.difficulty"),
      groupSize: t("destinations.destination.yala.groupSize"),
    },
    {
      id: 6,
      name: t("destinations.destination.mirissa.name"),
      image: "/Distination/mirissa-beach.jpg",
      category: "beaches",
      duration: "2-3",
      price: 100,
      rating: 4.9,
      reviews: 267,
      location: t("destinations.destination.mirissa.location"),
      description: t("destinations.destination.mirissa.description"),
      highlights: [
        t("destinations.destination.mirissa.highlights.whales"),
        t("destinations.destination.mirissa.highlights.beaches"),
        t("destinations.destination.mirissa.highlights.surfing"),
        t("destinations.destination.mirissa.highlights.coconut"),
      ],
      bestTime: t("destinations.destination.mirissa.bestTime"),
      difficulty: t("destinations.destination.mirissa.difficulty"),
      groupSize: t("destinations.destination.mirissa.groupSize"),
    },
    {
      id: 7,
      name: t("destinations.destination.anuradhapura.name"),
      image: "/Distination/anuradhapura.jpg",
      category: "heritage",
      duration: "1-2",
      price: 90,
      rating: 4.6,
      reviews: 145,
      location: t("destinations.destination.anuradhapura.location"),
      description: t("destinations.destination.anuradhapura.description"),
      highlights: [
        t("destinations.destination.anuradhapura.highlights.bodhi"),
        t("destinations.destination.anuradhapura.highlights.dagobas"),
        t("destinations.destination.anuradhapura.highlights.ruins"),
        t("destinations.destination.anuradhapura.highlights.archaeological"),
      ],
      bestTime: t("destinations.destination.anuradhapura.bestTime"),
      difficulty: t("destinations.destination.anuradhapura.difficulty"),
      groupSize: t("destinations.destination.anuradhapura.groupSize"),
    },
    {
      id: 8,
      name: t("destinations.destination.nuwara.name"),
      image: "/tea.jpg",
      category: "nature",
      duration: "2-3",
      price: 110,
      rating: 4.7,
      reviews: 198,
      location: t("destinations.destination.nuwara.location"),
      description: t("destinations.destination.nuwara.description"),
      highlights: [
        t("destinations.destination.nuwara.highlights.tea"),
        t("destinations.destination.nuwara.highlights.architecture"),
        t("destinations.destination.nuwara.highlights.horton"),
        t("destinations.destination.nuwara.highlights.lake"),
      ],
      bestTime: t("destinations.destination.nuwara.bestTime"),
      difficulty: t("destinations.destination.nuwara.difficulty"),
      groupSize: t("destinations.destination.nuwara.groupSize"),
    },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const categoryMatch =
      selectedCategory === "all" || dest.category === selectedCategory;
    const durationMatch =
      selectedDuration === "all" || dest.duration === selectedDuration;
    return categoryMatch && durationMatch;
  });

  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/Hero/Destination.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8">
            <MapPin className="w-4 h-4 mr-2" /> {t("destinations.hero.exploreParadise")}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t("destinations.hero.title")}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            {t("destinations.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {t("destinations.filters.categories")}:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {t(category.labelKey)}
                  </option>
                ))}
              </select>

              {/* Duration Filter */}
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {durations.map((duration) => (
                  <option key={duration.id} value={duration.id}>
                    {t(duration.labelKey)}
                  </option>
                ))}
              </select>

              {/* Sort Filter */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="popular">{t("destinations.sort.mostPopular")}</option>
                <option value="rating">{t("destinations.sort.highestRated")}</option>
                <option value="price-low">{t("destinations.sort.priceLowToHigh")}</option>
                <option value="price-high">{t("destinations.sort.priceHighToLow")}</option>
              </select>
            </div>

            <div className="text-sm text-gray-600">
              {t("destinations.showing")}{" "}
              <span className="font-semibold text-emerald-600">
                {sortedDestinations.length}
              </span>{" "}
              {t("destinations.destinations")}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedDestinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                    {t(`destinations.categories.${destination.category}`)}
                  </div>

                  {/* Heart Icon */}
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <Heart className="w-5 h-5 text-white hover:text-red-400 transition-colors duration-300" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                      {destination.name}
                    </h3>
                    <p className="text-gray-500 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {destination.location}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 2).map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                          +{destination.highlights.length - 2}{" "}
                          {t("common.readMore")}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    <button
                      onClick={() =>
                        onNavigateToDestination(destination.id.toString())
                      }
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                      {t("common.learnMore")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300">
              {t("common.viewAll")} {t("destinations.title")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
