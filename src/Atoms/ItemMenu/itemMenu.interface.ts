import type { color } from "@interfaces";

export interface UserMenuOptionsProps {
  id: string;
  /** Ruta de navegación */
  to: string;
  /** Texto mostrado */
  label: string;
  disabled?: boolean;
}

/**
 * ItemMenu — Grupo de opciones con etiqueta e ícono.
 */
export interface ItemMenuProps {
  options: UserMenuOptionsProps[];
  label: string;
  icon?: React.ReactNode;
  color?: color;
}
