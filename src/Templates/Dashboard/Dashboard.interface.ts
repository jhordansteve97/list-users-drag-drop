import type { ItemMenuProps } from "@/Atoms/ItemMenu/itemMenu.interface";

export interface DashboardProps {
  children: React.ReactNode;
  optionsSidebar: ItemMenuProps[];
  logo?: string;
  color?: "primary" | "secondary" | "normal";
  to: string;
  title: string
}