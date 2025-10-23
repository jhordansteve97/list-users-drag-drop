import type { color } from "@/Interfaces";
import clsx from "clsx";

interface HeaderTopbarStyleProps {
  color: color;
  scrolled: boolean;
}

export const headerTopbarStyle = ({color, scrolled}:HeaderTopbarStyleProps ) => {
  const style = clsx(
        "flex items-center justify-between p-4 shadow-lg fixed h-20 w-full z-20", {
          "bg-background dark:bg-darkbackground text-foreground dark:text-darkforeground": color === "normal",
          "bg-background/50 dark:bg-darkbackground/50 backdrop-blur-sm dark:backdrop-blur-sm text-foreground dark:text-darkforeground": color === "normal" && scrolled,
          "bg-primary text-textprimary dark:bg-darkprimary dark:text-darktextprimary": color === "primary",
          "bg-primary/50 backdrop-blur-sm text-textprimary dark:bg-darkbgprimary/10 dark:backdrop-blur-sm": color === "primary" && scrolled,
          "bg-secondary dark:bg-darksecondary text-textsecondary dark:text-darktextsecondary": color === "secondary",
          "bg-secondary/50 dark:bg-darksecondary/50 backdrop-blur-sm dark:backdrop-blur-sm text-textsecondary dark:text-darktextsecondary": color === "secondary" && scrolled,
        }
      );
  return style;
}