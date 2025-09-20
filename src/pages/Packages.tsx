"use client";

import { useState, useEffect } from "react";

import {
  Clock,
  Star,
  Check,
  ArrowRight,
  Calendar,
  Gift,
  MapPin,
  Camera,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const PackagesContent = () => {
  const { t, currentLanguage } = useLanguage();
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = (packageName: string) => {
    const number = t(`whatsapp.phoneNumber.${currentLanguage.code}`);
    const baseMessage = t("whatsapp.message.packageDetail");
    const message = encodeURIComponent(baseMessage.replace("{packageName}", packageName));
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  const getTourName = (tourId: number) => {
    const tourKeys: { [key: number]: string } = {
      1: "packages.tours.ella.name",
      2: "packages.tours.galle.name",
      3: "packages.tours.colombo.name",
      4: "packages.tours.kandy.name",
      5: "packages.tours.sigiriya.name",
      6: "packages.tours.yala.name",
      7: "packages.tours.ellaYala.name",
      8: "packages.tours.mirissa.name",
      9: "packages.tours.bentota.name",
      10: "packages.tours.unawatuna.name",
      11: "packages.tours.trincomalee.name",
      12: "packages.tours.arugam.name",
      13: "packages.tours.negombo.name",
      14: "packages.tours.gold.name",
      15: "packages.tours.silva.name",
      16: "packages.tours.grand.name",
    };
    return t(tourKeys[tourId] || "");
  };

  const getTourSubtitle = (tourId: number) => {
    const subtitleKeys: { [key: number]: string } = {
      1: "packages.tours.ella.subtitle",
      2: "packages.tours.galle.subtitle",
      3: "packages.tours.colombo.subtitle",
      4: "packages.tours.kandy.subtitle",
      5: "packages.tours.sigiriya.subtitle",
      6: "packages.tours.yala.subtitle",
      7: "packages.tours.ellaYala.subtitle",
      8: "packages.tours.mirissa.subtitle",
      9: "packages.tours.bentota.subtitle",
      10: "packages.tours.unawatuna.subtitle",
      11: "packages.tours.trincomalee.subtitle",
      12: "packages.tours.arugam.subtitle",
      13: "packages.tours.negombo.subtitle",
      14: "packages.tours.gold.subtitle",
      15: "packages.tours.silva.subtitle",
      16: "packages.tours.grand.subtitle",
    };
    return t(subtitleKeys[tourId] || "");
  };

  const durations = [
    { id: "all", labelKey: "packages.filters.allTours" },
    { id: "1day", labelKey: "packages.filters.oneDay" },
    { id: "2day", labelKey: "packages.filters.twoDays" },
    { id: "7day", labelKey: "packages.filters.sevenDays" },
  ];

  const categories = [
    { id: "all", labelKey: "packages.filters.allCategories" },
    { id: "cultural", labelKey: "packages.filters.culturalHeritage" },
    { id: "adventure", labelKey: "packages.filters.adventureNature" },
    { id: "wildlife", labelKey: "packages.filters.wildlifeSafari" },
    { id: "city", labelKey: "packages.filters.cityTours" },
    { id: "beach", labelKey: "packages.filters.beachCoast" },
    { id: "comprehensive", labelKey: "packages.filters.twoDays" },
  ];

  const tourPackages = [
    // One Day Tours
    {
      id: 1,
      name: "Ella Excursion",
      subtitle: "Foggy City Adventure",
      duration: "1day",
      category: "adventure",
      price: "$85",
      originalPrice: "$110",
      image: "/packages/Ella.jpg",
      rating: 4.9,
      reviews: 234,
      groupSize: "2-15",
      badge: "popular",
      highlights: [
        "packages.tours.ella.highlights.rawana",
        "packages.tours.ella.highlights.nineArch",
        "packages.tours.ella.highlights.monkeys",
        "packages.tours.ella.highlights.adamsPeak",
        "packages.tours.ella.highlights.tea",
        "Sri Lanka Traditional Ayurvedic Garden",
      ],
      included: [
        "packages.tours.ella.included.tickets",
        "packages.tours.ella.included.guide",
        "packages.tours.ella.included.water",
        "packages.tours.ella.included.vehicle",
      ],
    },
    {
      id: 2,
      name: "Galle Tour",
      subtitle: "Dutch Fort Heritage",
      duration: "1day",
      category: "cultural",
      price: "$75",
      originalPrice: "$95",
      image: "/packages/Galle.jpg",
      rating: 4.8,
      reviews: 189,
      groupSize: "2-20",
      badge: "heritage",
      highlights: [
        "packages.tours.galle.highlights.turtleFarm",
        "packages.tours.galle.highlights.boatSafari",
        "packages.tours.galle.highlights.moonstoneMine",
        "packages.tours.galle.highlights.turtleBeach",
        "packages.tours.galle.highlights.dutchFort",
      ],
      included: [
        "packages.tours.galle.included.tickets",
        "packages.tours.galle.included.guide",
        "packages.tours.galle.included.water",
        "packages.tours.galle.included.vehicle",
      ],
      extras: [],
    },
    {
      id: 3,
      name: "Colombo City Tour",
      subtitle: "Modern Capital Experience",
      duration: "1day",
      category: "city",
      price: "$65",
      originalPrice: "$85",
      image: "/packages/Colombo.png",
      rating: 4.7,
      reviews: 156,
      groupSize: "2-25",
      badge: "city",
      highlights: [
        "packages.tours.colombo.highlights.galleFace",
        "packages.tours.colombo.highlights.gangaramaya",
        "packages.tours.colombo.highlights.independence",
        "packages.tours.colombo.highlights.pettah",
        "packages.tours.colombo.highlights.shoppingMall",
      ],
      included: [
        "packages.tours.colombo.included.tickets",
        "packages.tours.colombo.included.guide",
        "packages.tours.colombo.included.water",
        "packages.tours.colombo.included.vehicle",
      ],
    },
    {
      id: 4,
      name: "Kandy Excursions",
      subtitle: "Ancient City of Kandy",
      duration: "1day",
      category: "cultural",
      price: "$95",
      originalPrice: "$120",
      image: "/packages/Kandy.jpg",
      rating: 4.9,
      reviews: 203,
      groupSize: "2-15",
      badge: "bestseller",
      highlights: [
        "packages.tours.kandy.highlights.elephantFeeding",
        "packages.tours.kandy.highlights.elephantRide",
        "packages.tours.kandy.highlights.temple",
        "packages.tours.kandy.highlights.botanicalGardens",
        "Gem Museum",
        "Ayurvedic Center, Spice Garden",
        "Tea Factory and Plantations",
      ],
      included: [
        "packages.tours.kandy.included.tickets",
        "packages.tours.kandy.included.guide",
        "packages.tours.kandy.included.water",
        "Comfortable vehicle",
      ],
      extras: [],
    },
    {
      id: 5,
      name: "Sigiriya Excursion",
      subtitle: "UNESCO World Wonder",
      duration: "1day",
      category: "cultural",
      price: "$105",
      originalPrice: "$135",
      image: "/packages/Sigiriya.jpg",
      rating: 4.9,
      reviews: 278,
      groupSize: "2-12",
      badge: "wonder",
      highlights: [
        "packages.tours.sigiriya.highlights.dambullaCave",
        "packages.tours.sigiriya.highlights.rockFortress",
        "packages.tours.sigiriya.highlights.elephantRide",
        "packages.tours.sigiriya.highlights.ayurvedaSpice",
        "packages.tours.sigiriya.highlights.cookingClass",
      ],

      included: [
        "packages.tours.sigiriya.included.tickets",
        "packages.tours.sigiriya.included.guide",
        "packages.tours.sigiriya.included.water",
        "packages.tours.sigiriya.included.vehicle",
      ],
    },
    {
      id: 6,
      name: "Udawalawe or Yala Safari",
      subtitle: "Wildlife National Park",
      duration: "1day",
      category: "wildlife",
      price: "$120",
      originalPrice: "$150",
      image: "/packages/Udawala-Yala.webp",
      rating: 4.8,
      reviews: 167,
      groupSize: "2-8",
      badge: "wildlife",
      highlights: [
        "packages.tours.yala.highlights.jeepSafari",
        "packages.tours.yala.highlights.wildlife",
        "packages.tours.yala.highlights.crocodiles",
        "packages.tours.yala.highlights.flamingos",
        "packages.tours.yala.highlights.photography",
      ],
      
      included: [
        "packages.tours.yala.included.tickets",
        "packages.tours.yala.included.jeep",
        "packages.tours.yala.included.water",
        "packages.tours.yala.included.vehicle",
        "packages.tours.yala.included.guide",
      ],
      extras: [],
    },
    {
      id: 7,
      name: "Ella & Yala ",
      subtitle: "Mountains & Wildlife",
      duration: "1day",
      category: "adventure",
      price: "$145",
      originalPrice: "$180",
      image: "/packages/Ella-Yala-Colo.jpg",
      rating: 4.9,
      reviews: 134,
      groupSize: "2-10",
      badge: "combo",
      highlights: [
        "packages.tours.ellaYala.highlights.rawana",
        "packages.tours.ellaYala.highlights.nineArch",
        "packages.tours.ellaYala.highlights.monkeys",
        "packages.tours.ellaYala.highlights.tea",
        "packages.tours.ellaYala.highlights.ayurveda",
        "packages.tours.ellaYala.highlights.safari",
      ],
      included: [
        "packages.tours.ellaYala.included.tickets",
        "packages.tours.ellaYala.included.jeepSafari",
        "packages.tours.ellaYala.included.water",
        "packages.tours.ellaYala.included.vehicle",
        "packages.tours.ellaYala.included.guide",
      ],
      extras: [],
    },
    {
      id: 8,
      name: "Mirissa Whale Watching",
      subtitle: "Giant Blue Whales & Dolphins",
      duration: "1day",
      category: "beach",
      price: "$95",
      originalPrice: "$120",
      image: "/packages/Mirissa-Whale.webp",
      rating: 4.8,
      reviews: 145,
      groupSize: "2-20",
      badge: "wildlife",
      highlights: [
        "packages.tours.mirissa.highlights.whaleBoat",
        "packages.tours.mirissa.highlights.dolphin",
        "packages.tours.mirissa.highlights.beach",
        "packages.tours.mirissa.highlights.parrotRock",
        "packages.tours.mirissa.highlights.coconutHill",
        "packages.tours.mirissa.highlights.seafood",
      ],
      included: [
        "packages.tours.mirissa.included.tickets",
        "packages.tours.mirissa.included.boat",
        "packages.tours.mirissa.included.lifeJackets",
        "packages.tours.mirissa.included.water",
        "packages.tours.mirissa.included.guide",
        "packages.tours.mirissa.included.vehicle",
      ],
      extras: [],
    },
    {
      id: 9,
      name: "Bentota Beach Adventure",
      subtitle: "Water Sports & Relaxation",
      duration: "1day",
      category: "beach",
      price: "$85",
      originalPrice: "$110",
      image: "/packages/Bentota.jpg",
      rating: 4.7,
      reviews: 198,
      groupSize: "2-15",
      badge: "adventure",
      highlights: [
        "packages.tours.bentota.highlights.jetSki",
        "packages.tours.bentota.highlights.bananaBoat",
        "packages.tours.bentota.highlights.waterSki",
        "packages.tours.bentota.highlights.beach",
        "packages.tours.bentota.highlights.maduRiver",
        "packages.tours.bentota.highlights.turtleHatchery",
      ],
      included: [
        "packages.tours.bentota.included.tickets",
        "packages.tours.bentota.included.equipment",
        "packages.tours.bentota.included.lifeJackets",
        "packages.tours.bentota.included.water",
        "packages.tours.bentota.included.guide",
        "packages.tours.bentota.included.vehicle",
      ],
      extras: [],
    },
    {
      id: 10,
      name: "Unawatuna Beach Paradise",
      subtitle: "Golden Sands & Coral Reefs",
      duration: "1day",
      category: "beach",
      price: "$75",
      originalPrice: "$95",
      image: "/packages/Unawatuna.jpg",
      rating: 4.9,
      reviews: 167,
      groupSize: "2-25",
      badge: "paradise",
      highlights: [
        "packages.tours.unawatuna.highlights.beach",
        "packages.tours.unawatuna.highlights.snorkeling",
        "packages.tours.unawatuna.highlights.jungleBeach",
        "packages.tours.unawatuna.highlights.pagoda",
        "packages.tours.unawatuna.highlights.rumassala",
        "packages.tours.unawatuna.highlights.seafood",
      ],
      included: [
        "packages.tours.unawatuna.included.tickets",
        "packages.tours.unawatuna.included.snorkeling",
        "packages.tours.unawatuna.included.water",
        "packages.tours.unawatuna.included.guide",
        "packages.tours.unawatuna.included.vehicle",
      ],
      extras: [],
    },
    {
      id: 11,
      name: "Trincomalee Beach & Culture",
      subtitle: "East Coast Heritage",
      duration: "2day",
      category: "beach",
      price: "$90",
      originalPrice: "$115",
      image: "/packages/Trincomalee.jpg",
      rating: 4.6,
      reviews: 123,
      groupSize: "2-18",
      badge: "heritage",
      highlights: [
        "packages.tours.trincomalee.highlights.nilaveli",
        "packages.tours.trincomalee.highlights.pigeonIsland",
        "packages.tours.trincomalee.highlights.koneswaram",
        "packages.tours.trincomalee.highlights.fortFrederick",
        "packages.tours.trincomalee.highlights.hotSprings",
        "packages.tours.trincomalee.highlights.tamilCulture",
      ],
      included: [
        "packages.tours.trincomalee.included.tickets",
        "packages.tours.trincomalee.included.boat",
        "packages.tours.trincomalee.included.water",
        "packages.tours.trincomalee.included.guide",
        "packages.tours.trincomalee.included.vehicle",
      ],
      extras: [],
    },
    {
      id: 12,
      name: "Arugam Bay Surfing",
      subtitle: "World-Class Surf Destination",
      duration: "2day",
      category: "beach",
      price: "$110",
      originalPrice: "$140",
      image: "/packages/Arugambay.png",
      rating: 4.8,
      reviews: 89,
      groupSize: "2-12",
      badge: "surfing",
      highlights: [
        "packages.tours.arugam.highlights.surfing",
        "packages.tours.arugam.highlights.beach",
        "packages.tours.arugam.highlights.elephantRock",
        "packages.tours.arugam.highlights.kumana",
        "packages.tours.arugam.highlights.fishingVillage",
        "packages.tours.arugam.highlights.sunsetBBQ",
      ],
      included: [
        "packages.tours.arugam.included.tickets",
        "packages.tours.arugam.included.surfboard",
        "packages.tours.arugam.included.instructor",
        "packages.tours.arugam.included.water",
        "packages.tours.arugam.included.guide",
        "packages.tours.arugam.included.vehicle",
      ],
      extras: [],
    },
    {
      id: 13,
      name: "Negombo Beach & Lagoon",
      subtitle: "Airport Gateway Paradise",
      duration: "1day",
      category: "beach",
      price: "$65",
      originalPrice: "$85",
      image: "/packages/Negombo.jpg",
      rating: 4.5,
      reviews: 134,
      groupSize: "2-20",
      badge: "gateway",
      highlights: [
        "packages.tours.negombo.highlights.beach",
        "packages.tours.negombo.highlights.canal",
        "packages.tours.negombo.highlights.fishMarket",
        "packages.tours.negombo.highlights.church",
        "packages.tours.negombo.highlights.temple",
        "packages.tours.negombo.highlights.lagoonFishing",
      ],
      included: [
        "packages.tours.negombo.included.tickets",
        "packages.tours.negombo.included.boat",
        "packages.tours.negombo.included.water",
        "packages.tours.negombo.included.guide",
        "packages.tours.negombo.included.vehicle",
      ],
      extras: [],
    },
    // Two Day Tours
    {
      id: 14,
      name: "Gold Tour: Ella & Sigiriya",
      subtitle: "Mountains to Ancient Wonders",
      duration: "2day",
      category: "comprehensive",
      price: "$280",
      originalPrice: "$350",
      image: "/packages/Ella-Sigiriya.jpg",
      rating: 4.9,
      reviews: 89,
      groupSize: "2-12",
      badge: "gold",
      highlights: [
        "packages.tours.gold.highlights.day1.ella",
        "packages.tours.gold.highlights.day1.nuwara",
        "packages.tours.gold.highlights.day2.ambuluwawa",
        "packages.tours.gold.highlights.day2.sigiriya",
      ],
      included: [
        "packages.tours.gold.included.guide",
        "packages.tours.gold.included.entrance",
        "packages.tours.gold.included.hotel",
        "packages.tours.gold.included.transport",
      ],
      extras: [],
    },
    {
      id: 15,
      name: "Silva Tour: Kandy & Ella",
      subtitle: "Cultural Heritage & Nature",
      duration: "2day",
      category: "comprehensive",
      price: "$260",
      originalPrice: "$320",
      image: "/packages/Kandy-Ella.jpg",
      rating: 4.8,
      reviews: 112,
      groupSize: "2-15",
      badge: "popular",
      highlights: [
        "packages.tours.silva.highlights.day1.elephant",
        "packages.tours.silva.highlights.day1.kandy",
        "packages.tours.silva.highlights.day2.tea",
        "packages.tours.silva.highlights.day2.ella",
      ],
      included: [
        "packages.tours.silva.included.tickets",
        "packages.tours.silva.included.meals",
        "packages.tours.silva.included.water",
        "packages.tours.silva.included.guide",
        "packages.tours.silva.included.transport",
      ],
      extras: [],
    },
    // 7 Day Tour
    {
      id: 16,
      name: "Grand Sri Lanka Discovery",
      subtitle: "Complete Island Experience",
      duration: "7day",
      category: "comprehensive",
      price: "$1,299",
      originalPrice: "$1,599",
      image: "/packages/7days.png",
      rating: 5.0,
      reviews: 67,
      groupSize: "2-12",
      badge: "premium",
      highlights: [
        "packages.tours.grand.highlights.route",
        "packages.tours.grand.highlights.unesco",
        "packages.tours.grand.highlights.safari",
        "packages.tours.grand.highlights.culture",
        "packages.tours.grand.highlights.train",
        "packages.tours.grand.highlights.beach",
        "packages.tours.grand.highlights.cuisine",
      ],
      included: [
        "packages.tours.grand.included.accommodation",
        "packages.tours.grand.included.meals",
        "packages.tours.grand.included.guide",
        "packages.tours.grand.included.vehicle",
        "packages.tours.grand.included.entrance",
        "packages.tours.grand.included.transfers",
      ],
      extras: [],
    },
  ];

  const filteredPackages = tourPackages.filter((pkg) => {
    const durationMatch =
      selectedDuration === "all" || pkg.duration === selectedDuration;
    const categoryMatch =
      selectedCategory === "all" || pkg.category === selectedCategory;
    return durationMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/Hero/Package.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`animate-in-up ${isVisible ? "animate-in-up" : ""}`}>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8">
              <Calendar className="w-4 h-4 mr-2 animate-pulse" />
              {t("packages.hero.badge")}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t("packages.hero.title")}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              {t("packages.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Duration Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                {t("packages.tourDuration")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {durations.map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => setSelectedDuration(duration.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedDuration === duration.id
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {t(duration.labelKey)}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                {t("packages.tourCategory")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {t(category.labelKey)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredPackages.map((pkg) => {
              return (
                <div
                  key={pkg.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Duration Badge */}
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.duration === "1day"
                        ? t("packages.duration.oneDay")
                        : pkg.duration === "2day"
                        ? t("packages.duration.twoDays")
                        : t("packages.duration.sevenDays")}
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">
                        {pkg.rating}
                      </span>
                      <span className="text-xs text-gray-600">
                        ({pkg.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {getTourName(pkg.id)}
                        </h3>
                        <p className="text-emerald-600 font-medium text-sm">
                          {getTourSubtitle(pkg.id)}
                        </p>
                      </div>
                    </div>

                    {/* Package Info */}
                    <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>
                          {pkg.duration === "1day"
                            ? t("packages.duration.oneDay")
                            : pkg.duration === "2day"
                            ? t("packages.duration.twoDays")
                            : t("packages.duration.sevenDays")}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Camera className="w-4 h-4 mr-2 text-emerald-600" />
                        {t("packages.tourHighlights")}
                      </h4>
                      <div className="space-y-2">
                        {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              {t(highlight)}
                            </span>
                          </div>
                        ))}
                        {pkg.highlights.length > 4 && (
                          <div className="text-sm text-emerald-600 font-medium">
                            +{pkg.highlights.length - 4}{" "}
                            {t("packages.moreHighlights")}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Included */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Check className="w-4 h-4 mr-2 text-green-600" />
                        {t("packages.whatsIncluded")}
                      </h4>
                      <div className="space-y-2">
                        {pkg.included.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">
                              {t(item)}
                            </span>
                          </div>
                        ))}
                        {pkg.included.length > 3 && (
                          <div className="text-sm text-emerald-600 font-medium">
                            +{pkg.included.length - 3}{" "}
                            {t("packages.moreIncluded")}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Extras */}
                    {pkg.extras && pkg.extras.length > 0 && (
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Gift className="w-4 h-4 mr-2 text-orange-600" />
                          {t("packages.optionalExtras")}
                        </h4>
                        <div className="space-y-2">
                          {pkg.extras.map((extra, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">
                                {extra}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={() => handleWhatsAppClick(getTourName(pkg.id))}
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <span>{t("packages.bookNowWhatsApp")}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("packages.needCustomTour")}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t("packages.discoverBestSriLanka")}
          </p>
          <button
            onClick={() => handleWhatsAppClick("Custom Tour Package")}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t("packages.planCustomTour")}
          </button>
        </div>
      </section>
    </div>
  );
};

const PackagesPage = () => {
  return (
    <div className="min-h-screen">
      <PackagesContent />
    </div>
  );
};

export default PackagesPage;
