"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Testimonials() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: t("testimonials.sarah.name"),
      location: t("testimonials.sarah.location"),
      avatar: "testi-girl1.webp",
      rating: 5,
      tour: t("testimonials.sarah.tour"),
      review: t("testimonials.sarah.review"),
    },
    {
      id: 2,
      name: t("testimonials.michael.name"),
      location: t("testimonials.michael.location"),
      avatar: "testi-boy.webp",
      rating: 5,
      tour: t("testimonials.michael.tour"),
      review: t("testimonials.michael.review"),
    },
    {
      id: 3,
      name: t("testimonials.emma.name"),
      location: t("testimonials.emma.location"),
      avatar: "testi-girl2.webp",
      rating: 5,
      tour: t("testimonials.emma.tour"),
      review: t("testimonials.emma.review"),
    },
  ]

  const current = testimonials[currentTestimonial]

  return (
    <section id="testimonials" className="py-24 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4 mr-2" />
{t("testimonials.hero.clientStories")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-emerald-600" />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center justify-center mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mx-1" />
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-xl text-gray-700 leading-relaxed text-center mb-8">
              "{current.review}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <img src={current.avatar || "/placeholder.svg"} alt={current.name} className="w-12 h-12 rounded-full" />
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900">{current.name}</h4>
                <p className="text-gray-600 text-sm">{current.location}</p>
                <p className="text-emerald-600 text-sm font-medium">{current.tour}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? "bg-emerald-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
