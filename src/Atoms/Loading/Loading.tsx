import type { colorInput } from '@interfaces';
import './loading.css';
import clsx from 'clsx';

interface LoadingProps {
  variant?: "letters" | "spinner";
  color?: colorInput | "black" | "white";
  size?: "small" | "large";
}

export const Loading = ({variant = "spinner", color = "primary", size="large"}: LoadingProps) => {
  switch (variant) {
    case "letters":
      return <span className={clsx(
        "loaderLetters",
        color === "primary" && "text-shadow-primary dark:text-shadow-darkprimary text-background dark:text-darkbackground after:text-primary dark:after:text-darkprimary",
        color === "secondary" && "text-shadow-secondary dark:text-shadow-darksecondary text-background dark:text-darkbackground after:text-secondary dark:after:text-darksecondary",
        color === "white" && "text-shadow-white text-gray-500 after:text-white",
        color === "black" && "text-shadow-black text-gray-300 after:text-black",
        size === "large" && "text-[48px]",
        size === "small" && "text-[20px]",
      )}>Cargando</span>
    case "spinner":
      return <span className={clsx("spinner",
        color === "primary" && "before:border-primary dark:before:border-darkprimary",
        color === "secondary" && "before:border-secondary dark:before:border-darksecondary",
        color === "white" && "before:border-white",
        color === "black" && "before:border-black",
        size === "large" && "w-[48px] h-[48px] before:border-[5px]",
        size === "small" && "w-[20px] h-[20px] before:border-[2px]",
      )}></span>
  }
}
