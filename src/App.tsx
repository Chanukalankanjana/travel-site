"use client";

import { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Destinations from "./pages/Distinations";
import DestinationDetail from "./pages/DestinationDetail";

function App() {
  const [currentPage, setCurrentPage] = useState("destinations");
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
        setCurrentPage("destinations");
        setDestinationId(null);
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

  // Function to navigate to destination detail
  const navigateToDestination = (id: string) => {
    window.history.pushState({}, "", `/destination/${id}`);
    setDestinationId(id);
    setCurrentPage("destination-detail");
  };

  // Function to navigate back to destinations
  const navigateToDestinations = () => {
    window.history.pushState({}, "", "/destinations");
    setCurrentPage("destinations");
    setDestinationId(null);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        {currentPage === "destinations" && (
          <Destinations onNavigateToDestination={navigateToDestination} />
        )}
        {currentPage === "destination-detail" && destinationId && (
          <DestinationDetail
            destinationId={destinationId}
            onNavigateBack={navigateToDestinations}
          />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
