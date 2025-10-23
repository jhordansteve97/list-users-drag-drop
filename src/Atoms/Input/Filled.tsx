import { forwardRef } from "react";
import clsx from "clsx";
import type { InputProps } from "@/Interfaces/components.interface";

export const Filled = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const {
      label, id, value, onChange, onBlur, onClick, error, textField, placeholder, multiple, autoComplete,
      fullWidth, disabled, adornments, type = "text", isRequired, color="primary", size="medium", accept, defaultValue
    } = props;

    return (
      <div
        className={clsx(
          "min-w-[90px] my-3",
          fullWidth ? "w-full" : "max-w-sm",
          disabled && "opacity-50 cursor-no-drop"
        )}
      >
        <div>
          <label
            htmlFor={id}
            className={clsx("block mb-1 text-sm text-foreground dark:text-darkforeground", error && "text-red-500", disabled && "opacity-50 cursor-no-drop")}
          >
            {label} {isRequired && <span className="text-red-500">*</span>}
          </label>
          <div className="relative">
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
              autoComplete={autoComplete ?? "off"}
              multiple={multiple}
              accept={accept}
              defaultValue={defaultValue}
              className={clsx(
                "w-full bg-transparent px-3 py-2 transition duration-300 ease focus:outline-none rounded focus:shadow-md shadow-sm border-2",
                "text-foreground dark:text-darkforeground placeholder:text-gray-400 dark:placeholder:text-gray-200",
                {
                  "h-10": size === "medium",
                  "h-13": size === "large",
                  "focus:border-primary dark:focus:border-darkprimary": color === "primary",
                  "focus:border-secondary dark:focus:border-darksecondary": color === "secondary",
                  "placeholder:text-red-500 text-red-700 border-red-400": error,
                  "opacity-50 cursor-no-drop": disabled
                }
              )}
            />
            {adornments && (
              <div
                style={{ borderRadius: "0 4px 4px 0" }}
                className={clsx(
                  "text-gray-400 top-1 right-1 flex items-center justify-center absolute",
                  {
                    "h-8 w-10": size === "medium",
                    "h-12 w-14": size === "large",
                  }
                )}
              >
                {adornments}
              </div>
            )}
          </div>
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
