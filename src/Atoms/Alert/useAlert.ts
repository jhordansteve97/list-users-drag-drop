import { createContext, useContext } from "react";
import type { AlertContextProps } from "./Alert.interface";

// Contexto
export const AlertContext = createContext<AlertContextProps | undefined>(undefined);
export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert debe estar dentro de <AlertProvider>");
  return context;
};