"use client";

import type React from "react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  Calendar,
  CheckCircle,
  ArrowRight,
  Globe,
  Heart,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const ContactPageContent = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    tourType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        tourType: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      titleKey: "contact.info.phone.title",
      details: ["+94 77 123 4567", "+94 77 765 4321"],
      descriptionKey: "contact.info.phone.description",
    },
    {
      icon: Mail,
      titleKey: "contact.info.email.title",
      details: ["info@srilankadiscovery.com", "tours@srilankadiscovery.com"],
      descriptionKey: "contact.info.email.description",
    },
    {
      icon: MapPin,
      titleKey: "contact.info.office.title",
      details: ["123 Galle Road", "Colombo 03, Sri Lanka"],
      descriptionKey: "contact.info.office.description",
    },
    {
      icon: Clock,
      titleKey: "contact.info.businessHours.title",
      details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 6:00 PM"],
      descriptionKey: "contact.info.businessHours.description",
    },
  ];

  const tourTypes = [
    "contact.form.tourTypes.cultural",
    "contact.form.tourTypes.adventure",
    "contact.form.tourTypes.wildlife",
    "contact.form.tourTypes.beach",
    "contact.form.tourTypes.city",
    "contact.form.tourTypes.custom",
    "contact.form.tourTypes.multiDay",
    "contact.form.tourTypes.dayExcursions",
  ];

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/Hero/Contact.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8">
            <MessageCircle className="w-4 h-4 mr-2 animate-pulse" />
            Get in Touch with Us
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            Ready to embark on your Sri Lankan adventure? We're here to help you
            plan the perfect journey. Reach out to us and let's create
            unforgettable memories together.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(info.titleKey)}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  {t(info.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t("contact.form.title")}
                </h2>
                <p className="text-gray-600 text-lg">
                  {t("contact.form.subtitle")}
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t("contact.form.success.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("contact.form.success.message")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        {t("contact.form.fullName")} *
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
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                          placeholder={t("contact.form.placeholders.fullName")}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        {t("contact.form.emailAddress")} *
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
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                          placeholder={t("contact.form.placeholders.email")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        {t("contact.form.phoneNumber")}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                          placeholder={t("contact.form.placeholders.phone")}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="tourType"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        {t("contact.form.tourType")}
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          id="tourType"
                          name="tourType"
                          value={formData.tourType}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 appearance-none bg-white"
                        >
                          <option value="">
                            {t("contact.form.placeholders.tourType")}
                          </option>
                          {tourTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {t(type)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      {t("contact.form.subject")} *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                        placeholder={t("contact.form.placeholders.subject")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      {t("contact.form.message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 resize-none"
                      placeholder={t("contact.form.placeholders.message")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t("contact.form.submitting")}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>
                          {isSubmitting
                            ? t("contact.form.submitting")
                            : t("contact.form.submit")}
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-emerald-600" />
                  {t("contact.whyChooseUs.title")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {t("contact.whyChooseUs.localExpertise.title")}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t("contact.whyChooseUs.localExpertise.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {t("contact.whyChooseUs.support24.title")}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t("contact.whyChooseUs.support24.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {t("contact.whyChooseUs.customizedTours.title")}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t("contact.whyChooseUs.customizedTours.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {t("contact.whyChooseUs.bestValue.title")}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t("contact.whyChooseUs.bestValue.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  {t("contact.quickContact.title")}
                </h3>
                <p className="mb-6 text-white/90">
                  {t("contact.quickContact.description")}
                </p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-colors duration-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm text-white/80">
                        +94 77 123 4567
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+94771234567"
                    className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-colors duration-200"
                  >
                    <Phone className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Call Now</div>
                      <div className="text-sm text-white/80">
                        +94 77 123 4567
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h3>
                <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      123 Galle Road, Colombo 03
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactPageContent />
    </div>
  );
}
