import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

interface Adventure {
  id: number;
  key: string;
  tagColor: string;
  image: string;
}

interface SriLankaAdventuresProps {
  heroBackgroundImage?: string;
  heroGradientOverlay?: string;
}

const SriLankaAdventures: React.FC<SriLankaAdventuresProps> = ({
  heroBackgroundImage = "adventureHero.webp",
  heroGradientOverlay = "linear-gradient(135deg, rgba(52, 52, 52, 0.7), rgba(202, 197, 197, 0.5))",
}) => {
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedElements, setAnimatedElements] = useState<Set<number>>(new Set());
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const adventures: Adventure[] = [
    {
      id: 1,
      key: "whale",
      tagColor: "from-blue-500 to-blue-600",
      image: "whaleWatch.webp",
    },
    {
      id: 2,
      key: "hiking",
      tagColor: "from-green-500 to-green-600",
      image: "hicking.webp",
    },
    {
      id: 3,
      key: "safari",
      tagColor: "from-yellow-500 to-orange-500",
      image: "safari.webp",
    },
    {
      id: 4,
      key: "ancient",
      tagColor: "from-purple-500 to-purple-600",
      image: "/images/adventures/ancient-adventure.jpg",
    },
    {
      id: 5,
      key: "rafting",
      tagColor: "from-cyan-500 to-blue-500",
      image: "/images/adventures/rafting-adventure.jpg",
    },
    {
      id: 6,
      key: "train",
      tagColor: "from-red-500 to-pink-500",
      image: "/images/adventures/train-adventure.jpg",
    },
    {
      id: 7,
      key: "beach",
      tagColor: "from-teal-500 to-cyan-500",
      image: "/images/adventures/beach-adventure.jpg",
    },
    {
      id: 8,
      key: "temple",
      tagColor: "from-amber-500 to-orange-500",
      image: "/images/adventures/temple-adventure.jpg",
    },
    {
      id: 9,
      key: "spice",
      tagColor: "from-orange-500 to-red-500",
      image: "/images/adventures/spice-adventure.jpg",
    },
    {
      id: 10,
      key: "rainforest",
      tagColor: "from-emerald-500 to-green-600",
      image: "/images/adventures/rainforest-adventure.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = parseInt(entry.target.getAttribute("data-id") || "0");
            setAnimatedElements((prev) => new Set([...prev, elementId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionTitleRef.current) {
      observer.observe(sectionTitleRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const heroStyle: React.CSSProperties = {
    background: heroBackgroundImage
      ? `${heroGradientOverlay}, url(${heroBackgroundImage}) center/cover no-repeat`
      : heroGradientOverlay,
    minHeight: "100vh",
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <Header />
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center text-white min-h-screen"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative z-10 max-w-4xl px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider drop-shadow-lg">
            {t("srilankaadventures.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
            {t("srilankaadventures.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Adventures Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={sectionTitleRef}
            data-id="0"
            className={`text-center mb-20 transition-all duration-1000 ${
              animatedElements.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 relative">
              {t("srilankaadventures.section.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("srilankaadventures.section.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure, index) => (
              <div
                key={adventure.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-id={adventure.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 ${
                  animatedElements.has(adventure.id)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-16 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={adventure.image}
                    alt={t(`srilankaadventures.${adventure.key}.title`)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = "/images/fallback-adventure.jpg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/20" />
                </div>
                <div className="p-8">
                  <div
                    className={`inline-block px-4 py-2 rounded-full text-white font-semibold text-sm mb-4 bg-gradient-to-r ${adventure.tagColor}`}
                  >
                    {t(`srilankaadventures.${adventure.key}.tag`)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    {t(`srilankaadventures.${adventure.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    {t(`srilankaadventures.${adventure.key}.description`)}
                  </p>
                  <div className="text-gray-500 text-sm flex items-center gap-2">
                    {t(`srilankaadventures.${adventure.key}.duration`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-out;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default SriLankaAdventures;