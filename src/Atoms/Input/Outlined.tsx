import { forwardRef } from "react";
import clsx from "clsx";
import type { InputProps } from "@/Interfaces/components.interface";

export const Outlined = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const {
      label, id, value, onChange, onBlur, onClick, error, textField, placeholder, multiple, autoComplete,
      fullWidth, disabled, adornments, type = "text", isRequired, color="primary", size="medium", accept, defaultValue
    } = props;

    return (
      <div
        className={clsx(
          "bg-paper dark:bg-darkpaper rounded",
          fullWidth ? "w-full" : "max-w-sm",
          disabled && "opacity-50 cursor-no-drop"
        )}
      >
        <div className="relative bg-inherit">
          <input
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onClick={onClick}
            type={type}
            title={label}
            placeholder={placeholder || label}
            disabled={disabled}
            ref={ref}
            multiple={multiple}
            autoComplete={autoComplete ?? "off"}
            accept={accept}
            defaultValue={defaultValue}
            className={clsx(
              "peer bg-transparent w-full rounded placeholder-transparent ring-2 px-2 ring-gray-500 dark:ring-darkforeground text-foreground dark:text-darkforeground focus:outline-none outline-none",
              {
                "focus:ring-primary dark:focus:ring-darkprimary": color === "primary",
                "focus:ring-secondary dark:focus:ring-darksecondary": color === "secondary",
                "ring-red-500 focus:ring-red-600 text-red-700": error,
                "h-10": size === "medium",
                "h-13": size === "large",
                "opacity-50 cursor-no-drop": disabled,
              }
            )}
          />
          {adornments && (
            <div
              style={{ borderRadius: "0 4px 4px 0" }}
              className={clsx(
                "text-gray-400 dark:text-gray-200 absolute top-0 right-1 flex items-center justify-center",
                {
                  "h-10 w-9": size === "medium",
                  "h-13 w-12": size === "large",
                }
              )}
            >
              {adornments}
            </div>
          )}
          <label
            htmlFor={id}
            className={clsx(
              "absolute cursor-text left-0 bg-inherit mx-1 px-1 -top-3 peer-focus:-top-3 peer-placeholder-shown:text-base peer-focus:text-sm transition-all text-foreground dark:text-darkforeground",
              {
                "peer-focus:text-primary dark:peer-focus:text-darkprimary": color === "primary",
                "peer-focus:text-secondary dark:peer-focus:text-darksecondary": color === "secondary",
                "text-red-500": error,
                "peer-placeholder-shown:top-2": size === "medium",
                "peer-placeholder-shown:top-3": size === "large",
                "opacity-50 cursor-no-drop": disabled
              }
            )}
          >
            {label} {isRequired && <span className="text-red-500">*</span>}
          </label>
        </div>
        {error && (
          <p
            className={clsx(
              "flex items-center mt-2 text-xs",
              error && "text-red-500"
            )}
          >
            {textField}
          </p>
        )}
      </div>
    );
  }
);
