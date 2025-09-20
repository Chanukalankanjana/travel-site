"use client";

import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t, currentLanguage } = useLanguage();

  const handleWhatsAppClick = () => {
    const number = t(`whatsapp.phoneNumber.${currentLanguage.code}`);
    const message = encodeURIComponent(t("whatsapp.message.contact"));
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  const quickLinks = [
    { key: "nav.home", href: "#home" },
    { key: "nav.destinations", href: "#destinations" },
    { key: "nav.packages", href: "#packages" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  const services = [
    { key: "footer.services.luxury", href: "#services" },
    { key: "footer.services.cultural", href: "#services" },
    { key: "footer.services.adventure", href: "#services" },
    { key: "footer.services.wellness", href: "#services" },
    { key: "footer.services.transport", href: "#services" },
    { key: "footer.services.accommodation", href: "#services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-400" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <img src="logo.png" alt="logo" />
              </div>
              <h3 className="text-xl font-bold">Ceylon Vacations</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-200`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.quickLinks")}
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.services")}
            </h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t(service.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t("footer.whatsapp")}</span>
              </button>
              <a
                href="mailto:info@ceylonescape.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>{t("footer.email")}</span>
              </a>
              <a
                href={`tel:${t(`whatsapp.phoneNumber.${currentLanguage.code}`)}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>{t(`whatsapp.phoneNumber.${currentLanguage.code}`)}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{t("footer.location")}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">{t("footer.newsletter")}</h5>
              <p className="text-gray-400 text-sm mb-4">
                {t("footer.newsletterDesc")}
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-sm font-medium rounded-lg text-white transition-colors duration-200">
                  {t("footer.subscribe")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Ceylon Vacations. {t("footer.rights")}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                {t("footer.terms")}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                {t("footer.cookies")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
