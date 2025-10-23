import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";
import type { ItemMenuProps } from "./itemMenu.interface";
import { Button } from "@atoms";
import { itemMenuStyle } from "./itemMenu.style";
import clsx from "clsx";

export const ItemMenu = ({ label, icon, options, color="normal" }: ItemMenuProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={itemMenuStyle(color)}
      >
        <span className="flex items-center">
          {icon}
          <span className="mx-4 font-medium">{label}</span>
        </span>

        <span>{open ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
      </button>
      {open && (
        <div className={clsx(
          color === "normal" && "bg-background dark:bg-darkbackground",
          color === "primary" && "bg-primary dark:bg-darkprimary",
          color === "secondary" && "bg-secondary dark:bg-darksecondary",
        )}>
          {options.map((option) => (
            <Button
              key={option.id}
              disabled={option.disabled}
              onClick={() => navigate(option.to)}
              variant="standard"
              color={color}
              fullWidth
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
