"use client";

import type React from "react";
import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Contact: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappNumbers = {
    en: "+94771234567",
    ru: "+94777654321",
  };

  const handleWhatsAppClick = () => {
    const number = whatsappNumbers[currentLanguage.code];
    const message = encodeURIComponent(
      currentLanguage.code === "en"
        ? "Hello! I would like to plan my dream vacation to Sri Lanka."
        : "Привет! Я хотел бы спланировать отпуск мечты на Шри-Ланке."
    );
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      titleKey: "contact.whatsapp.title",
      descKey: "contact.whatsapp.desc",
      action: handleWhatsAppClick,
      gradient: "from-green-500 to-green-600",
      hoverGradient: "hover:from-green-600 hover:to-green-700",
      info: whatsappNumbers[currentLanguage.code],
    },
    {
      icon: Mail,
      titleKey: "contact.email.title",
      descKey: "contact.email.desc",
      action: () => (window.location.href = "mailto:info@ceylonescape.com"),
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "hover:from-blue-600 hover:to-blue-700",
      info: "info@ceylonescape.com",
    },
    {
      icon: Phone,
      titleKey: "contact.phone.title",
      descKey: "contact.phone.desc",
      action: () => (window.location.href = "tel:+94771234567"),
      gradient: "from-purple-500 to-purple-600",
      hoverGradient: "hover:from-purple-600 hover:to-purple-700",
      info: "+94 77 123 4567",
    },
    {
      icon: MapPin,
      titleKey: "contact.office.title",
      descKey: "contact.office.desc",
      action: () => window.open("https://maps.google.com", "_blank"),
      gradient: "from-orange-500 to-red-500",
      hoverGradient: "hover:from-orange-600 hover:to-red-600",
      info: "Colombo, Sri Lanka",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <section
        id="contact"
        className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t("contact.title")}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Methods */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={index}
                      onClick={method.action}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
                    >
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${method.gradient} ${method.hoverGradient} mb-4 transition-all duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                        {t(method.titleKey)}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
                        {t(method.descKey)}
                      </p>
                      <p className="text-white font-medium text-sm">
                        {method.info}
                      </p>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t("contact.form.title")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your dream vacation..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t("contact.form.send")}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Background Image */}
          <div className="mt-20 relative overflow-hidden rounded-3xl">
            <img
              src="/placeholder.svg?height=400&width=1200&text=Sri Lanka coast"
              alt="Sri Lanka coast"
              className="w-full h-64 object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
