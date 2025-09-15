"use client";

import { createContext, useContext, ReactNode } from "react";

interface NavigationContextType {
  navigateToHome: () => void;
  navigateToDestinations: () => void;
  navigateToDestination: (id: string) => void;
  navigateToAbout: () => void;
  navigateToContact: () => void;
  navigateToGallery: () => void;
  navigateToPackages: () => void;
  navigateToAdventure: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export function NavigationProvider({
  children,
  navigationFunctions,
}: {
  children: ReactNode;
  navigationFunctions: NavigationContextType;
}) {
  return (
    <NavigationContext.Provider value={navigationFunctions}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
