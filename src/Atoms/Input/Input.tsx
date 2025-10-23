
import type { InputProps } from "@/Interfaces";
import { Filled } from "./Filled";
import { Outlined } from "./Outlined";
import { Standard } from "./Standard";


export const Input = ({variant = "filled", ...props}: InputProps) => {
  switch (variant) {
    case "standard":
      return <Standard {...props} />
    case "filled":
      return <Filled {...props} />
    case "outlined":
      return <Outlined {...props} />
  }
};