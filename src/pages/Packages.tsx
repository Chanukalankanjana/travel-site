"use client";

import { useState, useEffect } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

  const whatsappNumbers = {
    en: "+94771234567",
    ru: "+94777654321",
  };

  const handleWhatsAppClick = (packageName: string) => {
    const number = whatsappNumbers[currentLanguage.code];
    const message = encodeURIComponent(
      currentLanguage.code === "en"
        ? `Hello! I'm interested in the ${packageName} tour package. Could you provide more details and availability?`
        : `Привет! Меня интересует тур "${packageName}". Можете предоставить больше информации и доступность?`
    );
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
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
      name: "Ella Mountain Excursion",
      subtitle: "Foggy City Adventure",
      duration: "1day",
      category: "adventure",
      price: "$85",
      originalPrice: "$110",
      image:
        "https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 234,
      groupSize: "2-15",
      badge: "popular",
      highlights: [
        "Rawana Waterfall",
        "Nine Arches Bridge",
        "Feed the Monkeys",
        "Little Adam's Peak",
        "Tea Plantation & Government Tea Shop",
        "Traditional Ayurvedic Garden",
      ],
      extras: ["Elephant Feeding at Transit Home (Optional)"],
      included: [
        "All entrance tickets",
        "Professional guide and driver",
        "Bottled water",
        "Comfortable air-conditioned vehicle",
      ],
      itinerary: [
        { time: "07:00", activity: "Hotel pickup and departure to Ella" },
        { time: "09:30", activity: "Visit Rawana Waterfall" },
        { time: "10:30", activity: "Nine Arches Bridge photography" },
        { time: "11:30", activity: "Feed monkeys and nature walk" },
        { time: "13:00", activity: "Lunch break" },
        { time: "14:30", activity: "Little Adam's Peak hiking" },
        { time: "16:00", activity: "Tea plantation and factory tour" },
        { time: "17:30", activity: "Ayurvedic garden visit" },
        { time: "19:00", activity: "Return to hotel" },
      ],
    },
    {
      id: 2,
      name: "Galle Dutch Fort Tour",
      subtitle: "UNESCO Heritage Coast",
      duration: "1day",
      category: "cultural",
      price: "$75",
      originalPrice: "$95",
      image:
        "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 189,
      groupSize: "2-20",
      badge: "heritage",
      highlights: [
        "Turtle Farm Experience",
        "Madu River Boat Safari",
        "Moonstone Mine at Meetiyagoda",
        "Turtle Beach Visit",
        "UNESCO Dutch Galle Fort",
      ],
      included: [
        "All entrance tickets",
        "Professional guide",
        "Bottled water",
        "Comfortable vehicle",
      ],
      itinerary: [
        { time: "08:00", activity: "Hotel pickup" },
        { time: "10:00", activity: "Turtle Farm visit" },
        { time: "11:30", activity: "Madu River boat safari" },
        { time: "13:00", activity: "Lunch at local restaurant" },
        { time: "14:30", activity: "Moonstone mine exploration" },
        { time: "16:00", activity: "Turtle Beach relaxation" },
        { time: "17:30", activity: "Galle Fort walking tour" },
        { time: "19:00", activity: "Return journey" },
      ],
    },
    {
      id: 3,
      name: "Colombo City Discovery",
      subtitle: "Modern Capital Experience",
      duration: "1day",
      category: "city",
      price: "$65",
      originalPrice: "$85",
      image:
        "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 156,
      groupSize: "2-25",
      badge: "city",
      highlights: [
        "Galle Face Green (Colombo Beach)",
        "Gangaramaya Temple",
        "Independence Square",
        "Pettah Street Markets",
        "Modern Shopping Malls",
      ],
      extras: ["Lotus Tower visit ($20 per adult - not included)"],
      included: [
        "All entrance tickets",
        "Professional guide",
        "Bottled water",
        "Comfortable vehicle",
      ],
      itinerary: [
        { time: "09:00", activity: "Hotel pickup" },
        { time: "09:30", activity: "Galle Face Green seaside walk" },
        { time: "10:30", activity: "Gangaramaya Temple visit" },
        { time: "12:00", activity: "Independence Square" },
        { time: "13:00", activity: "Lunch break" },
        { time: "14:30", activity: "Pettah Street market exploration" },
        { time: "16:00", activity: "Shopping mall visit" },
        { time: "17:30", activity: "Optional Lotus Tower (extra cost)" },
        { time: "18:30", activity: "Return to hotel" },
      ],
    },
    {
      id: 4,
      name: "Kandy Ancient City",
      subtitle: "Cultural Heart of Sri Lanka",
      duration: "1day",
      category: "cultural",
      price: "$95",
      originalPrice: "$120",
      image:
        "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 203,
      groupSize: "2-15",
      badge: "bestseller",
      highlights: [
        "Elephant Feeding Experience",
        "Elephant Ride",
        "Temple of the Tooth Relic",
        "Royal Botanical Gardens Peradeniya",
        "Gem Museum",
        "Ayurvedic Center & Spice Garden",
        "Tea Factory & Plantations",
      ],
      included: [
        "All entrance tickets",
        "Professional guide",
        "Bottled water",
        "Comfortable vehicle",
      ],
      itinerary: [
        { time: "07:00", activity: "Early morning pickup" },
        { time: "09:00", activity: "Elephant feeding and ride" },
        { time: "11:00", activity: "Temple of the Tooth Relic" },
        { time: "13:00", activity: "Lunch break" },
        { time: "14:30", activity: "Royal Botanical Gardens" },
        { time: "16:00", activity: "Gem Museum visit" },
        { time: "17:00", activity: "Ayurvedic center and spice garden" },
        { time: "18:30", activity: "Tea factory tour" },
        { time: "20:00", activity: "Return journey" },
      ],
    },
    {
      id: 5,
      name: "Sigiriya Rock Fortress",
      subtitle: "UNESCO World Wonder",
      duration: "1day",
      category: "cultural",
      price: "$105",
      originalPrice: "$135",
      image:
        "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 278,
      groupSize: "2-12",
      badge: "wonder",
      highlights: [
        "Dambulla Royal Cave Temple & Golden Buddha",
        "Ancient Rock Fortress of Sigiriya (UNESCO)",
        "Elephant Ride Experience",
        "Ayurvedic Center & Spice Garden",
        "Cooking Class & Local Cuisine Tasting",
      ],
      extras: [
        "Buffalo sledding, Lake boat ride, Village tour (tickets not included)",
      ],
      included: [
        "All entrance tickets",
        "Professional guide",
        "Bottled water",
        "Comfortable vehicle",
      ],
      itinerary: [
        { time: "06:00", activity: "Early departure" },
        { time: "08:30", activity: "Dambulla Cave Temple" },
        { time: "10:30", activity: "Sigiriya Rock Fortress climb" },
        { time: "13:00", activity: "Lunch and rest" },
        { time: "14:30", activity: "Elephant ride experience" },
        { time: "16:00", activity: "Ayurvedic center visit" },
        { time: "17:30", activity: "Cooking class and dinner" },
        { time: "19:30", activity: "Return journey" },
      ],
    },
    {
      id: 6,
      name: "Yala Safari Adventure",
      subtitle: "Wildlife National Park",
      duration: "1day",
      category: "wildlife",
      price: "$120",
      originalPrice: "$150",
      image:
        "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 167,
      groupSize: "2-8",
      badge: "wildlife",
      highlights: [
        "Open Jeep Safari in Yala National Park",
        "Spot Elephants, Leopards, Deer",
        "Buffalo, Crocodiles, Monkeys",
        "Peacocks, Flamingos, Mongooses",
        "Professional Wildlife Guide",
      ],
      included: [
        "All park tickets",
        "Safari jeep with driver",
        "Bottled water",
        "Comfortable transport to/from park",
        "Professional wildlife guide",
      ],
      itinerary: [
        { time: "05:00", activity: "Early morning pickup" },
        { time: "06:30", activity: "Arrive at Yala National Park" },
        { time: "07:00", activity: "Morning safari session (3 hours)" },
        { time: "10:00", activity: "Breakfast break" },
        { time: "11:00", activity: "Rest and wildlife photography" },
        { time: "14:00", activity: "Afternoon safari session (3 hours)" },
        { time: "17:00", activity: "Exit park and refreshments" },
        { time: "19:30", activity: "Return to hotel" },
      ],
    },
    {
      id: 7,
      name: "Ella & Yala Combo",
      subtitle: "Mountains & Wildlife",
      duration: "1day",
      category: "adventure",
      price: "$145",
      originalPrice: "$180",
      image:
        "https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 134,
      groupSize: "2-10",
      badge: "combo",
      highlights: [
        "Rawana Waterfall",
        "Nine Arches Bridge",
        "Feed Monkeys",
        "Tea Plantation Visit",
        "Ayurvedic Garden",
        "Yala National Park Safari",
      ],
      included: [
        "All entrance tickets",
        "Safari jeep",
        "Bottled water",
        "Comfortable vehicle",
        "Professional guide",
      ],
      itinerary: [
        { time: "05:00", activity: "Very early pickup" },
        { time: "07:00", activity: "Ella sightseeing (condensed)" },
        { time: "11:00", activity: "Travel to Yala" },
        { time: "13:00", activity: "Lunch break" },
        { time: "14:30", activity: "Yala safari adventure" },
        { time: "17:30", activity: "Return journey" },
        { time: "20:00", activity: "Arrive at hotel" },
      ],
    },
    // Two Day Tours
    {
      id: 8,
      name: "Gold Tour: Ella & Sigiriya",
      subtitle: "Mountains to Ancient Wonders",
      duration: "2day",
      category: "comprehensive",
      price: "$280",
      originalPrice: "$350",
      image:
        "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 89,
      groupSize: "2-12",
      badge: "gold",
      highlights: [
        "Day 1: Ella - Ravana Falls, Train Ride, 9-Arch Bridge, Little Adam's Peak",
        "Day 1: Nuwara Eliya - Grand Hotel, Tea Plantations, Tea Factory",
        "Day 2: Ambuluwawa Tower, Ayurvedic Garden",
        "Day 2: Dambulla Golden Buddha, Sigiriya Rock, Elephant Feeding",
      ],
      included: [
        "Professional guide",
        "All entrance fees",
        "Hotel with dinner and breakfast",
        "Comfortable air-conditioned transport",
      ],
      itinerary: [
        { time: "Day 1 - 07:00", activity: "Pickup and travel to Ella" },
        { time: "09:00", activity: "Ravana Falls visit" },
        { time: "10:30", activity: "Scenic train ride experience" },
        { time: "12:00", activity: "Nine Arch Bridge photography" },
        { time: "14:00", activity: "Lunch break" },
        { time: "15:30", activity: "Little Adam's Peak hike" },
        { time: "17:00", activity: "Travel to Nuwara Eliya" },
        { time: "18:30", activity: "Grand Hotel visit and tea plantations" },
        { time: "20:00", activity: "Check-in hotel, dinner" },
        { time: "Day 2 - 08:00", activity: "Breakfast and checkout" },
        { time: "09:00", activity: "Ambuluwawa Tower visit" },
        { time: "11:00", activity: "Ayurvedic garden tour" },
        { time: "13:00", activity: "Lunch and travel to Dambulla" },
        { time: "15:00", activity: "Golden Buddha statue and caves" },
        { time: "16:30", activity: "Sigiriya Rock Fortress" },
        { time: "18:30", activity: "Elephant feeding experience" },
        { time: "20:00", activity: "Return journey" },
      ],
    },
    {
      id: 9,
      name: "Silva Tour: Kandy & Ella",
      subtitle: "Cultural Heritage & Nature",
      duration: "2day",
      category: "comprehensive",
      price: "$260",
      originalPrice: "$320",
      image:
        "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 112,
      groupSize: "2-15",
      badge: "popular",
      highlights: [
        "Day 1: Elephant Orphanage, Ayurvedic Garden, Tea Factory",
        "Day 1: Royal Botanical Garden, Kandy Tooth Temple, Nuwara Eliya",
        "Day 2: Tea Plantation, Ramboda Waterfall, Nine Arch Bridge",
        "Day 2: Little Adam's Peak, Ravana Waterfall, Train Ride, Monkey Feeding",
      ],
      included: [
        "All entrance tickets",
        "Hotel meals (breakfast and dinner)",
        "Bottled water",
        "Professional guide",
        "Air-conditioned transport",
      ],
      itinerary: [
        { time: "Day 1 - 07:00", activity: "Hotel pickup" },
        { time: "09:00", activity: "Elephant Orphanage visit" },
        { time: "10:30", activity: "Ayurvedic garden and spice tour" },
        { time: "12:00", activity: "Tea factory experience" },
        { time: "13:30", activity: "Lunch break" },
        { time: "15:00", activity: "Royal Botanical Gardens" },
        { time: "16:30", activity: "Temple of the Tooth" },
        { time: "18:00", activity: "Travel to Nuwara Eliya" },
        { time: "20:00", activity: "Hotel check-in and dinner" },
        { time: "Day 2 - 08:00", activity: "Breakfast and checkout" },
        { time: "09:00", activity: "Tea plantation tour" },
        { time: "10:30", activity: "Ramboda Waterfall" },
        { time: "12:00", activity: "Travel to Ella" },
        { time: "13:30", activity: "Lunch break" },
        { time: "15:00", activity: "Nine Arch Bridge" },
        { time: "16:00", activity: "Little Adam's Peak" },
        { time: "17:30", activity: "Ravana Waterfall and monkey feeding" },
        { time: "18:30", activity: "Train ride experience" },
        { time: "20:00", activity: "Return journey" },
      ],
    },
    // 7 Day Tour
    {
      id: 10,
      name: "Grand Sri Lanka Discovery",
      subtitle: "Complete Island Experience",
      duration: "7day",
      category: "comprehensive",
      price: "$1,299",
      originalPrice: "$1,599",
      image:
        "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      rating: 5.0,
      reviews: 67,
      groupSize: "2-12",
      badge: "premium",
      highlights: [
        "Airport → Sigiriya → Kandy → Ella → Yala → Galle → Colombo",
        "UNESCO World Heritage Sites",
        "Wildlife Safari Adventures",
        "Cultural Immersion Experiences",
        "Scenic Train Journeys",
        "Beach & Coastal Exploration",
        "Traditional Cuisine & Cooking Classes",
      ],
      included: [
        "6 nights accommodation",
        "All meals (breakfast, lunch, dinner)",
        "Professional guide throughout",
        "Air-conditioned vehicle",
        "All entrance fees and activities",
        "Airport transfers",
      ],
      itinerary: [
        {
          time: "Day 1",
          activity:
            "Airport pickup → Sigiriya. Evening: Sigiriya Rock Fortress climb. Overnight in Sigiriya.",
        },
        {
          time: "Day 2",
          activity:
            "Sigiriya → Kandy. Visit Dambulla Cave Temple, spice gardens. Evening cultural show and Temple of the Tooth. Overnight in Kandy.",
        },
        {
          time: "Day 3",
          activity:
            "Kandy → Ella via Nuwara Eliya. Tea factory visit, waterfalls. Amazing train ride Nanuoya to Ella through stunning mountain landscapes. Overnight in Ella.",
        },
        {
          time: "Day 4",
          activity:
            "Ella exploration: Little Adam's Peak, Nine Arch Bridge. Transfer to Yala. Overnight near Yala National Park.",
        },
        {
          time: "Day 5",
          activity:
            "Yala National Park safari (elephants, leopards, wildlife). Transfer to South Coast (Mirissa/Weligama). Overnight at beach hotel.",
        },
        {
          time: "Day 6",
          activity:
            "Morning whale watching session. Beach activities and relaxation. Overnight at beach hotel.",
        },
        {
          time: "Day 7",
          activity:
            "Galle Fort visit (UNESCO World Heritage). Madu River boat safari. Transfer to Colombo or Airport.",
        },
      ],
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
              Premium Sri Lankan Adventures
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Complete Tour Packages
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              From single-day excursions to comprehensive week-long adventures.
              Discover the best of Sri Lanka with our expertly crafted tour
              packages.
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
                Tour Duration
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
                Tour Category
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
            {filteredPackages.map((pkg, index) => {
              const BadgeIcon = pkg.badgeIcon;
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
                        ? "1 Day"
                        : pkg.duration === "2day"
                        ? "2 Days"
                        : "7 Days"}
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
                          {pkg.name}
                        </h3>
                        <p className="text-emerald-600 font-medium text-sm">
                          {pkg.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Package Info */}
                    <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>
                          {pkg.duration === "1day"
                            ? "1 Day"
                            : pkg.duration === "2day"
                            ? "2 Days"
                            : "7 Days"}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Camera className="w-4 h-4 mr-2 text-emerald-600" />
                        Tour Highlights
                      </h4>
                      <div className="space-y-2">
                        {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              {highlight}
                            </span>
                          </div>
                        ))}
                        {pkg.highlights.length > 4 && (
                          <div className="text-sm text-emerald-600 font-medium">
                            +{pkg.highlights.length - 4} more highlights
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Included */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Check className="w-4 h-4 mr-2 text-green-600" />
                        What's Included
                      </h4>
                      <div className="space-y-2">
                        {pkg.included.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">
                              {item}
                            </span>
                          </div>
                        ))}
                        {pkg.included.length > 3 && (
                          <div className="text-sm text-emerald-600 font-medium">
                            +{pkg.included.length - 3} more included
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Extras */}
                    {pkg.extras && pkg.extras.length > 0 && (
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Gift className="w-4 h-4 mr-2 text-orange-600" />
                          Optional Extras
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
                        onClick={() => handleWhatsAppClick(pkg.name)}
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <span>Book Now via WhatsApp</span>
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
            Need a Custom Tour Package?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Can't find exactly what you're looking for? Let us create a
            personalized itinerary that perfectly matches your interests,
            schedule, and budget.
          </p>
          <button
            onClick={() =>
              handleWhatsAppClick("Custom Tour Package", "Custom Pricing")
            }
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Plan My Custom Tour
          </button>
        </div>
      </section>
    </div>
  );
};

const PackagesPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <PackagesContent />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default PackagesPage;
