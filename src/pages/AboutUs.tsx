"use client"

import { useState, useEffect } from "react"
import {
  Award,
  Users,
  MapPin,
  Shield,
  Target,
  Eye,
  ArrowLeft,
  CheckCircle,
  Heart,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function AboutPage() {
  const { t, currentLanguage } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ experience: 0, clients: 0, tours: 0, guides: 0 })

  useEffect(() => {
    setIsVisible(true)
    // Animate counters
    const targets = { experience: 12, clients: 5000, tours: 500, guides: 50 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setCounters({
        experience: Math.floor(targets.experience * progress),
        clients: Math.floor(targets.clients * progress),
        tours: Math.floor(targets.tours * progress),
        guides: Math.floor(targets.guides * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  const whatsappNumbers = {
    en: "+94771234567",
    ru: "+94777654321",
  }

  const handleWhatsAppClick = () => {
    const number = whatsappNumbers[currentLanguage.code]
    window.open(`https://wa.me/${number}`, "_blank")
  }

  const stats = [
    {
      icon: Award,
      number: counters.experience,
      suffix: "+",
      labelKey: "about.experience",
      description: "Years of expertise in Sri Lankan tourism",
    },
    {
      icon: Users,
      number: counters.clients,
      suffix: "+",
      labelKey: "about.clients",
      description: "Satisfied travelers from around the world",
    },
    {
      icon: MapPin,
      number: counters.tours,
      suffix: "+",
      labelKey: "about.tours",
      description: "Successfully completed tours",
    },
    {
      icon: Shield,
      number: counters.guides,
      suffix: "+",
      labelKey: "about.guides",
      description: "Professional local guides",
    },
  ]

  const values = [
    {
      icon: Target,
      titleKey: "about.mission.title",
      descKey: "about.mission.desc",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Eye,
      titleKey: "about.vision.title",
      descKey: "about.vision.desc",
      color: "bg-blue-100 text-blue-600",
    },
  ]

  const achievements = [
    "Award-winning travel company since 2010",
    "Certified by Sri Lanka Tourism Board",
    "98% customer satisfaction rate",
    "Zero safety incidents in 12+ years",
    "Featured in top travel magazines",
    "Eco-friendly tourism practices",
    "24/7 customer support",
    "Multi-language support",
  ]

  const team = [
    {
      name: "Rajesh Fernando",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300&text=RF",
      description: "20+ years in Sri Lankan tourism industry",
      specialties: ["Cultural Tours", "Heritage Sites"],
    },
    {
      name: "Priya Jayawardena",
      role: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300&text=PJ",
      description: "Expert in adventure and wildlife tours",
      specialties: ["Wildlife Safari", "Adventure Tours"],
    },
    {
      name: "Kumar Silva",
      role: "Head Guide",
      image: "/placeholder.svg?height=300&width=300&text=KS",
      description: "Licensed guide with deep cultural knowledge",
      specialties: ["Historical Sites", "Local Culture"],
    },
    {
      name: "Anita Perera",
      role: "Customer Relations",
      image: "/placeholder.svg?height=300&width=300&text=AP",
      description: "Ensuring exceptional customer experiences",
      specialties: ["Customer Service", "Travel Planning"],
    },
  ]

  const certifications = [
    "Sri Lanka Tourism Development Authority Licensed",
    "International Air Transport Association (IATA) Member",
    "Pacific Asia Travel Association (PATA) Member",
    "ISO 9001:2015 Quality Management Certified",
    "Sustainable Tourism Certified",
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Trusted Since 2010
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">About Ceylon Escape</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your trusted partner for authentic Sri Lankan experiences. We've been creating unforgettable journeys for
              over a decade.
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

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 2010 by passionate locals who wanted to share the true beauty of Sri Lanka with the world,
                Ceylon Escape began as a small family business with a big dream.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the years, we've grown into one of Sri Lanka's most trusted travel companies, but we've never lost
                our personal touch. Every tour is crafted with the same care and attention to detail that made us who we
                are today.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We believe that travel should be transformative, connecting you not just with places, but with people,
                cultures, and experiences that stay with you long after you return home.
              </p>

              <div className="flex items-center space-x-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with Us</span>
                </button>
                <a
                  href="mailto:info@ceylonescape.com"
                  className="px-6 py-3 border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/kandy-temple.jpg"
                alt="Ceylon Escape team"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Made with</div>
                    <div className="font-semibold text-gray-900">Love in Sri Lanka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-900 font-semibold mb-2">{t(stat.labelKey)}</div>
                  <div className="text-gray-600 text-sm">{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${value.color} mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(value.titleKey)}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{t(value.descKey)}</p>
                </div>
              )
            })}
          </div>

          {/* Achievements */}
          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your unforgettable Sri Lankan experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Memberships</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognized by leading tourism organizations for our commitment to quality and safety
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let our experienced team create the perfect Sri Lankan adventure for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>
            <a
              href="tel:+94771234567"
              className="px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
