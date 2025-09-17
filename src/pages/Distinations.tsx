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
      name: "Sigiriya Rock Fortress",
      image: "/images/sigiriya.jpg",
      category: "heritage",
      duration: "2-3",
      price: 150,
      rating: 4.9,
      reviews: 234,
      location: "Central Province",
      description:
        "Ancient royal palace and fortress built on a massive rock formation, featuring stunning frescoes and water gardens.",
      highlights: [
        "Ancient Palace Ruins",
        "Famous Frescoes",
        "Water Gardens",
        "Archaeological Museum",
      ],
      bestTime: "December to April",
      difficulty: "Moderate",
      groupSize: "2-15 people",
    },
    {
      id: 2,
      name: "Kandy Cultural Triangle",
      image: "/images/kandy-temple.jpg",
      category: "culture",
      duration: "2-3",
      price: 200,
      rating: 4.8,
      reviews: 189,
      location: "Central Province",
      description:
        "Sacred city housing the Temple of the Tooth Relic, surrounded by beautiful botanical gardens and traditional culture.",
      highlights: [
        "Temple of the Tooth",
        "Royal Botanical Gardens",
        "Traditional Dance Shows",
        "Kandy Lake",
      ],
      bestTime: "Year-round",
      difficulty: "Easy",
      groupSize: "2-20 people",
    },
    {
      id: 3,
      name: "Ella Hill Country",
      image: "/images/ella-train.jpg",
      category: "nature",
      duration: "2-3",
      price: 120,
      rating: 4.9,
      reviews: 156,
      location: "Uva Province",
      description:
        "Misty mountains, tea plantations, and scenic train rides through some of Sri Lanka's most beautiful landscapes.",
      highlights: [
        "Nine Arch Bridge",
        "Little Adam's Peak",
        "Tea Plantation Tours",
        "Scenic Train Ride",
      ],
      bestTime: "December to March",
      difficulty: "Moderate",
      groupSize: "2-12 people",
    },
    {
      id: 4,
      name: "Galle Dutch Fort",
      image: "/images/galle-fort.jpg",
      category: "heritage",
      duration: "1",
      price: 80,
      rating: 4.7,
      reviews: 203,
      location: "Southern Province",
      description:
        "UNESCO World Heritage colonial fort with historic lighthouse, museums, and charming cobblestone streets.",
      highlights: [
        "Colonial Architecture",
        "Historic Lighthouse",
        "Fort Ramparts",
        "Maritime Museum",
      ],
      bestTime: "November to April",
      difficulty: "Easy",
      groupSize: "2-25 people",
    },
    {
      id: 5,
      name: "Yala National Park",
      image: "/images/elephant-safari.jpg",
      category: "nature",
      duration: "1-2",
      price: 180,
      rating: 4.8,
      reviews: 178,
      location: "Southern Province",
      description:
        "Premier wildlife destination famous for leopards, elephants, and diverse bird species in their natural habitat.",
      highlights: [
        "Leopard Spotting",
        "Elephant Herds",
        "Bird Watching",
        "Beach Camping",
      ],
      bestTime: "February to July",
      difficulty: "Easy",
      groupSize: "2-8 people",
    },
    {
      id: 6,
      name: "Mirissa Beach",
      image: "/images/beach-sunset.jpg",
      category: "beaches",
      duration: "2-3",
      price: 100,
      rating: 4.9,
      reviews: 267,
      location: "Southern Province",
      description:
        "Pristine golden beaches perfect for whale watching, surfing, and enjoying spectacular tropical sunsets.",
      highlights: [
        "Blue Whale Watching",
        "Golden Beaches",
        "Surfing Spots",
        "Coconut Tree Hill",
      ],
      bestTime: "November to April",
      difficulty: "Easy",
      groupSize: "2-15 people",
    },
    {
      id: 7,
      name: "Anuradhapura Ancient City",
      image: "/images/sigiriya.jpg",
      category: "heritage",
      duration: "1-2",
      price: 90,
      rating: 4.6,
      reviews: 145,
      location: "North Central Province",
      description:
        "Ancient capital with sacred Buddhist sites, massive dagobas, and ruins dating back over 2,000 years.",
      highlights: [
        "Sacred Bodhi Tree",
        "Ancient Dagobas",
        "Ruins & Monasteries",
        "Archaeological Sites",
      ],
      bestTime: "December to March",
      difficulty: "Easy",
      groupSize: "2-20 people",
    },
    {
      id: 8,
      name: "Nuwara Eliya Tea Country",
      image: "/images/tea-plantation.jpg",
      category: "nature",
      duration: "2-3",
      price: 110,
      rating: 4.7,
      reviews: 198,
      location: "Central Province",
      description:
        "Cool climate hill station surrounded by tea plantations, colonial architecture, and beautiful gardens.",
      highlights: [
        "Tea Factory Tours",
        "Colonial Architecture",
        "Horton Plains",
        "Gregory Lake",
      ],
      bestTime: "December to April",
      difficulty: "Easy",
      groupSize: "2-18 people",
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
            <MapPin className="w-4 h-4 mr-2" /> Explore Paradise
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Discover Sri Lanka
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            From ancient kingdoms to pristine beaches, explore the island's most
            captivating destinations.
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
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold text-emerald-600">
                {sortedDestinations.length}
              </span>{" "}
              destinations
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
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800 capitalize">
                    {destination.category}
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
