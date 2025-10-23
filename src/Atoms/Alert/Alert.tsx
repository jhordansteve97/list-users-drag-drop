import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import clsx from "clsx";
import { AlertContext } from "./useAlert";
import type { AlertMessage, AlertPosition, AlertStatus } from "./Alert.interface";
import { positionClasses, statusClasses } from "./Alert.style";

// Provider
export const AlertProvider = ({
  children,
  position = "top-right",
}: {
  children: React.ReactNode;
  position?: AlertPosition;
}) => {
  const [alerts, setAlerts] = useState<AlertMessage[]>([]);

  const addAlert = (message: string, status: AlertStatus) => {
    setAlerts((prev) => [...prev, { id: Date.now(), message, status }]);
  };

  const removeAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ addAlert }}>
      {children}
      <div
        className={clsx(
          "fixed z-50 flex flex-col gap-2 max-w-sm",
          positionClasses[position]
        )}
      >
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={clsx(
              "flex items-center justify-between px-4 py-2 rounded shadow-md animate-fade-in",
              statusClasses[alert.status]
            )}
          >
            <span>{alert.message}</span>
            <button
              onClick={() => removeAlert(alert.id)}
              className="ml-3 text-white hover:text-gray-200"
            >
              <RxCross1 />
            </button>
          </div>
        ))}
      </div>
    </AlertContext.Provider>
  );
};