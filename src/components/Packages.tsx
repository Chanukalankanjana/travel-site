"use client"
import { Star, ArrowRight, Crown, Zap, Heart } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { useNavigation } from "../contexts/NavigationContext"

export default function Packages() {
  const { t, currentLanguage } = useLanguage()
  const { navigateToPackages } = useNavigation()
  const handleGetQuote = () => {
    const num = t(`whatsapp.phoneNumber.${currentLanguage.code}`)
    const msg = t("whatsapp.message.packages")
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, "_blank")
  }

  const packages = [
    {
      id: "1",
      name: t("packages.home.culturalHeritage.name"),
      duration: t("packages.home.culturalHeritage.duration"),
      price: t("packages.home.culturalHeritage.price"),
      originalPrice: t("packages.home.culturalHeritage.originalPrice"),
      image: "culturalHeri.jpg",
      rating: 4.9,
      reviews: 156,
      badge: "bestseller",
      badgeIcon: Crown,
    },
    {
      id: "2",
      name: t("packages.home.adventureWildlife.name"),
      duration: t("packages.home.adventureWildlife.duration"),
      price: t("packages.home.adventureWildlife.price"),
      originalPrice: t("packages.home.adventureWildlife.originalPrice"),
      image: "adventureWild.jpg",
      rating: 4.8,
      reviews: 203,
      badge: "popular",
      badgeIcon: Zap,
    },
    {
      id: "3",
      name: t("packages.home.beachRelaxation.name"),
      duration: t("packages.home.beachRelaxation.duration"),
      price: t("packages.home.beachRelaxation.price"),
      originalPrice: t("packages.home.beachRelaxation.originalPrice"),
      image: "beachRelax.jpg",
      rating: 5.0,
      reviews: 89,
      badge: "luxury",
      badgeIcon: Heart,
    },
  ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "bestseller":
        return "bg-yellow-500"
      case "popular":
        return "bg-green-500"
      case "luxury":
        return "bg-purple-500"
      default:
        return "bg-blue-500"
    }
  }

  const getBadgeText = (badge: string) => {
    switch (badge) {
      case "bestseller":
        return t("packages.bestseller")
      case "popular":
        return t("packages.popular")
      case "luxury":
        return t("packages.luxury")
      default:
        return ""
    }
  }

  return (
    <section id="packages" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            <Crown className="w-4 h-4 mr-2" />
{t("packages.hero.premiumPackages")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t("packages.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("packages.subtitle")}</p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => {
            const BadgeIcon = pkg.badgeIcon

            return (
              <div
                key={pkg.id}
                className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  index === 1 ? "lg:scale-105 border-2 border-emerald-200" : ""
                }`}
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
                    src={`${import.meta.env.BASE_URL}${(pkg.image || "/placeholder.svg").replace(/^\//, "")}`}
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
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                      <p className="text-gray-500 text-sm">{pkg.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{pkg.price}</div>
                      <div className="text-sm text-gray-500 line-through">{pkg.originalPrice}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-800">{pkg.rating}</span>
                      <span className="text-xs text-gray-600">({pkg.reviews})</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button onClick={() => navigateToPackages()} className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                      <span>{t("packages.bookNow")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => navigateToPackages()} className="w-full border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 py-3 rounded-lg font-semibold transition-colors duration-300">
                      {t("packages.viewDetails")}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-emerald-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">{t("packages.custom.title")}</h3>
          <p className="text-xl mb-6 opacity-90">{t("packages.custom.subtitle")}</p>
          <button onClick={handleGetQuote} className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            {t("common.getQuote")}
          </button>
        </div>
      </div>
    </section>
  )
}
