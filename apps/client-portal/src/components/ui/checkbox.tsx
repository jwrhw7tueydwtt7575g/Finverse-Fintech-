import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  description?: ReactNode;
}

export function Checkbox({ label, description, className, id, ...props }: CheckboxProps) {
  const checkboxId = id ?? props.name ?? undefined;

  return (
    <label className={cn(styles.checkbox, className)} htmlFor={checkboxId}>
      <input
        id={checkboxId}
        type="checkbox"
        className={styles.checkboxInput}
        {...props}
      />
      <span className={styles.box}>
        <span className={styles.checkmark} />
      </span>
      <span>
        {label}
        {description ? <span className={styles.description}>{description}</span> : null}
      </span>
    </label>
  );
}


