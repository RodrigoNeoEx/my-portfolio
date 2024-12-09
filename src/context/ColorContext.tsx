import React, { createContext, useContext, useState } from "react";

interface ColorContextProps {
  contactColor: boolean;
  setContactColor: (clicked: boolean) => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contactColor, setContactColor] = useState(false);

  return (
    <ColorContext.Provider value={{ contactColor, setContactColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom Hook para facilitar o uso
export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorContextProvider");
  }
  return context;
};


