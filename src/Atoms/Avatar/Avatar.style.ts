import clsx from "clsx";
import type { avatarColorType, avatarVariantType } from "./Avatar.interface";
import type { color } from "@/Interfaces";

const base =
  "relative inline-block h-12 w-12 rounded-full border-2 border-white dark:border-gray-500 object-cover object-center hover:z-10 focus:z-10";

export const avatarVariantStyle = (variant: avatarVariantType) => {
  return clsx(
    "flex items-center",
    variant === "normal" && "mt-4",
    variant === "group" && "-space-x-4"
  );
};

export const imgAvatars = (color: avatarColorType) => {
  return clsx(
    base,
    color === undefined || (color === "normal" && "hover:border-gray-500"),
    color === "primary" && "hover:border-primary",
    color === "secondary" && "hover:border-secondary"
  );
};

export const imgAvatar = (color: color) => {
  return clsx(
    base,
    color === "normal" && "hover:border-gray-500",
    color === "primary" && "hover:border-primary",
    color === "secondary" && "hover:border-secondary"
  );
};
