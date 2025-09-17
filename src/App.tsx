"use client";

import { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavigationProvider } from "./contexts/NavigationContext";

// Import all pages
import HomePage from "./app/page";
import Destinations from "./pages/Distinations";
import DestinationDetail from "./pages/DestinationDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Packages from "./pages/Packages";
import Adventure from "./pages/Adventure";

type Route =
  | "home"
  | "destinations"
  | "destination-detail"
  | "about"
  | "contact"
  | "gallery"
  | "packages"
  | "adventure";

function App() {
  const [currentPage, setCurrentPage] = useState<Route>("home");
  const [destinationId, setDestinationId] = useState<string | null>(null);

  useEffect(() => {
    // Handle URL changes
    const handleRouteChange = () => {
      const path = window.location.pathname;

      if (path.startsWith("/destination/")) {
        const id = path.split("/destination/")[1];
        setDestinationId(id);
        setCurrentPage("destination-detail");
      } else {
        // Reset destination ID for all other routes
        setDestinationId(null);

        // Set page based on path
        switch (path) {
          case "/":
          case "/home":
            setCurrentPage("home");
            break;
          case "/destinations":
            setCurrentPage("destinations");
            break;
          case "/about":
            setCurrentPage("about");
            break;
          case "/contact":
            setCurrentPage("contact");
            break;
          case "/gallery":
            setCurrentPage("gallery");
            break;
          case "/packages":
            setCurrentPage("packages");
            break;
          case "/adventure":
            setCurrentPage("adventure");
            break;
          default:
            setCurrentPage("home");
        }
      }
    };

    // Initial route check
    handleRouteChange();

    // Listen for browser back/forward
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // Navigation functions
  const navigateToHome = () => {
    window.history.pushState({}, "", "/");
    setCurrentPage("home");
    setDestinationId(null);
  };

  const navigateToDestinations = () => {
    window.history.pushState({}, "", "/destinations");
    setCurrentPage("destinations");
    setDestinationId(null);
  };

  const navigateToDestination = (id: string) => {
    window.history.pushState({}, "", `/destination/${id}`);
    setDestinationId(id);
    setCurrentPage("destination-detail");
  };

  const navigateToAbout = () => {
    window.history.pushState({}, "", "/about");
    setCurrentPage("about");
    setDestinationId(null);
  };

  const navigateToContact = () => {
    window.history.pushState({}, "", "/contact");
    setCurrentPage("contact");
    setDestinationId(null);
  };

  const navigateToGallery = () => {
    window.history.pushState({}, "", "/gallery");
    setCurrentPage("gallery");
    setDestinationId(null);
  };

  const navigateToPackages = () => {
    window.history.pushState({}, "", "/packages");
    setCurrentPage("packages");
    setDestinationId(null);
  };

  const navigateToAdventure = () => {
    window.history.pushState({}, "", "/adventure");
    setCurrentPage("adventure");
    setDestinationId(null);
  };

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "destinations":
        return <Destinations onNavigateToDestination={navigateToDestination} />;
      case "destination-detail":
        return destinationId ? (
          <DestinationDetail
            destinationId={destinationId}
            onNavigateBack={navigateToDestinations}
          />
        ) : null;
      case "about":
        return <AboutUs />;
      case "contact":
        return <ContactUs />;
      case "gallery":
        return <Gallery />;
      case "packages":
        return <Packages />;
      case "adventure":
        return <Adventure />;
      default:
        return <HomePage />;
    }
  };

  const navigationFunctions = {
    navigateToHome,
    navigateToDestinations,
    navigateToDestination,
    navigateToAbout,
    navigateToContact,
    navigateToGallery,
    navigateToPackages,
    navigateToAdventure,
  };

  return (
    <LanguageProvider>
      <NavigationProvider navigationFunctions={navigationFunctions}>
        <div className="min-h-screen bg-white">
          {/* Only show Header and Footer for pages that don't have them built-in */}
          {currentPage !== "home" && currentPage !== "destination-detail" && (
            <>
              <Header />
              <main>{renderCurrentPage()}</main>
              <Footer />
            </>
          )}

          {/* Pages with built-in Header/Footer */}
          {(currentPage === "home" || currentPage === "destination-detail") &&
            <>
              <Header />
              {renderCurrentPage()}
              <Footer />
            </>}
        </div>
      </NavigationProvider>
    </LanguageProvider>
  );
}

export default App;
