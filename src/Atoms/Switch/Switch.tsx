import { useState } from "react";
import clsx from "clsx";
import type { SwitchProps } from "./Switch.interface";

export const Switch = ({
  checked,
  onChange,
  name,
  label,
  variant = "both",
  labelLeft = "Off",
  labelRight = "On",
  disabled = false,
  color = "primary",
  className,
}: SwitchProps & { name?: string }) => {
  // Estado interno si no es controlado
  const [localChecked, setLocalChecked] = useState(false);

  const isControlled = checked !== undefined && onChange !== undefined;
  const currentChecked = isControlled ? checked : localChecked;

  const handleToggle = () => {
    if (disabled) return;

    if (isControlled) {
      onChange(!checked);
    } else {
      setLocalChecked(!localChecked);
    }
  };

  const trackBase =
    "relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none";

  const trackColor =
    color === "primary"
      ? currentChecked
        ? "bg-primary dark:bg-darkprimary"
        : "bg-gray-300 dark:bg-gray-500"
      : currentChecked
      ? "bg-secondary dark:bg-darksecondary"
      : "bg-gray-300 dark:bg-gray-500";

  const knobBase =
    "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform";

  return (
    <div>
      <p className="text-center dark:text-darkforeground">{label}</p>
      <div className="flex justify-center">
        <div className={clsx("flex items-center gap-2", className)}>
          {/* Label izquierdo */}
          {(variant === "both" || variant === "left") && (
            <span className="text-sm dark:text-darkforeground select-none">
              {labelLeft}
            </span>
          )}

          <button
            type="button"
            role="switch"
            aria-checked={currentChecked}
            aria-disabled={disabled}
            onClick={handleToggle}
            disabled={disabled}
            className={clsx(trackBase, trackColor, disabled && "opacity-60 pointer-events-none")}
          >
            <span
              className={clsx(knobBase, currentChecked ? "translate-x-6" : "translate-x-1")}
              aria-hidden="true"
            />
          </button>

          {/* Label derecho */}
          {(variant === "both" || variant === "right") && (
            <span className="text-sm dark:text-darkforeground select-none">
              {labelRight}
            </span>
          )}

          {/* Hidden input para useActionState */}
          {!isControlled && name && (
            <input type="hidden" name={name} value={currentChecked ? "true" : "false"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Switch;
