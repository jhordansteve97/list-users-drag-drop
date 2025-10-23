import type { ButtonProps } from "./Button.interface";
import { getButtonClasses } from "./ButtonStyle";

export const Button = ({
  onClick,
  fullWidth,
  variant = "contained",
  color = "primary",
  size = "medium",
  children,
  full,
  type="button",
  disabled,
  style,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonClasses({ variant, color, size, full, fullWidth, disabled })} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};