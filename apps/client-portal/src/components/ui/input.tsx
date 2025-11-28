import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: ReactNode;
  inlineLabel?: ReactNode;
}

export function TextInput({ label, helperText, inlineLabel, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name ?? undefined;

  const control = (
    <input id={inputId} className={cn(styles.input, className)} autoComplete="off" {...props} />
  );

  if (inlineLabel) {
    return (
      <label className={styles.inline} htmlFor={inputId}>
        <span>{inlineLabel}</span>
        {control}
      </label>
    );
  }

  if (!label) {
    return control;
  }

  return (
    <label className={styles.label} htmlFor={inputId}>
      <span>{label}</span>
      {control}
      {helperText ? <span className={styles.helper}>{helperText}</span> : null}
    </label>
  );
}


