import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import styles from "./button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost" | "success" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={cn(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}


