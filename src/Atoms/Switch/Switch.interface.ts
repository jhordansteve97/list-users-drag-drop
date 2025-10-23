

/**
 * Switch — Interruptor ON/OFF.
 */
export interface SwitchProps {
  id?: string;
  name?: string;
  label?: string;
  /** Estado actual del switch */
  checked?: boolean;
  /** Función que cambia el estado */
  onChange?: (value: boolean) => void;
  /** Define dónde se muestran las etiquetas */
  variant?: "both" | "left" | "right";
  labelLeft?: React.ReactNode;
  labelRight?: React.ReactNode;
  disabled?: boolean;
  color?: "primary" | "secondary";
  className?: string;
}
