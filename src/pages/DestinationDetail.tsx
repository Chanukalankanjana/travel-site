"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  MapPin,
  MessageCircle,
  Phone,
  Navigation,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface DestinationDetailProps {
  readonly destinationId: string;
  readonly onNavigateBack: () => void;
}

export default function DestinationDetail({
  destinationId,
  onNavigateBack,
}: DestinationDetailProps) {
  const { t, currentLanguage } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  // Enhanced destination data with full details
  const destinations = {
    "1": {
      id: 1,
      name: t("destinations.destination.sigiriya.name"),
      category: "heritage",
      location: t("destinations.destination.sigiriya.location"),
      coordinates: { lat: 7.9569, lng: 80.7597 },
      mainImage: "/sigiriya-rock.jpg",
      gallery: [
        "/sigiriya-rock.jpg",
        "/sigiria-sri-lanka-945x630.jpg",
        "/temple.jpg",
        "/temple-sacred.jpg",
      ],
      shortDescription: t("destinations.destination.sigiriya.description"),
      fullDescription: t("destinations.destination.sigiriya.fullDescription"),
      highlights: [
        t("destinations.destination.sigiriya.highlights.ancient"),
        t("destinations.destination.sigiriya.highlights.frescoes"),
        t("destinations.destination.sigiriya.highlights.gardens"),
        t("destinations.destination.sigiriya.highlights.museum"),
      ],
      bestTime: t("destinations.destination.sigiriya.bestTime"),
      difficulty: t("destinations.destination.sigiriya.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to20"),
      duration: t("destinations.detail.duration.twoDays"),
      price: 150,
      rating: 4.9,
      reviews: 234,
      included: [
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.entranceFees"),
        t("destinations.detail.included.transportation"),
        t("destinations.detail.included.lunch"),
        t("destinations.detail.included.waterBottles"),
      ],
      notIncluded: [
        t("destinations.detail.notIncluded.personalExpenses"),
        t("destinations.detail.notIncluded.tips"),
        t("destinations.detail.notIncluded.accommodation"),
        t("destinations.detail.notIncluded.travelInsurance"),
      ],
      nearbyAttractions: [
        t("destinations.detail.nearby.dambullaCaveTemple"),
        t("destinations.detail.nearby.minneriyaNationalPark"),
        t("destinations.detail.nearby.polonnaruwaAncientCity"),
        t("destinations.detail.nearby.kaudullaNationalPark"),
      ],
    },
    "2": {
      id: 2,
      name: t("destinations.destination.kandy.name"),
      category: "culture",
      location: t("destinations.destination.kandy.location"),
      coordinates: { lat: 7.2906, lng: 80.6337 },
      mainImage: "/temple.jpg",
      gallery: [
        "/temple.jpg",
        "/temple-sacred.jpg",
        "/cultural.jpg",
        "/culturalHeri.jpg",
      ],
      shortDescription: t("destinations.destination.kandy.description"),
      fullDescription: t("destinations.destination.kandy.fullDescription"),
      highlights: [
        t("destinations.destination.kandy.highlights.temple"),
        t("destinations.destination.kandy.highlights.gardens"),
        t("destinations.destination.kandy.highlights.dance"),
        t("destinations.destination.kandy.highlights.lake"),
      ],
      bestTime: t("destinations.destination.kandy.bestTime"),
      difficulty: t("destinations.destination.kandy.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to20"),
      duration: t("destinations.detail.duration.twoDays"),
      price: 200,
      rating: 4.8,
      reviews: 189,
      included: [
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.entranceFees"),
        t("destinations.detail.included.transportation"),
        t("destinations.detail.included.culturalShow"),
        t("destinations.detail.included.lunch"),
      ],
      notIncluded: [
        t("destinations.detail.notIncluded.personalExpenses"),
        t("destinations.detail.notIncluded.tips"),
        t("destinations.detail.notIncluded.accommodation"),
        t("destinations.detail.notIncluded.travelInsurance"),
      ],
      nearbyAttractions: [
        t("destinations.detail.nearby.royalBotanicalGardens"),
        t("destinations.detail.nearby.udawattakeleForestReserve"),
        t("destinations.detail.nearby.bahirawakandaTemple"),
        t("destinations.detail.nearby.kandyLake"),
      ],
    },
    "3": {
      id: 3,
      name: t("destinations.destination.ella.name"),
      category: "nature",
      location: t("destinations.destination.ella.location"),
      coordinates: { lat: 6.8667, lng: 81.0464 },
      mainImage: "/distEella.jpg",
      gallery: [
        "/distEella.jpg",
        "/hicking.webp",
        "/tea.jpg",
        "/adventureHero.webp",
      ],
      shortDescription: t("destinations.destination.ella.description"),
      fullDescription: t("destinations.destination.ella.fullDescription"),
      highlights: [
        t("destinations.destination.ella.highlights.bridge"),
        t("destinations.destination.ella.highlights.peak"),
        t("destinations.destination.ella.highlights.tea"),
        t("destinations.destination.ella.highlights.train"),
      ],
      bestTime: t("destinations.destination.ella.bestTime"),
      difficulty: t("destinations.destination.ella.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to12"),
      duration: t("destinations.detail.duration.twoDays"),
      price: 120,
      rating: 4.9,
      reviews: 156,
      included: [
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.transportation"),
        t("destinations.detail.included.teaFactoryTour"),
        t("destinations.detail.included.entranceFees"),
        t("destinations.detail.included.lunch"),
      ],
      notIncluded: [
        t("destinations.detail.notIncluded.personalExpenses"),
        t("destinations.detail.notIncluded.tips"),
        t("destinations.detail.notIncluded.accommodation"),
        t("destinations.detail.notIncluded.travelInsurance"),
      ],
      nearbyAttractions: [
        t("destinations.detail.nearby.rawanaFalls"),
        t("destinations.detail.nearby.ellaRock"),
        t("destinations.detail.nearby.diyalumaFalls"),
        t("destinations.detail.nearby.bambaragalaPeak"),
      ],
    },
    "4": {
      id: 4,
      name: t("destinations.destination.galle.name"),
      category: "heritage",
      location: t("destinations.destination.galle.location"),
      coordinates: { lat: 6.0329, lng: 80.2169 },
      mainImage: "/temple.jpg",
      gallery: [
        "/temple.jpg",
        "/temple-sacred.jpg",
        "/cultural.jpg",
        "/culturalHeri.jpg",
      ],
      shortDescription: t("destinations.destination.galle.description"),
      fullDescription: t("destinations.destination.galle.fullDescription"),
      highlights: [
        t("destinations.destination.galle.highlights.architecture"),
        t("destinations.destination.galle.highlights.lighthouse"),
        t("destinations.destination.galle.highlights.ramparts"),
        t("destinations.destination.galle.highlights.museum"),
      ],
      bestTime: t("destinations.destination.galle.bestTime"),
      difficulty: t("destinations.destination.galle.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to20"),
      duration: t("destinations.detail.duration.oneDay"),
      price: 80,
      rating: 4.7,
      reviews: 203,
      included: [
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.entranceFees"),
        t("destinations.detail.included.transportation"),
        t("destinations.detail.included.lunch"),
      ],
      notIncluded: [
        t("destinations.detail.notIncluded.personalExpenses"),
        t("destinations.detail.notIncluded.tips"),
        t("destinations.detail.notIncluded.accommodation"),
        t("destinations.detail.notIncluded.travelInsurance"),
      ],
      nearbyAttractions: [
        t("destinations.detail.nearby.unawatunaBeach"),
        t("destinations.detail.nearby.hikkaduwaBeach"),
        t("destinations.detail.nearby.koggalaLake"),
        t("destinations.detail.nearby.stiltFishermen"),
      ],
    },
    "5": {
      id: 5,
      name: t("destinations.destination.yala.name"),
      category: "nature",
      location: t("destinations.destination.yala.location"),
      coordinates: { lat: 6.37278, lng: 81.51694 },
      mainImage: "/safari.webp",
      gallery: [
        "/safari.webp",
        "/Sri-Lanka-wildlife.webp",
        "/wildlife.jpg",
        "/adventureWild.jpg",
      ],
      shortDescription: t("destinations.destination.yala.description"),
      fullDescription: t("destinations.destination.yala.fullDescription"),
      highlights: [
        t("destinations.destination.yala.highlights.leopard"),
        t("destinations.destination.yala.highlights.elephants"),
        t("destinations.destination.yala.highlights.birds"),
        t("destinations.destination.yala.highlights.camping"),
      ],
      bestTime: t("destinations.destination.yala.bestTime"),
      difficulty: t("destinations.destination.yala.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to8"),
      duration: t("destinations.detail.duration.twoDays"),
      price: 180,
      rating: 4.8,
      reviews: 178,
      included: [
        t("destinations.detail.included.safariJeep"),
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.parkFees"),
        t("destinations.detail.included.binoculars"),
        t("destinations.detail.included.refreshments"),
      ],
      notIncluded: [
        t("destinations.detail.notIncluded.personalExpenses"),
        t("destinations.detail.notIncluded.tips"),
        t("destinations.detail.notIncluded.accommodation"),
        t("destinations.detail.notIncluded.travelInsurance"),
      ],
      nearbyAttractions: [
        t("destinations.detail.nearby.kataragamaTemple"),
        t("destinations.detail.nearby.bundalaNationalPark"),
        t("destinations.detail.nearby.sithulpawwaTemple"),
        t("destinations.detail.nearby.kumanaNationalPark"),
      ],
    },
    "6": {
      id: 6,
      name: t("destinations.destination.mirissa.name"),
      category: "beaches",
      location: t("destinations.destination.mirissa.location"),
      coordinates: { lat: 5.9495, lng: 80.4563 },
      // Custom Google Maps embed URL with information card (get this from Google Maps Share > Embed a map)
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15873.494176179502!2d80.458584!3d5.943148000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fd4c636d5ff%3A0xb81456b9b41a93b2!2sMirissa%20Beach!5e0!3m2!1sen!2sus!4v1757832907260!5m2!1sen!2sus",
      mainImage: "/beach.jpg",
      gallery: [
        "/beach.jpg",
        "/whaleWatch.webp",
        "/beachRelax.jpg",
        "/tea.jpg",
      ],
      shortDescription: t("destinations.destination.mirissa.description"),
      fullDescription: t("destinations.destination.mirissa.fullDescription"),
      highlights: [
        t("destinations.destination.mirissa.highlights.whales"),
        t("destinations.destination.mirissa.highlights.beaches"),
        t("destinations.destination.mirissa.highlights.surfing"),
        t("destinations.destination.mirissa.highlights.coconut"),
      ],
      bestTime: t("destinations.destination.mirissa.bestTime"),
      difficulty: t("destinations.destination.mirissa.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to15"),
      duration: t("destinations.detail.duration.twoDays"),
      price: 100,
      rating: 4.9,
      reviews: 267,
      included: [
        t("destinations.detail.included.whaleWatchingTour"),
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.transportation"),
        t("destinations.detail.included.lunch"),
        t("destinations.detail.included.snorkelingEquipment"),
      ],
      notIncluded: [
        t("destinations.detail.notIncluded.personalExpenses"),
        t("destinations.detail.notIncluded.tips"),
        t("destinations.detail.notIncluded.accommodation"),
        t("destinations.detail.notIncluded.travelInsurance"),
      ],
      nearbyAttractions: [
        t("destinations.detail.nearby.weligamaBay"),
        t("destinations.detail.nearby.polhenaBeach"),
        t("destinations.detail.nearby.dondraHeadLighthouse"),
        t("destinations.detail.nearby.koggalaLake"),
      ],
    },
    "7": {
      id: 7,
      name: t("destinations.destination.anuradhapura.name"),
      category: "heritage",
      location: t("destinations.destination.anuradhapura.location"),
      coordinates: { lat: 8.3114, lng: 80.4037 },
      mainImage: "/Distination/anuradhapura.jpg",
      gallery: [
        "/temple.jpg",
        "/temple-sacred.jpg",
        "/cultural.jpg",
        "/culturalHeri.jpg",
      ],
      shortDescription: t("destinations.destination.anuradhapura.description"),
      fullDescription: t("destinations.destination.anuradhapura.fullDescription"),
      highlights: [
        t("destinations.destination.anuradhapura.highlights.bodhi"),
        t("destinations.destination.anuradhapura.highlights.dagobas"),
        t("destinations.destination.anuradhapura.highlights.ruins"),
        t("destinations.destination.anuradhapura.highlights.archaeological"),
      ],
      bestTime: t("destinations.destination.anuradhapura.bestTime"),
      difficulty: t("destinations.destination.anuradhapura.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to20"),
      duration: t("destinations.detail.duration.twoDays"),
      rating: 4.6,
      reviews: 145,
      price: 90,
      included: [
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.entranceFees"),
        t("destinations.detail.included.transportation"),
        t("destinations.detail.included.bottledWater"),
        t("destinations.detail.included.historicalSiteVisits"),
      ],
      notIncluded: [
        t("destinations.detail.notIncluded.personalExpenses"),
        t("destinations.detail.notIncluded.tips"),
        t("destinations.detail.notIncluded.accommodation"),
        t("destinations.detail.notIncluded.meals"),
      ],
      nearbyAttractions: [
        t("destinations.detail.nearby.mihintaleSacredMountain"),
        t("destinations.detail.nearby.polonnaruwaAncientCity"),
        t("destinations.detail.nearby.dambullaCaveTemple"),
        t("destinations.detail.nearby.sigiriyaRockFortress"),
      ],
    },
    "8": {
      id: 8,
      name: t("destinations.destination.nuwara.name"),
      category: "nature",
      location: t("destinations.destination.nuwara.location"),
      coordinates: { lat: 6.9497, lng: 80.7891 },
      mainImage: "/tea.jpg",
      gallery: [
        "/tea.jpg",
        "/cultural.jpg",
        "/adventureWild.jpg",
        "/beachRelax.jpg",
      ],
      shortDescription: t("destinations.destination.nuwara.description"),
      fullDescription: t("destinations.destination.nuwara.fullDescription"),
      highlights: [
        t("destinations.destination.nuwara.highlights.tea"),
        t("destinations.destination.nuwara.highlights.horton"),
        t("destinations.destination.nuwara.highlights.lake"),
        t("destinations.destination.nuwara.highlights.architecture"),
      ],
      bestTime: t("destinations.destination.nuwara.bestTime"),
      difficulty: t("destinations.destination.nuwara.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to15"),
      duration: t("destinations.detail.duration.twoDays"),
      rating: 4.7,
      reviews: 198,
      price: 110,
      included: [
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.teaFactoryTour"),
        t("destinations.detail.included.transportation"),
        t("destinations.detail.included.bottledWater"),
        t("destinations.detail.included.gardenVisits"),
      ],
      notIncluded: [
        t("destinations.detail.notIncluded.personalExpenses"),
        t("destinations.detail.notIncluded.tips"),
        t("destinations.detail.notIncluded.accommodation"),
        t("destinations.detail.notIncluded.meals"),
      ],
      nearbyAttractions: [
        t("destinations.detail.nearby.ellaHillCountry"),
        t("destinations.detail.nearby.adamsPeak"),
        t("destinations.detail.nearby.kandyCity"),
        t("destinations.detail.nearby.hortonPlains"),
      ],
    },
    "9": {
      id: 9,
      name: t("destinations.adventure.adamsPeak.name"),
      category: "hiking",
      location: t("destinations.adventure.adamsPeak.location"),
      coordinates: { lat: 6.8097, lng: 80.4994 },
      mainImage: "/temple-sacred.jpg",
      gallery: [
        "/temple-sacred.jpg",
        "/temple.jpg",
        "/cultural.jpg",
        "/distEella.jpg",
      ],
      shortDescription: t("destinations.adventure.adamsPeak.description"),
      fullDescription: t("destinations.adventure.adamsPeak.fullDescription"),
      highlights: [
        t("destinations.adventure.adamsPeak.highlights.pilgrimage"),
        t("destinations.adventure.adamsPeak.highlights.sunrise"),
        t("destinations.adventure.adamsPeak.highlights.steps"),
        t("destinations.adventure.adamsPeak.highlights.views"),
        t("destinations.adventure.adamsPeak.highlights.nightHike"),
        t("destinations.adventure.adamsPeak.highlights.culture"),
      ],
      bestTime: t("destinations.adventure.adamsPeak.bestTime"),
      difficulty: t("destinations.adventure.adamsPeak.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to12"),
      duration: t("destinations.detail.duration.nightHike"),
      price: 120,
      rating: 4.9,
      reviews: 342,
      included: [
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.safetyEquipment"),
        t("destinations.detail.included.refreshments"),
        t("destinations.detail.included.transportation"),
      ],
      notIncluded: [
        t("destinations.adventure.notIncluded.entranceDonations"),
        t("destinations.detail.notIncluded.meals"),
        t("destinations.detail.notIncluded.personalExpenses"),
      ],
      nearbyAttractions: [
        t("destinations.adventure.nearby.nallathanniya"),
        t("destinations.adventure.nearby.hattonTeaEstates"),
        t("destinations.adventure.nearby.maskeliyaReservoir"),
      ],
    },
    "10": {
      id: 10,
      name: t("destinations.adventure.kitulgala.name"),
      category: "water",
      location: t("destinations.adventure.kitulgala.location"),
      coordinates: { lat: 6.9902, lng: 80.4153 },
      mainImage: "/adventureWild.jpg",
      gallery: [
        "/adventureWild.jpg",
        "/Sri-Lanka-wildlife.webp",
        "/wildlife.jpg",
      ],
      shortDescription: t("destinations.adventure.kitulgala.description"),
      fullDescription: t("destinations.adventure.kitulgala.fullDescription"),
      highlights: [
        t("destinations.adventure.kitulgala.highlights.rapids"),
        t("destinations.adventure.kitulgala.highlights.canyon"),
        t("destinations.adventure.kitulgala.highlights.swimming"),
        t("destinations.adventure.kitulgala.highlights.safety"),
        t("destinations.adventure.kitulgala.highlights.lunch"),
      ],
      bestTime: t("destinations.adventure.kitulgala.bestTime"),
      difficulty: t("destinations.adventure.kitulgala.difficulty"),
      groupSize: t("destinations.detail.groupSize.4to8"),
      duration: t("destinations.detail.duration.halfDay"),
      price: 85,
      rating: 4.8,
      reviews: 256,
      included: [
        t("destinations.detail.included.safetyEquipment"),
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.lunch"),
        t("destinations.detail.included.transportation"),
      ],
      notIncluded: [
        t("destinations.adventure.notIncluded.photos"),
        t("destinations.detail.notIncluded.personalExpenses"),
      ],
      nearbyAttractions: [
        t("destinations.adventure.nearby.belilenaCave"),
        t("destinations.adventure.nearby.filmingSites"),
        t("destinations.adventure.nearby.rainforestWalks"),
      ],
    },
    "11": {
      id: 11,
      name: t("destinations.adventure.ellaRock.name"),
      category: "hiking",
      location: t("destinations.adventure.ellaRock.location"),
      coordinates: { lat: 6.8667, lng: 81.0464 },
      mainImage: "/distEella.jpg",
      gallery: ["/distEella.jpg", "/hicking.webp", "/tea.jpg"],
      shortDescription: t("destinations.adventure.ellaRock.description"),
      fullDescription: t("destinations.adventure.ellaRock.fullDescription"),
      highlights: [
        t("destinations.adventure.ellaRock.highlights.panorama"),
        t("destinations.adventure.ellaRock.highlights.trails"),
        t("destinations.adventure.ellaRock.highlights.village"),
        t("destinations.adventure.ellaRock.highlights.railway"),
      ],
      bestTime: t("destinations.adventure.ellaRock.bestTime"),
      difficulty: t("destinations.adventure.ellaRock.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to10"),
      duration: t("destinations.detail.duration.halfDay"),
      price: 65,
      rating: 4.7,
      reviews: 189,
      included: [
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.refreshments"),
        t("destinations.detail.included.transportation"),
      ],
      notIncluded: [
        t("destinations.adventure.notIncluded.parkFees"),
        t("destinations.detail.notIncluded.personalExpenses"),
      ],
      nearbyAttractions: [
        t("destinations.adventure.nearby.nineArchBridge"),
        t("destinations.adventure.nearby.littleAdamsPeak"),
        t("destinations.adventure.nearby.ravanaFalls"),
      ],
    },
    "12": {
      id: 12,
      name: t("destinations.adventure.knuckles.name"),
      category: "hiking",
      location: t("destinations.adventure.knuckles.location"),
      coordinates: { lat: 7.4431, lng: 80.7772 },
      mainImage: "/culturalHeri.jpg",
      gallery: ["/culturalHeri.jpg", "/cultural.jpg", "/tea.jpg"],
      shortDescription: t("destinations.adventure.knuckles.description"),
      fullDescription: t("destinations.adventure.knuckles.fullDescription"),
      highlights: [
        t("destinations.adventure.knuckles.highlights.biosphere"),
        t("destinations.adventure.knuckles.highlights.ecosystem"),
        t("destinations.adventure.knuckles.highlights.camping"),
        t("destinations.adventure.knuckles.highlights.waterfalls"),
        t("destinations.adventure.knuckles.highlights.wildlife"),
      ],
      bestTime: t("destinations.adventure.knuckles.bestTime"),
      difficulty: t("destinations.adventure.knuckles.difficulty"),
      groupSize: t("destinations.detail.groupSize.4to8"),
      duration: t("destinations.detail.duration.twoDays"),
      price: 280,
      rating: 4.8,
      reviews: 167,
      included: [
        t("destinations.detail.included.campingEquipment"),
        t("destinations.detail.included.meals"),
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.parkFees"),
      ],
      notIncluded: [
        t("destinations.adventure.notIncluded.personalGear"),
        t("destinations.detail.notIncluded.tips"),
      ],
      nearbyAttractions: [
        t("destinations.adventure.nearby.riverston"),
        t("destinations.adventure.nearby.miniWorldsEnd"),
        t("destinations.adventure.nearby.wasgamuwa"),
      ],
    },
    
    "13": {
      id: 13,
      name: t("destinations.adventure.hortonPlains.name"),
      category: "hiking",
      location: t("destinations.adventure.hortonPlains.location"),
      coordinates: { lat: 6.8018, lng: 80.8039 },
      mainImage: "/wildlife.jpg",
      gallery: ["/wildlife.jpg", "/beachRelax.jpg", "/tea.jpg"],
      shortDescription: t("destinations.adventure.hortonPlains.description"),
      fullDescription: t("destinations.adventure.hortonPlains.fullDescription"),
      highlights: [
        t("destinations.adventure.hortonPlains.highlights.viewpoint"),
        t("destinations.adventure.hortonPlains.highlights.falls"),
        t("destinations.adventure.hortonPlains.highlights.grasslands"),
        t("destinations.adventure.hortonPlains.highlights.wildlife"),
      ],
      bestTime: t("destinations.adventure.hortonPlains.bestTime"),
      difficulty: t("destinations.adventure.hortonPlains.difficulty"),
      groupSize: t("destinations.detail.groupSize.2to12"),
      duration: t("destinations.detail.duration.fullDay"),
      price: 140,
      rating: 4.8,
      reviews: 201,
      included: [
        t("destinations.detail.included.parkFees"),
        t("destinations.detail.included.professionalGuide"),
        t("destinations.detail.included.lunch"),
        t("destinations.detail.included.transportation"),
      ],
      notIncluded: [
        t("destinations.adventure.notIncluded.warmClothing"),
        t("destinations.detail.notIncluded.personalExpenses"),
      ],
      nearbyAttractions: [
        t("destinations.adventure.nearby.nuwaraEliya"),
        t("destinations.adventure.nearby.pedroTeaEstate"),
        t("destinations.adventure.nearby.gregoryLake"),
      ],
    },
  };

  // Function to convert destination name to URL slug
  const nameToSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  // Function to find destination by slug
  const findDestinationBySlug = (slug: string) => {
    console.log('Looking for destination with slug/ID:', slug);
    
    // First try to find by ID (backward compatibility)
    if (destinations[slug as keyof typeof destinations]) {
      const dest = destinations[slug as keyof typeof destinations];
      console.log('Found by ID:', dest);
      return { key: slug, destination: dest };
    }
    
    // Then try to find by slug
    for (const [key, dest] of Object.entries(destinations)) {
      const destSlug = nameToSlug(dest.name);
      console.log('Checking destination:', dest.name, 'slug:', destSlug);
      if (destSlug === slug) {
        console.log('Found by slug:', dest);
        return { key, destination: dest };
      }
    }
    
    console.log('No destination found');
    return null;
  };

  // Find destination by slug or ID
  const destinationData = findDestinationBySlug(destinationId);
  const destination = destinationData?.destination;

  // Debug logging
  console.log('Destination ID:', destinationId);
  console.log('Available destinations:', Object.keys(destinations));
  console.log('Found destination:', destination);

  // Update URL to use slug if we found destination by ID
  useEffect(() => {
    if (destination && destinationData?.key === destinationId) {
      // If we found by ID, update URL to use slug
      const slug = nameToSlug(destination.name);
      if (slug !== destinationId) {
        window.history.replaceState({}, "", `/destination/${slug}`);
      }
    }
  }, [destination, destinationId, destinationData?.key]);

  // Handle case when destination is not found
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist.</p>
          <button
            onClick={onNavigateBack}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  // Function to get translated category name
  const getCategoryName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      "heritage": t("destinations.categories.heritage"),
      "culture": t("destinations.categories.culture"),
      "nature": t("destinations.categories.nature"),
      "beaches": t("destinations.categories.beaches"),
      "hiking": t("destinations.categories.hiking"),
      "water": t("destinations.categories.water"),
    };
    return categoryMap[category] || category;
  };

  // Auto-play carousel functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % destination.gallery.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [destination.gallery.length]);

  if (!destination) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("destinations.detail.destinationNotFound")}
          </h1>
          <button
            onClick={onNavigateBack}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("destinations.detail.backToDestinations")}
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const number = t(`whatsapp.phoneNumber.${currentLanguage.code}`);
    const baseMessage = t("whatsapp.message.destination");
    const message = encodeURIComponent(baseMessage.replace("{destinationName}", destination.name));
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  // Function to get Google Maps embed URL for each destination
  const getGoogleMapsEmbedUrl = (
    destination: (typeof destinations)[keyof typeof destinations] & {
      mapEmbedUrl?: string;
    }
  ) => {
    // If custom embed URL is provided, use it
    if (destination.mapEmbedUrl) {
      return destination.mapEmbedUrl;
    }

    // Otherwise, generate a search-based URL that shows place information
    const searchQuery = encodeURIComponent(
      `${destination.name}, ${destination.location}, Sri Lanka`
    );
    return `https://maps.google.com/maps?q=${searchQuery}&hl=en&z=15&output=embed&iwloc=near&t=m&ll=${destination.coordinates.lat},${destination.coordinates.lng}`;
  };

  // Function to generate Google Maps place URL for each destination
  const getGoogleMapsPlaceUrl = (
    destination: (typeof destinations)[keyof typeof destinations]
  ) => {
    const searchQuery = encodeURIComponent(
      `${destination.name}, ${destination.location}, Sri Lanka`
    );
    return `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Single Image */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={destination.mainImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              {getCategoryName(destination.category)}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center text-white/90">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{destination.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("destinations.detail.aboutDestination")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {destination.shortDescription}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.fullDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("destinations.detail.highlights")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery Auto Carousel */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("destinations.detail.photoGallery")}
              </h3>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {destination.gallery.map((image, index) => (
                      <div
                        key={`gallery-image-${image}-${index}`}
                        className="w-full flex-shrink-0"
                      >
                        <img
                          src={image}
                          alt={`${destination.name} - ${index + 1}`}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  onClick={() => {
                    setCurrentImageIndex((prevIndex) =>
                      prevIndex === 0
                        ? destination.gallery.length - 1
                        : prevIndex - 1
                    );
                  }}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  onClick={() => {
                    setCurrentImageIndex(
                      (prevIndex) =>
                        (prevIndex + 1) % destination.gallery.length
                    );
                  }}
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {destination.gallery.map((image, index) => (
                    <button
                      key={`indicator-${image}`}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {destination.gallery.length}
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("destinations.detail.location")}
              </h3>
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={getGoogleMapsEmbedUrl(destination)}
                  width="800"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Google Map of ${destination.name}`}
                ></iframe>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Navigation className="w-4 h-4 mr-2" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500">
                    {destination.coordinates.lat}, {destination.coordinates.lng}
                  </span>
                  <button
                    onClick={() =>
                      window.open(getGoogleMapsPlaceUrl(destination), "_blank")
                    }
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>{t("destinations.detail.viewOnGoogleMaps")}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking & Info */}
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* Booking Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t("destinations.detail.bookViaWhatsApp")}</span>
                </button>
                <a
                  href={`tel:${t(`whatsapp.phoneNumber.${currentLanguage.code}`)}`}
                  className="w-full py-3 border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t("destinations.detail.callUs")}</span>
                </a>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                {t("destinations.detail.quickInfo")}
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">{t("destinations.detail.bestTime")}:</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {destination.bestTime}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">{t("destinations.detail.difficulty")}:</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {destination.difficulty}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">{t("destinations.detail.duration")}:</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {destination.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">{t("destinations.detail.groupSize")}:</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {destination.groupSize}
                  </span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                {t("destinations.detail.whatsIncluded")}
              </h4>
              <ul className="space-y-3">
                {destination.included.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Included */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                {t("destinations.detail.notIncluded")}
              </h4>
              <ul className="space-y-3">
                {destination.notIncluded.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <div className="w-4 h-4 border border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="w-5 h-5 text-emerald-600 mr-2" />
                {t("destinations.detail.nearbyAttractions")}
              </h4>
              <ul className="space-y-3">
                {destination.nearbyAttractions.map((attraction) => (
                  <li
                    key={attraction}
                    className="text-gray-700 text-sm flex items-center"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
