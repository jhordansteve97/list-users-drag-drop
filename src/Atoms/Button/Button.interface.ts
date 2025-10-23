import type { color, PropsGeneralComponents } from "@/Interfaces";

/**
 * Button - buton para llamar funciones.
 */

export interface ButtonProps extends Omit<PropsGeneralComponents, "color" | "value" | "onChange" | "onBlur"> {
  /** add content to the button */
  children: React.ReactNode;
  /** gives the full width and height of the button */
  full?: boolean;
  /** change the layout of the entry */
  variant?: "outlined" | "text" | "contained" | "standard";
  /** change the color of the input */
  color?: color | "black";
  /** select the button type */
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  className?: string;
}