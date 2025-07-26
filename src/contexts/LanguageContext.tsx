"use client"

import React, { createContext, useContext, useState, type ReactNode } from "react"

export interface Language {
  code: "en" | "ru"
  name: string
  flag: string
}

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
]

type TranslationKeys =
  // Navigation
  | "nav.home"
  | "nav.destinations"
  | "nav.packages"
  | "nav.services"
  | "nav.about"
  | "nav.testimonials"
  | "nav.gallery"
  | "nav.contact"
  // Hero Section
  | "hero.title"
  | "hero.subtitle"
  | "hero.cta"
  | "hero.whatsapp"
  | "hero.explore"
  | "hero.stats.destinations"
  | "hero.stats.clients"
  | "hero.stats.experience"
  | "hero.stats.rating"
  // Destinations
  | "destinations.title"
  | "destinations.subtitle"
  | "destinations.viewAll"
  | "destinations.from"
  | "destinations.days"
  | "destinations.highlights"
  // Packages
  | "packages.title"
  | "packages.subtitle"
  | "packages.bestseller"
  | "packages.popular"
  | "packages.luxury"
  | "packages.from"
  | "packages.person"
  | "packages.includes"
  | "packages.bookNow"
  | "packages.viewDetails"
  | "packages.reviews"
  // Services
  | "services.title"
  | "services.subtitle"
  | "services.luxury.title"
  | "services.luxury.desc"
  | "services.cultural.title"
  | "services.cultural.desc"
  | "services.adventure.title"
  | "services.adventure.desc"
  | "services.wellness.title"
  | "services.wellness.desc"
  | "services.transport.title"
  | "services.transport.desc"
  | "services.accommodation.title"
  | "services.accommodation.desc"
  // About
  | "about.title"
  | "about.subtitle"
  | "about.experience"
  | "about.clients"
  | "about.tours"
  | "about.guides"
  | "about.desc"
  | "about.mission.title"
  | "about.mission.desc"
  | "about.vision.title"
  | "about.vision.desc"
  // Testimonials
  | "testimonials.title"
  | "testimonials.subtitle"
  | "testimonials.readMore"
  // Gallery
  | "gallery.title"
  | "gallery.subtitle"
  | "gallery.viewAll"
  | "gallery.hero.title"
  | "gallery.hero.subtitle"
  | "gallery.categories.all"
  | "gallery.categories.heritage"
  | "gallery.categories.nature"
  | "gallery.categories.adventure"
  | "gallery.categories.culture"
  | "gallery.categories.beaches"
  | "gallery.categories.wildlife"
  // Tour Packages
  | "tourPackages.hero.title"
  | "tourPackages.hero.subtitle"
  | "tourPackages.filters.duration"
  | "tourPackages.filters.category"
  | "tourPackages.filters.all"
  | "tourPackages.filters.oneDay"
  | "tourPackages.filters.twoDay"
  | "tourPackages.categories.all"
  | "tourPackages.categories.cultural"
  | "tourPackages.categories.adventure"
  | "tourPackages.categories.nature"
  | "tourPackages.categories.beach"
  | "tourPackages.categories.wildlife"
  | "tourPackages.duration.oneDay"
  | "tourPackages.duration.twoDay"
  | "tourPackages.people"
  | "tourPackages.highlights"
  | "tourPackages.included.title"
  | "tourPackages.included.transport"
  | "tourPackages.included.guide"
  | "tourPackages.included.entrance"
  | "tourPackages.included.lunch"
  | "tourPackages.included.water"
  | "tourPackages.included.accommodation"
  | "tourPackages.included.meals"
  | "tourPackages.included.activities"
  | "tourPackages.included.safari"
  | "tourPackages.included.equipment"
  | "tourPackages.included.boat"
  | "tourPackages.included.snorkeling"
  | "tourPackages.included.refreshments"
  | "tourPackages.moreIncluded"
  | "tourPackages.bookNow"
  | "tourPackages.viewDetails"
  | "tourPackages.badges.bestseller"
  | "tourPackages.badges.popular"
  | "tourPackages.badges.adventure"
  | "tourPackages.badges.heritage"
  | "tourPackages.badges.wildlife"
  | "tourPackages.badges.relaxation"
  | "tourPackages.cta.title"
  | "tourPackages.cta.subtitle"
  | "tourPackages.cta.button"
  // Tour Package Names and Details
  | "tourPackages.packages.sigiriya.name"
  | "tourPackages.packages.sigiriya.highlights.fortress"
  | "tourPackages.packages.sigiriya.highlights.frescoes"
  | "tourPackages.packages.sigiriya.highlights.gardens"
  | "tourPackages.packages.sigiriya.highlights.museum"
  | "tourPackages.packages.kandy.name"
  | "tourPackages.packages.kandy.highlights.temple"
  | "tourPackages.packages.kandy.highlights.gardens"
  | "tourPackages.packages.kandy.highlights.dance"
  | "tourPackages.packages.kandy.highlights.lake"
  | "tourPackages.packages.ella.name"
  | "tourPackages.packages.ella.highlights.bridge"
  | "tourPackages.packages.ella.highlights.peak"
  | "tourPackages.packages.ella.highlights.tea"
  | "tourPackages.packages.ella.highlights.train"
  | "tourPackages.packages.galle.name"
  | "tourPackages.packages.galle.highlights.fort"
  | "tourPackages.packages.galle.highlights.lighthouse"
  | "tourPackages.packages.galle.highlights.ramparts"
  | "tourPackages.packages.galle.highlights.museum"
  | "tourPackages.packages.yala.name"
  | "tourPackages.packages.yala.highlights.leopards"
  | "tourPackages.packages.yala.highlights.elephants"
  | "tourPackages.packages.yala.highlights.birds"
  | "tourPackages.packages.yala.highlights.camping"
  | "tourPackages.packages.mirissa.name"
  | "tourPackages.packages.mirissa.highlights.whales"
  | "tourPackages.packages.mirissa.highlights.beach"
  | "tourPackages.packages.mirissa.highlights.coconut"
  | "tourPackages.packages.mirissa.highlights.sunset"
  // Contact
  | "contact.title"
  | "contact.subtitle"
  | "contact.whatsapp.title"
  | "contact.whatsapp.desc"
  | "contact.email.title"
  | "contact.email.desc"
  | "contact.phone.title"
  | "contact.phone.desc"
  | "contact.office.title"
  | "contact.office.desc"
  | "contact.form.title"
  | "contact.form.name"
  | "contact.form.email"
  | "contact.form.phone"
  | "contact.form.message"
  | "contact.form.send"
  // Footer
  | "footer.tagline"
  | "footer.rights"
  | "footer.quickLinks"
  | "footer.services"
  | "footer.contact"
  | "footer.followUs"
  | "footer.newsletter"
  | "footer.newsletterDesc"
  | "footer.subscribe"
  // Common
  | "common.readMore"
  | "common.learnMore"
  | "common.bookNow"
  | "common.getQuote"
  | "common.viewAll"
  | "common.loading"
  | "common.error"

type TranslationMap = {
  [key in TranslationKeys]: string
}

const translations: { [lang: string]: TranslationMap } = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.destinations": "Destinations",
    "nav.packages": "Packages",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.testimonials": "Reviews",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Discover the Pearl of the Indian Ocean",
    "hero.subtitle":
      "Experience Sri Lanka like never before with our premium travel services. From pristine beaches to ancient temples, create memories that last a lifetime.",
    "hero.cta": "Start Your Journey",
    "hero.whatsapp": "Chat on WhatsApp",
    "hero.explore": "Explore Destinations",
    "hero.stats.destinations": "Destinations",
    "hero.stats.clients": "Happy Clients",
    "hero.stats.experience": "Years Experience",
    "hero.stats.rating": "Average Rating",

    // Destinations
    "destinations.title": "Popular Destinations",
    "destinations.subtitle": "Explore the most breathtaking places in Sri Lanka",
    "destinations.viewAll": "View All Destinations",
    "destinations.from": "From",
    "destinations.days": "days",
    "destinations.highlights": "Highlights",

    // Packages
    "packages.title": "Tour Packages",
    "packages.subtitle": "Carefully crafted experiences for every type of traveler",
    "packages.bestseller": "Best Seller",
    "packages.popular": "Most Popular",
    "packages.luxury": "Luxury",
    "packages.from": "From",
    "packages.person": "per person",
    "packages.includes": "What's Included",
    "packages.bookNow": "Book Now",
    "packages.viewDetails": "View Details",
    "packages.reviews": "reviews",

    // Services
    "services.title": "Our Premium Services",
    "services.subtitle": "Tailored experiences for every traveler",
    "services.luxury.title": "Luxury Tours",
    "services.luxury.desc": "Private guided tours with premium accommodations and exclusive experiences.",
    "services.cultural.title": "Cultural Heritage",
    "services.cultural.desc": "Explore ancient temples, UNESCO sites, and traditional Sri Lankan culture.",
    "services.adventure.title": "Adventure Tours",
    "services.adventure.desc": "Hiking, safari, diving, and thrilling outdoor activities.",
    "services.wellness.title": "Wellness Retreats",
    "services.wellness.desc": "Ayurvedic treatments, yoga, and rejuvenating spa experiences.",
    "services.transport.title": "Transportation",
    "services.transport.desc": "Comfortable and reliable transport with professional drivers.",
    "services.accommodation.title": "Accommodation",
    "services.accommodation.desc": "Handpicked hotels and resorts for the perfect stay.",

    // About
    "about.title": "Why Choose Ceylon Escape?",
    "about.subtitle": "Your trusted partner for extraordinary Sri Lankan adventures",
    "about.experience": "Years of Experience",
    "about.clients": "Happy Clients",
    "about.tours": "Successful Tours",
    "about.guides": "Expert Guides",
    "about.desc":
      "With over a decade of experience in Sri Lankan tourism, we craft personalized journeys that showcase the best of our beautiful island. Our expert local guides ensure authentic experiences while maintaining the highest standards of comfort and safety.",
    "about.mission.title": "Our Mission",
    "about.mission.desc":
      "To provide unforgettable travel experiences that connect you with the heart and soul of Sri Lanka.",
    "about.vision.title": "Our Vision",
    "about.vision.desc":
      "To be the leading travel company in Sri Lanka, known for exceptional service and authentic experiences.",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Real experiences from real travelers",
    "testimonials.readMore": "Read More Reviews",

    // Gallery
    "gallery.title": "Explore Sri Lanka",
    "gallery.subtitle": "A visual journey through paradise",
    "gallery.viewAll": "View Full Gallery",
    "gallery.hero.title": "Visual Paradise",
    "gallery.hero.subtitle":
      "Immerse yourself in the breathtaking beauty of Sri Lanka through our curated collection of stunning photography and videos.",
    "gallery.categories.all": "All",
    "gallery.categories.heritage": "Heritage",
    "gallery.categories.nature": "Nature",
    "gallery.categories.adventure": "Adventure",
    "gallery.categories.culture": "Culture",
    "gallery.categories.beaches": "Beaches",
    "gallery.categories.wildlife": "Wildlife",

    // Tour Packages
    "tourPackages.hero.title": "Short Escape Tours",
    "tourPackages.hero.subtitle":
      "Perfect getaways designed for busy travelers. Experience the best of Sri Lanka in 1-2 days with our expertly crafted mini adventures.",
    "tourPackages.filters.duration": "Duration",
    "tourPackages.filters.category": "Category",
    "tourPackages.filters.all": "All Tours",
    "tourPackages.filters.oneDay": "1 Day Tours",
    "tourPackages.filters.twoDay": "2 Day Tours",
    "tourPackages.categories.all": "All Categories",
    "tourPackages.categories.cultural": "Cultural",
    "tourPackages.categories.adventure": "Adventure",
    "tourPackages.categories.nature": "Nature",
    "tourPackages.categories.beach": "Beach",
    "tourPackages.categories.wildlife": "Wildlife",
    "tourPackages.duration.oneDay": "1 Day",
    "tourPackages.duration.twoDay": "2 Days",
    "tourPackages.people": "people",
    "tourPackages.highlights": "Tour Highlights",
    "tourPackages.included.title": "What's Included",
    "tourPackages.included.transport": "Private Transportation",
    "tourPackages.included.guide": "Expert Guide",
    "tourPackages.included.entrance": "Entrance Fees",
    "tourPackages.included.lunch": "Lunch",
    "tourPackages.included.water": "Bottled Water",
    "tourPackages.included.accommodation": "Hotel Accommodation",
    "tourPackages.included.meals": "All Meals",
    "tourPackages.included.activities": "All Activities",
    "tourPackages.included.safari": "Safari Jeep",
    "tourPackages.included.equipment": "Safety Equipment",
    "tourPackages.included.boat": "Boat Trip",
    "tourPackages.included.snorkeling": "Snorkeling Gear",
    "tourPackages.included.refreshments": "Refreshments",
    "tourPackages.moreIncluded": "more included",
    "tourPackages.bookNow": "Book Now",
    "tourPackages.viewDetails": "View Details",
    "tourPackages.badges.bestseller": "Best Seller",
    "tourPackages.badges.popular": "Popular",
    "tourPackages.badges.adventure": "Adventure",
    "tourPackages.badges.heritage": "Heritage",
    "tourPackages.badges.wildlife": "Wildlife",
    "tourPackages.badges.relaxation": "Relaxation",
    "tourPackages.cta.title": "Need a Custom Tour?",
    "tourPackages.cta.subtitle":
      "Let us create a personalized itinerary that matches your interests, schedule, and budget perfectly.",
    "tourPackages.cta.button": "Plan My Custom Tour",

    // Tour Package Names and Details
    "tourPackages.packages.sigiriya.name": "Sigiriya Rock Fortress Day Tour",
    "tourPackages.packages.sigiriya.highlights.fortress": "Ancient Rock Fortress",
    "tourPackages.packages.sigiriya.highlights.frescoes": "Famous Frescoes",
    "tourPackages.packages.sigiriya.highlights.gardens": "Water Gardens",
    "tourPackages.packages.sigiriya.highlights.museum": "Archaeological Museum",

    "tourPackages.packages.kandy.name": "Kandy Cultural Heritage Tour",
    "tourPackages.packages.kandy.highlights.temple": "Temple of the Tooth",
    "tourPackages.packages.kandy.highlights.gardens": "Royal Botanical Gardens",
    "tourPackages.packages.kandy.highlights.dance": "Traditional Dance Show",
    "tourPackages.packages.kandy.highlights.lake": "Kandy Lake",

    "tourPackages.packages.ella.name": "Ella Hill Country Adventure",
    "tourPackages.packages.ella.highlights.bridge": "Nine Arch Bridge",
    "tourPackages.packages.ella.highlights.peak": "Little Adam's Peak",
    "tourPackages.packages.ella.highlights.tea": "Tea Plantation Tour",
    "tourPackages.packages.ella.highlights.train": "Scenic Train Ride",

    "tourPackages.packages.galle.name": "Galle Dutch Fort Discovery",
    "tourPackages.packages.galle.highlights.fort": "UNESCO World Heritage Fort",
    "tourPackages.packages.galle.highlights.lighthouse": "Historic Lighthouse",
    "tourPackages.packages.galle.highlights.ramparts": "Fort Ramparts Walk",
    "tourPackages.packages.galle.highlights.museum": "Maritime Museum",

    "tourPackages.packages.yala.name": "Yala Safari Adventure",
    "tourPackages.packages.yala.highlights.leopards": "Sri Lankan Leopards",
    "tourPackages.packages.yala.highlights.elephants": "Wild Elephants",
    "tourPackages.packages.yala.highlights.birds": "Exotic Bird Species",
    "tourPackages.packages.yala.highlights.camping": "Luxury Camping",

    "tourPackages.packages.mirissa.name": "Mirissa Beach & Whale Watching",
    "tourPackages.packages.mirissa.highlights.whales": "Blue Whale Watching",
    "tourPackages.packages.mirissa.highlights.beach": "Golden Beach",
    "tourPackages.packages.mirissa.highlights.coconut": "Coconut Tree Hill",
    "tourPackages.packages.mirissa.highlights.sunset": "Spectacular Sunset",

    // Contact
    "contact.title": "Plan Your Dream Vacation",
    "contact.subtitle": "Get in touch with our travel experts",
    "contact.whatsapp.title": "WhatsApp Us",
    "contact.whatsapp.desc": "Quick responses and instant planning",
    "contact.email.title": "Email Us",
    "contact.email.desc": "Detailed inquiries and bookings",
    "contact.phone.title": "Call Us",
    "contact.phone.desc": "24/7 travel assistance",
    "contact.office.title": "Visit Our Office",
    "contact.office.desc": "Meet us in person for personalized planning",
    "contact.form.title": "Send us a Message",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",

    // Footer
    "footer.tagline": "Making Sri Lankan dreams come true since 2023",
    "footer.rights": "All rights reserved.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact Info",
    "footer.followUs": "Follow Us",
    "footer.newsletter": "Newsletter",
    "footer.newsletterDesc": "Subscribe for travel tips and exclusive offers",
    "footer.subscribe": "Subscribe",

    // Common
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.bookNow": "Book Now",
    "common.getQuote": "Get Quote",
    "common.viewAll": "View All",
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.destinations": "Направления",
    "nav.packages": "Пакеты",
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.testimonials": "Отзывы",
    "nav.gallery": "Галерея",
    "nav.contact": "Контакты",

    // Hero Section
    "hero.title": "Откройте для себя Жемчужину Индийского океана",
    "hero.subtitle":
      "Испытайте Шри-Ланку как никогда раньше с нашими премиальными туристическими услугами. От нетронутых пляжей до древних храмов - создайте воспоминания на всю жизнь.",
    "hero.cta": "Начните свое путешествие",
    "hero.whatsapp": "Чат в WhatsApp",
    "hero.explore": "Исследовать направления",
    "hero.stats.destinations": "Направлений",
    "hero.stats.clients": "Довольных клиентов",
    "hero.stats.experience": "Лет опыта",
    "hero.stats.rating": "Средний рейтинг",

    // Destinations
    "destinations.title": "Популярные направления",
    "destinations.subtitle": "Исследуйте самые захватывающие места Шри-Ланки",
    "destinations.viewAll": "Посмотреть все направления",
    "destinations.from": "От",
    "destinations.days": "дней",
    "destinations.highlights": "Особенности",

    // Packages
    "packages.title": "Туристические пакеты",
    "packages.subtitle": "Тщательно продуманные впечатления для каждого типа путешественника",
    "packages.bestseller": "Бестселлер",
    "packages.popular": "Самый популярный",
    "packages.luxury": "Люкс",
    "packages.from": "От",
    "packages.person": "за человека",
    "packages.includes": "Что включено",
    "packages.bookNow": "Забронировать",
    "packages.viewDetails": "Подробнее",
    "packages.reviews": "отзывов",

    // Services
    "services.title": "Наши премиум услуги",
    "services.subtitle": "Индивидуальные впечатления для каждого путешественника",
    "services.luxury.title": "Роскошные туры",
    "services.luxury.desc": "Частные экскурсии с премиальным размещением и эксклюзивными впечатлениями.",
    "services.cultural.title": "Культурное наследие",
    "services.cultural.desc": "Исследуйте древние храмы, объекты ЮНЕСКО и традиционную культуру Шри-Ланки.",
    "services.adventure.title": "Приключенческие туры",
    "services.adventure.desc": "Походы, сафари, дайвинг и захватывающие активности на природе.",
    "services.wellness.title": "Оздоровительные ретриты",
    "services.wellness.desc": "Аюрведические процедуры, йога и омолаживающий спа-опыт.",
    "services.transport.title": "Транспорт",
    "services.transport.desc": "Комфортный и надежный транспорт с профессиональными водителями.",
    "services.accommodation.title": "Размещение",
    "services.accommodation.desc": "Тщательно отобранные отели и курорты для идеального отдыха.",

    // About
    "about.title": "Почему стоит выбрать Ceylon Escape?",
    "about.subtitle": "Ваш надежный партнер для необычайных приключений в Шри-Ланке",
    "about.experience": "Лет опыта",
    "about.clients": "Довольных клиентов",
    "about.tours": "Успешных туров",
    "about.guides": "Опытных гидов",
    "about.desc":
      "Имея более чем десятилетний опыт в туризме Шри-Ланки, мы создаем персонализированные путешествия, которые демонстрируют лучшее из нашего прекрасного острова. Наши опытные местные гиды обеспечивают аутентичные впечатления, поддерживая при этом высочайшие стандарты комфорта и безопасности.",
    "about.mission.title": "Наша миссия",
    "about.mission.desc":
      "Предоставлять незабываемые туристические впечатления, которые соединяют вас с сердцем и душой Шри-Ланки.",
    "about.vision.title": "Наше видение",
    "about.vision.desc":
      "Быть ведущей туристической компанией в Шри-Ланке, известной исключительным сервисом и аутентичными впечатлениями.",

    // Testimonials
    "testimonials.title": "Что говорят наши клиенты",
    "testimonials.subtitle": "Реальные впечатления от реальных путешественников",
    "testimonials.readMore": "Читать больше отзывов",

    // Gallery
    "gallery.title": "Исследуйте Шри-Ланку",
    "gallery.subtitle": "Визуальное путешествие по раю",
    "gallery.viewAll": "Посмотреть всю галерею",
    "gallery.hero.title": "Визуальный рай",
    "gallery.hero.subtitle":
      "Погрузитесь в захватывающую красоту Шри-Ланки через нашу тщательно подобранную коллекцию потрясающих фотографий и видео.",
    "gallery.categories.all": "Все",
    "gallery.categories.heritage": "Наследие",
    "gallery.categories.nature": "Природа",
    "gallery.categories.adventure": "Приключения",
    "gallery.categories.culture": "Культура",
    "gallery.categories.beaches": "Пляжи",
    "gallery.categories.wildlife": "Дикая природа",

    // Tour Packages
    "tourPackages.hero.title": "Короткие туры-побеги",
    "tourPackages.hero.subtitle":
      "Идеальные путешествия для занятых путешественников. Испытайте лучшее из Шри-Ланки за 1-2 дня с нашими экспертно созданными мини-приключениями.",
    "tourPackages.filters.duration": "Продолжительность",
    "tourPackages.filters.category": "Категория",
    "tourPackages.filters.all": "Все туры",
    "tourPackages.filters.oneDay": "Однодневные туры",
    "tourPackages.filters.twoDay": "Двухдневные туры",
    "tourPackages.categories.all": "Все категории",
    "tourPackages.categories.cultural": "Культурные",
    "tourPackages.categories.adventure": "Приключения",
    "tourPackages.categories.nature": "Природа",
    "tourPackages.categories.beach": "Пляж",
    "tourPackages.categories.wildlife": "Дикая природа",
    "tourPackages.duration.oneDay": "1 день",
    "tourPackages.duration.twoDay": "2 дня",
    "tourPackages.people": "человек",
    "tourPackages.highlights": "Особенности тура",
    "tourPackages.included.title": "Что включено",
    "tourPackages.included.transport": "Частный транспорт",
    "tourPackages.included.guide": "Опытный гид",
    "tourPackages.included.entrance": "Входные билеты",
    "tourPackages.included.lunch": "Обед",
    "tourPackages.included.water": "Бутилированная вода",
    "tourPackages.included.accommodation": "Размещение в отеле",
    "tourPackages.included.meals": "Все блюда",
    "tourPackages.included.activities": "Все активности",
    "tourPackages.included.safari": "Сафари джип",
    "tourPackages.included.equipment": "Оборудование безопасности",
    "tourPackages.included.boat": "Поездка на лодке",
    "tourPackages.included.snorkeling": "Снаряжение для снорклинга",
    "tourPackages.included.refreshments": "Освежающие напитки",
    "tourPackages.moreIncluded": "еще включено",
    "tourPackages.bookNow": "Забронировать сейчас",
    "tourPackages.viewDetails": "Подробности",
    "tourPackages.badges.bestseller": "Бестселлер",
    "tourPackages.badges.popular": "Популярный",
    "tourPackages.badges.adventure": "Приключение",
    "tourPackages.badges.heritage": "Наследие",
    "tourPackages.badges.wildlife": "Дикая природа",
    "tourPackages.badges.relaxation": "Релаксация",
    "tourPackages.cta.title": "Нужен индивидуальный тур?",
    "tourPackages.cta.subtitle":
      "Позвольте нам создать персонализированный маршрут, который идеально соответствует вашим интересам, расписанию и бюджету.",
    "tourPackages.cta.button": "Спланировать мой индивидуальный тур",

    // Tour Package Names and Details
    "tourPackages.packages.sigiriya.name": "Однодневный тур к крепости Сигирия",
    "tourPackages.packages.sigiriya.highlights.fortress": "Древняя скальная крепость",
    "tourPackages.packages.sigiriya.highlights.frescoes": "Знаменитые фрески",
    "tourPackages.packages.sigiriya.highlights.gardens": "Водные сады",
    "tourPackages.packages.sigiriya.highlights.museum": "Археологический музей",

    "tourPackages.packages.kandy.name": "Тур по культурному наследию Канди",
    "tourPackages.packages.kandy.highlights.temple": "Храм Зуба Будды",
    "tourPackages.packages.kandy.highlights.gardens": "Королевские ботанические сады",
    "tourPackages.packages.kandy.highlights.dance": "Традиционное танцевальное шоу",
    "tourPackages.packages.kandy.highlights.lake": "Озеро Канди",

    "tourPackages.packages.ella.name": "Приключение в горной стране Элла",
    "tourPackages.packages.ella.highlights.bridge": "Мост Девяти арок",
    "tourPackages.packages.ella.highlights.peak": "Малый пик Адама",
    "tourPackages.packages.ella.highlights.tea": "Тур по чайной плантации",
    "tourPackages.packages.ella.highlights.train": "Живописная поездка на поезде",

    "tourPackages.packages.galle.name": "Открытие голландского форта Галле",
    "tourPackages.packages.galle.highlights.fort": "Форт всемирного наследия ЮНЕСКО",
    "tourPackages.packages.galle.highlights.lighthouse": "Исторический маяк",
    "tourPackages.packages.galle.highlights.ramparts": "Прогулка по валам форта",
    "tourPackages.packages.galle.highlights.museum": "Морской музей",

    "tourPackages.packages.yala.name": "Сафари-приключение в Яла",
    "tourPackages.packages.yala.highlights.leopards": "Шри-ланкийские леопарды",
    "tourPackages.packages.yala.highlights.elephants": "Дикие слоны",
    "tourPackages.packages.yala.highlights.birds": "Экзотические виды птиц",
    "tourPackages.packages.yala.highlights.camping": "Роскошный кемпинг",

    "tourPackages.packages.mirissa.name": "Пляж Мирисса и наблюдение за китами",
    "tourPackages.packages.mirissa.highlights.whales": "Наблюдение за синими китами",
    "tourPackages.packages.mirissa.highlights.beach": "Золотой пляж",
    "tourPackages.packages.mirissa.highlights.coconut": "Кокосовый холм",
    "tourPackages.packages.mirissa.highlights.sunset": "Захватывающий закат",

    // Contact
    "contact.title": "Спланируйте отпуск своей мечты",
    "contact.subtitle": "Свяжитесь с нашими экспертами по путешествиям",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.desc": "Быстрые ответы и мгновенное планирование",
    "contact.email.title": "Напишите нам",
    "contact.email.desc": "Подробные запросы и бронирования",
    "contact.phone.title": "Позвоните нам",
    "contact.phone.desc": "Помощь в путешествиях 24/7",
    "contact.office.title": "Посетите наш офис",
    "contact.office.desc": "Встретьтесь с нами лично для персонального планирования",
    "contact.form.title": "Отправьте нам сообщение",
    "contact.form.name": "Ваше имя",
    "contact.form.email": "Email адрес",
    "contact.form.phone": "Номер телефона",
    "contact.form.message": "Ваше сообщение",
    "contact.form.send": "Отправить сообщение",

    // Footer
    "footer.tagline": "Воплощаем мечты о Шри-Ланке с 2010 года",
    "footer.rights": "Все права защищены.",
    "footer.quickLinks": "Быстрые ссылки",
    "footer.services": "Услуги",
    "footer.contact": "Контактная информация",
    "footer.followUs": "Следите за нами",
    "footer.newsletter": "Рассылка",
    "footer.newsletterDesc": "Подпишитесь на советы по путешествиям и эксклюзивные предложения",
    "footer.subscribe": "Подписаться",

    // Common
    "common.readMore": "Читать далее",
    "common.learnMore": "Узнать больше",
    "common.bookNow": "Забронировать",
    "common.getQuote": "Получить предложение",
    "common.viewAll": "Посмотреть все",
    "common.loading": "Загрузка...",
    "common.error": "Что-то пошло не так",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language)
  }

  const t = (key: string): string => {
    const translationMap = translations[currentLanguage.code] as TranslationMap
    if (key in translationMap) {
      return translationMap[key as keyof TranslationMap]
    }
    return key
  }

  const contextValue = React.useMemo(
    () => ({
      currentLanguage,
      setLanguage,
      t,
    }),
    [currentLanguage],
  )

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export { languages }
