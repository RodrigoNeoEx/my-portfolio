import React, { createContext, useContext, useState, useEffect } from "react";

interface ScreenContextProps {
  isMobile: boolean;
  vertical: boolean;
  horizontalMob: boolean;
  isLoaded: boolean;
  isScrolled: boolean
  setIsLoaded: (loaded: boolean) => void;
}

const ScreenContext = createContext<ScreenContextProps | undefined>(undefined);

export const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [vertical, setVertical] = useState(window.innerWidth > 400);
  const [horizontalMob, setHorizontalMob] = useState(window.innerHeight < 550);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setVertical(window.innerWidth > 400);
      setHorizontalMob(window.innerHeight < 550)    
    };

    const handleScroll = () => setIsScrolled(window.scrollY > 100);    

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleMobile);

    handleMobile();

    return () => {
      window.removeEventListener("resize", handleMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ isMobile, vertical, isLoaded, isScrolled, horizontalMob, setIsLoaded }}>
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
