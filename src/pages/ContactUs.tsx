"use client"

import type React from "react"

import { useState } from "react"
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowLeft,
  Send,
  User,
  Calendar,
  Users,
  Globe,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function ContactPage() {
  const { t, currentLanguage } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    travelDates: "",
    groupSize: "",
    packageType: "",
    budget: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const whatsappNumbers = {
    en: "+94771234567",
    ru: "+94777654321",
  }

  const handleWhatsAppClick = () => {
    const number = whatsappNumbers[currentLanguage.code]
    const message = encodeURIComponent(
      currentLanguage.code === "en"
        ? "Hello! I'm interested in your travel services and would like to discuss my trip to Sri Lanka."
        : "Привет! Меня интересуют ваши туристические услуги, и я хотел бы обсудить свою поездку в Шри-Ланку.",
    )
    window.open(`https://wa.me/${number}?text=${message}`, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        travelDates: "",
        groupSize: "",
        packageType: "",
        budget: "",
        message: "",
        newsletter: false,
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick responses and instant planning assistance",
      value: whatsappNumbers[currentLanguage.code],
      action: handleWhatsAppClick,
      color: "bg-green-100 text-green-600",
      available: "24/7 Available",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Detailed inquiries and comprehensive planning",
      value: "info@ceylonescape.com",
      action: () => window.open("mailto:info@ceylonescape.com", "_blank"),
      color: "bg-blue-100 text-blue-600",
      available: "Response within 2 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Direct consultation with travel experts",
      value: "+94 77 123 4567",
      action: () => window.open("tel:+94771234567", "_blank"),
      color: "bg-emerald-100 text-emerald-600",
      available: "Mon-Sun: 8AM-10PM",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Meet us in person for personalized planning",
      value: "123 Galle Road, Colombo 03, Sri Lanka",
      action: () => window.open("https://maps.google.com/?q=123+Galle+Road,+Colombo+03,+Sri+Lanka", "_blank"),
      color: "bg-purple-100 text-purple-600",
      available: "Mon-Fri: 9AM-6PM",
    },
  ]

  const packageTypes = [
    "Cultural Heritage Tours",
    "Adventure & Wildlife",
    "Luxury Beach Retreats",
    "Nature & Eco Tours",
    "Family Packages",
    "Honeymoon Specials",
    "Custom Itinerary",
  ]

  const budgetRanges = [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $2,000",
    "$2,000 - $5,000",
    "Above $5,000",
    "I need guidance",
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 2:00 PM" },
    { day: "Public Holidays", hours: "Emergency support only" },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to plan your dream vacation to Sri Lanka? Our travel experts are here to help you create
              unforgettable memories. Get in touch with us today!
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

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Would You Like to Connect?</h2>
            <p className="text-lg text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group"
                  onClick={method.action}
                >
                  <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{method.description}</p>
                  <p className="text-gray-900 font-semibold text-sm mb-2">{method.value}</p>
                  <div className="flex items-center text-xs text-emerald-600 font-medium">
                    <Clock className="w-3 h-3 mr-1" />
                    {method.available}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Plan Your Dream Vacation</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form below and our travel experts will get back to you within 2 hours with a
                    personalized itinerary and quote.
                  </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-medium">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 2 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-red-800 font-medium">Something went wrong!</p>
                      <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Enter your country"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Travel Details */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Travel Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="travelDates" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Travel Dates
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="travelDates"
                            name="travelDates"
                            value={formData.travelDates}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="e.g., March 2024 or Flexible"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-2">
                          Group Size
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            id="groupSize"
                            name="groupSize"
                            value={formData.groupSize}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          >
                            <option value="">Select group size</option>
                            <option value="1">Solo Traveler</option>
                            <option value="2">Couple</option>
                            <option value="3-5">Small Group (3-5)</option>
                            <option value="6-10">Medium Group (6-10)</option>
                            <option value="10+">Large Group (10+)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="packageType" className="block text-sm font-medium text-gray-700 mb-2">
                          Package Type
                        </label>
                        <select
                          id="packageType"
                          name="packageType"
                          value={formData.packageType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Select package type</option>
                          {packageTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range (per person)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your dream vacation
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Share your interests, special requirements, or any questions you have..."
                    />
                  </div>

                  {/* Newsletter Checkbox */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-700">
                      Subscribe to our newsletter for travel tips and exclusive offers
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send My Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600 text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-700 text-sm font-medium">Emergency support available 24/7 via WhatsApp</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-emerald-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-emerald-100 mb-6">
                  Our travel experts are standing by to help you plan your perfect Sri Lankan adventure.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">How quickly will I get a response?</h4>
                    <p className="text-gray-600 text-sm">Within 2 hours during business hours, 24/7 via WhatsApp.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Is the consultation free?</h4>
                    <p className="text-gray-600 text-sm">Yes, all consultations and quotes are completely free.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Can you customize any package?</h4>
                    <p className="text-gray-600 text-sm">We specialize in creating personalized itineraries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">Located in the heart of Colombo for your convenience</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map Placeholder */}
              <div className="h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Galle Road, Colombo 03</p>
                </div>
              </div>

              {/* Office Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ceylon Escape Head Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">123 Galle Road, Colombo 03, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+94 77 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@ceylonescape.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-gray-600">Saturday: 9AM - 4PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() =>
                      window.open("https://maps.google.com/?q=123+Galle+Road,+Colombo+03,+Sri+Lanka", "_blank")
                    }
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
