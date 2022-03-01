import { InputHTMLAttributes } from "react";

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  labels: [string, string];
}
