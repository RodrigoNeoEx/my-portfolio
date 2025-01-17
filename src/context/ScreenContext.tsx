import React, { createContext, useContext, useState, useEffect } from "react";

interface ScreenContextProps {
  isMobile: boolean;
  vertical: boolean;
  isGiantScreen: boolean;
  horizontalMob: boolean;
  isLoaded: boolean;
  isScrolled: boolean
  setIsLoaded: (loaded: boolean) => void;
  loading: boolean;
  isLoading: (loader: boolean) => void
}

const ScreenContext = createContext<ScreenContextProps | undefined>(undefined);

export const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [vertical, setVertical] = useState(window.innerWidth > 420);
  const [isGiantScreen, setGiantScreen] = useState((window.innerWidth > 1920));
  const [horizontalMob, setHorizontalMob] = useState(window.innerHeight < 550);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    const handleMobile = () => setIsMobile(window.innerWidth < 768);
    const handleVertical = () => setVertical(window.innerWidth > 420);
    const handleHorizontalMob = () => setHorizontalMob(window.innerHeight < 550);
    const handleGiantScreen = () => setGiantScreen(window.innerWidth > 1920); 
    const handleScroll = () => setIsScrolled(window.scrollY > 100);    

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleVertical);
    window.addEventListener("resize", handleHorizontalMob);
    window.addEventListener("resize", handleMobile);
    window.addEventListener("resize", handleGiantScreen);

    handleMobile();
    handleGiantScreen();
    handleVertical();
    handleHorizontalMob();
    handleScroll();

    console.log(isGiantScreen)

    return () => {
      window.removeEventListener("resize", handleMobile);
      window.removeEventListener("resize", handleVertical);
      window.removeEventListener("resize", handleHorizontalMob);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleGiantScreen);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ isMobile, vertical, isLoaded, isScrolled, horizontalMob, setIsLoaded, loading, isLoading, isGiantScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = () => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context;
};
