"use client";

import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Navigation,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface DestinationDetailProps {
  destinationId: string;
  onNavigateBack: () => void;
}

export default function DestinationDetail({
  destinationId,
  onNavigateBack,
}: DestinationDetailProps) {
  const { currentLanguage } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Enhanced destination data with full details
  const destinations = {
    "1": {
      id: 1,
      name: "Sigiriya Rock Fortress",
      category: "heritage",
      location: "Central Province",
      coordinates: { lat: 7.9569, lng: 80.7597 },
      mainImage: "/public/sigiriya-rock.jpg",
      gallery: [
        "/sigiriya.jpg",
        "/sigiriya-frescoes.jpg",
        "/sigiriya-water-gardens.jpg",
        "/sigiriya-palace.jpg",
      ],
      shortDescription:
        "Ancient royal palace and fortress built on a massive rock formation, featuring stunning frescoes and water gardens.",
      fullDescription: `Sigiriya, also known as Lion Rock, is an ancient rock fortress and palace ruin located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 meters high.

According to the ancient Sri Lankan chronicle the Culavamsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (477 – 495 CE) for his new capital. He built his palace on the top of this rock and decorated its sides with colorful frescoes.

The site was both a palace and a fortress. The upper palace on the top of the rock includes cisterns cut into the rock that still retain water. The moats and walls that surround the lower palace are still exquisitely preserved.

Sigiriya is considered one of the best preserved examples of ancient urban planning. It is the most visited historic site in Sri Lanka. The palace is located in the heart of the island between the towns of Dambulla and Habarane on a massive rocky plateau 370 meters above sea level.

The rock itself is a hardened magma plug from an extinct volcano. The site was used as a Buddhist monastery from the 3rd century BCE, with caves prepared and donated by devotees to the sangha.`,
      highlights: [
        "Ancient Palace Ruins",
        "Famous Frescoes",
        "Water Gardens",
        "Archaeological Museum",
        "Lion's Gate",
        "Mirror Wall",
      ],
      bestTime: "December to April",
      difficulty: "Moderate",
      groupSize: "2-15 people",
      duration: "2-3 days",
      price: 150,
      rating: 4.9,
      reviews: 234,
      included: [
        "Professional guide",
        "Entrance fees",
        "Transportation",
        "Lunch",
        "Water bottles",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
        "Accommodation",
        "Travel insurance",
      ],
      nearbyAttractions: [
        "Dambulla Cave Temple",
        "Minneriya National Park",
        "Polonnaruwa Ancient City",
        "Kaudulla National Park",
      ],
    },
    "2": {
      id: 2,
      name: "Kandy Cultural Triangle",
      category: "culture",
      location: "Central Province",
      coordinates: { lat: 7.2906, lng: 80.6337 },
      mainImage: "/images/kandy-temple.jpg",
      gallery: [
        "/images/kandy-temple.jpg",
        "/images/kandy-gardens.jpg",
        "/images/kandy-lake.jpg",
        "/images/kandy-dance.jpg",
      ],
      shortDescription:
        "Sacred city housing the Temple of the Tooth Relic, surrounded by beautiful botanical gardens and traditional culture.",
      fullDescription: `Kandy is a major city in Sri Lanka located in the Central Province. It was the last capital of the ancient kings' era of Sri Lanka. The city lies in the midst of hills in the Kandy plateau, which crosses an area of tropical plantations, mainly tea. Kandy is both an administrative and religious city and is also the capital of the Central Province.

Kandy is the home of the Temple of the Tooth Relic (Sri Dalada Maligawa), one of the most sacred places of worship in the Buddhist world. It was declared a world heritage site by UNESCO in 1988. The city and the region have been known by many different names and versions of those names. Some scholars suggest that the original name of Kandy was Katubulu Nuwara located near the present Watapuluwa. However, the more popular historical name is Senkadagala or Senkadagalapura, officially Senkadagala Siriwardhana Maha Nuwara (meaning 'great city of Senkadagala of growing resplendence'), generally shortened to 'Maha Nuwara'.

The city is a world heritage site declared by UNESCO, in part due to the temple. Kandy is the second largest city of the island and the capital of Central Province of Sri Lanka. It is also the administrative capital of Kandy District.`,
      highlights: [
        "Temple of the Tooth",
        "Royal Botanical Gardens",
        "Traditional Dance Shows",
        "Kandy Lake",
        "Peradeniya University",
        "Kandy Market",
      ],
      bestTime: "Year-round",
      difficulty: "Easy",
      groupSize: "2-20 people",
      duration: "2-3 days",
      price: 200,
      rating: 4.8,
      reviews: 189,
      included: [
        "Professional guide",
        "Entrance fees",
        "Transportation",
        "Traditional dance show",
        "Lunch",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
        "Accommodation",
        "Travel insurance",
      ],
      nearbyAttractions: [
        "Peradeniya Botanical Gardens",
        "Udawattakele Forest Reserve",
        "Bahirawakanda Temple",
        "Kandy Lake",
      ],
    },
    "3": {
      id: 3,
      name: "Ella Hill Country",
      category: "nature",
      location: "Uva Province",
      coordinates: { lat: 6.8667, lng: 81.0464 },
      mainImage: "/images/ella-train.jpg",
      gallery: [
        "/images/ella-train.jpg",
        "/images/ella-bridge.jpg",
        "/images/ella-peak.jpg",
        "/images/ella-tea.jpg",
      ],
      shortDescription:
        "Misty mountains, tea plantations, and scenic train rides through some of Sri Lanka's most beautiful landscapes.",
      fullDescription: `Ella is a small town in the Badulla District of Uva Province, Sri Lanka, governed by an Urban Council. It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna. Ella is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands, due to its elevation.

Ella is most famous for its scenic beauty and the famous Nine Arch Bridge. The area is also known for its tea plantations, which produce some of the world's finest tea. The town is a popular destination for tourists who come to enjoy the cool climate, scenic views, and outdoor activities such as hiking and trekking.

The Nine Arch Bridge is one of the most iconic landmarks in Sri Lanka. Built in 1921, this architectural marvel is made entirely of stone, brick, and cement without any steel. The bridge spans 91 meters at a height of 24 meters and is surrounded by lush green tea plantations and misty mountains.

Ella is also home to Little Adam's Peak, a popular hiking destination that offers panoramic views of the surrounding countryside. The hike is relatively easy and takes about 30-45 minutes to reach the summit.`,
      highlights: [
        "Nine Arch Bridge",
        "Little Adam's Peak",
        "Tea Plantation Tours",
        "Scenic Train Ride",
        "Ravana Falls",
        "Ella Rock",
      ],
      bestTime: "December to March",
      difficulty: "Moderate",
      groupSize: "2-12 people",
      duration: "2-3 days",
      price: 120,
      rating: 4.9,
      reviews: 156,
      included: [
        "Professional guide",
        "Transportation",
        "Tea plantation tour",
        "Train tickets",
        "Lunch",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
        "Accommodation",
        "Travel insurance",
      ],
      nearbyAttractions: [
        "Ravana Falls",
        "Ella Rock",
        "Diyaluma Falls",
        "Bambaragala Peak",
      ],
    },
    "4": {
      id: 4,
      name: "Galle Dutch Fort",
      category: "heritage",
      location: "Southern Province",
      coordinates: { lat: 6.0329, lng: 80.2169 },
      mainImage: "/images/galle-fort.jpg",
      gallery: [
        "/images/galle-fort.jpg",
        "/images/galle-lighthouse.jpg",
        "/images/galle-streets.jpg",
        "/images/galle-ramparts.jpg",
      ],
      shortDescription:
        "UNESCO World Heritage colonial fort with historic lighthouse, museums, and charming cobblestone streets.",
      fullDescription: `Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical, archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka.

The fort has a colorful history, and today has a multi-ethnic and multi-religious population. The Sri Lankan government and many Dutch people who still own some of the properties inside the fort are looking at making this one of the modern wonders of the world. The heritage value of the fort has been recognized by the UNESCO and the site has been inscribed as a cultural heritage UNESCO World Heritage site under criteria iv, for its unique exposition of "an urban ensemble which illustrates the interaction of European architecture and South Asian traditions from the 16th to the 19th centuries."

The Galle Fort, also known as the Dutch Fort or the "Ramparts of Galle", withstood the Boxing Day tsunami which damaged part of coastal area Galle town. It has been since restored. The Galle Fort is considered to be one of the best examples of a fortified city built by Europeans in South and Southeast Asia, showing the interaction between European architectural styles and South Asian traditions.`,
      highlights: [
        "Colonial Architecture",
        "Historic Lighthouse",
        "Fort Ramparts",
        "Maritime Museum",
        "Dutch Reformed Church",
        "Galle Fort Hotel",
      ],
      bestTime: "November to April",
      difficulty: "Easy",
      groupSize: "2-25 people",
      duration: "1 day",
      price: 80,
      rating: 4.7,
      reviews: 203,
      included: [
        "Professional guide",
        "Entrance fees",
        "Transportation",
        "Lunch",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
        "Accommodation",
        "Travel insurance",
      ],
      nearbyAttractions: [
        "Unawatuna Beach",
        "Hikkaduwa Beach",
        "Koggala Lake",
        "Stilt Fishermen",
      ],
    },
    "5": {
      id: 5,
      name: "Yala National Park",
      category: "nature",
      location: "Southern Province",
      coordinates: { lat: 6.37278, lng: 81.51694 },
      mainImage: "/images/elephant-safari.jpg",
      gallery: [
        "/images/elephant-safari.jpg",
        "/images/yala-leopard.jpg",
        "/images/yala-birds.jpg",
        "/images/yala-beach.jpg",
      ],
      shortDescription:
        "Premier wildlife destination famous for leopards, elephants, and diverse bird species in their natural habitat.",
      fullDescription: `Yala National Park is the most visited and second largest national park in Sri Lanka, bordering the Indian Ocean. The park consists of five blocks, two of which are now open to the public, and also adjoining parks. The blocks have individual names such as, Ruhuna National Park (Block 1), and Kumana National Park or 'Yala East' for the adjoining area. It is situated in the southeast region of the country, and lies in Southern Province and Uva Province. The park covers 979 square kilometres and is located about 300 kilometres from Colombo.

Yala was designated as a wildlife sanctuary in 1900, and, along with Wilpattu was one of the first two national parks in Sri Lanka, having been designated in 1938. The park is best known for its variety of wild animals. It is important for the conservation of Sri Lankan elephants, Sri Lankan leopards and aquatic birds.

There are six national parks and three wildlife sanctuaries in the vicinity of Yala. Among the largest is Lunugamvehera National Park. The park is situated in the dry semi-arid climatic region and rain is received mainly during the northeast monsoon. Yala hosts a variety of ecosystems ranging from moist monsoon forests to freshwater and marine wetlands. It is one of the 70 Important Bird Areas (IBAs) in Sri Lanka. Yala harbours 215 bird species including six endemic species of Sri Lanka. The number of mammals that has been recorded from the park is 44, and it has one of the highest leopard densities in the world.`,
      highlights: [
        "Leopard Spotting",
        "Elephant Herds",
        "Bird Watching",
        "Beach Camping",
        "Safari Tours",
        "Wildlife Photography",
      ],
      bestTime: "February to July",
      difficulty: "Easy",
      groupSize: "2-8 people",
      duration: "1-2 days",
      price: 180,
      rating: 4.8,
      reviews: 178,
      included: [
        "Safari jeep",
        "Professional guide",
        "Park entrance fees",
        "Binoculars",
        "Refreshments",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
        "Accommodation",
        "Travel insurance",
      ],
      nearbyAttractions: [
        "Kataragama Temple",
        "Bundala National Park",
        "Sithulpawwa Temple",
        "Kumana National Park",
      ],
    },
    "6": {
      id: 6,
      name: "Mirissa Beach",
      category: "beaches",
      location: "Southern Province",
      coordinates: { lat: 5.9495, lng: 80.4563 },
      mainImage: "/images/beach-sunset.jpg",
      gallery: [
        "/images/beach-sunset.jpg",
        "/images/mirissa-whale.jpg",
        "/images/mirissa-surfing.jpg",
        "/images/mirissa-coconut.jpg",
      ],
      shortDescription:
        "Pristine golden beaches perfect for whale watching, surfing, and enjoying spectacular tropical sunsets.",
      fullDescription: `Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. It is approximately 150 kilometres south of Colombo and is situated at an elevation of 4 metres above sea level. Mirissa beach and nightlife make it a popular tourist destination. It is also a fishing port and one of the island's main whale and dolphin watching locations.

Mirissa is the largest fishing port on the south coast and is a one of the island's main whale and dolphin watching locations. The whale and dolphin watching tours are the main tourist attraction of the town. The best time to spot whales and dolphins is from November to April. The most common whale species spotted are the blue whale, sperm whale, and occasionally killer whales.

The town has a beautiful beach with golden sand and clear blue water. The beach is perfect for swimming, surfing, and sunbathing. The town also has a vibrant nightlife with many restaurants, bars, and cafes. The most popular spot for sunset viewing is Coconut Tree Hill, which offers panoramic views of the Indian Ocean.

Mirissa is also known for its surfing spots, particularly at Weligama Bay, which is just a few kilometers away. The area is perfect for beginners and intermediate surfers.`,
      highlights: [
        "Blue Whale Watching",
        "Golden Beaches",
        "Surfing Spots",
        "Coconut Tree Hill",
        "Sunset Views",
        "Nightlife",
      ],
      bestTime: "November to April",
      difficulty: "Easy",
      groupSize: "2-15 people",
      duration: "2-3 days",
      price: 100,
      rating: 4.9,
      reviews: 267,
      included: [
        "Whale watching tour",
        "Professional guide",
        "Transportation",
        "Lunch",
        "Snorkeling equipment",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
        "Accommodation",
        "Travel insurance",
      ],
      nearbyAttractions: [
        "Weligama Bay",
        "Polhena Beach",
        "Dondra Head Lighthouse",
        "Koggala Lake",
      ],
    },
  };

  const destination = destinations[destinationId as keyof typeof destinations];

  if (!destination) {
    return (
      <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Destination Not Found
          </h1>
          <button
            onClick={onNavigateBack}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + destination.gallery.length) % destination.gallery.length
    );
  };

  const whatsappNumbers = {
    en: "+94771234567",
    ru: "+94777654321",
  };

  const handleWhatsAppClick = () => {
    const number = whatsappNumbers[currentLanguage.code];
    const message = encodeURIComponent(
      `Hi! I'm interested in booking the ${destination.name} tour. Can you provide more details?`
    );
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={destination.gallery[currentImageIndex]}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {destination.gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Header Content */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <button
            onClick={onNavigateBack}
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Destinations
          </button>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 capitalize">
              {destination.category}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center text-white/90">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{destination.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About This Destination
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {destination.shortDescription}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.fullDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Photo Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {destination.gallery.map((image, index) => (
                  <button
                    key={`gallery-${image}-${index}`}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-32 rounded-lg overflow-hidden ${
                      index === currentImageIndex
                        ? "ring-4 ring-emerald-500"
                        : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${destination.name} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Location
              </h3>
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.454499787585!2d81.46930977475266!3d6.463961293527669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5d3a62ffb9359%3A0x3bb623d70b5a3314!2sYala%20National%20Park!5e0!3m2!1sen!2sus!4v1757791549455!5m2!1sen!2sus&output=embed&iwloc=near&t=m`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Google Map of ${destination.name}`}
                ></iframe>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Navigation className="w-4 h-4 mr-2" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500">
                    {destination.coordinates.lat}, {destination.coordinates.lng}
                  </span>
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/place/Yala+National+Park/@6.4639613,81.4693098,15z/data=!3m1!4b1!4m6!3m5!1s0x3ae5d3a62ffb9359:0x3bb623d70b5a3314!8m2!3d6.4639613!4d81.4693098!16s%2Fg%2F11c0x8x8x8`,
                        "_blank"
                      )
                    }
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>View on Google Maps</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking & Info */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 top-24">
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book via WhatsApp</span>
                </button>
                <a
                  href="tel:+94771234567"
                  className="w-full py-3 border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                What's Included
              </h4>
              <ul className="space-y-2">
                {destination.included.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Included */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Not Included
              </h4>
              <ul className="space-y-2">
                {destination.notIncluded.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <div className="w-4 h-4 border border-gray-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Nearby Attractions
              </h4>
              <ul className="space-y-2">
                {destination.nearbyAttractions.map((attraction) => (
                  <li key={attraction} className="text-gray-700 text-sm">
                    • {attraction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
