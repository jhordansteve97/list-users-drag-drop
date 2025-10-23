// Tipos
export type AlertStatus = "success" | "error" | "warning" | "info";
export type AlertPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface AlertMessage {
  id: number;
  message: string;
  status: AlertStatus;
}

export interface AlertContextProps {
  addAlert: (message: string, status: AlertStatus) => void;
}