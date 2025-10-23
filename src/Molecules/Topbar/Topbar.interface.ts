import type { color } from "@/interfaces";

/**
 * Topbar - Barra superior (Menu)
 */
export interface TopbarProps {
  onToggleSidebar: () => void;
  title: string;
  color?: color;
  to: string;
}