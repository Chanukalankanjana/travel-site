"use client"

import { useState } from "react"
import { Star, Check, ArrowRight, Crown, Zap, Heart, ArrowLeft, Calendar, Users, Filter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PackagesPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [selectedBudget, setSelectedBudget] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const categories = [
    { id: "all", label: "All Packages" },
    { id: "cultural", label: "Cultural Heritage" },
    { id: "adventure", label: "Adventure & Wildlife" },
    { id: "luxury", label: "Luxury & Relaxation" },
    { id: "nature", label: "Nature & Eco" },
    { id: "family", label: "Family Friendly" },
  ]

  const durations = [
    { id: "all", label: "Any Duration" },
    { id: "3-5", label: "3-5 Days" },
    { id: "6-10", label: "6-10 Days" },
    { id: "11-15", label: "11-15 Days" },
    { id: "15+", label: "15+ Days" },
  ]

  const budgets = [
    { id: "all", label: "Any Budget" },
    { id: "budget", label: "Budget ($500-$1000)" },
    { id: "mid", label: "Mid-range ($1000-$2000)" },
    { id: "luxury", label: "Luxury ($2000+)" },
  ]

  const packages = [
    {
      id: 1,
      name: "Cultural Heritage Explorer",
      duration: "7 Days / 6 Nights",
      price: 899,
      originalPrice: 1199,
      image: "/images/kandy-temple.jpg",
      category: "cultural",
      budget: "mid",
      rating: 4.9,
      reviews: 156,
      badge: "bestseller",
      badgeIcon: Crown,
      description:
        "Journey through 2,500 years of Sri Lankan history and culture, visiting ancient kingdoms and sacred temples.",
      highlights: ["Sigiriya Rock Fortress", "Kandy Temple of Tooth", "Dambulla Cave Temples", "Polonnaruwa Ruins"],
      included: [
        "6 nights accommodation in 4-star hotels",
        "All meals (breakfast, lunch, dinner)",
        "Private air-conditioned vehicle",
        "Professional English-speaking guide",
        "All entrance fees and permits",
        "Airport transfers",
      ],
      itinerary: [
        { day: 1, title: "Arrival in Colombo", activities: ["Airport pickup", "City tour", "Hotel check-in"] },
        { day: 2, title: "Colombo to Sigiriya", activities: ["Sigiriya Rock climb", "Village tour", "Sunset viewing"] },
        { day: 3, title: "Sigiriya to Kandy", activities: ["Temple of Tooth visit", "Cultural show", "Lake walk"] },
      ],
      bestTime: "December to April",
      groupSize: "2-15 people",
      difficulty: "Moderate",
    },
    {
      id: 2,
      name: "Adventure & Wildlife Safari",
      duration: "10 Days / 9 Nights",
      price: 1299,
      originalPrice: 1599,
      image: "/images/elephant-safari.jpg",
      category: "adventure",
      budget: "mid",
      rating: 4.8,
      reviews: 203,
      badge: "popular",
      badgeIcon: Zap,
      description:
        "Thrilling adventures in Sri Lanka's wild landscapes with leopard safaris, hiking, and water sports.",
      highlights: ["Yala Leopard Safari", "Ella Hiking Trails", "White Water Rafting", "Whale Watching"],
      included: [
        "9 nights in eco-lodges and hotels",
        "All adventure activities",
        "Safari jeep with driver",
        "Professional guide",
        "Safety equipment",
        "All meals and transfers",
      ],
      itinerary: [
        { day: 1, title: "Arrival & Negombo", activities: ["Airport pickup", "Beach relaxation", "Welcome dinner"] },
        {
          day: 2,
          title: "Yala National Park",
          activities: ["Morning safari", "Leopard tracking", "Evening game drive"],
        },
        { day: 3, title: "Ella Hill Country", activities: ["Train journey", "Hiking", "Tea plantation visit"] },
      ],
      bestTime: "February to July",
      groupSize: "2-8 people",
      difficulty: "Challenging",
    },
    {
      id: 3,
      name: "Luxury Beach & Spa Retreat",
      duration: "5 Days / 4 Nights",
      price: 1599,
      originalPrice: 1999,
      image: "/images/beach-sunset.jpg",
      category: "luxury",
      budget: "luxury",
      rating: 5.0,
      reviews: 89,
      badge: "luxury",
      badgeIcon: Heart,
      description: "Ultimate relaxation in tropical paradise with luxury resorts, spa treatments, and private beaches.",
      highlights: ["5-Star Beach Resort", "Daily Spa Treatments", "Private Beach Access", "Gourmet Dining"],
      included: [
        "4 nights in luxury beachfront resort",
        "Daily spa treatments",
        "Private butler service",
        "All meals and premium beverages",
        "Private beach cabana",
        "Sunset cruise",
      ],
      itinerary: [
        { day: 1, title: "Arrival & Resort", activities: ["VIP airport transfer", "Resort check-in", "Welcome spa"] },
        { day: 2, title: "Beach & Wellness", activities: ["Morning yoga", "Spa treatments", "Beach activities"] },
        { day: 3, title: "Cultural Excursion", activities: ["Galle Fort visit", "Local market tour", "Sunset cruise"] },
      ],
      bestTime: "November to April",
      groupSize: "2-6 people",
      difficulty: "Easy",
    },
    {
      id: 4,
      name: "Nature & Eco Discovery",
      duration: "8 Days / 7 Nights",
      price: 1099,
      originalPrice: 1399,
      image: "/images/tea-plantation.jpg",
      category: "nature",
      budget: "mid",
      rating: 4.7,
      reviews: 134,
      badge: "eco-friendly",
      badgeIcon: Crown,
      description: "Sustainable travel through Sri Lanka's pristine natural environments and conservation projects.",
      highlights: ["Sinharaja Rainforest", "Tea Plantation Tours", "Bird Watching", "Conservation Projects"],
      included: [
        "7 nights in eco-lodges",
        "All nature activities",
        "Expert naturalist guide",
        "Conservation project visits",
        "Organic meals",
        "Carbon offset included",
      ],
      itinerary: [
        { day: 1, title: "Arrival & Negombo", activities: ["Eco-lodge check-in", "Mangrove tour", "Bird watching"] },
        {
          day: 2,
          title: "Sinharaja Rainforest",
          activities: ["Rainforest trek", "Endemic species spotting", "Night sounds"],
        },
        {
          day: 3,
          title: "Hill Country",
          activities: ["Tea plantation tour", "Organic farming visit", "Waterfall hike"],
        },
      ],
      bestTime: "Year-round",
      groupSize: "2-12 people",
      difficulty: "Moderate",
    },
    {
      id: 5,
      name: "Family Adventure Package",
      duration: "6 Days / 5 Nights",
      price: 799,
      originalPrice: 999,
      image: "/images/ella-train.jpg",
      category: "family",
      budget: "budget",
      rating: 4.6,
      reviews: 178,
      badge: "family-friendly",
      badgeIcon: Heart,
      description:
        "Perfect family adventure with kid-friendly activities, comfortable accommodations, and educational experiences.",
      highlights: ["Elephant Orphanage", "Train Ride Experience", "Beach Fun", "Cultural Workshops"],
      included: [
        "5 nights family-friendly hotels",
        "All family activities",
        "Child-friendly guide",
        "Educational materials",
        "Family meals",
        "Safety equipment for kids",
      ],
      itinerary: [
        { day: 1, title: "Arrival & Negombo", activities: ["Family room check-in", "Beach time", "Welcome dinner"] },
        {
          day: 2,
          title: "Elephant Experience",
          activities: ["Elephant orphanage", "Feeding session", "Educational talk"],
        },
        {
          day: 3,
          title: "Hill Country Train",
          activities: ["Scenic train ride", "Tea factory visit", "Playground time"],
        },
      ],
      bestTime: "December to March",
      groupSize: "Families of 2-8",
      difficulty: "Easy",
    },
    {
      id: 6,
      name: "Complete Island Discovery",
      duration: "14 Days / 13 Nights",
      price: 2299,
      originalPrice: 2899,
      image: "/images/sigiriya.jpg",
      category: "cultural",
      budget: "luxury",
      rating: 4.9,
      reviews: 92,
      badge: "comprehensive",
      badgeIcon: Crown,
      description: "The ultimate Sri Lankan experience covering all major destinations, cultures, and landscapes.",
      highlights: ["All UNESCO Sites", "Complete Island Tour", "Multiple Safaris", "Beach & Mountains"],
      included: [
        "13 nights premium accommodations",
        "All destinations covered",
        "Multiple safari experiences",
        "Cultural performances",
        "All meals and activities",
        "Luxury transportation",
      ],
      itinerary: [
        { day: 1, title: "Arrival Colombo", activities: ["VIP pickup", "City tour", "Welcome dinner"] },
        { day: 2, title: "Cultural Triangle", activities: ["Sigiriya climb", "Dambulla caves", "Village experience"] },
        { day: 3, title: "Ancient Capitals", activities: ["Polonnaruwa ruins", "Cycling tour", "Sunset viewing"] },
      ],
      bestTime: "December to April",
      groupSize: "2-12 people",
      difficulty: "Moderate",
    },
  ]

  const filteredPackages = packages.filter((pkg) => {
    const categoryMatch = selectedCategory === "all" || pkg.category === selectedCategory
    const durationMatch = selectedDuration === "all" || pkg.duration.includes(selectedDuration.split("-")[0])
    const budgetMatch = selectedBudget === "all" || pkg.budget === selectedBudget
    return categoryMatch && durationMatch && budgetMatch
  })

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "duration":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration)
      case "popular":
      default:
        return b.reviews - a.reviews
    }
  })

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "bestseller":
        return "bg-yellow-500"
      case "popular":
        return "bg-green-500"
      case "luxury":
        return "bg-purple-500"
      case "eco-friendly":
        return "bg-emerald-500"
      case "family-friendly":
        return "bg-blue-500"
      case "comprehensive":
        return "bg-indigo-500"
      default:
        return "bg-gray-500"
    }
  }

  const getBadgeText = (badge: string) => {
    switch (badge) {
      case "bestseller":
        return "Best Seller"
      case "popular":
        return "Most Popular"
      case "luxury":
        return "Luxury"
      case "eco-friendly":
        return "Eco-Friendly"
      case "family-friendly":
        return "Family Friendly"
      case "comprehensive":
        return "Complete Tour"
      default:
        return badge
    }
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Crown className="w-4 h-4 mr-2" />
              Premium Packages
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Travel Packages</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Carefully curated experiences for every type of traveler. From cultural heritage to adventure safaris,
              find your perfect Sri Lankan journey.
            </p>

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

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
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
                    {category.label}
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
                    {duration.label}
                  </option>
                ))}
              </select>

              {/* Budget Filter */}
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {budgets.map((budget) => (
                  <option key={budget.id} value={budget.id}>
                    {budget.label}
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
                <option value="duration">Duration</option>
              </select>
            </div>

            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold text-emerald-600">{sortedPackages.length}</span> packages
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedPackages.map((pkg) => {
              const BadgeIcon = pkg.badgeIcon

              return (
                <div
                  key={pkg.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Badge */}
                  <div
                    className={`absolute top-4 left-4 z-10 ${getBadgeColor(pkg.badge)} text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-medium`}
                  >
                    <BadgeIcon className="w-4 h-4" />
                    <span>{getBadgeText(pkg.badge)}</span>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Rating */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-800">{pkg.rating}</span>
                      <span className="text-xs text-gray-600">({pkg.reviews})</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                          {pkg.name}
                        </h3>
                        <p className="text-gray-500 text-sm">{pkg.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">${pkg.price}</div>
                        <div className="text-sm text-gray-500 line-through">${pkg.originalPrice}</div>
                        <div className="text-xs text-green-600 font-medium">Save ${pkg.originalPrice - pkg.price}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{pkg.description}</p>

                    {/* Quick Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{pkg.bestTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{pkg.groupSize}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tour Highlights:</h4>
                      <div className="space-y-1">
                        {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{highlight}</span>
                          </div>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <div className="text-xs text-emerald-600 font-medium">
                            +{pkg.highlights.length - 3} more highlights
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                        <span>Book Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="w-full border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 py-3 rounded-lg font-semibold transition-colors duration-300">
                        View Full Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Load More Packages
            </button>
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need a Custom Package?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let us create a personalized itinerary that matches your interests, schedule, and budget perfectly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300">
              Plan My Custom Tour
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold rounded-lg transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
