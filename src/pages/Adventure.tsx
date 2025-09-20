"use client";

import { useState, useEffect } from "react";
import {
  Mountain,
  Waves,
  TreePine,
  MapPin,
  Clock,
  Users,
  Star,
  ArrowRight,
  Filter,
  Heart,
  Zap,
  Shield,
  Award,
  ArrowLeft,
  Calendar,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

function AdventuresPageContent() {
  const { t, currentLanguage } = useLanguage();
  const isRu = currentLanguage.code === "ru";
  const { navigateToDestination, navigateToPackages } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", labelKey: "adventure.filters.allAdventures", icon: Zap },
    {
      id: "hiking",
      labelKey: "adventure.filters.hikingTrekking",
      icon: Mountain,
    },
    { id: "water", labelKey: "adventure.filters.waterSports", icon: Waves },
    {
      id: "wildlife",
      labelKey: "adventure.filters.wildlifeSafari",
      icon: TreePine,
    },
    { id: "extreme", labelKey: "adventure.filters.extremeSports", icon: Zap },
  ];

  const difficulties = [
    { id: "all", label: "All Levels" },
    { id: "easy", label: "Easy" },
    { id: "moderate", label: "Moderate" },
    { id: "challenging", label: "Challenging" },
    { id: "extreme", label: "Extreme" },
  ];

  const adventures = [
    {
      id: 1,
      name: "Adam's Peak Sacred Climb",
      image: "/adventure/adams-peak.jpg?cb=1",
      category: "hiking",
      difficulty: "challenging",
      duration: "1 Day",
      price: 120,
      rating: 4.9,
      reviews: 342,
      location: "Central Province",
      description:
        "Embark on a spiritual journey to the sacred Adam's Peak (Sri Pada) at 2,243m. Experience the magical sunrise from the summit after a challenging night hike through ancient pilgrimage paths.",
      highlights: [
        "Sacred Buddhist pilgrimage site",
        "Spectacular sunrise views",
        "2,243m summit elevation",
        "Ancient stone steps pathway",
        "Spiritual experience",
        "Tea plantation views",
      ],
      bestTime: "December to May",
      groupSize: "2-12 people",
      included: [
        "Professional guide",
        "Safety equipment",
        "Light refreshments",
        "Transportation",
      ],
      itinerary: [
        "2:00 AM - Departure from base camp",
        "2:30 AM - Begin night hike",
        "5:30 AM - Reach summit",
        "6:00 AM - Sunrise viewing",
        "8:00 AM - Descent begins",
        "11:00 AM - Return to base",
      ],
    },
    {
      id: 2,
      name: "White Water Rafting Kitulgala",
      image: "/adventure/kithulgala.jpg?cb=1",
      category: "water",
      difficulty: "moderate",
      duration: "Half Day",
      price: 85,
      rating: 4.8,
      reviews: 256,
      location: "Sabaragamuwa Province",
      description:
        "Navigate the thrilling rapids of the Kelani River in Kitulgala, famous as the filming location of 'Bridge on the River Kwai'. Perfect for both beginners and experienced rafters.",
      highlights: [
        "Grade 2-3 rapids",
        "Kelani River adventure",
        "Rainforest scenery",
        "Movie filming location",
        "Professional safety gear",
        "Swimming opportunities",
      ],
      bestTime: "May to December",
      groupSize: "4-8 people",
      included: [
        "Safety equipment",
        "Professional guide",
        "Lunch",
        "Transportation",
      ],
      itinerary: [
        "8:00 AM - Hotel pickup",
        "10:00 AM - Safety briefing",
        "10:30 AM - Rafting begins",
        "12:30 PM - Lunch break",
        "2:00 PM - Return journey",
        "4:00 PM - Hotel drop-off",
      ],
    },
    {
      id: 3,
      name: "Ella Rock Sunrise Trek",
      image: "/adventure/ella-rock-hiking.png?cb=1",
      category: "hiking",
      difficulty: "moderate",
      duration: "Half Day",
      price: 65,
      rating: 4.7,
      reviews: 189,
      location: "Uva Province",
      description:
        "Trek through lush tea plantations and misty mountains to reach Ella Rock's summit. Witness breathtaking sunrise views over the hill country's rolling landscapes.",
      highlights: [
        "Panoramic hill country views",
        "Tea plantation trails",
        "Sunrise photography",
        "Local village encounters",
        "Railway track walking",
        "Cloud forest experience",
      ],
      bestTime: "December to March",
      groupSize: "2-10 people",
      included: ["Local guide", "Light breakfast", "Photography assistance"],
      itinerary: [
        "4:30 AM - Hotel pickup",
        "5:00 AM - Trek begins",
        "6:30 AM - Summit reached",
        "7:00 AM - Sunrise viewing",
        "8:30 AM - Descent starts",
        "10:00 AM - Return to hotel",
      ],
    },
    {
      id: 4,
      name: "Yala Leopard Safari",
      image: "/adventure/Sri-Lankan-leopard.jpg?cb=1",
      category: "wildlife",
      difficulty: "easy",
      duration: "Full Day",
      price: 180,
      rating: 4.9,
      reviews: 423,
      location: "Southern Province",
      description:
        "Experience Sri Lanka's premier wildlife destination with the highest leopard density in the world. Encounter elephants, sloth bears, and over 200 bird species in their natural habitat.",
      highlights: [
        "Highest leopard density globally",
        "Asian elephant herds",
        "Sloth bear sightings",
        "200+ bird species",
        "Ancient rock formations",
        "Coastal landscapes",
      ],
      bestTime: "February to July",
      groupSize: "2-6 people",
      included: [
        "4WD safari vehicle",
        "Expert naturalist",
        "Packed lunch",
        "Park fees",
      ],
      itinerary: [
        "5:30 AM - Hotel pickup",
        "6:30 AM - Enter Yala Park",
        "6:45 AM - Morning safari",
        "12:00 PM - Lunch break",
        "1:00 PM - Afternoon safari",
        "5:00 PM - Exit park",
        "6:30 PM - Return to hotel",
      ],
    },
    {
      id: 5,
      name: "Knuckles Range Expedition",
      image: "/adventure/knuckles.webp?cb=1",
      category: "hiking",
      difficulty: "challenging",
      duration: "2 Days",
      price: 280,
      rating: 4.8,
      reviews: 167,
      location: "Central Province",
      description:
        "Explore the UNESCO World Heritage Knuckles Mountain Range with its unique biodiversity, cloud forests, and challenging peaks. A true wilderness adventure for experienced trekkers.",
      highlights: [
        "UNESCO World Heritage site",
        "Cloud forest ecosystems",
        "Endemic flora and fauna",
        "Mountain camping",
        "Waterfall discoveries",
        "Village homestays",
      ],
      bestTime: "January to April",
      groupSize: "4-8 people",
      included: ["Camping equipment", "All meals", "Expert guide", "Permits"],
      itinerary: [
        "Day 1: Base camp to Mini World's End",
        "Day 2: Summit attempt and return",
      ],
    },
    {
      id: 6,
      name: "Mirissa Whale Watching",
      image: "/adventure/Mirissa-Whale.webp?cb=1",
      category: "water",
      difficulty: "easy",
      duration: "Half Day",
      price: 95,
      rating: 4.6,
      reviews: 298,
      location: "Southern Province",
      description:
        "Witness the majestic blue whales and playful dolphins in their natural habitat off the coast of Mirissa. The best whale watching destination in Sri Lanka.",
      highlights: [
        "Blue whale encounters",
        "Dolphin pods",
        "Sperm whale sightings",
        "Ocean photography",
        "Coastal scenery",
        "Marine education",
      ],
      bestTime: "November to April",
      groupSize: "10-30 people",
      included: [
        "Boat trip",
        "Life jackets",
        "Marine biologist guide",
        "Light refreshments",
      ],
      itinerary: [
        "6:00 AM - Harbor departure",
        "6:30 AM - Whale watching begins",
        "10:30 AM - Return to harbor",
        "11:00 AM - Tour ends",
      ],
    },
    {
      id: 7,
      name: "Sigiriya Rock Climbing",
      image: "/adventure/sigiriya.jpg?cb=1",
      category: "extreme",
      difficulty: "moderate",
      duration: "Half Day",
      price: 110,
      rating: 4.7,
      reviews: 234,
      location: "Central Province",
      description:
        "Scale the ancient Sigiriya Rock Fortress, climbing 1,200 steps to reach the summit palace ruins. Experience history, art, and adventure combined in one iconic climb.",
      highlights: [
        "Ancient palace ruins",
        "Famous mirror wall",
        "Sigiriya frescoes",
        "360-degree summit views",
        "Archaeological wonders",
        "Water garden complex",
      ],
      bestTime: "December to April",
      groupSize: "2-15 people",
      included: [
        "Entry tickets",
        "Professional guide",
        "Photography assistance",
        "Water",
      ],
      itinerary: [
        "7:00 AM - Site entrance",
        "7:30 AM - Climb begins",
        "9:00 AM - Summit reached",
        "10:30 AM - Descent starts",
        "11:30 AM - Tour concludes",
      ],
    },
    {
      id: 8,
      name: "Horton Plains World's End",
      image: "/adventure/Horton-Plains-national.png?cb=1",
      category: "hiking",
      difficulty: "moderate",
      duration: "Full Day",
      price: 140,
      rating: 4.8,
      reviews: 201,
      location: "Central Province",
      description:
        "Trek through the unique montane grasslands of Horton Plains to reach the dramatic World's End cliff with its 870m drop and stunning views across the southern plains.",
      highlights: [
        "World's End cliff viewpoint",
        "Baker's Falls waterfall",
        "Montane grasslands",
        "Endemic wildlife",
        "Cloud forest sections",
        "UNESCO World Heritage",
      ],
      bestTime: "January to March",
      groupSize: "2-12 people",
      included: [
        "Park entrance",
        "Guide service",
        "Packed lunch",
        "Transportation",
      ],
      itinerary: [
        "5:00 AM - Hotel pickup",
        "7:00 AM - Park entrance",
        "7:30 AM - Trek begins",
        "9:00 AM - World's End",
        "11:00 AM - Baker's Falls",
        "1:00 PM - Return to entrance",
        "3:00 PM - Hotel return",
      ],
    },
  ];

  const localizedAdventures = adventures.map((adventure) => {
    if (!isRu) return adventure;
    switch (adventure.id) {
      case 1:
        return {
          ...adventure,
          name: "Священное восхождение на Пик Адама",
          location: "Центральная провинция",
          duration: "1 день",
          groupSize: "2–12 человек",
          description:
            "Отправьтесь в духовное путешествие на священную гору Пик Адама (Шри-Пада), высотой 2 243 м. Встретьте магический рассвет на вершине после ночного подъёма по древним паломническим тропам.",
          highlights: [
            "Священное место буддийского паломничества",
            "Великолепные рассветные виды",
            "Высота вершины 2 243 м",
            "Древняя каменная лестница",
            "Духовный опыт",
            "Панорамы чайных плантаций",
          ],
        };
      case 2:
        return {
          ...adventure,
          name: "Рафтинг в Китулгале",
          location: "Провинция Сабарагамува",
          duration: "Полдня",
          groupSize: "4–8 человек",
          description:
            "Преодолейте стремительные пороги реки Келани в Китулгале, знаменитой как место съёмок ‘Моста через реку Квай’. Подходит как новичкам, так и опытным рафтерам.",
          highlights: [
            "Пороги 2–3 категории",
            "Приключение на реке Келани",
            "Тропический дождевой лес",
            "Место киносъёмок",
            "Профессиональное снаряжение",
            "Возможности для купания",
          ],
        };
      case 3:
        return {
          ...adventure,
          name: "Восход на Элла‑Рок",
          location: "Провинция Ува",
          duration: "Полдня",
          groupSize: "2–10 человек",
          description:
            "Пройдите через зелёные чайные плантации и туманные горы к вершине Элла‑Рок. Восхититесь рассветными видами на волнистые холмы Хайлендса.",
          highlights: [
            "Панорамные виды холмистой страны",
            "Тропы через чайные плантации",
            "Рассветная фотосъёмка",
            "Знакомство с местными деревнями",
            "Прогулка вдоль железной дороги",
            "Опыт облачного леса",
          ],
        };
      case 4:
        return {
          ...adventure,
          name: "Сафари на леопардов в Яле",
          location: "Южная провинция",
          duration: "Полный день",
          groupSize: "2–6 человек",
          description:
            "Откройте для себя главный заповедник Шри‑Ланки с самой высокой плотностью леопардов в мире. Встретьте слонов, губачей и более 200 видов птиц в их естественной среде.",
          highlights: [
            "Самая высокая плотность леопардов в мире",
            "Стада азиатских слонов",
            "Встречи с губачами",
            "200+ видов птиц",
            "Древние скальные образования",
            "Прибрежные ландшафты",
          ],
        };
      case 5:
        return {
          ...adventure,
          name: "Экспедиция в хребет Наклз",
          location: "Центральная провинция",
          duration: "2 дня",
          groupSize: "4–8 человек",
          description:
            "Исследуйте объект всемирного наследия ЮНЕСКО — горный хребет Наклз с уникальным биоразнообразием, облачными лесами и сложными вершинами. Истинное приключение для опытных треккеров.",
          highlights: [
            "Объект Всемирного наследия ЮНЕСКО",
            "Экосистемы облачных лесов",
            "Эндемичные виды флоры и фауны",
            "Горный кемпинг",
            "Открытие водопадов",
            "Проживание в деревнях",
          ],
        };
      case 6:
        return {
          ...adventure,
          name: "Наблюдение за китами в Мириссе",
          location: "Южная провинция",
          duration: "Полдня",
          groupSize: "10–30 человек",
          description:
            "Наблюдайте за величественными синими китами и игривыми дельфинами у побережья Мириссы — лучшем месте Шри‑Ланки для морских сафари.",
          highlights: [
            "Встречи с синими китами",
            "Стаи дельфинов",
            "Наблюдение за кашалотами",
            "Морская фотосъёмка",
            "Побережные пейзажи",
            "Знакомство с морской фауной",
          ],
        };
      case 7:
        return {
          ...adventure,
          name: "Подъём на скалу Сигирия",
          location: "Центральная провинция",
          duration: "Полдня",
          groupSize: "2–15 человек",
          description:
            "Поднимитесь на древнюю скалу‑крепость Сигирия, преодолев 1 200 ступеней к руинам дворца на вершине. История, искусство и приключение в одном культовом подъёме.",
          highlights: [
            "Древние руины дворца",
            "Знаменитая Зеркальная стена",
            "Фрески Сигирии",
            "Круговые виды с вершины",
            "Археологические чудеса",
            "Комплекс водных садов",
          ],
        };
      case 8:
        return {
          ...adventure,
          name: "Хортон‑Плейнс: Край Света",
          location: "Центральная провинция",
          duration: "Полный день",
          groupSize: "2–12 человек",
          description:
            "Пройдите по уникальным высокогорным равнинам Хортон‑Плейнс к драматическому обрыву Край Света (870 м) с потрясающими видами на южные равнины.",
          highlights: [
            "Смотровая площадка Край Света",
            "Водопад Бейкерс‑Фолс",
            "Высокогорные равнины",
            "Эндемичная дикая природа",
            "Участки облачного леса",
            "Наследие ЮНЕСКО",
          ],
        };
      default:
        return adventure;
    }
  });

  const filteredAdventures = localizedAdventures.filter((adventure) => {
    const categoryMatch =
      selectedCategory === "all" || adventure.category === selectedCategory;
    const difficultyMatch =
      selectedDifficulty === "all" ||
      adventure.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const sortedAdventures = filteredAdventures;

  const handleWhatsAppClick = () => {
    const number = t(`whatsapp.phoneNumber.${currentLanguage.code}`);
    const message = encodeURIComponent(t("whatsapp.message.adventure"));
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };


  const adventureToDestinationMap: Record<number, string> = {
    1: "9",  // Adam's Peak Sacred Climb -> Destination 9
    2: "10", // White Water Rafting Kitulgala -> Destination 10
    3: "11", // Ella Rock Sunrise Trek -> Destination 11
    4: "5",  // Yala Leopard Safari -> Destination 5
    5: "12", // Knuckles Range Expedition -> Destination 12
    6: "6",  // Mirissa Whale Watching -> Destination 6
    7: "1",  // Sigiriya Rock Climbing -> Destination 1
    8: "13", // Horton Plains World's End -> Destination 13
  };

  const handleArrowClick = (adventureId: number) => {
    const destId = adventureToDestinationMap[adventureId];
    if (destId) {
      navigateToDestination(destId);
    } else {
      navigateToPackages();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/Hero/Adventure.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            {t("adventure.hero.badge")}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t("adventure.hero.title")}
            </span>
            <br />
            <span className="text-white">{t("adventure.hero.subtitle")}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            {t("adventure.hero.desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t("adventure.hero.plan")}</span>
            </button>
            <a
              href="#adventures"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mountain className="w-5 h-5" />
              <span>{t("adventure.hero.explore")}</span>
            </a>
          </div>

          {/* Back to Home */}
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-colors duration-200 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("adventure.hero.back")}
          </a>
        </div>
      </section>

      {/* Adventure Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("adventure.categories.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("adventure.categories.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1).map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-emerald-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {t(category.labelKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.id === "hiking" &&
                      t("adventure.categories.hiking.desc")}
                    {category.id === "water" &&
                      t("adventure.categories.water.desc")}
                    {category.id === "wildlife" &&
                      t("adventure.categories.wildlife.desc")}
                    {category.id === "extreme" &&
                      t("adventure.categories.extreme.desc")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section
        id="adventures"
        className="py-8 bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {t("adventure.filters.title")}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {t(category.labelKey)}
                  </option>
                ))}
              </select>

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">{t("adventure.difficulty.all")}</option>
                <option value="easy">{t("adventure.difficulty.easy")}</option>
                <option value="moderate">
                  {t("adventure.difficulty.moderate")}
                </option>
                <option value="challenging">
                  {t("adventure.difficulty.challenging")}
                </option>
                <option value="extreme">
                  {t("adventure.difficulty.extreme")}
                </option>
              </select>
            </div>

            <div className="text-sm text-gray-600">
              {t("adventure.filters.showing").replace(
                "{count}",
                String(sortedAdventures.length)
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedAdventures.map((adventure) => (
              <div
                key={adventure.id}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${(adventure.image || "/placeholder.svg").replace(/^\//, "")}`}
                    alt={adventure.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Heart Icon */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <Heart className="w-5 h-5 text-white hover:text-red-400 transition-colors duration-300" />
                  </button>

                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    {(() => {
                      const isRu = currentLanguage.code === "ru";
                      const isYala = adventure.id === 4 || adventure.name === "Yala Leopard Safari";
                      const name = isRu && isYala ? "Сафари на леопардов в Яле" : adventure.name;
                      const location = isRu && isYala ? "Южная провинция" : adventure.location;
                      const duration = isRu && isYala ? "Полный день" : adventure.duration;
                      const groupSize = isRu && isYala ? "2–6 человек" : adventure.groupSize;
                      const description =
                        isRu && isYala
                          ? "Откройте для себя главный заповедник Шри‑Ланки с самой высокой плотностью леопардов в мире. Встретьте слонов, губачей и более 200 видов птиц в их естественной среде."
                          : adventure.description;
                      const highlights =
                        isRu && isYala
                          ? [
                              "Самая высокая плотность леопардов в мире",
                              "Стада азиатских слонов",
                              "Встречи с губачами",
                              ...adventure.highlights.slice(3),
                            ]
                          : adventure.highlights;

                      return (
                        <>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                            {name}
                          </h3>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {duration}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              <span className="font-semibold text-gray-900">
                                {adventure.rating}
                              </span>
                              <span className="text-gray-500 text-sm ml-1">
                                ({adventure.reviews} {isRu ? "отзывов" : "reviews"})
                              </span>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                            {description}
                          </p>

                          {/* Highlights */}
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {highlights.slice(0, 3).map((highlight) => (
                                <span
                                  key={highlight}
                                  className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium"
                                >
                                  {highlight}
                                </span>
                              ))}
                              {highlights.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                  +{highlights.length - 3} {isRu ? "еще" : "more"}
                                </span>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{t("adventure.bookNow")}</span>
                    </button>
                    <button
                      onClick={() => handleArrowClick(adventure.id)}
                      className="px-4 py-3 border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Adventures */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("adventure.why.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("adventure.why.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: t("adventure.why.safety.title"),
                description: t("adventure.why.safety.desc"),
              },
              {
                icon: Award,
                title: t("adventure.why.expert.title"),
                description: t("adventure.why.expert.desc"),
              },
              {
                icon: Users,
                title: t("adventure.why.groups.title"),
                description: t("adventure.why.groups.desc"),
              },
              {
                icon: Heart,
                title: t("adventure.why.authentic.title"),
                description: t("adventure.why.authentic.desc"),
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("adventure.cta.title")}
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            {t("adventure.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t("adventure.cta.chat")}</span>
            </button>
            <a
              href="tel:+94771234567"
              className="px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{t("adventure.cta.call")}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AdventuresPage() {
  return <AdventuresPageContent />;
}
