import type { ItemMenuProps } from "../ItemMenu/itemMenu.interface";

export interface SidebarProps {
  isSidebarOpen: boolean;
  logo?: string;
  options: ItemMenuProps[];
  color?: "primary" | "secondary" | "normal";
}