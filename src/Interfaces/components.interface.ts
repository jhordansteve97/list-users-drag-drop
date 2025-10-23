import React from "react";

/**
 * Props generales compartidas entre los distintos inputs.
 */
export interface PropsGeneralComponents {
  /** Valor actual del elemento */
  value?: string | number;
  /** Función que obtiene el valor ingresado por el usuario */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Se ejecuta al perder el foco */
  onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  /** Acción al hacer click en el elemento */
  onClick?: () => void;
  /** Ocupa el ancho disponible si es `true` */
  fullWidth?: boolean;
  /** Deshabilita el componente */
  disabled?: boolean;
  /** Define el color del componente */
  color?: colorInput;
  /** Define el tamaño del componente */
  size?: "medium" | "large";
}

/** Color - colores para el diseño */
export type color = "primary" | "secondary" | "normal";

/** Color Input - colores de inputs */
export type colorInput = "primary" | "secondary";
export type variantInput = "outlined" | "filled" | "standard";


/**
 * Input General — Caja de texto que permite distintos tipos de entrada.
 */
export interface InputProps extends PropsGeneralComponents {
  /** Texto descriptivo encima del input */
  label?: string;
  /** Identificador único (también se usa como `name`) */
  id: string;
  /** Marca el input con estilo de error */
  error?: boolean;
  /** Mensaje informativo debajo del input */
  textField?: string;
  /** Texto mostrado si no hay valor */
  placeholder?: string;
  /** Elemento al final del input (ej. ícono o botón) */
  adornments?: string | React.ReactNode;
  /** Tipo de input */
  type?: "text" | "email" | "password" | "number" | "file";
  /** Indica si es obligatorio (agrega *) */
  isRequired?: boolean;
  /** Variante visual del input */
  variant?: variantInput;
  /** Permitir múltiples valores (ej. archivos) */
  multiple?: boolean;
  /** Mínimo ancho del input */
  minWidth?: string;
  ref?: HTMLInputElement | null;
  autoComplete?: "on" | "off";
  accept?: string;
  defaultValue?: string;
}