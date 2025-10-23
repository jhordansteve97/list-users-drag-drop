import { createContext, useContext } from "react";

interface ThemeContextType {
  dark: boolean;
  setDark: (value: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useAppContext debe usarse dentro de AppProvider");
  return context;
};
