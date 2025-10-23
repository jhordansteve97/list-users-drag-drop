import clsx from "clsx";
import type { color } from "@/interfaces";

export const itemMenuStyle = (color: color) => {
  return clsx(
    "w-full flex justify-between items-center py-3 px-6  cursor-pointer focus:outline-none",
    {
      "hover:bg-bgprimary dark:hover:bg-darkbgprimary hover:text-foreground dark:hover:text-darkforeground text-textprimary dark:text-darktextprimary":
        color === "primary",
      "hover:bg-bgsecondary dark:hover:bg-darkbgsecondary hover:text-foreground dark:hover:text-darkforeground text-textsecondary dark:text-darktextsecondary":
        color === "secondary",
      "hover:bg-background dark:hover:bg-darkbackground text-foreground dark:text-darkforeground":
        color === "normal",
    }
  );
};
