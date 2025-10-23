import clsx from "clsx";

type Variant = "standard" | "contained" | "text" | "outlined";
type Color = "primary" | "secondary" | "normal" | "black";
type Size = "medium" | "large";

interface ButtonClassProps {
  variant: Variant;
  color: Color;
  size?: Size;
  full?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const getButtonClasses = ({
  variant,
  color,
  size,
  full,
  fullWidth,
  disabled,
}: ButtonClassProps) => {
  const base = "hover:opacity-50 flex items-center justify-center rounded-[6px] px-3";

  const sizeClasses = {
    medium: "h-10",
    large: "h-13",
  };

  const fullClasses = full ? "h-full w-full" : "";
  const fullWidthClasses = fullWidth ? "w-full px-0" : "";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const variantClasses: Record<Variant, Record<Color, string>> = {
    standard: {
      primary: "px-3 bg-bgprimary dark:bg-darkbgprimary hover:bg-primary dark:hover:bg-darkprimary text-primary dark:text-darkprimary hover:text-textprimary dark:hover:text-darktextprimary rounded-none",
      secondary: "px-3 bg-bgsecondary dark:bg-darkbgsecondary hover:bg-secondary dark:hover:bg-darksecondary text-secondary dark:text-darksecondary hover:text-textsecondary dark:hover:text-darktextsecondary rounded-none",
      normal: "px-3 bg-background dark:bg-darkbackground hover:bg-background dark:hover:bg-darkbackground text-foreground dark:text-darkforeground hover:text-black dark:hover:text-white rounded-none",
      black: "",
    },
    contained: {
      primary: "bg-primary dark:bg-darkprimary text-textprimary dark:text-dark:textprimary",
      secondary: "bg-secondary dark:bg-darksecondary text-textsecondary dark:text-darktextsecondary",
      normal: "bg-background dark:bg-darkbackground text-foreground dark:text-darkforeground",
      black: "",
    },
    text: {
      primary: "bg-transparent text-primary dark:text-darkprimary px-0",
      secondary: "bg-transparent text-secondary dark:text-darksecondary px-0",
      normal: "bg-transparent text-white px-0",
      black: "bg-transparent text-black px-0",
    },
    outlined: {
      primary: "bg-transparent text-primary dark:text-darkprimary border border-primary dark:border-darkprimary hover:bg-bgprimary dark:hover:bg-darkbgprimary",
      secondary: "bg-transparent text-secondary dark:text-darksecondary border border-secondary dark:border-darksecondary hover:bg-bgsecondary dark:hover:bg-darkbgsecondary",
      normal: "bg-transparent text-foreground dark:text-darkforeground border border-foreground dark:border-darkforeground hover:bg-foreground dark:hover:bg-darkforeground",
      black: "",
    },
  };

  return clsx(base, size ? sizeClasses[size] : "", fullClasses, fullWidthClasses, disabledClasses, variantClasses[variant]?.[color]);
};