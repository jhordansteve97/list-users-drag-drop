import type { color } from "@/Interfaces";

export type avatarVariantType = "group" | "normal";
export type avatarColorType = color | undefined;

/**
 * AvatarImg — Imagen con tooltip.
 */
export interface AvatarImgProps {
  /** Texto mostrado en tooltip */
  tooltip: string;
  /** URL de la imagen */
  img: string;
  /** Indica si está activo */
  activate?: boolean;
  color?: color;
}

/**
 * Avatar — Representa un usuario individual o en grupo.
 */
export interface AvatarProps {
  variant?: avatarVariantType;
  img: string | AvatarImgProps[];
  tooltip?: string;
  color?: color;
  activate?: boolean;
  /** Número mostrado en contador (+x) */
  count?: number;
  onClick?: () => void;
}