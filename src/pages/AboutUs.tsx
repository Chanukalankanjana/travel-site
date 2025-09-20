"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutPage() {
  const { t, currentLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    tours: 0,
    guides: 0,
  });

  useEffect(() => {
    setIsVisible(true);
    // Animate counters
    const targets = { experience: 12, clients: 5000, tours: 500, guides: 50 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        experience: Math.floor(targets.experience * progress),
        clients: Math.floor(targets.clients * progress),
        tours: Math.floor(targets.tours * progress),
        guides: Math.floor(targets.guides * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const number = t(`whatsapp.phoneNumber.${currentLanguage.code}`);
    const message = encodeURIComponent(t("whatsapp.message.contact"));
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  const phoneDigits = t(`whatsapp.phoneNumber.${currentLanguage.code}`).replace("+", "");

  const stats = [
    {
      icon: Award,
      number: counters.experience,
      suffix: "+",
      labelKey: "about.experience",
      descriptionKey: "common.yearsExperience",
    },
    {
      icon: Users,
      number: counters.clients,
      suffix: "+",
      labelKey: "about.clients",
      descriptionKey: "common.satisfiedTravelers",
    },
    {
      icon: MapPin,
      number: counters.tours,
      suffix: "+",
      labelKey: "about.tours",
      descriptionKey: "common.successfulTours",
    },
    {
      icon: Shield,
      number: counters.guides,
      suffix: "+",
      labelKey: "about.guides",
      descriptionKey: "common.professionalGuides",
    },
  ];

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
  ];

  const achievements = [
    "about.achievements.award",
    "about.achievements.certified",
    "about.achievements.satisfaction",
    "about.achievements.safety",
    "about.achievements.featured",
    "about.achievements.eco",
    "about.achievements.support",
    "about.achievements.multilang",
  ];

  const team = [
    {
      nameKey: "about.team.member.founder.name",
      roleKey: "about.team.member.founder.role",
      image: "/placeholder.svg?height=300&width=300&text=RF",
      descriptionKey: "about.team.member.founder",
      specialties: [
        "about.team.member.specialties.cultural",
        "about.team.member.specialties.heritage",
      ],
    },
    {
      nameKey: "about.team.member.operations.name",
      roleKey: "about.team.member.operations.role",
      image: "/placeholder.svg?height=300&width=300&text=PJ",
      descriptionKey: "about.team.member.operations",
      specialties: [
        "about.team.member.specialties.wildlife",
        "about.team.member.specialties.adventure",
      ],
    },
    {
      nameKey: "about.team.member.guide.name",
      roleKey: "about.team.member.guide.role",
      image: "/placeholder.svg?height=300&width=300&text=KS",
      descriptionKey: "about.team.member.guide",
      specialties: [
        "about.team.member.specialties.historical",
        "about.team.member.specialties.local",
      ],
    },
    {
      nameKey: "about.team.member.customer.name",
      roleKey: "about.team.member.customer.role",
      image: "/placeholder.svg?height=300&width=300&text=AP",
      descriptionKey: "about.team.member.customer",
      specialties: [
        "about.team.member.specialties.service",
        "about.team.member.specialties.planning",
      ],
    },
  ];

  const certifications = [
    "about.certifications.sltd",
    "about.certifications.iata",
    "about.certifications.pata",
    "about.certifications.iso",
    "about.certifications.sustainable",
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/Hero/Aboutus.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              {t("about.hero.trusted")}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t("about.hero.title")}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
            {/* Back to Home */}
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-colors duration-200 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("about.hero.backToHome")}
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t("about.story.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t("about.story.founded")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t("about.story.grown")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t("about.story.believe")}
              </p>

              <div className="flex items-center space-x-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t("common.chatWithUs")}</span>
                </button>
                <a
                  href="mailto:info@ceylonescape.com"
                  className="px-6 py-3 border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>{t("common.emailUs")}</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="/sigiriya-rock.jpg"
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
                    <div className="font-semibold text-gray-900">
                      Love in Sri Lanka
                    </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("about.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
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
                  <div className="text-gray-900 font-semibold mb-2">
                    {t(stat.labelKey)}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {t(stat.descriptionKey)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("about.values.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("about.values.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${value.color} mb-6`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t(value.descKey)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Achievements */}
          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t("about.achievements.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{t(achievement)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("about.certifications.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("about.certifications.subtitle")}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{t(cert)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t("hero.whatsapp")}</span>
            </button>
            <a
              href={`tel:+${phoneDigits}`}
              className="px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{t("contact.phone.title")}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
