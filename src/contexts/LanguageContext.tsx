"use client";

import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export interface Language {
  code: "en" | "ru";
  name: string;
  flag: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
];

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
  | "nav.adventure"
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
  | "srilankaadventures.hero.title"
  | "srilankaadventures.hero.subtitle"
  | "srilankaadventures.section.title"
  | "srilankaadventures.section.subtitle"
  | "srilankaadventures.whale.tag"
  | "srilankaadventures.whale.title"
  | "srilankaadventures.whale.description"
  | "srilankaadventures.whale.duration"
  | "srilankaadventures.hiking.tag"
  | "srilankaadventures.hiking.title"
  | "srilankaadventures.hiking.description"
  | "srilankaadventures.hiking.duration"
  | "srilankaadventures.safari.tag"
  | "srilankaadventures.safari.title"
  | "srilankaadventures.safari.description"
  | "srilankaadventures.safari.duration"
  | "srilankaadventures.ancient.tag"
  | "srilankaadventures.ancient.title"
  | "srilankaadventures.ancient.description"
  | "srilankaadventures.ancient.duration"
  | "srilankaadventures.rafting.tag"
  | "srilankaadventures.rafting.title"
  | "srilankaadventures.rafting.description"
  | "srilankaadventures.rafting.duration"
  | "srilankaadventures.train.tag"
  | "srilankaadventures.train.title"
  | "srilankaadventures.train.description"
  | "srilankaadventures.train.duration"
  | "srilankaadventures.beach.tag"
  | "srilankaadventures.beach.title"
  | "srilankaadventures.beach.description"
  | "srilankaadventures.beach.duration"
  | "srilankaadventures.temple.tag"
  | "srilankaadventures.temple.title"
  | "srilankaadventures.temple.description"
  | "srilankaadventures.temple.duration"
  | "srilankaadventures.spice.tag"
  | "srilankaadventures.spice.title"
  | "srilankaadventures.spice.description"
  | "srilankaadventures.spice.duration"
  | "srilankaadventures.rainforest.tag"
  | "srilankaadventures.rainforest.title"
  | "srilankaadventures.rainforest.description"
  | "srilankaadventures.rainforest.duration"
  // About Page Additional
  | "about.team.title"
  | "about.team.subtitle"
  | "about.achievements.title"
  | "about.achievements.subtitle"
  | "about.certifications.title"
  | "about.certifications.subtitle"
  | "about.story.title"
  | "about.story.subtitle"
  | "about.values.title"
  | "about.values.subtitle"
  | "about.team.member.founder"
  | "about.team.member.operations"
  | "about.team.member.guide"
  | "about.team.member.customer"
  | "about.achievements.award"
  | "about.achievements.certified"
  | "about.achievements.satisfaction"
  | "about.achievements.safety"
  | "about.achievements.featured"
  | "about.achievements.eco"
  | "about.achievements.support"
  | "about.achievements.multilang"
  | "about.certifications.sltd"
  | "about.certifications.iata"
  | "about.certifications.pata"
  | "about.certifications.iso"
  | "about.certifications.sustainable"
  | "about.story.founded"
  | "about.story.grown"
  | "about.story.believe"
  | "about.values.mission"
  | "about.values.vision"
  | "about.hero.title"
  | "about.hero.subtitle"
  | "about.hero.trusted"
  | "about.hero.backToHome"
  | "common.backToHome"
  | "common.trustedSince"
  | "common.chatWithUs"
  | "common.emailUs"
  | "common.yearsExperience"
  | "common.satisfiedTravelers"
  | "common.successfulTours"
  | "common.professionalGuides"
  // Team Members
  | "about.team.member.founder.name"
  | "about.team.member.founder.role"
  | "about.team.member.operations.name"
  | "about.team.member.operations.role"
  | "about.team.member.guide.name"
  | "about.team.member.guide.role"
  | "about.team.member.customer.name"
  | "about.team.member.customer.role"
  | "about.team.member.specialties.cultural"
  | "about.team.member.specialties.heritage"
  | "about.team.member.specialties.wildlife"
  | "about.team.member.specialties.adventure"
  | "about.team.member.specialties.historical"
  | "about.team.member.specialties.local"
  | "about.team.member.specialties.service"
  | "about.team.member.specialties.planning"
  // Destinations Page
  | "destinations.filters.categories"
  | "destinations.filters.duration"
  | "destinations.filters.all"
  | "destinations.filters.heritage"
  | "destinations.filters.nature"
  | "destinations.filters.culture"
  | "destinations.filters.adventure"
  | "destinations.filters.beaches"
  | "destinations.filters.anyDuration"
  | "destinations.filters.oneDay"
  | "destinations.filters.twoThreeDays"
  | "destinations.filters.fourPlusDays"
  | "destinations.destination.sigiriya.name"
  | "destinations.destination.sigiriya.location"
  | "destinations.destination.sigiriya.description"
  | "destinations.destination.sigiriya.highlights.ancient"
  | "destinations.destination.sigiriya.highlights.frescoes"
  | "destinations.destination.sigiriya.highlights.gardens"
  | "destinations.destination.sigiriya.highlights.museum"
  | "destinations.destination.sigiriya.bestTime"
  | "destinations.destination.sigiriya.difficulty"
  | "destinations.destination.sigiriya.groupSize"
  | "destinations.destination.kandy.name"
  | "destinations.destination.kandy.location"
  | "destinations.destination.kandy.description"
  | "destinations.destination.kandy.highlights.temple"
  | "destinations.destination.kandy.highlights.gardens"
  | "destinations.destination.kandy.highlights.dance"
  | "destinations.destination.kandy.highlights.lake"
  | "destinations.destination.kandy.bestTime"
  | "destinations.destination.kandy.difficulty"
  | "destinations.destination.kandy.groupSize"
  | "destinations.destination.ella.name"
  | "destinations.destination.ella.location"
  | "destinations.destination.ella.description"
  | "destinations.destination.ella.highlights.bridge"
  | "destinations.destination.ella.highlights.peak"
  | "destinations.destination.ella.highlights.tea"
  | "destinations.destination.ella.highlights.train"
  | "destinations.destination.ella.bestTime"
  | "destinations.destination.ella.difficulty"
  | "destinations.destination.ella.groupSize"
  | "destinations.destination.galle.name"
  | "destinations.destination.galle.location"
  | "destinations.destination.galle.description"
  | "destinations.destination.galle.highlights.architecture"
  | "destinations.destination.galle.highlights.lighthouse"
  | "destinations.destination.galle.highlights.ramparts"
  | "destinations.destination.galle.highlights.museum"
  | "destinations.destination.galle.bestTime"
  | "destinations.destination.galle.difficulty"
  | "destinations.destination.galle.groupSize"
  | "destinations.destination.yala.name"
  | "destinations.destination.yala.location"
  | "destinations.destination.yala.description"
  | "destinations.destination.yala.highlights.leopard"
  | "destinations.destination.yala.highlights.elephants"
  | "destinations.destination.yala.highlights.birds"
  | "destinations.destination.yala.highlights.camping"
  | "destinations.destination.yala.bestTime"
  | "destinations.destination.yala.difficulty"
  | "destinations.destination.yala.groupSize"
  | "destinations.destination.mirissa.name"
  | "destinations.destination.mirissa.location"
  | "destinations.destination.mirissa.description"
  | "destinations.destination.mirissa.highlights.whales"
  | "destinations.destination.mirissa.highlights.beaches"
  | "destinations.destination.mirissa.highlights.surfing"
  | "destinations.destination.mirissa.highlights.coconut"
  | "destinations.destination.mirissa.bestTime"
  | "destinations.destination.mirissa.difficulty"
  | "destinations.destination.mirissa.groupSize"
  | "destinations.destination.anuradhapura.name"
  | "destinations.destination.anuradhapura.location"
  | "destinations.destination.anuradhapura.description"
  | "destinations.destination.anuradhapura.highlights.bodhi"
  | "destinations.destination.anuradhapura.highlights.dagobas"
  | "destinations.destination.anuradhapura.highlights.ruins"
  | "destinations.destination.anuradhapura.highlights.archaeological"
  | "destinations.destination.anuradhapura.bestTime"
  | "destinations.destination.anuradhapura.difficulty"
  | "destinations.destination.anuradhapura.groupSize"
  | "destinations.destination.nuwara.name"
  | "destinations.destination.nuwara.location"
  | "destinations.destination.nuwara.description"
  | "destinations.destination.nuwara.highlights.tea"
  | "destinations.destination.nuwara.highlights.architecture"
  | "destinations.destination.nuwara.highlights.horton"
  | "destinations.destination.nuwara.highlights.lake"
  | "destinations.destination.nuwara.bestTime"
  | "destinations.destination.nuwara.difficulty"
  | "destinations.destination.nuwara.groupSize"
  | "destinations.common.bestTime"
  | "destinations.common.difficulty"
  | "destinations.common.groupSize"
  | "destinations.common.people"
  | "destinations.common.moderate"
  | "destinations.common.easy"
  | "destinations.common.yearRound"
  // Gallery Page
  | "gallery.items.sigiriya.title"
  | "gallery.items.sigiriya.description"
  | "gallery.items.beach.title"
  | "gallery.items.beach.description"
  | "gallery.items.tea.title"
  | "gallery.items.tea.description"
  | "gallery.items.temple.title"
  | "gallery.items.temple.description"
  | "gallery.items.leopard.title"
  | "gallery.items.leopard.description"
  | "gallery.items.elephant.title"
  | "gallery.items.elephant.description"
  | "gallery.items.waterfall.title"
  | "gallery.items.waterfall.description"
  | "gallery.items.train.title"
  | "gallery.items.train.description"
  | "gallery.items.fort.title"
  | "gallery.items.fort.description"
  | "gallery.items.whale.title"
  | "gallery.items.whale.description"
  | "gallery.items.teaFactory.title"
  | "gallery.items.teaFactory.description"
  | "gallery.items.buddha.title"
  | "gallery.items.buddha.description"
  | "gallery.items.surfing.title"
  | "gallery.items.surfing.description"
  | "gallery.items.forest.title"
  | "gallery.items.forest.description"
  | "gallery.items.lake.title"
  | "gallery.items.lake.description"
  | "gallery.items.market.title"
  | "gallery.items.market.description"
  | "gallery.items.sunset.title"
  | "gallery.items.sunset.description"
  | "gallery.items.traditional.title"
  | "gallery.items.traditional.description"
  | "gallery.items.boat.title"
  | "gallery.items.boat.description"
  | "gallery.items.mountain.title"
  | "gallery.items.mountain.description"
  | "gallery.items.ancient.title"
  | "gallery.items.ancient.description"
  | "gallery.items.beachRelax.title"
  | "gallery.items.beachRelax.description"
  | "gallery.items.teaPlantation.title"
  | "gallery.items.teaPlantation.description"
  | "gallery.items.templeSacred.title"
  | "gallery.items.templeSacred.description"
  | "gallery.items.wildlife.title"
  | "gallery.items.wildlife.description"
  | "gallery.items.cultural.title"
  | "gallery.items.cultural.description"
  | "gallery.items.adventure.title"
  | "gallery.items.adventure.description"
  | "gallery.items.heritage.title"
  | "gallery.items.heritage.description"
  | "gallery.items.nature.title"
  | "gallery.items.nature.description"
  | "gallery.items.beaches.title"
  | "gallery.items.beaches.description"
  | "gallery.common.views"
  | "gallery.common.likes"
  | "gallery.common.share"
  | "gallery.common.download"
  // Packages Page
  | "packages.filters.allTours"
  | "packages.filters.oneDay"
  | "packages.filters.twoDays"
  | "packages.filters.sevenDays"
  | "packages.filters.allCategories"
  | "packages.filters.culturalHeritage"
  | "packages.filters.adventureNature"
  | "packages.filters.wildlifeSafari"
  | "packages.filters.cityTours"
  | "packages.filters.beachCoast"
  | "packages.filters.sortBy"
  | "packages.filters.popularity"
  | "packages.filters.price"
  | "packages.filters.rating"
  | "packages.filters.duration"
  | "packages.common.loadMore"
  | "packages.common.showing"
  | "packages.common.of"
  | "packages.common.tours"
  | "packages.common.noResults"
  | "packages.common.tryDifferent"
  | "packages.common.filters"
  | "packages.hero.title"
  | "packages.hero.subtitle"
  | "packages.hero.badge"
  | "packages.tourDuration"
  | "packages.tourCategory"
  | "packages.tourHighlights"
  | "packages.whatsIncluded"
  | "packages.optionalExtras"
  | "packages.bookNowWhatsApp"
  | "packages.needCustomTour"
  | "packages.planCustomTour"
  | "packages.premiumSriLankanAdventures"
  | "packages.completeTourPackages"
  | "packages.discoverBestSriLanka"
  | "packages.expertlyCraftedTours"
  | "packages.moreHighlights"
  | "packages.moreIncluded"
  | "packages.duration.oneDay"
  | "packages.duration.twoDays"
  | "packages.duration.sevenDays"
  | "packages.tours.ella.name"
  | "packages.tours.ella.subtitle"
  | "packages.tours.galle.name"
  | "packages.tours.galle.subtitle"
  | "packages.tours.colombo.name"
  | "packages.tours.colombo.subtitle"
  | "packages.tours.kandy.name"
  | "packages.tours.kandy.subtitle"
  | "packages.tours.sigiriya.name"
  | "packages.tours.sigiriya.subtitle"
  | "packages.tours.yala.name"
  | "packages.tours.yala.subtitle"
  | "packages.tours.ellaYala.name"
  | "packages.tours.ellaYala.subtitle"
  | "packages.tours.mirissa.name"
  | "packages.tours.mirissa.subtitle"
  | "packages.tours.bentota.name"
  | "packages.tours.bentota.subtitle"
  | "packages.tours.unawatuna.name"
  | "packages.tours.unawatuna.subtitle"
  | "packages.tours.trincomalee.name"
  | "packages.tours.trincomalee.subtitle"
  | "packages.tours.arugam.name"
  | "packages.tours.arugam.subtitle"
  | "packages.tours.negombo.name"
  | "packages.tours.negombo.subtitle"
  | "packages.tours.gold.name"
  | "packages.tours.gold.subtitle"
  | "packages.tours.silva.name"
  | "packages.tours.silva.subtitle"
  | "packages.tours.grand.name"
  | "packages.tours.grand.subtitle"
  // Adventure Page
  | "adventure.filters.allAdventures"
  | "adventure.filters.hikingTrekking"
  | "adventure.filters.waterSports"
  | "adventure.filters.wildlifeSafari"
  | "adventure.filters.extremeSports"
  // Contact Page Additional
  | "contact.info.phone.title"
  | "contact.info.phone.description"
  | "contact.info.email.title"
  | "contact.info.email.description"
  | "contact.info.office.title"
  | "contact.info.office.description"
  | "contact.info.whatsapp.title"
  | "contact.info.whatsapp.description"
  | "contact.info.phoneNumbers"
  | "contact.info.emailAddress"
  | "contact.info.officeLocation"
  | "contact.info.whatsappChat"
  | "contact.info.available247"
  | "contact.info.respond2hours"
  | "contact.info.visitUs"
  | "contact.info.quickResponse"
  | "contact.info.businessHours.title"
  | "contact.info.businessHours.description"
  // Contact Form Additional
  | "contact.form.fullName"
  | "contact.form.emailAddress"
  | "contact.form.phoneNumber"
  | "contact.form.subject"
  | "contact.form.message"
  | "contact.form.tourType"
  | "contact.form.placeholders.fullName"
  | "contact.form.placeholders.email"
  | "contact.form.placeholders.phone"
  | "contact.form.placeholders.subject"
  | "contact.form.placeholders.message"
  | "contact.form.placeholders.tourType"
  | "contact.form.tourTypes.cultural"
  | "contact.form.tourTypes.adventure"
  | "contact.form.tourTypes.wildlife"
  | "contact.form.tourTypes.beach"
  | "contact.form.tourTypes.city"
  | "contact.form.tourTypes.custom"
  | "contact.form.tourTypes.multiDay"
  | "contact.form.tourTypes.dayExcursions"
  | "contact.form.success.title"
  | "contact.form.success.message"
  | "contact.form.submit"
  | "contact.form.submitting"
  | "contact.form.required"
  | "contact.form.optional"
  // Contact Page Additional
  | "contact.form.title"
  | "contact.form.subtitle"
  | "contact.whyChooseUs.title"
  | "contact.whyChooseUs.localExpertise.title"
  | "contact.whyChooseUs.localExpertise.description"
  | "contact.whyChooseUs.support24.title"
  | "contact.whyChooseUs.support24.description"
  | "contact.whyChooseUs.customizedTours.title"
  | "contact.whyChooseUs.customizedTours.description"
  | "contact.whyChooseUs.bestValue.title"
  | "contact.whyChooseUs.bestValue.description"
  | "contact.quickContact.title"
  | "contact.quickContact.description"
  // Contact Hero Section
  | "contact.hero.badge"
  | "contact.hero.title"
  | "contact.hero.subtitle";

type TranslationMap = {
  [key in TranslationKeys]: string;
};

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
    "nav.adventure": "Adventure",

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
    "destinations.subtitle":
      "Explore the most breathtaking places in Sri Lanka",
    "destinations.viewAll": "View All Destinations",
    "destinations.from": "From",
    "destinations.days": "days",
    "destinations.highlights": "Highlights",

    // Packages
    "packages.title": "Tour Packages",
    "packages.subtitle":
      "Carefully crafted experiences for every type of traveler",
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
    "services.luxury.desc":
      "Private guided tours with premium accommodations and exclusive experiences.",
    "services.cultural.title": "Cultural Heritage",
    "services.cultural.desc":
      "Explore ancient temples, UNESCO sites, and traditional Sri Lankan culture.",
    "services.adventure.title": "Adventure Tours",
    "services.adventure.desc":
      "Hiking, safari, diving, and thrilling outdoor activities.",
    "services.wellness.title": "Wellness Retreats",
    "services.wellness.desc":
      "Ayurvedic treatments, yoga, and rejuvenating spa experiences.",
    "services.transport.title": "Transportation",
    "services.transport.desc":
      "Comfortable and reliable transport with professional drivers.",
    "services.accommodation.title": "Accommodation",
    "services.accommodation.desc":
      "Handpicked hotels and resorts for the perfect stay.",

    // About
    "about.title": "Why Choose Ceylon Escape?",
    "about.subtitle":
      "Your trusted partner for extraordinary Sri Lankan adventures",
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
    "tourPackages.packages.sigiriya.highlights.fortress":
      "Ancient Rock Fortress",
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
    // Adventures Page
    "srilankaadventures.hero.title": "Thrilling Sri Lanka Adventures",
    "srilankaadventures.hero.subtitle":
      "From whale watching to rainforest treks — discover unforgettable outdoor experiences across the island.",
    "srilankaadventures.section.title": "Top Adventures",
    "srilankaadventures.section.subtitle":
      "Handpicked activities for every kind of explorer",
    "srilankaadventures.whale.tag": "Whale Watching",
    "srilankaadventures.whale.title": "Blue Whale Watching in Mirissa",
    "srilankaadventures.whale.description":
      "Sail into the deep blue and witness the largest animals on Earth in their natural habitat.",
    "srilankaadventures.whale.duration": "Half-day to full-day",
    "srilankaadventures.hiking.tag": "Mountain Hiking",
    "srilankaadventures.hiking.title": "Hiking the Hill Country",
    "srilankaadventures.hiking.description":
      "Trails through tea estates, waterfalls, and panoramic viewpoints in Ella and beyond.",
    "srilankaadventures.hiking.duration": "3–6 hours",
    "srilankaadventures.safari.tag": "Wildlife Safari",
    "srilankaadventures.safari.title": "Yala National Park Safari",
    "srilankaadventures.safari.description":
      "Search for elephants, bears, and the elusive Sri Lankan leopard on a guided jeep safari.",
    "srilankaadventures.safari.duration": "Half-day or full-day",
    "srilankaadventures.ancient.tag": "Ancient Wonders",
    "srilankaadventures.ancient.title": "Sigiriya & Ancient Cities",
    "srilankaadventures.ancient.description":
      "Climb the Lion Rock and explore millennia-old ruins and frescoes.",
    "srilankaadventures.ancient.duration": "Full-day",
    "srilankaadventures.rafting.tag": "White Water Rafting",
    "srilankaadventures.rafting.title": "Kelani River Rafting",
    "srilankaadventures.rafting.description":
      "Action-packed rapids surrounded by lush rainforest scenery.",
    "srilankaadventures.rafting.duration": "2–3 hours on water",
    "srilankaadventures.train.tag": "Scenic Train",
    "srilankaadventures.train.title": "Nanu Oya → Ella Train Ride",
    "srilankaadventures.train.description":
      "World-famous journey through emerald tea fields and misty mountains.",
    "srilankaadventures.train.duration": "2–3 hours",
    "srilankaadventures.beach.tag": "Beach Escape",
    "srilankaadventures.beach.title": "South Coast Beaches",
    "srilankaadventures.beach.description":
      "Relax on golden sands, surf warm waves, and soak in tropical sunsets.",
    "srilankaadventures.beach.duration": "Flexible",
    "srilankaadventures.temple.tag": "Sacred Temples",
    "srilankaadventures.temple.title": "Kandy & Dambulla Temples",
    "srilankaadventures.temple.description":
      "Discover sacred Buddhist heritage and stunning cave temples.",
    "srilankaadventures.temple.duration": "Half-day to full-day",
    "srilankaadventures.spice.tag": "Tea & Spices",
    "srilankaadventures.spice.title": "Tea Factories & Spice Gardens",
    "srilankaadventures.spice.description":
      "Taste the island’s flavors while learning traditional cultivation.",
    "srilankaadventures.spice.duration": "2–4 hours",
    "srilankaadventures.rainforest.tag": "Rainforest Trek",
    "srilankaadventures.rainforest.title": "Sinharaja Rainforest",
    "srilankaadventures.rainforest.description":
      "Guided nature walk through UNESCO-listed biodiversity hotspot.",
    "srilankaadventures.rainforest.duration": "Half-day",

    // About Page Additional
    "about.team.title": "Meet Our Expert Team",
    "about.team.subtitle":
      "Passionate professionals dedicated to creating your perfect Sri Lankan adventure",
    "about.achievements.title": "Our Achievements",
    "about.achievements.subtitle":
      "Recognition and milestones that define our commitment to excellence",
    "about.certifications.title": "Certifications & Memberships",
    "about.certifications.subtitle":
      "Official recognition from leading tourism and quality organizations",
    "about.story.title": "Our Story",
    "about.story.subtitle":
      "From humble beginnings to Sri Lanka's most trusted travel partner",
    "about.values.title": "Our Values",
    "about.values.subtitle": "The principles that guide everything we do",
    "about.team.member.founder": "20+ years in Sri Lankan tourism industry",
    "about.team.member.operations": "Expert in adventure and wildlife tours",
    "about.team.member.guide": "Licensed guide with deep cultural knowledge",
    "about.team.member.customer": "Ensuring exceptional customer experiences",
    "about.achievements.award": "Award-winning travel company since 2010",
    "about.achievements.certified": "Certified by Sri Lanka Tourism Board",
    "about.achievements.satisfaction": "98% customer satisfaction rate",
    "about.achievements.safety": "Zero safety incidents in 12+ years",
    "about.achievements.featured": "Featured in top travel magazines",
    "about.achievements.eco": "Eco-friendly tourism practices",
    "about.achievements.support": "24/7 customer support",
    "about.achievements.multilang": "Multi-language support",
    "about.certifications.sltd":
      "Sri Lanka Tourism Development Authority Licensed",
    "about.certifications.iata":
      "International Air Transport Association (IATA) Member",
    "about.certifications.pata":
      "Pacific Asia Travel Association (PATA) Member",
    "about.certifications.iso": "ISO 9001:2015 Quality Management Certified",
    "about.certifications.sustainable": "Sustainable Tourism Certified",
    "about.story.founded":
      "Founded in 2010 by passionate locals who wanted to share the true beauty of Sri Lanka with the world, Ceylon Escape began as a small family business with a big dream.",
    "about.story.grown":
      "Over the years, we've grown into one of Sri Lanka's most trusted travel companies, but we've never lost our personal touch. Every tour is crafted with the same care and attention to detail that made us who we are today.",
    "about.story.believe":
      "We believe that travel should be transformative, connecting you not just with places, but with people, cultures, and experiences that stay with you long after you return home.",
    "about.values.mission": "Our Mission",
    "about.values.vision": "Our Vision",
    "about.hero.title": "About Ceylon Escape",
    "about.hero.subtitle":
      "Your trusted partner for authentic Sri Lankan experiences. We've been creating unforgettable journeys for over a decade.",
    "about.hero.trusted": "Trusted Since 2010",
    "about.hero.backToHome": "Back to Home",
    "common.backToHome": "Back to Home",
    "common.trustedSince": "Trusted Since 2010",
    "common.chatWithUs": "Chat with Us",
    "common.emailUs": "Email Us",
    "common.yearsExperience": "Years of expertise in Sri Lankan tourism",
    "common.satisfiedTravelers": "Satisfied travelers from around the world",
    "common.successfulTours": "Successfully completed tours",
    "common.professionalGuides": "Professional local guides",

    // Team Members
    "about.team.member.founder.name": "Rajesh Fernando",
    "about.team.member.founder.role": "Founder & CEO",
    "about.team.member.operations.name": "Priya Jayawardena",
    "about.team.member.operations.role": "Operations Manager",
    "about.team.member.guide.name": "Kumar Silva",
    "about.team.member.guide.role": "Head Guide",
    "about.team.member.customer.name": "Anita Perera",
    "about.team.member.customer.role": "Customer Relations",
    "about.team.member.specialties.cultural": "Cultural Tours",
    "about.team.member.specialties.heritage": "Heritage Sites",
    "about.team.member.specialties.wildlife": "Wildlife Safari",
    "about.team.member.specialties.adventure": "Adventure Tours",
    "about.team.member.specialties.historical": "Historical Sites",
    "about.team.member.specialties.local": "Local Culture",
    "about.team.member.specialties.service": "Customer Service",
    "about.team.member.specialties.planning": "Travel Planning",

    // Destinations Page
    "destinations.filters.categories": "Categories",
    "destinations.filters.duration": "Duration",
    "destinations.filters.all": "All Destinations",
    "destinations.filters.heritage": "Heritage Sites",
    "destinations.filters.nature": "Nature & Wildlife",
    "destinations.filters.culture": "Cultural",
    "destinations.filters.adventure": "Adventure",
    "destinations.filters.beaches": "Beaches",
    "destinations.filters.anyDuration": "Any Duration",
    "destinations.filters.oneDay": "1 Day",
    "destinations.filters.twoThreeDays": "2-3 Days",
    "destinations.filters.fourPlusDays": "4+ Days",
    "destinations.common.bestTime": "Best Time",
    "destinations.common.difficulty": "Difficulty",
    "destinations.common.groupSize": "Group Size",
    "destinations.common.people": "people",
    "destinations.common.moderate": "Moderate",
    "destinations.common.easy": "Easy",
    "destinations.common.yearRound": "Year-round",

    // Gallery Page
    "gallery.items.sigiriya.title": "Sigiriya Rock Fortress",
    "gallery.items.sigiriya.description":
      "Ancient royal palace and fortress with stunning frescoes and water gardens",
    "gallery.items.beach.title": "Pristine Beach Paradise",
    "gallery.items.beach.description":
      "Golden beaches with crystal clear waters and spectacular sunsets",
    "gallery.items.tea.title": "Emerald Tea Plantations",
    "gallery.items.tea.description":
      "Rolling hills covered in lush green tea bushes stretching to the horizon",
    "gallery.items.temple.title": "Temple of the Sacred Tooth",
    "gallery.items.temple.description":
      "Sacred Buddhist temple housing the relic of the tooth of Buddha",
    "gallery.items.leopard.title": "Leopard Safari Adventure",
    "gallery.items.leopard.description":
      "Spot the elusive Sri Lankan leopard in its natural habitat",
    "gallery.items.elephant.title": "Elephant Gathering",
    "gallery.items.elephant.description":
      "Witness the majestic Asian elephants in their natural environment",
    "gallery.items.waterfall.title": "Bambarakanda Falls",
    "gallery.items.waterfall.description":
      "Sri Lanka's highest waterfall cascading through lush green mountains",
    "gallery.items.train.title": "Scenic Train Journey",
    "gallery.items.train.description":
      "Famous train ride through tea plantations and misty mountains",
    "gallery.items.fort.title": "Galle Dutch Fort",
    "gallery.items.fort.description":
      "UNESCO World Heritage colonial fort with historic architecture",
    "gallery.items.whale.title": "Blue Whale Watching",
    "gallery.items.whale.description":
      "Witness the largest animals on Earth in their natural habitat",
    "gallery.items.teaFactory.title": "Tea Factory Tour",
    "gallery.items.teaFactory.description":
      "Learn the art of tea making in traditional Sri Lankan factories",
    "gallery.items.buddha.title": "Giant Buddha Statue",
    "gallery.items.buddha.description":
      "Serene Buddha statue overlooking the beautiful landscape",
    "gallery.items.surfing.title": "Surfing in Arugam Bay",
    "gallery.items.surfing.description":
      "Ride the perfect waves at Sri Lanka's premier surfing destination",
    "gallery.items.forest.title": "Sinharaja Rainforest",
    "gallery.items.forest.description":
      "UNESCO World Heritage site with incredible biodiversity",
    "gallery.items.lake.title": "Gregory Lake",
    "gallery.items.lake.description":
      "Picturesque lake surrounded by colonial architecture and gardens",
    "gallery.items.market.title": "Local Market Scene",
    "gallery.items.market.description":
      "Vibrant local markets showcasing Sri Lankan culture and spices",
    "gallery.items.sunset.title": "Tropical Sunset",
    "gallery.items.sunset.description":
      "Breathtaking sunset over the Indian Ocean",
    "gallery.items.traditional.title": "Traditional Dance",
    "gallery.items.traditional.description":
      "Colorful traditional Sri Lankan cultural performances",
    "gallery.items.boat.title": "Fishing Boat",
    "gallery.items.boat.description":
      "Traditional fishing boats on the pristine coastline",
    "gallery.items.mountain.title": "Mountain Vista",
    "gallery.items.mountain.description":
      "Panoramic views of Sri Lanka's beautiful mountain ranges",
    "gallery.items.ancient.title": "Ancient Ruins",
    "gallery.items.ancient.description":
      "Historic ruins telling the story of Sri Lanka's rich past",
    "gallery.items.beachRelax.title": "Beach Relaxation",
    "gallery.items.beachRelax.description":
      "Perfect moments of tranquility on golden sandy beaches",
    "gallery.items.teaPlantation.title": "Tea Plantation",
    "gallery.items.teaPlantation.description":
      "Endless rows of tea bushes in the cool hill country",
    "gallery.items.templeSacred.title": "Sacred Temple",
    "gallery.items.templeSacred.description":
      "Peaceful temple grounds with ancient spiritual significance",
    "gallery.items.wildlife.title": "Wildlife Encounter",
    "gallery.items.wildlife.description":
      "Close encounters with Sri Lanka's diverse wildlife",
    "gallery.items.cultural.title": "Cultural Heritage",
    "gallery.items.cultural.description":
      "Rich cultural traditions and heritage sites",
    "gallery.items.adventure.title": "Adventure Sports",
    "gallery.items.adventure.description":
      "Thrilling outdoor activities and adventure experiences",
    "gallery.items.heritage.title": "World Heritage",
    "gallery.items.heritage.description":
      "UNESCO World Heritage sites of historical importance",
    "gallery.items.nature.title": "Natural Beauty",
    "gallery.items.nature.description":
      "Stunning natural landscapes and pristine environments",
    "gallery.items.beaches.title": "Coastal Paradise",
    "gallery.items.beaches.description":
      "Beautiful beaches and coastal attractions",
    "gallery.common.views": "views",
    "gallery.common.likes": "likes",
    "gallery.common.share": "Share",
    "gallery.common.download": "Download",

    // Packages Page
    "packages.filters.allTours": "All Tours",
    "packages.filters.oneDay": "1 Day",
    "packages.filters.twoDays": "2 Days",
    "packages.filters.sevenDays": "7 Days",
    "packages.filters.allCategories": "All Categories",
    "packages.filters.culturalHeritage": "Cultural Heritage",
    "packages.filters.adventureNature": "Adventure & Nature",
    "packages.filters.wildlifeSafari": "Wildlife Safari",
    "packages.filters.cityTours": "City Tours",
    "packages.filters.beachCoast": "Beach & Coast",
    "packages.filters.sortBy": "Sort by",
    "packages.filters.popularity": "Popularity",
    "packages.filters.price": "Price",
    "packages.filters.rating": "Rating",
    "packages.filters.duration": "Duration",
    "packages.common.loadMore": "Load More Tours",
    "packages.common.showing": "Showing",
    "packages.common.of": "of",
    "packages.common.tours": "tours",
    "packages.common.noResults": "No tours found",
    "packages.common.tryDifferent": "Try different filters",
    "packages.common.filters": "filters",
    "packages.hero.title": "Complete Tour Packages",
    "packages.hero.subtitle":
      "From single-day excursions to comprehensive week-long adventures. Discover the best of Sri Lanka with our expertly crafted tour packages.",
    "packages.hero.badge": "Premium Sri Lankan Adventures",
    "packages.tourDuration": "Tour Duration",
    "packages.tourCategory": "Tour Category",
    "packages.tourHighlights": "Tour Highlights",
    "packages.whatsIncluded": "What's Included",
    "packages.optionalExtras": "Optional Extras",
    "packages.bookNowWhatsApp": "Book Now via WhatsApp",
    "packages.needCustomTour": "Need a Custom Tour Package?",
    "packages.planCustomTour": "Plan My Custom Tour",
    "packages.premiumSriLankanAdventures": "Premium Sri Lankan Adventures",
    "packages.completeTourPackages": "Complete Tour Packages",
    "packages.discoverBestSriLanka":
      "Discover the best of Sri Lanka with our expertly crafted tour packages.",
    "packages.expertlyCraftedTours": "Expertly crafted tour packages.",
    "packages.moreHighlights": "more highlights",
    "packages.moreIncluded": "more included",
    "packages.duration.oneDay": "1 Day",
    "packages.duration.twoDays": "2 Days",
    "packages.duration.sevenDays": "7 Days",
    "packages.tours.ella.name": "Ella Excursion",
    "packages.tours.ella.subtitle": "Foggy City Adventure",
    "packages.tours.galle.name": "Galle Tour",
    "packages.tours.galle.subtitle": "Dutch Fort Heritage",
    "packages.tours.colombo.name": "Colombo City Tour",
    "packages.tours.colombo.subtitle": "Modern Capital Experience",
    "packages.tours.kandy.name": "Kandy Excursions",
    "packages.tours.kandy.subtitle": "Ancient City of Kandy",
    "packages.tours.sigiriya.name": "Sigiriya Excursion",
    "packages.tours.sigiriya.subtitle": "UNESCO World Wonder",
    "packages.tours.yala.name": "Udawalawe or Yala Safari",
    "packages.tours.yala.subtitle": "Wildlife National Park",
    "packages.tours.ellaYala.name": "Ella & Yala Combo",
    "packages.tours.ellaYala.subtitle": "Mountains & Wildlife",
    "packages.tours.mirissa.name": "Mirissa Whale Watching",
    "packages.tours.mirissa.subtitle": "Giant Blue Whales & Dolphins",
    "packages.tours.bentota.name": "Bentota Beach Adventure",
    "packages.tours.bentota.subtitle": "Water Sports & Relaxation",
    "packages.tours.unawatuna.name": "Unawatuna Beach Paradise",
    "packages.tours.unawatuna.subtitle": "Golden Sands & Coral Reefs",
    "packages.tours.trincomalee.name": "Trincomalee Beach & Culture",
    "packages.tours.trincomalee.subtitle": "East Coast Heritage",
    "packages.tours.arugam.name": "Arugam Bay Surfing",
    "packages.tours.arugam.subtitle": "World-Class Surf Destination",
    "packages.tours.negombo.name": "Negombo Beach & Lagoon",
    "packages.tours.negombo.subtitle": "Airport Gateway Paradise",
    "packages.tours.gold.name": "Gold Tour: Ella & Sigiriya",
    "packages.tours.gold.subtitle": "Mountains to Ancient Wonders",
    "packages.tours.silva.name": "Silva Tour: Kandy & Ella",
    "packages.tours.silva.subtitle": "Cultural Heritage & Nature",
    "packages.tours.grand.name": "Grand Sri Lanka Discovery",
    "packages.tours.grand.subtitle": "Complete Island Experience",

    // Adventure Page
    "adventure.filters.allAdventures": "All Adventures",
    "adventure.filters.hikingTrekking": "Hiking & Trekking",
    "adventure.filters.waterSports": "Water Sports",
    "adventure.filters.wildlifeSafari": "Wildlife Safari",
    "adventure.filters.extremeSports": "Extreme Sports",

    // Contact Page Additional
    "contact.info.phone.title": "Phone Numbers",
    "contact.info.phone.description": "Available 24/7 for your convenience",
    "contact.info.email.title": "Email Address",
    "contact.info.email.description": "We respond within 2 hours",
    "contact.info.office.title": "Office Location",
    "contact.info.office.description": "Visit us for personalized planning",
    "contact.info.whatsapp.title": "WhatsApp Chat",
    "contact.info.whatsapp.description": "Quick response and instant planning",
    "contact.info.phoneNumbers": "Phone Numbers",
    "contact.info.emailAddress": "Email Address",
    "contact.info.officeLocation": "Office Location",
    "contact.info.whatsappChat": "WhatsApp Chat",
    "contact.info.available247": "Available 24/7 for your convenience",
    "contact.info.respond2hours": "We respond within 2 hours",
    "contact.info.visitUs": "Visit us for personalized planning",
    "contact.info.quickResponse": "Quick response and instant planning",
    "contact.info.businessHours.title": "Business Hours",
    "contact.info.businessHours.description":
      "Extended hours for your convenience",

    // Contact Form Additional
    "contact.form.fullName": "Full Name",
    "contact.form.emailAddress": "Email Address",
    "contact.form.phoneNumber": "Phone Number",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.tourType": "Tour Type",
    "contact.form.placeholders.fullName": "Enter your full name",
    "contact.form.placeholders.email": "Enter your email address",
    "contact.form.placeholders.phone": "Enter your phone number",
    "contact.form.placeholders.subject": "What can we help you with?",
    "contact.form.placeholders.message":
      "Tell us about your travel plans, preferences, dates, group size, or any specific requirements...",
    "contact.form.placeholders.tourType": "Select tour type",
    "contact.form.tourTypes.cultural": "Cultural Heritage Tours",
    "contact.form.tourTypes.adventure": "Adventure & Nature Tours",
    "contact.form.tourTypes.wildlife": "Wildlife Safari Tours",
    "contact.form.tourTypes.beach": "Beach & Coastal Tours",
    "contact.form.tourTypes.city": "City Tours",
    "contact.form.tourTypes.custom": "Custom Tour Package",
    "contact.form.tourTypes.multiDay": "Multi-Day Tours",
    "contact.form.tourTypes.dayExcursions": "Day Excursions",
    "contact.form.success.title": "Message Sent Successfully!",
    "contact.form.success.message":
      "Thank you for contacting us. We'll respond to your inquiry within 2 hours.",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.required": "required",
    "contact.form.optional": "optional",

    // Contact Page Additional
    "contact.form.title": "Send Us a Message",
    "contact.form.subtitle":
      "Fill out the form below and we'll get back to you within 2 hours",
    "contact.whyChooseUs.title": "Why Choose Us?",
    "contact.whyChooseUs.localExpertise.title": "Local Expertise",
    "contact.whyChooseUs.localExpertise.description":
      "Born and raised in Sri Lanka with deep local knowledge",
    "contact.whyChooseUs.support24.title": "24/7 Support",
    "contact.whyChooseUs.support24.description":
      "Round-the-clock assistance during your journey",
    "contact.whyChooseUs.customizedTours.title": "Customized Tours",
    "contact.whyChooseUs.customizedTours.description":
      "Tailored experiences based on your preferences",
    "contact.whyChooseUs.bestValue.title": "Best Value",
    "contact.whyChooseUs.bestValue.description":
      "Competitive pricing with no hidden costs",
    "contact.quickContact.title": "Need Immediate Assistance?",
    "contact.quickContact.description":
      "For urgent inquiries or last-minute bookings, contact us directly via WhatsApp or phone.",

    // Contact Hero Section
    "contact.hero.badge": "Get in Touch with Us",
    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle":
      "Ready to embark on your Sri Lankan adventure? We're here to help you plan the perfect journey. Reach out to us and let's create unforgettable memories together.",
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
    "nav.adventure": "Приключения",

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
    "packages.subtitle":
      "Тщательно продуманные впечатления для каждого типа путешественника",
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
    "services.subtitle":
      "Индивидуальные впечатления для каждого путешественника",
    "services.luxury.title": "Роскошные туры",
    "services.luxury.desc":
      "Частные экскурсии с премиальным размещением и эксклюзивными впечатлениями.",
    "services.cultural.title": "Культурное наследие",
    "services.cultural.desc":
      "Исследуйте древние храмы, объекты ЮНЕСКО и традиционную культуру Шри-Ланки.",
    "services.adventure.title": "Приключенческие туры",
    "services.adventure.desc":
      "Походы, сафари, дайвинг и захватывающие активности на природе.",
    "services.wellness.title": "Оздоровительные ретриты",
    "services.wellness.desc":
      "Аюрведические процедуры, йога и омолаживающий спа-опыт.",
    "services.transport.title": "Транспорт",
    "services.transport.desc":
      "Комфортный и надежный транспорт с профессиональными водителями.",
    "services.accommodation.title": "Размещение",
    "services.accommodation.desc":
      "Тщательно отобранные отели и курорты для идеального отдыха.",

    // About
    "about.title": "Почему стоит выбрать Ceylon Escape?",
    "about.subtitle":
      "Ваш надежный партнер для необычайных приключений в Шри-Ланке",
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
    "testimonials.subtitle":
      "Реальные впечатления от реальных путешественников",
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
    "tourPackages.packages.sigiriya.highlights.fortress":
      "Древняя скальная крепость",
    "tourPackages.packages.sigiriya.highlights.frescoes": "Знаменитые фрески",
    "tourPackages.packages.sigiriya.highlights.gardens": "Водные сады",
    "tourPackages.packages.sigiriya.highlights.museum": "Археологический музей",

    "tourPackages.packages.kandy.name": "Тур по культурному наследию Канди",
    "tourPackages.packages.kandy.highlights.temple": "Храм Зуба Будды",
    "tourPackages.packages.kandy.highlights.gardens":
      "Королевские ботанические сады",
    "tourPackages.packages.kandy.highlights.dance":
      "Традиционное танцевальное шоу",
    "tourPackages.packages.kandy.highlights.lake": "Озеро Канди",

    "tourPackages.packages.ella.name": "Приключение в горной стране Элла",
    "tourPackages.packages.ella.highlights.bridge": "Мост Девяти арок",
    "tourPackages.packages.ella.highlights.peak": "Малый пик Адама",
    "tourPackages.packages.ella.highlights.tea": "Тур по чайной плантации",
    "tourPackages.packages.ella.highlights.train":
      "Живописная поездка на поезде",

    "tourPackages.packages.galle.name": "Открытие голландского форта Галле",
    "tourPackages.packages.galle.highlights.fort":
      "Форт всемирного наследия ЮНЕСКО",
    "tourPackages.packages.galle.highlights.lighthouse": "Исторический маяк",
    "tourPackages.packages.galle.highlights.ramparts":
      "Прогулка по валам форта",
    "tourPackages.packages.galle.highlights.museum": "Морской музей",

    "tourPackages.packages.yala.name": "Сафари-приключение в Яла",
    "tourPackages.packages.yala.highlights.leopards": "Шри-ланкийские леопарды",
    "tourPackages.packages.yala.highlights.elephants": "Дикие слоны",
    "tourPackages.packages.yala.highlights.birds": "Экзотические виды птиц",
    "tourPackages.packages.yala.highlights.camping": "Роскошный кемпинг",

    "tourPackages.packages.mirissa.name": "Пляж Мирисса и наблюдение за китами",
    "tourPackages.packages.mirissa.highlights.whales":
      "Наблюдение за синими китами",
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
    "contact.office.desc":
      "Встретьтесь с нами лично для персонального планирования",
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
    "footer.newsletterDesc":
      "Подпишитесь на советы по путешествиям и эксклюзивные предложения",
    "footer.subscribe": "Подписаться",

    // Common
    "common.readMore": "Читать далее",
    "common.learnMore": "Узнать больше",
    "common.bookNow": "Забронировать",
    "common.getQuote": "Получить предложение",
    "common.viewAll": "Посмотреть все",
    "common.loading": "Загрузка...",
    "common.error": "Что-то пошло не так",
    // Adventures Page
    "srilankaadventures.hero.title": "Захватывающие приключения Шри-Ланки",
    "srilankaadventures.hero.subtitle":
      "От наблюдения за китами до треккинга в тропиках — незабываемые впечатления по всему острову.",
    "srilankaadventures.section.title": "Лучшие приключения",
    "srilankaadventures.section.subtitle":
      "Подобрано для исследователей любого уровня",
    "srilankaadventures.whale.tag": "Наблюдение за китами",
    "srilankaadventures.whale.title": "Синие киты в Мириссе",
    "srilankaadventures.whale.description":
      "Выйдите в открытое море и наблюдайте за величайшими животными планеты в природе.",
    "srilankaadventures.whale.duration": "Полдня или весь день",
    "srilankaadventures.hiking.tag": "Горные походы",
    "srilankaadventures.hiking.title": "Походы в горной стране",
    "srilankaadventures.hiking.description":
      "Тропы через чайные плантации, водопады и панорамные виды Эллы.",
    "srilankaadventures.hiking.duration": "3–6 часов",
    "srilankaadventures.safari.tag": "Сафари",
    "srilankaadventures.safari.title": "Сафари в парке Яла",
    "srilankaadventures.safari.description":
      "Встречи со слонами, медведями и редким леопардом на джип-сафари.",
    "srilankaadventures.safari.duration": "Полдня или весь день",
    "srilankaadventures.ancient.tag": "Древние чудеса",
    "srilankaadventures.ancient.title": "Сигирия и древние города",
    "srilankaadventures.ancient.description":
      "Поднимитесь на Львиную скалу и исследуйте руины с тысячелетней историей.",
    "srilankaadventures.ancient.duration": "Весь день",
    "srilankaadventures.rafting.tag": "Рафтинг",
    "srilankaadventures.rafting.title": "Рафтинг по реке Келани",
    "srilankaadventures.rafting.description":
      "Быстрые пороги среди сочной тропической зелени.",
    "srilankaadventures.rafting.duration": "2–3 часа на воде",
    "srilankaadventures.train.tag": "Живописный поезд",
    "srilankaadventures.train.title": "Поезд Нану-Оя → Элла",
    "srilankaadventures.train.description":
      "Всемирно известный маршрут через изумрудные чайные холмы и туманные горы.",
    "srilankaadventures.train.duration": "2–3 часа",
    "srilankaadventures.beach.tag": "Пляжный отдых",
    "srilankaadventures.beach.title": "Южные пляжи",
    "srilankaadventures.beach.description":
      "Золотой песок, теплые волны и тропические закаты.",
    "srilankaadventures.beach.duration": "Гибко",
    "srilankaadventures.temple.tag": "Священные храмы",
    "srilankaadventures.temple.title": "Храмы Канди и Дамбулы",
    "srilankaadventures.temple.description":
      "Познакомьтесь с буддийским наследием и удивительными пещерными храмами.",
    "srilankaadventures.temple.duration": "Полдня или весь день",
    "srilankaadventures.spice.tag": "Чай и специи",
    "srilankaadventures.spice.title": "Чайные фабрики и сады специй",
    "srilankaadventures.spice.description":
      "Попробуйте вкусы острова и узнайте традиции выращивания.",
    "srilankaadventures.spice.duration": "2–4 часа",
    "srilankaadventures.rainforest.tag": "Тропический лес",
    "srilankaadventures.rainforest.title": "Лес Синхараджа",
    "srilankaadventures.rainforest.description":
      "Прогулка с гидом по объекту ЮНЕСКО с уникальным биоразнообразием.",
    "srilankaadventures.rainforest.duration": "Полдня",

    // About Page Additional
    "about.team.title": "Познакомьтесь с нашей командой экспертов",
    "about.team.subtitle":
      "Увлеченные профессионалы, посвятившие себя созданию вашего идеального приключения в Шри-Ланке",
    "about.achievements.title": "Наши достижения",
    "about.achievements.subtitle":
      "Признание и вехи, определяющие нашу приверженность совершенству",
    "about.certifications.title": "Сертификации и членство",
    "about.certifications.subtitle":
      "Официальное признание ведущих туристических и качественных организаций",
    "about.story.title": "Наша история",
    "about.story.subtitle":
      "От скромного начала до самого надежного туристического партнера Шри-Ланки",
    "about.values.title": "Наши ценности",
    "about.values.subtitle":
      "Принципы, которыми мы руководствуемся во всем, что делаем",
    "about.team.member.founder": "20+ лет в туристической индустрии Шри-Ланки",
    "about.team.member.operations": "Эксперт по приключенческим турам и сафари",
    "about.team.member.guide":
      "Лицензированный гид с глубокими культурными знаниями",
    "about.team.member.customer":
      "Обеспечение исключительного клиентского опыта",
    "about.achievements.award":
      "Награжденная туристическая компания с 2010 года",
    "about.achievements.certified":
      "Сертифицирована Советом по туризму Шри-Ланки",
    "about.achievements.satisfaction": "98% удовлетворенности клиентов",
    "about.achievements.safety": "Нулевых инцидентов безопасности за 12+ лет",
    "about.achievements.featured":
      "Освещается в ведущих туристических журналах",
    "about.achievements.eco": "Экологически чистые туристические практики",
    "about.achievements.support": "Поддержка клиентов 24/7",
    "about.achievements.multilang": "Многоязычная поддержка",
    "about.certifications.sltd":
      "Лицензирована Управлением по развитию туризма Шри-Ланки",
    "about.certifications.iata":
      "Член Международной ассоциации воздушного транспорта (IATA)",
    "about.certifications.pata":
      "Член Тихоокеанской ассоциации путешествий (PATA)",
    "about.certifications.iso":
      "Сертифицирована по ISO 9001:2015 Управление качеством",
    "about.certifications.sustainable":
      "Сертифицирована по устойчивому туризму",
    "about.story.founded":
      "Основана в 2010 году страстными местными жителями, которые хотели поделиться истинной красотой Шри-Ланки с миром, Ceylon Escape началась как небольшой семейный бизнес с большой мечтой.",
    "about.story.grown":
      "За эти годы мы выросли в одну из самых надежных туристических компаний Шри-Ланки, но никогда не теряли личного подхода. Каждый тур создается с той же заботой и вниманием к деталям, которые сделали нас такими, какие мы есть сегодня.",
    "about.story.believe":
      "Мы верим, что путешествие должно быть преобразующим, соединяя вас не только с местами, но и с людьми, культурами и впечатлениями, которые остаются с вами еще долго после возвращения домой.",
    "about.values.mission": "Наша миссия",
    "about.values.vision": "Наше видение",
    "about.hero.title": "О Ceylon Escape",
    "about.hero.subtitle":
      "Ваш надежный партнер для аутентичных впечатлений в Шри-Ланке. Мы создаем незабываемые путешествия уже более десятилетия.",
    "about.hero.trusted": "Доверяют с 2010 года",
    "about.hero.backToHome": "Вернуться на главную",
    "common.backToHome": "Вернуться на главную",
    "common.trustedSince": "Доверяют с 2010 года",
    "common.chatWithUs": "Чат с нами",
    "common.emailUs": "Напишите нам",
    "common.yearsExperience": "Лет опыта в туризме Шри-Ланки",
    "common.satisfiedTravelers": "Довольных путешественников со всего мира",
    "common.successfulTours": "Успешно завершенных туров",
    "common.professionalGuides": "Профессиональных местных гидов",

    // Team Members
    "about.team.member.founder.name": "Раджеш Фернандо",
    "about.team.member.founder.role": "Основатель и генеральный директор",
    "about.team.member.operations.name": "Прия Джаявардена",
    "about.team.member.operations.role": "Менеджер по операциям",
    "about.team.member.guide.name": "Кумар Сильва",
    "about.team.member.guide.role": "Главный гид",
    "about.team.member.customer.name": "Анита Перера",
    "about.team.member.customer.role": "Отношения с клиентами",
    "about.team.member.specialties.cultural": "Культурные туры",
    "about.team.member.specialties.heritage": "Объекты наследия",
    "about.team.member.specialties.wildlife": "Сафари по дикой природе",
    "about.team.member.specialties.adventure": "Приключенческие туры",
    "about.team.member.specialties.historical": "Исторические места",
    "about.team.member.specialties.local": "Местная культура",
    "about.team.member.specialties.service": "Обслуживание клиентов",
    "about.team.member.specialties.planning": "Планирование путешествий",

    // Destinations Page
    "destinations.filters.categories": "Категории",
    "destinations.filters.duration": "Продолжительность",
    "destinations.filters.all": "Все направления",
    "destinations.filters.heritage": "Объекты наследия",
    "destinations.filters.nature": "Природа и дикая природа",
    "destinations.filters.culture": "Культурные",
    "destinations.filters.adventure": "Приключения",
    "destinations.filters.beaches": "Пляжи",
    "destinations.filters.anyDuration": "Любая продолжительность",
    "destinations.filters.oneDay": "1 день",
    "destinations.filters.twoThreeDays": "2-3 дня",
    "destinations.filters.fourPlusDays": "4+ дня",
    "destinations.common.bestTime": "Лучшее время",
    "destinations.common.difficulty": "Сложность",
    "destinations.common.groupSize": "Размер группы",
    "destinations.common.people": "человек",
    "destinations.common.moderate": "Умеренная",
    "destinations.common.easy": "Легкая",
    "destinations.common.yearRound": "Круглый год",

    // Gallery Page
    "gallery.items.sigiriya.title": "Крепость Сигирия",
    "gallery.items.sigiriya.description":
      "Древний королевский дворец и крепость с потрясающими фресками и водными садами",
    "gallery.items.beach.title": "Нетронутый пляжный рай",
    "gallery.items.beach.description":
      "Золотые пляжи с кристально чистой водой и захватывающими закатами",
    "gallery.items.tea.title": "Изумрудные чайные плантации",
    "gallery.items.tea.description":
      "Холмистые склоны, покрытые пышными зелеными чайными кустами до горизонта",
    "gallery.items.temple.title": "Храм Священного Зуба",
    "gallery.items.temple.description":
      "Священный буддийский храм, хранящий реликвию зуба Будды",
    "gallery.items.leopard.title": "Сафари-приключение с леопардами",
    "gallery.items.leopard.description":
      "Увидьте неуловимого шри-ланкийского леопарда в его естественной среде обитания",
    "gallery.items.elephant.title": "Собрание слонов",
    "gallery.items.elephant.description":
      "Наблюдайте за величественными азиатскими слонами в их естественной среде",
    "gallery.items.waterfall.title": "Водопад Бамбараканда",
    "gallery.items.waterfall.description":
      "Самый высокий водопад Шри-Ланки, каскадом стекающий через пышные зеленые горы",
    "gallery.items.train.title": "Живописное путешествие на поезде",
    "gallery.items.train.description":
      "Знаменитая поездка на поезде через чайные плантации и туманные горы",
    "gallery.items.fort.title": "Голландский форт Галле",
    "gallery.items.fort.description":
      "Колониальный форт всемирного наследия ЮНЕСКО с исторической архитектурой",
    "gallery.items.whale.title": "Наблюдение за синими китами",
    "gallery.items.whale.description":
      "Увидьте самых больших животных на Земле в их естественной среде обитания",
    "gallery.items.teaFactory.title": "Экскурсия по чайной фабрике",
    "gallery.items.teaFactory.description":
      "Изучите искусство изготовления чая на традиционных фабриках Шри-Ланки",
    "gallery.items.buddha.title": "Гигантская статуя Будды",
    "gallery.items.buddha.description":
      "Спокойная статуя Будды, возвышающаяся над красивым пейзажем",
    "gallery.items.surfing.title": "Серфинг в Аругам-Бей",
    "gallery.items.surfing.description":
      "Покоряйте идеальные волны в главном серфинг-направлении Шри-Ланки",
    "gallery.items.forest.title": "Тропический лес Синхараджа",
    "gallery.items.forest.description":
      "Объект всемирного наследия ЮНЕСКО с невероятным биоразнообразием",
    "gallery.items.lake.title": "Озеро Грегори",
    "gallery.items.lake.description":
      "Живописное озеро, окруженное колониальной архитектурой и садами",
    "gallery.items.market.title": "Сцена местного рынка",
    "gallery.items.market.description":
      "Яркие местные рынки, демонстрирующие культуру и специи Шри-Ланки",
    "gallery.items.sunset.title": "Тропический закат",
    "gallery.items.sunset.description":
      "Захватывающий закат над Индийским океаном",
    "gallery.items.traditional.title": "Традиционный танец",
    "gallery.items.traditional.description":
      "Красочные традиционные культурные представления Шри-Ланки",
    "gallery.items.boat.title": "Рыбацкая лодка",
    "gallery.items.boat.description":
      "Традиционные рыбацкие лодки на нетронутом побережье",
    "gallery.items.mountain.title": "Горный вид",
    "gallery.items.mountain.description":
      "Панорамные виды на красивые горные хребты Шри-Ланки",
    "gallery.items.ancient.title": "Древние руины",
    "gallery.items.ancient.description":
      "Исторические руины, рассказывающие о богатом прошлом Шри-Ланки",
    "gallery.items.beachRelax.title": "Пляжный отдых",
    "gallery.items.beachRelax.description":
      "Идеальные моменты спокойствия на золотых песчаных пляжах",
    "gallery.items.teaPlantation.title": "Чайная плантация",
    "gallery.items.teaPlantation.description":
      "Бесконечные ряды чайных кустов в прохладной горной местности",
    "gallery.items.templeSacred.title": "Священный храм",
    "gallery.items.templeSacred.description":
      "Спокойные храмовые территории с древним духовным значением",
    "gallery.items.wildlife.title": "Встреча с дикой природой",
    "gallery.items.wildlife.description":
      "Близкие встречи с разнообразной дикой природой Шри-Ланки",
    "gallery.items.cultural.title": "Культурное наследие",
    "gallery.items.cultural.description":
      "Богатые культурные традиции и объекты наследия",
    "gallery.items.adventure.title": "Экстремальные виды спорта",
    "gallery.items.adventure.description":
      "Захватывающие активные виды отдыха и приключенческие впечатления",
    "gallery.items.heritage.title": "Всемирное наследие",
    "gallery.items.heritage.description":
      "Объекты всемирного наследия ЮНЕСКО исторической важности",
    "gallery.items.nature.title": "Природная красота",
    "gallery.items.nature.description":
      "Потрясающие природные ландшафты и нетронутые среды",
    "gallery.items.beaches.title": "Прибрежный рай",
    "gallery.items.beaches.description":
      "Красивые пляжи и прибрежные достопримечательности",
    "gallery.common.views": "просмотров",
    "gallery.common.likes": "лайков",
    "gallery.common.share": "Поделиться",
    "gallery.common.download": "Скачать",

    // Packages Page
    "packages.filters.allTours": "Все туры",
    "packages.filters.oneDay": "1 день",
    "packages.filters.twoDays": "2 дня",
    "packages.filters.sevenDays": "7 дней",
    "packages.filters.allCategories": "Все категории",
    "packages.filters.culturalHeritage": "Культурное наследие",
    "packages.filters.adventureNature": "Приключения и природа",
    "packages.filters.wildlifeSafari": "Сафари по дикой природе",
    "packages.filters.cityTours": "Городские туры",
    "packages.filters.beachCoast": "Пляж и побережье",
    "packages.filters.sortBy": "Сортировать по",
    "packages.filters.popularity": "Популярности",
    "packages.filters.price": "Цене",
    "packages.filters.rating": "Рейтингу",
    "packages.filters.duration": "Продолжительности",
    "packages.common.loadMore": "Загрузить больше туров",
    "packages.common.showing": "Показано",
    "packages.common.of": "из",
    "packages.common.tours": "туров",
    "packages.common.noResults": "Туры не найдены",
    "packages.common.tryDifferent": "Попробуйте другие фильтры",
    "packages.common.filters": "фильтры",
    "packages.hero.title": "Полные туристические пакеты",
    "packages.hero.subtitle":
      "От однодневных экскурсий до комплексных недельных приключений. Откройте для себя лучшее из Шри-Ланки с нашими профессионально созданными туристическими пакетами.",
    "packages.hero.badge": "Премиум приключения Шри-Ланки",
    "packages.tourDuration": "Продолжительность тура",
    "packages.tourCategory": "Категория тура",
    "packages.tourHighlights": "Особенности тура",
    "packages.whatsIncluded": "Что включено",
    "packages.optionalExtras": "Дополнительные опции",
    "packages.bookNowWhatsApp": "Забронировать через WhatsApp",
    "packages.needCustomTour": "Нужен индивидуальный тур-пакет?",
    "packages.planCustomTour": "Спланировать мой индивидуальный тур",
    "packages.premiumSriLankanAdventures": "Премиум приключения Шри-Ланки",
    "packages.completeTourPackages": "Полные туристические пакеты",
    "packages.discoverBestSriLanka":
      "Откройте для себя лучшее из Шри-Ланки с нашими профессионально созданными туристическими пакетами.",
    "packages.expertlyCraftedTours":
      "Профессионально созданные туристические пакеты.",
    "packages.moreHighlights": "еще особенностей",
    "packages.moreIncluded": "еще включено",
    "packages.duration.oneDay": "1 день",
    "packages.duration.twoDays": "2 дня",
    "packages.duration.sevenDays": "7 дней",
    "packages.tours.ella.name": "Экскурсия в Эллу",
    "packages.tours.ella.subtitle": "Приключение в туманном городе",
    "packages.tours.galle.name": "Тур по Галле",
    "packages.tours.galle.subtitle": "Наследие голландского форта",
    "packages.tours.colombo.name": "Городской тур по Коломбо",
    "packages.tours.colombo.subtitle": "Опыт современной столицы",
    "packages.tours.kandy.name": "Экскурсии в Канди",
    "packages.tours.kandy.subtitle": "Древний город Канди",
    "packages.tours.sigiriya.name": "Экскурсия в Сигирию",
    "packages.tours.sigiriya.subtitle": "Чудо света ЮНЕСКО",
    "packages.tours.yala.name": "Сафари в Удавалаве или Яле",
    "packages.tours.yala.subtitle": "Национальный парк дикой природы",
    "packages.tours.ellaYala.name": "Комбо Элла и Яла",
    "packages.tours.ellaYala.subtitle": "Горы и дикая природа",
    "packages.tours.mirissa.name": "Наблюдение за китами в Мириссе",
    "packages.tours.mirissa.subtitle": "Гигантские синие киты и дельфины",
    "packages.tours.bentota.name": "Пляжное приключение в Бентоте",
    "packages.tours.bentota.subtitle": "Водные виды спорта и релаксация",
    "packages.tours.unawatuna.name": "Пляжный рай Унаватуна",
    "packages.tours.unawatuna.subtitle": "Золотые пески и коралловые рифы",
    "packages.tours.trincomalee.name": "Пляж и культура Тринкомали",
    "packages.tours.trincomalee.subtitle": "Наследие восточного побережья",
    "packages.tours.arugam.name": "Серфинг в Аругам-Бей",
    "packages.tours.arugam.subtitle": "Мирового класса серфинг-направление",
    "packages.tours.negombo.name": "Пляж и лагуна Негомбо",
    "packages.tours.negombo.subtitle": "Рай у ворот аэропорта",
    "packages.tours.gold.name": "Золотой тур: Элла и Сигирия",
    "packages.tours.gold.subtitle": "От гор к древним чудесам",
    "packages.tours.silva.name": "Тур Сильва: Канди и Элла",
    "packages.tours.silva.subtitle": "Культурное наследие и природа",
    "packages.tours.grand.name": "Великое открытие Шри-Ланки",
    "packages.tours.grand.subtitle": "Полный островной опыт",

    // Adventure Page
    "adventure.filters.allAdventures": "Все приключения",
    "adventure.filters.hikingTrekking": "Походы и треккинг",
    "adventure.filters.waterSports": "Водные виды спорта",
    "adventure.filters.wildlifeSafari": "Сафари по дикой природе",
    "adventure.filters.extremeSports": "Экстремальные виды спорта",

    // Contact Page Additional
    "contact.info.phone.title": "Номера телефонов",
    "contact.info.phone.description": "Доступны 24/7 для вашего удобства",
    "contact.info.email.title": "Email адрес",
    "contact.info.email.description": "Отвечаем в течение 2 часов",
    "contact.info.office.title": "Местоположение офиса",
    "contact.info.office.description":
      "Посетите нас для персонального планирования",
    "contact.info.whatsapp.title": "WhatsApp чат",
    "contact.info.whatsapp.description":
      "Быстрый ответ и мгновенное планирование",
    "contact.info.phoneNumbers": "Номера телефонов",
    "contact.info.emailAddress": "Email адрес",
    "contact.info.officeLocation": "Местоположение офиса",
    "contact.info.whatsappChat": "WhatsApp чат",
    "contact.info.available247": "Доступны 24/7 для вашего удобства",
    "contact.info.respond2hours": "Отвечаем в течение 2 часов",
    "contact.info.visitUs": "Посетите нас для персонального планирования",
    "contact.info.quickResponse": "Быстрый ответ и мгновенное планирование",
    "contact.info.businessHours.title": "Часы работы",
    "contact.info.businessHours.description":
      "Расширенные часы для вашего удобства",

    // Contact Form Additional
    "contact.form.fullName": "Полное имя",
    "contact.form.emailAddress": "Email адрес",
    "contact.form.phoneNumber": "Номер телефона",
    "contact.form.subject": "Тема",
    "contact.form.message": "Сообщение",
    "contact.form.tourType": "Тип тура",
    "contact.form.placeholders.fullName": "Введите ваше полное имя",
    "contact.form.placeholders.email": "Введите ваш email адрес",
    "contact.form.placeholders.phone": "Введите ваш номер телефона",
    "contact.form.placeholders.subject": "Чем мы можем вам помочь?",
    "contact.form.placeholders.message":
      "Расскажите нам о ваших планах путешествия, предпочтениях, датах, размере группы или любых особых требованиях...",
    "contact.form.placeholders.tourType": "Выберите тип тура",
    "contact.form.tourTypes.cultural": "Туры по культурному наследию",
    "contact.form.tourTypes.adventure": "Приключенческие и природные туры",
    "contact.form.tourTypes.wildlife": "Сафари-туры по дикой природе",
    "contact.form.tourTypes.beach": "Пляжные и прибрежные туры",
    "contact.form.tourTypes.city": "Городские туры",
    "contact.form.tourTypes.custom": "Индивидуальный тур-пакет",
    "contact.form.tourTypes.multiDay": "Многодневные туры",
    "contact.form.tourTypes.dayExcursions": "Однодневные экскурсии",
    "contact.form.success.title": "Сообщение успешно отправлено!",
    "contact.form.success.message":
      "Спасибо за обращение к нам. Мы ответим на ваш запрос в течение 2 часов.",
    "contact.form.submit": "Отправить сообщение",
    "contact.form.submitting": "Отправка...",
    "contact.form.required": "обязательно",
    "contact.form.optional": "необязательно",

    // Contact Page Additional
    "contact.form.title": "Отправьте нам сообщение",
    "contact.form.subtitle":
      "Заполните форму ниже, и мы свяжемся с вами в течение 2 часов",
    "contact.whyChooseUs.title": "Почему выбирают нас?",
    "contact.whyChooseUs.localExpertise.title": "Местная экспертиза",
    "contact.whyChooseUs.localExpertise.description":
      "Родились и выросли на Шри-Ланке с глубокими местными знаниями",
    "contact.whyChooseUs.support24.title": "Поддержка 24/7",
    "contact.whyChooseUs.support24.description":
      "Круглосуточная помощь во время вашего путешествия",
    "contact.whyChooseUs.customizedTours.title": "Индивидуальные туры",
    "contact.whyChooseUs.customizedTours.description":
      "Персонализированные впечатления на основе ваших предпочтений",
    "contact.whyChooseUs.bestValue.title": "Лучшая ценность",
    "contact.whyChooseUs.bestValue.description":
      "Конкурентные цены без скрытых расходов",
    "contact.quickContact.title": "Нужна немедленная помощь?",
    "contact.quickContact.description":
      "Для срочных запросов или бронирования в последнюю минуту, свяжитесь с нами напрямую через WhatsApp или телефон.",

    // Contact Hero Section
    "contact.hero.badge": "Свяжитесь с нами",
    "contact.hero.title": "Контакты",
    "contact.hero.subtitle":
      "Готовы отправиться в приключение на Шри-Ланке? Мы здесь, чтобы помочь вам спланировать идеальное путешествие. Обратитесь к нам, и давайте создадим незабываемые воспоминания вместе.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    const translationMap = translations[currentLanguage.code] as TranslationMap;
    if (key in translationMap) {
      return translationMap[key as keyof TranslationMap];
    }
    return key;
  };

  const contextValue = React.useMemo(
    () => ({
      currentLanguage,
      setLanguage,
      t,
    }),
    [currentLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export { languages };
