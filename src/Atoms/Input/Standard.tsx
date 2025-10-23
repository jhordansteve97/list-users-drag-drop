import { forwardRef } from "react";
import clsx from "clsx";
import type { InputProps } from "@/Interfaces/components.interface";

export const Standard = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const {
      label, id, value, onChange, onBlur, onClick, error, textField, placeholder, multiple, autoComplete,
      fullWidth, disabled, adornments, type = "text", isRequired, color="primary", size="medium", accept, defaultValue
    } = props;

    return (
      <div className={clsx(
        "my-7", fullWidth ? "w-full" : "max-w-sm",
        disabled && "opacity-50 cursor-no-drop"
      )}>
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
              "peer bg-paper dark:bg-darkpaper w-full rounded placeholder-transparent px-2 border-b-3 focus:outline-none outline-none text-foreground dark:text-darkforeground",
              {
                "focus:border-primary dark:focus:border-darkprimary focus:bg-bgprimary dark:focus:bg-darkbgprimary": color === "primary",
                "focus:border-secondary dark:focus:border-darksecondary focus:bg-bgsecondary dark:focus:bg-darkbgsecondary":
                  color === "secondary",
                "text-red-700 border-b-3 border-red-500": error,
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
                "text-gray-400 dark:text-gray-200 top-0 right-0 flex items-center justify-center absolute bg-transparent",
                {
                  "h-9 w-11": size === "medium",
                  "h-12 w-14": size === "large",
                }
              )}
            >
              {adornments}
            </div>
          )}
          <label
            htmlFor={id}
            className={clsx(
              "absolute text-foreground dark:text-darkforeground cursor-text left-0 -top-6 bg-inherit mx-0 px-0 peer-placeholder-shown:text-base",
              "peer-focus:-top-6 peer-focus:text-sm transition-all peer-focus:mx-0 peer-placeholder-shown:px-1",
              "peer-placeholder-shown:text-foreground dark:peer-placeholder-shown:text-darkforeground peer-focus:px-0 peer-placeholder-shown:mx-1",
              {
                "peer-focus:text-primary dark:peer-focus:text-darkprimary": color === "primary",
                "peer-focus:text-secondary dark:peer-focus:text-darksecondary": color === "secondary",
                "text-red-500": error,
                "peer-placeholder-shown:top-2": size === "medium",
                "peer-placeholder-shown:top-3": size === "large",
                "opacity-50 cursor-no-drop": disabled,
              }
            )}
          >
            {label} {isRequired && <span className="text-red-500">*</span>}
          </label>
        </div>
        {error && (
          <p
            className={clsx(
              "flex items-center mt-2 text-xs bg-background",
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
